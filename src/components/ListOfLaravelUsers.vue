<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This computer is going to have some fun.</h2>

    <ul v-if="posts && posts.length">
      <li v-bind:key="post.email" v-for="post of posts">
        <p><strong>{{post.name}}</strong></p>
        <p>{{post.email}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-bind:key="error" v-for="error of errors">
        {{error.message}}
      </li>
    </ul>

    <router-link to="/">Navigate to main page</router-link>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'I am the computer',
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://192.168.1.64:8000/api/users`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
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
