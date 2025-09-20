# Boas Práticas

# Diretrizes de Nomenclatura e Boas Práticas

## 1. Nome de Classes
- Sempre inicie com letra maiúscula.
- Use o padrão PascalCase: `Cliente`, `ContaBancaria`, `CalculadoraImpostoComposto`.

## 2. Nome de Métodos
- Sempre inicie com letra minúscula.
- Use o padrão camelCase: `calcularTotal()`, `abrirConta()`, `imprimirRelatorio()`.

## 3. Nome de Variáveis e Atributos
- Sempre em camelCase, começando com letra minúscula: `saldoAtual`, `nomeCliente`, `quantidadeProdutos`.
- Evite abreviações confusas: prefira `telefoneContato` em vez de `telCt`.

## 4. Nome de Constantes
- Sempre em MAIÚSCULAS, com palavras separadas por _: `TAXA_JUROS`, `LIMITE_MAXIMO`.

## 5. Indentação e Espaçamento
- Use indentação consistente (4 espaços ou 1 TAB é o padrão em Java).
- Deixe linhas em branco para separar blocos lógicos de código, aumentando a legibilidade.

## 6. Tamanho das Classes e Métodos
- Prefira classes e métodos curtos, com responsabilidades bem definidas.
- Se um método faz muitas coisas, divida em métodos menores.

## 7. Tamanho de Métodos e Parâmetros
- Mantenha métodos curtos e objetivos: entre 10 e 30 linhas é o recomendado. Métodos muito grandes dificultam leitura e manutenção.
- Uma responsabilidade por método: se ele fizer mais de uma coisa, divida em métodos menores.
- Número de parâmetros:
  - Até 3 → ideal.
  - 4 → aceitável, mas pode indicar que precisa de revisão.
  - 5 ou mais → má prática. O recomendável é criar um objeto para agrupar esses dados.

## 8. Comentários
- Comente o porquê do código, não apenas o que ele faz.
- Use `//` para comentários curtos e `/** ... */` para documentação de métodos e classes (JavaDoc).

## 9. Tratamento de Exceções
- Nunca deixe blocos try-catch vazios.
- Capture apenas as exceções necessárias, evitando `catch(Exception e)`.
- Forneça mensagens úteis ao usuário ou ao log.

## 10. Nomes Significativos
- Dê nomes claros e descritivos a variáveis, métodos e classes.
- Evite nomes genéricos como `dados`, `teste`, `obj`.

## 11. Organização de Pacotes
- Agrupe classes de acordo com suas funcionalidades.
- Use nomes de pacotes em minúsculo: `br.com.empresa.modelo`, `br.com.empresa.util`.

## 12. Boas Práticas de Código Limpo
- Evite números mágicos (use constantes).
- Prefira composição a herança quando fizer sentido.
- Sempre inicialize variáveis antes de usar.
- Remova código morto ou comentado.

## 13. Uso de Chaves { }
- Sempre use chaves em blocos de código, mesmo quando o comando for de apenas uma linha.
- Isso evita erros quando novos comandos forem adicionados.
- Exemplo ruim (sem chaves):
  ```java
  if (condicao) executar();
  ```
- Exemplo recomendado (com chaves):
    ```java
    if (condicao) {
    executar();
    }
    ```
