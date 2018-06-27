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
                <h2>Create a new unit :</h2>

                <v-text-field
                  v-model="unitName"
                  label="Unit name : "
                  :rules="[v => !!v || 'Item is required']"
                  required
                ></v-text-field>

                <v-select
                  :items="armiesRef"
                  v-model="armySelected"
                  label="Select the unit's army :"
                  class="input-group--focused"
                  item-value=name
                  item-text=name
                >
                </v-select>      

                <v-select
                  :items="sizesRef"
                  v-model="sizeSelected"
                  label="Select the size of the unit :"
                  class="input-group--focused"
                  item-value=name
                  item-text=name
                >
                </v-select>

                <v-btn small color="info" @click="infoSize = !infoSize">Show more info about units sizes</v-btn>

                <v-dialog v-model="infoSize" max-width="500px">
                  <v-card>
                      <v-toolbar>
                        <v-toolbar-title>
                          Sizes info
                        </v-toolbar-title>
                      </v-toolbar>
                      <v-flex text-xs-center>
                        <v-card-text text-xs-center class="mb-1 pa-0">
                          Size of the unit is determined by the models composing the unit :
                        </v-card-text>
                      </v-flex>
                      <v-divider>
                      </v-divider>

                      <v-subheader>
                        Small
                      </v-subheader>
                      <v-card-text class="mb-1 pa-0">
                        Models with 1 or 2 hp
                      </v-card-text>
                      <v-divider>
                      </v-divider>

                      <v-subheader>
                        Medium
                      </v-subheader>
                      <v-card-text class="mb-1 pa-0">
                        Models with between 3 and 18 hp with toughtness less than 7
                      </v-card-text>
                      <v-divider>
                      </v-divider>

                      <v-subheader>
                        Heavy
                      </v-subheader>
                      <v-card-text class="mb-1 pa-0">
                        Models with between 3 and 18 hp with toughtness more than than 7
                      </v-card-text>
                      <v-divider>
                      </v-divider>

                      <v-subheader>
                        Super heavy
                      </v-subheader>
                      <v-card-text class="mb-1 pa-0">
                        Models with more than 18 hp.
                      </v-card-text>
                      <v-divider>
                      </v-divider>
                      
                    <v-flex text-xs-center>
                      <v-btn small color="info" @click="infoSize = !infoSize">hide info</v-btn>
                    </v-flex>
                  </v-card>
                </v-dialog>

                <v-select
                  :items="behaviourRef"
                  v-model="behaviourSelected"
                  label="Select the adequat behaviour of the unit :"
                  class="input-group--focused"
                  item-value=name
                  item-text=name
                >
                </v-select>

                <v-btn small color="info" @click="infoBehaviour = !infoBehaviour">Show more info about units behaviours</v-btn>

                <v-dialog v-model="infoBehaviour" max-width="500px">
                  <v-card>
                      <v-toolbar>
                        <v-toolbar-title>
                          Behaviour info
                        </v-toolbar-title>
                      </v-toolbar>
                      <v-flex text-xs-center>
                      <v-card-text class="mb-1 pa-0">
                        Behaviour of the unit is determined by the role of the unit on the battlefield :
                      </v-card-text>
                      </v-flex>
                      <v-divider>
                      </v-divider>
                      <v-subheader>
                        Tactical infantry
                      </v-subheader>
                      <v-card-text class="mb-1 pa-0">
                        Units that will try as much as possible to capture the objectives. They will shoot on Small units mostly. Mobile units with weapons capable of engaging large infantry formations can enter this category if needed.
                      </v-card-text>
                      <v-card-text class="mb-1 pa-0">
                        Examples : tactical marine squad, necron warriors...
                      </v-card-text>
                      <v-divider>
                      </v-divider>

                      <v-subheader>
                        Heavy support
                      </v-subheader>
                      <v-card-text class="mb-1 pa-0">
                        Units with big guns, will not move much and will avoid melee at any cost. They will shoot on Heavy units mostly. 
                        Even units with short range weapons could go here.
                      </v-card-text>
                      <v-card-text class="mb-1 pa-0">
                        Examples : devastator marine squad, xv88 broadsides, fire dragons...
                      </v-card-text>
                      <v-divider>
                      </v-divider>

                      <v-subheader>
                        Fast support
                      </v-subheader>
                      <v-card-text class="mb-1 pa-0">
                        Units with big guns but still very mobile. 
                        Fast attack or Elite units with more gunnery than assault capabilities can go here.
                      </v-card-text>
                      <v-card-text class="mb-1 pa-0">
                        Examples : XV104 Riptide, Falcon, Vyper, Land Speeder, flyers...
                      </v-card-text>
                      <v-divider>
                      </v-divider>

                      <v-subheader>
                        Assault
                      </v-subheader>
                      <v-card-text class="mb-1 pa-0">
                        Units dangerous in assault. 
                        Units that will likely rush to the enemy to engage in melee can go here.
                      </v-card-text>
                      <v-card-text class="mb-1 pa-0">
                        Examples : Raptors, Banshees, no tau unit ever except Farsight...
                      </v-card-text>
                      <v-divider>
                      </v-divider>

                      <v-subheader>
                        Transport
                      </v-subheader>
                      <v-card-text class="mb-1 pa-0">
                        Transport is a special additionnal rule for transport units.
                        Please refer to the actual documentation for more info about this.
                      </v-card-text>
                      <v-card-text class="mb-1 pa-0">
                        Examples : Chimera, Wave Serpent, Rhino...
                      </v-card-text>
                      <v-divider>
                      </v-divider>

                      <v-subheader>
                        Assist
                      </v-subheader>
                      <v-card-text class="mb-1 pa-0">
                        Assist is a special additionnal rule for assisting units.
                        Please refer to the actual documentation for more info about this.
                      </v-card-text>
                      <v-card-text class="mb-1 pa-0">
                        Examples : Crypteks, Etherals, Synapse creatures, Commissars...
                      </v-card-text>
                      <v-divider>
                      </v-divider>
                    <v-flex text-xs-center>
                      <v-btn small color="info" @click="infoBehaviour = !infoBehaviour">hide info</v-btn>
                    </v-flex>
                  </v-card>
                </v-dialog>

                <v-switch
                  :label="`Is a transport: ${transportSelected.toString()}`"
                  v-model="transportSelected"
                ></v-switch>

                <v-switch
                  :label="`Is an assist unit: ${assistSelected.toString()}`"
                  v-model="assistSelected"
                ></v-switch>

                <v-select
                  v-if="assistSelected" 
                  :items="behaviourRef"
                  v-model="behaviourAssistSelected"
                  label="Select the group the unit will assist :"
                  class="input-group--focused"
                  item-value=name
                  item-text=name
                >
                </v-select>

                <v-btn large color="success" :disabled="!unitName || armySelected.length === 0 || sizeSelected.length === 0 || behaviourSelected.length === 0" @click="addUnit">Add the unit</v-btn>
              </v-form>
              <v-alert v-model="unitAlert" type="success" dismissible>
                Unit created : {{unitName}}
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
  name: 'UnitCreation',
  data () {
    return {
        infoSize: false,
        infoBehaviour: false,
        unitAlert: false,
        drawer: null,
        unitName: '',
        behaviourSelected:'',
        armySelected:'',
        sizeSelected:'',
        transportSelected: false,
        assistSelected: false,
        behaviourAssistSelected:''
    }
  },
  firebase: {
    armiesRef: connection.ref('armies'),
    unitRef: connection.ref('units'),
    behaviourRef: connection.ref('behaviour'),
    sizesRef: connection.ref('sizes')
  },
  methods: {
    addUnit () {
      this.$firebaseRefs.unitRef.push({
        name: this.unitName,
        behaviour: this.behaviourSelected,
        size: this.sizeSelected,
        army: this.armySelected,
        isATransport : this.transportSelected,
        isASupport : this.assistSelected,
        SupportTarget: this.behaviourAssistSelected
      })
      this.AlertUnitPush();
    },
    AlertUnitPush: function (event) {
      this.unitAlert = !this.unitAlert;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
