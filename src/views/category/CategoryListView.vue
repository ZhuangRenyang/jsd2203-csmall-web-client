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
                type="text"
                prop="name"
                v-model="ruleForm.name"
                @click="categoryEditOpen(scope.row.id)">修改
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="openDeleteConfirm(scope.row.id)">删除
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
      tableData: [],
      ruleForm: {
        name: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入品牌名称', trigger: 'blur'},
          {min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur'}
        ],
        // sort: [
        //   {pattern: "/^[1-9]{1}[0-9]?$/", message: '必须是0-99之间的数值', trigger: 'blur'},
        // ]
      }
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
    categoryEditOpen(id) {
      this.$prompt('请输入类别名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        // inputPattern: "",
        // inputErrorMessage: '格式不正确'
      }).then(({name}) => {
          this.categoryEdit(id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    categoryEdit(id) {
      let url = "http://localhost:9080/categories/"+id+"/update"
      this.axios.post(url,name).then((response) =>{
        let jsonResult = response.data;
        if (jsonResult.code == 20000){
          this.$message({
            type: "success",
            message: "修改品牌成功"
          })
        }else {
          this.$message.error(response.data.message)
        }
        this.loadBrands();
      })
    },
    openDeleteConfirm(id) {
      this.$confirm('此操作将永久删除类别数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.categoryDelete(id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    categoryDelete(id) {
      let url = "http://localhost:9080/categories/"+id+"/delete";
      this.axios.post(url).then((response)=>{
        let jsonResult = response.data;
        if (jsonResult.code == 20000){
          this.$message({
            type: "success",
            message: "删除类别成功"
          })
        }else {
          this.$message.error(response.data.message)
        }
        this.loadBrands();
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