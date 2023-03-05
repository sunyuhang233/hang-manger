const searchConfig = {
    // 搜索表单配置
    formItems: [
        {
            type: 'input',
            prop: 'name',
            label: '姓名',
            placeholder: '请输入姓名',
        },
        {
            type: 'input',
            prop: 'phone',
            label: '手机号',
            placeholder: '请输入手机号',
        },
        {
            type: 'date-picker',
            prop: 'createAt',
            label: '创建时间',
        },
        {
            type: 'select',
            prop: 'status',
            label: '状态',
            placeholder: '请选择状态',
            options: [
                {
                    label: '启用',
                    value: 1,
                },
                {
                    label: '禁用',
                    value: 0,
                },
            ],
        },
    ],
};

export default searchConfig;
