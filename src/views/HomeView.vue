<template>
  <div class="home">
    <el-container>
      <el-header class="layout-header">页面的上半部分,顶栏

      </el-header>
      <el-container class="layout-body">
        <el-aside class="layout-aside" width="200px">
          <el-menu
              router
              :default-active="this.$router.currentRoute.path"
              class="el-menu-vertical-demo">
<!--              @open="handleOpen"-->
<!--              @close="handleClose">-->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>用户管理</span>
              </template>
                <el-menu-item index="/admin/user/list">用户列表</el-menu-item>
                <el-menu-item index="/admin/user/add-new">添加用户</el-menu-item>
            </el-submenu>
            <el-submenu index="/admin/brand/list">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>品牌管理</span>
            </template>
              <el-menu-item index="/admin/brand/list">品牌列表</el-menu-item>
              <el-menu-item index="/admin/brand/add-new">添加品牌</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="/admin/category/list">商品列表</el-menu-item>
              <el-menu-item index="/admin/category/add-new">添加商品</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
*{
  margin: 0;
}
.layout-header{
  background-color: #42b983;
  color: #fcfcfc;
}
.layout-body{
  position: absolute;
  top: 60px;
  right: 0;
  bottom:0;
  left: 0;
}
.layout-aside{
  background-color: #7fffd4;
}
.el-main{
  background-image: url("../assets/bg.png");
  background-size: cover; /* cover是专门用来设置全屏背景的 */
}
</style>
<script>
</script>
