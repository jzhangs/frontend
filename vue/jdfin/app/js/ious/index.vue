<template lang="html">
  <div>
    <vheader />
    <islider />
    <welfare />
    <service />
    <vfooter />
    <vnavbar />
  </div>
</template>

<script>
import vheader from "../public/header";
import vfooter from "../public/footer";
import vnavbar from "../public/navbar";
import islider from "./islider";
import welfare from "./welfare";
import service from "./service";

export default {
  data() {
    return {};
  },
  components: {
    vheader,
    vfooter,
    vnavbar,
    islider,
    welfare,
    service
  }
};
</script>
