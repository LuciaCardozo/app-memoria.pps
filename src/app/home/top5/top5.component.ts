import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.scss'],
})
export class Top5Component  implements OnInit {
  jugadores = [{id:1,nombre:'Lula',seg:20, fecha: '26/05/2023'},
  {id:2,nombre:'Thiago',seg:60, fecha: '25/05/2023'},
  {id:3,nombre:'Valentino',seg:67, fecha: '24/05/2023'},
  {id:4,nombre:'Lili',seg:70, fecha: '25/05/2023'},
  {id:5,nombre:'Lele',seg:120, fecha: '23/05/2023'}]
  
  constructor(private router: Router, public shared: SharedService, public auth: AuthService) { }

  ngOnInit() {
    
  }

  volverAlHome() {
    this.router.navigate(['/home'])
  }
}
