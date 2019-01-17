<template>
  <el-container>
    <home-header></home-header>
    <el-header>
      <a class="logo">
        <img
          src="../../../assets/logo.png"
          style="{width 100%; height100%;}"
        >
        <span>ESL Note</span>
      </a>
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
      </el-menu>
    </el-header>
    <el-main>
      <div>
        ESL笔记，有极客范的云笔记！
      </div>
      <div>
        前所未有的文档体验，近乎完美的平台覆盖，支持团队协同，企业级私有云
      </div>
      <div>
        ESL笔记 = 笔记 + 博客 + 协作 + 私有云
      </div>
      <el-tooltip
        placement="top"
        content="tooltip"
      >
        <back-to-top
          transitionName="fade"
          :customStyle="myBackToTopStyle"
          :visibilityHeight="300"
        ></back-to-top>
      </el-tooltip>
    </el-main>

    <el-footer>
      Copyright © ESL STU
    </el-footer>
  </el-container>

</template>

<script>
import BackToTop from '@/components/BackToTop'
import HomeHeader from '@/views/ESLHome/welcome/homeheader.vue'
export default {
  components: { BackToTop, HomeHeader: HomeHeader },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1' // 按钮的背景颜色 The background color of the button
      }
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style >
.el-header {
  background-color: transparent;
  /* width: 40px;
  height: 40px; */
  /* position: fixed; */
}

.el-container {
  /* background: url(~@/assets/Star.jpg) no-repeat; */
}

.el-footer {
  background-color: #fcfcfc;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-menu {
  float: right;
  margin-right: 200px;
  /* text-color="#fff" */
  background-color: transparent;
}

.el-main {
  background-color: transparent;
  /* background-color: #e9eef3; */
  height: 1200px;
  color: #333;
  text-align: center;
  line-height: 160px;
  /* background: url(~@/assets/Star.jpg) no-repeat; */
}

.logo {
  display: inline-block;
  font-size: 1.5em;
  line-height: 40px;
  color: #2c3e50;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: 500;
  height: 30px !important;
  width: 30px !important;
}

/* .logo img {
  vertical-align: middle;
  margin-right: 6px;
  width: 40px;
  height: 40px;
  background-color: #e9eef3;
} */

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<script>
import BackToTop from "@/components/BackToTop";
import HomeHeader from "@/views/ESLHome/welcome/homeheader.vue";
export default {
  components: { BackToTop, HomeHeader: HomeHeader },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      myBackToTopStyle: {
        right: "50px",
        bottom: "50px",
        width: "40px",
        height: "40px",
        "border-radius": "4px",
        "line-height": "45px", // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: "#e7eaf1" // 按钮的背景颜色 The background color of the button
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.placeholder-container div {
  margin: 10px;
}
</style>
