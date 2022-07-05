<template>
  <div
    class="
      relative
      flex flex-col
      px-16
      py-12
      bg-gradient-to-b
      from-mediumgray
      to-darkgray
      h-screen
      overflow-y-auto
      no-scrollbar
    "
  >
    <Navbar class="z-20" />
    <Start class="z-20" v-show="page == 'start'" @start="start" />
    <Quiz class="z-30" v-show="page == 'quiz'" @quiz="quiz" />
    <Result class="z-30" v-show="page == 'result'" />
    <!-- Background -->
    <div class="absolute pulse4" />
    <div class="absolute pulse3" />
    <div class="absolute pulse2" />
    <div class="absolute pulse1" />
    <div class="absolute w-10/12"></div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar/Navbar.vue";
import Start from "./Start/Start.vue";
import Quiz from "./Quiz/Quiz.vue";
import Result from "./Result/Result.vue";
import { ref } from "vue";

// reactive state
let page = ref("start");

const start = () => {
  page.value = "quiz";
  ResetAnimation();
};

const quiz = () => {
  console.log("quiz");
  page.value = "result";
  ResetAnimation();
};

const ResetAnimation = () => {
  let p1 = document.getElementsByClassName("pulse1");
  p1[0].style.animation = "none";
  p1[0].offsetHeight; // trigger reflow
  p1[0].style.animation = null;
  let p2 = document.getElementsByClassName("pulse2");
  p2[0].style.animation = "none";
  p2[0].offsetHeight; // trigger reflow
  p2[0].style.animation = null;
  let p3 = document.getElementsByClassName("pulse3");
  p3[0].style.animation = "none";
  p3[0].offsetHeight; // trigger reflow
  p3[0].style.animation = null;
  let p4 = document.getElementsByClassName("pulse4");
  p4[0].style.animation = "none";
  p4[0].offsetHeight; // trigger reflow
  p4[0].style.animation = null;
};
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
  z-index: 0;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);

  -webkit-animation: pulsejg2 7s linear forwards;
  -moz-animation: pulsejg2 7s linear forwards;
  animation: pulsejg2 67s linear forwards;
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
  z-index: 0;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);

  -webkit-animation: pulsejg2 6s linear forwards;
  -moz-animation: pulsejg2 6s linear forwards;
  animation: pulsejg2 66s linear forwards;
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
  z-index: 0;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);

  -webkit-animation: pulsejg2 5s linear forwards;
  -moz-animation: pulsejg2 5s linear forwards;
  animation: pulsejg2 65s linear forwards;
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
  z-index: 0;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);

  -webkit-animation: pulsejg2 4s linear forwards;
  -moz-animation: pulsejg2 4s linear forwards;
  animation: pulsejg2 64s linear forwards;
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

  10% {
    -webkit-transform: scale(0.8);
    opacity: 0.05;
  }

  20% {
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

  10% {
    -moz-transform: scale(0.8);
    opacity: 0.05;
  }

  20% {
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

  2% {
    transform: scale(0.82);
    opacity: 0.5;
  }

  3% {
    transform: scale(0.87);
    opacity: 0.4;
  }

  4% {
    transform: scale(0.89);
    opacity: 0.3;
  }

  5% {
    transform: scale(0.9);
    opacity: 0.3;
  }

  20% {
    transform: scale(1);
    opacity: 0.2;
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
