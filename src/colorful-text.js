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

class ColorfulHeader extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          background:url('/images/malortwall.png');
          background-repeat:repeat-x;
          background-position:0 0;
          color:transparent;
          -webkit-font-smoothing:antialiased;
          -webkit-background-clip:text;
          -moz-background-clip:text;
          background-clip:text;
          -webkit-text-fill-color:transparent;
          margin:0;
        }
      </style>

      [[text]]
    `;
  }

  static get properties () {
    return {
      text: {
        type: String
      },
    };
  }

}

window.customElements.define('colorful-text', ColorfulHeader);
