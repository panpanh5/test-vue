/* eslint-disable prettier/prettier */
<template>
  <div class="home">
    <header></header>
    <main>
      <div id="nav">
        <el-col :span="12" style="width:100%">
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu v-for="(item, index) in navList" :key="index" index="1">
              <el-menu-item index="1-4-1" route="{ path: 'first' }"
                >选项1</el-menu-item
              >
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <el-submenu
                index="1"
                v-for="(v, vIndex) in item.children"
                :key="vIndex + index"
              >
                <template slot="title">{{ v.name }}</template>
                <el-menu-item index="1-4-1" :route="{ path: '/' }"
                  >选项1</el-menu-item
                >
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </div>
      <router-view />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      navList: [
        {
          name: "首页",
          icon: "el-icon-s-home",
          children: []
        },
        {
          name: "导航一",
          icon: "el-icon-s-release"
        },
        {
          name: "导航二",
          icon: "el-icon-s-ticket"
        },
        {
          name: "导航三",
          icon: "el-icon-s-management"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
/*修改滚动条样式*/
div::-webkit-scrollbar {
  width: 2px;
  height: 10px;
  /**/
}
div::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}
div::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}
div::-webkit-scrollbar-thumb:hover {
  background: #333;
}
div::-webkit-scrollbar-corner {
  background: #179a16;
}
/* 导航 */
#nav {
  width: 200px;
  height: 100%;

  overflow: auto;
}
/* 头部 */
header {
  width: 100%;
  height: 40px;
  background-color: rgb(64, 158, 255);
  position: fixed;
  z-index: 1000;
}
/* 内容区域 */
main {
  display: flex;
  padding-top: 40px;
}
</style>
