import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent {
  // Theme
  public Primary='#045a68'
  public Accent = '#098f8f'
  public warning = '#eb7777'
  public text = '#ffffff'
  public bg = '#043841'

  // Styles
  public MainBG = {
    backgroudColor: this.bg
  }
}
