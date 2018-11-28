import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  template: ' <div class="col-xs-12 col-sm-12 col-md-12 col-lg-100"> <h2> ' +
    ' {{title}} </h2>' +
    '</div>',
  styles:[`
  .left-paragraph{
    border: 1px solid red;
    height: 200px;
    
  }`]
})
export class LeftComponent  {
title :string ="News";
}
