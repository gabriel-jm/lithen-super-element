import { SuperElement } from '../super-element/super-element'
import { renderFromString } from './render-from-string-strategy'
import { renderFromElement } from './render-from-element-strategy'

export function applyHTML(context: SuperElement, content: string | HTMLElement) {  
  if(typeof content === 'string') {
    renderFromString(context, content)
  }

  if(typeof content === 'object') {
    renderFromElement(context, content)
  }

  throw new TypeError('Unexpected content type')
}
