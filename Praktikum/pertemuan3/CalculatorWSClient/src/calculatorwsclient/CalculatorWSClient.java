/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package calculatorwsclient;

/**
 *
 * @author hendr
 */
public class CalculatorWSClient {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        System.out.println(add(6,8));
        
    }

    private static Integer add(int a, int b) {
        org.me.calculator.CalculatorWS_Service service = new org.me.calculator.CalculatorWS_Service();
        org.me.calculator.CalculatorWS port = service.getCalculatorWSPort();
        return port.add(a, b);
    }
    
}
