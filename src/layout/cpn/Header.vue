<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue';
import { ref } from 'vue';
import { Expand, Fold } from '@element-plus/icons-vue';
import router from '@/router';
import { clearCache } from '@/utils/cache';
function goToInfo() {
    console.log('goToInfo');
}

function edithPassword() {
    console.log('edithPassword');
}

const quit = () => {
    clearCache();
    router.push('/login');
};

const isFold = ref(false);

const emit = defineEmits(['iconChange']);

const iconChange = () => {
    isFold.value = !isFold.value;
    console.log(isFold.value);
    emit('iconChange', isFold.value);
};
</script>

<template>
    <div class="header">
        <el-col :span="6" class="left">
            <div class="content">
                <el-icon class="fontSize">
                    <component :is="isFold ? 'Expand' : 'Fold'" @click="iconChange" />
                </el-icon>
                <Breadcrumb />
            </div>
        </el-col>
        <el-col :span="18" class="right">
            <el-dropdown>
                <span class="dropdown">
                    <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    />
                    <span class="name">阿航</span>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
    </div>
</template>

<style lang="scss" scoped>
.header {
    height: 60px;
    background-color: #fff;
    color: #fff;
    display: flex;
    align-items: center;
    .left {
        display: flex;
        align-items: center;
        padding-left: 40px;
        cursor: pointer;
        .fontSize {
            font-size: 24px;
            color: #000;
            margin-right: 10px;
        }
        .content {
            display: flex;
            align-items: center;
        }
    }
    .right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 40px;
        .dropdown {
            display: flex;
            align-items: center;
            .name {
                margin-left: 5px;
            }
            .el-icon--right {
                margin-left: 5px;
            }
        }
    }
}
</style>
