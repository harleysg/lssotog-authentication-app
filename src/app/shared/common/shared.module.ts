import { NgModule } from "@angular/core";

import { AuthorSignComponent } from "../components/atoms/author-sign/author-sign.component";
import { ButtonComponent } from "../components/atoms/button/button.component";
import { FooterComponent } from "../components/molecules/footer/footer.component";
import { HeaderComponent } from "../components/atoms/header/header.component";
import { InputComponent } from "../components/atoms/input/input.component";
import { NavBarComponent } from "../components/molecules/nav-bar/nav-bar.component";
import { BrandComponent } from "../components/atoms/brand/brand.component";

@NgModule({
  imports:[
    AuthorSignComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    InputComponent,
    NavBarComponent,
    BrandComponent
  ],
  exports: [
    AuthorSignComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    InputComponent,
    NavBarComponent,
    BrandComponent
  ],
  providers: [],
})

export class SharedModule {}
