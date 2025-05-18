public class SquareRoot {
  public static void main(String[] args) {
    int n = 25;
    double start = 0;
    double end = n;
    double mid = 0;
    double precision = 0.001;

    while (end - start > precision) {
      mid = start + (end - start) / 2;
      if (mid * mid == n) {
        break;
      } else if (mid * mid > n) {
        end = mid;
      } else {
        start = mid;
      }
    }
    System.out.println("Square Root of " + n + " is: " + Math.round(mid));
  }
}
