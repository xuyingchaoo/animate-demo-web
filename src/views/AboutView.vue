<!--
 * @Author: xuyingchao
 * @Date: 2023-11-28 14:54:40
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-07 14:31:46
 * @Descripttion: 
-->
<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('.slogan',{
    x:-3258,
    duration:10,
    ease: "none",
    repeat:-1,
  })
  gsap.to('.circle',{
    rotate:360,
    duration:10,
    ease: "none",
    repeat:-1,
  })

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section02",
      pin: true, // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=1500", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
      },
    }
  });
  tl.to(".top img",{
    x: -500
  })
  tl.to(".bottom",{
    x: 500
  },'<')
})

</script>
<template>
  <section class="section01">
    <div class="left">
      <span class="slogan">HAKSJQOK</span>
      <span class="slogan">HAKSJQOK</span>
    </div>
    <div class="right">
      <div class="circle">
        <svg viewBox="0 0 100 100">
          <path d="M 50 50 m -50 0 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0 z" id="circle" />
          <text><textPath id="text" xlink:href="#circle">HELLO NICE TO MEET YOU 33333333333 U</textPath></text>
        </svg>
      </div>
      <img class="animal" src="~@/assets/img/29.png" alt="">
    </div>
  </section>
  <section class="section02">
    <div class="row top">
      <img src="~@/assets/img/25.png" alt="">
      <img src="~@/assets/img/26.png" alt="">
      <img src="~@/assets/img/27.png" alt="">
      <img src="~@/assets/img/28.png" alt="">
      <img src="~@/assets/img/29.png" alt="">
      <img src="~@/assets/img/25.png" alt="">
      <img src="~@/assets/img/26.png" alt="">
      <img src="~@/assets/img/27.png" alt="">
      <img src="~@/assets/img/28.png" alt="">
      <img src="~@/assets/img/29.png" alt="">
    </div>
    <div class="row bottom">
      <img src="~@/assets/img/26.png" alt="">
      <img src="~@/assets/img/27.png" alt="">
      <img src="~@/assets/img/29.png" alt="">
      <img src="~@/assets/img/28.png" alt="">
      <img src="~@/assets/img/25.png" alt="">
      <img src="~@/assets/img/26.png" alt="">
      <img src="~@/assets/img/27.png" alt="">
      <img src="~@/assets/img/29.png" alt="">
      <img src="~@/assets/img/28.png" alt="">
      <img src="~@/assets/img/25.png" alt="">
    </div>
  </section>
  <!-- <section class="section03">
    <div class="row first">
      <h1>FIRST</h1>
      <img src="~@/assets/img/25.png" alt="">
    </div>
    <div class="row second">
      <h1>SECOND</h1>
      <img src="~@/assets/img/26.png" alt="">
    </div>
    <div class="row third">
      <h1>THIRD</h1>
      <img src="~@/assets/img/27.png" alt="">
    </div>
  </section> -->
  <section class="section04">
    <span class="button hvr-bounce-in">bounce-in</span>
    <span class="button hvr-bounce-to-right">bounce-to-right</span>
    <span class="button hvr-ripple-out">ripple-out</span>
    <span class="button hvr-underline-from-left">underline-from-left</span>
  </section>
</template>
<style lang="scss" scoped>
.section01{
  height: 100vh;
  display: flex;
  .left{
    height: 80vh;
    flex:1;
    overflow: hidden;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
    span{
      color: black;
      font-weight: bold;
      font-size: 600px;
      line-height: 500px
    }
  }
  .right{
    height: 80vh;
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .animal{
      width: 600px;
      position: absolute;
      bottom: 0;
    }
  }
  .circle {
  width: 45em;
  height: 45em;
  margin: 10em auto;
    #text{
      font-weight: 600;
    }

  }

  .circle svg {
    display: block;
    overflow: visible;
    transition: 10s;
  }

  .circle path {
    fill: none;
    stroke: #000;
    stroke-width: 1px;
  }
}
.section02{
  overflow: hidden;
  position: relative;
  .row{
    display: flex;
    img{
      width: 500px;
    }
  }
  .bottom{
    margin-left: -500px;
  }
}
.section03{
  height: 100vh;
  .row{
    background: white;
  }
  h1{
    font-size: 50px;
    color: black;
    font-weight: bold;
  }
  img{
    width: 400px;
    padding-bottom: 100px;
  }
}
.section04{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .button{
    display: inline-block;
    background: black;
    color: white;
    min-width: 100px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    margin: 20px;
  }
  .button.hvr-bounce-to-right:before{
    background-color: aqua;
  }
  .hvr-ripple-out:before{
    border-color: #000;
  }
}


</style>