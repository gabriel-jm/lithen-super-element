# Lithen - SuperElement - select method

The `select` method is a wrap in `element.root.querySelector`, the [`root`](./root.md) is another custom getter method of SuperElement, it uses it to abstract if the element has a shadowRoot or not and it adds the `select`, `selectAll`, `on` and `once` custom methods to the found element.
It returns the found element or `undefined` if no element was found.

## Parameters
- `query` - type string - an element selector. Example: '.any-class', '#any-id'.

## Usage
```ts
this.select('.any-class')
// or
element.select('#any-id')
```

That method can receive a generic when used with typescript, this generic must extends `HTMLElement` and if not passed it uses the `HTMLElement` type:
```ts
this.select<HTMLInputElement>('.my-input') // return the element with correct typing
```
