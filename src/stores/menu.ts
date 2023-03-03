// Menu数据
const Menu = [
    {
    name: '控制台',
    path: '/home/dashboard',
     icon: 'House',
    children: []
    },
    {
        name: '系统管理',
        path: '/home',
        icon: 'Message',
        children: [{
            name: '菜单管理',
            path: '/home/list',
            icon: 'el-icon-s-tools',
        }]
    },
    {
        name: '用户管理',
        path: 'User',
        icon: 'Search',
        children: [{
            name: '用户列表',
            path: '/home/user',
            icon: 'el-icon-user',
        }]
    }
]



export default Menu;