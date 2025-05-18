class Stack {
  int size;
  int arr[] = new int[size];
  int top;

  Stack(int size) {
    this.size = size;
    arr = new int[size];
    top = -1;
  }

  void push(int element) {
    if (top + 1 == size) {
      System.out.println("Stack Overflow");
      return;
    }
    top++;
    arr[top] = element;
    System.out.println(element + " is Successfully Pushed");
  }

  void pop() {
    if (top == -1) {
      System.out.println("Stack Underflow");
      return;
    }
    int poppedElement = arr[top];
    arr[top] = -1;
    top--;
    System.out.println(poppedElement + " is Popped Successfully");
  }

  void peek() {
    if (top == -1) {
      System.out.println("Stack Underflow");
      return;
    }
    System.out.println("Topmost Element of Stack: " + arr[top]);
  }

  void isEmpty() {
    if (top == -1) {
      System.out.println("Stack is Empty");
      return;
    }
    System.out.println("Stack is Not Empty");
  }

  void getSize() {
    if (top == -1) {
      System.out.println("Stack Empty, Length: " + (top + 1));
    }
    System.out.println("Length of Stack: " + (top + 1));
  }
}

public class StackApplication {
  public static void main(String[] args) {
    Stack stack = new Stack(5);
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    stack.push(60);
    stack.peek();
    stack.getSize();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.getSize();
    stack.peek();
  }
}
