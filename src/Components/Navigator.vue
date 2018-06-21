<template>
  <div id="navigator">
      <div class="content">
      <h1>控制平台</h1>
      </div>
      <div class="control">
        <el-dropdown>
          <span class="el-dropdown-link">
            切换平台<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>ESP32</el-dropdown-item>
            <el-dropdown-item>ESP8266</el-dropdown-item>
            <el-dropdown-item>NodeMCU</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<style lang="less">
#navigator {
  background: #f2f5f9;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  box-sizing: border-box;
  h1 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 160%;
  }
}
</style>
