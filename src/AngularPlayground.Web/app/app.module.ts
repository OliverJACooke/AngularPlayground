import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent }  from "./app.component";
import { BackgroundVideoComponent } from "./home/background-video.component";
import { SectionOneComponent } from "./home/section-one.component";
import { PricesComponent } from "./home/prices.component";
import { AboutComponent } from "./home/about.component";
import { ServicesComponent } from "./home/services.component";
import { TestimonialComponent } from "./home/testimonial.component";
import { ContactComponent } from "./home/contact.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        BackgroundVideoComponent,
        SectionOneComponent,
        PricesComponent,
        AboutComponent,
        ServicesComponent,
        TestimonialComponent,
        ContactComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
