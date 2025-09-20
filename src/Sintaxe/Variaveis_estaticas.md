# Variáveis Estáticas

Exemplo:
```java
package exemplo;
public class Contador {
    // Variável estática (compartilhada entre todos os objetos)
    static int totalObjetos = 0;
    // Construtor
    public Contador() {
        totalObjetos++; // toda vez que cria um objeto, incrementa
    }
    public static void main(String[] args) {
        Contador c1 = new Contador();
        Contador c2 = new Contador();
        Contador c3 = new Contador();
        // Acessando variável estática diretamente pela classe
        System.out.println(
        "Total de objetos criados: " + Contador.totalObjetos);
        // Total de objetos criados: 3
    }
}
```