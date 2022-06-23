import { SuperElement } from '../super-element/super-element.js'

export class StyleElementStrategy {
  execute(element: Element | SuperElement, styles: string, sharedStyles = '') {
    const styleElement = document.createElement('style')

    styleElement.innerHTML = sharedStyles + styles

    const elementRoot = this.getElementRoot(element)

    elementRoot.insertBefore(
      styleElement,
      elementRoot.firstChild
    )
  }

  getElementRoot(element: Element | SuperElement) {
    if ('root' in element) {
      return element.root
    }

    return element
  }
}