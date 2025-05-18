final class finalClass {
  final int finalClassVar = 100;

  final void display() {
    System.out.println("Final Class Method Invoked\nFinal Class Variable :" + finalClassVar);
  }
}

public class FinalKeywords {
  public static void main(String[] args) {
    final int localVar = 10;
    System.out.println("Local Final Variable: "+localVar);
    finalClass finalObj = new finalClass();
    finalObj.display();
  }
}
