<template>
  <div class="home">
    <el-row gutter="40">
      <el-col :span="12">
        <el-form  label-width="120px">
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
      </el-col>
      <el-col :span="12">
        <p>跟所有web网页的优化思路一样，无外乎以下几种手段：</p>
        <ul>
          <li>图片使用DataURI方式内联</li>
          <li>图标尽量使用svg</li>
          <li>合并css、js，甚至将css和js内联到html中</li>
        </ul>
        <p>下方图片为DataURI方式引入的：</p>
        <img :src="esp8266_png" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import esp8266_png from '@/assets/esp8266-base64.js'
export default {
  name: 'home',
  data() {
    return {
      esp8266_png,
      value1: true,
      value2: true,
      value3: 2.3
    }
  }
}
</script>
