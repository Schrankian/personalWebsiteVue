<template>
    <div class="loading">
        <div class="loader">
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/base.css';
.loading {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 4;
    background-color: var(--color-background);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
    position: absolute;
    top: 34%;
    left: 42%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    perspective: 800px;
}

.inner {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.inner.one {
    left: 0%;
    top: 0%;
    animation: rotate-one 1s linear infinite;
    border-bottom: 10px solid var(--color-accent);
}

.inner.two {
    right: 0%;
    top: 0%;
    animation: rotate-two 1s linear infinite;
    border-right: 10px solid var(--color-accent);
}

.inner.three {
    right: 0%;
    bottom: 0%;
    animation: rotate-three 1s linear infinite;
    border-top: 10px solid var(--color-accent);
}

@keyframes rotate-one {
    0% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }

    100% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
}

@keyframes rotate-two {
    0% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }

    100% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
}

@keyframes rotate-three {
    0% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }

    100% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
}
</style>