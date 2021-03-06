import { Injectable } from '@angular/core';
import { Passo } from './passos/passo';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const passos = [
      { id: 1, manchete: "Dinheiro fácil e rápido", descricao: "Informam que você ganhará muito dinheiro e de forma rápida?", imagemUrl: "../assets/imagens/hombre-negocios-dinero_1133-311.jpg", autor: "Vector de Negocios creado por dooder - www.freepik.es" },
      { id: 2, manchete: "Retorno garantido do investido", descricao: "Prometem retorno elevado do valor investido? Você ganhará 10%, 20% ou até mais de 50% ao mês?", imagemUrl: "../assets/imagens/empleado-flecha-ascendente_1133-195.jpg", autor: "Vector de Negocios creado por dooder - www.freepik.es" },
      { id: 3, manchete: "Recrutamento infinito", descricao: "Você tem que chamar mais gente para participar ? Você ganhará mais dinheiro ao chamar mais pessoas para a empresa?", imagemUrl: "../assets/imagens/jefe-empleado-iman-dinero_1133-219.jpg", autor: "Vector de Negocios creado por dooder - www.freepik.es" },
      { id: 4, manchete: "Produto inexistente ou inútil", descricao: "A empresa não possui produto que gere receita de forma sustentável? A empresa vende produto caro, obsoleto ou inútil?", imagemUrl: "../assets/imagens/coleccion-iconos-negocios-color_1133-183.jpg", autor: "Vector de Negocios creado por dooder - www.freepik.es" },
      { id: 5, manchete: "Parente ou amigo falou da empresa", descricao: "Algum parente ou amigo que sempre se meteu em rolo te chamou para participar?", imagemUrl: "../assets/imagens/jefe-empleado-hablando-dinero_1133-208.jpg", autor: "Vector de Negocios creado por dooder - www.freepik.es" },
      { id: 6, manchete: "Não é pirâmide", descricao: "A pessoa passou tempo explicando o motivo de não ser uma pirâmide? Todo piramideiro dirá que na sua empresa é diferente.", imagemUrl: "../assets/imagens/diseno-conversacion-negocios_1133-88.jpg", autor: "Vector de Negocios creado por dooder - www.freepik.es" }
    ];
  
    return { passos };
  }

  genId(passos: Passo[]): number {
    return passos.length > 0 ? Math.max(...passos.map(passo => passo.id)) + 1: 1;
  }
}
