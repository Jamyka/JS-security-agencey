<template>
  <section id="mainCarousel" class="mainCarousel--wrapper">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = false"
      class="mainCarousel"
    >
      <q-carousel-slide
        v-for="item in newSlidesItems"
        :key="item.id"
        :name="item.id"
        :img-src="item.img"
      >
        <div class="absolute-top-right cust-js text-weight-bold text-negative">
          JS
        </div>
        <div class="absolute-center custom-caption">
          <div class="text-weight-bold text-negative">
            {{ item.title }}
          </div>
          <div class="text-subtitle q-mt-md">{{ item.subTitle }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n({ useScope: "global" });
    const newSlidesItems = computed(() => [
      {
        id: 1,
        title: t(`MainSlider[0].title`),
        subTitle: t(`MainSlider[0].subTitle`),
        img: "/first_slide.jpg",
      },
      {
        id: 2,
        title: t(`MainSlider[1].title`),
        subTitle: t(`MainSlider[1].subTitle`),
        img: "/screens.jpg",
      },
      {
        id: 3,
        title: t(`MainSlider[2].title`),
        subTitle: t(`MainSlider[2].subTitle`),
        img: "/guard-2.jpeg",
      },
    ]);
    return {
      slide: ref(1),
      autoplay: ref(true),
      newSlidesItems,
    };
  },
};
</script>
