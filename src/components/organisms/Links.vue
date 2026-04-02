<script setup lang="ts">
import ArrowUpRight from "../atoms/ArrowUpRight.vue";
import EnvelopeSimple from "../atoms/EnvelopeSimple.vue";
import GithubLogo from "../atoms/GithubLogo.vue";
import InstagramLogo from "../atoms/InstagramLogo.vue";
import LinkedinLogo from "../atoms/LinkedinLogo.vue";

const links = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/lucas-carinhanha/",
    icon: LinkedinLogo,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/car1nhanha/",
    icon: InstagramLogo,
  },
  {
    title: "GitHub",
    link: "https://github.com/car1nhanha",
    icon: GithubLogo,
  },
  {
    title: "Email",
    link: "mailto:lucascarinhanha@gmail.com",
    icon: EnvelopeSimple,
  },
];
</script>

<template>
  <section class="links">
    <a class="link" v-for="(link, index) in links" :key="index" :href="link.link" target="_blank">
      <div class="link-content">
        <component :is="link.icon" :size="28" class="link-icon" />
        <span class="link-title">{{ link.title }}</span>
      </div>
      <ArrowUpRight :color="'var(--blue)'" :size="20" />
    </a>
  </section>
</template>

<style lang="css" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 400px;
}

@media screen and (max-width: 844px) {
  .links {
    width: 100%;
  }
}

.link {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 12px;
  width: 400px;

  background: var(--gray-400);
  border: 1.5px solid transparent;
  border-radius: 8px;

  text-decoration: none;
  color: var(--gray-100);
  transition: 0.3s;
}

@media screen and (max-width: 844px) {
  .link {
    width: 100%;
  }
}

.link:hover {
  border: 1.5px solid var(--blue);
}

.link-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

.link-content .link-icon {
  width: 28px;
  height: 28px;
  color: var(--gray-100);
  transition: color 0.3s ease;
}

.link:hover .link-icon {
  color: var(--blue);
}

.link-content .link-title {
  font-family: "Maven Pro";
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: var(--gray-200);
}
</style>
