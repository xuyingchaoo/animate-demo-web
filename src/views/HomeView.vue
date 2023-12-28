<!--
 * @Author: xuyingchao
 * @Date: 2023-11-28 14:54:40
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-27 10:38:44
 * @Descripttion: 
-->
<!--
 * @Author: xuyingchao
 * @Date: 2023-11-28 14:54:40
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-13 09:27:29
 * @Descripttion: 
-->
<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as ScrollMagic from 'scrollmagic'
import WOW from 'wow.js'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  var controller = new ScrollMagic.Controller();
  // new ScrollMagic.Scene({
  //   triggerElement: ".panel02",
  //   offset: 1,
  //   reverse: false,
  //   triggerHook: 1,
  // })
  //   .setClassToggle(".title", "visible") // add class to reveal
  //   .addTo(controller);

  // 首屏背景固定
  ScrollTrigger.create({
    trigger: '.bg',
    start: "top top",
    pin: true,
    pinSpacing: false
  });
  // 首屏文字动画
  let tl = gsap.timeline()
  tl.from(".hello span", {
    y: -300, stagger: 0.2
  }).from(".sun", {
    y: -1000,
    rotate: 360
  }).from(".nice", {
    y: -300,
  }).from(".to", {
    y: 300,
  }).from(".meet", {
    x: -450,
  }).from(".you", {
    scale: 0,
  }).to(".mark", {
    repeat: -1,
    rotateX: 360,
    ease: "power1.inOut",
    repeatDelay: 1
  }).to(".sun", {
    opacity: 1,
    x: 300,
    rotate: 360,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    duration: 2
  })
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel02",
      pin: true, // pin the trigger element while active
      start: "top", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

    }
  });
  tl2.fromTo(".title", {
    y: 100,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 2
  }).to(".p-text", {
    color: 'red'
  }).fromTo(".right img", {
    scale: 0,
    duration: 3
  }, {
    scale: 1,
    duration: 3
  })
  // 照片动画
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel03",
      pin: true, // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=1000", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
      },
    }
  });
  tl3.fromTo(".panel03 img", {
    scale: 0
  }, {
    scale: 1.5, stagger: 0.2
  })


  new WOW({
    boxClass: 'wow',      // 在用户滚动时显示隐藏框的类名 (默认值：wow)
    animateClass: 'animated', // 触发 CSS 动画的类名（默认值：animated）
    offset: 0, // 触发动画时到元素的距离（默认为0）
    mobile: true, // 在移动设备上触发动画（默认为true）
    live: true, // 对异步加载的内容执行操作（默认为true）
    callback:((dom: any)=>{
      //每次启动动画时都会触发回调
      //传入的参数是正在设置动画的DOM节点
      console.log(dom)
    }),
    scrollContainer:null, //可选滚动容器选择器，否则使用window
  }).init();


  // gsap.utils.toArray(".comparisonSection").forEach(section => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: section,
  //       start: "center center",
  //       // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
  //       end: () => "+=" + section.offsetWidth,
  //       scrub: true,
  //       pin: true,
  //       anticipatePin: 1
  //     },
  //     defaults: { ease: "none" }
  //   });
  //   // animate the container one way...
  //   tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0 }, { xPercent: 0 })
  //     // ...and the image the opposite way (at the same time)
  //     .fromTo(section.querySelector(".afterImage img"), { xPercent: -100, x: 0 }, { xPercent: 0 }, 0);
  // });



  // gsap.from(".hello span", { y: -300, stagger:0.2 });
  // gsap.from(".sun", 1,{
  //   y: -1000, 
  //   delay: 1,
  //   rotate:360
  // });
  // gsap.from(".nice", 1,{
  //   y: -300, 
  //   delay: 1,
  // });
  // gsap.from(".to", 1,{
  //   y: 300, 
  //   delay: 1.5,
  // });
  // gsap.from(".meet", 1,{
  //   x: -450, 
  //   delay: 2,
  // });
  // gsap.from(".you",{
  //   scale: 0, 
  //   delay: 2.5,
  // });
  // gsap.to(".mark",1,{
  //   repeat: -1, 
  //   rotateX:360,
  //   ease: "power1.inOut",
  //   delay: 2,
  //   repeatDelay:1
  // });

  // gsap.from(".to", 1,{
  //   y: 300, 
  //   yoyo: true, 
  //   repeat: 2, 
  //   ease: "power1.inOut",
  //   delay: 1,
  // });
})
</script>

<template>
  <section class="panel panel01">
    <div class="bg"></div>
    <div class="text">
      <img src="~@/assets/img/sun.png" alt="" class="sun">
      <div class="row hello">
        <span>H</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>O</span>
        <span>,</span>
      </div>
      <div class="row">
        <span class="nice">NICE</span>
        <span class="to">TO</span>
        <div style="overflow: hidden;"><span class="meet">MEET</span></div>
        <div style="overflow: hidden;"><span class="you">YOU</span></div>
        <span class="mark">!</span>
      </div>
    </div>
  </section>
  <section class="panel02">
    <div class="title">
      <h1>A SHORT PHRASE ABOUT PHS BRAND</h1>
      <h3>Lsd shdsah jkdaksh sahasjkh ,dkasdaj jkdkhladl hsdksah</h3>
    </div>
    <div class="content">
      <div class="left">
        <h1>A SHORT PHRASE ABOUT PHS BRAND</h1>
        <p class="p-text">VRTL WRLD is our first call for any
          creative project. Jon and the team
          deliver world-class artwork and assets
          on time and in our budget with
          unparalleled quality and speed. Most
          importantly, the community and
          support around the art and
          worldbuilding is astounding. Helping
          our projects reach an excited and
          receptive audience</p>
      </div>
      <div class="right">
        <img src="~@/assets/img/bg02.png" alt="">
      </div>
    </div>
  </section>
  <section class="panel panel03">
    <img src="~@/assets/img/1.png" alt="" style="left: 5%; top: 5%; transform: rotate(-10deg);">
    <img src="~@/assets/img/2.png" alt="" style="left: 20%; top: 10%; transform: rotate(20deg);">
    <img src="~@/assets/img/3.png" alt="" style="left: 43%; top: 13%; transform: rotate(-10deg);">
    <img src="~@/assets/img/4.png" alt="" style="left: 80%; top: 30%; transform: rotate(30deg);">
    <img src="~@/assets/img/5.png" alt="" style="left: 50%; top: 56%; transform: rotate(-5deg);">
    <img src="~@/assets/img/6.png" alt="" style="left: 30%; top: 20%; transform: rotate(-20deg);">
    <img src="~@/assets/img/7.png" alt="" style="left: 55%; top: 33%; transform: rotate(14deg);">
    <img src="~@/assets/img/8.png" alt="" style="left: 77%; top: 44%; transform: rotate(11deg);">
    <img src="~@/assets/img/9.png" alt="" style="left: 23%; top: 47%; transform: rotate(19deg);">
    <img src="~@/assets/img/10.png" alt="" style="left: 13%; top: 27%; transform: rotate(-19deg);">
    <img src="~@/assets/img/11.png" alt="" style="left: 1%; top: 57%; transform: rotate(-9deg);">
    <img src="~@/assets/img/12.png" alt="" style="left: 33%; top: 77%; transform: rotate(2deg);">
    <img src="~@/assets/img/20.png" alt="" style="left: 40%; top: 50%;">

  </section>
  <section class="panel panel04">
    <div class="wow fadeInUp" data-wow-delay="0.2s">
      <img src="http://www.fion.com.cn/themes/pc/default/images/p-1.png" />
    </div>
    <div class="wow fadeInUp" data-wow-delay="0.4s"><img src="http://www.fion.com.cn/themes/pc/default/images/p-2.png" />
    </div>
    <div class="wow fadeInUp" data-wow-delay="0.6s"><img src="http://www.fion.com.cn/themes/pc/default/images/p-3.png" />
    </div>
    <div class="wow fadeInUp" data-wow-delay="0.8s"><img src="http://www.fion.com.cn/themes/pc/default/images/p-4.png" />
    </div>
  </section>
  <!-- <section class="panel comparisonSection">
    <div class="comparisonImage beforeImage">
      <img src="https://assets.codepen.io/16327/before.jpg" alt="before">
    </div>
    <div class="comparisonImage afterImage">
      <img src="https://assets.codepen.io/16327/after.jpg" alt="after">
    </div>
  </section> -->
</template>
<style lang="scss" scoped>
.title.visible {
  opacity: 1;
  transform: translateY(0);
}

.title {
  color: #000;
  text-align: center;
  padding: 50px 0;
  // opacity: 0;
  // transform: translateY(100px);
  // transition: all 1s ease-in-out;

  h1 {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 20px;
  }
}

.content {
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  .left {
    flex: 1;
    padding: 100px;
    color: #000;
  }

  .right {
    flex: 1;

    img {
      width: 100%;
    }
  }
}

body {
  background: white;
}

.panel {
  height: 100vh;
  width: 100%;
}

.panel01 {
  .bg {
    height: 100vh;
    width: 100%;
    background: white url('@/assets/img/bg01.png');
    background-size: 100% 100%;
  }

  .text {
    font-family: myFont;

    .sun {
      width: 120px;
      height: 120px;
    }

    .row {
      display: flex;
      overflow: hidden;

      &:last-child {
        span {
          margin-right: 30px;
        }
      }
    }

    span {
      color: white;
      display: inline-block;
      text-align: left;
      font-size: 140px;
      overflow: hidden;
    }

    position: absolute;
    z-index: 1;
    top: 20%;
    left: 10%;
  }
}

.panel02 {
  background: white;
  position: relative;
  z-index: 1;
  height: 100vh;
}

.panel03 {
  background: url('@/assets/img/bg03.png');
  background-size: 100% 100%;
  position: relative;

  .box {
    width: 400px;
    height: 400px;
    position: absolute;
    background: yellowgreen;
    top: 30%;
    left: 30%;
  }

  img {
    position: absolute;
    width: 10%;
    border: 10px solid white;
  }
}

.panel04 {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  div {
    width: 50%;
    text-align: center;
  }
}

.yellow {
  background: url('@/assets/img/bg02.png');
  background-size: 100% 100%;
}

.green {
  background: url('@/assets/img/bg03.png');
  background-size: 100% 100%;
}

.pink {
  background: url('@/assets/img/bg04.png');
  background-size: 100% 100%;
}

.comparisonSection {
  position: relative;
  padding-bottom: 56.25%;
  /* to maintain aspect ratio (responsive!) */
}

.comparisonImage {
  width: 100%;
  height: 100%;
}

.afterImage {
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0px);
}

.afterImage img {
  transform: translate(-100%, 0px);
}

.comparisonImage img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}</style>
