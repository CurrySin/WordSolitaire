import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
    LoginPageComponent,
    HomePageComponent
} from './page/page.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: true, // <-- debugging purposes only
  
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }