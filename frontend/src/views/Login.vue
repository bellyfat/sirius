<template>
  <Default>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6 mx-auto">

              <!-- form card login -->
              <div class="card rounded-0">
                <div class="card-header">
                  <h3 class="mb-0">{{'Login' | translate}}</h3>
                </div>
                <div class="card-body">
                  <form class="form-container" method="post" @submit.prevent="login">
                    <div class="form-group">

                      <input v-model="email" type="email" name="email" id="id_username" class="form-control"
                             placeholder="Email"
                             required autofocus/>

                    </div>

                    <div class="form-group">

                      <input v-model="password" type="password" name="password" class="form-control" id="id_password"
                             placeholder="Password"
                             required>

                    </div>
                    <div class="forgot">
                      <a v-on:click="goResetPassword()">{{'Lost password?' | translate}}</a>
                    </div>
                    <input type="hidden" name="next" value=""/>
                    <button type="submit" class="btn btn-primary btn-block">{{'Login' | translate}}</button>

                  </form>
                </div>
                <!--/card-block-->
              </div>
              <!-- /form card login -->
            </div>
          </div>
          <!--/row-->
        </div>
        <!--/col-->
      </div>
      <!--/row-->
    </div>
  </Default>
</template>

<script>
import router from '../router'
import Default from '../layouts/Default'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    },
    goResetPassword: function () {
      router.push({ name: 'resetPassword' })
    }
  },
  name: 'Login',
  components: {
    Default
  }

}
</script>

<style scoped>

</style>
