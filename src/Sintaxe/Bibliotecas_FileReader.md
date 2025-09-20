# Entrada de Dados - FileReader

```java
package exemplo;
import java.io.FileReader;
import java.io.IOException;
public class Exemplos {
    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader("entrada.txt");
        int caractere;
        while ((caractere = fr.read()) != -1) {
            System.out.print((char) caractere);
        }
        fr.close();
        System.out.println("\nLeitura do arquivo concluída!");
    }
}
```
