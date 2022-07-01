<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="sidebar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </div>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

.sidebar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background);
    overflow-x: hidden;
    flex-wrap: wrap;
    align-content: center;
    z-index: 1;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.sidebar a {
    padding: 20px;
    text-decoration: none;
    font-size: 2.5rem;
    color: var(--color-text);
    display: block;
    transition: 0.3s;
}

  .sidebar a:hover {
    color: var(--color-accent);
  }

.sidebar a.router-link-exact-active {
  color: var(--color-accent);
}

@media (min-width: 1024px) {

  body {
      display: flex;
  }
    
  .sidebar {
    padding-left: 25px;
    justify-content: left;
    height: 100%;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
  }

  .sidebar a {
    padding: 0;
    padding-top: 20px;
    padding-left: 30px;
    display: block;
    transition: 0.3s;
  }

  .sidebar a:hover {
    padding-left: 50px;
  }

}
</style>
