export default [
  {
    path: '/',
    layout: false,
    redirect: '/landing-page',
  },
  {
    path: '/',
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
      {
        path: 'landing-page',
        layout: false,
        component: './LandingPage',
      },
    ],
  },
  {
    layout: false,
    component: './404',
  },
];
