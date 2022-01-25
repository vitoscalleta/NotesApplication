import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './notes/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
