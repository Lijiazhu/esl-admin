<template>
  <el-container class='header-container'>
    hsadhjkfhd
    <!-- <router-link
      id="logo"
      to="/"
    >
      <img src="../../../assets/logo.png">
      <span>ESL Note</span>
    </router-link>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      text-color="#000000"
    >
      <el-menu-item index="1"><a
          href="/home"
          target="_blank"
        >首页</a></el-menu-item>
      <el-menu-item index="2">笔记</el-menu-item>
      <el-menu-item index="3">博客</el-menu-item>
      <el-menu-item index="4">云协作</el-menu-item>
      <el-menu-item index="5">客户端</el-menu-item>
      <el-menu-item index="6">开源</el-menu-item>
      <el-menu-item index="7">注册</el-menu-item>
      <el-menu-item index="8">登陆</el-menu-item>
    </el-menu> -->
  </el-container>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>
<style>
/* .el-menu {
  float: right;
  margin-right: 200px;
  /* text-color="#fff" */
/* background-color: transparent;
} */
.header-container {
  height: 30px;
  width: 30px;
}
</style>
