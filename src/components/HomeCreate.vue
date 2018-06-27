<template>
    <div>
        <v-content>
        <v-container fluid fill-height>
            <v-layout
            justify-center
            align-center
            >
            <v-flex text-xs-center>


              <v-form ref="form" lazy-validation>
                <h2>Create a new army list :</h2>
                <v-text-field
                  v-model="armyName"
                  label="Army name : "
                  :rules="[v => !!v || 'Item is required']"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="armyDesc"
                  label="Army description : "
                  :rules="[v => !!v || 'Item is required']"
                  required
                >
                </v-text-field>
                <v-btn color="info" :disabled="!armyName || !armyDesc" @click="addArmyList">
                  Add Army list
                </v-btn>
              </v-form>
              <v-alert v-model="armyAlert" type="success" dismissible>
                Army list created : {{armyName}}
              </v-alert>

            </v-flex>
            </v-layout>
        </v-container>
        </v-content>
    </div>
</template>

<script>
import { connection } from '@/components/firebase.js'

export default {
  name: 'HomeCreate',
  data () {
    return {
        armyAlert: false,
        drawer: null,
        armyName: '',
        armyDesc: '',
    }
  },
  firebase: {
    armyListRef: connection.ref('armyList'),
    armiesRef: connection.ref('armies'),
    unitRef: connection.ref('units')
  },
  methods: {
    addArmyList () {
      this.$firebaseRefs.armyListRef.push({
        name: this.armyName,
        desc: this.armyDesc
      })
      this.AlertArmyPush();
    },
    AlertArmyPush: function (event) {
      this.armyAlert = !this.armyAlert;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  color: #304d9c;
  text-decoration: none !important;
}
</style>
