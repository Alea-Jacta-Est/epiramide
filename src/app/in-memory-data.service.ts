import { Injectable } from '@angular/core';
import { Passo } from './passos/passo';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const passos = [
      { id: 1, manchete: "Dinheiro fácil e rápido!", descricao: "Garantem que você ganhará muito dinheiro e de forma rápida?" },
      { id: 2, manchete: "Garantia de retorno", descricao: "Prometem retorno elevado do valor investido? Você ganhará 10%, 20% ou até mais de 50% ao mês?" },
      { id: 3, manchete: "Recrutamento infinito", descricao: "Você tem que chamar mais gente para participar ? Você ganhará mais dinheiro ao chamar mais pessoas para a empresa?" },
      { id: 4, manchete: "Produto inexistente ou inútil", descricao: "A empresa tem nenhum produto que gere receita de forma sustentável?" },
      { id: 5, manchete: "Parente ou amigo falou da empresa", descricao: "Algum parente ou amigo que sempre se meteu em rolo te chamou para participar?" }, ,
      { id: 6, manchete: "Não é pirâmide", descricao: "Você ouviu essa frase? A pessoa passou tempo explicando que não era pirâmide?" },
    ];

    return { passos };
  }

  genId(passos: Passo[]): number {
    return passos.length > 0 ? Math.max(...passos.map(passo => passo.id)) + 1: 1;
  }
}
