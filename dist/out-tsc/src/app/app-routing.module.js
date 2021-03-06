var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
    { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
    { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
    { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
    { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
    // { path: 'chat', loadChildren: './pages/chat/chat/chat.module#ChatPageModule' },
    { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
    { path: 'chat', loadChildren: './pages/chat/chat/chat.module#ChatPageModule' },
    { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },
    { path: 'geoloc', loadChildren: './pages/geoloc/geoloc.module#GeolocPageModule' },
    { path: 'urgence', loadChildren: './pages/urgence/urgence.module#UrgencePageModule' },
    { path: 'besoin', loadChildren: './pages/besoin/besoin.module#BesoinPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map