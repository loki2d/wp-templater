'use strict';
import "./share.css";
import template from "./share.jade";
import Module from '../module.js';

export default class Share extends Module {
  constructor(options){
    super(options);
    this.elem = document.createElement(options.tag);
    this.elem.className = options.className;
    this.elem.innerHTML = template(options.data);
    this.name = options.name;
  }
}
