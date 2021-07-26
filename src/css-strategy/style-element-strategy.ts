import { SuperElement } from '../super-element/super-element'

export class StyleElementStrategy {
  execute(element: SuperElement, styles: string, sharedStyles = '') {
    const styleElement = document.createElement('style')

    styleElement.innerHTML = sharedStyles + styles

    element.root.insertBefore(
      styleElement,
      element.root.firstChild
    )
  }
}