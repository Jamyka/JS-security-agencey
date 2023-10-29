<template>
  <section
    id="contactUs"
    class="contact-us"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-easing="ease-in-out"
  >
    <div class="row flex justify-center q-mt-xl q-mb-lg">
      <section-title-component
        class="col-md-3 col-sm-12"
        :title="locale == 'en' ? 'Contact Us' : 'Contactez Nous'"
      />
    </div>
    <div class="row justify-center q-mt-xl">
      <div
        class="col-lg-3 col-md-6 col-sm-12 q-my-lg text-center contact-us-item"
      >
        4795,Boul.St Charles, Suite 104, Pierrefonds, QC, H9H 3C7
      </div>
      <div
        class="col-lg-3 col-md-6 col-sm-12 q-my-lg text-center contact-us-item"
      >
        <span>(514) 519-5844</span> <br />
        <span>(438) 875-0015</span> <br />
        <span>(514) 977-2515</span>
      </div>
      <div
        class="col-lg-3 col-md-6 col-sm-12 q-my-lg text-center contact-us-item"
      >
        Service @securalpha.com
      </div>
    </div>
  </section>
</template>
<script>
import SectionTitleComponent from "src/components/SectionTitleComponent.vue";
import { useI18n } from "vue-i18n";

export default {
  components: { SectionTitleComponent },
  setup() {
    const { locale, t } = useI18n({ useScope: "global" });
    return {
      locale,
    };
  },
};
</script>
