<template>
<div>
    <el-card>
      <el-row :gutter="20" style="margin-bottom:15px;margin-top:10px">
        <el-col :span="15">
          <el-form ref="form" :model="formResearch">
            <el-form-item label-with="20px">
              <el-input v-model="formResearch.username" style="width:80%;" clearable @clear="loaduserinfo()">
                <el-button slot="append" icon="el-icon-search" @click="userResearch()"></el-button>
              </el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
      <!--用户列表区域-->
      <el-table :data="userinfo[0]" border stripe :header-cell-style="{'text-align':'center'}">
        <el-table-column fit="true" type="index" label="#"></el-table-column>
        <el-table-column fit="true" label="姓名" prop="username"></el-table-column>
        <el-table-column fit="true" label="邮箱" prop="email"></el-table-column>
        <el-table-column fit="true" label="密码" prop="password"></el-table-column>
        <el-table-column fit="true" label="注册时间" prop="date_joined"></el-table-column>
        <el-table-column fit="true" label="操作" width="200px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row)"></el-button>
            <!-- 删除按钮 -->
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="userdelete(scope.row.username)"></el-button>
            <!-- 分配角色 -->
            <el-tooltip effect="dark" content="分配角色" placement="top-start" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!--分页区域-->
      <el-pagination layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-card>
    <!--添加用户的对话框-->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="50%"
    >
      <!--主体区域-->
      <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="姓名:" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="注册时间:" prop="date_joined">
          <el-input v-model="form.date_joined"></el-input>
        </el-form-item>
      </el-form>
      <!--底部区域-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button class="reg" type="primary" @click="register">确 定</el-button>
      </span>
    </el-dialog>
    <!--修改用户对话框-->
    <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%">
      <el-form
        ref="editUserFormRef"
        :model="editUserForm"
        label-width="70px"
      >
        <el-form-item label="用户名">
          <el-input v-model="editUserForm.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="editUserForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="editUserForm.password"></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-input v-model="editUserForm.date_joined" disabled></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {getuserinfo, registerapi, deleteapi, editapi} from '../api/api.js'
export default{
  data () {
    return {
      // 获取用户
      userinfo: {
        username: '',
        email: '',
        password: '',
        date_joined: ''
      },
      // 搜索用户
      formResearch: {
        username: ''
      },
      // 添加用户
      addDialogVisible: false,
      form: {
        username: '',
        email: '',
        password: '',
        date_joined: ''
      },
      addDialogClosed () {
        this.$refs.form.resetFields()
      },
      // 修改用户
      editDialogVisible: false,
      editUserForm: {
        username: '',
        email: '',
        password: '',
        date_joined: ''
      }
    }
  },
  created () {
    this.loaduserinfo()
  },
  methods: {
    loaduserinfo () {
      getuserinfo().then(response => {
        console.log(response.data)
        this.userinfo = []
        // this.userinfo.push(response.data.datalist.filter(item => item.username === 'admin'))
        this.userinfo.push(response.data.datalist)
      })
    },
    register () {
      if (this.form.username === '') {
        this.$message.error('用户名不能为空')
      } else if (this.form.password === '') {
        this.$message.error('密码不能为空')
      } else {
        registerapi(this.form).then(res => {
          if (res.data.code === 0) {
            this.$alert('注册成功')
            this.addDialogVisible = false
            this.loaduserinfo()
          } else if (res.data.code === 4001) {
            this.$alert('用户名已存在', '注册失败', {
              confirmButtonText: '确定',
              callback: action => {
                this.form.username = ''
                this.form.password = ''
              }
            })
          } else {
            console.log(res)
          }
        }).catch(err => {
          console.log('操作失败' + err)
        })
      }
    },
    userResearch () {
      if (this.formResearch.username === '') {
        this.$message.error('用户名不能为空')
      } else {
        registerapi(this.formResearch).then(res => {
          if (res.data.code === 4001) {
            getuserinfo().then(response => {
              this.userinfo = []
              this.userinfo.push(response.data.datalist.filter(item => item.username === this.formResearch.username))
              console.log(this.userinfo)
            })
          } else {
            this.$alert('用户不存在')
          }
        }).catch(err => {
          console.log('操作失败' + err)
        })
      }
    },
    userdelete (username) {
      this.$confirm('此操作将永久删除用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteapi(username).then(response => {
          // console.log(username)
          if (response.data.code === 200) {
            this.$message({
              type: 'success', message: '删除成功!'})
            this.loaduserinfo()
          } else {
            console.log('删除失败')
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info', message: '已取消删除' })
      })
    },
    showEditDialog (row) {
      this.editUserForm = JSON.parse(JSON.stringify(row))
      // console.log(this.row)
      this.editDialogVisible = true
    },
    editUserInfo () {
      // console.log(this.editUserForm)
      editapi(this.editUserForm).then(res => {
        if (res.data.code === 600) {
          this.$alert('修改成功')
          this.editDialogVisible = false
          this.loaduserinfo()
        } else {
          this.$alert('修改失败')
        }
      })
    }
  }
}
</script>

<style scoped>
  .el-card{
    height: 100%;
    margin-left: 2%;
    width: 90%;
    box-shadow: none !important;
    border: 1px solid #DCDFE6;
  }
</style>
