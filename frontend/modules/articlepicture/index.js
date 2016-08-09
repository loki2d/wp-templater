import './articlepicture.css';
import template from './articlepicture.jade';
import Module from '../module.js';

export default class ArticlePicture extends Module{

  constructor(options){
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'articlepicture-container';
    this.elem.innerHTML = template(options);
    this.name = 'articlepicture';
  }
}
