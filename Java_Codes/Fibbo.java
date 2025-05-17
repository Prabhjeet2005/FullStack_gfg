
import java.util.*;

public class Fibbo {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter Fibbonacci Series N: ");
    int n = sc.nextInt();
    int f = 0;
    int s = 1;
    for (int i = 0; i < n; i++) {
      if (i <= 1) {
        System.out.print(i + " ");
      } else {
        int t = f + s;
        System.out.print(t + " ");
        f = s;
        s = t;
      }
    }
  }
}