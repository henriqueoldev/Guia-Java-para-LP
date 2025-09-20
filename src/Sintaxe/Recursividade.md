# Recursividade

```java
package exemplo;
public class ExemploRecursivo {
    public static void main(String[] args) {
        imprimirContador(1);
    }
    public static void imprimirContador(int contador) {
        if (contador <= 5) {
            System.out.println("Contador: " + contador);
            imprimirContador(contador + 1);
        }
    }
}
```
