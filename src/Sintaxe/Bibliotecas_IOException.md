# Entrada de Dados - IOException

- Operações de I/O podem gerar erros inesperados como arquivo não encontrado ou falta de permissão.
- IOException é uma checked exception e deve ser tratada com try-catch ou propagada com throws.

```java
package exemplo;
import java.io.IOException;
public class Exemplos {
    public static void main(String[] args) {
        ler();
    }
    public static void ler() throws IOException{
        tentarLerArquivo();
    }
}
```
