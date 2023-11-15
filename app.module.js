import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
let AppModule = class AppModule {
};
NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        PostComponent
    ],
    bootstrap: [AppComponent]
});
export { AppModule };
//# sourceMappingURL=app.module.js.map