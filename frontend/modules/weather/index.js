import './weather.css';
import template from './weather.jade';
import Module from '../module.js';

export default class Weather extends Module{
  constructor(options) {
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'weather';
    this.elem.innerHTML = template(options);
    this.name = "weather";
  }
}
