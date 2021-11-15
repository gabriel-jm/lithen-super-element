# Lithen - SuperElement - Constructor

The `constructor` can receive some options to configure the component.

## Parameters
- `buildOptions` (optional) - type object - an object to configure if you want to use `shadow DOM` or
the `mode` of the shadow DOM, and this options becames properties in the element one for `mode` and
or for `hasShadowRoot`.
  - `shadowRoot`: a boolean to set if want an element with `shadow DOM` or not. Default: true.
  - `mode`: can set as "open" or "closed". This options doesn't apply if `shadowRoot` is set as false. Default: "open".

## Usage
```ts
class AppElement extends SuperElement {
  constructor() {
    super({
      mode: 'open',
      shadowRoot: true
    })
  }
}
```
