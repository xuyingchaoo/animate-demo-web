<!--
 * @Author: xuyingchao
 * @Date: 2023-12-26 15:42:31
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-28 11:10:55
 * @Descripttion: 
-->
<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const dom = document.getElementsByClassName('row')
const tl = gsap.timeline()
const tween = ref()
// 停止
function handleStop() {
  tl.kill()
  tween.value = gsap.to(dom[index.value - 1], {
    y: -80
  })
}
// 开始
function handleStart() {
  index.value = 1
  tween.value.revert()
  tl.revert()
  tl.restart()
}
const index = ref(1)
onMounted(() => {
  tl.to(dom, {
    keyframes: [
      { y: -160, duration: 0.1 },
      {
        y: 0,
        duration: 0,
        onComplete: () => {
          if (index.value >= 100) {
            index.value = 1
          }
          index.value++
        }
      }
    ],
    repeat: -1,
    stagger: 0.5
  })
})
</script>
<template>
  <section class="section-gsap">
    <div class="wrapper">
      <div class="w-box">
        <div class="row" v-for="item in 100" :key="item">张小花{{ item }}</div>
      </div>
    </div>
    <div>
      <span class="button hvr-bounce-in" @click="handleStop">STOP</span>
      <span class="button hvr-bounce-in" @click="handleStart">START</span>
    </div>
  </section>
</template>
<style lang="scss">
body {
    background-color: #111;
    background-image:
        linear-gradient(rgba(255, 255, 255, .07) 2px, transparent 2px),
        linear-gradient(90deg, rgba(255, 255, 255, .07) 2px, transparent 2px),
        linear-gradient(rgba(255, 255, 255, .06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, .06) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

.section-gsap {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .button {
        display: inline-block;
        background: white;
        color: black;
        min-width: 140px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        margin: 20px;
    }

    .wrapper {
        width: 300px;
        height: 100px;
        border: 10px solid beige;
        overflow: hidden;

        .w-box {
            position: relative;
            width: 100%;
            height: 100%;
            background: #111;

            .row {
                width: 100%;
                color: white;
                text-align: center;
                font-size: 28px;
                line-height: 80px;
                font-weight: bold;
                position: absolute;
                top: 80px;
            }
        }
    }
}

.box {
    background-color: green;
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    margin: 50px;
}
</style>