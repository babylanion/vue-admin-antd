<template>
  <a-layout-sider :trigger="null"
                  collapsible
                  v-model="collapsed">
    <div class="logo" />
    <a-menu theme="dark"
            mode="inline"
            :defaultSelectedKeys="['1']">
      <a-menu-item v-for="item in menuData" :key="item.path">
        <a-icon :type="item.icon" />
        <router-link :to="item.path">
          <span>頁面</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data () {
    return {
      menuData: [
        {
          name: '首頁',
          path: '/home',
          icon: 'home'
        },
        {
          name: '頁面1',
          path: '/page',
          icon: 'user'
        }
      ]
    }
  }
}
</script>
