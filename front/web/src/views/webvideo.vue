<template>
  <div class="mode00">
    <div class="mode01">
      <div class="mode04">
        <el-card>
          <h1>
            <i class="el-icon-s-promotion"></i>
            选择指标
          </h1>
          <!--<el-form :label-position="labelPosition" :model="formbufasong">
            <el-form-item>
              <span slot="label">
                <span class="title">测试软件类型</span>
              </span>
              <el-radio-group v-model="formbufasong.liumeitiapp">
                <el-radio label="1">哔哩哔哩视频</el-radio>
                <el-radio label="2">YouTube视频</el-radio>
                <el-radio label="3">酷6网视频</el-radio>
                <el-radio label="4">新浪网视频</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>-->
          <el-form :label-position="labelPosition" :model="form">
            <el-form-item required="true">
              <span slot="label">
                <span class="title">测试链接</span>
              </span>
              <el-input placeholder="请输入URL" v-model="form.url">
              </el-input>
            </el-form-item>
            <el-form-item required="true">
              <span slot="label">
                <span class="title">监测节点</span>
              </span>
              <el-radio-group v-model="form.monitorpoints">
                <!--<el-radio label="0">本地节点</el-radio>-->
                <el-radio label="1">监测节点1--美国</el-radio>
                <el-radio label="2">监测节点2--中国</el-radio>
                <el-radio label="3">监测节点3--日本</el-radio>
                <el-radio label="4">监测节点4--英国</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item required="true">
              <span slot="label">
                <span class="title">测试模板</span>
              </span>
              <el-radio-group v-model="form.testmodels" @change="agreeChange">
                <el-tooltip class="box-item" effect="dark" placement="top-start">
                  <template #content>固定模板A<br/><br/>建立连接时间（0.10），首包时间（0.16）<br/><br/>传输总时间（0.43），DNS解析时间（0.31）<br/><br/>内容下载速率（0.43），帧率（0.285），码流（0.285）<br/><br/>传输丢包率（0.59），卡顿率（0.28），时延抖动（0.13），HTTP状态码</template>
                  <el-radio label="A" border>固定模板A</el-radio>
                </el-tooltip>
                <el-tooltip class="box-item" effect="dark" placement="top-start">
                  <template #content>固定模板B<br/><br/>建立连接时间（0.10），首包时间（0.16）<br/><br/>传输总时间（0.43），DNS解析时间（0.31）<br/><br/>内容下载速率（0.43），帧率（0.285），码流（0.285），HTTP状态码</template>
                  <el-radio label="B" border>固定模板B</el-radio>
                </el-tooltip>
                <el-tooltip class="box-item" effect="dark" placement="top-start">
                  <template #content>固定模板C<br/><br/>建立连接时间（0.10），首包时间（0.16）<br/><br/>传输总时间（0.43），DNS解析时间（0.31）<br/><br/>传输丢包率（0.59），卡顿率（0.28），时延抖动（0.13），HTTP状态码</template>
                  <el-radio label="C" border>固定模板C</el-radio>
                </el-tooltip>
                <el-tooltip class="box-item" effect="dark" placement="top-start">
                  <template #content>用户自由选择指标</template>
                  <el-radio label="D" border>手动配置</el-radio>
                </el-tooltip>
              </el-radio-group>
            </el-form-item>
            <el-form-item required="true">
                <span slot="label">
                  <span class="title">测试指标</span>
                </span>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <el-checkbox-group v-model="form.fixed" :disabled="disabled">
                  <el-checkbox label="error_code">状态码</el-checkbox>
                  <el-checkbox label="connect_time">建立连接时间</el-checkbox>
                  <el-checkbox label="start_time">首包时间</el-checkbox>
                  <el-checkbox label="total_time">传输总时间</el-checkbox>
                  <el-checkbox label="dns_time">DNS解析时间</el-checkbox>
                  <el-checkbox label="speed_download">平均下载速率</el-checkbox>
                  <el-checkbox label="packet_loss_rate">传输层丢包率</el-checkbox>
                  <el-checkbox label="delay_jitter">时延抖动</el-checkbox>
                  <el-checkbox label="bit_stream">码流</el-checkbox>
                  <el-checkbox label="frame_rate">帧率</el-checkbox>
                  <el-checkbox label="stagnation_rate">卡顿率</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
              <el-button type="primary">取消</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
    <div class="mode02">
      <div element-loading-text="正在测试中，测试时间较长，请耐心等待"  element-loading-spinner="el-icon-loading" element-loading-background="rgba(255, 255, 255, 0.9)" v-loading="loading">
      <div class="mode06">
        <el-card>
          <div class="mode09">
            <h1>
              <i class="el-icon-s-promotion"></i>
              测试结果
            </h1>
            <div class="corn">
              <h4>测试时间：{{tableData[0].create_date}}</h4>
              <h4>测试URL：{{tableData[0].url}}</h4>
            </div>
            <div class="resultposition">
            <div class="webscreen">
              <!--<div style="display: flex;justify-content: center" v-if="formbufasong.liumeitiapp==='1'"><img src="../../static/img/bilibili.jpg"></div>
              <div style="display: flex;justify-content: center" v-if="formbufasong.liumeitiapp==='2'"><img src="../../static/img/youtube.png"></div>
              <div style="display: flex;justify-content: center" v-if="formbufasong.liumeitiapp==='3'"><img src="../../static/img/ku6.jpg"></div>
              <div style="display: flex;justify-content: center" v-if="formbufasong.liumeitiapp==='4'"><img src="../../static/img/xinlang.png"></div>-->
              <a :href="form.url" target="_blank">
                <i class="el-icon-caret-right" style="font-size: 80px;"></i>
              </a>
            </div>
            <div class="showscore">
              <div class="contentUpDn">
                <div class="spicyfish">
                  <div style="margin-top: 5px;height: 20%;color:#2a3c64"><h3>测试评级</h3></div>
                  <div class="lemon">
                    <div class="score" :style="`background:${ScoreColor()}`"><h2>{{level}}</h2></div>
                  </div>
                </div>
                <div class="spicyfish">
                  <div style="margin-top: 5px;height: 20%;color:#2a3c64"><h3>测试得分</h3></div>
                  <div class="lemon">
                    <div class="level" :style="`background:${ScoreColor()}`"><h2>{{score}}</h2></div>
                  </div>
                </div>
              </div>
              <div class="contentUpDn">
                <div class="spicyfish">
                  <div style="margin-top: 5px;height: 20%;color:#2a3c64"><h3>下载时间</h3></div>
                  <div class="lemon">
                    <div class="blueberry"><h2  style="fontFamily: 'Hiragino Sans GB';color:#2a3c64">{{loadtime}}s</h2></div>
                  </div>
                </div>
                <div class="spicyfish">
                  <div style="margin-top: 5px;height: 20%;color:#2a3c64"><h3>文件大小</h3></div>
                  <div class="lemon">
                    <div class="blueberry"><h2 style="fontFamily: 'Hiragino Sans GB';color:#2a3c64">{{filesize}}Mb</h2></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="download">
              <!--<div class="load"><el-button type="primary"><h4>再次测试</h4></el-button>
                  <el-button style="margin-left:0;margin-top: 10px;"  type="primary"><h4>下载结果</h4></el-button></div>-->
              <div style="display: flex;justify-content: center" v-if="form.monitorpoints==='1'"><img src="../../static/img/america.png"></div>
              <div style="display: flex;justify-content: center" v-if="form.monitorpoints==='2'"><img src="../../static/img/beijing.png"></div>
              <div style="display: flex;justify-content: center" v-if="form.monitorpoints==='3'"><img src="../../static/img/japan.png"></div>
              <div style="display: flex;justify-content: center" v-if="form.monitorpoints==='4'"><img src="../../static/img/england.png"></div>
            </div>
          </div>
          </div>
        </el-card>
      </div>
      <div class="mode07">
          <el-card>
            <h1>
              <i class="el-icon-s-promotion"></i>
              各项指标
            </h1>
            <div class="tableresultposition">
              <el-table class="datatable" :data="tableData" :header-cell-style="{'font-size':'20px', color:'#fff'}" :cell-style="{'font-size':'18px','font-weight':'600',fontFamily: 'Hiragino Sans GB'}" style="width: 100%">
                <el-table-column prop="connect_time" label="建立连接时间" fit="true">
                  <template slot-scope="scope">{{scope.row.connect_time?scope.row.connect_time+'ms':'/'}}</template>
                </el-table-column>
                <el-table-column prop="start_time" label="首包时间" fit="true">
                  <template slot-scope="scope">{{scope.row.start_time?scope.row.start_time+'ms':'/'}}</template>
                </el-table-column>
                <el-table-column prop="total_time" label="传输总时间" fit="true">
                  <template slot-scope="scope">{{scope.row.total_time?scope.row.total_time+'s':'/'}}</template>
                </el-table-column>
                <el-table-column prop="dns_time" label="DNS解析时间" fit="true">
                  <template slot-scope="scope">{{scope.row.dns_time?scope.row.dns_time+'ms':'/'}}</template>
                </el-table-column>
                <el-table-column prop="speed_download" label="平均下载速率" fit="true">
                  <template slot-scope="scope">{{scope.row.speed_download?scope.row.speed_download+'Mb/s':'/'}}</template>
                </el-table-column>
                <el-table-column prop="error_code" label="状态码" fit="true">
                  <template slot-scope="scope">{{scope.row.error_code?scope.row.error_code:'/'}}</template>
                </el-table-column>
              </el-table>
              <el-table class="datatable"  :data="tableData" :header-cell-style="{'font-size':'20px', color:'#fff'}" :cell-style="{'font-size':'18px','font-weight':'600',fontFamily: 'Hiragino Sans GB'}" style="width: 100%">
                <el-table-column prop="packet_loss_rate" label="传输层丢包率" fit="true">
                  <template slot-scope="scope">{{scope.row.packet_loss_rate?scope.row.packet_loss_rate+'%':'/'}}</template>
                </el-table-column>
                <el-table-column prop="delay_jitter" label="网络抖动" fit="true">
                  <template slot-scope="scope">{{scope.row.delay_jitter?scope.row.delay_jitter+'ms':'/'}}</template>
                </el-table-column>
                <el-table-column prop="bit_stream" label="码流" fit="true">
                  <template slot-scope="scope">{{scope.row.bit_stream?scope.row.bit_stream+'kbps':'/'}}</template>
                </el-table-column>
                <el-table-column prop="frame_rate" label="帧率" fit="true">
                  <template slot-scope="scope">{{scope.row.frame_rate?scope.row.frame_rate+'fps':'/'}}</template>
                </el-table-column>
                <el-table-column prop="stagnation_rate" label="卡顿率" fit="true">
                  <template slot-scope="scope">{{scope.row.stagnation_rate?scope.row.stagnation_rate+'%':'/'}}</template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </div>
      </div>
      <div class="mode08">
          <el-card>
            <div class="mode12">
              <div class="mode10" ref="chart1"></div>
              <div class="mode14">
                <div class="mode11" ref="chart2"></div>
                <div class="mode13" ref="chart3"></div>
              </div>
            </div>
          </el-card>
        </div>
    </div>
  </div>
</template>

<script>
import {webvideotest} from '../api/api.js'
// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const testOptions = ['connect_time', 'dns_time', 'start_time', 'total_time', 'speed_download', 'bit_stream', 'frame_rate', 'stagnation_rate', 'packet_loss_rate', 'delay_jitter', 'error_code', 'filesize']
export default {
  props: {username: {type: String, required: true}},
  data () {
    return {
      form: {
        url: '',
        author: this.username,
        apptypes: '3',
        monitorpoints: '',
        fixed: [],
        testmodels: ''
      },
      checkAll: false,
      isIndeterminate: true,
      labelPosition: 'top',
      disabled: false,
      loading: false,
      score: '/',
      level: '/',
      loadtime: '/',
      filesize: '/',
      create_date: '2023/03/27 15:28:59',
      tableData: [{
        url: '',
        create_date: '/',
        connect_time: '/',
        dns_time: '/',
        start_time: '/',
        total_time: '/',
        speed_download: '/',
        bit_stream: '/',
        frame_rate: '/',
        stagnation_rate: '/',
        packet_loss_rate: '/',
        delay_jitter: '/',
        error_code: '/'
      }],
      radarChart: null,
      boxChart: null,
      scatterChart: null,
      option1: {
        title: {
          text: '指标得分：',
          left: 'center'
        },
        grid: {
          left: '5%',
          top: '5%',
          right: '0',
          bottom: '0',
          containLabel: true,
          width: '93%'
        },
        xAxis: {
          type: 'value',
          splitLine: {show: false},
          axisLabel: {show: false},
          axisTick: {show: false},
          axisLine: {show: false}
        },
        yAxis: {
          data: ['建立连接时间', '首包时间', '传输总时间', 'DNS解析时间', '平均下载速率', '码流', '帧率', '卡顿率', '传输层丢包率', '时延抖动'],
          type: 'category',
          inverse: true,
          axisTick: {show: false},
          axisLine: {show: false},
          axisLabel: {
            color: 'black',
            fontSize: 17
          }
        },
        series: [
          {
            name: '/' + 100,
            type: 'bar',
            barWidth: 20,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            label: {
              show: true,
              // position: 'middle',
              distance: 5,
              offset: [20, 2],
              formatter: '{c}{a}',
              color: '#fff',
              fontSize: 15
            },
            itemStyle: {
              color: '#48b137'
            },
            zlevel: 1
          },
          {
            name: '进度条背景',
            type: 'bar',
            barGap: '-100%',
            barWidth: 20,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
              color: '#d9b321'
            }
          }
        ]
      },
      option2: {
        title: {
          text: '综合得分：',
          left: 'left'
        },
        tooltip: {trigger: 'axis'},
        legend: {
          left: 'right',
          data: [
            '流媒体类型'
          ]
        },
        radar: [
          {
            indicator: [
              { text: '建立连接时间', max: 100 },
              { text: '首包时间', max: 100 },
              { text: '传输总时间', max: 100 },
              { text: 'DNS解析时间', max: 100 },
              { text: '平均下载速率', max: 100 },
              { text: '码流', max: 100 },
              { text: '帧率', max: 100 },
              { text: '卡顿率', max: 100 },
              { text: '传输层丢包率', max: 100 },
              { text: '时延抖动', max: 100 }
            ],
            radius: '80%'
          }
        ],
        series: [
          {
            type: 'radar',
            tooltip: {trigger: 'item'},
            itemStyle: {
              color: '#c12e34',
              borderColor: '#c12e34'
            },
            areaStyle: {
              color: '#c12e34'
            },
            data: [
              {
                value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                name: '流媒体类型'
              }
            ]
          }
        ]
      },
      option3: {
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            rotate: -20// 值>0向右倾斜，值<0则向左倾斜
          },
          data: ['建立连接时间', '首包时间', '传输总时间', 'DNS解析时间', '平均下载速率', '码流', '帧率', '卡顿率', '传输层丢包率', '时延抖动']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top'
                }
              }
            },
            symbolSize: 20,
            symbol: 'circle',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            type: 'scatter'
          }
        ],
        grid: {
          top: '10%',
          left: '5%',
          right: '5%',
          bottom: '14%'
        }
      }
    }
  },
  methods: {
    handleCheckAllChange (val) {
      if (this.isIndeterminate === true) {
        this.form.fixed = testOptions
        this.isIndeterminate = false
      } else {
        this.form.fixed = []
        this.isIndeterminate = true
      }
    },
    organizedata (testdata) {
      this.tableData = []
      this.tableData.push(testdata)
      this.score = testdata.score
      this.level = testdata.level
      this.loadtime = testdata.total_time
      this.filesize = testdata.filesize
      let scoredata = []
      scoredata.push(testdata.connect_time_score, testdata.start_time_score, testdata.total_time_score, testdata.dns_time_score, testdata.speed_download_score, testdata.bit_stream_score, testdata.frame_rate_score, testdata.stagnation_rate_score, testdata.packet_loss_rate_score, testdata.delay_jitter_score)
      this.option1.series.data = []
      this.option1.series[0].data = scoredata
      this.option2.series[0].data[0].value = scoredata
      this.option3.series[0].data = scoredata
    },
    onSubmit () {
      console.log(this.form)
      this.loading = true
      document.getElementById('testcomplete').scrollTop = 900
      webvideotest(this.form).then(res => {
        console.log(res.data)
        this.organizedata(res.data)
        this.drawCharts()
        this.loading = false
      }).catch(err => {
        this.$alert('测试失败，请再测一次')
        document.getElementById('testcomplete').scrollTop = 0
        console.log('操作失败' + err)
      })
    },
    ScoreColor () {
      let scorecolor = ''
      switch (this.level) {
        case 'A':
          scorecolor = '#2e7d3a'
          break
        case 'B':
          scorecolor = '#4caf50'
          break
        case 'C':
          scorecolor = '#FFEB38'
          break
        case 'D':
          scorecolor = '#FFC107'
          break
        case 'E':
          scorecolor = '#FF5722'
          break
        case 'F':
          scorecolor = '#b71c1c'
          break
        case 'G':
          scorecolor = '#448AFF'
          break
        case 'H':
          scorecolor = '#536DFE'
          break
        case 'I':
          scorecolor = '#7C4DFF'
          break
        case 'J':
          scorecolor = '#9C27B0'
          break
      }
      return scorecolor
    },
    drawCharts () {
      // 初始化echarts实例
      this.boxChart = this.$echarts.init(this.$refs['chart1'])
      this.radarChart = this.$echarts.init(this.$refs['chart2'])
      this.scatterChart = this.$echarts.init(this.$refs['chart3'])
      // 使用刚指定的配置项和数据显示图表
      this.boxChart.setOption(this.option1)
      this.radarChart.setOption(this.option2)
      this.scatterChart.setOption(this.option3)
      window.addEventListener('resize', () => {
        this.boxChart.resize()
        this.radarChart.resize()
        this.scatterChart.resize()
      })
    },
    beforeDestroy () {
      window.removeEventListener('resize', () => {
        this.boxChart.resize()
        this.radarChart.resize()
        this.scatterChart.resize()
      })
    },
    agreeChange: function (val) {
      switch (val) {
        case 'A':
          this.disabled = true
          this.form.fixed = ['connect_time', 'dns_time', 'start_time', 'total_time', 'speed_download', 'bit_stream', 'frame_rate', 'stagnation_rate', 'packet_loss_rate', 'delay_jitter', 'error_code', 'filesize']
          break
        case 'B':
          this.disabled = true
          this.form.fixed = ['connect_time', 'dns_time', 'start_time', 'total_time', 'speed_download', 'bit_stream', 'frame_rate', 'error_code', 'filesize']
          break
        case 'C':
          this.disabled = true
          this.form.fixed = ['connect_time', 'dns_time', 'start_time', 'total_time', 'stagnation_rate', 'packet_loss_rate', 'delay_jitter', 'error_code', 'filesize']
          break
        case 'D':
          this.disabled = false
          this.form.fixed = []
          break
      }
    }
  },
  mounted () {
    this.drawCharts()
    window.onresize = function () {
      this.boxChart.resize()
      this.radarChart.resize()
      this.scatterChart.resize()
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
    margin: 0;
    height: calc(95vh);
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .mode04{
    height: 90%;
    margin-top:2%;
    margin-left: 1%;
    margin-right: 20px;
  }
  .mode04 .el-card{
    height:100%;
  }
  .mode04 .el-card .el-form{
    margin:1%
  }
  .mode05{
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .mode02{
    height: 1500px;
    overflow: hidden;
    width: 100%;
  }
  @media screen and (max-width: 1120px) {
    .mode02{width: 1100px}
  }
  @media screen and (max-height: 970px) {
    .mode01{height: 970px}
  }
  .mode06{
    margin-top: 1%;
    margin-left: 1%;
    margin-right: 20px;
    height: 400px;
  }
  .mode07{
    margin-top: 1%;
    margin-left: 1%;
    margin-right: 20px;
    height: 400px;
  }
  .mode08{
    margin-top: 1%;
    margin-left: 1%;
    margin-right: 20px;
    height: 600px;
  }
  .mode07 .el-card{
    height: 100%;
  }
  .mode09{
    margin-top: 1%;
    display: flex;
    flex-direction: column;
  }
  .corn{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5%;
  }
  .el-card{
    box-shadow: none !important;
    border: 1px solid #DCDFE6;
  }
  .resultposition{
    height: 250px;
    display: flex;
  }
  .tableresultposition{
    height: 300px;
    display: flex;
    margin-top: 2%;
    flex-direction: column;
  }
  .webscreen{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d5dade;
    /*border-radius: 15px;*/

  }
  .webscreen img{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .showscore{
    width: 35%;
  }
  .download{
    width:35%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .download img{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .load{
    width:100%;
    height: 60%;
  }
  .el-button{
    background-color: #0082d9;
    border-color: #0082d9;
  }
  .contentUpDn{
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .spicyfish{
    width: 40%;
    border: 1px solid #d5dade;
    /*border-radius: 15px;*/
    margin: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .lemon{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .score{
    background-color: #17c665;
    width: 60%;
    height: 70%;
    margin: 5%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }
  .level{
    background-color: #17c665;
    width: 60%;
    height: 70%;
    margin: 5%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
  }
  .blueberry{
    width: 100%;
    height: 80%;
    margin: 5%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .datatable :empty::before{
    content: '/';
  }
  .mode12{
    display: flex;
    flex-direction: row;
    height: 600px;
  }
  .mode10{
    width: 50%;
    height: 600px;
  }
  .mode11{
    width: 100%;
    height: 50%;
  }
  .mode13{
    width: 100%;
    height: 50%;
  }
  .mode14{
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 600px;
  }
  /*更改表头背景颜色*/
/deep/.el-table thead tr>th{
    background-color: #2189ce;
}
  /*更改表格每行背景颜色*/
/deep/.el-table tbody tr>td{
    background-color: #fff;
}
/deep/ .el-loading-spinner {
    font-size: 100px;
    font-weight: bold;
  }
/deep/ .el-loading-mask .el-loading-spinner .el-loading-text {
    font-size: 35px;
  }
</style>
