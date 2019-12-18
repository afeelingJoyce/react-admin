import { formatterMenus } from '../utils/common'


const menus = [
  {
    title: '首页',
    icon: 'home',
    path: 'home'
  },
  {
    title: '基本组件',
    icon: 'laptop',
    path: 'general',
    children: [
      { path: 'button', title: '按钮', icon: '', },
      { path: 'icon', title: '图标', icon: '', },
    ]
  },
  {
    title: '输入组件',
    icon: 'edit',
    path: 'entry',
    children: [
      {
        path: 'form',
        title: '表单',
        icon: '',
        children: [
          { path: 'basic-form', title: '基础表单', icon: '' },
          { path: 'step-form', title: '分步表单', icon: '' }
        ]
      },
      { path: 'upload', title: '上传', icon: '' },
    ]
  },
]



export default formatterMenus(menus)