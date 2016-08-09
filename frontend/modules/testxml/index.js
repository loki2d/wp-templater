import './testxml.css';
import template from './testxml.xsl';
import Module from '../module.js';

export default class Test extends Module {

  constructor(options) {
    super(options);
    this.elem = document.createElement("div");
    this.elem.className = "xml-test";
    this.name =  "xml";
    this.elem.innerHTML = template(options);
  }

}
