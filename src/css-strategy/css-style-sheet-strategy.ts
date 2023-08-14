import { SuperElement } from '../super-element/super-element.js'

export class CSSStyleSheetStrategy {

  execute(element: Element | SuperElement, styles: string, sharedStyles = '') {
    const sharedStyleSheet = new CSSStyleSheet()
    sharedStyleSheet.replaceSync(sharedStyles)

    const styleSheet = new CSSStyleSheet()
    styleSheet.replaceSync(styles)

    const elementRoot = this.getElementRoot(element) as ShadowRoot & {
      adoptedStyleSheets: CSSStyleSheet[]
    }

    elementRoot.adoptedStyleSheets = [
      sharedStyleSheet,
      ...elementRoot.adoptedStyleSheets,
      styleSheet
    ]
  }
  
  getElementRoot(element: Element | SuperElement) {
    if ('shadowRoot' in element) {
      return element.shadowRoot
    }

    return element
  }
}
