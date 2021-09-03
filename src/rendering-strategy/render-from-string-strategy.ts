import { SuperElement } from '../super-element/super-element'

export function renderFromString(context: SuperElement, content: string | String) {
  context.root.innerHTML = content.toString()
}
