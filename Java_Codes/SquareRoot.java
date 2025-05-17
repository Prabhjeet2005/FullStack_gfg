import java.util.*;

public class SquareRoot {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter Number to Find Square Root of: ");
    double num = sc.nextDouble();

    double start = 0;
    double end = num;
    double precision = 0.0001;
    double mid = 0;
    while ((end - start) > precision) {
      mid = start + (end - start) / 2;
      if (mid * mid == num) {
        break;
      } else if (mid * mid < num) {
        start = mid;
      } else {
        end = mid;
      }
    }
    System.out.println("Square Root of " + num + " is: " + mid);
  }
}
