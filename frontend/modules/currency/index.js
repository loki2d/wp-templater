import './currency.css';
import template from './currency.jade';
import Module from '../module.js';

export default class Currency extends Module{
  constructor(options) {
    super();
    this.elem = document.createElement('div');
    this.elem.className = 'currency';
    this.elem.innerHTML = template(options);
    this.name = 'currency';
  }
}
