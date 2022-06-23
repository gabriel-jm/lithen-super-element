import { SuperElement } from '../super-element/super-element.js'

interface CSSStyleSheetSupported extends CSSStyleSheet {
  replace(css: string): void
}

export class CSSStyleSheetStrategy {

  execute(element: Element | SuperElement, styles: string, sharedStyles = '') {
    const sharedStyleSheet = new CSSStyleSheet() as CSSStyleSheetSupported
    sharedStyleSheet.replace(sharedStyles)

    const styleSheet = new CSSStyleSheet() as CSSStyleSheetSupported
    styleSheet.replace(styles)

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
    if ('root' in element) {
      return element.root
    }

    return element
  }
}
