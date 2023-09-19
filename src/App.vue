<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import "aos/dist/aos.css";
import AOS from "aos";
export default defineComponent({
  name: "App",
  mounted() {
    AOS.init();
  },
});
</script>
