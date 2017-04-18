import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';


import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

// Create our routes
const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

// Export the constant routing to import them in app.module.ts file
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);