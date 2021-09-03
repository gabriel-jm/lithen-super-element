import { SuperElement } from '../super-element/super-element'
import { renderFromString } from './render-from-string-strategy'
import { renderFromElement } from './render-from-element-strategy'

export function applyHTML(context: SuperElement, content: string | HTMLElement) {  
  if(typeof content === 'string' || content instanceof String) {
    renderFromString(context, content)
  }

  if(content instanceof Node) {
    renderFromElement(context, content)
  }

  console.info('Received content:', content)
  throw new TypeError('Unexpected content type')
}
