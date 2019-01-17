<template>
  <el-container>
    <el-container>
      <el-aside width="200px" >
         <i class="el-icon-star-on"></i>
        <el-menu
          class="el-menu-vertical"
          @open="handleOpen"
          @close="handleClose"
          :collapse="!isCollapse"
        >
          <el-menu-item
            :key="item"
            v-for="(item, index ) in menuItem"
            :index="index"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">{{item}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <el-container>
            <el-aside width=200px>
              <el-table :data="articleList">
                <el-table-column prop="name"/>
              </el-table>
            </el-aside>
            <el-main >{{articleContent}}</el-main>
          </el-container>
        </el-main>
        <el-footer> This is footer.</el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      menuItem: ['编程', '生活', '阅读', '收藏'],
      subMenuItem: ['归档', '关于', '友链'],
      articleContent: '解决循环import的方法主要有几种。1.延迟导入(lazy import)即把import语句写在方法或函数里面，将它的作用域限制在局部。这种方法的缺点就是会有性能问题。2.只引用当前的包，不引用具体的模块',

      articleList: [
        {'name': 1},
        {'name': 2},
        {'name': 3}
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  /* width: 100px; */
  height: 1000px;
  /* padding-left: 10px; */
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  /* width: 100px; */
  color: #333;
  padding-left: 10px;
}
</style>
