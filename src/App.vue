<template>
  <el-container id="container">
    <el-header><Navigator /></el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
</el-container>
</template>

<script>
import Sidebar from '@/Components/Sidebar.vue'
import Navigator from '@/Components/Navigator.vue'
export default {
  components: {
    Sidebar,
    Navigator
  }
}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font: 14px/1.5 tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
}
#container {
  height: 100%;
  > .el-header {
    padding: 0;
  }
  > .el-container {
    flex: 1 1 0;
    > .el-aside {
      border-right: solid 1px #f2f2f2;
      .el-menu {
        border-right: none;
      }
    }
  }
}
</style>
