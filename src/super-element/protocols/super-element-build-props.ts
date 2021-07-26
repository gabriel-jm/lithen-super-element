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
}
