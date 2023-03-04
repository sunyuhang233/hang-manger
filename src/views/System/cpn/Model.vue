<template>
    <el-dialog v-model="centerDialogVisible" :title="title" width="30%" center>
        <div class="form">
            <el-form
                ref="ruleFormRef"
                :model="formData"
                label-width="80px"
                status-icon
                size="large"
            >
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="formData.name" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item label="昵称" prop="address">
                    <el-input v-model="formData.address" placeholder="请输入昵称" />
                </el-form-item>
            </el-form>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleConfirmClick">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

const formData = reactive<any>({
    name: '',
    address: '',
});

const ruleFormRef = ref<FormInstance>();

const centerDialogVisible = ref(false);

const isNewRef = ref(true); // 判断是否显示密码

const title = ref('新增数据');

// 设置模态框可见
function setModelVisible(isNew: boolean = true, row?: any) {
    centerDialogVisible.value = true;
    isNewRef.value = isNew;
    title.value = isNew ? '新增数据' : '编辑数据';
    if (!isNew && row) {
        // 编辑
        for (const key in formData) {
            //遍历
            formData[key] = row[key];
        }
    } else {
        // 新增 清空数据
        for (const key in formData) {
            //遍历
            formData[key] = '';
        }
    }
}

// 点击确定
function handleConfirmClick() {
    // 判断是否是新增
    if (isNewRef.value) {
        // 新增
        console.log('新增');
    } else {
        // 编辑
        console.log('编辑');
    }
    centerDialogVisible.value = false;
}

defineExpose({
    setModelVisible,
});
</script>
<style scoped lang="scss">
.form {
    padding: 0 20px;
}
</style>
