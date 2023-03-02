<script setup lang="ts"></script>

<template>
    <div class="aside">
        <el-menu default-active="2" class="elMenu">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>Navigator One</span>
                </template>
                <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss" scoped>
.aside {
    height: 100vh;
    background-color: #d3dce6;
    color: #fff;
    line-height: 60px;
    text-align: center;
    padding: 0;
    .elMenu {
        height: 100%;
        background-color: #d3dce6;
    }
}
</style>
