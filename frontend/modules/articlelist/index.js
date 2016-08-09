import "./articlelist.css";
import "../articlepreview/articlepreview.css";
import Module from '../module.js';

import template from "./articlelist.jade";

export default class ArticleList extends Module{

  constructor(options){
    super();
    this.elem = document.createElement('section');
    this.elem.className = 'articlelist-container';
    options.sections.forEach((list)=> this.elem.innerHTML += template(list));
    this.name = 'articlelist';
  }
}
