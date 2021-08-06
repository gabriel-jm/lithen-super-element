# Lithen - SuperElement - selectAll method

The `selectAll` method works just like the [`select`](./select.md) method, but the is on `element.root.querySelectorAll` instead.

## Parameters
A element query - type string - Example: '.any-class', '#any-id'.

## Usage
```ts
this.selectAll('.any-class')
// or
element.selectAll('.any-class')
```

That method can receive a generic when used with typescript, this generic must extends `HTMLElement` and if not passed it uses the `HTMLElement` type and the type used is always set as an Array of this generic:
```ts
this.selectAll<HTMLInputElement>('.my-input') // return the element with correct typing
```
