import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.css']
})
export class InputEditorComponent implements OnInit, OnDestroy {
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });
  html = '';
  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor?.destroy();
  }
  onChange() {
    console.log(this.html);
  }
}
