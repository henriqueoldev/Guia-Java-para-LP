# Entrada de Dados - Scanner

```java
package exemplo;
import java.util.Scanner;
public class Exemplos {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Digite seu nome: ");
        String nome = sc.nextLine();
        System.out.print("Digite sua idade: ");
        int idade = sc.nextInt();
        System.out.print("Digite seu peso (ex: 70.5): ");
        float peso = sc.nextFloat();
        System.out.print("Digite sua altura (ex: 1.75): ");
        double altura = sc.nextDouble();
        System.out.println("\nResumo do usuário:");
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade + " anos");
        System.out.println("Peso: " + peso + " kg");
        System.out.println("Altura: " + altura + " m");
        sc.close();
    }
}
```
