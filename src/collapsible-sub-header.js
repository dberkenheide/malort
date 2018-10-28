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
import '@polymer/iron-collapse/iron-collapse.js';
import './collapsible-article.js'

/**
* @polymer
* @extends HTMLElement
*/
class CollapsibleSubHeader extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
            }
        </style>
        <h2>
            [[subHeaderText]]
        </h2>
        <iron-collapse id="collapse">
          <div><collapsible-article></collapsible-article></div>
        </iron-collapse>
    `;
  }

  static get properties () {
    return {
      subHeaderText: {
        type: String
      },
      subTitles: {
        type: Object,
        value: function(){
          return [
            {title: "Testsubtitle1", text: "TestText1"},
            {title: "Testsubtitle2", text: "TestText2"},
            {title: "Testsubtitle3", text: "TestText3"},
            {title: "Testsubtitle4", text: "TestText4"}
          ];
        }
      },
      opened: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  constructor() {
    super();
    this.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.$.collapse.toggle();
  }

}

window.customElements.define('collapsible-sub-header', CollapsibleSubHeader);
