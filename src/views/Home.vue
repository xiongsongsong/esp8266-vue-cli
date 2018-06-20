<template>
  <div class="home">
    <p>跟所有web网页的优化思路一样，无外乎以下几种手段：</p>
    <ul>
      <li>图片使用DataURI方式内联</li>
      <li>图标尽量使用svg</li>
      <li>合并css、js，甚至将css和js内联到html中</li>
    </ul>
    <p>下方图片为DataURI方式引入的：</p>
    <img :src="esp8266_png" />
  </div>
</template>

<script>
// @ is an alias to /src
import esp8266_png from '@/assets/esp8266-base64.js'
export default {
  name: 'home',
  data(){
    return {
      esp8266_png
    }
  }
}
</script>
