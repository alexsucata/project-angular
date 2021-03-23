import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
	{ path: 'auth', component: AuthComponent },
	{ path: 'dash', component: DashboardComponent },
	{
		path: '',
		redirectTo: 'dash',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
