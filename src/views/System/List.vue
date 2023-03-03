<script setup lang="ts">
import { ref } from 'vue';
import Content from './cpn/Content.vue';
import Search from './cpn/Search.vue';

const ContentRef = ref<InstanceType<typeof Content>>();

const handleSubmit = (form: any) => {
    console.log(form);
    ContentRef.value?.fetchTableData(form);
};

const handleReset = () => {
    ContentRef.value?.fetchTableData();
};
</script>

<template>
    <div class="list">
        <div class="search">
            <Search @submit="handleSubmit" @reset="handleReset" />
        </div>
        <div class="content">
            <Content ref="ContentRef" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.list {
    overflow: hidden;
    border-radius: 20px;
}
</style>
