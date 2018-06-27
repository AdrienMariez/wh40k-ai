<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            <ul class="armyList">
              <li v-bind:key="army.name" v-for="army in armyListRef" >
              {{ army.name }}
              </li>
            </ul>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { connection } from '@/components/firebase.js'

export default {
  name: 'Armies',
  data () {
    return {
      army: ''
    }
  },
  firebase: {
    armyListRef: connection.ref('armyList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
