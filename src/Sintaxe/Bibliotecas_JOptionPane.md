# Entrada de Dados - JOptionPane

```java
package exemplo;
import javax.swing.JOptionPane;
public class Exemplos {
    public static void main(String[] args) {
        String nome = JOptionPane.showInputDialog("Digite seu nome:");
        String idadeStr = JOptionPane.showInputDialog("Digite sua idade:");
        int idade = Integer.parseInt(idadeStr);
        JOptionPane.showMessageDialog(null,"Olá" + nome + "! Você tem " + idade + " anos");
    }
}
```

- Integer.parseInt(String) → converte para int
- Float.parseFloat(String) → converte para float
- Double.parseDouble(String) → converte para double
