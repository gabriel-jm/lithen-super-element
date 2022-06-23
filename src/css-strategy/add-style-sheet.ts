import { SuperElement } from '../super-element/super-element.js'
import { CSSStyleSheetStrategy } from './css-style-sheet-strategy.js'
import { StyleElementStrategy } from './style-element-strategy.js'
import { cssStyleSheetSupport } from './verify-constructable-style-sheet-support.js'

let sharedStyles = ''

/**
 * CSS styles that are shared between all components.
 * It only applies to elements that has Shadow DOM.
 * 
 * Ins't necessary to add styling to body, html, 
 * :root and some elements like that, because its
 * not a kind of styles that need to be in all components.
 * 
 * @defaultValue `''`
 */
export function defineSharedStyles(styles: string | String) {
  sharedStyles = styles.toString()
}

export function addStyleSheet(element: Element | SuperElement, styles: string | String) {
  if(!styles && !sharedStyles) return

  const hasSupport = cssStyleSheetSupport()

  const Strategy = hasSupport
    ? CSSStyleSheetStrategy
    : StyleElementStrategy

  new Strategy().execute(element, styles.toString(), sharedStyles)
}
