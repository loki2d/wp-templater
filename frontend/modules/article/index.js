import "./article.css";

import template from "./article.jade";
import Share from "../share/index.js";
import Module from '../module.js';

export default class Article extends Module{

  constructor(options){
    super(options)
    this.elem = document.createElement('section');
    this.elem.className = 'articlelist-container';
    this.elem.innerHTML = template(options);
    this.name = 'article';
    this.floatTitle = false;

     window.onload = function() {
      this.init();
    }.bind(this);

    this.insideModules = [
      {
        module: new Share({
          tag:'div',
          className : 'share-container',
          name : 'share',

        }),
        selector : '[data-id = "wpm-share"]'
      }

    ]

  }


  init(){
    this.bindScroll();
  }

  bindScroll(){

    let scrolled;
    let title = document.querySelector('.article__title');
    window.onscroll = function(){

      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      let elemetRect =title.getBoundingClientRect();

      if(elemetRect.top < 0 && !this.floatTitle){
        this.hideHedaer();
        this.showFloatTitle();
        this.floatTitle = true;
      }else if(elemetRect.top > 0 && this.floatTitle){
        this.showHedaer();
        this.hideFloatTitle();
        this.floatTitle = false;
      }
    }.bind(this);
  }

  showFloatTitle(){
    let menu = document.querySelector('.menuHead').getBoundingClientRect()
    let floatTitleElem =  document.querySelector('.article-floatTitle');
    floatTitleElem.style= "transform: translateY("+menu.height+"px);"
  }

  hideFloatTitle(){
    let floatTitleElem =  document.querySelector('.article-floatTitle');
    floatTitleElem.style= "transform: translateY(0px);"
  }

  hideHedaer(){
    let header = document.querySelector('.header');
    let menuHead = document.querySelector('.menuHead');
    menuHead.style = "top: 0px";

    header.className += " active";
  };

  showHedaer(){
    let header = document.querySelector('.header');
    let menuHead = document.querySelector('.menuHead');
    menuHead.style = "top: 80px"
    header.className = "header";
  };
}
