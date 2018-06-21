<template>
  <el-menu
  default-active="1-1"
  :router="true"
  class="el-menu-vertical-demo" :collapse="isCollapse">
  <el-submenu index="/">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">ESP8266</span>
    </template>
    <el-menu-item-group>
      <span slot="title">固件</span>
      <el-menu-item index="NodeMCU">NodeMCU</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="编译">
      <el-menu-item index="System">系统设置</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-menu-item index="Setting">
    <i class="el-icon-setting"></i>
    <span slot="title">设置</span>
  </el-menu-item>
</el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  }
}
</script>