<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="header-bg">
      <q-toolbar>
        <div class="logo-container flex flex-center">
          <q-img
            src="/logo.png"
            fit="contain"
            width="80px"
            height="80px"
            no-spinner
            loading="eager"
            class="q-my-md q-mx-sm"
          />
          <span class="logo-title" v-if="$q.screen.width > 1024"
            >Agence de Sécurité</span
          >
        </div>
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
              :label="locale == 'fr' ? 'EN' : 'FR'"
              color="negative"
              rounded
              @click="switchLang"
              class="q-mx-md"
            />
          </q-tabs>
        </div>
        <div v-if="$q.screen.width <= 768" class="q-mx-md">
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
    <q-drawer v-model="leftDrawerOpen" bordered class="no-scroll">
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
        <div class="flex flex-center q-mt-md">
          <q-btn
            :label="locale == 'fr' ? 'EN' : 'FR'"
            color="negative"
            rounded
            @click="switchLang"
          />
        </div>
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
        to: "/#mainCarousel",
      },
      {
        label: t("Navbar.about"),
        to: "/#aboutUs",
      },
      {
        label: t("Navbar.services"),
        to: "/#servicesSection",
      },
      {
        label: t("Navbar.contactUs"),
        to: "/#contactUs",
      },
    ]);
    let sectionObserver = null;

    onMounted(() => {
      observeSections();
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

      leftDrawerOpen.value = false;
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
  background-color: #000;
  transition: all 250ms ease;
}
.logo-title {
  font-weight: bold;
  font-size: 32px;
  color: #bc1e2c;
  text-shadow: 3px 3px 6px rgba(233, 216, 0, 0.75);
}
</style>
