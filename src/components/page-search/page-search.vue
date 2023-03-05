<script setup lang="ts">
import { Search, Refresh } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules, ElForm } from 'element-plus';
import searchConfig from '@/views/User/config/search.config';

interface IProps {
    searchConfig: {
        formItems: any[];
    };
}
const props = defineProps<IProps>();

// 初始化表单 初始化表单数据
const initForm: any = {};
for (const item of searchConfig.formItems) {
    initForm[item.prop] = '';
}

const form = reactive(initForm);

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
                <template v-for="item in searchConfig.formItems" :key="item.prop">
                    <el-col :span="8">
                        <el-form-item :label="item.label" :prop="item.prop">
                            <template v-if="item.type === 'input'">
                                <el-input
                                    v-model="form[item.prop]"
                                    :placeholder="item.placeholder"
                                />
                            </template>
                            <template v-if="item.type === 'date-picker'">
                                <el-date-picker
                                    v-model="form[item.prop]"
                                    :placeholder="item.placeholder"
                                    type="daterange"
                                    range-separator="-"
                                    start-placeholder="开始时间"
                                    end-placeholder="结束时间"
                                />
                            </template>
                            <template v-if="item.type === 'select'">
                                <el-select
                                    v-model="form[item.prop]"
                                    :placeholder="item.placeholder"
                                    style="width: 100%"
                                >
                                    <el-option
                                        v-for="option in item.options"
                                        :key="option.value"
                                        :label="option.label"
                                        :value="option.value"
                                    />
                                </el-select>
                            </template>
                        </el-form-item>
                    </el-col>
                </template>
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
