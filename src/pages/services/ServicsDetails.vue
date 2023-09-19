<template>
  <div class="service--details">
    <blurry-img-component width="100%" height="50vh" :image="serviceItem.img" />
    <div class="content">
      <div class="title">{{ serviceItem.title }}</div>
      <div class="desc">{{ serviceItem.desc }}</div>
      <ul v-if="serviceItem.prosList && serviceItem.prosList.length > 0">
        <li v-for="(item, i) in serviceItem.prosList" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BlurryImgComponent from "src/components/BlurryImgComponent.vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

export default {
  components: { BlurryImgComponent },
  setup() {
    const { t } = useI18n({ useScope: "global" });
    const route = useRoute();
    const id = route.params.id;
    const serviceItem = computed(() => {
      if (id == 1) {
        return {
          id: 1,
          img: "/guard-1.jpg",
          title: t(`SecurityGuard.title`),
          desc: t(`SecurityGuard.desc`),
          prosList: t(`SecurityGuard.prosList`).split(","),
        };
      } else if (id == 2) {
        return {
          id: 2,
          img: "/guard-3.jpg",
          title: t(`SecurityPatrol.title`),
          desc: t(`SecurityPatrol.desc`),
          prosList: t(`SecurityPatrol.prosList`).split(","),
        };
      } else if (id == 3) {
        return {
          id: 3,
          img: "/cams-1.webp",
          title: t(`SurveillanceCameras.title`),
          desc: t(`SurveillanceCameras.desc`),
        };
      } else {
        return "";
      }
    });
    return {
      serviceItem,
    };
  },
};
</script>
