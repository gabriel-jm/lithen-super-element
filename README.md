# Lithen - Super Element

**Lithen** is a set of simple tools, that anyone could have built, to use with Web Components. They can be used alone, so it's provided separately.

**Super Element** is a class used to create Web Components, it provides some features to make Web Components usage a bit simple. But it not focus on change the aproach of using the Web Components, like implementing reactivity and the like, its a bit like a syntax sugar.

This package uses **ESModules**.

## Usage
```ts
import { SuperElement } from 'lithen-super-element'

class AppElement extends SuperElement {
  constructor() {
    super()

    this.applyRender()
    this.init()
  }

  init() {
    this.select('p').className = 'text'
  }
  
  styling() {
    return `
      .text {
        color: #d45;
      }
    `
  }

  render() {
    return '<p>Element using Lithen</p>'
  }
}

customElements.define('app-element', AppElement)
```

## SuperElement methods and attributes
- [constructor options](./docs/constructor.md)
- [root](./docs/root.md)
- [applyRender](./docs/apply-render.md)
- [render](./docs/render.md)
- [styling](./docs/styling.md)
- [select](./docs/select.md)
- [selectAll](./docs/select-all.md)
- [on](./docs/on.md)
- [once](./docs/once.md)

## Other libs that are part of Lithen
- [lithen-fns](https://www.npmjs.com/package/lithen-fns)
- [lithen-routing](https://www.npmjs.com/package/lithen-router)
