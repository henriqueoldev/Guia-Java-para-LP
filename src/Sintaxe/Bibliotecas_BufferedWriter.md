# Entrada de Dados - BufferedWriter

```java
package exemplo;
import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;
public class Exemplos {
    public static void main(String[] args) throws IOException {
        FileWriter fw = new FileWriter("saida.txt");
        BufferedWriter bw = new BufferedWriter(fw);
        bw.write("Olá, mundo!");
        bw.newLine();
        bw.write("Este é um exemplo com BufferedWriter.");
        bw.close();
        System.out.println("Arquivo escrito com sucesso usando BufferedWriter!");
    }
}
```
