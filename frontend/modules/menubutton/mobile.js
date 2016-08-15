import './m_menubutton.css';
import template from './m_menubutton.jade';
import Module from '../module.js';

export default class MenuButton extends Module{
  constructor(options) {
    super(options);
    this.elem = document.createElement('menubutton');
    this.elem.className = 'menubutton';
    this.elem.innerHTML = template(options);
    this.name = "menubutton";
  }
}
