<template>
  <body>
  <div id="app">
    <br>
    <h1>欢迎来到酷鲨商城</h1>
    <br>
    <h2>CoolSharkMall</h2>
    <br>
    <el-card style="width: 700px;height:400px;margin: 0 auto; background-color: rgba(255,255,255,0.3)">
      <el-form style="width: 450px;margin: 100px auto" label-width="80px" :model="ruleForm" :rules="rules"
               ref="ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="position: relative;right: 35px" type="primary" @click="submitForm('ruleForm')">登录
          </el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '用户名', trigger: 'blur'},
          {min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码', trigger: 'blur'},
          {min: 2, max: 32, message: '长度在 2 到 32 个字符', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          let url = "http://localhost:9081/admins/login";
          let dat = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }
          this.axios.post(url, dat).then((response) => {
            if (response.data.code == 20000) {
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              let jwt = response.data.data;
              console.log(jwt);
              localStorage.setItem('jwt', jwt);
              location.href = "http://localhost:8080/admin/user/list"
            } else if (response.data.code == 59999) {
              this.$message.error("密码或用户名错误!");
            } else {
              this.$message.error("用户名不存在!")
            }
          })
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
<style>
.el-form-item__label{
  color: rgb(0, 150, 215);
}
h1 {
  font-size: 72px;
  color: #F5CCF6;
  margin: 0;
}

img {
  width: auto;
}

h2 {
  font-size: 32px;
  color: #0095d7;
  margin: 0; /* 去掉所有边框 */
}

body {
  width: auto;
  height:1000px;

  /*margin: 0;*/
  background-image: url("../assets/bg.png");
  background-size: cover; /* cover是专门用来设置全屏背景的 */
  text-align: center; /* 页面内容居中 */
}
</style>