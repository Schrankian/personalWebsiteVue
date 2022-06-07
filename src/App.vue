<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="sidebar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </div>
  <div class="maindisplay">
    <RouterView />
  </div>
</template>

<style>
@import '@/assets/base.css';

.maindisplay{
 height: 100%;
 width: 100%;
 padding-left: 300px;
}

.sidebar {
  height: 100%;
    width: 300px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: var(--color-background);
    overflow-x: hidden;
    padding-top: 20px;
}

.sidebar a {
    padding: 13px 8px 8px 60px;
    text-decoration: none;
    font-size: 30px;
    color: var(--color-text);
    display: block;
    transition: 0.3s;
}

@media (hover: hover) {
  a:hover {
    color: orangered;
  }
}

.sidebar a.router-link-exact-active {
  color: orangered;
}








@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
