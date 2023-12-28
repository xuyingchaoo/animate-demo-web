<!--
 * @Author: xuyingchao
 * @Date: 2023-12-13 10:06:40
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-28 15:07:28
 * @Descripttion: 
-->
<script setup lang="ts">
import WOW from 'wow.js'
onMounted(() => {
    new WOW().init();
})
</script>
<template>
    <div class="content0">
        <div class="text">
            <div class="wow flip">W</div>
            <div class="wow fadeInUp" data-wow-delay="0.2s">O</div>
            <div class="wow fadeInUp" data-wow-delay="0.3s">W</div>
            <div>&nbsp;</div>
            <div class="wow fadeInUp" data-wow-delay="0.4s">A</div>
            <div class="wow fadeInUp" data-wow-delay="0.5s">N</div>
            <div class="wow fadeInUp" data-wow-delay="0.6s">I</div>
            <div class="wow fadeInUp" data-wow-delay="0.7s">M</div>
            <div class="wow fadeInUp" data-wow-delay="0.8s">A</div>
            <div class="wow fadeInUp" data-wow-delay="0.9s">T</div>
            <div class="wow fadeInUp" data-wow-delay="1s">E</div>
        </div>
        <p class="wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="1s">December 2023</p>
        <img class="wow rotateIn" data-wow-iteration="infinite" data-wow-duration="0.6s" data-wow-delay="1s" src="~@/assets/img/sun.png" />
    </div>
    <div class="content1 flex-cc">
        <div class="text1 wow fadeInUp" data-wow-duration="0.6s">In 2023</div>
        <div class="text1 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">with an unstoppable pace</div>
        <div class="text1 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.4s">we have sounded the clarion call
        </div>
        <div class="text1 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.6s">of the times for 1.4 billion
            people</div>
        <div class="text1 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.8s">to march together into a new
            journey</div>
        <div class="text1 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="1s">of Chinese path to modernization.
        </div>
    </div>
    <div class="content2 flex-cc">
        <div class="text2">
            <div class="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="300">T</div>
            <div class="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="300" data-wow-delay="0.1s">E</div>
            <div class="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="300" data-wow-delay="0.2s">C</div>
            <div class="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="300" data-wow-delay="0.3s">H</div>
            <div class="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="300" data-wow-delay="0.4s">N</div>
            <div class="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="300" data-wow-delay="0.5s">O</div>
            <div class="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="300" data-wow-delay="0.6s">L</div>
            <div class="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="300" data-wow-delay="0.7s">O</div>
            <div class="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="300" data-wow-delay="0.8s">G</div>
            <div class="wow fadeInUp" data-wow-duration="0.3s" data-wow-offset="300" data-wow-delay="0.9s">Y</div>
        </div>
        <div>
            <div class="text3">
                <div class="wow fadeInDown" data-wow-offset="300" data-wow-duration="0.5s" data-wow-delay="0.1s">Striving for innovation is striving
                    for development, and striving for innovation
                    is striving for the future. On the new journey, </div>
            </div>
            <div class="text3">
                <div class="wow fadeInDown" data-wow-offset="300" data-wow-duration="0.5s" data-wow-delay="0.2s">we will continue to make efforts,
                    bravely climb the technological peak, and
                    continuously conquer cutting-edge technologies. We have </div>
            </div>
            <div class="text3">
                <div class="wow fadeInDown" data-wow-offset="300" data-wow-duration="0.5s" data-wow-delay="0.3s">the confidence, confidence, and
                    ability to build a first mover advantage, allowing
                    the "flower of innovation" to bear the fruit of development.</div>
            </div>
        </div>
        <ul>
            <li>
                <div class="wow fadeInUp" data-wow-offset="300" data-wow-duration="0.5s" data-wow-delay="1.2s">01</div>
            </li>
            <li>
                <div class="wow fadeInUp" data-wow-offset="300" data-wow-duration="0.5s" data-wow-delay="1.4s">02</div>
            </li>
            <li>
                <div class="wow fadeInUp" data-wow-offset="300" data-wow-duration="0.5s" data-wow-delay="1.5s">03</div>
            </li>
        </ul>
    </div>
    <div class="content3">
        <div class="tab1 wow fadeInRight" data-wow-duration="0.8s">tab1</div>
        <div class="tab2 wow fadeInRight" data-wow-duration="0.8s" data-wow-delay="0.2s">tab2</div>
        <div class="tab3 wow fadeInLeft" data-wow-duration="0.8s">tab3</div>
        <div class="tab4 wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.2s">tab4</div>
    </div>
    <div class="content4"></div>
</template>
<style>
html,
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: white;
}

.flex-cc {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.content0 {
    width: 100vw;
    height: 80vh;
    background: #010101;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
        width: 30px;
        margin-top: 20px;
        opacity: 0.5;
    }

    .text {
        display: flex;
        overflow: hidden;

        div {
            font-size: 150px;
            font-family: myFont5;
        }
    }

    p {
        font-weight: 200;
    }
}

.content1 {
    width: 100vw;
    height: 100vh;
    background: #010101;
    padding-left: 300px;
    font-family: myFont1;
}

.content2 {
    width: 100vw;
    height: 80vh;
    background: #010101;
    padding-left: 300px;
}

.content3 {
    width: 100vw;
    height: 80vh;
    background: #010101;
    writing-mode: vertical-lr;
    font-size: 32px;
    font-weight: 300;
    position: relative;
}

.content4 {
    width: 100vw;
    height: 100vh;
    background: #010101;
}

.text1 {
    font-size: 32px;
    text-align: left;
    font-weight: 300;
}

.text2 {
    font-size: 48px;
    display: flex;
    letter-spacing: 8px;
}

.text3 {
    font-size: 20px;
    font-weight: 300;
    overflow: hidden;

    div {
        font-weight: 200;
    }
}

.tab1 {
    position: absolute;
    top: 150px;
    left: 20px;
}

.tab2 {
    position: absolute;
    bottom: 150px;
    left: 20px;
}

.tab3 {
    position: absolute;
    top: 150px;
    right: 40px;
}

.tab4 {
    position: absolute;
    bottom: 150px;
    right: 40px;
}

ul {
    display: flex;
    flex-direction: row;
    padding: 0px;
    margin-top: 40px;

}

li {
    list-style: none;
    width: 380px;
    height: 360px;
    position: relative;
    background: url('http://usatoday.geex-arts.com/fonts/grid-1.9992dcd1b2c8f86587d62140e6a67e8a.svg') no-repeat;
    background-size: 100% 100% ;
}

li:not(:last-child) {
    margin-right: 80px;

}

li div {
    position: absolute;
    top: 20px;
    right: -40px;
    font-size: 32px;
}
</style>