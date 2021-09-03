import { SuperElement } from '../super-element/super-element.js'

export function renderFromString(context: SuperElement, content: string | String) {
  context.root.innerHTML = content.toString()
}
