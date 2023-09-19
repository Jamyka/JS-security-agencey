<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header-bg">
      <q-toolbar>
        <q-img
          src="/logo.svg"
          fit="contain"
          width="120px"
          height="120px"
          no-spinner
          loading="eager"
        />
        <q-space />
        <div class="q-pr-xl q-mr-xl" v-if="$q.screen.width > 768">
          <q-tabs no-caps class="text-negative nav-tabs">
            <q-route-tab
              v-for="(item, i) in navList"
              :key="i"
              :to="item.to"
              exact
              :label="item.label"
            />
            <q-btn
              :label="locale == 'fr' ? 'English' : 'France'"
              color="negative"
              rounded
              @click="switchLang"
            />
          </q-tabs>
        </div>
        <div v-if="$q.screen.width <= 768">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
            color="negative"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" bordered>
      <h6 class="text-negative text-center">
        <q-img
          src="/logo.svg"
          fit="contain"
          width="120px"
          height="120px"
          no-spinner
          loading="eager"
        />
        <br />
        JS <br />
        Agance de Securite
      </h6>
      <q-tabs no-caps vertical class="text-negative">
        <q-route-tab
          v-for="(item, i) in navList"
          :key="i"
          :to="item.to"
          exact
          :label="item.label"
        />
        <q-btn
          :label="locale == 'fr' ? 'France' : 'English'"
          color="negative"
          rounded
          @click="switchLang"
        />
      </q-tabs>
    </q-drawer>

    <div>
      <router-view />
    </div>
  </q-layout>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const router = useRouter();
    const { locale, t } = useI18n({ useScope: "global" });

    const navList = computed(() => [
      {
        label: t("Navbar.home"),
        to: "#mainCarousel",
      },
      {
        label: t("Navbar.about"),
        to: "#aboutUs",
      },
      {
        label: t("Navbar.services"),
        to: "#servicesSection",
      },
      {
        label: t("Navbar.contactUs"),
        to: "#contactUs",
      },
    ]);
    let sectionObserver = null;

    onMounted(() => {
      observeSections();
      console.log(navList);
    });

    const observeSections = () => {
      try {
        sectionObserver.disconnect();
      } catch (error) {}

      const options = {
        rootMargin: "5px 0px 0px 0px",
        threshold: 1,
      };
      sectionObserver = new IntersectionObserver(
        sectionObserverHandler,
        options
      );

      // Observe each section
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        sectionObserver.observe(section);
      });
    };

    const sectionObserverHandler = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Push sectionId to router here
          router.replace({ hash: `#${sectionId}` });
        }
      }
    };

    const switchLang = () => {
      if (locale.value == "en") locale.value = "fr";
      else locale.value = "en";
    };

    return {
      leftDrawerOpen,
      navList,
      locale,
      switchLang,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.header-bg {
  background-color: #ffffff3b;
  transition: all 250ms ease;
  &:hover {
    background-color: #fff;
  }
}
</style>
