# Lithen - SuperElement - applyRender method

The `applyRender` is a custom method used to apply the styles and markup defined on `styling` and `render` methods.

## Why is it needed
If you've ever used Web Components you might know that every property in the element is accessable 
when it becames an element. Because of this, private fields are usefull to keep state of somethings
that you don't want to became public. In mind in the previous versions the applying of 
styles and markup was made in SuperElement's constructor, which can run into errors of properties
access when we use private fields in styling and render methods. With that in mind I choose to let
the you to choose when you want to apply the rendering and to escape this litte problem, normally
calling it after the `super()` call.

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
