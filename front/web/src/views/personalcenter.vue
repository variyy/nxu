<template>
  <div class="mode00">
    <div class="mode01">
      <el-card>
        <h1>
        <i class="el-icon-s-promotion"></i>
        网页不带CDN测试数据
      </h1>
        <br>
        <el-table class="datatable" id="table1" :header-cell-style="{'font-size':'18px', color:'#fff'}" style="width: 100%;" height="calc(65vh)" :data="webwithoutcdnList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" class="demo-table-expand">
                <el-form-item label="HTTP状态码">
                  <span>{{ props.row.http_code }}</span>
                </el-form-item>
                <el-col :span="6">
                <el-form-item label="建立连接时间">
                  <span>{{ props.row.connect_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="建立连接时间得分">
                  <span>{{ props.row.connect_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间">
                  <span>{{ props.row.start_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间得分">
                  <span>{{ props.row.start_time_score }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="SSL握手时间">
                  <span>{{ props.row.ssl_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="SSL握手时间得分">
                  <span>{{ props.row.ssl_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络延时">
                  <span>{{ props.row.delay+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络延时得分">
                  <span>{{ props.row.delay_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间">
                  <span>{{ props.row.total_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间得分">
                  <span>{{ props.row.total_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间">
                  <span>{{ props.row.dns_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间得分">
                  <span>{{ props.row.dns_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="内容下载速率">
                  <span>{{ props.row.speed_download+'Mb/s' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="内容下载速率得分">
                  <span>{{ props.row.speed_download_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="最大内容绘制LCP">
                  <span>{{ props.row.lcp+'s' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="最大内容绘制LCP得分">
                  <span>{{ props.row.lcp_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首次内容绘制FCP">
                  <span>{{ props.row.fcp+'s' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首次内容绘制FCP得分">
                  <span>{{ props.row.fcp_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输丢包率">
                  <span>{{ props.row.packet_loss_rate+'%' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输丢包率得分">
                  <span>{{ props.row.packet_loss_rate_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动">
                  <span>{{ props.row.delay_jitter+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动得分">
                  <span>{{ props.row.delay_jitter_score}}</span>
                </el-form-item>
                </el-col>
                <el-form-item label="网页大小">
                  <span>{{ props.row.web_size+'kb'}}</span>
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
              <!--<span v-else-if="scope.row.apptypes === '2'">网页带CDN</span>
              <span v-else-if="scope.row.apptypes === '3'">流媒体</span>
              <span v-else-if="scope.row.apptypes === '4'">即时通讯</span>-->
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
    </div>
    <div class="mode01">
      <el-card>
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
                  <span>{{ props.row.http_code }}</span>
                </el-form-item>
                <el-col :span="6">
                <el-form-item label="重定向时间">
                  <span>{{ props.row.redirect_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="重定向时间得分">
                  <span>{{ props.row.redirect_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="建立连接时间">
                  <span>{{ props.row.connect_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="建立连接时间得分">
                  <span>{{ props.row.connect_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间">
                  <span>{{ props.row.start_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间得分">
                  <span>{{ props.row.start_time_score }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="SSL握手时间">
                  <span>{{ props.row.ssl_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="SSL握手时间得分">
                  <span>{{ props.row.ssl_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络延时">
                  <span>{{ props.row.delay+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络延时得分">
                  <span>{{ props.row.delay_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间">
                  <span>{{ props.row.total_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间得分">
                  <span>{{ props.row.total_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间">
                  <span>{{ props.row.dns_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间得分">
                  <span>{{ props.row.dns_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="内容下载速率">
                  <span>{{ props.row.speed_download+'Mb/s' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="内容下载速率得分">
                  <span>{{ props.row.speed_download_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="最大内容绘制LCP">
                  <span>{{ props.row.lcp+'s' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="最大内容绘制LCP得分">
                  <span>{{ props.row.lcp_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首次内容绘制FCP">
                  <span>{{ props.row.fcp+'s' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首次内容绘制FCP得分">
                  <span>{{ props.row.fcp_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输丢包率">
                  <span>{{ props.row.packet_loss_rate+'%' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输丢包率得分">
                  <span>{{ props.row.packet_loss_rate_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动">
                  <span>{{ props.row.delay_jitter+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动得分">
                  <span>{{ props.row.delay_jitter_score}}</span>
                </el-form-item>
                </el-col>
                <el-form-item label="网页大小">
                  <span>{{ props.row.web_size+'kb'}}</span>
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
    </div>
    <div class="mode01">
      <el-card>
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
                  <span>{{ props.row.error_code }}</span>
                </el-form-item>
                <el-col :span="6">
                <el-form-item label="建立连接时间">
                  <span>{{ props.row.connect_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="建立连接时间得分">
                  <span>{{ props.row.connect_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间">
                  <span>{{ props.row.start_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="首包时间得分">
                  <span>{{ props.row.start_time_score }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间">
                  <span>{{ props.row.total_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输总时间得分">
                  <span>{{ props.row.total_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间">
                  <span>{{ props.row.dns_time+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="DNS解析时间得分">
                  <span>{{ props.row.dns_time_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="平均下载速率">
                  <span>{{ props.row.speed_download+'Mb/s' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="平均下载速率得分">
                  <span>{{ props.row.speed_download_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="码流">
                  <span>{{ props.row.bit_stream+'kbps' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="码流得分">
                  <span>{{ props.row.bit_stream_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="帧率">
                  <span>{{ props.row.frame_rate+'fps' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="帧率得分">
                  <span>{{ props.row.frame_rate_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="卡顿率">
                  <span>{{ props.row.stagnation_rate+'%' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="卡顿率得分">
                  <span>{{ props.row.stagnation_rate_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输层丢包率">
                  <span>{{ props.row.packet_loss_rate+'%' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="传输层丢包率得分">
                  <span>{{ props.row.packet_loss_rate_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动">
                  <span>{{ props.row.delay_jitter+'ms' }}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="网络抖动得分">
                  <span>{{ props.row.delay_jitter_score}}</span>
                </el-form-item>
                </el-col>
                <el-form-item label="文件大小">
                  <span>{{ props.row.filesize+'mb'}}</span>
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
    </div>
    <div class="mode01">
      <el-card>
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
                  <span>{{ props.row.data_center_ip}}</span>
                </el-form-item>
                <el-col :span="6">
                <el-form-item label="文件传输速率">
                  <span>{{ props.row.file_delay+'kb/s'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="文件传输速率得分">
                  <span>{{ props.row.file_delay_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="消息发送时延">
                  <span>{{ props.row.message_delay+'s'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="消息发送时延得分">
                  <span>{{ props.row.message_delay_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="图片发送速率">
                  <span>{{ props.row.image_delay+'kb/s'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="图片发送速率得分">
                  <span>{{ props.row.image_delay_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="图片压缩率">
                  <span>{{ props.row.image_size}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="图片压缩率得分">
                  <span>{{ props.row.image_size_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="视频发送速率">
                  <span>{{ props.row.video_delay+'kb/s'}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="视频发送速率得分">
                  <span>{{ props.row.video_delay_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="视频压缩率">
                  <span>{{ props.row.video_size}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="视频压缩率得分">
                  <span>{{ props.row.video_size_score}}</span>
                </el-form-item>
                </el-col>
                <el-col :span="6">
                <el-form-item label="音频发送速率">
                  <span>{{ props.row.audio_delay+'fps' }}</span>
                </el-form-item>
                </el-col>
                <el-form-item label="音频发送速率得分">
                  <span>{{ props.row.audio_delay_score}}</span>
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
</template>

<script>
import {getWebwithoutcdn, getWebwithcdn, getWebvideo, getWebmessage} from '../api/api.js'
export default {
  data () {
    return {
      currentPage: 1,
      pagesize: 10,
      form: {
        author: this.username
      },
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
  props: ['username'],
  created () {
    this.handleList()
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size
      // console.log(this.pagesize)// 每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      // console.log(this.currentPage)// 点击第几页
    },
    handleList () {
      getWebwithoutcdn(this.form).then(res => {
        this.webwithoutcdnList = []
        this.webwithoutcdnList.push(...res.data)
      }).catch(err => {
        console.log('操作失败' + err)
      })
      getWebwithcdn(this.form).then(res => {
        this.webwithcdnList = []
        this.webwithcdnList.push(...res.data)
      }).catch(err => {
        console.log('操作失败' + err)
      })
      getWebvideo(this.form).then(res => {
        this.webvideoList = []
        this.webvideoList.push(...res.data)
      }).catch(err => {
        console.log('操作失败' + err)
      })
      getWebmessage(this.form).then(res => {
        this.webmessageList = []
        this.webmessageList.push(...res.data)
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
  }
    /*更改表头背景颜色*/
/deep/.el-table thead tr>th{
    background-color: #2189ce;
}
</style>
