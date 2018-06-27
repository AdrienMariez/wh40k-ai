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

                <!-- select faction -->
                <v-select
                  :items="armiesRef"
                  v-model="armySelected"
                  label="Select the unit's army :"
                  class="input-group--focused"
                  item-value=name
                  item-text=name
                >
                </v-select>

                <!-- btn add units -->
                <v-card-text style="height: 100px; position: relative">
                  <v-btn
                    absolute
                    dark
                    fab
                    center
                    color="blue"
                    @click="addUnit"
                  >
                    <v-icon>add</v-icon>
                  </v-btn>
                </v-card-text>

                <v-list>
                  <v-list-tile v-bind:key="each" v-for="each in UnitsCount">
                    <!-- {{ each }} -->
                    <!-- v-model="armySelected" -->
                    <v-select
                      :items="filteredData"
                      :disabled="!armySelected"
                      label="Select the unit :"
                      class="input-group--focused"
                      item-value=name
                      item-text=name
                    >
                    </v-select>
                  </v-list-tile>
                </v-list>

                <!-- input army name -->
                <v-text-field
                  v-model="armyName"
                  label="Army name : "
                  :disabled="!armySelected"
                  :rules="[v => !!v || 'Item is required']"
                  required
                ></v-text-field>

                <!-- input army description -->
                <v-text-field
                  v-model="armyDesc"
                  label="Army description : "
                  :disabled="!armyName"
                  :rules="[v => !!v || 'Item is required']"
                  required
                >
                </v-text-field>

                <!-- btn push army -->
                <v-btn color="info" :disabled="!armySelected || !armyName || !armyDesc" @click="addArmyList">
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
  name: 'ArmiesCreation',
  data () {
    return {
        armyAlert: false,
        drawer: null,
        armyName: '',
        armyDesc: '',
        armySelected: '',
        UnitsCount: 0,
        unitSelected: '',
        items: {
          unitFiltered: null,
        }
    }
  },
  firebase: {
    armyListRef: connection.ref('armyList'),
    armiesRef: connection.ref('armies'),
    unitRef: connection.ref('units')
  },
  methods: {
    addUnit (){
      this.UnitsCount++
    },
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
  },
  computed: {
    filteredData() {
			let options = this.unitRef
      return options.filter(o => o.army == this.armySelected)
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
