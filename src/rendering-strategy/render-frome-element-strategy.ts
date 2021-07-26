import { SuperElement } from '../super-element/super-element'

export function renderFromElement(context: SuperElement, content: HTMLElement) {
  context.root.appendChild(content)
}