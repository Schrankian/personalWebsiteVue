<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  const now:Date = new Date();
  const birthDate:Date = new Date(2003,7,15);
  let age = now.getFullYear() - birthDate.getFullYear();
  const m = now.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById('output')!.innerHTML = String(age);
})
</script>

<template>
  <div class="grid">
    <div class="about-layout">
      <h1>Hey, I'm Fabian Schuster</h1>
      <p>
        I'm an <ins id="output">18</ins>-year-old enthusiastic student who
        enjoys every aspect of coding! One day I was
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
      <h2>My Skills:</h2>
      <div class="skills">
        <div class="col">
          <h3>Languages</h3>
          <div class="ps">
            <p>Dart</p>
            <p>C</p>
            <p>C#</p>
            <p>Python</p>
            <p>JavaScript</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>(Java)</p>
          </div>
        </div>
        <div class="divider" />
        <div class="col">
          <h3>Frameworks</h3>
          <div class="ps">
            <p>Vue.js</p>
            <p>Flutter</p>
          </div>
        </div>
        <div class="divider" />
        <div class="col">
          <h3>Other</h3>
          <div class="ps">
            <p>Git</p>
          </div>
        </div>
      </div>
      <h2>My Path of Education:</h2>
      <div class="row">
        <div class="timeline">
          <div class="outer">
            <div class="card">
              <div class="info">
                <h3 class="title">2010-2014</h3>
                <p>I attended the 95th elementary school "Caroline Neuber" in Dresden for 4 Years</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">2014-2022</h3>
                <p>I attended the "Julius Ambrosius Hülße Gymnasium" in Dresden for 8 Years</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">2022</h3>
                <p>I finished the Abitur at "Julius Ambrosius Hülße Gymnasium" with the final grade of 1.6 <br>
                  (Abitur is equivalent to A-level)</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">2022-Now</h3>
                <p>I started a dual study in Dresden, where I study at the "Berufsakademie" in Dresden and work at a
                  company called "SPEKTRA Schwingungstechnik und Akustik GmbH"</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Future</h3>
                <p>I am just at the beginning of my wonderful Journey of life. I completed the standard education and
                  now
                  my Path is unique and
                  full of possibilities. It isn't possible to always make the right choice, but I hope I find a place
                  in
                  this huge World, which
                  I enjoy living, so I don't have to regret anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow">
      <div class="picturecard">
        <div class="shape" />
        <img src="/personal-transparent.png">
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/base.css';

ins {
  text-decoration: none;
}

img {
  height: 100%;
  position: absolute;
}

.shadow {
  filter: drop-shadow(0px 15px 10px rgba(var(--color-accent-shadow), 0.35));
}

.picturecard {
  -webkit-clip-path:polygon(45% 89.2%, 47% 89.7%, 50% 90%, 53% 89.7%, 55% 89.2%,
                            97% 69%, 98.6% 68%, 99.4% 67%, 99.8% 66%, 100% 65%,
                            100% 0,
                            0 0,
                            0 65%, 0.2% 66%, 0.6% 67%, 1.4% 68%, 3% 69%);
  clip-path: polygon(45% 89.2%, 47% 89.7%, 50% 90%, 53% 89.7%, 55% 89.2%,
                     97% 69%, 98.6% 68%, 99.4% 67%, 99.8% 66%, 100% 65%,
                     100% 0,
                     0 0,
                     0 65%, 0.2% 66%, 0.6% 67%, 1.4% 68%, 3% 69%);

  width: 264px;
  height: 364px;
  margin-left: 14.7%;
}

.shape {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-clip-path: polygon(45% 89.2%, 47% 89.7%, 50% 90%, 53% 89.7%, 55% 89.2%,
      97% 69%, 98.6% 68%, 99.4% 67%, 99.8% 66%, 100% 65%,
      100% 40%, 99.8% 39%, 99.4% 38%, 98.6% 37%, 97% 36%,
      55% 15.8%, 53% 15.3%, 50% 15%, 47% 15.3%, 45% 15.8%,
      3% 36%, 1.4% 37%, 0.6% 38%, 0.2% 39%, 0 40%,
      0 65%, 0.2% 66%, 0.6% 67%, 1.4% 68%, 3% 69%);
  clip-path: polygon(45% 89.2%, 47% 89.7%, 50% 90%, 53% 89.7%, 55% 89.2%,
      97% 69%, 98.6% 68%, 99.4% 67%, 99.8% 66%, 100% 65%,
      100% 40%, 99.8% 39%, 99.4% 38%, 98.6% 37%, 97% 36%,
      55% 15.8%, 53% 15.3%, 50% 15%, 47% 15.3%, 45% 15.8%,
      3% 36%, 1.4% 37%, 0.6% 38%, 0.2% 39%, 0 40%,
      0 65%, 0.2% 66%, 0.6% 67%, 1.4% 68%, 3% 69%);
  background-color: var(--color-accent);
}

.about-layout {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

h1 {
  padding-top: 3%;
  margin-bottom: 2%;
  font-size: 4.3em;
  color: var(--color-heading);
}

.about-layout p {
  font-size: 1.4em;
}

h2 {
  padding-top: 7%;
  margin-bottom: 6%;
  font-size: 2.5em;
}

.row {
  display: flex;
  justify-content: space-between;
  padding-right: 8%;
}

/* TIMELINE*/
/* Card container */
.card {
  position: relative;
}

/* setting padding based on even or odd */
.card:nth-child(odd) {
  padding: 30px 0 30px 30px;
}

.card:nth-child(even) {
  padding: 30px 30px 30px 0;
}

/* Global ::before */
.card::before {
  content: "";
  position: absolute;
  width: 50%;
  border: solid var(--color-accent);
}

/* Setting the border of top, bottom, left */
.card:nth-child(odd)::before {
  left: 0px;
  top: -4.5px;
  bottom: -4.5px;
  border-width: 5px 0 5px 5px;
  border-radius: 50px 0 0 50px;
}

/* Setting the border of top, bottom, right */
.card:nth-child(even)::before {
  right: 0;
  top: 0;
  bottom: -1px;
  border-width: 5px 5px 5px 0;
  border-radius: 0 50px 50px 0;
}

/* Removing the border if it is the first card */
.card:first-child::before {
  border-top: 0;
  border-top-left-radius: 0;
}

/* Removing the border if it is the last card  and it's odd */
.card:last-child:nth-child(odd)::before {
  border-bottom: 0;
  border-bottom-left-radius: 0;
}

/* Removing the border if it is the last card  and it's even */
.card:last-child:nth-child(even)::before {
  border-bottom: 0;
  border-bottom-right-radius: 0;
}

/* Information about the timeline */
.info {
  display: flex;
  flex-direction: column;
  background: #333;
  color: var(--color-foreground);
  border-radius: 10px;
  padding: 10px;
}

/* Title of the card */
.title {
  color: var(--color-accent);
  position: relative;
}

/* Timeline dot  */
.title::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 999px;
  border: 3px solid var(--color-accent);
}

/* text right if the card is even  */
.card:nth-child(even)>.info>.title {
  text-align: right;
}

/* setting dot to the left if the card is odd */
.card:nth-child(odd)>.info>.title::before {
  left: -47px;
}

/* setting dot to the right if the card is odd */
.card:nth-child(even)>.info>.title::before {
  right: -47px;
}


.skills {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
}

/*.ps p::before {
  content: '';
    display: block;
    width: 7px;
    height: 7px;
    background: white;
    border-radius: 50%;
    top: 17px;
    left: -15px;
}
*/

.divider{
  display: block;
  width: 0.7px;
  background: white;
  border-radius: 100px;
}

@media (min-width: 1024px) {
  .grid {
    padding-left: 250px;
    display: grid;
    grid-template-columns: 1fr 0.5fr;
  }

  .picturecard {
    margin-top: 25%;
    margin-left: 35%;
  }

  .about-layout {
    padding: 0;
    padding-left: 30px;
  }

  .about-layout p {
    max-width: 35vw;
  }

  .picturecard {
    width: 480px;
    height: 663px;
  }

  .about-layout p {
    padding-left: 2%;
  }

  .card {
    max-width: 35vw;
  }

  .timeline {
    padding: 20px;
  }

  h1 {
    padding-top: 3%;
    margin-bottom: 2%;
    font-size: 3rem;
    color: var(--color-heading);
  }

  .about-layout p {
    font-size: 1.1em;
  }

  h2 {
    padding-top: 7%;
    margin-bottom: 6%;
    font-size: 1.7em;
  }
}
</style>
