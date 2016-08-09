import './regionframe.css';
import template from './regionframe.jade';
import Module from '../module.js';

export default class RegionFrame extends Module{
  constructor(options) {
    super(options)
    this.elem = document.createElement('div');
    this.elem.className = 'regionframe';
    this.elem.innerHTML = template(options);
    this.name = "regionframe"
  }
}
