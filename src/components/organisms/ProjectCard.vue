<script setup lang="ts">
import Tag from "../atoms/Tag.vue";
import type { ProjectItens } from "./projectCard";

const items: ProjectItens[] = [
  {
    title: "Thoropa",
    description:
      "Encurtador de links fullstack com frontend em Vue 3 e backend em Go, com suporte a execução local e deploy em AWS Lambda.",
    img: "https://github.com/car1nhanha/thoropa/raw/main/screenshot.png",
    tags: ["VUE", "Go", "Vite", "TypeScript", "AWS", "AWS Lambda", "DynamoDB", "GitHub Actions"],
    link: "https://thoropa.vercel.app",
  },
  {
    title: "Amphiuma",
    description:
      "Um projeto fullstack para descobrir, listar e renderizar arquivos Markdown direto do GitHub, com frontend moderno e backend em Go.",
    img: "https://github.com/car1nhanha/amphiuma/raw/main/screenshot.png",
    tags: ["VUE", "Go", "Vite", "TypeScript", "AWS", "AWS Lambda", "GitHub Actions"],
    link: "https://amphiuma.vercel.app",
  },
  {
    title: "Triturus",
    description:
      "Portfólio pessoal em Vue 3 com Vite e TypeScript, com seção de apresentação, tags de tecnologias e cards de projetos, pronto para deploy estático na Vercel.",
    img: "https://github.com/car1nhanha/triturus/raw/main/screenshot.png",
    tags: ["VUE", "Vite", "TypeScript", "Vercel"],
    link: "https://triturus.vercel.app",
  },
  {
    title: "Plethodon",
    description:
      "Um projeto fullstack para criação de blogs pessoais fazendo importação de arquivos Markdown do GitHub.",
    img: "https://raw.githubusercontent.com/car1nhanha/car1nhanha/refs/heads/main/projetos/plethodon.png",
    tags: ["React", "Node.js", "Vite", "TypeScript", "GitHub Actions", "Vercel", "PostgreSQL"],
    link: "https://plethodon-frontend.vercel.app",
  },
];
</script>

<template>
  <section class="projects-cards">
    <a v-for="(item, index) in items" :key="index" class="project-card" :href="item.link" target="_blank">
      <img :src="item.img" :alt="`Project Image: ${item.title}`" class="project-image" />
      <div class="project-body">
        <div class="body-description">
          <h5 class="project-title">{{ item.title }}</h5>
          <p class="project-description">{{ item.description }}</p>
        </div>
        <div class="body-tags">
          <Tag v-for="(tag, index) in item.tags" :key="index" :title="tag" size="small" />
        </div>
      </div>
    </a>
  </section>
</template>

<style lang="css" scoped>
.projects-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  padding: 0;
  gap: 24px;

  width: 1040px;
  max-width: 100%;
}

@media screen and (max-width: 844px) {
  .projects-cards {
    grid-template-columns: 1fr;
  }
}

.project-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 16px;

  width: 508px;

  background: var(--gray-400);
  border: 1.5px solid transparent;

  border-radius: 12px;
  text-decoration: none;

  transition: 0.3s;
}

.project-card:hover {
  border: 1.5px solid var(--gray-300);
}

@media screen and (max-width: 844px) {
  .project-card {
    flex-direction: column;
    width: 100%;
  }
}

.project-image {
  width: 224px;
  height: 156px;

  background: var(--gray-500);
  border-radius: 8px;
  object-fit: cover;
}

@media screen and (max-width: 844px) {
  .project-image {
    width: 100%;
    height: auto;
  }
}

.project-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
  gap: 8px;
  flex: 1;
  align-self: stretch;
}

.body-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  margin: 0 auto;
}

.project-title {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: var(--gray-100);
}

.project-description {
  font-family: "Maven Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: var(--gray-200);
}

.body-tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
}
</style>
