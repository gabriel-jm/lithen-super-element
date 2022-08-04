import { getRenderRoot } from '../rendering-strategy/get-render-root.js'
import { SuperElement } from '../super-element/super-element.js'

export class StyleElementStrategy {
  execute(element: Element | SuperElement, styles: string, sharedStyles = '') {
    const styleElement = document.createElement('style')

    styleElement.innerHTML = sharedStyles + styles

    const elementRoot = getRenderRoot(element)

    elementRoot.insertBefore(
      styleElement,
      elementRoot.firstChild
    )
  }
}