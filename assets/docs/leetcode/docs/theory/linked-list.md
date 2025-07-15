# linked list

## Class in Python

```python
class MyClass:
  def __init__(self, init_value=12345):
    self.value = init_value
  
  def print_value(self):
    print(self.value)

obj1 = MyClass()
obj1.print_value()
```

```python
class Node:
  def __init__(self, data):
    self.value = data
    self.next = None
    self.prev = None
```

## Singly Linked List vs. Doubly Linked List

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image
