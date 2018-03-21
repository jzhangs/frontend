<template lang="html">
  <div>
    <vheader/>
    <mslider/>
    <ada/>
    <money/>
    <adb/>
    <finance/>
    <adc/>
    <vfooter cname="mfooter"/>
    <vnavbar/>
  </div>
</template>

<script>
import vheader from "../public/header.vue";
import vfooter from "../public/footer";
import vnavbar from "../public/navbar";
import mslider from "./mslider";
import ada from "./ada";
import adb from "./adb";
import adc from "./adc";
import money from "./money";
import finance from "./finance";

export default {
  components: {
    vheader,
    vfooter,
    vnavbar,
    mslider,
    ada,
    money,
    adb,
    finance,
    adc
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
