<template>
  <!-- <v-app id="app">
    <v-navigation-drawer app>
      <router-link to="/">Create units and armies</router-link>
      <router-link to="/armies">Armies list</router-link>
      <router-link to="/units">Unit list</router-link>
      <router-link to="/test">test</router-link> -->
      <!-- <router-link to="/list">Navigate to the user list</router-link> -->
    <!-- </v-navigation-drawer>
    <router-view/>
  </v-app> -->

    <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      fixed
      app
    >
      <v-list-tile v-if="mini" @click.stop="mini = !mini">
        <v-list-tile-action>
          <v-icon>chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile v-if="!mini" @click.stop="mini = !mini">
        <v-list-tile-action>
          <v-icon>chevron_left</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-list dense>

        <v-tooltip bottom>
          <v-list-tile slot="activator" >
            <v-list-tile-action to="/armies-creation">
              <v-icon large color="blue darken-2">library_add</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/armies-creation" class="subheading">Create armies</router-link>
            </v-list-tile-content>
          </v-list-tile>
          <span>Create a brand new army list with existing units</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-list-tile  slot="activator">
            <v-list-tile-action>
              <v-icon large color="blue darken-2">library_books</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/armies" class="subheading">Armies lists</router-link>
            </v-list-tile-content>
          </v-list-tile>
          <span>List of created army lists. You can view, edit or remove them from here.</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-list-tile  slot="activator">
            <v-list-tile-action>
              <v-icon large color="blue darken-2">note_add</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/unit-creation" class="subheading">Unit creation</router-link>
            </v-list-tile-content>
          </v-list-tile>
          <span>Create a brand new unit pattern</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-list-tile  slot="activator">
            <v-list-tile-action>
              <v-icon large color="blue darken-2">description</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/units" class="subheading">Units list</router-link>
            </v-list-tile-content>
          </v-list-tile>
          <span>List of created units patterns, useful if you need to understand how the units are done</span>
        </v-tooltip>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Wh 40K AI :</v-toolbar-title>
    </v-toolbar>

    <router-view/>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
</v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      drawer: null,
      mini: false,
      right: null
    }),
    props: {
      source: String
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navigation-drawer{
  max-width: 200px;
}
a {
  color: #304d9c;
  text-decoration: none !important;
}
</style>
