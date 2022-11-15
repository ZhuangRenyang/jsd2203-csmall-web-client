<template>
  <div id="app">
    <router-view/>
    <!-- <router-view /> -->
  </div>
</template>
<script>
// export default {
//   name: 'App',
//   created() {
//     window.L2Dwidget
//         //此处是对点击人物时触发事件的监听
//         .on('*', (name) => {
//
//           console.log('%c 你点击了 ' + '%c -> ' + name, 'background: #222; color: yellow',
//               'background: #fff; color: #000')
//         })
//         //对人物的属性配置
//         .init({
//           pluginRootPath: '../live2dw/', //人物文件夹的位置
//           pluginJsPath: 'lib/',
//           pluginModelPath: 'live2d-widget-model-shizuku/assets/',
//           model: {
//             jsonPath: '../live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json'
//           },
//           dialog: {
//             enable: true, //是否开启对话框
//             script: {
//               //每20s，显示一言（调用一言Api返回的句子）
//               'every idle 20s': '$hitokoto$',
//               //触摸到class='star'对象,将会展示的文字
//               'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
//               //触摸到身体
//               'tap body': '害羞⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄',
//               //触摸到头部
//               'tap face': '~~'
//             }
//           },
//           display: { //人物的属性配置
//             position: 'left',
//             width: 350,
//             height: 800,
//             hOffset: 200, // 横向偏移
//             vOffset: -100 // 纵向偏移
//           },
//           mobile: {
//             show: true, //是否在移动端展示
//             scale: 0.5 //t透明度
//           }
//
//         });
//   }
//
// }
export default {
  name: 'app',
  /*看板娘初始化
    参数说明
    model 模型的配置
       json 文件资源路径，可以支持网络路径，此处使用的是相对路径
       scale 模型缩放系数
    display 模型布局
       position 位置
       width 宽度
       height 高度
       hOffset 水平偏移量
       vOffset 垂直偏移量
    mobile 移动端配置
       show 显示/隐藏
       scale 缩放比例
    react 模型矩形框样式
       opacity 透明度
       opacityDefault 默认透明度
       opacityOnHover 鼠标悬浮透明度
  */
  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: '../live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-haru_2/assets/', //中间这个haru_2就是你的老婆,想换个老婆,换这个就可以了
        tagMode: false,
        debug: false,
        model: { jsonPath: '../live2dw/live2d-widget-model-haru_2/assets/haru02.model.json' },
        display: { position: 'right', width: 350, height: 800 },  //调整大小,和位置
        mobile: { show: true },   //要不要盯着你的鼠标看
        log: false,
      })
    }, 1000)
  }
}


</script>

<style>
body {
  margin: 0;
  width: 100%;
}

html {
  width: 100%;
  height: 100%;
}

.app {
  /*width: 100%;*/
  /*height: 100%;*/
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /*text-align:center;*/
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;

}
</style>
