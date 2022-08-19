export interface SuperElementBuildProps {
  /**
   * The mode of the shadowRoot.
   * Only apply if shadowRoot option is true.
   * 
   * @defaultValue `'open'`
   */
  mode?: 'open' | 'closed'

  /**
   * If you want or not to use shadowDOM.
   * 
   * @defaultValue `true`
   */
  shadowRoot?: boolean

  /**
   * if you do not want the `applyRender` to be
   * called on SuperElement instantiation. Use this
   * to control rendering manually.
   * 
   * @defaultValue `false`
   */
  preventRender?: boolean
}
