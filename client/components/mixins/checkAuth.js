
const checkAuth = {
  created () {
    if (!Meteor.user()) {
      this.$router.push({ name: 'Login' })
    }
  },
  beforeRouteEnter(to, from, next) {
    Tracker.autorun(() => {
      if (!Meteor.loggingIn()) {

        if (Meteor.user()) {
          next()
        } else {
          next({name: 'Login'})
        }

      }
    })
  }
}

export default checkAuth
