<template>
  <div class="home">
    <div class="glow">
      <h1 id="fabian">Fabian</h1>
      <h1 id="schuster">Schuster</h1>
    </div>
  </div>
</template>

<style scoped>









@import '@/assets/base.css';
.home {
  padding-left: 50px;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.glow {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 6rem;
  color: rgb(68, 68, 68);
  transition: 0.7s ease-out;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.glow:hover {
  color: #fff;
    text-shadow: 0 0 5px var(--color-accent),
      0 0 25px var(--color-accent),
      0 0 50px var(--color-accent),
      0 0 100px var(--color-accent);
}


</style>
