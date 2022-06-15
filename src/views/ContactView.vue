<script setup lang="ts">
import ContactformVue from '../components/contactform.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="contact-body">
    <div class="contact-body-item left">
      <div class="app-title">
        <span>CONTACT</span>
        <span>ME</span>
      </div>
      <p>You want to contact me? <br> Simply write an email to <a
          href="mailto: contact@fabianschuster.net">contact@fabianschuster.net</a> or
        use the contact form on the right.</p>
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

a {
  color: var(--color-heading);
  text-decoration:solid;
}

a:hover {
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
}
</style>
