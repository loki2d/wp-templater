import './menu.css';
import template from './menu.jade';
import Module from '../module.js';

export default class Menu extends Module{
  constructor(options) {
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'menu';
    this.elem.innerHTML = template(options);
    this.name = "main-menu";
    this.header = true;
  }
}
