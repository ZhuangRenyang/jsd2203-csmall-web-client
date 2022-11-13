<template>
  <div>
    <el-card style="background-color: rgba(255,255,255,0.3)">
      <h3>编辑商品品牌</h3>
      <br>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/admin/brand/list">品牌管理</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="/admin/brand/add-new">添加品牌</a></el-breadcrumb-item>
      </el-breadcrumb>
      <br>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="品牌名称" prop="name" label-width="120px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="品牌拼音" prop="pinyin" label-width="120px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.pinyin"></el-input>
        </el-form-item>
        <el-form-item label="品牌LOGO" prop="logo" label-width="120px" class="item">
          <el-upload
              action="upload"
              name="picFile"
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
        <el-form-item label="类别id" prop="categoryId" label-width="120px" class="item">
          <template>
            <el-select style="width: 150px" placeholder="请选择">
              <el-option></el-option>
            </el-select>
          </template>
        </el-form-item>
        <el-form-item label="品牌简介" prop="description" label-width="120px" class="item">
          <el-input
              style="width: 300px"
              type="textarea"
              placeholder="请输入内容"
              v-model="ruleForm.description"
              maxlength="1000"
              show-word-limit

          >
          </el-input>
        </el-form-item>
        <el-form-item label="关键词列表" prop="keywords" label-width="120px" class="item">
          <el-input style="width: 200px" type="text" v-model="ruleForm.keywords"></el-input>
        </el-form-item>
        <el-form-item label="排序查" prop="sort" label-width="120px" class="item">
          <el-input style="width: 100px" type="text" v-model="ruleForm.sort"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left: 130px" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">返回</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        pinyin: '',
        logo: '',
        categoryId: '',
        description: '',
        keywords: '',
        sort: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入品牌名称', trigger: 'blur'},
          {min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur'}
        ],
        pinyin: [
          {required: true, message: '请输入品牌拼音', trigger: 'blur'},
          {min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur'}
        ],
        // sort: [
        //   {pattern: "/^[1-9]{1}[0-9]?$/", message: '必须是0-99之间的数值', trigger: 'blur'},
        // ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let url = "http://localhost:9080/brands/add-new"
          this.axios.create({headers:{'Authorization':localStorage
                  .getItem('jwt')}}).post(url, this.ruleForm).then((response) => {
                console.log(response.data);
                if (response.data.code == 20000) {
                  this.$message({
                    type: "success",
                    message: "添加品牌成功"
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
.item .el-form-item__label {
  color: #acce8a;
}
</style>