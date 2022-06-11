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
  <div>
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
    display: flex;
    align-items: center;
    z-index: 1;
    background-color: var(--color-background);
    overflow-x: hidden;
    flex-wrap: wrap;
    align-content: center;
}

.sidebar a {
    padding-top: 20px;
    padding-left: 30px;
    text-decoration: none;
    font-size: 40px;
    color: var(--color-text);
    display: block;
    transition: 0.3s;
}

  .sidebar a:hover {
    color: orangered;
    padding-left: 50px;
  }

.sidebar a.router-link-exact-active {
  color: orangered;
}








@media (min-width: 1024px) {
  body {
    display: flex;
  }

  #app {
    display: grid;
    grid-template-columns: 250px 1fr;
    padding: 0 2rem;
  }
}
</style>
