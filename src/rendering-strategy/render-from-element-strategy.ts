import { SuperElement } from '../super-element/super-element.js'

export function renderFromElement(context: SuperElement, content: HTMLElement) {
  content instanceof Node && context.root?.appendChild(content)
}