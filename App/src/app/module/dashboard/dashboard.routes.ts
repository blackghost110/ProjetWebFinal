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
        path: 'profil',
        loadChildren: () => import('./profil.routes')
          .then(c => c.profilRoutes)
      },



    ]
  },


]
