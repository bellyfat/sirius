<template>
  <div>
     <v-btn
       :id="field.name"
       v-if="(field.action !== 'edit' && field.action !== 'delete' && field.action !== 'detail') || selectedId"
       :color="field.color"
       :v-roles="field.roles"
       @click="getAction(field.action)">
       {{field.text | translate}}
     </v-btn>

  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: {},
    field: {}
  },
  data () {
    return {
      selectedId: '',
      object: {}
    }
  },
  created () {
    this.$bus.on('selectObject', this.onSelect)
    this.$bus.on('goBack', this.onBack)
  },
  beforeDestroy () {
    this.$bus.off('selectObject', this.onSelect)
    this.$bus.off('goBack', this.onBack)
  },
  methods: {
    getAction (action) {
      if (action === 'back') {
        this.$store.commit('setTableIndex', {
          resource: this.$route.params.resource,
          id: this.$route.params.id
        })

        this.$router.push('/' + this.$route.params.program + '/' + this.$route.params.resource + '/list')
      } else if (action === 'add') {
        let currentId = 0
        if (this.selectedId) {
          currentId = this.selectedId
        }
        this.$router.push('/' + this.$route.params.program + '/' + this.$route.params.resource + '/add/' + currentId)
      } else if (action === 'edit') {
        this.$router.push('/' + this.$route.params.program + '/' + this.$route.params.resource + '/edit/' + this.selectedId)
      } else if (action === 'delete') {
        this.$bus.emit('deleteObject', {})
      } else if (action === 'save') {
        this.$bus.emit('saveObject', this.selectedId)
      } else if (action === 'detail') {
        this.$router.push('/' + this.$route.params.program + '/' + this.$route.params.resource + '/detail/' + this.selectedId)
      } else if (action === 'appointmentsave') {
        this.$bus.emit('saveAppointment')
      } else if (action === 'leadsave') {
        this.$bus.emit('saveLead')
      } else if (action === 'clear_action') {
        this.$bus.emit('clearAction')
      } else if (action === 'begin_end_clear_action') {
        this.$bus.emit('beginEndClearAction')
      } else if (action === 'generate_action') {
        this.$bus.emit('generateAction')
      } else if (action === 'lead_to_disciple') {
        this.$bus.emit('leadToDisciple', this.$route.params.id)
      }
    },
    onSelect (data) {
      if (data) {
        this.selectedId = data.id
        this.object = data
      } else {
        this.selectedId = ''
        this.object = {}
      }
    },
    onBack () {
      if (this.field.action === 'save') {
        this.$store.commit('setTableIndex', {
          resource: this.$route.params.resource,
          id: this.$route.params.id
        })
        this.$router.push('/' + this.$route.params.program + '/' + this.$route.params.resource + '/list')
      }
    }
  }
}
</script>

<style scoped>

</style>
