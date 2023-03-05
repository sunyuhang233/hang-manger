const contentConfig = {
    herder: {
        title: '用户管理',
        btnText: '新增用户',
    },
    propList: [
        { type: 'selection', label: '选择', width: '80' },
        { type: 'index', label: '序号', width: '80' },
        { type: 'normal', prop: 'date', label: '日期', width: '120' },
        { type: 'normal', prop: 'name', label: '真实姓名', width: '120' },
        { type: 'normal', prop: 'address', label: '地址', width: '220' },
        { type: "timer", label: "创建时间", prop: "createAt", width: "190" },
        { type: "timer", label: "更新时间", prop: "updateAt", width: "190" },
         { type: 'custom', prop: 'address', label: '自定义', width: '220' ,slotName:"custom"},
        { type: 'handle', label: '操作', width: '240' },
    ],
};

export default contentConfig;
