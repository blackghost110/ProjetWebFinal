import {Routes} from "@angular/router";

export const dashboardRoutes: Routes = [

  {
    path: '',
    loadComponent: () => import('./dashboard-router/dashboard-router.component').then(c => c.DashboardRouterComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./page/dashboard-home-page/dashboard-home-page.component').then(c => c.DashboardHomePageComponent)
      },
      {
        path: 'home2',
        loadComponent: () => import('./page/my-profile-page/my-profile-page.component').then(c => c.MyProfilePageComponent)
      },



    ]
  },


]
