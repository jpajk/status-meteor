<template>
    <div v-if="messages.length" class="col-sm-6 offset-3">
        <div class="alert alert-info" v-if="messages">
            <div v-for="message in messages">{{ message.message }}</div>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'

  export default {
    name: 'AppMessages',
    computed: mapGetters([
      'messages'
    ])
  }
</script>
