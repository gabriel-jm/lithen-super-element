import { SelectedElement, SuperElementBuildProps } from './protocols/index.js'
import { addStyleSheet } from '../css-strategy/index.js'
import { applyHTML, getRenderRoot } from '../rendering-strategy/index.js'

type ElementRootReference = HTMLElement | (
  ShadowRoot & { adoptedStyleSheets: CSSStyleSheet[] }
)

export type SuperElementStylingValues = string | String

export type SuperElementRenderValues = (
  string | String | Node | NodeList
)

function scheduleRenderNotAppliedWarn(element: SuperElement) {
  queueMicrotask(() => {
    if (element.renderApplied) return

    console.warn(
      `[${element.constructor.name}]`,
      'Auto render not applied, this can be happening because of the usage',
      'of private fields or methods inside the render or styling'
    )
  })
}

export class SuperElement extends HTMLElement {

  /**
   * The mode of the attached shadow. It is set as
   * 'none' if no shadow is attached.
   */
  mode: 'open' | 'closed' | 'none' = 'none'

  /**
   * A boolean that indicates if the element as or
   * not a shadow root attached to it.
   */
  hasShadowRoot: boolean

  /**
   * A boolean that indicates if the element as already
   * apply html and css to its content, it is used to not
   * apply the same content twice.
   * 
   * Intial value is `false`.
   */
  renderApplied = false

  /**
   * The root of the element depends if its has or
   * not a shadowDOM. If has, it returns the shadowRoot
   * when not it returns the element itself.
   * 
   * @returns reference to the current root of the element.
   */
  get root(): ElementRootReference {
    return getRenderRoot(this) as ElementRootReference
  }
  
  /**
   * Options to configure the element building. (Optional)
   */
  constructor({
    mode = 'open',
    shadowRoot = false,
    preventRender = false
  }: SuperElementBuildProps = {}) {
    super()

    this.hasShadowRoot = shadowRoot
    
    if (shadowRoot) {
      this.mode = mode
      this.attachShadow({ mode })
    }

    if (!preventRender) {
      try {
        this.applyRender()
      } catch {
        scheduleRenderNotAppliedWarn(this)
      }
    }
  }

  /**
   * Method used to apply the returned values of render
   * and styling methods. This method is necessary because
   * of the error when using private fields on subclasses
   */
  applyRender() {
    if (!this.renderApplied) {
      applyHTML(this, this.render())
      this.hasShadowRoot && addStyleSheet(this, this.styling())
      this.renderApplied = true
    }
  }

  /**
   * Default lifecycle method of Web Components.
   * It runs when the element enters in the DOM.
   */
  connectedCallback() {}

  /**
   * Default lifecycle method of Web Components.
   * It runs when the element is removed from DOM.
   */
  disconnectedCallback() {}

  /**
   * Default lifecycle method of Web Components.
   * It runs when some observed attributes of the
   * element changes (add, change, delete).
   * 
   * @param name Attribute name.
   * @param oldValue The old value of the attribute.
   * @param newValue The new value its receiving.
   * 
   * This method requires that you define which are
   * the observed attributes. To define it, register
   * a static get method called observedAttributes
   * that returns the attributes names in an array.
   * ```ts
   * static get observedAttributes() {
   *   return ['attr']
   * }
   * ```
   */
  attributeChangedCallback(
    _name: string,
    _oldValue: unknown,
    _newValue: unknown
  ) {}

  /**
   * Default lifecycle method of Web Components.
   * It runs when the element is moved to another
   * document. Using `document.adoptNode` for example.
   */
  adoptedCallback() {}

  /**
   * Equavalent to addEventListener method.
   * 
   * @param type Event type name. Like 'click', 'change', 'mouseover', etc...
   * @param listener A listener for the event.
   *  It can be a `EventListener` or an `EventListenerObject`.
   * @param options A list of configurations for the event listener.
   */
  on(
    type: keyof HTMLElementEventMap | string,
    listener: Function,
    options?: AddEventListenerOptions
  ) {
    this.addEventListener(
      type,
      listener as EventListener,
      options
    )

    return this
  }

  /**
   * Equavalent to addEventListener method,
   * but runs only once.
   * 
   * This method always has
   * the `once` option of AddEventListenerOptions as `true`.
   *
   * @param type Event type name. Like 'click', 'change', 'mouseover', etc...
   * @param listener A listener for the event.
   *  It can be a `EventListener` or an `EventListenerObject`.
   * @param options A list of configurations for the event listener.
   */
  once(
    type: keyof HTMLElementEventMap | string,
    listener: Function,
    options?: AddEventListenerOptions
  ) {
    this.addEventListener(
      type,
      listener as EventListener,
      { ...options, once: true }
    )

    return this
  }

  /**
   * Selects an element by its query.
   * 
   * Works using `element.root.querySelector` function and
   * aditionally add the `on`, `once`, `select` and `selectAll`
   * functions to the result element.
   * 
   * @param query An element search query, like CSS selection queries.
   */
  select<T extends HTMLElement>(query: string) {
    const element = this.root.querySelector(query) as SelectedElement<T>

    if (element) {
      element.on = this.on.bind(element)
      element.once = this.once.bind(element)
      element.select = this.select.bind(element)
      element.selectAll = this.selectAll.bind(element)
    }

    return element
  }

  /**
   * Selects all elements that matches a query.
   * 
   * Works using `element.root.querySelectorAll` function and
   * aditionally add the `on`, `once`, `select` and `selectAll`
   * functions to the result elements.
   * 
   * @param query An element search query, like CSS selection queries.
   */
  selectAll<T extends HTMLElement>(query: string) {
    const elements = [...this.root.querySelectorAll(query)] as SelectedElement<T>[]

    for (const element of elements) {
      element.on = this.on.bind(element)
      element.once = this.once.bind(element)
      element.select = this.select.bind(element)
      element.selectAll = this.selectAll.bind(element)
    }

    return elements
  }

  /**
   * This method defines the initial CSS of the
   * element, it runs on elements instatiation.
   * 
   * @example
   * ```ts
   * styling() {
   *   return `
   *     div { ... }
   *   `
   * }
   * ```
   */
  styling(): SuperElementStylingValues {
    return ''
  }

  /**
   * This method defines the initial HTML of the
   * element, it runs on elements instantiation.
   * 
   * @example
   * ```ts
   *  render() {
   *    return `
   *      <div>...</div>
   *    `
   *  }
   * ```
   */
  render(): SuperElementRenderValues {
    return ''
  }
}
