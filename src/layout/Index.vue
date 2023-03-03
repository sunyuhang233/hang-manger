<script lang="ts" setup>
import { ref } from 'vue';
import Header from './cpn/Header.vue';
import Aside from './cpn/Aside.vue';

const asideValue = ref(false);

const handleChange = (isAside: boolean) => {
    asideValue.value = isAside;
};
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside :width="asideValue ? '60px' : '210px'" class="aside">
                <Aside :asideValue="asideValue" />
            </el-aside>
            <el-container>
                <el-header style="padding: 0">
                    <Header @icon-change="handleChange" />
                </el-header>
                <el-main class="main">
                    <Transition>
                        <router-view class="view" />
                    </Transition>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
/* 进入动画 */
.v-enter-active {
    animation: move 1s;
}

/* 离开动画 */
.v-leave-active {
    animation: move 1s reverse;
}

@keyframes move {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translate(0);
    }
}

.main {
    height: calc(100vh - 60px);
    overflow: auto;
    background-color: #ececee;
}
.view {
    height: 100%;
    width: 100%;
    border-radius: 4px;
}
.el-main {
    padding: 5px;
}
.aside {
    transition: all 0.5s ease-in-out;
}
</style>
