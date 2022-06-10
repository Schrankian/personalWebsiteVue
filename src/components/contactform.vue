<template>
    <form action="https://formsubmit.co/contact@fabianschuster.net" method="POST">
        <input type="hidden" name="_subject" value="New submission!">
        <input type="hidden" name="_template" value="box">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://www.fabianschuster.net/contact">
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter your Name" required>
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your Email Adress" required>
        <label>Message</label>
        <textarea name="message" placeholder="Enter your Message"></textarea>
        <button type="submit">Send</button>
    </form>
</template>

<style scoped>
@import '@/assets/base.css';
input {
    width: 100%;
    border-radius: 4px;
    border: none;
    border-bottom: 2px solid white;
    background-color: var(--color-background-mute);
    color: white;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

input:focus {
    outline: black;
    border: 2px solid white;
}

textarea {
    width: 100%;
    height: 18rem;
    border-radius: 4px;
    border: none;
    border-bottom: 2px solid white;
    background-color: var(--color-background-mute);
    color: white;
    padding: 12px 20px;
    margin: 17px 0;
    box-sizing: border-box;
    resize: none;
}

textarea:focus {
    outline: black;
    border: 2px solid white;
}

::placeholder {
    color: white;
    opacity: 0.6;
}

button[type=submit] {
    background-color: orangered;
    border: none;
    border-radius: 4px;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
}

</style>
