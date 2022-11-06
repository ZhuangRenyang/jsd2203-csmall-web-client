<template>
  <div>
    <el-card style="background-color: rgba(255,255,255,0.3)">
      <h3>添加类别</h3>
      <br>
      <el-breadcrumb separator-class="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/admin/user/list">用户管理</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="">添加用户</a></el-breadcrumb-item>
      </el-breadcrumb>
      <br>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" prop="username" label-width="170px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" label-width="170px" class="item">
          <el-input style="width: 200px" type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname" label-width="170px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="avatar" label-width="170px" class="item">
          <el-upload
              action="upload"
              name = "picFile"
              :limit="1"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-success="handleSuccess"
              :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone" label-width="170px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email" label-width="170px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="介绍" prop="description" label-width="170px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="是否启用" prop="enable" label-width="170px" class="item">
          <el-switch
              v-model="ruleForm.enable"
              active-value="1"
              inactive-value="0"
              active-color="#13ce66"
              inactive-color="#faf8f9">
          </el-switch>
        </el-form-item>
        <el-form-item >
          <el-button style="margin-left: 170px" type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          ruleForm: {
            username: '',
            password:'',
            nickname:'',
            avatar:'',
            phone:'',
            email: '',
            enable:"0",
          },
          rules: {
            username: [
              {required: true, message: '请输入用户名', trigger: 'blur'},
              {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
            ],
            password: [
              {required: true, message: '请输入密码', trigger: 'blur'},
              {min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur'}
            ],
            nickname: [
              {required: true, message: '请输入昵称', trigger: 'blur'},
              {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let url = "http://localhost:9081/admins/add-new"
              this.axios.post(url, this.ruleForm).then((response) => {
                    console.log(response.data);
                    if (response.data.code == 20000) {
                      this.$message({
                        type: "success",
                        message: "添加类别成功"
                      })
                    } else {
                      this.$message.error(response.data.message)
                    }
                  }
              )
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>