import java.util.*;
import java.lang.*;

public class Fibonacci {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter N To find Fibonacci upto N: ");
    int n = sc.nextInt();
    int f=0;
    int s=1;
    for(int i=0; i<n; i++){
      if(i<=1){
        System.out.print(i+" ");
      }
      else{
        int t = f+s;
        System.out.print(t+" ");
        f=s;
        s=t;
      }
    }
  }
}
