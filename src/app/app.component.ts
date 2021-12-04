import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public access_user: any; 
  constructor () {}

  ngOnInit(): void {
    this.access_user = sessionStorage.getItem('idUsuario');
    if (sessionStorage.getItem('idUsuario') != null)
      console.log(true);
    else
      console.log(false);
    console.log(this.access_user);
  }
}
