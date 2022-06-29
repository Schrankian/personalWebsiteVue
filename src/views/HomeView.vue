<script setup lang="ts">

import { RouterLink } from 'vue-router'

import Cube from '../components/cube.vue'

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
          <h1>About Me</h1>
          <p>
            Hey there, my name is Fabian Schuster. I'm a student who enjoys every aspect of coding! One day I was
            sitting bored in my math class in front of my graphics-calculator and thought "hmmm it would be cool to code
            my own program for it". So I read through the user manual and after a few hours I had my own first program
            and thought "this was fun!". Ever since that day, I have worked on different projects which only improved my
            love for coding and gave me valuable experience which will be useful for future projects. All this leads to
            my dual study of computer science, which i am currently attending. <br />
            I really enjoy the easy times of coding, where the solution is always straight forward, but I also love the
            times when I really have no idea and struggle to find a solution to my problem. There is just something
            about it, When you finally find a solution to that problem, sit back and look at the finished work,
            remembering the work which led to this outcome.
          </p>
          <RouterLink to="/about">Discover more ➜</RouterLink>
        </div>
        <div class="cubes">
          <Cube :r="63" :g="210" :b="32" text="About" />
        </div>
      </div>
      <div class="row">
        <div class="texts">
          <h1 id="project">My Projects</h1>
          <p id="project">
            I work on some small projects outside of school, because I really like the possibilities which programming
            gives me. It all started with small programs for my Calculator, but quickly developed to mobile- and
            web-development. I'm not quite skilled enough to code really mindblowing applications, but I gathered some
            experience along the way, which keeps adding to my knowledge and enables me to code even better ideas into
            fully functional programs. Want to learn more about my best projects?
          </p>
          <RouterLink to="/projects" id="project">Discover more ➜</RouterLink>
        </div>
        <div class="cubes">
          <Cube :r="199" :g="36" :b="177" text="Projects" />
        </div>
      </div>
      <div class="row">
        <div class="texts">
          <h1 id="contact">Contact Me</h1>
          <p id="contact">
            You want to get in touch with me, have an interesting project idea or just want to tell me something? Feel
            free to contact me and be sure that
            I at least read your message.
          </p>
          <RouterLink to="/contact" id="contact">Contact me ➜</RouterLink>
        </div>
        <div class="cubes">
          <Cube :r="255" :g="173" :b="0" text="Contact" />
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
  margin-bottom: 50px;
}

.texts p {
  font-size: 1.4em;
  margin-bottom: 20px;
}

.texts a {
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.5em;
  transition: 0.4s;
}

.texts a:hover {
  margin-left: 20px;
}

.texts #project::-moz-selection {
  background-color: rgba(var(--color-2), 0.5) !important; 
}

.texts #project::selection {
  background-color: rgba(var(--color-2), 0.5) !important;
}

.texts #contact::-moz-selection {
  background-color: rgba(var(--color-3), 0.5) !important;
}

.texts #contact::selection {
  background-color: rgba(var(--color-3), 0.5) !important;
}


.cubes {
  padding-left: 25%;
  margin-bottom: 250px;
}

.texts {
  padding: 0 7%;
  margin-bottom: 300px;
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
    margin-bottom: 320px;
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
