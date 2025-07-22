<template>
  <div class="page-container">
    <div class="sidebar-menu toggle-others fixed" :class="{ collapsed: !sidebarOpen }">
      <div class="sidebar-menu-inner">
        <header class="logo-env">
          <!-- logo -->
          <div class="logo">
            <a href="javascript:void(0)" class="logo-expanded" style="text-decoration:none;">
              <span style="font-size:4.2rem;font-weight:900;color:#fff;letter-spacing:2px;text-shadow:0 2px 12px rgba(0,0,0,0.22);font-family:'Lobster','Pacifico',cursive;">TideStack</span>
            </a>
            <a href="javascript:void(0)" class="logo-collapsed" style="text-decoration:none;">
              <span style="font-size:2.7rem;font-weight:900;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,0.22);font-family:'Lobster','Pacifico',cursive;">T</span>
            </a>
          </div>
          <div class="mobile-menu-toggle visible-xs">
            <a href="javascript:void(0)" data-toggle="user-info-menu">
              <i class="linecons-cog"></i>
            </a>
            <a href="javascript:void(0)" data-toggle="mobile-menu">
              <i class="fa-bars"></i>
            </a>
          </div>
        </header>
        <!-- 侧边栏 -->
        <ul id="main-menu" class="main-menu">
          <template v-for="(menu, idx) in items" :key="idx">
            <SidebarMenuItem :item="menu" :transName="transName" />
          </template>
          <!-- 关于本站 -->
          <li class="submit-tag">
            <router-link to="/about">
              <i class="linecons-heart"></i>
              <span class="tooltip-blue">关于本站</span>
              <span class="label label-Primary pull-right hidden-collapsed"
                >♥︎</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-content">
      <nav class="navbar user-info-navbar" role="navigation">
        <ul class="user-info-menu left-links list-inline list-unstyled">
          <li class="hidden-sm hidden-xs">
            <a href="javascript:void(0)" @click="toggleSidebar"><i class="fa-bars"></i></a>
          </li>
          <li class="dropdown hover-line language-switcher">
            <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
              <img :src="lang.flag" /> {{ lang.name }}
            </a>
            <ul class="dropdown-menu languages">
              <li
                :class="{ active: langItem.key === lang.key }"
                v-for="langItem in langList"
                :key="langItem.key"
              >
                <a href="javascript:void(0)" @click="lang = langItem">
                  <img :src="langItem.flag" /> {{ langItem.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="user-info-menu right-links list-inline list-unstyled">
          <li class="hidden-sm hidden-xs">
            <a href="https://github.com/Anjaxs/WebStack-vue" target="_blank">
              <i class="fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <template v-for="(item, idx) in items" :key="idx">
          <MainContentItem :item="item" :transName="transName" />
        </template>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import WebItem from "../components/WebItem.vue"
import Footer from "../components/Footer.vue"
import itemsData from "../assets/data.json"
import { onMounted, ref } from 'vue'
import SidebarMenuItem from '../components/SidebarMenuItem.vue'
import MainContentItem from '../components/MainContentItem.vue'
// import { loadJs } from '../assets/js/app.js' // 如需动态加载JS可适配

const items = ref(itemsData)
const langList = ref([
  {
    key: "zh",
    name: "简体中文",
    flag: "./assets/images/flags/flag-cn.png",
  },
  {
    key: "en",
    name: "English",
    flag: "./assets/images/flags/flag-us.png",
  },
])
const lang = ref(langList.value[0])

function transName(webItem) {
  return lang.value.key === "en" ? webItem.en_name : webItem.name
}

// 侧边栏伸缩逻辑
const sidebarOpen = ref(true)
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
// onMounted(() => {
//   loadJs()
// })
</script>

<style>
.sidebar-menu.collapsed {
  width: 60px; /* 或你希望的收缩宽度 */
  min-width: 60px;
  overflow: hidden;
}
/* 可根据实际 UI 进一步优化收缩时的样式 */
</style> 