import {
  DashboardOutlined, FileTextOutlined,PlusCircleOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}, {
  key: 'extra',
  path: `${APP_PREFIX_PATH}/clients`,
  title: 'Клиенты',
  icon: PlusCircleOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: 'extra-pages',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'Клиенты',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'extra-pages-list',
          path: `${APP_PREFIX_PATH}/clients/clients-list`,
          title: 'Список клиентов',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    }
  ]
}
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
