# Lithen - SuperElement - once method

The `once` method works just like the [`on`](./on.md) method, but with the `once` option enable in event options. The once option makes the event to be remove after used.

## Parameters
- `type` - type string - the name of the event. Example: "click", "change".
- `listener` - type function or object - a event listener function or an object that implements the [EventListener](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener) interface.
- `options` (optional) - type object - an object that implements the AddEventListenerOptions interface to define some event options.

## Usage
```ts
class AppElement extends SuperElement {
  init() {
    this.select('.any-class').once('click', () => {
      // some logic...
    })
  }
}
```
