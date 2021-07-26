# Lithen - Super Element

A class used to create Web Components, it provides some features to make Web Components usage less repetitive, like configure rendering or styling.

## Usage
```ts
import { SuperElement } from 'lithen-super-element'

class AppElement extends SuperElement {
  render() {
    return '<p>Element using Lithen example</p>'
  }
}

customElements.define('app-element', AppElement)
```

## Other libs that are part of Lithen
- [lithen-tag-functions]()
- [lithen-routing]()
