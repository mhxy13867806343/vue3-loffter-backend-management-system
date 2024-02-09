<script setup>
import { useRouter } from 'vue-router'
import { icons } from '@element-plus/icons-vue/global'
const props = defineProps({ route: Object })
const router = useRouter()



</script>
<template>
  <!-- 如果没有子路由且不隐藏时显示 -->
  <el-menu-item :index="router.getFullPath(props.route)" v-if="!props.route.children && props.route.meta.hidden">
    <template #title>
      
      <el-icon v-if="props.route.meta.icon && icons[props.route.meta.icon]">
        <component :is="icons[props.route.meta.icon]">
        </component>
      </el-icon>
      {{ props.route.meta.name }}
    </template>
  </el-menu-item>
  
  <!-- 如果有子路由且不隐藏时显示 -->
  <el-sub-menu v-else-if="props.route.meta.hidden" popper-class="admin-sub-menu" :index="router.getFullPath(props.route)" :show-timeout="0"
               :hide-timeout="0" :popper-offset="0">
    <template #title>
      <el-icon v-if="props.route.meta.icon && icons[props.route.meta.icon]">
        <component :is="icons[props.route.meta.icon]">
        </component>
      </el-icon>
      {{ props.route.meta.name }}
    </template>
    <base-navigator-item :route="routeChild" v-for="routeChild in props.route.children"
                         :key="routeChild.meta.key"></base-navigator-item>
  </el-sub-menu>
</template>



<style></style>
