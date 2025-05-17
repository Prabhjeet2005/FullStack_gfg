class Stack {
  int size;
  int arr[] = new int[size];
  int top;

  Stack(int size) {
    this.size = size;
    arr = new int[size];
    top = -1;
  }

  void peek() {
    if (top == -1) {
      System.out.println("Stack is Empty");
      return;
    }
    System.out.println("Top Element: " + arr[top]);
  }

  void push(int element) {
    if (top + 1 == size) {
      System.out.println("Stack Overflow");
      return;
    }
    top = top + 1;
    arr[top] = element;
    System.out.println("Pushed Element: " + element);
  }

  void pop() {
    if (top == -1) {
      System.out.println("Stack Underflow");
      return;
    }
    int poppedElement = arr[top];
    arr[top] = -1;
    top--;
    System.out.println("Popped Element: " + poppedElement);
  }

  boolean isEmpty() {
    if (top != -1) {
      return false;
    }
    return true;
  }

  void getSize() {
    if (top == -1) {
      System.out.println("Stack Underflow");
      return;
    }
    System.out.println("Size of Stack: " + top + 1);
  }
}

public class StackWorking {
  public static void main(String[] args) {
    Stack stack = new Stack(4);
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    stack.peek();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    System.out.println(stack.isEmpty());
  }
}
