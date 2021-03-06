import axios from 'axios'
import Vue from 'vue'
import vuetifyToast from 'vuetify-toast'

export function onGet (api, data, pagination, searchTerm) {
  data.loading = true
  let apiUrl = api + '?page=' + pagination.page + '&page_size=' + pagination.rowsPerPage
  if (searchTerm) {
    apiUrl = apiUrl + '&search=' + searchTerm
  }
  if (pagination.sortBy) {
    const direction = pagination.descending ? '-' : ''
    apiUrl = apiUrl + '&ordering=' + direction + pagination.sortBy
  }
  if (data.current_id) {
    apiUrl = apiUrl + '&page_by_id=' + data.current_id
  }
  return axios.get(process.env.API_URL + apiUrl)
    .then(resp => {
      data.objects = resp.data.results
      data.totalObjects = resp.data.count
      // data.currentObject = {}
      // data.isSelected = false
      pagination.page = resp.data.page
      data.loading = false
    })
    .catch(err => {
      data.loading = false
      console.log(err)
      throw err
    })
}

export function onGetMax (api, name, data) {
  data.loading = true
  let apiUrl = api + '?page=1&page_size=1000'
  axios.get(process.env.API_URL + apiUrl)
    .then(resp => {
      data.loading = false
      Vue.set(data, name, resp.data.results)
    })
    .catch(err => {
      data.loading = false
      console.log(err)
      throw err
    })
}

export function onGetAll (api, name, data) {
  data.loading = true
  return axios.get(process.env.API_URL + api)
    .then(resp => {
      data.loading = false
      Vue.set(data, name, resp.data)
    })
    .catch(err => {
      data.loading = false
      console.log(err)
      throw err
    })
}

export function onPost (api, data, getFunction) {
  data.addDialogErrorMessage = ''
  return axios.post(process.env.API_URL + api, data.newObject)
    .then(resp => {
      data.loading = false
      data.addDialog = false
      vuetifyToast.success(Vue.i18n.translate('Success'), { icon: 'check_circle_outline' })
      if (getFunction) {
        getFunction()
      }
    })
    .catch(err => {
      if (err.response && err.response.data) {
        const errors = err.response.data
        for (const value in errors) {
          if (errors[value] instanceof Array) {
            data.addDialogErrorMessage = errors[value][0]
          } else {
            data.addDialogErrorMessage = errors[value]
          }
        }
        vuetifyToast.error(Vue.i18n.translate('Error'), { icon: 'highlight_off' })
        console.log(err.response.data)
      }
    })
}

export function onPut (api, data, getFunction) {
  data.editDialogErrorMessage = ''
  if (data.currentObject !== '') {
    axios.put(process.env.API_URL + api + data.currentObject.id + '/', data.currentObject)
      .then(resp => {
        data.loading = false
        data.currentObject = resp.data
        data.editDialog = false
        vuetifyToast.success(Vue.i18n.translate('Success'), { icon: 'check_circle_outline' })
        getFunction()
      })
      .catch(err => {
        console.log(err)
        if (err.response && err.response.data) {
          const errors = err.response.data
          for (const value in errors) {
            if (errors[value] instanceof Array) {
              data.editDialogErrorMessage = errors[value][0]
            } else {
              data.editDialogErrorMessage = errors[value]
            }
            vuetifyToast.error(Vue.i18n.translate('Error'), { icon: 'highlight_off' })
            console.log(err.response.data)
          }
        }
      })
  }
}

export function onDelete (api, data, getFunction) {
  data.deleteDialogErrorMessage = ''
  data.deleteDialog = false
  if (data.currentObject !== '') {
    return axios.delete(process.env.API_URL + api + data.currentObject.id + '/')
      .then(resp => {
        data.currentObject = {}
        data.isSelected = false
        vuetifyToast.success(Vue.i18n.translate('Success'), { icon: 'check_circle_outline' })
        if (getFunction) {
          getFunction()
        }
      })
      .catch(err => {
        console.log(err)
        vuetifyToast.error(Vue.i18n.translate('Error'), { icon: 'highlight_off' })
        if (err.response && err.response.data) {
          const errors = err.response.data
          for (const value in errors) {
            if (errors[value] instanceof Array) {
              data.deleteDialogErrorMessage = errors[value][0]
            } else {
              data.deleteDialogErrorMessage = errors[value]
            }
            console.log(err.response.data)
          }
        }
      })
  } else {
    throw Error('No object to delete')
  }
}

export function onGetCount (api, name, data) {
  data.loading = true
  axios.get(process.env.API_URL + api)
    .then(resp => {
      data[name] = resp.data.count
      data.loading = false
    })
    .catch(err => {
      data.loading = false
      console.log(err)
    })
}

export function onGetSingle (api, name, data) {
  data.errorMessage = ''
  if (data[name] && data[name].id) {
    data.loading = true
    return axios.get(process.env.API_URL + api + data[name].id + '/')
      .then(resp => {
        data.loading = false
        Vue.set(data, name, resp.data)
      })
      .catch(err => {
        console.log(err)
        if (err.response && err.response.data) {
          const errors = err.response.data
          for (const value in errors) {
            if (errors[value] instanceof Array) {
              data.errorMessage = errors[value][0]
            } else {
              data.errorMessage = errors[value]
            }
            console.log(err.response.data)
          }
        }
      })
  }
}

export function onPostSingle (api, data, getFunction) {
  data.errorMessage = ''
  return axios.post(process.env.API_URL + api, data.currentObject)
    .then(resp => {
      data.loading = false
      data.currentObject = resp.data
      vuetifyToast.success(Vue.i18n.translate('Success'), { icon: 'check_circle_outline' })
      if (getFunction) {
        getFunction()
      }
    })
    .catch((error) => {
      // Error
      vuetifyToast.error(Vue.i18n.translate('Error'), { icon: 'highlight_off' })
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        data.errorMessage = error.response.data
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        data.errorMessage = error.request
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        data.errorMessage = error.message
        console.log('Error', error.message)
      }
      throw error
    })
}

export function onPutSingle (api, data, getFunction) {
  data.errorMessage = ''
  if (data.currentObject !== '') {
    return axios.put(process.env.API_URL + api + data.currentObject.id + '/', data.currentObject)
      .then(resp => {
        data.loading = false
        data.currentObject = resp.data
        vuetifyToast.success(Vue.i18n.translate('Success'), { icon: 'check_circle_outline' })
        getFunction()
      })
      .catch((error) => {
        // Error
        vuetifyToast.error(Vue.i18n.translate('Error'), { icon: 'highlight_off' })
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          data.errorMessage = error.response.data
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          data.errorMessage = error.request
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          data.errorMessage = error.message
          console.log('Error', error.message)
        }
        throw error
      })
  } else {
    throw Error('No object to update')
  }
}
