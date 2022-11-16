<template>

  <div class="home">
    <el-container>
      <el-header class="el-header">页面的上半部分,顶栏

      </el-header>
      <el-container class="layout-body">
        <el-aside class="layout-aside" width="200px">
          <el-menu
              router
              :default-active="this.$router.currentRoute.path"
              class="el-menu-vertical-demo">
            <!--              @open="handleOpen"-->
            <!--              @close="handleClose">-->
            <el-submenu class="el-submenu" index="/admin/admins/list">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item class="el-menu-item" index="/admin/admins/list">用户列表</el-menu-item>
              <el-menu-item class="el-menu-item" index="/admin/admins/add-new">添加用户</el-menu-item>
            </el-submenu>
            <el-submenu class="el-submenu" index="/admin/brand/list">
              <template slot="title">
                <i class="el-icon-goods"></i>
                <span>品牌管理</span>
              </template>
              <el-menu-item class="el-menu-item" index="/admin/brand/list">品牌列表</el-menu-item>
              <el-menu-item class="el-menu-item" index="/admin/brand/add-new">添加品牌</el-menu-item>
            </el-submenu>
            <el-submenu class="el-submenu" index="/admin/category/list">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>类别管理</span>
              </template>
              <el-menu-item class="el-menu-item" index="/admin/category/list">类别列表</el-menu-item>
              <el-menu-item class="el-menu-item" index="/admin/category/add-new">添加类别</el-menu-item>
            </el-submenu>

            <el-submenu class="el-submenu" index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item class="el-menu-item" index="">商品列表</el-menu-item>
              <el-menu-item class="el-menu-item" index="">添加商品</el-menu-item>
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

* {
  margin: 0;
}

.el-header {
  /*border: 4px solid transparent;*/
  border-radius: 2px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #F78FAD, #FDEB82);
  /*background-image: linear-gradient(to right, #F78FAD, #FDEB82),linear-gradient(90deg, #8F41E9, #578AEF);*/
}

.el-submenu {
  border-radius: 2px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #F5CCF6, #F1EEF9);
}

.el-menu-item {
  border-radius: 2px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #ABC7FF, #C1E3FF);
}

.layout-body {
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 0;
}

.layout-aside {
  border-radius: 2px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #99E5A2, #D4FC78);
}

.el-main {
  background-image: url("../assets/bg.png");
  background-size: cover; /* cover是专门用来设置全屏背景的 */
}

</style>
<script>
</script>
