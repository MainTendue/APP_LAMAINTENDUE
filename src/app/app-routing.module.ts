import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  // { path: 'chat', loadChildren: './pages/chat/chat/chat.module#ChatPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat/chat.module#ChatPageModule' },
//  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },
  { path: 'geoloc', loadChildren: './pages/geoloc/geoloc.module#GeolocPageModule' },
  { path: 'urgence', loadChildren: './pages/urgence/urgence.module#UrgencePageModule' },
  { path: 'besoin', loadChildren: './pages/besoin/besoin.module#BesoinPageModule' },
  { path: 'maraude', loadChildren: './pages/maraude/maraude.module#MaraudePageModule' },
  { path: 'rgpd', loadChildren: './pages/rgpd/rgpd.module#RgpdPageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
