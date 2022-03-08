# Lithen - SuperElement - applyRender method

The `applyRender` is a custom method used to apply the styles and markup defined on `styling` and `render` methods.

## Why is it needed
SuperElement's constructor tries to call it by default, but it can fail if the child class uses
`private fields`, in that cases you need to call it by yourself.

## Parameters
none

## Usage
```ts
class AppElement extends SuperElement {
  constructor() {
    super()

    this.applyRender()
  }
}
```
