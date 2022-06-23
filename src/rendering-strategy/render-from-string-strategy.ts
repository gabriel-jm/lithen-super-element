import { SuperElement } from '../super-element/super-element.js'

export function renderFromString(context: Element | SuperElement, content: string | String) {
  const contextRoot = 'root' in context
    ? context.root
    : context

  contextRoot.innerHTML = content.toString()
}
