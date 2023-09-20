<template>
  <section id="aboutUs" class="about-us--wrapper row wrap">
    <!--
        data-aos="fade-left"
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
   -->
    <div
      class="col-lg-6 col-md-6 col-sm-12 row no-wrap q-px-sm q-py-xl"
      v-for="(item, index) in aboutusList"
      :key="item.id"
      :class="index % 2 === 0 ? 'bg-grey-2' : 'bg-grey-4'"
    >
      <div class="col-3 text-center">
        <q-img width="58px" fit="contain" :src="item.icon" />
      </div>
      <div class="content-wrapper col-9 q-px-sm">
        <div class="text-h5">{{ item.title }}</div>
        <div class="text-justify q-pr-lg">{{ item.subTitle }}</div>
      </div>
    </div>
  </section>
</template>
<script>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n({ useScope: "global" });
    const aboutusList = computed(() => [
      {
        id: 1,
        icon: "/security-guard.svg",
        title: t(`AboutUs[0].title`),
        subTitle: t(`AboutUs[0].subTitle`),
      },
      {
        id: 2,
        icon: "/motivated-guards.svg",
        title: t(`AboutUs[1].title`),
        subTitle: t(`AboutUs[1].subTitle`),
      },
    ]);
    return {
      aboutusList,
    };
  },
};
</script>
