import { SuperElement } from '../super-element/super-element.js'
import { getRenderRoot } from './get-render-root.js'

export function renderFromElement(
  context: Element | SuperElement,
  content: Element | DocumentFragment | NodeList | HTMLCollection
) {
  const isSingleElement = (
    content instanceof Element
    || content instanceof DocumentFragment
    || content instanceof Node
  )
  const elementsList = isSingleElement
    ? [content]
    : Array.from(content) as Array<Element>

  const contextRoot = getRenderRoot(context)

  contextRoot.replaceChildren(...elementsList)
}