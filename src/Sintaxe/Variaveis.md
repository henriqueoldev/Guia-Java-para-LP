# Variáveis

Exemplos:
```java
package exemplo;
public class ExemploVariaveis {
    public static void main(String[] args) {
        // Variáveis primitivas
        byte bMax = 127; // valor máximo positivo
        byte bMin = -128; // valor mínimo negativo
        short sMax = 32767; // valor máximo positivo
        short sMin = -32768; // valor mínimo negativo
        int iMax = 2147483647; // valor máximo positivo
        int iMin = -2147483648; // valor mínimo negativo
        long lMax = 9223372036854775807L; // valor máximo positivo
        long lMin = -9223372036854775808L; // valor mínimo negativo
        float fMax = 3.4028235E38f; // valor máximo positivo
        float fMin = -3.4028235E38f; // valor mínimo negativo
        ouble dMax = 1.7976931348623157E308; // valor máximo positivo
        double dMin = -1.7976931348623157E308; // valor mínimo negativo
        char c = 'A';
        boolean bo = true;
        
        // Variáveis de referência
        String nome = "Guia Definitivo LP";
        Integer idade = 25;
        Double altura = 1.75;

        // Exibe valores e limites
        System.out.println("byte max: " + bMax + ", min: " + bMin);
        System.out.println("short max: " + sMax + ", min: " + sMin);
        System.out.println("int max: " + iMax + ", min: " + iMin);
        System.out.println("long max: " + lMax + ", min: " + lMin);
        System.out.println("float max: " + fMax + ", min: " + fMin);
        System.out.println("double max: " + dMax + ", min: " + dMin);
        System.out.println("char: " + c);
        System.out.println("boolean: " + bo);
        System.out.println("String: " + nome);
        System.out.println("Integer: " + idade);
        System.out.println("Double (obj): " + altura);
    }
}
```