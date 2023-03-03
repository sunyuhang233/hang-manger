<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { ElConfigProvider } from 'element-plus';
</script>

<template>
    <div id="app">
        <el-config-provider :locale="zhCn">
            <router-view />
        </el-config-provider>
    </div>
</template>

<style scoped lang="scss">
#app {
    height: 100vh;
    width: 100vw;
}
</style>
