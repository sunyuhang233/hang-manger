<script lang="ts" setup>
import Header from './cpn/Header.vue';
import Aside from './cpn/Aside.vue';
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <Aside />
            </el-aside>
            <el-container>
                <el-header style="padding: 0">
                    <Header />
                </el-header>
                <el-main>
                    <Transition>
                        <router-view />
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
</style>
