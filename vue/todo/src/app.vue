<template>
  <div id="app">
    <!-- <h1>{{title}}</h1> -->
    <h1 v-text="title"></h1>
    <!-- <h1 v-html="title"></h1> -->
    <input v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" :key="item.label" :class="{finished: item.isFinished}"
          v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <p>child tells me: {{ childWords }}</p>
    <component-a msgfromfater="you die!" v-on:child-tell-me-something='listenToMyBody'/>
  </div>
</template>

<script>
import Store from "./store";
import ComponentA from "./components/a";

export default {
  data() {
    return {
      title: "this is a todo list",
      items: Store.fetch(),
      newItem: "",
      childWords: ""
    };
  },

  components: {
    ComponentA
  },

  watch: {
    items: {
      handler: function(items) {
        Store.save(items);
      },
      deep: true
    }
  },

  methods: {
    toggleFinish(item) {
      item.isFinished = !item.isFinished;
    },

    addNew() {
      this.items.push({
        label: this.newItem,
        isFinished: false
      });

      this.newItem = "";
    },

    listenToMyBody(msg) {
      this.childWords = msg;
    }
  }
};
</script>

<style>
.finished {
  text-decoration: underline;
}

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
