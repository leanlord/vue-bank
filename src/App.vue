<template>
  <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import {useRoute} from 'vue-router';
import {computed} from "vue";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

export default {
  setup() {
    const route = useRoute();

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {
    MainLayout, AuthLayout
  }
}
</script>