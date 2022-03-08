import { SuperElement } from '../super-element/super-element.js'

export function renderFromElement(
  context: SuperElement,
  content: Element | DocumentFragment | NodeList | HTMLCollection
) {
  const elementsList = [content].flat() as Array<Element>
  context.root?.replaceChildren(...elementsList)
}