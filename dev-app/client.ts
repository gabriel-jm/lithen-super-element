import { SuperElement } from './build'

class AppEl extends SuperElement {
  render() {
    return new Text("My text")
  }
}

customElements.define('app-el', AppEl)
