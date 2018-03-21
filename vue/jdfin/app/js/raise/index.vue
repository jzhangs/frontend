<template lang="html">
  <div>
    <vheader/>
    <rslider/>
    <daily/>
    <ingoods/>
    <more/>
    <vfooter cname="mfooter"/>
    <vnavbar/>
  </div>
</template>

<script>
import vheader from "../public/header.vue";
import vfooter from "../public/footer";
import vnavbar from "../public/navbar";
import rslider from "./rslider";
import daily from "./daily";
import ingoods from "./ingoods";
import more from "./more";

export default {
  components: {
    vheader,
    vfooter,
    vnavbar,
    rslider,
    daily,
    ingoods,
    more
  }
};
</script>

<style lang="scss">
.mfooter {
  margin-top: 0 !important;
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>
