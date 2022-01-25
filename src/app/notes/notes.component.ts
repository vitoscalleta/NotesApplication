import { Component, OnInit } from '@angular/core';
import { Note } from '../Shared/Interfaces/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public Notes: Note[];

  constructor() { }

  ngOnInit() {
    this.Notes = [
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the second notes', Header: 'Header 2', BgColor: 'F1A9F2' },
      { Text: 'This is the content of the first notes', Header: 'Header 1', BgColor: 'E2E7C5' }];
  }

}
