<template lang="html">
  <panel title="极速借贷" :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{ name: 'home' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png" alt="">
      </router-link>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel';
export default {
  data() {
    return {

    }
  },
  components: {
    panel
  }
}
</script>

<style lang="scss" module>
@import "../../css/element";
.panel {
  @include panel;
  .content {
    padding-bottom: 40px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
