<template>
    <form action="https://formsubmit.co/contact@fabianschuster.net" method="POST">
        <input type="hidden" name="_subject" value="New submission!">
        <input type="hidden" name="_template" value="box">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.fabianschuster.net/contact">
        <input type="text" name="name" placeholder="Enter your Name" required>
        <input type="email" name="email" placeholder="Enter your Email Adress" required>
        <textarea name="message" placeholder="Details of your problem"></textarea>
        <button type="submit">Send</button>
    </form>
</template>

<style scoped>

</style>
