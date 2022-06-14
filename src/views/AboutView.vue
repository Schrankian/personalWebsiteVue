<template>
  <div class="grid">
    <div class="about-layout">
      <h1 class="header">Hey, I'm Fabian Schuster</h1>
      <h4 class="header2">Path of Education:</h4>
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
                <p>I finished the Abitur at "Julius Ambrosius Hülße Gymnasium" with the final grade of 0.0 <br>
                  (Abitur is equivalent to A-level)</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">2022-Now</h3>
                <p>I started a dual study in Dresden, where I study at the "Berufsakademie" in Dresden and work at a
                  company called "Spektra"</p>
              </div>
            </div>
            <div class="card">
              <div class="info">
                <h3 class="title">Future</h3>
                <p>I am just at the beginning of my wonderful Journey of life. I completed the standard education and now
                  my Path is unique and
                  full of possibilities. It isn't possible to always make the right choice, but I hope I find a place in
                  this huge World, which
                  I enjoy living, so I don't have to regret anything.
                </p>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<style scoped>




@import '@/assets/base.css';


img {
  border-radius: 20%;
}

@media (min-width: 1024px) {
  .grid {
    padding-left: 250px;
    display: grid;
    grid-template-columns: 1fr 0.5fr;
  }
}

.about-layout {
  display: flex;
  flex-direction: column;
}

.header {
  padding-top: 3%;
  margin-bottom: 2%;
}

.header2 {
  padding-top: 1%;
  margin-bottom: 2%;
}

.row {
  display: flex;
  justify-content: space-between;
  padding-right: 8%;
}

.block {
  width: 50%;
}

/* TIMELINE*/
/* Timeline Container */
.timeline {
  padding: 20px;
}

/* Card container */
.card {
  position: relative;
  max-width: 700px;
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
  top: -0.5px;
  bottom: 0;
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
</style>
