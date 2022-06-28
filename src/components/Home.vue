<template>
  <div
    class="relative flex flex-col items-center px-16 py-12 bg-gradient-to-b from-gray to-darkgray h-screen overflow-hidden"
  >
    <Navbar />
    <Start />
    <div class="absolute pulse4" />
    <div class="absolute pulse3" />
    <div class="absolute pulse2" />
    <div class="absolute pulse1" />
    <div class="absolute w-10/12"></div>
  </div>
</template>

<script setup>
import Navbar from './Navbar/Navbar.vue'
import Start from './Start/Start.vue'
</script>
<style scoped>
html {
  height: 100%;
  overflow: hidden;
}

body {
  background: -webkit-linear-gradient(CadetBlue, DarkSeaGreen);
  background: -o-linear-gradient(CadetBlue, DarkSeaGreen);
  background: -moz-linear-gradient(CadetBlue, DarkSeaGreen);
  background: linear-gradient(CadetBlue, DarkSeaGreen);
  min-height: 100%;
}

.pulse1 {
  position: absolute;
  width: 1300px;
  height: 1300px;
  margin: auto;
  top: -850px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0);

  -webkit-animation: pulsejg2 7s linear forwards;
  -moz-animation: pulsejg2 7s linear forwards;
  animation: pulsejg2 7s linear forwards;
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
  -webkit-box-shadow: inset 0px 0px 12px 5px rgba(34, 43, 51, 255);
  -moz-box-shadow: inset 0px 0px 12px 5px rgba(34, 43, 51, 255);
  box-shadow: inset 0px 0px 30px 5px rgba(34, 43, 51, 255);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.pulse2 {
  position: absolute;
  width: 1000px;
  height: 1000px;
  margin: auto;
  top: -850px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0);

  -webkit-animation: pulsejg2 6s linear forwards;
  -moz-animation: pulsejg2 6s linear forwards;
  animation: pulsejg2 6s linear forwards;
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
  -webkit-box-shadow: inset 0px 0px 12px 5px rgba(34, 43, 51, 255);
  -moz-box-shadow: inset 0px 0px 12px 5px rgba(34, 43, 51, 255);
  box-shadow: inset 0px 0px 30px 5px rgba(34, 43, 51, 255);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.pulse3 {
  position: absolute;
  width: 700px;
  height: 700px;
  margin: auto;
  top: -850px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0);

  -webkit-animation: pulsejg2 5s linear forwards;
  -moz-animation: pulsejg2 5s linear forwards;
  animation: pulsejg2 5s linear forwards;
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
  -webkit-box-shadow: inset 0px 0px 12px 5px rgba(34, 43, 51, 255);
  -moz-box-shadow: inset 0px 0px 12px 5px rgba(34, 43, 51, 255);
  box-shadow: inset 0px 0px 30px 5px rgba(34, 43, 51, 255);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.pulse4 {
  position: absolute;
  width: 400px;
  height: 400px;
  margin: auto;
  top: -850px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0);

  -webkit-animation: pulsejg2 4s linear forwards;
  -moz-animation: pulsejg2 4s linear forwards;
  animation: pulsejg2 4s linear forwards;
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  border-radius: 999px;
  -webkit-box-shadow: inset 0px 0px 12px 5px rgba(34, 43, 51, 255);
  -moz-box-shadow: inset 0px 0px 12px 5px rgba(34, 43, 51, 255);
  box-shadow: inset 0px 0px 30px 5px rgba(34, 43, 51, 255);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

@-webkit-keyframes pulsejg2 {
  0% {
    -webkit-transform: scale(0.6);
    opacity: 0;
  }

  40% {
    -webkit-transform: scale(0.8);
    opacity: 0.05;
  }

  50% {
    -webkit-transform: scale(1);
    opacity: 0.1;
  }

  60% {
    -webkit-transform: scale(1.1);
    opacity: 0.3;
  }

  80% {
    -webkit-transform: scale(1.2);
    opacity: 0.1;
  }

  100% {
    -webkit-transform: scale(1.3);
    opacity: 0;
  }
}

@-moz-keyframes pulsejg2 {
  0% {
    -moz-transform: scale(0.6);
    opacity: 0;
  }

  40% {
    -moz-transform: scale(0.8);
    opacity: 0.05;
  }

  50% {
    -moz-transform: scale(1);
    opacity: 0.1;
  }

  60% {
    -moz-transform: scale(1.1);
    opacity: 0.3;
  }

  80% {
    -moz-transform: scale(1.2);
    opacity: 0.1;
  }

  100% {
    -moz-transform: scale(1.3);
    opacity: 0;
  }
}

@keyframes pulsejg2 {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }

  40% {
    transform: scale(0.8);
    opacity: 0.05;
  }

  50% {
    transform: scale(1);
    opacity: 0.1;
  }

  60% {
    transform: scale(1.1);
    opacity: 0.3;
  }

  80% {
    transform: scale(1.2);
    opacity: 0.1;
  }

  100% {
    transform: scale(1.3);
    opacity: 0.2;
  }
}
</style>
