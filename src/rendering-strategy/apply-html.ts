import { SuperElement } from '../super-element/super-element.js'
import { renderFromString } from './render-from-string-strategy.js'
import { renderFromElement } from './render-from-element-strategy.js'

type ContentTypes = string | String | DocumentFragment | Element

export function applyHTML(context: SuperElement, content: ContentTypes) {   
  if(typeof content === 'string' || content instanceof String) {
    return renderFromString(context, content)
  }

  if(content instanceof Node) {
    return renderFromElement(context, content)
  }

  console.info('Received content:', content)
  throw new TypeError('Unexpected content type')
}
