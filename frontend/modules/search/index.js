import './search.css';
import template from './search.jade';
import Module from '../module.js';

export default class Search extends Module{
  constructor(options) {
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'formSearch';
    this.elem.id = 'search-inset0';
    this.elem.innerHTML = template(options);
    this.name = "search";
  }
}
