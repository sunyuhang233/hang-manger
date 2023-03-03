<script setup lang="ts">
import { ref } from 'vue';
import { Delete, Edit } from '@element-plus/icons-vue';

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
];

const currentPage4 = ref(1);
const pageSize4 = ref(10);

// 网络请求
function fetchTableData(form: any = {}) {
    console.log('fetch table data');
}

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`);
};

/**
 * 暴露网络请求
 */
defineExpose({
    fetchTableData,
});
</script>

<template>
    <div class="content">
        <div class="header">
            <h3>用户列表</h3>
            <el-button type="primary">新建用户</el-button>
        </div>
        <div class="table">
            <el-table :data="tableData" stripe border style="width: 100%">
                <el-table-column type="selection" width="50" />
                <el-table-column label="序号" type="index" width="60" />
                <el-table-column prop="date" label="Date" align="center" />
                <el-table-column prop="name" label="Name" align="center" />
                <el-table-column prop="address" label="Address" align="center" />
                <el-table-column label="操作" align="center">
                    <template #default="scope">
                        <el-button size="small" :icon="Edit" text>编辑</el-button>
                        <el-button type="danger" size="small" :icon="Delete" text>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination
                v-model:current-page="currentPage4"
                v-model:page-size="pageSize4"
                :page-sizes="[10, 20, 30]"
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.content {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        h3 {
            font-size: 20px;
            font-weight: 400;
        }
    }
    .pagination {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        align-items: center;
    }
}
</style>
