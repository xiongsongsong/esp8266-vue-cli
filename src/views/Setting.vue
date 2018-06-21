<template>
  <el-form label-width="60px">
      <el-form-item label="GPIO">
        <el-switch
          v-model="value1"
          active-text="开"
          inactive-text="关">
        </el-switch>
      </el-form-item>
      <el-form-item label="电平">
        <el-switch
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="高"
          inactive-text="低">
        </el-switch>
      </el-form-item>
      <el-form-item label="阈值">
        <el-slider v-model="value3"></el-slider>
      </el-form-item>
      <el-form-item label="操作">
        <el-row>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
      </el-form-item>
    </el-form>
</template>


<script>
// @ is an alias to /src
export default {
  name: 'home',
  data() {
    return {
      value1: true,
      value2: true,
      value3: 2.3
    }
  }
}
</script>
