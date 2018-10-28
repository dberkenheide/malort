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

/**
* @polymer
* @extends HTMLElement
*/
class CollapsibleArticle extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
            }
        </style>

        <p>Ut laboreds minimum atomorum pro. Laudem tibique ut has.</p>

        <p>Lorem ipsum dolor sit amet, psers in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
        
        <div><span>{{article.text}}</span></div>
    `;
  }

  static get properties () {
    return {
      article: {
        type: Object,
        value: function(){
          return {title: "Testtitel", text: "Testtext"};
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

window.customElements.define('collapsible-article', CollapsibleArticle);
