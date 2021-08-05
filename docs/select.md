# Lithen - SuperElement - select method

The `select` method is just a wrap in `element.querySelector`, just to be less verbose and it adds the `select`, `selectAll`, `on` and `once` custom methods to the found element. It returns the found element or `null` if no element was found.

## Parameters
A element query - type string - Example: '.any-class', '#any-id'.

## Usage
```ts
this.select('.any-class')
// or
element.select('#any-id')
```
