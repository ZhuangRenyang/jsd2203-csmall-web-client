<template>
  <div>
    <el-card style="background-color: rgba(255,255,255,0.3)">

      <h3>用户列表</h3>
      <br>
      <el-breadcrumb separator-class="/">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/admin/user/list">用户管理</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="">用户列表</a></el-breadcrumb-item>
      </el-breadcrumb>
      <br>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column prop="id" label="编号" width="60"></el-table-column>
        <el-table-column prop="username" label="用户名" width="100"></el-table-column>
        <el-table-column prop="password" label="密码" width="120"></el-table-column>
        <!--        <el-table-column prop="logo" label="品牌logo"></el-table-column>-->
        <!--        <el-table-column prop="description" label="品牌简介"></el-table-column>-->
        <el-table-column prop="nickname" label="昵称"></el-table-column>
        <el-table-column prop="phone" label="手机号码" width="80"></el-table-column>
        <el-table-column prop="email" label="电子邮箱" width="80"></el-table-column>
        <el-table-column prop="gmtCreate" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="enable" label="是否启用" label-width="80px">
          <template slot-scope="scope">
            <el-switch
                v-model="scope.row.enable"
                :active-value="1"
                :inactive-value="0"
                active-color="#13ce66"
                inactive-color="#fdef34">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click=" userEdit(scope.row.id)">修改
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
      tableData: []
    }
  },
  methods: {
    loadBrands: function () {
      let url = "http://localhost:9081/admins";
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
    userEdit(id) {
      // let url = "http://localhost:9080/brands/"+id+"/update"
      // this.axios.post(url).then((response) => {
      //   if (response.data.code == 20000) {
      //     this.$message({
      //       type: "success",
      //       message: "修改品牌成功"
      //     })
      //   } else {
      //     this.$message.error(response.data.message)
      //   }
      // })
      // console.log(index,id);
    },
    openDeleteConfirm(id) {
      this.$confirm('此操作将永久删除用户数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.userDelete(id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    userDelete(id) {
      let url = "http://localhost:9080/brands/"+id+"/delete"
      this.axios.post(url).then((response) =>{
        let jsonResult = response.data;
        if (jsonResult.code == 20000){
          this.$message({
            type: "success",
            message: "删除品牌成功"
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