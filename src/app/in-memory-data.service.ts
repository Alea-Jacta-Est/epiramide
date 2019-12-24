import { Injectable } from '@angular/core';
import { Passo } from './passos/passo';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const passos = [
      { id: 1, manchete: "Dinheiro fácil e rápido", descricao: "Informam que você ganhará muito dinheiro e de forma rápida?", imagemUrl: "https://image.freepik.com/vector-gratis/hombre-negocios-dinero_1133-311.jpg", autor: "Vector de Negocios creado por dooder - www.freepik.es" },
      { id: 2, manchete: "Garantia de retorno", descricao: "Prometem retorno elevado do valor investido? Você ganhará 10%, 20% ou até mais de 50% ao mês?", imagemUrl: "https://www.freepik.es/vector-gratis/empleado-flecha-ascendente_901999.htm", autor: "Vector de Negocios creado por dooder - www.freepik.es" },
      { id: 3, manchete: "Recrutamento infinito", descricao: "Você tem que chamar mais gente para participar ? Você ganhará mais dinheiro ao chamar mais pessoas para a empresa?", imagemUrl: "https://www.freepik.es/vector-gratis/jefe-empleado-iman-dinero_902029.htm", autor: "Vector de Negocios creado por dooder - www.freepik.es" },
      { id: 4, manchete: "Produto inexistente ou inútil", descricao: "A empresa tem nenhum produto que gere receita de forma sustentável?", imagemUrl: "https://www.freepik.es/vector-gratis/coleccion-iconos-negocios-color_901712.htm", autor: "Vector de Negocios creado por dooder - www.freepik.es" },
      { id: 5, manchete: "Parente ou amigo falou da empresa", descricao: "Algum parente ou amigo que sempre se meteu em rolo te chamou para participar?", imagemUrl: "https://www.freepik.es/vector-gratis/jefe-empleado-hablando-dinero_902017.htm", autor: "Vector de Negocios creado por dooder - www.freepik.es" },
      { id: 6, manchete: "Não é pirâmide", descricao: "Você ouviu essa frase? A pessoa passou tempo explicando o motivo de não ser uma pirâmide?", imagemUrl: "https://www.freepik.es/vector-gratis/diseno-conversacion-negocios_894728.htm", autor: "Vector de Negocios creado por dooder - www.freepik.es" }
    ];
  
    return { passos };
  }

  genId(passos: Passo[]): number {
    return passos.length > 0 ? Math.max(...passos.map(passo => passo.id)) + 1: 1;
  }
}
