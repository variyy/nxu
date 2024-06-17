<template>
<el-container>
  <el-header>
    <div class="header_logo">
        <img src="../../static/img/header_logo1.png">
    </div>
  </el-header>
  <el-main>
    <div class="content">
        <div class="form-signin" id="login" name="login">
          <div class="signin-heading">
            <a>系统登录</a>
          </div>
          <el-form ref="form" :model="form" label-width="20%" style="margin-top: 40px;margin-left: 25px; width:300px">
          <el-form-item label="用户名:">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密  码:">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
        </el-form>
          <div class="reg">
            <el-button type="primary" @click="login" class="btn">登录</el-button>
            <span @click="register">还没有账户？ 前往注册</span>
          </div>
        </div>
    </div>
    </el-main>
  </el-container>
</template>
<script>

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
    }
  },
  methods: {
    login () {
      if (this.form.username === '') {
        this.$message.error('用户名不能为空')
      } else if (this.form.password === '') {
        this.$message.error('密码不能为空')
      } else {
        loginapi(this.form).then(res => {
          if (res.status === 200) {
            // 利用localstorage存储到本地
            localStorage.setItem('token', res.data.token)
            this.$router.push({
              path: '/home',
              query: {
                name: this.form.username
              }
            })
          } else {}
        }).catch(err => {
          this.$alert('用户名或密码错误', '登录失败', {
            confirmButtonText: '确定',
            callback: action => {
              this.form.username = ''
              this.form.password = ''
            }
          })
          console.log('登录失败 ' + err)
        })
      }
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>

.el-container{
    width: 100vw;
    height: 100vh;
  }
  .el-header {
    background: #f5f5f5;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: calc(12vh) ! important;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #7aa8d0;
  }
  .header_logo{
    margin-top: auto;
    margin-right: 20%;
    margin-bottom: auto;
    margin-left: 22%;
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .header_logo img{
    width: 72%;
    height: 80%;
    overflow: hidden;
  }
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
    width: 100%;
  }

 
  .content{
    background: #f1f1f1;
    width: 380px;
    height: 380px;
    display: inline-block;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    border-top: 0px;

  }
  #login {
     margin: 0 auto;
     height: 100%;
   }
  .signin-heading {
    text-align: left;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 80px;
    line-height: 60px;
    background: #005bac;
    font-size: 18px;
    color: #525252;
    font-weight: normal;
  }
  .signin-heading a {
    line-height: 80px;
    font-size: 22px;
    color: #fff;
    padding: 4px 4px 0 30px;
    display: block;
    width: auto;
    float: left;
  }
  
  #login {
     margin: 0 auto;
     height: 100%;
   }
  
</style>
