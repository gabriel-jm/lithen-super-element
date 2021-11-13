import { SuperElement } from '../super-element/super-element.js'

export function renderFromElement(context: SuperElement, content: Element | DocumentFragment) {
  content instanceof Node && context.root?.appendChild(content)
}