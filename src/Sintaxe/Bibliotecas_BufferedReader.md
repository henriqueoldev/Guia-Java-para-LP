# Entrada de Dados - BufferedReader

```java
package exemplo;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;
public class Exemplos {
    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader("entrada.txt");
        BufferedReader br = new BufferedReader(fr);
        String linha = "";
        while ((linha = br.readLine()) != null) {
            System.out.println(linha);
        }
        br.close();
        System.out.println("Leitura do arquivo concluída!");
    }
}
```
