<!--
 * @Author: xuyingchao
 * @Date: 2023-12-08 14:18:54
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-27 14:44:15
 * @Descripttion: 
-->
<script setup lang="ts">
import * as ScrollMagic from 'scrollmagic'

onMounted(() => {
    var controller = new ScrollMagic.Controller();
    // build scene
    // 无限滚动
    var scene = new ScrollMagic.Scene({ triggerElement: "#loader", triggerHook: "onEnter" })
        .addTo(controller)
        .on("enter", function () {
            setTimeout(addBoxes, 1000);
            console.log('enter')
        });
    function addBoxes(amount = 18) {
        for (let i = 1; i <= amount; i++) {
            const randomColor = '#' + ('00000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6);
            const div = document.createElement('div');
            div.className = 'box1'
            div.style.backgroundColor = randomColor
            document.getElementById('content')?.appendChild(div)
        }
        scene.update(); // make sure the scene gets the new start position
    }

    addBoxes(18);

    // 固定
    new ScrollMagic.Scene({ triggerElement: "#section01" })
        .setPin("#pin")
        .addTo(controller);


    for (let i = 0;i<4;i++){
        console.log(i)
        new ScrollMagic.Scene({triggerElement: `#section0${i+1}`,duration: 963})
        .setClassToggle(`#guide0${i+1}`, "active") // add class toggle
        .addTo(controller)
    }

    
})
</script>
<template>
    <section class="section section01" id="section01" style="background-color: rgb(191, 211, 145)">
        <span>page one</span>
        <div class="guide" id="pin">
            <ul>
                <li id="guide01">page one</li>
                <li id="guide02">page two</li>
                <li id="guide03">page three</li>
                <li id="guide04">page fourth</li>
            </ul>
        </div>
    </section>
    <section class="section section02" id="section02" style="background-color: rgb(222, 226, 233);">
        <span>page two</span>
    </section>
    <section class="section section03" id="section03" style="background-color: rgb(30, 124, 126);">
        <span>page three</span>
    </section>
    <section class="section04" id="section04">
        <div id="content">
            <div class="box1" style="background-color: rgb(253, 87, 147);"></div>
            <div class="box1" style="background-color: rgb(227, 46, 170);"></div>
            <div class="box1" style="background-color: rgb(180, 136, 50);"></div>
            <div class="box1" style="background-color: rgb(77, 10, 158);"></div>
            <div class="box1" style="background-color: rgb(143, 7, 3);"></div>
            <div class="box1" style="background-color: rgb(144, 7, 155);"></div>
            <div class="box1" style="background-color: rgb(206, 53, 172);"></div>
            <div class="box1" style="background-color: rgb(134, 216, 189);"></div>
            <div class="box1" style="background-color: rgb(142, 213, 106);"></div>
            <div class="box1" style="background-color: rgb(205, 102, 196);"></div>
            <div class="box1" style="background-color: rgb(71, 126, 99);"></div>
            <div class="box1" style="background-color: rgb(98, 50, 243);"></div>
            <div class="box1" style="background-color: rgb(30, 124, 126);"></div>
            <div class="box1" style="background-color: rgb(169, 219, 177);"></div>
            <div class="box1" style="background-color: rgb(191, 211, 145);"></div>
            <div class="box1" style="background-color: rgb(119, 160, 122);"></div>
            <div class="box1" style="background-color: rgb(222, 226, 233);"></div>
            <div class="box1" style="background-color: rgb(102, 58, 115);"></div>
        </div>
        <div id="loader" class="active">
            <img src="https://scrollmagic.io/assets/img/example_loading.gif">
            LOADING...
        </div>
    </section>
</template>
<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: white;
}

.section04 {
    width: 500px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;


}

.box1 {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    margin: 50px;
    background-color: rgb(119, 160, 122);
}

.section {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .bg {
        height: 100vh;
        width: 100%;
        background: white url('@/assets/img/bg01.png');
        background-size: 100% 100%;
    }
    span{
        font-size: 150px;
        font-family: myFont5;
    }
}
.guide{
    width: 150px;
    position: absolute;
    top: 0;
    left: 0;
    li{
        position: relative;
        cursor: pointer;
        color: black;
        margin-bottom: 80px;
        &::before{
            content: "";
            height: 40px;
            width: 1px;
            display: inline-block;
            background: black;
            position: absolute;
            top: 40px;
            left: -15px;
        }
        &:last-child{
            &::before{
                display: none;
            }
        }
    }
    .active{
        background: brown;
    }
}
</style>