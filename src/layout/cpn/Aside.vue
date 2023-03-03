<script setup lang="ts">
import router from '@/router';
import { onBeforeRouteUpdate } from 'vue-router';
import Menu from '../../stores/menu';
import { ref } from 'vue';
defineProps({
    asideValue: {
        type: Boolean,
        default: false,
    },
});

const acticeIndex = ref(router.currentRoute.value.fullPath);

onBeforeRouteUpdate((to, from) => {
    acticeIndex.value = to.path;
});
console.log(Menu);
</script>

<template>
    <div class="aside">
        <el-menu
            :default-active="acticeIndex"
            class="elMenu"
            text-color="#b7bdc3"
            active-text-color="#fff"
            background-color="#001529"
            :collapse="asideValue"
            unique-opened
            :collapse-transition="false"
            router
        >
            <!-- 遍历Menu 判断是否有children-->
            <!-- <el-submenu v-for="item in Menu" :key="item.name" :index="item.path">
                <template #title>
                    <img class="img" :src="item.icon" alt="" />
                    <span>{{ item.name }}</span>
                </template>
                <el-menu-item v-for="child in item.children" :key="child.name" :index="child.path">
                    <span>{{ child.name }}</span>
                </el-menu-item>
            </el-submenu> -->
            <template v-for="(item, index) in Menu" :key="index">
                <el-sub-menu :index="item.path" v-if="item.children.length" :key="index">
                    <template #title>
                        <el-icon :size="20">
                            <component :is="item.icon" />
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item
                        v-for="(item1, index1) in item.children"
                        :index="item1.path"
                        :key="index1"
                    >
                        <span>{{ item1.name }}</span>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item :index="item.path" v-else :key="item.path">
                    <el-icon :size="20">
                        <component :is="item.icon" />
                    </el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<style lang="scss" scoped>
.aside {
    height: 100vh;
    background-color: #001529;
    color: #fff;
    line-height: 60px;
    text-align: center;
    padding: 0;
    overflow: hidden;
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        .img {
            width: 30px;
            height: 30px;
            margin-right: 15px;
        }
    }

    .elMenu {
        height: 100%;
        background-color: #001529;
        border: none;
    }
}
</style>
