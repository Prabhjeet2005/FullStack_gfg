final class FinalClass{
  final int finalVar = 100;
  final void display(){
    System.out.println("Final Variable: "+finalVar);
  }
}
public class FinalUse {
  public static void main(String[] args) {
    final int finalLocal = 10;
    FinalClass finalObj = new FinalClass();
    finalObj.display();
    System.out.println("Local Variable: "+finalLocal);
  }
}
