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

class ToggleMenuItem extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
            }
        </style>

        <h1 id="header" on-click="toggle">
            <colorful-text text="[[headerText]]"></colorful-text>
        </h1>
        <iron-collapse id="collapse">
          <dom-repeat items="{{subTitles}}">
            <template>
              <collapsible-sub-header sub-header-text="{{item.title}}"></collapsible-sub-header>
            </template>
          </dom-repeat>
        </iron-collapse>
    `;
  }

  static get properties () {
    return {
      headerText: {
        type: String
      },
      subTitles: {
        type: Object,
        value: function(){
          return [
            {title: "Testtitle1", text: "TestText1"},
            {title: "Testtitle2", text: "TestText2"},
            {title: "Testtitle3", text: "TestText3"},
            {title: "Testtitle4", text: "TestText4"}
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
  }

  toggle() {
    this.$.collapse.toggle();
  }

}

window.customElements.define('toggle-menu-item', ToggleMenuItem);
