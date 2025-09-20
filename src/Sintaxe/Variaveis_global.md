# Variáveis Globais

Exemplo:

```java
package exemplo;
public class ExemploGlobal {
    // Variáveis globais
    static int a = 10;
    static int b = 20;
    public static void main(String[] args) {
        somar();
    }
    public static void somar() {
        int soma = a + b;
        System.out.println("A soma é: " + soma);
    }
}
```
