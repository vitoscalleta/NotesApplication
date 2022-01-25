import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../Shared/Interfaces/Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() Note: Note;

  constructor() { }

  ngOnInit() {
  }

}
