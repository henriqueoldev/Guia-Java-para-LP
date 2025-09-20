# Sistema de Eleição
## Regras

Em uma eleição há 2 candidatos em disputa
- Criar um sistema que cadastre (votação) 5 eleitores em cada grupo de votações;
- Gravar também o cadastro eleitoral com 10 eleitores com seu número de eleitor e
nome;
- Após os cadastramentos, processar e apurar: vencedor,2º colocado, brancos,
nulos, assim como suas quantidades apuradas.

- CodCandidato:  
  - **1 → JOSE**  
  - **2 → MARIA**  
  - **3 → BRANCO**  
  - **4 → NULO** 

### Votação

| Campo        | Tipo |
|--------------|------|
| seção        | INT  |
| codCandidato | INT  |
| numEleitor   | INT  |

### Cadastro Eleitor

| Campo         | Tipo   |
|---------------|--------|
| Numero Eleitor| INT    |
| Nome Eleitor  | STRING |
| Seção         | INT    |

## Validação

- Seção deve estar entre: 01, 03, 04, 05, 09, 10.  
- Número do eleitor deve existir no cadastro.  

## Menus

### Menu Principal
```
1 – Cadastra Eleitor
2 – Cadastra Votação 1 e 2
3 – Agrupa Apuração
4 – Menu Estatística
9 – Fim
```

### Cadastro Votação 1,2
```
1 - Cadastro Votação 1
2 - Cadastro Votação 2
9 - FIM
```

### Menu Estatística
```
1 - Vencedor
2 - Segundo colocado
3 - Quantidade de votos em branco
4 - Quantidade de votos nulos
5 - Mostra eleitores
6 - Mostra apuração
9 - FIM
```
