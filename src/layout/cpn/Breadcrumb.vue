<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';
import Menu from '@/stores/menu';
import { computed } from 'vue';
const route = useRoute();
// 返回Menu 当前的路由面包屑
function mapPathToBreadcrumbs(path: string, userMenus: any[]) {
    const breadcrumbs = [];
    for (let menu of userMenus) {
        if (menu.path === path) {
            breadcrumbs.push({ name: menu.name, path: menu.path });
        } else {
            for (const menuChild of menu.children) {
                if (menuChild.path === path) {
                    breadcrumbs.push({ name: menu.name });
                    breadcrumbs.push({ name: menuChild.name, path: menuChild.path });
                }
            }
        }
    }
    console.log(breadcrumbs);

    return breadcrumbs;
}
const breadcrumbs = computed(() => {
    return mapPathToBreadcrumbs(route.path, Menu);
});
</script>

<template>
    <div class="breadcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
            <template v-for="(item, index) in breadcrumbs" :key="index">
                <el-breadcrumb-item :to="{ path: item.path }">
                    {{ item.name }}
                </el-breadcrumb-item>
            </template>
        </el-breadcrumb>
    </div>
</template>

<style lang="scss" scoped>
.breadcrumb {
    color: #000;
}
</style>
