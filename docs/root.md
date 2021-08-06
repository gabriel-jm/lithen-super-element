# Lithen - SuperElement - root getter method

The `root` is an only getter method, which is used to abstract the need to verify if the element has or not a shadowRoot, by returning a shadowRoot reference if it has or to the element if not.

## Parameters
none, because its a [getter](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get) method.

## Usage
```ts
this.root // returns the root reference based if it has or not a shadowRoot
// or
element.root
```
