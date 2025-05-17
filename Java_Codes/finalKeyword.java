import java.lang.*;
import java.util.*;
final class FinalClass {
  final int num1 = 10;

  final void display() {
    System.out.println("Final Class num1: " + num1);
  }
}

public class finalKeyword {
 public static void main(String[] args) {
   final int localVar = 100;
   FinalClass fc = new FinalClass();
   fc.display();
   System.out.println("Local Variable: " + localVar);
 }
}
