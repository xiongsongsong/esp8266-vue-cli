<template>
  <div>
    <h2>NodeMcu</h2>
    <p>超简单的物联网开发平台</p>
    <p>一款开源快速硬件原型平台，包括固件和开发板，用几行简单的Lua脚本就能开发物联网应用</p>
    <br>
    <el-steps :space="200" :active="1" finish-status="success">
      <el-step title="购买开发板"></el-step>
      <el-step title="下载固件"></el-step>
      <el-step title="上传代码"></el-step>
    </el-steps>
  </div>
</template>
