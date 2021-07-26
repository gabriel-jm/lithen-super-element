import { SuperElement } from '../super-element/super-element'

export function renderFromString(context: SuperElement, content: string) {
  context.root.innerHTML = content
}
