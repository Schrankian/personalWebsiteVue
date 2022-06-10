<script setup lang="ts">
import Contactform from '../components/contactform.vue'
</script>

<template>
  <div class="contact-body">
    <div class="contact-body-item left">
      <div class="app-title">
        <span>CONTACT</span>
        <span>ME</span>
      </div>
      <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
    </div>
    <div class="contact-body-item">
      <Contactform/>
    </div>
  </div>
</template>

<style scoped>

.contact-body {
  display: flex;
}

.contact-body-item {
  flex: 1;
  padding: 50px;
}

.contact-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: orangered;
  font-size: 26px;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 35px;
  height: 4px;
  background: orangered;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}
</style>
