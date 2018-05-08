<template>
    <div>
        <b-form>
            <div class="offset-3 col-sm-6">
                <b-form-group
                        label="Enter status:"
                        label-for="statis-message"
                >
                    <b-form-input
                            id="statis-message"
                            type="text"
                            v-model="statusMessage"
                            required
                            placeholder="Enter status message"
                    >
                    </b-form-input>
                </b-form-group>
                <div class="text-center">
                    <b-button type="submit" @click.prevent="saveStatus" variant="primary">Submit</b-button>
                </div>
            </div>
        </b-form>
        <div v-if="$subReady.statuses" style="margin-top: 10px;">
            <div class="list-group">
                <transition-group name="list">
                    <div
                        class="list-group-item"
                        v-for="(status, index) in statuses"
                        :key="index"
                    >
                        {{ status.message }}
                    </div>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script>
import checkAuth from './mixins/checkAuth'

export default {
  data: () => {
    return {
      statusMessage: ''
    }
  },
  methods: {
    saveStatus() {
      Meteor.call('insertStatus', {message: this.statusMessage})
    }
  },
  mixins: [checkAuth],
  meteor: {
    $subscribe: {
      'statuses': [],
    },
    statuses () {
      let result = Statuses.find({}, {limit: 10, sort: {created: 1}}).fetch()
      let statuses = []

      Object.keys(result).forEach((key) => {
        statuses[parseInt(key)] = result[key]
      })

      return result;
    },
  },
  name: 'Home'
}
</script>

<style scoped>
    .list-enter-active, .list-leave-active {
        transition: all .5s;
    }

    .list-enter {
        opacity: 0;
        transform: translateY(-30px);
    }
</style>
