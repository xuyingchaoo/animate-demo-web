<!--
 * @Author: xuyingchao
 * @Date: 2023-12-12 15:55:08
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-12 16:52:56
 * @Descripttion: 
-->
<template>
    <div class="demo">
        <div class="red-box box animate__animated animate__bounce animate__delay-2s animate__infinite animate__faster" ></div>
        <div class="green-box box" ></div>
    </div>
</template>
<style lang="scss">
body {
  background-color: #111;
  background-image:
    linear-gradient(rgba(255,255,255,.07) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255,255,255,.07) 2px, transparent 2px),
    linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}
.box{
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    margin: 50px;
}
.red-box{
    background-color: red;
}
.green-box{
    background-color: green;
    animation: bounce;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
}
</style>