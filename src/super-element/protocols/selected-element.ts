export type onEventFunction = (
  /**
   * Event type name. Like 'click', 'change', 'mouseover', etc...
   */
  type: keyof HTMLElementEventMap | string,

  /**
   * A listener for the event.
   * It can be a `EventListener` or an `EventListenerObject`.
   */
  listener: Function,

  /**
   * A list of configurations for the event listener.
   */
  options?: AddEventListenerOptions
) => void

export type SelectedElement<T extends HTMLElement> = T & {
  /**
   * Equavalent to addEventListener method.
   * 
   * @returns void
   */
  on: onEventFunction

  /**
   * Equavalent to addEventListener method,
   * but runs only once.
   * 
   * This method always has
   * the `once` option of AddEventListenerOptions as `true`.
   * 
   * @returns void
   */
  once: onEventFunction

  /**
   * Selects an element by its query.
   * 
   * Works using `element.querySelector` function and
   * aditionally add the `on`, `once`, `select` and `selectAll`
   * functions to the result element.
   * 
   * @param query An element search query, like CSS selection queries.
   */
  select<T2 extends HTMLElement>(query: string): SelectedElement<T2> | undefined

  /**
   * Selects all elements that matches a query.
   * 
   * Works using `element.querySelectorAll` function and
   * aditionally add the `on`, `once`, `select` and `selectAll`
   * functions to the result elements.
   * 
   * @param query An element search query, like CSS selection queries.
   */
   selectAll<T2 extends HTMLElement>(query: string): SelectedElement<T2>[]
}
