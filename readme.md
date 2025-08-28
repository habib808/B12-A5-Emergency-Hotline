

### 6. Answer the following questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById: Returns one element by its unique 'id' name.
getElementsByClassName: It's Returns a live HTMLCollection of all elements with that 'class' name.
querySelector: Returns the first element that matches a CSS selector (id, class, tag, etc.).
querySelectorAll: It's Returns a static NodeList of all elements matching a CSS selector.

2. How do you **create and insert a new element into the DOM**?

1.Create: const div = document.createElement('div');
2.Add content: div.textContent = 'Hello';
3.Select parent: const container = document.getElementById('container');
4.Insert: container.appendChild(div);

3. What is **Event Bubbling** and how does it work?

Event bubbling means when an event happens on a child element, it automatically travels up through its parent elements.

How it works::
The event starts on the element you interacted with (the target).
That element’s event listener runs first.
Then the event moves up to its parent, then grandparent, and so on until the document.
If those ancestors have listeners, they run too.
You can stop this upward travel anytime using event.stopPropagation().

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation is when you attach a single event listener to a parent element, letting events from its children bubble up. It’s useful because it reduces code, works for dynamic elements, and makes event handling more efficient.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() stops the browser’s default action for an event, like following a link or submitting a form. stopPropagation() stops the event from bubbling up to parent elements. In short, one blocks default behavior, the other blocks event flow.

