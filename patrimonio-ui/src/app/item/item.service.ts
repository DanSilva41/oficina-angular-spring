import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  itensUrls = 'http://localhost:8080/itens';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(this.itensUrls);
  }

  adicionar(item : any) {
    return this.http.post(this.itensUrls, item);
  }

}
