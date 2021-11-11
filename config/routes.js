export default [
  {
    path: '/room-booking',
    layout: false,
    component: '../layouts/HotelLayout',
    routes: [
      {
        path: 'search',
        layout: false,
        component: './search',
      },
      {
        path: 'room-detail',
        layout: false,
        component: './RoomDetail',
      },
    ],
  },
  // {
  // 	path: '/room-detail',
  // 	layout: false,
  // 	component: './RoomDetail',
  // },

  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
