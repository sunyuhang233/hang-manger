<script lang="ts" setup>
import UserNameBox from './UserNameBox.vue';
import EmailBox from './EmailBox.vue';
import { Avatar, Message } from '@element-plus/icons-vue';

import { ref } from 'vue';

const activeTab = ref('phone');

// 切换tab
const tabClick = (tab: string) => {
    activeTab.value = tab;
};

const userBox = ref<InstanceType<typeof UserNameBox>>();

const emailBox = ref<InstanceType<typeof EmailBox>>();

function handleLogin() {
    if (activeTab.value === 'phone') {
        userBox.value?.userNameLogin();
    } else {
        emailBox.value?.emailLogin();
    }
}
</script>

<template>
    <div class="loginBox">
        <h1 class="title">阿航后台管理系统</h1>
        <el-tabs
            type="border-card"
            class="demo-tabs"
            stretch
            @tab-change="tabClick"
            v-model="activeTab"
        >
            <el-tab-pane name="phone">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon><Avatar /></el-icon>
                        <span class="l5">账号</span>
                    </span>
                </template>
                <UserNameBox ref="userBox" />
            </el-tab-pane>
            <el-tab-pane name="email">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon><Message /></el-icon>
                        <span class="l5">邮箱</span>
                    </span>
                </template>
                <EmailBox ref="emailBox" />
            </el-tab-pane>
        </el-tabs>
        <el-button type="primary" class="loginBtn" round @click="handleLogin">登录</el-button>
    </div>
</template>

<style scoped lang="scss">
.loginBox {
    width: 350px;

    .title {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    .loginBtn {
        width: 100%;
        margin-top: 20px;
    }
}
</style>
