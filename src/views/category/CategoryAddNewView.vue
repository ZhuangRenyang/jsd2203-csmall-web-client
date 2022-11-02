<template>
  <div>
    <el-card style="background-color: rgba(255,255,255,0.3)">
      <h3>添加类别</h3>
      <br>
      <el-breadcrumb separator-class="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/admin/category/list">类别管理</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="/admin/category/add-new">添加类别</a></el-breadcrumb-item>
      </el-breadcrumb>
      <br>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="上级类别" prop="parentId" label-width="170px" class="item">
          <template>
            <el-select style="width: 100px" placeholder="请选择">
              <el-option></el-option>
            </el-select>
          </template>
        </el-form-item>
        <el-form-item label="类别名称" prop="name" label-width="170px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="排序(排序值越小越靠前)" prop="sort" label-width="170px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.sort"></el-input>
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
        <el-form-item label="是否在导航栏中显示" prop="isDisplay" label-width="170px" class="item">
          <el-radio v-model="ruleForm.isDisplay" label="0">否</el-radio>
          <el-radio v-model="ruleForm.isDisplay" label="1">是</el-radio>
        </el-form-item>
        <el-form-item label="商品图片(<=5M)" prop="icon" label-width="170px" class="item">
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
        <el-form-item label="关键词" prop="keywords" label-width="170px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.keywords"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button style="margin-left: 170px" type="primary" @click="submitForm('ruleForm')">添加</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CategoryAddNewView",
  data () {
    return {
      ruleForm: {
        name: '',
        parentId:'',
        keywords:'',
        sort:'',
        icon:'',
        isDisplay: '0',
        enable:"0",
      },
      rules: {
        name: [
          {required: true, message: '请输入类别名称', trigger: 'blur'},
          {min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let url = "http://localhost:9080/categories/add-new"
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

<style>
.item .el-form-item__label{
  color: #acce8a;
}
</style>