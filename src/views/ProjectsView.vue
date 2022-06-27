<script lang="ts">
import '@splidejs/vue-splide/css/sea-green';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import { defineComponent} from 'vue';
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'Projects',
  components: {
    Splide,
    SplideSlide,
    SplideTrack,
  },
  setup() {
    const options = {
      type: 'loop',
      gap: '4rem',
      height: '90vh',
      padding: {left: '12vw', right: '12vw'},
      breakpoints: {
        640: {
          padding: { left: 0, right: 0 },
          arrows: false,
        },
      },
    };
    return {
      options,
    }
  },
});
</script>



<template>
  <div class="wrapper">
    <Splide aria-labelledby="project-slider" :options="options" :has-track="false">
      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev"><svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" />
          </svg>
        </button>
        <button class="splide__arrow splide__arrow--next"><svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" />
          </svg>
        </button>
      </div>
      <SplideTrack>
        <SplideSlide>
          <div class="project-box" id="wordle-clone">
            <h1>Wordle Clone</h1>
            <div class="image-box">
              <img src="/wordle/main_menu.jpeg">
              <img src="/wordle/game_finish.jpeg">
              <img src="/wordle/settings.jpeg">
              <img src="/wordle/stats.jpeg">
            </div>
            <p>This is my first mobile project which I finished. Originally I developed it for mobile, but thanks to
              Flutter, I'm able to provide an online version on my website (Please keep in mind that it's originally
              developed for mobile, so it might not be fully responsive). Even though this was my first finished Project
              with Flutter, I had already used Flutter in other unfinished Projects, so I had a little bit of experience
              which helped me a lot while coding it.
            </p>
            <div class="buttons">
              <RouterLink to="/projects/wordle">Try the Demo</RouterLink>
              <!--<a id="code" href="https://www.github.com/">Code</a>-->
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="project-box">
            <h1>Website Portfolio</h1>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="project-box">
            <h1>4-Wins for Calculator</h1>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="project-box">
            <h1>Demo Project 4</h1>
          </div>
        </SplideSlide>
      </SplideTrack>
      <ul class="splide__pagination" />
    </Splide>
  </div>
</template>


<style scoped>









.splide__arrow {
  position: absolute;
  top: 45vh;
}

.splide__arrow--prev {
  left: 5vw;
}

.splide__arrow--next {
  right: 5vw;
}

.splide__arrows{
  z-index: 2;
  filter: invert(49%) sepia(99%) saturate(453%) hue-rotate(63deg) brightness(101%) contrast(85%);
  transition: 0.3s;
}

.splide__arrows:hover {
  filter: invert(49%) sepia(99%) saturate(453%) hue-rotate(63deg) brightness(101%) contrast(160%);
}

.splide__pagination is-active{
  filter: invert(49%) sepia(99%) saturate(453%) hue-rotate(63deg) brightness(101%) contrast(85%);
}

.wrapper {
  overflow: none;
  position: relative;
  width: 98vw;
}

@media (min-width: 1024px){
  .wrapper {
      padding-left: 250px;
    }
}


.project-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: grey;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.project-box h1 {
  padding-top: 1%;
  font-size: 3.5rem;
  margin-bottom: 2%;
}

.project-box p {
  padding-left: 47px;
  padding-right: 47px;
  font-size: 1.3em;
}

.buttons {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 12%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
}

.buttons a {
  margin-right: 70px;
  padding: 15px;
  text-decoration: none;
  background-color: grey;
  border-radius: 5px;
  font-size: 1.5em;
  color: white;
}

#code{
  padding-left: 30px;
  padding-right: 30px;
}

.image-box {
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 5%;
}

.image-box img {
  margin-left: 2%;
  margin-right: 2%;
  border: solid 2px grey;
}


#wordle-clone{
  background-color: #303030;
}

#wordle-clone h1 {
  color: #F8F8F8;
}

#wordle-clone::-webkit-scrollbar-track {
  background: #303030;
  border-radius: 8px;
}

</style>