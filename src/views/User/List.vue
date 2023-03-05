<script setup lang="ts">
import { ref } from 'vue';
import Model from './cpn/Model.vue';
import pageSearch from '@/components/page-search/page-search.vue';
import searchConfig from './config/search.config';
import pageContent from '@/components/page-content/page-content.vue';
import contentConfig from './config/content.config';

const ContentRef = ref<InstanceType<typeof pageContent>>();

const handleSubmit = (form: any) => {
    console.log(form);
    ContentRef.value?.fetchTableData(form);
};

const handleReset = () => {
    ContentRef.value?.fetchTableData();
};

// 模态框
const ModelRef = ref<InstanceType<typeof Model>>();

const handleAdd = () => {
    ModelRef.value?.setModelVisible();
};

const handleEdit = (row: any) => {
    ModelRef.value?.setModelVisible(false, row);
};
</script>

<template>
    <div class="list">
        <div class="search">
            <pageSearch :searchConfig="searchConfig" @submit="handleSubmit" @reset="handleReset" />
        </div>
        <div class="content">
            <!-- <Content ref="ContentRef" @addItem="handleAdd" @editItem="handleEdit" /> -->
            <pageContent
                :contentConfig="contentConfig"
                ref="ContentRef"
                @addItem="handleAdd"
                @editItem="handleEdit"
            >
                <!-- 自定义表格 使用插槽 -->
                <template #custom="scope">我是自定义内容{{ scope.row.name }}</template>
            </pageContent>
            <Model ref="ModelRef" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.list {
    overflow: hidden;
}
</style>
