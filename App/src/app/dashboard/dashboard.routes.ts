import {Routes} from "@angular/router";

export const dashboardRoutes: Routes = [

  {
    path: '',
    loadComponent: () => import('./module/dashboard-router/dashboard-router.component').then(c => c.DashboardRouterComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./page/dashboard-home-page/dashboard-home-page.component').then(c => c.DashboardHomePageComponent)
      },

      {
        path: 'member',
        loadChildren: () => import('./module/member/member.routes').then(c => c.memberRoutes)
      }
    ]
  },


]
