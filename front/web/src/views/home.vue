<template>
  <el-container>
    <el-header>
      <div class="header_logo" >
          <img src="../../static/img/header_logo2.png">  <!-- 图片 -->
        </div>
      <div class="user">
      </div>
      </el-header>
    <el-container class="orange">
      <div class="apple">
        <el-aside style="width: 20%;">
          <div class="leftNavigation" style="height: 100%;">
            <div class="headarea">
              <el-avatar style="margin-bottom:5px" class="headsculpture" :size="75" :style="`background:${extractColorByName()}`">{{username}}</el-avatar>
              <div>
                <h4>欢迎您：{{username}}</h4>
              </div>
            </div>
            <el-menu active-text-color="#303133" text-color="#303133" router :default-active="this.$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
              <i class="el-icon-location" style="font-size: 25px;"></i>
              <span style="font-size: 20px;">实时任务</span>
            </template>
                <el-menu-item style="font-size: 16px;" index="/webwithoutcdn">网页不带CDN</el-menu-item>
                <el-menu-item style="font-size: 16px;" index="/webwithcdn">网页带CDN</el-menu-item>
                <el-menu-item style="font-size: 16px;" index="/webvideo">流媒体类</el-menu-item>
                <el-menu-item style="font-size: 16px;" index="/webmessage">即时通讯</el-menu-item>
              </el-submenu>
              <el-menu-item index="">
                <i class="el-icon-menu" style="font-size: 25px;"></i>
                <span style="font-size: 20px;" slot="title">常规任务</span>
                <a :href='nodeIP' target='_blank'></a>
              </el-menu-item>
              <el-menu-item index="/batchtest">
                <i class="el-icon-menu" style="font-size: 25px;"></i>
                <span style="font-size: 20px;" slot="title">批量测试</span>
              </el-menu-item>
              <!--<el-submenu  index="2">
                <template slot="title">
              <i class="el-icon-location" style="font-size: 25px;"></i>
              <span style="font-size: 20px;">常规任务</span>
            </template>
                <el-menu-item style="font-size: 16px;" index="" @click="IPQ1">监测节点1-->
                  <!--<a href='http://47.90.200.192:8501/' target='_blank'>监测节点1-美国</a>-->
                <!--</el-menu-item>
                <el-menu-item style="font-size: 16px;" index="" @click="IPQ2">监测节点2
                </el-menu-item>
                <el-menu-item style="font-size: 16px;" index="" @click.native.stop="IPQ3">监测节点3
                </el-menu-item>
                <el-menu-item style="font-size: 16px;" index="" @click.native.stop="IPQ4">监测节点4
                </el-menu-item>
              </el-submenu>-->
              <el-menu-item index="/personalcenter">
                <i class="el-icon-s-tools" style="font-size: 25px;"></i>
                <span style="font-size: 20px;" slot="title">个人中心</span>
              </el-menu-item>
              <el-menu-item index="/userinfo">
                <i class="el-icon-s-order" style="font-size: 25px;"></i>
                <span style="font-size: 20px;" slot="title">用户管理</span>
              </el-menu-item>
              <el-menu-item index="/logaudit">
                <i class="el-icon-s-platform" style="font-size: 25px;"></i>
                <span style="font-size: 20px;" slot="title">日志审计</span>
              </el-menu-item>
              <el-menu-item index="/logout" >
                <i class="el-icon-delete-solid" style="font-size: 25px;"></i>
                <span style="font-size: 20px;" slot="title">退出登录</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-aside>
        <el-main  id="testcomplete">
          <router-view :username="username"></router-view>
        </el-main>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import webwithoutcdn from './webwithoutcdn.vue'
import webwithcdn from './webwithcdn.vue'
import webvideo from './webvideo.vue'
import webmessage from './webmessage.vue'
// import {ipquery} from '../api/api'
export default {
  data () {
    return {
      username: 'admin',
      nodeIP: ''
      // IPList: []
    }
  },
  components: {webwithoutcdn, webwithcdn, webvideo, webmessage},
  created () {
    if (this.$route.query.name) {
      this.username = this.$route.query.name
    }
    /*    ipquery().then(res => {
          this.IPList = []
          this.IPList.push(res.data)
          console.log(this.IPList[0].TEST_IP1)
          if (this.IPList[0]) {
          } else {
            this.$alert('没有正确查询到监测节点IP，请重新配置')
          }
        }).catch(err => {
          this.$alert('没有正确查询到监测节点IP，请重新配置')
          console.log('操作失败' + err)
        })
    */
  },
  methods: {
    /*    IPQ1 () {
            window.open(this.IPList[0].TEST_IP1, '_blank')
          },
          IPQ2 () {
            window.open(this.IPList[0].TEST_IP2, '_blank')
          },
          IPQ3 () {
            window.open(this.IPList[0].TEST_IP3, '_blank')
          },
          IPQ4 () {
            window.open(this.IPList[0].TEST_IP4, '_blank')
          },

       */
    loginOut () {
      localStorage.clear()
      this.$router.push('/login')
    },
    extractColorByName () {
      this.nodeIP = window.IPConfig.nodeIP
      var temp = []
      temp.push('#')
      for (let index = 0; index < this.username.length; index++) {
        temp.push(parseInt(this.username[index].charCodeAt(0), 10).toString(16))
      }
      return temp.slice(0, 5).join('').slice(0, 4)
    }
  }
}
</script>

<style scoped>
  html,body{
    margin: 0;
    height: 100%;
  }
  a {
    position: absolute;
    top: 0;
    left: 13%;
    right: 0;
    bottom: 0;
    text-decoration: none;
    color: inherit;
  }
  a:visited{
    color: #333;
  }
  .el-container{
    width: 100%;
    height: 100%;
  }
  .orange{
    display: flex;
    justify-content: center;
  }
  .apple{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .el-aside::-webkit-scrollbar {
    display: none;
  }
  .el-main::-webkit-scrollbar {
    display: none;
  }
  .headarea{
    margin-right: 12px;
    margin-left: 12px;
    margin-top: 10px;
    height: 100px;
    box-sizing: border-box;
    border-bottom: 2px solid #409eff;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
  }
  .el-menu{
    height: 100%;
    border-right-width: 0;
    margin-top: 18px;
  }
  .el-header{
    background: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: calc(10vh) ! important;
    /*height: 96px ! important;*/
    width: 100%;
    overflow: hidden;
    border-bottom: 3px solid #3e99f6;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 1320px) {
    .el-header {
      width: 1300px
    }
    .orange {
        width: 1300px;
  }
  }
  .header_logo{
    width: 60%;
    height: 100%;
    float: left;
    display: flex;
  }
  .header_logo img{
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 10px 10px 0 0;
    overflow: hidden;
  }
  .user {
    float: right;
    color: #666666;
    font-size: 22px;
    margin-right: 50px;
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
    margin-top: 48px;
  }
  .el-aside {
    text-align:left;
    overflow: hidden;
    width: 20%;
  }
  .el-main {
    background-color: #ffffff;
    width: 80%;
    color: #333;
    text-align: left;
    padding: 0;
    line-height: 30px;
  }
  .leftNavigation{
    border: 1px solid #DCDFE6;
  }
  ::v-deep .is-active {
  color: black;
  font-weight: bolder;
  border-bottom-color: black;
}
</style>
