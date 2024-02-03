import {Routes} from "@angular/router";

export const profilRoutes:Routes = [
  {
    path:'',
    loadComponent:()=> import('./page/my-profile-page/my-profile-page.component').then(c => c.MyProfilePageComponent)
  }
]
