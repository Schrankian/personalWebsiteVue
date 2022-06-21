<script setup lang="ts">
defineProps<{
    r?: number;
    g?: number;
    b?: number;
    count?: String;
}>()
</script>



<template>
    <div class="cube">
        <div class="top">

        </div>
        <div>
            <span style="--i:0;">
                <h2>{{ count }}</h2>
                <h2>{{ count }}</h2>
            </span>
            <span style="--i:1;">
                <h2>{{ count }}</h2>
                <h2>{{ count }}</h2>
            </span>
            <span style="--i:2;">
                <h2>{{ count }}</h2>
                <h2>{{ count }}</h2>
            </span>
            <span style="--i:3;">
                <h2>{{ count }}</h2>
                <h2>{{ count }}</h2>
            </span>
        </div>
    </div>

</template>


<style scoped>






@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');

@import '@/assets/base.css';

.cube{
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 10s linear infinite;
}

@keyframes animate {
    0% {
        transform: rotateX(-30deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(-30deg) rotateY(360deg);
    }
}

.cube div{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.cube div span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#151515, rgb(v-bind(r), v-bind(g), v-bind(b)));
    transform: rotateY(calc(90deg*var(--i))) translateZ(149px);
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
}

.cube div span h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 10em;
    position: absolute;
    transform: translateZ(50px);
    user-select: none;
}

.cube div span h2:nth-child(1) {
    transform: translateZ(0px) translateY(20px);
    color: rgba(0, 0, 0, 0.1);
    filter: blur(5px);
}
.top {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: #222;
    transform: rotateX(90deg) translateZ(149px);

}

.top::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: rgb(v-bind(r),v-bind(g),v-bind(b));
    transform: translateZ(-380px);
    filter: blur(20px);
    box-shadow: 0 0 120px rgba(v-bind(r), v-bind(g), v-bind(b), 0.2),
    0 0 200px rgba(v-bind(r), v-bind(g), v-bind(b),0.4),
    0 0 300px rgba(v-bind(r), v-bind(g), v-bind(b),0.6),
    0 0 400px rgba(v-bind(r), v-bind(g), v-bind(b),0.8),
    0 0 500px rgba(v-bind(r), v-bind(g), v-bind(b),1);
}

</style>