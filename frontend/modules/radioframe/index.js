import './radioframe.css';
import template from './radioframe.jade';
import Module from '../module.js';

export default class RadioFrame extends Module{
  constructor(options) {
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'radioframe';
    this.elem.innerHTML = template(options);
    this.name = "radioframe";
  }
}
