import { SuperElement } from '../super-element/super-element'

interface CSSStyleSheetSupported extends CSSStyleSheet {
  replace(css: string): void
}

export class CSSStyleSheetStrategy {

  execute(element: SuperElement, styles: string, sharedStyles = '') {
    const sharedStyleSheet = new CSSStyleSheet() as CSSStyleSheetSupported
    sharedStyleSheet.replace(sharedStyles)

    const styleSheet = new CSSStyleSheet() as CSSStyleSheetSupported
    styleSheet.replace(styles)

    const elementRoot = element.root as ShadowRoot & {
      adoptedStyleSheets: CSSStyleSheet[]
    }

    elementRoot.adoptedStyleSheets = [
      sharedStyleSheet,
      ...elementRoot.adoptedStyleSheets,
      styleSheet
    ]
  }
  
}
