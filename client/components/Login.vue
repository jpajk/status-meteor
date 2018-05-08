<template>
    <div class="col-sm-6 offset-3">
        <h2 class="text-center">Login or register</h2>
        <b-form>
            <b-form-group
                    label="Email:"
                    label-for="email-input"
            >
            <b-form-input
                    id="email-input"
                    type="email"
                    v-model="email"
                    required
                    placeholder="Enter email"
                >
            </b-form-input>
            </b-form-group>
            <b-form-group
                    label="Password:"
                    label-for="password-input"
            >
                <b-form-input
                        id="password-input"
                        type="password"
                        v-model="password"
                        required
                        placeholder="Enter password"
                >
                </b-form-input>
            </b-form-group>
            <div class="text-right">
                <b-button type="submit" @click.prevent="loginOrRegister" variant="primary">Submit</b-button>
                <b-button type="reset" variant="warning">I forgot my password</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginOrRegister () {

      Meteor.loginWithPassword({username: this.email}, this.password, (err) => {
        if (err) {

          if (err.error === 403) {
            Accounts.createUser({
              username: this.email, password: this.password
            }, (err)  => {
                this.relayMessage(err)
            })
          } else {
            this.relayMessage(err)
          }

          return
        }

        this.$router.push({name: 'Home'})
      });
    },
    relayMessage(err) {
      this.$store.dispatch('relayMessage', {type: 'error', message: err.message})
    }
  }
}
</script>

<style scoped>

</style>
