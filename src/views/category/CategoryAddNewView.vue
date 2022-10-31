<template>
  <div id="app">
    <el-card style="background-color: rgba(255,255,255,0.3)">
      <h3>添加商品类别</h3>
      <el-form>
        <el-form-item label="上级类别" label-width="170px" class="item">
          <template>
            <el-select style="width: 100px" placeholder="请选择">
              <el-option></el-option>
            </el-select>
          </template>
        </el-form-item>
        <el-form-item label="类别名称" label-width="170px" class="item">
          <el-input style="width: 200px" type="text"></el-input>
        </el-form-item>
        <el-form-item label="排序(排序值越小越靠前)" label-width="170px" class="item">
          <el-input style="width: 200px" type="text"></el-input>
        </el-form-item>
        <el-form-item label="是否启用" label-width="170px" class="item">
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="是否在导航栏中显示" label-width="170px" class="item">
          <el-radio v-model="navbar" label="1">是</el-radio>
          <el-radio v-model="navbar" label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="商品图片(<=5M)" label-width="170px" class="item">
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
        <el-form-item label="关键词" label-width="170px" class="item">
          <el-input style="width: 200px" type="text"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button style="margin-left: 170px" type="primary" @click="">添加</el-button>
          <el-button >取消</el-button>
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
      radio: '1',
      navbar:'1',
    };
  }
}

</script>

<style>
.item .el-form-item__label{
  color: #acce8a;
}
</style>