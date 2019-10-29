import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DashboardComponent } from './framework/components/dashboard/dashboard.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { effects, reducers } from './presentation'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { RouterSerializer } from './presentation/router/router.selectors'
import { MatTableModule } from '@angular/material/table';
import { TurkbotCreateComponent } from './framework/components/turkbot/turkbot-create/turkbot-create.component';
import { TurkbotEditComponent } from './framework/components/turkbot/turkbot-edit/turkbot-edit.component';
import { TurkbotViewComponent } from './framework/components/turkbot/turkbot-view/turkbot-view.component'
import {TurkbotNetwork} from "./domain/gateways/network/turkbot.network";
import {FirebaseTurkbotNetwork} from "./network/firebase/firebase.turkbot.network";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TurkbotCreateComponent,
    TurkbotEditComponent,
    TurkbotViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,

    // Material Modules
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTableModule,

    // Firebase Modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    // NgRx Modules
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: RouterSerializer },
    { provide: TurkbotNetwork, useClass: FirebaseTurkbotNetwork }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
