export function getRenderRoot(element: Element) {
  return element.shadowRoot ?? element
}
