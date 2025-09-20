# Entrada de Dados - FileWriter

```java
package exemplo;
import java.io.FileWriter;
import java.io.IOException;
public class Exemplos {
    public static void main(String[] args) throws IOException {
        FileWriter writer = new FileWriter("saida.txt");
        writer.write("Olá, mundo!\n");
        writer.write("Este é um exemplo de FileWriter.\n");
        writer.close();
        System.out.println("Arquivo escrito com sucesso!");
    }
}
```
