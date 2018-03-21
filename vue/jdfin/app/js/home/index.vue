<template lang="html">
  <div>
    <vheader></vheader>
    <hslider></hslider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
    <product></product>
    <life></life>
    <vfooter></vfooter>
    <vnavbar/>
  </div>
</template>

<script>
import vheader from "../public/header.vue";
import vfooter from "../public/footer";
import vnavbar from "../public/navbar";
import hslider from "./hslider";
import novice from "./novice";
import borrow from "./borrow";
import money from "./money";
import product from "./product";
import life from "./life";

export default {
  components: {
    vheader,
    hslider,
    novice,
    borrow,
    money,
    product,
    life,
    vfooter,
    vnavbar
  }
};
</script>

<style lang="scss" module>

</style>
