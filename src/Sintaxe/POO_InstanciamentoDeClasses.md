# POO - Instanciamento de Classes

```java
package exemplo;
public class Exemplos {
    public static void main(String[] args) {
        Exercicio1DoLote1 apelido = new Exercicio1DoLote1();
        int lado = 5;
        System.out.println(apelido.calcularArea(lado));
    }
}
```

```java
package exemplo;
public class Exercicio1DoLote1 {
    public int calcularArea(int lado) {
        int area = lado * lado;
        return area;
    }
}
```
