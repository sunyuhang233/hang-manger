<script setup lang="ts">
import { ref } from 'vue';
import { Delete, Edit } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';

interface Iprops {
    contentConfig: {
        herder: {
            title: string;
            btnText: string;
        };
        propList: any[];
    };
}
const props = defineProps<Iprops>();

const tableData = [
    {
        id: 1,
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        createAt: '2021-05-03 12:00:00',
        updateAt: '2021-05-03 12:00:00',
    },
    {
        id: 2,
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        createAt: '2021-05-03 12:00:00',
        updateAt: '2021-05-03 12:00:00',
    },
    {
        id: 3,
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        createAt: '2021-05-03 12:00:00',
        updateAt: '2021-05-03 12:00:00',
    },
    {
        id: 4,
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        createAt: '2021-05-03 12:00:00',
        updateAt: '2021-05-03 12:00:00',
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

const emit = defineEmits(['addItem', 'editItem']);

// 新增
function handleAddBtn() {
    emit('addItem');
}

// 编辑按钮
function handleEditBtn(row: any) {
    emit('editItem', row);
}

// 删除按钮
function handleDeleteBtn(id: number) {
    ElMessageBox.confirm('你确定删除当前数据?', 'Warning', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    })
        .then(() => {
            ElMessage({
                type: 'success',
                message: '删除成功',
            });
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消删除',
            });
        });
}

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
            <h3>{{ contentConfig.herder.title }}</h3>
            <el-button type="primary" @click="handleAddBtn">
                {{ contentConfig.herder.btnText }}
            </el-button>
        </div>
        <div class="table">
            <el-table :data="tableData" stripe border style="width: 100%">
                <template v-for="item in contentConfig.propList" :key="item.prop">
                    <!-- 如果类型是timer 格式化时间 -->
                    <template v-if="item.type === 'timer'">
                        <el-table-column v-bind="item" align="center">
                            <template #default="scope">
                                <span>{{ scope.row[item.prop] }}</span>
                            </template>
                        </el-table-column>
                    </template>
                    <!-- 操作 -->
                    <template v-else-if="item.type === 'handle'">
                        <el-table-column align="center" v-bind="item">
                            <template #default="scope">
                                <el-button
                                    size="small"
                                    :icon="Edit"
                                    text
                                    @click="handleEditBtn(scope.row)"
                                >
                                    编辑
                                </el-button>
                                <el-button
                                    type="danger"
                                    size="small"
                                    :icon="Delete"
                                    text
                                    @click="handleDeleteBtn(scope.row.id)"
                                >
                                    删除
                                </el-button>
                            </template>
                        </el-table-column>
                    </template>
                    <!-- 自定义类型 -->
                    <template v-else-if="item.type === 'custom'">
                        <el-table-column align="center" v-bind="item">
                            <template #default="scope">
                                <slot :name="item.slotName" v-bind="scope"></slot>
                            </template>
                        </el-table-column>
                    </template>
                    <!-- 普通类型 -->
                    <el-table-column v-else v-bind="item" align="center" />
                </template>
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
    .table {
        margin-top: 16px;
    }
    .pagination {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        align-items: center;
    }
}
</style>
