<template>
  <section
    id="servicesSection"
    class="servicesSection"
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
  >
    <div class="row flex justify-center q-mt-xl q-mb-lg">
      <section-title-component
        class="col-md-3 col-sm-12"
        title="Our Services"
      />
    </div>
    <div class="row justify-center">
      <div class="col-6 desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fuga
        qui, quo in magnam non doloremque, dicta at voluptatibus soluta maxime,
        rerum voluptatum. Dolorum facere dignissimos fugiat saepe commodi quae?
      </div>
    </div>
    <div class="row justify-evenly q-my-xl">
      <div
        v-for="(item, index) in sercviceItems"
        :key="index"
        class="col-lg-3 col-md-4 col-sm-6 col-xs-12 q-px-lg-sm q-px-md-lg q-px-sm-md q-py-md text-center"
      >
        <div class="service--card full-height">
          <blurry-img-component width="100%" height="224px" :image="item.img" />
          <div class="content-container">
            <div class="test">
              <div class="service__title">{{ item.title }}</div>
              <div class="service__desc">{{ item.subTitle }}</div>
            </div>
            <div class="btn-wrapper">
              <q-btn
                color="negative"
                label="Read More"
                @click="$router.push(`/service/${item.id}`)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SectionTitleComponent from "src/components/SectionTitleComponent.vue";
import { computed } from "vue";
import BlurryImgComponent from "src/components/BlurryImgComponent.vue";
import { useI18n } from "vue-i18n";

export default {
  components: { SectionTitleComponent, BlurryImgComponent },
  setup() {
    const { t } = useI18n({ useScope: "global" });
    const sercviceItems = computed(() => [
      {
        id: 1,
        img: "/guard-1.jpg",
        title: t(`ServicesList[0].title`),
        subTitle: t(`ServicesList[0].subTitle`),
      },
      {
        id: 2,
        img: "/guard-3.jpg",
        title: t(`ServicesList[1].title`),
        subTitle: t(`ServicesList[1].subTitle`),
      },
      {
        id: 3,
        img: "/cams-1.webp",
        title: t(`ServicesList[2].title`),
        subTitle: t(`ServicesList[2].subTitle`),
      },
    ]);
    return {
      sercviceItems,
    };
  },
};
</script>
