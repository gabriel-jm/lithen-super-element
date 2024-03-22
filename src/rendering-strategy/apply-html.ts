import { SuperElement } from '../super-element/super-element.js'
import { renderFromString } from './render-from-string-strategy.js'
import { renderFromElement } from './render-from-element-strategy.js'

type ContentTypes = string | String | Node | NodeList

export function applyHTML(context: SuperElement, content: ContentTypes) {   
  if(typeof content === 'string' || content instanceof String) {
    return renderFromString(context, content)
  }

  try {
    return renderFromElement(context, content)
  } catch {
    console.info('Received content:', content)
    throw new TypeError('Unexpected content type')
  }
}
