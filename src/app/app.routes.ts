import { Routes } from '@angular/router';
import { PricingComponent } from './web-site/pricing/pricing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './web-site/welcome/welcome.component';
import { AboutComponent } from './web-site/about/about.component';

export const routes: Routes = [

    {
        path: "home",
        component: WelcomeComponent
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "pricing",
        component: PricingComponent,
        title: 'Pricing'
    },
    {
        path: "about",
        component: AboutComponent,
        title: 'about'
    },


    {
        path: "**",
        title: "page not found",
        component: PageNotFoundComponent
    }
];
