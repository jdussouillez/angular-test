import {NgModule} from "@angular/core";

import {AppComponent} from "./components/app/app.component";
import {FooComponent} from "./components/foo/foo.component";
import {BarComponent} from "./components/bar/bar.component";

@NgModule({
    declarations: [
        AppComponent,
        FooComponent,
        BarComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
