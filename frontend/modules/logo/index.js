import './logo.css';
import template from './logo.jade';
import Module from '../module.js';

export default class Logo extends Module {
  constructor(options = {  /// дефолтные опции
    tag: "div",
    className : 'logo-container',
    name : "logo"
  }){
    super(options);
    this.elem.innerHTML = template();
  }
}
