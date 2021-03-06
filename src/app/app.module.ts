import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

//added components
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './SignUp/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ListingListComponent } from './listing-list/listing-list.component';
import { ListingItemComponent } from './listing-item/listing-item.component';

//added Modules
import { RoutingModule } from './modules/routing.module';

// used to create fake backend
import { fakeBackendProvider } from './_helper/fake-backend';
import { AuthGuard } from './_guard/auth.guard';

//added services
import { ListingService } from  './services/listing.service';
import {UserService} from './services/user.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({

    imports: [
        BrowserModule,
        RoutingModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        SignUpComponent,
        LoginComponent,
        HomeComponent,
        ProfilePageComponent,
        ListingListComponent,
        ListingItemComponent
    ],
    providers: [
        ListingService,
        AuthGuard,
        AuthenticationService,
        UserService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
