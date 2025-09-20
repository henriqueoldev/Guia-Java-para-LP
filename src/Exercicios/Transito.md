# Sistema de Trânsito

Elaborar a gravação dos dados em “ArquivoEstatistica.txt” e fazer a leitura dos
dados do arquivo para suas devidas consultas.

## Criar uma Classe Abstrata segundo:
|                |Estatística |              |
|----------------|------------|--------------|
| CodigoCidade   | NomeCidade | QtdAcidentes |
|int             |String      |int           |

## ClassePrincipal (Menu Estatística)

```
-----------------------------------------------------------------
| Menu Estatística |
| Estatísticas de acidentes em 2020 |
| 1 - Cadastro Estatística |
| 2 - Consulta por quantidade de acidentes |
| 3 - Consulta por estatísticas de acidentes |
| 4 - Acidentes acima da média das 10 cidades |
| 9 - Finaliza |
-----------------------------------------------------------------
```

## ClasseMetodos
**(exibir em todos os campos: código, nome, quantidade)**<br>
Criar ClasseMetodos conforme:

1. **FCADRASTRAESTATISTICA (função)** → cadastrar 10 registros.  
2. **PQTDACIDENTES (procedimento)** → consultar acidentes > 100 e < 500.  
3. **PMAIORMENOR (procedimento)** → consultar menor e maior número de acidentes.  
4. **PACIMA (procedimento)** → cidades com acidentes acima da média das 10 cidades.
