import "./broadcast.css";
import template from "./broadcast.jade";
import Module from '../module.js';

export default class Article extends Module{
  constructor(options){
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'broadcast';
    this.elem.innerHTML = template(options);
    this.name = 'broadcast';
  }

}
