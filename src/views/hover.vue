<!--
 * @Author: xuyingchao
 * @Date: 2023-12-26 11:22:50
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-26 11:27:10
 * @Descripttion: 
-->
<template>
    <section class="section">
        <span class="button hvr-bounce-in">bounce-in</span>
        <span class="button hvr-bounce-to-right">bounce-to-right</span>
        <span class="button hvr-ripple-out">ripple-out</span>
        <span class="button hvr-underline-from-left">underline-from-left</span>
        <span class="button hvr-bob">bob</span>
    </section>
</template>
<style lang="scss">
.section{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .button{
    display: inline-block;
    background: black;
    color: white;
    min-width: 140px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    margin: 20px;
  }
  .button.hvr-bounce-to-right:before,
  .hvr-underline-from-left:before{
    background-color: aqua;
  }
  .hvr-ripple-out:before{
    border-color: #000;
  }
}
</style>