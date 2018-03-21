<template lang="html">
  <div class="hello">
    <h1> {{ msg }}</h1>
    <h1> {{ msgfromfater }}</h1>
    <button @click="onClickMe">Open mouse!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello from component a"
    };
  },
  props: ["msgfromfater"],
  methods: {
    onClickMe() {
      console.log(this.msgfromfater);
      this.$emit('child-tell-me-something', this.msg);
    }
  },
  components: {}
};
</script>

<style lang="css" module>

</style>
