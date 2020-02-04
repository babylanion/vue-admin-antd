<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <Menu></Menu>
    <a-layout>
      <a-layout-header style="background: #FFF; padding: 0">
        <a-icon style="float: left;"
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
         <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Menu from './Menu'
export default {
  name: 'Collect',
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    Menu
  }
}
</script>

<style>
  #components-layout-demo-custom-trigger {
    height: 100%;
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
