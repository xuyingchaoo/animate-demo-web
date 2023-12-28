<!--
 * @Author: xuyingchao
 * @Date: 2023-11-28 14:54:40
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-28 14:45:49
 * @Descripttion: 
-->
<script setup lang="ts">
</script>

<template>
  <!-- <div class="menu">
    <span class="button hvr-bob" @click="handleRouter" v-for="(item,index) in menus" :key="index">{{item.name}}</span>
  </div> -->
  <RouterView />
</template>

<style lang="scss" scoped>
.menu{
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
}
</style>
