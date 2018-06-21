<template>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="温度">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="定时任务">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="远程控制">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="类别">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="供电" name="type"></el-checkbox>
      <el-checkbox label="无线网络" name="type"></el-checkbox>
      <el-checkbox label="流量" name="type"></el-checkbox>
      <el-checkbox label="开关机" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="温度检测">
    <el-radio-group v-model="form.resource">
      <el-radio label="室外"></el-radio>
      <el-radio label="室内"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="备注">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>