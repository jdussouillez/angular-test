import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

function getRoutes(): Routes {
    const routes: Routes = [
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        }
    ];
    return routes;
}

const APP_ROUTES = getRoutes();

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, {useHash: true})
    ],
    providers: [
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
