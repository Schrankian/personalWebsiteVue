<template>
  <div class="display">
    <div class="card">
      <h1 class="heading">Wordle Clone</h1>
    </div>
    <div class="card">
      <h1 class="heading">Project 2</h1>
    </div>
  </div>
</template>

<style scoped>



@media (min-width: 1024px) {
  .display {
      padding-left: 250px;
  }
}

.display {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}

.card {
  display: flex;
  height: 200px;
  flex-direction: column;
  width: 85%;
  border: 1px solid white;
  border-radius: 12px;
  margin-bottom: 60px;
}

.heading {
  padding: 10px 20px;
}

</style>
