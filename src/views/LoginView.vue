<template>
<div>
  <h1>这是"其他"页面</h1>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username:'',
        password:''
      },
      rules: {
        username: [
          { required: true, message: '用户名', trigger: 'blur' },
          { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码', trigger: 'blur' },
          { min: 2, max: 32, message: '长度在 2 到 32 个字符', trigger: 'blur' }
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
            username:this.ruleForm.username,
            password:this.ruleForm.password
          }
          this.axios.post(url,dat).then((response)=>{
            if(response.data.code==20000){
              this.$message({
                message:'登录成功',
                type:'success'
              });
              let jwt = response.data.data;
              console.log(jwt);
              localStorage.setItem('jwt',jwt);
              location.href="http://localhost:8080/admin/user/list"
            }else if (response.data.code==59999){
              this.$message.error("用户名不存在!");
            }else {
              this.$message.error("密码错误!")
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

<style scoped>

</style>