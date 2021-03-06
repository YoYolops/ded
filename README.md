![Badge](https://img.shields.io/static/v1?label=yarn&message=v1.22.5&color=13a3bf&style=for-the-badge&logo=yarn) ![Badge](https://img.shields.io/static/v1?label=Svelte&message=v3.0.0&color=AA1E1E&style=for-the-badge&logo=svelte) ![Badge](https://img.shields.io/static/v1?label=TypeScript&message=v4.0.0&color=007ACC&style=for-the-badge&logo=typescript)

# Status:
#### Em Desenvolvimento
![alt text](./public/gameMedia/presentation/emDev3.gif)

## Introdução:
Projeto de um gerenciador de inventário e personagem de D&D, onde os itens são representados por cartas. O objetivo é automatizar, entre outras coisas:
- O cálculo de peso carregado pelo personagem; 
- A pilhagem de corpos e recipientes; 
- Cálculo de gold;
- Cálculo de modificadores;
- Comércio;
- Monitoramento de HP;
- Monitoramento de efeitos e status do personagem;
- Uso de consumíveis;
- Items sendo usados;
- Combate;

## Representação dos itens:
Todos os itens são representados por cartas, seguindo o modelo: 

![alt text](./public/gameMedia/presentation/finalCard.png)

### Ações:
As cartas em posse do jogador poderão ser:
- Equipadas (em caso de itens vestíveis 'wereable');
  - Armas;
  - Escudos;
  - Armaduras;
  - Vestimentas;
- Consumidas (em caso de itens consumíveis 'consumable');
  - Poções;
  - Bebidas;
  - Comiudas;
- Invocadas (somente tipos especiais de cartas);
  - Cartas de feitiço;
  - Itens Mágicos;
 
Todas as cartas, quando usadas, terão, na medida do possível, seus efeitos aplicados automaticamente sobre o personagem ou outras entidades em jogo

