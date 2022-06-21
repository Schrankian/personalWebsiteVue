<script setup lang="ts">
import Cube from '../components/cube.vue'

window.onscroll = function  () {
  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    document.getElementById("drop1")!.setAttribute("style", "position: fixed; top: 5vh; right: -14vw;");
  }else{  
    document.getElementById("drop1")!.setAttribute("style", "position: absolut; top: 5vh; right: -14vw;");
  }
}

</script>


<template>
  <div class="home">
    <div class="glow">
      <h1>Fabian</h1>
      <h1>Schuster</h1>
    </div>
    <a href="#section">
      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </a>
    <div class="main-space" id="section">
      <div class="row">
        <div class="texts">
          <h1>Demo Text</h1>
          <p>Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
          </p>
        </div>
        <div class="cubes">
          <Cube :r="63" :g="210" :b="32" count="01" />
        </div>
      </div>
      <div class="row">
        <div class="texts">
          <h1>Demo Text</h1>
          <p>Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
          </p>
        </div>
        <div class="cubes">
          <Cube :r="199" :g="36" :b="177" count="02" />
        </div>
      </div>
      <div class="row">
        <div class="texts">
          <h1>Demo Text</h1>
          <p>Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo
            text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text
            . Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
            Demo text. Demo text. Demo text. Demo text. Demo text. Demo text. Demo text.
          </p>
        </div>
        <div class="cubes">
          <Cube :r="255" :g="173" :b="0" count="03" />
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>












@import '@/assets/base.css';
.home {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  width: 98.9vw;
  min-height: 100vh;
  align-items: center;
}

.glow {
  margin-left: 50px;
  margin-top: 10vh;
  height: 64vh;
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

.arrows {
  width: 60px;
  height: 8vh;
  margin-top: 9vh;
  margin-bottom: 9vh;
  cursor: pointer;
}

.arrows path {
  stroke: var(--color-accent);
  fill: transparent;
  stroke-width: 3px;
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite;
}

@keyframes arrow {
  0% {
    opacity: 0
  }

  40% {
    opacity: 1
  }

  80% {
    opacity: 0
  }

  100% {
    opacity: 0
  }
}

@-webkit-keyframes arrow

  {
  0% {
    opacity: 0
  }

  40% {
    opacity: 1
  }

  80% {
    opacity: 0
  }

  100% {
    opacity: 0
  }
}

.arrows path.a1 {
  animation-delay: -1s;
  -webkit-animation-delay: -1s;
}

.arrows path.a2 {
  animation-delay: -0.5s;
  -webkit-animation-delay: -0.5s;
}

.arrows path.a3 {
  animation-delay: 0s;
  -webkit-animation-delay: 0s;
}

.main-space {
  overflow: none;
  width: 100vw;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}


.texts h1 {
  font-size: 6rem;
  font-weight: bold;
  color: var(--color-heading);
  margin-bottom: 30px;
}

.texts p {
  font-size: 1rem;
  margin-bottom: 200px;
}

.cubes {
  padding-left: 25%;
  margin-bottom: 300px;
}

.texts {
  padding: 0 7%;
}

@media (min-width: 1024px) {
  .row {
      overflow: none;
      width: 100%;
      display: flex;
      flex-direction: row;
    }

  .cubes {
    padding: 0;
    margin: 0;
    margin-left: 250px;
    padding-right: 100px;
    padding-top: 240px;
  }

  .texts {
    padding: 0;
    padding-left: 70px;
    margin-top: 30px;
    width: 50%;
  }

  .main-space {
    padding-left: 260px;
  }

}

</style>
