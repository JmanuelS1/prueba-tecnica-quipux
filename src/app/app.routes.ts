import { Routes } from '@angular/router';
import { EnterprisesComponent } from './pages/enterprises/enterprises.component'
import { ArticlesComponent } from './pages/articles/articles.component'
import { HomeComponent } from './pages/home/home.component'

export const routes: Routes = [
   {
      path: "",
      component: HomeComponent
   },
   {
      path: "empresas",
      component: EnterprisesComponent
   },
   {
      path: "articulos",
      component: ArticlesComponent
   }
];
