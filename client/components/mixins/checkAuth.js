
const checkAuth = {
  created () {
    if (!Meteor.user()) {
      this.$router.push({ name: 'Login' })
    }
  }
}

export default checkAuth
