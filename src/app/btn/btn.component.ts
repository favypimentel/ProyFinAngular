import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() title: string;
  @Input() disabled: boolean;
  @Input() click: () => void;
  @Input() type: string;

  constructor() {
  }

  ngOnInit() {
  }

  _click = () => {
    if (!this.disabled) {
      this.click();
    }
  }

}
