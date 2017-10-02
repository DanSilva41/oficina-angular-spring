import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ItemService } from './../item/item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {
  
  itens = [];
  constructor(private itemService : ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {

    // dados que recebi, quero atribuir a itens
    this.itemService.listar().subscribe(dados => {
      this.itens = dados;
    });
  }

  adicionar(frm : FormControl) {
    console.log(frm.value);

    this.itemService.adicionar(frm.value)
      .subscribe(() => {
        frm.reset();
        this.consultar();
      });
  }

}
