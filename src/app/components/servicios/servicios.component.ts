import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  
  public showAlert: any = false;
  constructor() { }

  ngOnInit(): void {
  }

  public mostrarAlerta(evento: any){
    this.showAlert = this.mostrarAlerta;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
    console.log(evento);
  }
}
