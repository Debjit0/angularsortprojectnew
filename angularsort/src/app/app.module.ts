import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { SortingService } from './sorting.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    //VisualizerComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    //CommonModule,
    AppRoutingModule,
    
  ],
  providers: [SortingService]
})
export class AppModule { }
