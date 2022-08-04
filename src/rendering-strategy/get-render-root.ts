export function getRenderRoot(element: Element) {
  if ('shadowRoot' in element) {
    return element.shadowRoot!
  }

  return element
}
