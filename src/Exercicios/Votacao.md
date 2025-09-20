# Sistema de Votação 2021

TAREFA – Manipulação de registro lógico e arquivo físico em Java.

## Classe Abstrata: Votação

| Atributo        | Tipo |
|-----------------|------|
| NumeroSeção     | int  |
| NumeroCandidato | int  |

## Classe Votação2021

1. **FCADRASTRAVOTAÇÃO (função)** → cadastrar 200 registros (Seção 0 a 10, Candidato 0 a 300) com `RANDOM()`.  
2. **FCLASSIFICASEÇÃO (função)** → classificar registros em memória por seção.  
3. **FGRAVAVOTAÇÃO (função)** → gravar registros em `Votação2021.txt`.  
4. **Menu Indicadores**:  
   - Quantidade de eleitores por seção.  
   - Seção com maior e menor número de eleitores.  
   - Quantidade de votos por candidato.  
   - 10 candidatos mais votados.

## Menus

### Sistema de Votação
```
1 – Carregar Seção/Número Eleitor
2 – Classificar por Seção
3 – Gravar Registros
4 – Mostrar Indicadores
9 – Finalizar
```

### Mostrar Indicadores
```
1 – Quantidade Eleitores por Seção
2 – Seção com Maior e Menor número de Eleitores
3 – Quantidade de votos por candidato
4 – 10 primeiros colocados (nro cand. e qtd votos)
9 – Finaliza consulta
```
