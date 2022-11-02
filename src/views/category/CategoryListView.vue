<template>
  <div>
    <el-card style="background-color: rgba(255,255,255,0.3)">
      <br>
      <h3>分类列表</h3>
      <el-breadcrumb separator-class="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/admin/category/list">分类管理</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="">分类列表</a></el-breadcrumb-item>
      </el-breadcrumb>
      <br>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            prop="id"
            label="id"
            width="60">
        </el-table-column>
        <el-table-column
            prop="name"
            label="类别名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="keywords"
            label="关键词列表"
            width="290">
        </el-table-column>
        <el-table-column
            prop="sort"
            label="序号"
            width="80">
        </el-table-column>
        <el-table-column
            prop="icon"
            label="图片URL"
            width="180">
        </el-table-column>
        <el-table-column
            prop="gmtCreate"
            label="创建时间"
            width="180">
        </el-table-column>
        <el-table-column prop="id" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="categoryEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="categoryDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    loadBrands: function () {
      let url = "http://localhost:9080/categories";
      this.axios.get(url).then((response) => {
        console.log(response.data);
        let jsonResult = response.data;
        if (jsonResult.code == 20000) {
          this.tableData = jsonResult.data;
        } else {
          this.$message.error(jsonResult.message)
        }
      })
    },
    categoryEdit(index, row) {
      console.log(index, row);
    },
    categoryDelete(index,row) {
      let url = "http://localhost:9080/categories/delete?id="
      this.axios.post(url,row).then(function(){
        location.reload();
      })
    }
  },
  created() {//已创建，在mounted、显示页面之前执行
    console.log("create")
  },
  mounted() {//已挂载，在created之后，在显示页面之前执行
    console.log("mounted")
    this.loadBrands();
  }
}
</script>

<style scoped>

</style>