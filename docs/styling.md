# Lithen - SuperElement - styling method

The `styling` method must return a string defining the components styles. This method only works if you are using `shadow DOM`.

## Parameters
none

## Usage
```ts
class AppElement extends SuperElement {
  styling() {
    return `
      .any-class {
        ...
      }
    `
  }
}
```
