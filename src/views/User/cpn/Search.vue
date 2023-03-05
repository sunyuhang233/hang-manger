<script setup lang="ts">
import { Search, Refresh } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules, ElForm } from 'element-plus';

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date: '',
});

const ruleFormRef = ref<typeof ElForm>();

const emit = defineEmits(['submit', 'reset']);

/**
 * 搜索
 */
function handleSubmit() {
    emit('submit', form);
}
/**
 * 重置
 */
const handleReset = () => {
    ruleFormRef.value?.resetFields();
    emit('reset');
};
</script>

<template>
    <div class="search">
        <el-form :model="form" label-width="80px" size="large" ref="ruleFormRef">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content ep-bg-purple" />
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="form.name" placeholder="请输入要搜索的用户名" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content ep-bg-purple" prop="name" />
                    <el-form-item label="用户名">
                        <el-input v-model="form.name" placeholder="请输入要搜索的用户名" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content ep-bg-purple" prop="name" />
                    <el-form-item label="用户名">
                        <el-input v-model="form.name" placeholder="请输入要搜索的用户名" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content ep-bg-purple" prop="region" />
                    <el-form-item label="状态">
                        <el-select
                            v-model="form.region"
                            placeholder="请选择下拉框"
                            style="width: 100%"
                        >
                            <el-option label="启用" :value="1" />
                            <el-option label="禁用" :value="0" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content ep-bg-purple" />
                    <el-form-item label="创建时间" prop="date">
                        <el-date-picker
                            v-model="form.date"
                            type="daterange"
                            range-separator="-"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                        />
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div class="btns">
            <el-button type="primary" size="large" :icon="Search" @click="handleSubmit">
                搜索
            </el-button>
            <el-button size="large" :icon="Refresh" @click="handleReset">重置</el-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.search {
    background-color: #fff;
    padding: 20px;
    .el-form-item {
        padding: 20px 30px;
        margin-bottom: 0;
    }
    .btns {
        text-align: right;
        padding: 0 50px 10px 0;
    }
}
</style>
