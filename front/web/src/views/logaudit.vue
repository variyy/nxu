<template>
  <div class="mode00">
    <div class="mode01">
      <el-card>
        <h1>
        <i class="el-icon-s-promotion"></i>
        系统运行错误日志
      </h1>
        <br>
        <ul>
        <li v-for="item in logList" :key="item.index">
          {{item}}
        </li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script>
import {getSystemlog} from '../api/api.js'
export default {
  data () {
    return {
      form: {
        author: this.username
      },
      logList: []
    }
  },
  props: ['username'],
  created () {
    this.getLog()
  },
  methods: {
    getLog () {
      getSystemlog(this.form).then(res => {
        this.logList = []
        this.logList.push(...res.data)
      }).catch(err => {
        console.log('操作失败' + err)
      })
    }
  }
}
</script>

<style scoped>
  .mode00{
    display: flex;
    flex-direction: column;
  }
  .mode01{
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    height: calc(80vh);
  }
  .el-card{
    height: 100%;
    margin-left: 2%;
    width: 90%;
    box-shadow: none !important;
    border: 1px solid #DCDFE6;
    overflow-y: auto;
  }
</style>
