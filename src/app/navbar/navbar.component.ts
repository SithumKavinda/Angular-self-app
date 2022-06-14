import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: []
})
export class NavbarComponent implements OnInit {

  public items = ['Home', 'About us', 'Contact us']

  // Theme
  public Primary='#045a68'
  public Accent = '#098f8f'
  public warning = '#eb7777'
  public text = '#ffffff'
  public bg = '#043841'

  // Styles
  navBar = {
    backgroundColor: this.Primary
  }

  navLinks = {
    color: this.text,
    textDecoration: 'none'
  }

  navLi = {
    color: this.text,
    listStyleType: 'none',
    display: 'inline',
    margin: '10px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }

  // Animations


  constructor() { }

  ngOnInit(): void {
  }

}
