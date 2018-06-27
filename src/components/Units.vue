<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            <ul class="unitList">
              <li v-bind:key="unit.name" v-for="unit in unitRef" >
                {{ unit.name }}
                {{ unit.army }}
                {{ unit.size }}
                {{ unit.behaviour }}
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
  name: 'Unit',
  data () {
    return {
    }
  },
  firebase: {
    unitRef: connection.ref('units')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
