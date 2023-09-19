<template>
  <!-- <q-page> -->
  <main-carousel />
  <about-us />
  <services-section />
  <contact-us />
  <!-- </q-page> -->
</template>

<script>
import { defineComponent } from "vue";
import MainCarousel from "./MainCarousel.vue";
import ServicesSection from "./ServicesSection.vue";
import AboutUs from "./AboutUs.vue";
import ContactUs from "./ContactUs.vue";

export default defineComponent({
  name: "IndexPage",
  components: { MainCarousel, AboutUs, ServicesSection, ContactUs },
});
</script>
