import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatToolbarModule , MatMenuModule ,MatProgressSpinnerModule,MatCardModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { DndDirective } from './dnd.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ProgressComponent } from './progress/progress.component';
import { LoginComponent } from './login/login.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMugHot, faHeart,
    faTh, faThList,
    faSignInAlt, faUserPlus,
    faPlaneDeparture, faMapMarked,
    faSearch, faWindowClose, faPen,
    faHiking, faCalendarAlt, faArchway, faComments,
    faCogs, faEdit, faTrashAlt, faArrowCircleLeft, faSave,
    faUpload
} from '@fortawesome/free-solid-svg-icons';
import { UploadService } from './services/upload.service';



const appRoutes: Routes = [
  {path: '' , component:LoginComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'login', component: LoginComponent}]

library.add(faHeart, faMugHot,
    faTh, faThList,
    faSignInAlt, faUserPlus,
    faPlaneDeparture, faMapMarked,
    faSearch, faWindowClose, faPen,
    faHiking, faCalendarAlt, faArchway, faComments,
    faCogs, faEdit, faTrashAlt, faArrowCircleLeft, faSave,
    faUpload
);
@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule, MatIconModule ,MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatToolbarModule, MatMenuModule, MatProgressSpinnerModule ,MatCardModule, BrowserAnimationsModule,
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )],
  declarations: [AppComponent,NavbarComponent, UploadComponent,DndDirective, ProgressComponent, LoginComponent],
  bootstrap: [AppComponent],
  exports: [ RouterModule],
  providers: [UploadService]
})
export class AppModule { }
