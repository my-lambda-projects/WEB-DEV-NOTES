# Python (Week 17) Learning Objectives

## Week 17 Assessment Structure
- 90 minutes
- 10 Multiple Choice
- ~10 Problems in VSCode, totalling ~20-25 points for this section
  - Tests run using `python -m unittest`, same as the Knight's Travails project

## Intro to Python (W17D2) Learning Objectives

### Basics
1. Use PEP 8 as a reference for how to write your code
- The official style guide for Python, currently PEP 8 (Python Enhancement Proposals v8), can be found here: https://www.python.org/dev/peps/pep-0008/
- The style guide is curated by the Python community and creators with the intention of providing a standard format for Python code to be written in
2. `print` messages to the console terminal
- The `print` function is similar to JavaScript's `console.log`, in that whatever we pass in as an argument will be printed to the terminal.
3. Use `#` and `"""` to write code comments
- We can use a `#` to create a comment, similar to JavaScript's `//`
- `"""` can be used to make a multi-line string. This can be used to allow for comments to stretch across multiple lines without using `#` on each line. This syntax is also used at the beginning of a function declaration to create the documentation displayed for the function's `help` page (and VSCode's tooltips!).

### Number Data Types
1. Explain the most common types of numbers in Python
- We'll most commonly interact with `int` and `float` numbers, but `complex` numbers also exist.
- `int`, or integers, are counting numbers with no decimal points
- `float`, or floating point numbers, are numbers with deciaml places. They may occasionally have rounding errors, just like JavaScript
2. Evaluate arithmetic expressions that include familiar operators and `**`, `//` and `%`
- There are seven major operators that we may encounter:

| Operator | Meaning          | Example               |
|:--------:|:---------------- |:--------------------- |
|    +     | addition         | print(10+4)  #> 14    |
|    -     | subtraction      | print(10-4)  #> 6     |
|    *     | multiplication   | print(10*4)  #> 40    |
|    /     | division         | print(10/4)  #> 2.25  |
|    %     | modulo           | print(10%4)  #> 2     |
|    **    | exponent         | print(10**4) #> 10000 |
|    //    | integer division | print(10//4) #> 2     |

3. Predict when an arithmetic expression will throw an error
- Using the addition operator to concatenate strings with numbers will throw an error since we are attempting to combine multiple types. We must first cast the numbers to strings (or interpolate them)
```py
17.0 + ' and ' + 17 # TypeError
str(17.0) + ' and ' + str(17) # No error
```
- We may run into an `OverflowError` when working with extremely large floats
```py
10**100 # This integer is ok
10.0**100 # Floats take up more space in memory, this will be an OverflowError
```
- We won't use them, but a good note is that complex numbers will result in TypeErrors if we try to use integer division or modulo
```py
complex(47) // 8 # TypeError: can't take floor of complex number.
complex(47) % 8 # TypeError: can't mod complex number.
```
4. Know how to use assignment shorthand for arithmetic operators
- For each of the arithmetic operators (`+`, `//`, `%`, etc.), we can use the assignment shorthand by adding on an `=`.
- Like JavaScript, the assignment shorthand applies the operation to the variable on the left and reassigns its value:
```py
a = 2
a += 3 #> 5
a *= 2 #> 10
```

### String Data Type
1. Write strings using the correct syntax
- We can use single quotes, double quotes, or three quotes for multi-line strings:
```py
a = 'Hey'
b = "Hi"
c = '''Hello
there,
friend!'''
```
2. Use `len()` to obtain a count of the number of characters in a string
- In JavaScript, we used the `.length` property on a string to get the number of characters.
- In Python, we use the `len()` function and pass in the string as an argument:
```py
print(len('Hello')) #> 5
```
3. Refer to one or more characters in a string
- We can use indices and ranges to refer to single characters or substrings.
- Passing a single integer to square brackets will get the character at that index. Negative numbers can also be used to indicate we would like characters from the end of the string:
```py
'Hello'[4]   #> o
'Hello'[-1]  #> o
'Hello'[17]  #> IndexError
```
- Using `:` inside the square brackets indicates a range that we would like the substring for, starting at the index of the first value and going up to but not including the second index.
- Omitting the first integer indicates we want to start at the beginning of the string, and omitting the second integer takes all characters to the end of the string.
- Unlike specific indices, providing numbers outside of the valid indices will not cause an error when dealing with ranges:
```py
# Indexing with ranges
print("Spaghetti"[1:4])  # => pag
print("Spaghetti"[4:-1])    # => hett
print("Spaghetti"[4:4])  # => (empty string)
print("Spaghetti"[:4])  # => Spag
print("Spaghetti"[:-1])    # => Spaghett
print("Spaghetti"[1:])  # => paghetti
print("Spaghetti"[-4:])    # => etti

# Using invalid indices
# print("Spaghetti"[15])    # => IndexError: string index out of range
# print("Spaghetti"[-15])    # => IndexError: string index out of range
print("Spaghetti"[:15])    # => Spaghetti
print("Spaghetti"[15:])    # => (empty string)
print("Spaghetti"[-15:])    # => Spaghetti
print("Spaghetti"[:-15])    # => (empty string)
print("Spaghetti"[15:20])    # => (empty string)
```
4. Concatenate strings together
- We can use a simple `+` to concatenate strings:
```py
a = 'Hello'
b = 'World'
print(a+b) #> HelloWorld
```

### Variables
1. Explain duck-typing
- We follow the paradigm it's easier to ask for forgiveness than permission.
- We would prefer to attempt to invoke a function or access an attribute on an object and catch an exception if it occurs than to check for a type on each instance.
- This primarily stems from Python being dynamically typed, meaning the objects that we interact with may change types, collections may house a mixture of types, etc.
- We commonly see this in practice when we refer to instances of different classes. If we have many animal classes and all of them know how to `speak` but do so in different ways, we can iterate over a collection of them and invoke the `speak` method. We don't care what specific type of animal it is, we just know that animals in general should be able to speak.
2. Predict when errors will be thrown when using variables and expressions
- The main takeaways for this learning objective is that variables can be reassigned to different types and as long as those new types are interacted with accordingly, we will not throw any errors. For example:
```py
a = 17
print(a)         # => 17
a = 'seventeen'
print(len(a))    # => 9
```
- No errors are thrown above because we interacted with `a` appropriately at all stages.
- Errors will be thrown pretty commonly if we try to mix data types together. For example:
```py
a = '7'
a /= 2
print(a) # TypeError: unsupported operand type(s) for /=: 'str' and 'int'
```
- We get a TypeError because we cannot combine strings and integers in our arithmetic operations.
3. Explain the meaning of `None` in Python
- `None` has a similar function to JavaScript's `null`. It represents an absence of value.
- It can be assigned to a variable to indicate that it does not have a value at this time.
- `None` is also returned from a function if no return value is specified (similar to JavaScript's `undefined`)

### Boolean Data Type
1. Predict the evaluation of expressions that use the boolean operations of `and`, `or` and `not`
- Python's `and`, `or`, and `not` replace JavaScript's `&&`, `||`, and `!`
```py
print(True and False)     #> False
print(True or False)      #> True
print(True and not False) #> True
```
- They can also be grouped with parentheses:
```py
print(False and (True or True)) #> False
print((False and True) or True) #> True
```
2. Explain how Python handles non-Boolean objects in conditional statements
- Conditional statements are evaluated on "truthy" and "falsy" values, not strict `True` or `False` booleans.
- There are a few values that are considered falsy and will be treated like a `False` in a conditional:
  - 0, 0.0, 0j (complex number)
  - ''
  - False
  - None
  - []
  - ()
  - {}
  - set()
  - range(0)
- Other values will be considered truthy in a conditional statement

### Comparison Operators
1. Predict the result of expressions that utilize the operators `>`, `<`, `>=`, `<=`, `==`, and `!=`
- Pretty straight-forward mathematical comparisons

| Operator | Meaning                  | Example            |
|:--------:|:------------------------ |:------------------ |
|    >     | greater than             | 10 > 4    #> True  |
|    <     | less than                | 10 < 4    #> False |
|    >=    | greater than or equal to | 10 >= 10  #> True  |
|    <=    | less than or equal to    | 10 <= 7   #> False |
|    ==    | equal to                 | 10 == 7   #> False |
|    !=    | not equal to             | 10 != 7   #> True  |

2. Explain how to short-circuit conditional expressions
- Python will not bother evaluating the rest of the statement if the overall result of the conditional expression is already determined (`False and ...` is always False, `True or ...` is always True):
```py
# False and (anything else) is always False, so the print is not evaluated
False and print("not printed")
# Cannot determine overall value so we have to evaluate the right side, printing the statement
False or print("printed #1") 
# Cannot determine overall value so we have to evaluate the right side, printing the statement
True and print("printed #2")
# True or (anything else) is always True, so the print is not evaluated
True or print("not printed")
```

### Identity vs. Equality
1. Explain the difference between `==` and `is`
- `==` checks for equivalent values. We can compare two variables or literals to see if their values are the same. A notable point is that `int` and `float` values will be treated as equivalent, but comparing these numbers to their `str` counterpart will not:
```py
print(1 == 1.0) #> True
print(1 == "1") #> False
a = 1
print(a == 1) #> True
```
- `is` checks for strict equality, i.e., do these point to the same location in memory. We likely won't be using these with simple floats or ints. We most often see this used when comparing with `True`, `False`, or `None`, but could potentially come in handy when checking to see if we have the same instances of an object, for example. Keep this in mind when we work with more complex data types, like lists or instances of classes.

2. Explain when `not` will throw an exception
- `not` is processed after the equality operator (`==`), so a common mistake is incorrectly attempting to negate an expression used in this comparison:
```py
print(a == not b)    # => SyntaxError
```
- In the above example, the equality operator compares `a` to `not`, resulting in a SyntaxError. If we are attempting to negate `b`, we should surround the expression with parentheses to ensure that the `not` is evaluated before the `==`:
```py
print(a == (not b))    # => No error
```

### If Statements
1. Write an `if` statement, including use of `elif` and `else`
- `if` statements are very similar to how we write them in JavaScript. The main differences are our use of the standard Python `:` and indentation as well as using the keyword `elif` instead of the combination `else if` that we used in JavaScript:
```py
a = 1
b = 1.0
c = "1"

if (a == c):
    print("match")
elif (a == b):
    print("a matches b")
else:
    print("not a match")
```
- Just like in JavaScript, only one block will be entered, at max. If both `a == c` and `a == b` are truthy in the above code, only the first `a == c` block will be executed since we entered that block and ignored the rest of the conditions.

### While Statements
1. Write a `while` loop
- While loops are also very similar to JavaScript, we just need to remember to use the `:` and indentation:
```py
i = 0
while i < 5:
  print(f'{i + 1}. Hello World!')
  i += 1
```
- Remember to include your incrementing (`i += 1`), or whatever condition you are including to take you out of your iteration condition (`i < 5`)
2. Be able to use `continue` and `break` to move to the next iteration or break out of a loop
```py
# The 'continue' keyword goes to the next loop
# The 'break' keyword exits out of the loop completely
i = 0
while True:
  print(f'{i+1}. Hello, world.')
  if i < 4:
    i += 1
    continue
  print("You've printed 5 times. Goodbye.")
  break
```

### Error Handling
1. Write a try statement to catch and handle exceptions in Python
- We can wrap our statements that may fail in a `try` block
- An `except` statement will catch an error that is thrown. We can specify a specific type of error as well as capture the error itself using the `as` keyword.
- An `else` block will only be run if no exceptions were caught, whereas a `finally` block will run no matter what.
```py
a = 'False'
b = 6
c = 2
try:
    print(len(a))
    print(b/c)
    print(a[47])
except TypeError:
    print(f'{a} has no length')
except ZeroDivisionError as err:
    print(f'Cannot divide by zero! Error: {err}')
except:
    print('Uh oh, unknown error')
else:
    print('No errors! Nice!')
finally:
    print('Thanks for using the program!')
```
2. Handle different types of errors
- See demo above, where we use a generic `except` as well as specifically handling `TypeError` and `ZeroDivisionError`
3. Use `hasattr` to prevent an error from occurring
- This is much less common than using `try`/`except`, but could be useful to recognize moving forward (not on an assessment). We can check if an attribute exists before using it:
```py
a = ['Hello', 'World']
b = 4

# Checks if the __len__ attribute exists on a (what the len() function is looking at)
# If it does (like with 'a'), print the length.
# If it doesn't (like with 'b'), we don't enter the conditional, so no error occurs
if hasattr(a, '__len__'):
  print(len(a))   #> 2

if hasattr(b, '__len__'):
  print(len(b))   # We don't make it inside this block, nothing prints, no errors
```

### Pass Keyword
1. Know how to use `pass` to allow for empty blocks in code
- `pass` is used to indicate that we left a block empty intentionally
- Possible reasons are for stubbing out code in development or perhaps we want to allow for a particular exception to occur but we don't want to do anything in particular with it:
```py
a = 100
# b = "5"
try:
    print(a / b)
# If we get a ZeroDivisionError, continue on with the rest of our code instead of stopping execution for the unhandled error
except ZeroDivisionError:
    pass
except (TypeError, NameError):
    print("ERROR!")
```
```py
if num < 10:
  print("That's a small number!")
# TODO: Figure out what to do with large numbers
else:
  pass
```

### NoneType Data Type
1. Know how to use `None` and its relation to JavaScript's `undefined` and `null` types
- We will often use `None` as a default to indicate that no value has been assigned.
- It indicates an intentional lack of value
- `None` is also the return value of a function if no explicit return is specified.

### Functions
1. Describe how to define a function in Python
- We use the `def` keyword to define a function, followed by the name of the function, the arguments that it accepts, then open up a new block with a `:` and an indented block:
```py
def is_even(num):
  return num % 2 == 0

print(is_even(5)) #> False
print(is_even(2)) #> True
```
- For simple one-line functions, we can also use a lambda, which takes in the arguments and then returns the value resulting from the right side of the `:`
```py
is_even = lambda num: num % 2 == 0

print(is_even(8)) #> True
```
2. Demonstrate how to invoke a function
- After a function is declared, we can invoke it with parentheses passing in arguments.
- We can also specify arguments by name when invoked.
- A default value can be assigned to a parameter during the function declaration:
```py
def is_divisible(num, divisor=4):
  return num % divisor == 0

print(is_divisible(6, 3)) #> True
print(is_divisible(divisor=8, num=4)) #> False (we changed the order that the arguments were passed in)
print(is_divisible(8) #> True (the default of 4 was used for the divisor)
```
3. Write a function which accepts parameters and returns a value
- See examples above



## Python Basics Learning Objectives - Round 2

### Formatted Strings
1. Generate formatted output using `join`
- The `join` function is called on a separator string, passing in a list argument.
- The return value is each item in the list joined together with the separator between each element:
```py
shopping_list = ['bread','milk','eggs']
print(', '.join(shopping_list)) #> bread, milk, eggs
```
2. Generate formatted output using `format`
- THESE WILL NOT BE ASSESSED. They're here as a reference and to show the possibilities of the `format` function.
- The `format` function can take in many different options inside of the `{}` where data is being filled.
- These specifications can be very detailed, so a general reference to the docs is recommended for trying to accomplish a specific formatting: https://docs.python.org/3/library/string.html#formatspec
- The generic format from the docs:

| format_spec     | [[fill]align][sign][#][0][width][grouping_option][.precision][type]                           |
|:--------------- |:--------------------------------------------------------------------------------------------- |
| (spec name)     | (possible value)                                                                              |
| fill            | <any character>                                                                               |
| align           | "<" | ">" | "=" | "^"                                                                         |
| sign            | "+" | "-" | " "                                                                               |
| width           | digit+                                                                                        |
| grouping_option | "_" | ","                                                                                     |
| precision       | digit+                                                                                        |
| type            | "b" | "c" | "d" | "e" | "E" | "f" | "F" | "g" | "G" | "n" | "o" | "s" | "x" | "X" | "%"       |

- All of these options can be intimidating, so here are some common examples:
    - Comma as thousands separator:
    ```py
    print('{:,}'.format(1234567890)) # '1,234,567,890'
    ```
    - Date and Time:
    ```py
    d = datetime.datetime(2020, 7, 4, 12, 15, 58)
    print('{:%Y-%m-%d %H:%M:%S}'.format(d)) # '2020-07-04 12:15:58'
    ```
    - Percentage:
    ```py
    points = 190
    total = 220
    # Indicates a percentage rounded to two decimal places
    print('Correct answers: {:.2%}'.format(points/total)) # Correct answers: 86.36%
    ```
    - Data Table:
    ```py
    # defining the width of each "column" to be used in the format function
    width=8 
    # printing our table header
    print(' decimal      hex   binary')
    # printing the separator between the header and data
    print('-'*27)
    # iterating from numbers 1 to 15 to be printed in different formats
    for num in range(1,16):
        # we are iterating over each character d, X, and b, which we are using to indicate which integer presentation we are printing
        for base in 'dXb':
            # num is substituted in at the 0, the value to be formatted
            # width specifies the number of characters that should be printed out, prefilling with spaces
            # base indicates which number format to use. d is decimal, X is hex with capitalized letters, b is binary
            # end is an argument passed to print, NOT TO format. It indicates to end the print statement with a ' ' instead of the standard newline
            print('{0:{width}{base}}'.format(num, base=base, width=width), end=' ') 
        print() # prints a newline after all three representations have been printed
    # output printed below
    ```
    ```bash
     decimal      hex   binary
    ---------------------------
           1        1        1
           2        2       10
           3        3       11
           4        4      100
           5        5      101
           6        6      110
           7        7      111
           8        8     1000
           9        9     1001
          10        A     1010
          11        B     1011
          12        C     1100
          13        D     1101
          14        E     1110
          15        F     1111
    ```

### User Input
1. Gather user `input` through the terminal
- The `input` function takes in a prompt string to display to the user, then waits for input.
- When the user hits ENTER, the text that was typed up until that point is captured and returned from the `input` function
```py
answer = input('How are you? ')
print(f'Glad you are {answer}')
```

### Scripts vs Programs
1. Explain the difference between scripts and programs
- Scripts accomplish a straightforward task from start to finish. It is a set of code that runs in a linear order. In general, a script has very little if any user interaction, done with parameters passed in at the start or simple prompts.
- Programs are more complex than scripts. They will often include multiple UIs, use design patterns such as OOP, include multiple modules and packages, unit testing, environment configuration, etc.
- The main difference between a script and a program is the level of complexity. There is no defining line that separates the two.
2. Recall common use cases for Python
- Web applications: programs that generate HTML, CSS, and JavaScript to be displayed in a browser. Remember that browsers themselves do not run Python, but we can use Python to create those files that our browsers do interact with.
- APIs: an interface that acts as the middleman between a frontend (like our React frameworks) and our databases. We used Express.js to make JavaScript-based APIs previously.

### Structured Data
1. Define sequence, collection and iterable
- Sequence: an ordered set of data, with an assigned index (starting at 0) pointing to a value. Examples are strings, lists, tuples, and ranges.
- Collection: data sets that use hashable values to determine uniqueness. Examples are dictionaries (ordered collections where the hashable value is the key, similar to our POJOs in JavaScript) and sets (unordered collections where the hashable value is the item itself). Dictionaries being ordered is relatively new, with the change occuring in Python 3.6.
- Iterable: The generic term for a sequence or collection, i.e, any object which we can loop over to access individual elements
2. Explain immutable
- Immutable objects are those that cannot be changed. We can perform such actions as checking presence of an item or looping over the iterable, but we cannot add new items, remove items, order them, etc.

### Built-in Data Types
1. Declare a `list`, `tuple`, `range`, `dictionary` and `set` in Python
- List: Similar to a JavaScript array. Lists are ordered and mutable, so we can add, remove, sort, etc.
```py
empty_list = []
second_empty_list = list()
non_empty_list = ['Some', 'content']
non_empty_list.append('!!!')
print('Some' in non_empty_list) # True
print('???' in non_empty_list) # False
```
- Tuple: Similar to a list, but it is immutable. Because of this they are often used for constants.
```py
time_blocks = ('AM','PM')   # generally instantiated with parentheses
numbers = 1, 2, 3           # but leaving them off will still make a tuple
tuple('abc')                # we can cast other iterables to a tuple, this returns ('a', 'b', 'c')
tuple([1,2,3])              # returns (1, 2, 3)
print('AM' in time_blocks)  # we can check for inclusion, just like a list, this returns True
print('FM' in time_blocks)  # returns False
```
- Range: An immutable list of numbers in order. We can provide a start (default 0), stop (required), and step (default 1) argument. The range goes up (or down) to but does not include the stop number
```py
range(5)            # [0, 1, 2, 3, 4]
range(1,5)          # [1, 2, 3, 4]
range(0, 25, 5)     # [0, 5, 10, 15, 20]
range(0)            # [ ]
range(0, -5, -1)    # [0, -1, -2, -3, -4]
range(5, 0, -1)     # [5, 4, 3, 2, 1]
```
- Dictionary: Similar to a JavaScript POJO, dictionaries are collections of hashable keys referencing an object/value. We can use curly braces or the `dict` constructor, taking in named arguments or casting:
```py
a = {'one':1, 'two':2, 'three':3}
b = dict(one=1, two=2, three=3)
c = dict([('two', 2), ('one', 1), ('three', 3)])
print(a == b == c)   # => True, If keys and values are the same, they are considered equivalent, doesn't matter how they were defined

# The  `in` operator checks the KEYS of a dictionary
print(1 in {1: "one", 2: "two"})    #> True
print("1" in {1: "one", 2: "two"})  #> False
print(4 in {1: "one", 2: "two"})    #> False
```
- Set: an unordered collection of distinct, hashable objects, meaning they have to be unique. Sets are useful for removing duplicates from a sequence, testing for inclusion, and mathematical operators. Sets are mutable, meaning we can add/remove values from them. Making a set looks like making a dictionary, just with no values associated with the keys:
```py
school_bag = {'book','paper','pencil','pencil','book','book','book','eraser'}
print(school_bag)           # => {'book','pencil','eraser','paper'} the duplicates were dropped on creation

# The set constructor can be used to cast sequences
letters = set('abracadabra')
print(letters)              # {'a', 'r', 'b', 'c', 'd'}

print(1 in {1, 1, 2, 3})  #> True
print(4 in {1, 1, 2, 3})  #> False
```

### Built-in Functions
1. Use functions with iterables `filter`, `map`, `sorted`, `enumerate`, `zip`
- `filter(function, iterable)`: The `function` parameter takes in an item from the `iterable` and returns a boolean. The return of `filter` is a new iterable that contains each item from the `iterable` parameter that returned True in the `function`:
```py
def is_even(num):
    return num % 2 == 0

iterable = [1, 4, 6, 9]
filtered = filter(is_even, iterable) # [4, 6]
```
- `map(function, iterable)`: The `function` parameter takes in an item from the `iterable` and returns a new item (can be the same or a completely different type). The return of `map` is a new iterable that contains each item that was returned from the `function` parameter:
```py
def double(num):
    return num * 2

iterable = [1, 4, 6, 9]
mapped = map(double, iterable) # [2, 8, 12, 18]
```
- `sorted(iterable, key=None, reverse=False)`: Returns a new sorted list from the `iterable`, with the `key` being an optional function to be applied to each item for comparison purposes and `reverse` inverting the order of the returned list. If `key` or `reverse` are used, they must be named arguments:
```py
iterable = ['b', 'R', 'F', 'c']
sorted_list = sorted(iterable, key=str.lower, reverse=True) # ['R', 'F', 'c', 'b']
```
- `enumerate(iterable, start=0)`: Converts a sequence into a series of tuples, with the first element being the index (starting at the `start` parameter) and the second element being the value from the sequence. If `start` is used, it must be a named argument:
```py
quarters = ['First', 'Second', 'Third', 'Fourth']
enumerate(quarters)              # (0, 'First'), (1, 'Second'), (2, 'Third'), (3, 'Fourth')
enumerate(quarters, start=1)     # (1, 'First'), (2, 'Second'), (3, 'Third'), (4, 'Fourth')
```
- `zip(*iterables)`: Creates an object with tuples that combine an item from each iterable provided. If uneven lengths are given between iterables, the zip stops when the shortest iterable runs out of values:
```py
list1 = [1, 3, 4, 7]
list2 = ['a', 'x', 'g', 's', 'p']
list3 = ['Hello', 'World']

zip(list1, list2, list3)        # (1, 'a', 'Hello'), (3, 'x', 'World')
```

2. Analyze iterables using `len`, `max`, `min`, `sum`, `any`, `all`
- `len(iterable)`: returns the number of items in the iterable
- `max(*args, key=None)` or `max(iterable, key=None)`: returns the largest of the arguments given in `*args` or amongst items in the `iterable`. `key` is an optional function that is applied to each item for comparison purposes. If used, it must be passed as a named argument.
- `min(*args, key=None)` or `min(iterable, key=None)`: same as `max`, but returns the smallest.
- `sum(iterable)`: adds all items from the iterable together and returns the result (usually used with a list of numbers)
- `any(iterable)`: returns True if any item in the iterable is a truthy value
- `all(iterable)`: returns True if all items in the iterable are truthy values

3. Work with dictionaries using `dir`
- `dir(dictionary)` returns a list of all keys in a dictionary. It can also be used on objects and modules to return a list of their attributes.

4. Work with sets using operators `|`, `&`, `-`, `^`
- `|`: Union operator, can also be written as `union(*sets)`, returns a new set that combines all elements from each set
```py
a = {1, 2, 3}
b = {2, 4, 6}
print(a | b)        # => {1, 2, 3, 4, 6}
```
- `&`: Intersection operator, can also be written as `intersection(*sets)`, returns a new set that contains elements that are present in all sets
```py
a = {1, 2, 3}
b = {2, 4, 6}
print(a & b)        # => {2}
```
- `-`: Difference operator, can also be written as `difference(*sets)`, returns a new set that contains elements in the first set and not any of the others
```py
a = {1, 2, 3}
b = {2, 4, 6}
print(a - b)        # => {1, 3}
print(b - a)        # => {4, 6}
```
- `^`: Symmetric difference operator, can also be written as `symmetric_difference(*sets)`, returns a new set that contains all elements that are present in only one of the given sets
```py
a = {1, 2, 3}
b = {2, 4, 6}
c = {3, 4, 5}
print(a ^ b ^ c)    # => {1, 5, 6}
```

### For Loops
1. Implement a `for` loop with an iterable
- To make a `for` loop, we use the `for` keyword, a variable name to capture each item, the `in` keyword, an iterable that we are looping over, then a `:` and a block of code to execute for each item
- With a `range`:
```py
# Sum all even numbers from 0 to 20
total = 0
for num in range(0, 21, 2):
    total += num
print(total)
```
- With a `list`:
```py
# Print each element of a list
lst = [0, 1, 2, 3]
for i in lst:
    print(i)

# We can make a range to correspond to each index of a list
supplies = ['pens', 'staplers', 'flame-throwers', 'binders']
for i in range(len(supplies)):
    print('Index ' + str(i) + ' in supplies is: ' + supplies[i])

# We can destructure nested lists
l = [[1, 2], [3, 4], [5, 6]]
for a, b in l:
    print(a, ', ', b)

# Prints 1, 2
# Prints 3, 4
# Prints 5, 6
```
- With a `dictionary` (we will often use the `values()`, `keys()`, or `items()` methods to iterate over)
```py
spam = {'color': 'red', 'age': 42}

for v in spam.values():
    print(v)
# Prints red
# Prints 42

for k in spam.keys():
    print(k)
# Prints color
# Prints age

for k, v in spam.items():
    print('Key: ' + k + ' Value: ' + str(v))
# Prints Key: age Value: 42
# Prints Key: color Value: red
```
- With a `str`:
```py
for char in "abc":
    print(char)
# Prints a
# Prints b
# Prints c
```

### More on Functions
1. Capture variable-length positional arguments with `*`
- Specifying `*args` as a parameter in our function definition will collect any additional positional arguments (those not specified with a name in the function invocation) into a tuple that we can then access within the function:
```py
def add(a, b, *args):
    total = a + b
    for n in args:
        total += n
    return total

# 2 is captured as 'a', 3 is captured as 'b', and a tuple of (4, 5, 6) is captured as 'args'
add(2, 3, 4, 5, 6) # Returns 20
```
2. Capture variable-length keyword arguments with `**`
- Specifying `*kwargs` (short for keyword arguments) as a paramet in our function definition will collect any additional keyword arguments (those specified with a name in the function invocation) into a dictionary with each name as the key pointing to the value:
```py
def print_names_and_countries(greeting, **kwargs):
    for k, v in kwargs.items():
        print(greeting, k, "from", v)

# 'Hi' is captured as the greeting and each named argument is captured as the dictionary kwargs
print_names_and_countries("Hi",
                          Monica="Sweden",
                          Charles="British Virgin Islands",
                          Carlo="Portugal")
```
3. Correctly order parameters and arguments in function declarations and invocation
- When defining our functions, we must specify arguments in the following order:
    1. positional arguments
    2. `*args`
    3. keyword arguments with default values
    4. `**kwargs`
```py
def example(arg_1, arg_2, *args, kw_1="shark", kw_2="blowfish", **kwargs):
  pass

# 1 is captured as arg_1, 'b' is captured as arg_2, (3, 4) is captured as args, 'whale' is captured as kw_1, 'blowfish' is used as the default kw_2, { 'kw_4': 'octopus' } is captured as kwargs
example(1, 'b', 3, 4, kw_1='whale', kw_4='octopus')
```

### Importing in Python
1. Define module in Python
- A module is a way to split code into multiple files, similar to JavaScript packages. It can be a *Built-in* module, already present in Python, a *Third-party* module that we've downloaded, or a *Custom* module that we write ourselves
2. Use `import` to load a built-in module
```py
import math
print(math.floor(5.4))  # 5
print(math.ceil(5.4))   # 6

# importing specific functions:

from math import floor, ceil
print(floor(5.4))       # 5
print(ceil(5.4))        # 6
```
3. Understand the relationship between packages, modules and submodules
- THIS GOES BEYOND OUR NEEDS FOR THE ASSESSMENT. Knowing how to import a a built-in module or relative module (the above LO) is sufficient for us at this point.
- A `package` is a path to a directory that contains modules
- A `submodule` is another file in a module's folder
- `__init__.py` is the default file for a package. The name of the folder becomes the name of the module, which can then be imported.
- A visualization is helpful to see these relationships:
```bash
project
│   README.md
│   __init__.py
|   shopping_cart.py         <== module
│
└───pet                      <== package
│   │
│   └───mammal               <== module (and package)
|   |   |   __init__.py
│   |   │   dog.py           <== submodule
│   |   │   cat.py           <== submodule
│   |   │   ...
│   │
│   └───fish                 <== module (and package)
|   |   |   __init__.py
│   │
│   └───bird                 <== module (and package)
|       |   __init__.py
│
└───housing                  <== module (and package)
    │   __init__.py
    │   aquarium.py          <== submodule
    │   cage.py              <== submodule
    │   kennel.py            <== submodule
```
4. Follow common best practices for importing modules
- Avoid importing whole packages or using wildcards; only import what you need to improve clarity and reduce the amount of code loaded into memory.
- When importing many items from a package, use multiple lines, typically sorted alphabetically. It is easier to read each function/class/etc. when it is on its own line and makes changes easier to pinpoint, especially on GitHub.

### Watching out for Python 2
These are not assessed materials, just good to be on the lookout for when learning/reading about Python.
1. Identify Python 2.7 in code examples found online
- These are not things that you will encounter regularly, but are good to be able to recognize have changed when looking at old code, answers to questions online, etc.:
    - `<>` was previously used where Python 3 now uses `!=`
    - `%` operator was previously used for string formatting, but we now prefer formatted strings with the `format` function or with `f''`
    - Unicode and binary data storage has changed. This is probably not a common topic that you'll interact with regularly, but good to know that binary and string data can no longer be mixed and must be explicitly converted.
    - Some module changes exist:
        - `md5` was removed in favor of using `hashlib`
        - `ConfigParser` was renamed `configparser`
        - `sets` was removed in favor of the `set()` class
    - `__init__.py` is no longer required in every folder of a module during development
2. Understand how to translate `print` from Python 2.7 to Python 3.8
- `print` was previously a statement in Python 2, whereas it is now a function in Python 3
- The difference that you'll notice practically is that we now pass what we want to print as an argument to `print`:
```py
# Python 2:
print 'Hello, world'

# Python 3:
print('Hello, world')
```



## Classes and List Comprehensions (W17D4) Learning Objectives

### Classes in Python
1. How to use the `class` keyword to define a class
- Similar to defining a function, we can use the `class` keyword followed by the name of the class that we are creating and a `:` before indenting our block of code
```py
class Animal:
  # code for class definition
```

2. How to name classes
- See above, we follow the `class` keyword with the name of our class.

3. How to create instances from classes
- After we have defined a class, we can invoke it like we would a function, using parentheses.
- The return value of this invocation is a reference to the instance that we created.
```py
class Animal: 
  # code for class definition

bird = Animal()
```

4. How to initialize classes with the "dunder method" `__init__()`
- In JavaScript, we created `constructor()` functions to set up initial states of class instances.
- In Python, the `__init__()` function is our initialization function.
- Any instance method in our classes take in a reference to the instance itself as a first argument. This argument is automatically passed by Python when we invoke the function. Traditionally we call this reference `self`.
- `self` is similar to JavaScript's `this`. In order to create instance variables in our `__init__`, we can use `self.<<variable name>>`, just like we would use `this.<<variable name>>` in JavaScript.
- We can allow our code to take in arguments to initialize these values on creation of our instance by specifying these parameters in our `__init__`, just like we would do with a JavaScript `constructor`:
```py
class Animal:
  def __init__(self, name='Bessy', sound='moo'):
    self.name = name
    self.sound = sound

dog = Animal('Trudy', 'woof')
cat = Animal(sound='meow', name='Milo')
cow = Animal()
```

5. How to use the "dunder class variable" `__slots__` to reserve memory for instance variables
- THIS IS NOT ASSESSED. It improves efficiency of classes, but is beyond our current needs.
- Using `__slots__` increases performance of creating instances of your class by reserving space in memory for 
these variables when the instance itself is created instead of going back and reallocating that space when it sees the definition later on.
- We can add the class variable `__slots__` at the beginning of our class definition that points to a list of variable names we would like to allocate space for.
- This process is optional, but can improve performance, especially if we are going to be making many instances of a class. We'll typically go back and add this performance increase once we know which variables are utilized within our class:
```py
class Animal:
  __slots__ = [ 'name', 'sound' ]

  def __init__(self, name='Bessy', sound='moo'):
    self.name = name
    self.sound = sound
```

6. How to make string representations of classes using the "dunder method" `__repr__()` for use by `print()`
- We can specify what we want our class instances to look like when we print them out as strings by overwriting the `__repr__()` method.
- The return value of `__repr__()` should be the string that we would like to represent our instance:
```py
class Animal:
  __slots__ = [ 'name', 'sound' ]

  def __init__(self, name='Bessy', sound='moo'):
    self.name = name
    self.sound = sound

  def __repr__(self):
    return f'<Animal (named {self.name}, says {self.sound})>'

dog = Animal('Trudy', 'woof')
print(dog) # <Animal (named Trudy, says woof)>
```

7. How to declare instance methods for a class
- Instance methods can be declared like any other function, they just have to be nested inside of the class and take in the reference to the instance (`self`) as the first argument.
- Remember that Python will automatically pass this reference when the method is invoked, so we do not have to pass it in manually:
```py
class Animal:
  __slots__ = [ 'name', 'sound' ]

  def __init__(self, name='Bessy', sound='moo'):
    self.name = name
    self.sound = sound

  def change_name(self, name):
    self.name = name
    print(f'Name changed to {name}')

  def make_noise(self):
    print(f'{self.name} says {self.sound}!')

  def __repr__(self):
    return f'<Animal (named {self.name}, says {self.sound})>'


dog = Animal('Trudy', 'woof')
dog.make_noise()          # Trudy says woof!
dog.change_name('Maggie') # Name changed to Maggie
dog.make_noise()          # Maggie says woof!
```


### Inheritance in Python
1. How to specify a parent class
- Specifying a parent class is as easy as passing a reference to that class as an argument in the class definition. We do so by adding parentheses after our class name and passing the parent class as the argument:
```py
class Animal:
  def __init__(self, name):
    self.name = name

class Cow(Animal):
  # class definition
```

2. How to use `super` to access parent class methods
- We often want to extend the functionality of a method defined in the parent class, or invoke it for some other reason in the child. We can use the `super()` function to get a reference to the parent class, then invoke the desired function:
```py
class Animal:
  def __init__(self, name):
    self.name = name

  def get_name(self):
    return self.name

class Cow(Animal):
  def __init(self, name='Bessy', sound='moo'):
    super().__init__(name)
    self.sound = sound

  def make_noise(self):
    print(f'{self.name} says {self.sound}!')

my_cow = Cow()
print(f'The name of my cow is {my_cow.get_name()}')
my_cow.make_noise()
```

### Properties for Classes
1. Define a "getter" method for a class' property using the `@property` decorator
- We can use a decorator, which is a wrapper for a function that performs some addititional functionality for us. In this case, the `@property` decorator creates references to these instance variables as attributes, removing the need for us to invoke a function to get access to these attributes. We add this decorator before a function definition with the name of the attribute we want to create access to on for our users, returning the instance variable:
```py
class Animal:
  # I'm using the _ before the names of these variable names to indicate they shouldn't be interacted with directly. It's a way of telling other developers they should really be using the methods that we created.
  __slots__ = [ '_name', '_sound' ]

  def __init__(self, name='Bessy', sound='moo'):
    self._name = name
    self._sound = sound

  @property
  def name(self):
    return self._name

  @property
  def sound(self):
    return self._sound

cow = Animal()
# Notice how we can reference `.name` instead of having to invoke a function
print(f'The name of the cow is {cow.name}. It says {cow.sound}')
```

2. Define a "setter" method for a class' property using the `@<<getter_method_name>>.setter`
- Similar to getters that allow us to get a value of an instance variable, we can define setters that change these instance variable values. We use the decorator `@<<getter_method_name>>.setter` before the function definition with the name of the attribute:
```py
class Animal:
  # I'm using the _ before the names of these variable names to indicate they shouldn't be interacted with directly. It's a way of telling other developers they should really be using the methods that we created.
  __slots__ = [ '_name', '_sound' ]

  def __init__(self, name='Bessy', sound='moo'):
    self._name = name
    self._sound = sound

  @property
  def name(self):
    return self._name

  @name.setter
  def name(self, value):
    self._name = value

  @property
  def sound(self):
    return self._sound

  @sound.setter
  def sound(self, value):
    self._sound = value

cow = Animal()
# Notice how we can reference `.name` instead of having to invoke a function
print(f'The name of the cow is {cow.name}. It says {cow.sound}')
cow.name = 'Delilah'
cow.sound = 'MOOOOOO'
print(f'The name of the cow is {cow.name}. It says {cow.sound}')
```

### Tree Refresher (Not on the assessment, used for application of Python concepts)
1. Understand the basic structure of a tree, including the concepts of a `root` and `children`
- A tree is a collection of nodes, each node can have a maximum of one parent.
- The node at the top of a tree which has no parent is the root node.
- Depending on the type of tree, a node can have multiple children, but in a binary tree it can have a maximum of two.
- Nodes with no children are called leaf nodes.
- Every node in a tree is also the root of a subtree. We often use this idea when we use recursion while working with trees, such as searching for an entry in a binary search tree.
2. Understand the algorithm of traversing a tree with a depth first search (what nodes would we visit)
- In a depth-first traversal of a tree, we fully explore the left side of a tree and each subtree before moving on to the right side. This is often accomplished by adding the children of our current node to a stack that we would like to traverse.
- The numbers in the tree below indicate the order that we would reach that node in a depth-first traversal.
```bash
          1
         / \
        2   5
       /   / \
      3   6   9
     /   / \
    4   7   8
```
3. Understand the algorithm of traversing a tree with a breadth first search (what nodes would we visit)
- In a breadth-first traversal of a tree, we explore all children of a node before moving on to the next level of the tree. This is often accomplished by adding the children of our current node to a queue that we would like to traverse.
- The numbers in the tree below indicate the order that we would reach that node in a breadth-first traversal.
```bash
          1
         / \
        2   3
       /   / \
      4   5   6
     /   / \
    7   8   9
```

### List Comprehensions
1. Rewrite loops and `map()` calls as a list comprehension in Python
- The general format for using a list comprehension is `new_list = [expression for member in iterable]`
- The expression is invoked for each element in the iterable, with the result being added to the list:
```py
squares = [i**2 for i in range(10)]

print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

2. Choose between comprehensions, loops, and `map()` calls
- The single-line nature of comprehensions can be very convenient, but can also be confusing for more complicated operations.
- One of the most important parts of coding is writing code that other people understand and can interact with. If the comprehension is difficult for you to understand as the coder, it is probably even more difficult to understand as an outsider.
- A classic example of when this may be the case is flattening a matrix. It can be done, but the syntax is confusing. Using a map or multiple loops may take more lines, but is much more clear what is happening:
```py
matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
]

flat_comprehension = [num for row in matrix for num in row]

# This is more lines of code, but performs the same function and is easier to understand the intent
flat_loops = []
for row in matrix:
  for num in row:
    flat_loops.append(num)
```

3. Supercharge your comprehensions with conditional logic
- We can add in a conditional to the comprehension in order to only run the expression if the element passes the condition.
- The general format then becomes `new_list = [expression for member in iterable (if conditional)]`
```py
sentence = 'Mary, Mary, quite contrary, how does your garden grow?'
def is_consonant(letter):
    vowels = "aeiou"
    return letter.isalpha() and letter.lower() not in vowels

# Only add in the character if it is a consonant
consonants = [i for i in sentence if is_consonant(i)]

print(consonants)
# Prints ['M', 'r', 'y', 'M', 'r', 'y', 'q', 't', 'c',
# 'n', 't', 'r', 'r', 'y', 'h', 'w', 'd', 's', 'y',
# 'r', 'g', 'r', 'd', 'n', 'g', 'r', 'w']
```

- We can also change where our conditional is written in order to alter what values are added in to our list.
- This general format becomes `new_list = [expression (if conditional (else other_value)) for member in iterable]`
```py
original_prices = [1.25, -9.45, 10.22, 3.78, -5.92, 1.16]
# If a negative value is given, add in a 0 instead
prices = [i if i > 0 else 0 for i in original_prices]

print(prices)
# Prints [1.25, 0, 10.22, 3.78, 0, 1.16]
```

4. Use comprehensions to replace `filter()`
- See the example above. We can provide a conditional function to the end of our list comprehension just like we provide the function as an argument to `filter`

5. Use a comprehension to combine lists into a dictionary
- We follow a similar format for dictionary comprehensions compared to list comprehensions.
In general we us `new_dict = { key: value for member in iterable }`:
```py
keys = ['name', 'AGE', 'Height']
values = ['Bill', 43, 70]

user = { keys[i].title(): values[i] for i in range(len(keys)) }

# OR, using zip

user = { key: value for key, value in zip(keys, values) }
```
