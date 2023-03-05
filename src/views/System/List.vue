<script setup lang="ts">
import { ref } from 'vue';
import Content from './cpn/Content.vue';
import Search from './cpn/Search.vue';
import Model from './cpn/Model.vue';

const ContentRef = ref<InstanceType<typeof Content>>();

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
    ModelRef.value?.setModelVisible(false,row);
};
</script>

<template>
    <div class="list">
        <div class="search">
            <Search @submit="handleSubmit" @reset="handleReset" />
        </div>
        <div class="content">
            <Content ref="ContentRef" @addItem="handleAdd" @editItem="handleEdit"/>
            <Model ref="ModelRef" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.list {
    overflow: hidden;
}
</style>
