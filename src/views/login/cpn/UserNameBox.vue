<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue';

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    username: '',
    password: '',
    loading: false,
});

const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '用户名长度在3-10个字符之间', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 20, message: '密码长度在6-20个字符之间', trigger: 'blur' },
    ],
});

function userNameLogin() {
    ruleFormRef.value?.validate(valid => {
        if (valid) {
            console.log('username success');
        } else {
            console.log('error');
        }
    });
}

defineExpose({
    userNameLogin,
});
</script>

<template>
    <div class="user">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon>
            <el-form-item prop="username">
                <el-input
                    v-model="ruleForm.username"
                    placeholder="请输入用户名"
                    :prefix-icon="User"
                />
            </el-form-item>

            <el-form-item prop="password">
                <el-input
                    v-model="ruleForm.password"
                    type="password"
                    placeholder="请输入密码"
                    :prefix-icon="Lock"
                />
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang="scss"></style>
