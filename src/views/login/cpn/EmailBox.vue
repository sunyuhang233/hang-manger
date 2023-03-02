<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { Message, Lock } from '@element-plus/icons-vue';

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    email: '',
    password: '',
});

const rules = reactive<FormRules>({
    email: [
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
        { required: true, message: '请输入邮箱', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 20, message: '密码长度在6-20个字符之间', trigger: 'blur' },
    ],
});

function emailLogin() {
    ruleFormRef.value?.validate(valid => {
        if (valid) {
            console.log('email success');
        } else {
            console.log('error');
        }
    });
}

defineExpose({
    emailLogin,
});
</script>

<template>
    <div class="user">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon>
            <el-form-item prop="email">
                <el-input
                    v-model="ruleForm.email"
                    placeholder="请输入邮箱"
                    :prefix-icon="Message"
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
