/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './my-view404.js';
import './colorful-text.js';
import './toggle-menu-item.js';
import './collapsible-sub-header.js';

/**
* @polymer
* @extends HTMLElement
*/
class MainView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 0px;
        }
      </style>

      <div class="card">
        <toggle-menu-item header-text="Colorful Header"></toggle-menu-item>
      </div>
    `;
  }
}

window.customElements.define('main-view', MainView);
