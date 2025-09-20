# Sintaxe Java

Para Programar em Java, você precisará primeiramente de uma estrutura básica, na
qual todos os seus projetos deverão ter:
```java
package exemplo ;
public class Exemplos {
public static void main (String []args ) {
    System .out.println ("Olá Mundo" );
}
```
}
- public class {NOME} se refere ao nome do seu arquivo Java, ele precisa
estritamente ser o mesmo nome
6
- public static void main(String[]args) se refere ao “bit mágico” que indica para
seu computador onde é o início do seu código, ou seja, sem ele sua máquina
não faz a mínima ideia de onde começar a compilar e posteriormente executar
o código.

**Em um projeto com diversas classes, é possível ter um “void main” por classe, porém
essa maneira não é recomendada pois fere as boas práticas de JAVA.**