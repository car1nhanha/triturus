<script setup lang="ts">
import Tag from "./components/atoms/Tag.vue";
import ProjectCard from "./components/organisms/ProjectCard.vue";
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="header-bio">
        <div class="container-image">
          <img
            src="https://avatars.githubusercontent.com/u/34972401?v=4"
            alt="Foto de perfil de Lucas Carinhanha"
            class="logo"
          />
        </div>
        <div class="bio-text">
          <div class="title">
            <h2 class="my-name">Opa! Meu nome é <span class="name">Lucas Carinhanha</span> e sou</h2>
            <h1 class="position">Desenvolvedor Full Stack</h1>
          </div>
          <p class="description">
            Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha
            paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
          </p>
        </div>
      </div>

      <div class="tags">
        <Tag size="large" title="Node.js" />
        <Tag size="large" title="Go" />
        <Tag size="large" title="TypeScript" />
        <Tag size="large" title="NestJS" />
        <Tag size="large" title="AWS" />
        <Tag size="large" title="AWS Lambda" />
        <Tag size="large" title="Amazon SQS" />
        <Tag size="large" title="PostgreSQL" />
        <Tag size="large" title="Docker" />
        <Tag size="large" title="MongoDB" />
      </div>
    </div>
  </header>

  <main class="main">
    <div class="main-header">
      <h4 class="my-works">Meus trabalhos</h4>
      <h3 class="see-my-works">Veja os projetos em destaque</h3>
    </div>

    <ProjectCard />
  </main>
</template>

<style lang="css">
@import url(./app.css);
</style>
