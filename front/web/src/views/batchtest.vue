<template>
  <div class="mode00">
    <div class="mode01">
      <div class="mode04">
        <el-card>
          <h1>
            <i class="el-icon-s-promotion"></i>
            选择指标
          </h1>
          <el-form :label-position="labelPosition" :model="form">
            <el-form-item required="true">
              <span slot="label">
                <span class="title">测试类型</span>
              </span>
              <el-radio-group v-model="form.apptypes">
                <el-radio label="1">网页不带CDN</el-radio>
                <el-radio label="2">网页带CDN</el-radio>
                <el-radio label="3">流媒体类</el-radio>
                <el-radio label="4">即时通讯</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item required="true">
              <span slot="label">
                <span class="title">监测节点</span>
              </span>
              <el-radio-group v-model="form.monitorpoints">
                <!--<el-radio label="0">本地节点</el-radio>-->
                <el-radio label="1">监测节点1--美国</el-radio>
                <el-radio label="2" >监测节点2--中国</el-radio>
                <el-radio label="3">监测节点3--日本</el-radio>
                <el-radio label="4">监测节点4--英国</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item required="true">
              <span slot="label">
                <span class="title">测试模板</span>
              </span>
              <el-radio-group v-model="form.testmodels" @change="agreeChange($event, form.apptypes)">
                <el-radio label="A" border>固定模板A</el-radio>
                <el-radio label="B" border>固定模板B</el-radio>
                <el-radio label="C" border>固定模板C</el-radio>
                <el-radio label="D" border>手动配置</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item  v-if="form.apptypes==='1'" required="true">
                <span slot="label">
                  <span class="title">测试指标</span>
                </span>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange($event, form.apptypes)">全选</el-checkbox>
                <el-checkbox-group v-model="form.fixed" :disabled="disabled">
                  <el-checkbox label="http_code">HTTP状态码</el-checkbox>
                  <el-checkbox label="connect_time">建立连接时间</el-checkbox>
                  <el-checkbox label="start_time">首包时间</el-checkbox>
                  <el-checkbox label="ssl_time">SSL握手时间</el-checkbox>
                  <el-checkbox label="delay">网络延时</el-checkbox>
                  <el-checkbox label="total_time">传输总时间</el-checkbox>
                  <el-checkbox label="dns_time">DNS解析时间</el-checkbox>
                  <el-checkbox label="speed_download">内容下载速率</el-checkbox>
                  <el-checkbox label="lcp">最大内容绘制速率（LCP）</el-checkbox>
                  <el-checkbox label="fcp">首次内容绘制速率（FCP）</el-checkbox>
                  <el-checkbox label="packet_loss_rate">传输丢包率</el-checkbox>
                  <el-checkbox label="delay_jitter">网络抖动</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            <el-form-item  v-else-if="form.apptypes==='2'" required="true">
                <span slot="label">
                  <span class="title">测试指标</span>
                </span>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange($event, form.apptypes)">全选</el-checkbox>
                <el-checkbox-group v-model="form.fixed" :disabled="disabled">
                  <el-checkbox label="http_code">HTTP状态码</el-checkbox>
                  <el-checkbox label="connect_time">建立连接时间</el-checkbox>
                  <el-checkbox label="start_time">首包时间</el-checkbox>
                  <el-checkbox label="ssl_time">SSL握手时间</el-checkbox>
                  <el-checkbox label="delay">网络延时</el-checkbox>
                  <el-checkbox label="total_time">传输总时间</el-checkbox>
                  <el-checkbox label="dns_time">DNS解析时间</el-checkbox>
                  <el-checkbox label="speed_download">内容下载速率</el-checkbox>
                  <el-checkbox label="lcp">最大内容绘制速率（LCP）</el-checkbox>
                  <el-checkbox label="fcp">首次内容绘制速率（FCP）</el-checkbox>
                  <el-checkbox label="packet_loss_rate">传输丢包率</el-checkbox>
                  <el-checkbox label="delay_jitter">网络抖动</el-checkbox>
                  <el-checkbox label="redirect_time">重定向时间</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            <el-form-item  v-else-if="form.apptypes==='3'" required="true">
                <span slot="label">
                  <span class="title">测试指标</span>
                </span>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange($event, form.apptypes)">全选</el-checkbox>
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
            <el-form-item  v-else-if="form.apptypes==='4'" required="true">
                <span slot="label">
                  <span class="title">测试指标</span>
                </span>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange($event, form.apptypes)">全选</el-checkbox>
                <el-checkbox-group v-model="form.fixed" :disabled="disabled">
                  <el-checkbox label="file_delay">文件传输速率</el-checkbox>
                  <el-checkbox label="message_delay">消息发送时延</el-checkbox>
                  <el-checkbox label="image_delay">图片发送速率</el-checkbox>
                  <el-checkbox label="image_size">图片压缩率</el-checkbox>
                  <el-checkbox label="video_delay">视频发送速率</el-checkbox>
                  <el-checkbox label="video_size">视频压缩率</el-checkbox>
                  <el-checkbox label="audio_delay">音频发送速率</el-checkbox>
                  <el-checkbox label="data_center_ip">数据中心IP</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            <!--<el-form-item required="true">
              <el-input
                type="textarea"
                :rows="1"
                placeholder="备注"
                v-model="textarea">
              </el-input>
            </el-form-item>-->
            <el-form-item v-if="form.apptypes==='1' || form.apptypes==='2' || form.apptypes==='3'" required="true">
              <!--<p style="height: 28px">上传测试的url文件</p>-->
              <el-upload
                limit="1"
                accept=".txt,.xls,.xlsx"
                class="upload-demo"
                drag
                action=""
                :http-request="(file) => {handleAvatarSuccess(file)}"
                :before-upload="handleAvatarBefore"
                :on-exceed="handleExceed"
                :auto-upload="false"
                :on-change="uploadChange"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip" style="font-size: 15px">上传需要测试url的文件，格式为.txt/.xls/.xlsx，且不超过5Kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item v-if="form.apptypes==='4'" required="true">
              <span slot="label">
                <span class="title">测试即时通讯软件类型</span>
              </span>
              <el-radio-group v-model="form.file">
                <el-radio label="whatsapp">WhatsApp</el-radio>
                <el-radio label="telegram">Telegram</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <span slot="label"></span>
              <el-button type="primary" @click="onSubmit">提交</el-button>
              <el-button type="primary">取消</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
      <!--<div class="mode05" id="testcomplete">
        <el-steps :active="active" finish-status="success" align-center style="width: 100%;overflow:hidden">
          <el-step title="选择指标"></el-step>
          <el-step title="等待测试"></el-step>
          <el-step title="测试完成"></el-step>
        </el-steps>
      </div>-->
    </div>
    <div class="mode02" element-loading-text="正在测试中，测试时间较长，请耐心等待"  element-loading-spinner="el-icon-loading" element-loading-background="rgba(255, 255, 255, 0.9)" v-loading="loading">
      <div class="mode06">
        <el-card v-if="form.apptypes==='1'">
        <h1>
        <i class="el-icon-s-promotion"></i>
        网页不带CDN测试数据
      </h1>
        <br>
        <el-table :header-cell-style="{'font-size':'18px', color:'#fff'}" style="width: 100%;" height="calc(65vh)" :data="webwithoutcdnList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" class="demo-table-expand">
                <el-form-item label="HTTP状态码">
                  <span>{{props.row.http_code?props.row.http_code:'/'}}</span>
                </el-form-item>
                <el-col :span="6">
                <el-form-item label="建立连接时间">
                  <span>{{props.row.connect_time?props.row.connect_time+'ms':'/' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="建立连接时间得分">
                  <span>{{props.row.connect_time_score?props.row.connect_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间">
                  <span>{{props.row.start_time?props.row.start_time+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间得分">
                  <span>{{props.row.start_time_score?props.row.start_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="SSL握手时间">
                  <span>{{props.row.ssl_time+'ms'?props.row.ssl_time+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="SSL握手时间得分">
                  <span>{{props.row.ssl_time_score?props.row.ssl_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络延时">
                  <span>{{props.row.delay?props.row.delay+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络延时得分">
                  <span>{{props.row.delay_score?props.row.delay_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间">
                  <span>{{props.row.total_time?props.row.total_time+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间得分">
                  <span>{{ props.row.total_time_score?props.row.total_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间">
                  <span>{{ props.row.dns_time?props.row.dns_time+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间得分">
                  <span>{{ props.row.dns_time_score?props.row.dns_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="内容下载速率">
                  <span>{{ props.row.speed_download?props.row.speed_download+'Mb/s':'/' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="内容下载速率得分">
                  <span>{{ props.row.speed_download_score?props.row.speed_download_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="最大内容绘制LCP">
                  <span>{{ props.row.lcp?props.row.lcp+'s':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="最大内容绘制LCP得分">
                  <span>{{ props.row.lcp_score?props.row.lcp_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首次内容绘制FCP">
                  <span>{{ props.row.fcp?props.row.fcp+'s':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首次内容绘制FCP得分">
                  <span>{{ props.row.fcp_score?props.row.fcp_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输丢包率">
                  <span>{{ props.row.packet_loss_rate?props.row.packet_loss_rate+'%':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输丢包率得分">
                  <span>{{ props.row.packet_loss_rate_score?props.row.packet_loss_rate_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动">
                  <span>{{ props.row.delay_jitter?props.row.delay_jitter+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动得分">
                  <span>{{ props.row.delay_jitter_score?props.row.delay_jitter_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-form-item label="网页大小">
                  <span>{{ props.row.web_size?props.row.web_size+'kb':'/'}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column sortable prop="create_date" label="测试时间" fit="true"></el-table-column>
          <el-table-column prop="url" label="测试URL" fit="true"></el-table-column>
          <el-table-column prop="score" label="测试得分" fit="true"></el-table-column>
          <el-table-column prop="level" label="测试评级" fit="true"></el-table-column>
          <el-table-column sortable prop="monitorpoints" label="监测节点" fit="true"></el-table-column>
          <el-table-column sortable prop="apptypes" label="测试类型" fit="true">
            <template slot-scope="scope">
              <span v-if="scope.row.apptypes === '1'">网页不带CDN</span>
              <span v-else>未知</span>
            </template>
          </el-table-column>
          <el-table-column prop="testmodels" label="测试模板" fit="true"></el-table-column>
        </el-table>
        <el-pagination
          rel="table1"
          background
          key="webwithoutcdnList"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="webwithoutcdnList.length">
        </el-pagination>
      </el-card>
        <el-card v-else-if="form.apptypes==='2'">
          <h1>
        <i class="el-icon-s-promotion"></i>
        网页带CDN测试数据
      </h1>
          <br>
          <el-table class="datatable" id="table2" :header-cell-style="{'font-size':'18px', color:'#fff'}" style="width: 100%;" height="calc(65vh)" :data="webwithcdnList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" class="demo-table-expand">
                <el-form-item label="HTTP状态码">
                  <span>{{props.row.http_code?props.row.http_code:'/'}}</span>
                </el-form-item>
                <el-col :span="6">
                <el-form-item label="重定向时间">
                  <span>{{ props.row.redirect_time?props.row.redirect_time+'ms':'/' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="重定向时间得分">
                  <span>{{ props.row.redirect_time_score?props.row.redirect_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="建立连接时间">
                  <span>{{props.row.connect_time?props.row.connect_time+'ms':'/' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="建立连接时间得分">
                  <span>{{props.row.connect_time_score?props.row.connect_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间">
                  <span>{{props.row.start_time?props.row.start_time+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间得分">
                  <span>{{props.row.start_time_score?props.row.start_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="SSL握手时间">
                  <span>{{props.row.ssl_time+'ms'?props.row.ssl_time+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="SSL握手时间得分">
                  <span>{{props.row.ssl_time_score?props.row.ssl_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络延时">
                  <span>{{props.row.delay?props.row.delay+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络延时得分">
                  <span>{{props.row.delay_score?props.row.delay_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间">
                  <span>{{props.row.total_time?props.row.total_time+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间得分">
                  <span>{{ props.row.total_time_score?props.row.total_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间">
                  <span>{{ props.row.dns_time?props.row.dns_time+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间得分">
                  <span>{{ props.row.dns_time_score?props.row.dns_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="内容下载速率">
                  <span>{{ props.row.speed_download?props.row.speed_download+'Mb/s':'/' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="内容下载速率得分">
                  <span>{{ props.row.speed_download_score?props.row.speed_download_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="最大内容绘制LCP">
                  <span>{{ props.row.lcp?props.row.lcp+'s':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="最大内容绘制LCP得分">
                  <span>{{ props.row.lcp_score?props.row.lcp_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首次内容绘制FCP">
                  <span>{{ props.row.fcp?props.row.fcp+'s':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首次内容绘制FCP得分">
                  <span>{{ props.row.fcp_score?props.row.fcp_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输丢包率">
                  <span>{{ props.row.packet_loss_rate?props.row.packet_loss_rate+'%':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输丢包率得分">
                  <span>{{ props.row.packet_loss_rate_score?props.row.packet_loss_rate_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动">
                  <span>{{ props.row.delay_jitter?props.row.delay_jitter+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动得分">
                  <span>{{ props.row.delay_jitter_score?props.row.delay_jitter_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-form-item label="网页大小">
                  <span>{{ props.row.web_size?props.row.web_size+'kb':'/'}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column sortable prop="create_date" label="测试时间" fit="true"></el-table-column>
          <el-table-column prop="url" label="测试URL" fit="true"></el-table-column>
          <el-table-column prop="score" label="测试得分" fit="true"></el-table-column>
          <el-table-column prop="level" label="测试评级" fit="true"></el-table-column>
          <el-table-column sortable prop="monitorpoints" label="监测节点" fit="true"></el-table-column>
          <el-table-column sortable prop="apptypes" label="测试类型" fit="true">
            <template slot-scope="scope">
              <span v-if="scope.row.apptypes === '2'">网页带CDN</span>
              <span v-else>未知</span>
            </template>
          </el-table-column>
          <el-table-column prop="testmodels" label="测试模板" fit="true"></el-table-column>
        </el-table>
          <el-pagination
          rel="table2"
          background
          key="webwithcdnList"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="webwithcdnList.length">
        </el-pagination>
      </el-card>
        <el-card v-else-if="form.apptypes==='3'">
          <h1>
        <i class="el-icon-s-promotion"></i>
        流媒体测试数据
      </h1>
          <br>
          <el-table class="datatable"   id="table3" :header-cell-style="{'font-size':'18px', color:'#fff'}" style="width: 100%;" height="calc(65vh)" :data="webvideoList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" class="demo-table-expand">
                <el-form-item label="状态码">
                  <span>{{props.row.error_code?props.row.error_code:'/'}}</span>
                </el-form-item>
                <el-col :span="6">
                <el-form-item label="建立连接时间">
                  <span>{{props.row.connect_time?props.row.connect_time+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="建立连接时间得分">
                  <span>{{ props.row.connect_time_score?props.row.connect_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间">
                  <span>{{ props.row.start_time?props.row.start_time+'ms':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间得分">
                  <span>{{ props.row.start_time_score?props.row.start_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间">
                  <span>{{ props.row.total_time?props.row.total_time+'s':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间得分">
                  <span>{{ props.row.total_time_score?props.row.total_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间">
                  <span>{{ props.row.dns_time?props.row.dns_time+'ms':'/' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间得分">
                  <span>{{ props.row.dns_time_score?props.row.dns_time_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="平均下载速率">
                  <span>{{ props.row.speed_download?props.row.speed_download+'Mb/s':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="平均下载速率得分">
                  <span>{{ props.row.speed_download_score?props.row.speed_download_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="码流">
                  <span>{{ props.row.bit_stream?props.row.bit_stream+'kbps':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="码流得分">
                  <span>{{ props.row.bit_stream_score?props.row.bit_stream_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="帧率">
                  <span>{{ props.row.frame_rate?props.row.frame_rate+'fps':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="帧率得分">
                  <span>{{ props.row.frame_rate_score?props.row.frame_rate_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="卡顿率">
                  <span>{{ props.row.stagnation_rate?props.row.stagnation_rate+'%':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="卡顿率得分">
                  <span>{{ props.row.stagnation_rate_score?props.row.stagnation_rate_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输层丢包率">
                  <span>{{ props.row.packet_loss_rate?props.row.packet_loss_rate+'%':'/' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输层丢包率得分">
                  <span>{{ props.row.packet_loss_rate_score?props.row.packet_loss_rate_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动">
                  <span>{{ props.row.delay_jitter?props.row.delay_jitter+'ms':'/' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动得分">
                  <span>{{ props.row.delay_jitter_score?props.row.delay_jitter_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-form-item label="文件大小">
                  <span>{{ props.row.filesize?props.row.filesize+'mb':'/'}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column sortable prop="create_date" label="测试时间" fit="true"></el-table-column>
          <el-table-column prop="url" label="测试URL" fit="true"></el-table-column>
          <el-table-column prop="score" label="测试得分" fit="true"></el-table-column>
          <el-table-column prop="level" label="测试评级" fit="true"></el-table-column>
          <el-table-column sortable prop="monitorpoints" label="监测节点" fit="true"></el-table-column>
          <el-table-column sortable prop="apptypes" label="测试类型" fit="true">
            <template slot-scope="scope">
              <span v-if="scope.row.apptypes === '3'">流媒体</span>
              <span v-else>未知</span>
            </template>
          </el-table-column>
          <el-table-column prop="testmodels" label="测试模板" fit="true"></el-table-column>
        </el-table>
          <el-pagination
          rel="table3"
          background
          key="webvideoList"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="webvideoList.length">
        </el-pagination>
      </el-card>
        <el-card v-else-if="form.apptypes==='4'">
          <h1>
        <i class="el-icon-s-promotion"></i>
        即时通讯测试数据
      </h1>
          <br>
          <el-table class="datatable"    id="table4" :header-cell-style="{'font-size':'18px', color:'#fff'}" style="width: 100%;" height="calc(65vh)" :data="webmessageList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" class="demo-table-expand">
                <el-form-item label="数据中心IP">
                  <span>{{ props.row.data_center_ip?props.row.data_center_ip:'/'}}</span>
                </el-form-item>
                <el-col :span="6">
                <el-form-item label="文件传输速率">
                  <span>{{ props.row.file_delay?props.row.file_delay+'kb/s':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="文件传输速率得分">
                  <span>{{ props.row.file_delay_score?props.row.file_delay_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="消息发送时延">
                  <span>{{ props.row.message_delay?props.row.message_delay+'s':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="消息发送时延得分">
                  <span>{{ props.row.message_delay_score?props.row.message_delay_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="图片发送速率">
                  <span>{{ props.row.image_delay?props.row.image_delay+'kb/s':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="图片发送速率得分">
                  <span>{{ props.row.image_delay_score?props.row.image_delay_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="图片压缩率">
                  <span>{{ props.row.image_size?props.row.image_size:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="图片压缩率得分">
                  <span>{{ props.row.image_size_score?props.row.image_size_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="视频发送速率">
                  <span>{{ props.row.video_delay?props.row.video_delay+'kb/s':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="视频发送速率得分">
                  <span>{{ props.row.video_delay_score?props.row.video_delay_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="视频压缩率">
                  <span>{{ props.row.video_size?props.row.video_size:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="视频压缩率得分">
                  <span>{{ props.row.video_size_score?props.row.video_size_score:'/'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="音频发送速率">
                  <span>{{ props.row.audio_delay?props.row.audio_delay+'fps':'/'}}</span>
                </el-form-item>
                </el-col>
                <el-form-item label="音频发送速率得分">
                  <span>{{ props.row.audio_delay_score?props.row.audio_delay_score:'/'}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column sortable prop="create_date" label="测试时间" fit="true"></el-table-column>
          <el-table-column prop="url" label="即时通讯类型" fit="true"></el-table-column>
          <el-table-column prop="score" label="测试得分" fit="true"></el-table-column>
          <el-table-column prop="level" label="测试评级" fit="true"></el-table-column>
          <el-table-column sortable prop="monitorpoints" label="监测节点" fit="true"></el-table-column>
          <el-table-column sortable prop="apptypes" label="测试类型" fit="true">
            <template slot-scope="scope">
              <span v-if="scope.row.apptypes === '4'">即时通讯</span>
              <span v-else>未知</span>
            </template>
          </el-table-column>
          <el-table-column prop="testmodels" label="测试模板" fit="true"></el-table-column>
        </el-table>
          <el-pagination
          rel="table4"
          background
          key="webmessageList"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="webmessageList.length">
        </el-pagination>
      </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import {batchtestapi} from '../api/api.js'
export default {
  props: ['username'],
  data () {
    return {
      currentPage: 1,
      pagesize: 10,
      form: {
        author: this.username,
        apptypes: '',
        monitorpoints: '',
        fixed: [],
        testmodels: '',
        file: ''
      },
      checkAll: false,
      isIndeterminate: true,
      labelPosition: 'top',
      disabled: false,
      loading: false,
      create_date: '2023/03/27 15:28:59',
      webwithoutcdnList: [{
        url: '/',
        create_date: '/',
        score: '/',
        level: '/',
        monitorpoints: '/',
        testmodels: '/',
        apptypes: '/',
        http_code: '/',
        connect_time: '/',
        connect_time_score: '/',
        start_time: '/',
        start_time_score: '/',
        ssl_time: '/',
        ssl_time_score: '/',
        delay: '/',
        delay_score: '/',
        total_time: '/',
        total_time_score: '/',
        dns_time: '/',
        dns_time_score: '/',
        speed_download: '/',
        speed_download_score: '/',
        lcp: '/',
        lcp_score: '/',
        fcp: '/',
        fcp_score: '/',
        packet_loss_rate: '/',
        packet_loss_rate_score: '/',
        web_size: '/',
        delay_jitter: '/',
        delay_jitter_score: '/'}],
      webwithcdnList: [{
        url: '/',
        create_date: '/',
        score: '/',
        level: '/',
        monitorpoints: '/',
        testmodels: '/',
        apptypes: '/',
        http_code: '/',
        connect_time: '/',
        connect_time_score: '/',
        start_time: '/',
        start_time_score: '/',
        ssl_time: '/',
        ssl_time_score: '/',
        delay: '/',
        delay_score: '/',
        total_time: '/',
        total_time_score: '/',
        dns_time: '/',
        dns_time_score: '/',
        redirecr_time: '/',
        redirecr_time_score: '/',
        speed_download: '/',
        speed_download_score: '/',
        lcp: '/',
        lcp_score: '/',
        fcp: '/',
        fcp_score: '/',
        packet_loss_rate: '/',
        packet_loss_rate_score: '/',
        web_size: '/',
        delay_jitter: '/',
        delay_jitter_score: '/'}],
      webvideoList: [{
        url: '/',
        create_date: '/',
        score: '/',
        level: '/',
        monitorpoints: '/',
        testmodels: '/',
        apptypes: '/',
        error_code: '/',
        connect_time: '/',
        connect_time_score: '/',
        start_time: '/',
        start_time_score: '/',
        total_time: '/',
        total_time_score: '/',
        dns_time: '/',
        dns_time_score: '/',
        speed_download: '/',
        speed_download_score: '/',
        packet_loss_rate: '/',
        packet_loss_rate_score: '/',
        filesize: '/',
        bit_stream: '/',
        bit_stream_score: '/',
        frame_rate: '/',
        frame_rate_score: '/',
        stagnation_rate: '/',
        stagnation_rate_score: '/',
        delay_jitter: '/',
        delay_jitter_score: '/'}],
      webmessageList: [{
        url: '/',
        create_date: '/',
        score: '/',
        level: '/',
        monitorpoints: '/',
        testmodels: '/',
        apptypes: '/',
        file_delay: '/',
        file_delay_score: '/',
        message_delay: '/',
        message_delay_score: '/',
        image_delay: '/',
        image_delay_score: '/',
        image_size: '/',
        image_size_score: '/',
        video_delay: '/',
        video_delay_score: '/',
        video_size: '/',
        video_size_score: '/',
        audio_delay: '/',
        audio_delay_score: '/',
        data_center_ip: '/'}]
    }
  },
  methods: {
    // 多选框全选
    handleCheckAllChange (val1, val2) {
      if (this.isIndeterminate === true) {
        switch (val2) {
          case '1':
            this.form.fixed = ['http_code', 'connect_time', 'start_time', 'ssl_time', 'delay', 'total_time', 'dns_time', 'speed_download', 'lcp', 'fcp', 'packet_loss_rate', 'delay_jitter', 'web_size']
            break
          case '2':
            this.form.fixed = ['http_code', 'connect_time', 'start_time', 'ssl_time', 'delay', 'total_time', 'dns_time', 'speed_download', 'lcp', 'fcp', 'packet_loss_rate', 'delay_jitter', 'redirect_time', 'web_size']
            break
          case '3':
            this.form.fixed = ['connect_time', 'dns_time', 'start_time', 'total_time', 'speed_download', 'bit_stream', 'frame_rate', 'stagnation_rate', 'packet_loss_rate', 'delay_jitter', 'error_code', 'filesize']
            break
          case '4':
            this.form.fixed = ['file_delay', 'message_delay', 'image_delay', 'image_size', 'video_delay', 'video_size', 'audio_delay', 'data_center_ip']
            break
        }
        this.isIndeterminate = false
      } else {
        this.form.fixed = []
        this.isIndeterminate = true
      }
    },
    // 文件上传加到表单中
    uploadChange (file) {
      this.form.file = file.raw
    },
    // 文件上传之前限制文件大小及格式
    handleAvatarBefore (file) {
      const isLt500k = file.size
      console.log(file.type)
      if (file.type === 'text/plain' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel') {
        if (isLt500k > 5 * 1024) {
          this.$message.warning('文件请控制在5Kb以内')
          return false
        } else {
          return true
        }
      } else {
        this.$message.warning('只支持txt/xlsx/xls格式')
        return false
      }
    },
    // 限制文件智能上传一个
    handleExceed () {
      this.$message({ type: 'error', message: '最多支持1个文件上传' })
    },
    // 选择指标
    agreeChange: function (val1, val2) {
      if (val2 === '1') {
        switch (val1) {
          case 'A':
            this.disabled = true
            this.form.fixed = ['http_code', 'connect_time', 'start_time', 'ssl_time', 'delay', 'total_time', 'dns_time', 'speed_download', 'lcp', 'fcp', 'packet_loss_rate', 'delay_jitter', 'web_size']
            break
          case 'B':
            this.disabled = true
            this.form.fixed = ['http_code', 'connect_time', 'start_time', 'ssl_time', 'delay', 'total_time', 'dns_time', 'web_size']
            break
          case 'C':
            this.disabled = true
            this.form.fixed = ['http_code', 'speed_download', 'lcp', 'fcp', 'packet_loss_rate', 'delay_jitter', 'web_size']
            break
          case 'D':
            this.disabled = false
            this.form.fixed = []
            break
        }
      } else if (val2 === '2') {
        switch (val1) {
          case 'A':
            this.disabled = true
            this.form.fixed = ['http_code', 'connect_time', 'start_time', 'ssl_time', 'delay', 'total_time', 'dns_time', 'speed_download', 'lcp', 'fcp', 'packet_loss_rate', 'delay_jitter', 'redirect_time', 'web_size']
            break
          case 'B':
            this.disabled = true
            this.form.fixed = ['http_code', 'connect_time', 'start_time', 'ssl_time', 'delay', 'total_time', 'dns_time', 'web_size']
            break
          case 'C':
            this.disabled = true
            this.form.fixed = ['http_code', 'speed_download', 'lcp', 'fcp', 'packet_loss_rate', 'delay_jitter', 'redirect_time', 'web_size']
            break
          case 'D':
            this.disabled = false
            this.form.fixed = []
            break
        }
      } else if (val2 === '3') {
        switch (val1) {
          case 'A':
            this.disabled = true
            this.form.fixed = ['connect_time', 'dns_time', 'start_time', 'total_time', 'speed_download', 'bit_stream', 'frame_rate', 'stagnation_rate', 'packet_loss_rate', 'delay_jitter', 'error_code', 'filesize']
            break
          case 'B':
            this.disabled = true
            this.form.fixed = ['connect_time', 'dns_time', 'start_time', 'total_time', 'speed_download', 'error_code', 'filesize']
            break
          case 'C':
            this.disabled = true
            this.form.fixed = ['bit_stream', 'frame_rate', 'stagnation_rate', 'packet_loss_rate', 'delay_jitter', 'error_code', 'filesize']
            break
          case 'D':
            this.disabled = false
            this.form.fixed = []
            break
        }
      } else if (val2 === '4') {
        switch (val1) {
          case 'A':
            this.disabled = true
            this.form.fixed = ['file_delay', 'message_delay', 'image_delay', 'image_size', 'video_delay', 'video_size', 'audio_delay', 'data_center_ip']
            break
          case 'B':
            this.disabled = true
            this.form.fixed = ['file_delay', 'message_delay', 'image_delay', 'image_size']
            break
          case 'C':
            this.disabled = true
            this.form.fixed = ['video_delay', 'video_size', 'audio_delay', 'data_center_ip']
            break
          case 'D':
            this.disabled = false
            this.form.fixed = []
            break
        }
      }
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size
      // console.log(this.pagesize)// 每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage)// 点击第几页
    },
    // 提交表单
    onSubmit () {
      this.loading = true
      if (this.form.apptypes === '1' || this.form.apptypes === '2' || this.form.apptypes === '3') {
        let formData = new FormData()
        formData.append('file', this.form.file)
        formData.append('author', this.form.author)
        formData.append('apptypes', this.form.apptypes)
        formData.append('monitorpoints', this.form.monitorpoints)
        formData.append('fixed', this.form.fixed)
        formData.append('testmodels', this.form.testmodels)
        console.log(this.form)
        document.getElementById('testcomplete').scrollTop = 900
        batchtestapi(formData).then(res => {
          if (this.form.apptypes === '1') {
            this.webwithoutcdnList = []
            this.webwithoutcdnList.push(...res.data)
            this.loading = false
          } else if (this.form.apptypes === '2') {
            this.webwithcdnList = []
            this.webwithcdnList.push(...res.data)
            this.loading = false
          } else if (this.form.apptypes === '3') {
            this.webvideoList = []
            this.webvideoList.push(...res.data)
            this.loading = false
          } else {
            alert('测试节点返回数据错误')
          }
        }).catch(err => {
          console.log('操作失败' + err)
        })
      } else {
        console.log(this.form)
        document.getElementById('testcomplete').scrollTop = 900
        batchtestapi(this.form).then(res => {
          this.webmessageList = []
          this.webmessageList.push(...res.data)
          this.loading = false
        }).catch(err => {
          console.log('操作失败' + err)
        })
      }
    }
  },
  mounted () {
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
    height: 990px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .el-divider--vertical{
    height: 98%;
    margin: 5px;
    width: 2px;
    float: left;
    overflow: hidden;
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
    height: calc(90vh);
    overflow: hidden;
    width: 100%;
  }
  .el-card{
    box-shadow: none !important;
    border: 1px solid #DCDFE6;
  }
  @media screen and (max-width: 1120px) {
    .el-divider--vertical{display: none}
    .mode02{width: 1100px}
  }
  .mode06{
    margin-top: 1%;
    margin-left: 1%;
    margin-right: 20px;
    height: 100%;
  }
  .mode09{
    margin-top: 1%;
    display: flex;
    flex-direction: column;
  }
  .el-button{
    background-color: #0082d9;
    border-color: #0082d9;
  }
  .el-form-item {
    margin-bottom: 5px;
  }
      /*更改表头背景颜色*/
/deep/.el-table thead tr>th{
    background-color: #2189ce;
}
  /deep/ .el-loading-spinner {
    font-size: 100px;
    font-weight: bold;
  }
/deep/ .el-loading-mask .el-loading-spinner .el-loading-text {
    font-size: 35px;
  }
</style>
