<template>
  <div class="ecgi427">
    <h1>This is an EGCI427 page</h1>
    <p>{{ title }}</p>
    <p>{{ age * 2 }}</p>
    <p>{{ count }}</p>
    <p>{{ title.split(' ') }}</p>
    <p>{{ getFullName() }}</p>
    <p>{{ getFullName2('ABC', 'DEF') }}</p>
    <a v-bind:href="aurl">Vue.js</a>
    <button v-on:click.once="clickButton">Click</button>
    <button @click="clickButton">Click</button>
    <input @keyup.enter.space="clickButton" v-model="title" type="text">
    Title: {{ title }}
    <div v-html="html"></div>
    <input type="number" name="stock" id="stock" v-model="itemsInStock" value="15">
    <p v-if="itemsInStock > 10">{{ itemsInStock }} in stock</p>
    <p v-else-if="itemsInStock > 0"> Hurry up, there are just a few item left</p>
    <p v-else>Too bad, we're all out!</p>

    <p v-show="isNinja">Invisible</p>
    <p v-show="!isNinja">Visible</p>
    <button v-on:click="isNinja = !isNinja">Toggle</button>
    <h1>Movies</h1>
    <ul>
      <li v-for="title in movieTitles">{{ title }}</li>
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'EGCI427',
  data() {
    return {
      title: "hello world",
      age: 30,
      count: 0,
      firstName: 'Bob',
      lastName: 'Cat',
      aurl: "www.vuejs.org",
      html: "<h1>Hello</h1>",
      itemsInStock: 15,
      isNinja: true,
      movieTitles: ["ABC", "DEF", "GHI", "JKL"]
    }
  },
  mounted() {
    setInterval(()=>{this.count++;}, 100)
  },
  methods: {
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
    getFullName2: function(first, last) {
      return `${first} ${last}`
    },
    clickButton: function() {
      alert("Hello")
    }
  }
}

</script>
  
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
  