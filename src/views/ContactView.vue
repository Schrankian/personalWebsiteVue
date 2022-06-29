<script setup lang="ts">
import ContactformVue from '../components/contactform.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="contact-body">
    <div class="contact-body-item left">
      <div class="app-title">
        <span>CONTACT</span>
        <span style="margin-top: -23px;">ME</span>
      </div>
      <p>You want to contact me? <br> Simply write an email to <a class="mail"
          href="mailto: contact@fabianschuster.net">contact@fabianschuster.net</a> or
        use the contact form.</p>
      <div class="icon-row">
        <a class="icon" id="github" href="https://github.com/Schrankian" target="_blank" />
        <a class="icon" id="twitter" href="https://twitter.com/schrankian" target="_blank" />
        <a class="icon" id="linkedin" href="https://www.linkedin.com/in/fabian-schuster-989077194/" target="_blank"/>
      </div>
      <RouterLink class="app-contact" to="/privacy-policy">Privacy Policy</RouterLink>
    </div>
    <div class="contact-body-item right">
      <ContactformVue />
    </div>
  </div>

</template>

<style scoped>




















@import '@/assets/base.css';

p {
  padding-top: 15%;
  font-size: 25px;
}

.mail {
  color: var(--color-heading);
  text-decoration:solid;
}

.mail:hover {
  color: grey;
}

@media (min-width: 1024px) {
.contact-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-right: 5%;
  padding-left: 250px;
  height: 100%;
}
}

.contact-body-item {
  flex: 1;
  padding: 50px;
}

.contact-body-item.left {
  display: flex;
  flex-direction: column;
}

.contact-body-item.right {
  display: flex;
  align-items: center;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--color-accent);
  font-size: 70px;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100px;
  height: 4px;
  background: var(--color-accent);
}

.app-contact {
  width: fit-content;
  margin-top: auto;
  font-size: 8px;
  color: #888;
  color: var(--color-heading);
  text-decoration: solid;
}
.app-contact:hover {
  color: grey;
}

.icon-row {
  display: flex;
  flex-direction: row;
  padding-top: 10%;
  padding-left: 5%;
  margin-bottom: 20%;
}

.icon {
  text-decoration: none;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: rgb(211, 211, 211);
  margin-right: 10%;
  transition: 0.2s;
  box-shadow: 15px 15px 30px #111111,
      -15px -15px 30px #1f1f1f;
}

.icon:hover{
  background-color: var(--color-background);
  box-shadow: inset 5px 5px 10px #0e0e0e,
      inset -5px -5px 10px #222222;
}

#github {
  background-image: url('/icons/GitHub-Mark-64px.png');
  background-repeat: no-repeat;
  background-position: center;
}

#github:hover {
  background-image: url('/icons/GitHub-Mark-Light-64px.png');
  background-repeat: no-repeat;
  background-position: center;
}

#twitter {
  background-image: url('/icons/2021 Twitter logo - black.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 59px;
}

#twitter:hover {
  background-image: url('/icons/2021 Twitter logo - white.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 59px;
}

#linkedin {
  background-image: url('/icons/Linkedin-icon-black.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 59px;
}

#linkedin:hover {
  background-image: url('/icons/linkedin-logo-white.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 59px;
}
</style>
