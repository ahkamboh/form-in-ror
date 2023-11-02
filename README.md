# Student Information

- **Name:** Ali Hamza
- **ID:** F2023266229
- **Class:** V5

## Contact Information

- **Email:** F2023266229@umt.edu.pk


<h1 style="text-align:center;">Activity 1</h1>

### 1. Right-angled triangle pattern of asterisks:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "*" << endl;
    cout << "**" << endl;
    cout << "***" << endl;
    cout << "****" << endl;
    cout << "*****" << endl;

    return 0;
}
```

### 2. Inverted right-angled triangle pattern of numbers:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "1" << endl;
    cout << "12" << endl;
    cout << "123" << endl;
    cout << "1234" << endl;

    return 0;
}
```

### 3. Diamond pattern of stars:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "    *" << endl;
    cout << "  ***" << endl;
    cout << "*****" << endl;
    cout << "  ***" << endl;
    cout << "    *" << endl;

    return 0;
}
```

### 4. Pattern of alternating numbers:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "10101" << endl;
    cout << "01010" << endl;
    cout << "10101" << endl;

    return 0;
}
```

### 5. Hollow square pattern of hash symbols:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "#####" << endl;
    cout << "#   #" << endl;
    cout << "#   #" << endl;
    cout << "#   #" << endl;
    cout << "#####" << endl;

    return 0;
}
```

### 6. Pattern of letters:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "A" << endl;
    cout << "B C" << endl;
    cout << "D E F" << endl;
    cout << "G H I J" << endl;
    cout << "K L M N O" << endl;

    return 0;
}
```

### 7. Right-angled triangle of alphabets:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "A" << endl;
    cout << "AB" << endl;
    cout << "ABC" << endl;
    cout << "ABCD" << endl;
    cout << "ABCDE" << endl;

    return 0;
}
```

### 8. Staircase pattern of dollar signs:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "$$$$$" << endl;
    cout << "$***" << endl;
    cout << "$**" << endl;
    cout << "$*" << endl;

    return 0;
}
```

### 9. Pattern of numbers in a right-angled triangle:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "1" << endl;
    cout << "22" << endl;
    cout << "333" << endl;
    cout << "4444" << endl;
    cout << "55555" << endl;

    return 0;
}
```

### 10. Pattern of asterisks forming a pyramid:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "    *" << endl;
    cout << "   ***" << endl;
    cout << "  *****" << endl;
    cout << " *******" << endl;
    cout << "*********" << endl;

    return 0;
}
```

---
<h1 style="text-align:center;">Assignment 1</h1>

### 1. Display Name and Welcome Message

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Ali Hamza" << endl;
    cout << "Welcome!" << endl;
    return 0;
}
```

### 2. Add Two Numbers

```cpp
#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    cin >> num1 >> num2;
    int sum = num1 + num2;
    cout << "Sum: " << sum << endl;
    return 0;
}
```

### 3. Calculate Rectangle Area

```cpp
#include <iostream>
using namespace std;

int main() {
    int length, width;
    cin >> length >> width;
    int area = length * width;
    cout << "Area: " << area << endl;
    return 0;
}
```

### 4. Celsius to Fahrenheit Conversion

```cpp
#include <iostream>
using namespace std;

int main() {
    float celsius;
    cin >> celsius;
    float fahrenheit = (celsius * 9/5) + 32;
    cout << "Temperature in Fahrenheit: " << fahrenheit << endl;
    return 0;
}
```

### 5. Simple Calculator

```cpp
#include <iostream>
using namespace std;

int main() {
    float num1, num2;
    cin >> num1 >> num2;
    cout << "Result of Addition: " << num1 + num2 << endl;
    cout << "Result Subtraction: " << num1 - num2 << endl;
    cout << "Result of Multiplication: " << num1 * num2 << endl;
    cout << "Result of divison: " << num1 / num2 << endl;
 
    return 0;
}
```

### 6. Square of a Number

```cpp
#include <iostream>
using namespace std;

int main() {
    int num;
    cin >> num;
    int square = num * num;
    cout << "Square: " << square << endl;
    return 0;
}
```

### 7. Factorial of a Number

```cpp
#include <iostream>
using namespace std;

int main() {
    int num;
    cin >> num;
    cout << "Factorial of 5 is " << num*4*3*2*1 << endl;
    return 0;
}
```

### 8. ASCII Value of a Character

```cpp
#include <iostream>
using namespace std;

int main() {
    char character;
    cin >> character;
    int asciiValue = character;
    cout << "ASCII Value: " << asciiValue << endl;
    return 0;
}
```

### 9. Personalized Greeting

```cpp
#include <iostream>
using namespace std;

int main() {
    string name;
    cin >> name;
    cout << "Hello, " << name << "! Welcome!" << endl;
    return 0;
}

```

### 10. Simple Shopping Cart

```cpp
#include <iostream>
using namespace std;

int main() {
    string item1, item2;
    float price1, price2;
    cout << "Enter the price and name of item 1: ";
    cin >> price1 >> item1;
    cout << "Enter the price and name of item 2: ";
    cin >> price2 >> item2;
    float total = price1 + price2;
    cout << "Total Cost of " << item1 << " and " << item2 << " is " << total << endl;
    
    return 0;
}

```

### 11. Display First 10 Natural Numbers

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "1" << endl;
    cout << "2" << endl;
    cout << "3" << endl;
    cout << "4" << endl;
    cout << "5" << endl;
    cout << "6" << endl;
    cout << "7" << endl;
    cout << "8" << endl;
    cout << "9" << endl;
    cout << "10" << endl;
    return 0;
}
```

### 12. Multiplication Table

```cpp
#include <iostream>
using namespace std;

int main() {
    int num;
    cin >> num;

    cout << num << " x 1 = " << num * 1 << endl;
    cout << num << " x 2 = " << num * 2 << endl;
    cout << num << " x 3 = " << num * 3 << endl;
    cout << num << " x 4 = " << num * 4 << endl;
    cout << num << " x 5 = " << num * 5 << endl;
    cout << num << " x 6 = " << num * 6 << endl;
    cout << num << " x 7 = " << num * 7 << endl;
    cout << num << " x 8 = " << num * 8 << endl;
    cout << num << " x 9 = " << num * 9 << endl;
    cout << num << " x 10 = " << num * 10 << endl;

    return 0;
}
```

### 13. Kilometers to Miles Conversion

```cpp
#include <iostream>
using namespace std;

int main() {
    float kilometers;
    cin >> kilometers;
    float miles = kilometers * 0.621371;
    cout << "Distance in Miles: " << miles << endl;
    return 0;
}
```
#### 14. Simple Menu-Driven Program (out of syllabus)
### 15. Countdown from 10 to 1

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "10" << endl;
    cout << "9" << endl;
    cout << "8" << endl;
    cout << "7" << endl;
    cout << "6" << endl;
    cout << "5" << endl;
    cout << "4" << endl;
    cout << "3" << endl;
    cout << "2" << endl;
    cout << "1" << endl;
    return 0;
}
```

### 16. Display Square Roots

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    cout << "Square root of 1 is " << sqrt(1) << endl;
    cout << "Square root of 2 is " << sqrt(2) << endl;
    cout << "Square root of 3 is " << sqrt(3) << endl;
    cout << "Square root of 4 is " << sqrt(4) << endl;
    cout << "Square root of 5 is " << sqrt(5) << endl;
    cout << "Square root of 6 is " << sqrt(6) << endl;
    cout << "Square root of 7 is " << sqrt(7) << endl;
    cout << "Square root of 8 is " << sqrt(8) << endl;
    cout << "Square root of 9 is " << sqrt(9) << endl;
    cout << "Square root of 10 is " << sqrt(10) << endl;
    return 0;
}

```

### 17. Calculate Perimeter of a Rectangle

```cpp
#include <iostream>
using namespace std;

int main() {
    int length, width;
    cin >> length >> width;
    int perimeter = 2 * (length + width);
    cout << "Perimeter: " << perimeter << endl;
    return 0;
}
```

### 18. Pattern of Even Numbers

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "2" << endl;
    cout << "4" << endl;
    cout << "6" << endl;
    cout << "8" << endl;
    cout << "10" << endl;
    cout << "12" << endl;
    cout << "14" << endl;
    cout << "16" << endl;
    cout << "18" << endl;
    cout << "20" << endl;

    return 0;
}

```

### 19. Display Current Date and Time

```cpp
#include <iostream>
using namespace std;

int main() {
    int date;
    float time;
    cin >> date >> time;
    cout << "Current" << " date " << date << " time " << time << " today " <<endl;
    return 0;
}
```

