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
              with Flutter, I already used Flutter in other unfinished Projects, so I had a little bit of experience
              which helped me a lot while coding it.
            </p>
            <div class="buttons">
              <RouterLink to="/projects/wordle">Try the Demo</RouterLink>
              <!--<a id="code" href="https://www.github.com/">Code</a>-->
              <div class="skills">
                <div class="col">
                  <h3>Language</h3>
                  <div class="ps">
                    <p>Dart</p>
                  </div>
                </div>
                <div class="divider" />
                <div class="col">
                  <h3>Framework</h3>
                  <div class="ps">
                    <p>Flutter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="project-box" id="website-portfolio">
            <h1>Website Portfolio</h1>
            <div class="image-box">
              <img src="/website/website_home.JPG">
            </div>
            <p>And of course this website, which introduced me to web development. Because it was the first time I
              developed for web, it was quite a
              difficult task, but I was able to gather a lot of knowledge along the way.
            </p>
            <div class="buttons">
              <a id="code" href="https://github.com/Schrankian/personalWebsiteVue" target="_blank">Code</a>
              <div class="skills">
                <div class="col">
                  <h3>Languages</h3>
                  <div class="ps">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>TypeScript</p>
                  </div>
                </div>
                <div class="divider" />
                <div class="col">
                  <h3>Framework</h3>
                  <div class="ps">
                    <p>Vue.js</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="project-box" id="connect-four">
            <h1>Connect four for Calculator</h1>
            <div class="image-box">
              <img src="/connect-four/game_init_1.jpeg">
              <img src="/connect-four/game_progress_1.jpeg">
              <img src="/connect-four/game_win_1.jpeg">
            </div>
            <p>
              This is my first ever project which is worth mentioning. It was quite a struggle to code something on a
              calculator, espacialy if there are
              nearly no tutorials. But somehow I got it working. I didn't want to use the programming language inside
              the Calculator, because it's really
              simple and full of bugs. That's why I decided to use the advanced Casio SDK for my project (which wasn't
              easy to find and understand). Another unfortunate thing
              was, that I had to Code it in C, which I never used before, so I had to learn it. As this was my first
              project, the code isn't very organized but
              it worked which is pretty awesome.
            </p>
            <div class="buttons">
              <a id="code" href="https://github.com/Schrankian/connect-four" target="_blank">Code</a>
              <div class="skills">
                <div class="col">
                  <h3>Languages</h3>
                  <div class="ps">
                    <p>C</p>
                  </div>
                </div>
                <div class="divider" />
                <div class="col">
                  <h3>SDK</h3>
                  <div class="ps">
                    <p>fx-9860G Casio SDK</p>
                  </div>
                </div>
              </div>
            </div>
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
  padding-left: 10%;
  padding-right: 10%;
  font-size: 1.3em;
}

.buttons {
  margin-top: 3%;
  padding-left: 12%;
  padding-right: 12%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.buttons a {
  margin-right: 5%;
  padding: 15px;
  text-decoration: none;
  background-color: grey;
  border-radius: 5px;
  font-size: 1.5em;
  color: white;
  height: fit-content;
}

#code{
  padding-left: 30px;
  padding-right: 30px;
}

.image-box {
  width: 100%;
  display: flex;
  justify-content:space-evenly;
  flex-direction: row;
  margin-bottom: 5%;
}

.image-box img {
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

#wordle-clone img{
  width: 17%;
}

#website-portfolio {
  background-color: var(--color-background-soft);
}

#website-portfolio h1 {
  color: #F8F8F8;
}

#website-portfolio img {
  width: 65%;
}

#website-portfolio::-webkit-scrollbar-track {
  background: var(--color-background-soft);
  border-radius: 8px;
}

#connect-four {
  background-color: var(--color-background-soft);
}

#connect-four h1 {
  color: #F8F8F8;
}

#connect-four::-webkit-scrollbar-track {
  background: var(--color-background-soft);
  border-radius: 8px;
}

#connect-four img {
  width: 27%;
}

.skills {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.col h3 {
  margin-bottom: 20px;
  font-weight: 650;
  font-size: 1.3em;
}

.ps p {
  margin-bottom: 10px;
  width: 120%;
}

.divider {
  display: block;
  width: 0.7px;
  background: white;
  border-radius: 100px;
}

</style>