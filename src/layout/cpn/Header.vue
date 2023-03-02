<script setup lang="ts">
function goToInfo() {
    console.log('goToInfo');
}

function edithPassword() {
    console.log('edithPassword');
}

function quit() {
    console.log('quit');
}
</script>

<template>
    <div class="header">
        <el-col :span="6" class="left">
            <el-icon class="fontSize"><Fold /></el-icon>
        </el-col>
        <el-col :span="18" class="right">
            <el-dropdown>
                <span class="dropdown">
                    <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    />
                    <span class="name">阿航</span>
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="goToInfo">个人信息</el-dropdown-item>
                        <el-dropdown-item @click="edithPassword">修改密码</el-dropdown-item>
                        <el-dropdown-item @click="quit">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
    </div>
</template>

<style lang="scss" scoped>
.header {
    height: 60px;
    background-color: skyblue;
    color: #fff;
    display: flex;
    align-items: center;
    .left {
        display: flex;
        align-items: center;
        padding-left: 40px;
        .fontSize {
            font-size: 24px;
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
