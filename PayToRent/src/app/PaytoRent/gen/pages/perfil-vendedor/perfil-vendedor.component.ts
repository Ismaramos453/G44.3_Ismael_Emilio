import { Component } from '@angular/core';
import { User, UserExchangerService } from 'src/app/PaytoRent/services/user-exchanger.service';
import { Product } from 'src/app/PaytoRent/services/product-exchanger.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.component.html',
  styleUrls: ['./perfil-vendedor.component.css']
})

export class PerfilVendedorComponent {

  user: User |undefined

  ngOnInit() {
    const user = this.route.snapshot.paramMap.get('owner');
    if (user) {
      this.userService.getThisUser(user).subscribe(usuario => {
        if (usuario) {
          this.user = usuario;
        }
      });
    }

  }

  constructor(private userService: UserExchangerService, private route: ActivatedRoute) {

  }

}
