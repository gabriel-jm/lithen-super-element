import { SuperElement } from '../super-element/super-element.js'
import { getRenderRoot } from './get-render-root.js'

export function renderFromString(context: Element | SuperElement, content: string | String) {
  const contextRoot = getRenderRoot(context)

  contextRoot.innerHTML = content.toString()
}
