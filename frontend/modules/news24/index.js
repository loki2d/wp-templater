//Модуль комментариев
  let commentsend = require('../commentsend/');
  import '../commentsend/commentsend.css';
  import commentsendTemp from '../commentsend/commentsend.jade';
//

import './news24.css';
import Module from '../module.js';

import template from './news24.jade';

export default class News24 extends Module{

  constructor(options){
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'news24';
    this.elem.innerHTML = template(options);
    this.bindClose();
    this.bindOpen();
    this.addCommentsButton();
    this.name = "news24"
  }

  //добавление кнопок комметариев к постам

  addCommentsButton(){
    let articles = this.elem.querySelectorAll('.news24-detaillist-item');
    articles.forEach(function(item) {
      item.innerHTML+= commentsendTemp();
    });
  }

  // Открываем список детальных текстов нововстей
  openDetail(){
      console.log(this.elem.querySelector('.news24-detail'));
      this.elem.querySelector('.news24-detail').className = "news24-detail active";
  }

  //биндинги
  bindClose(){
    this.elem.querySelector('.news24-detaillist_close-btn').onclick = function(){
      this.elem.querySelector('.news24-detail.active').className = "news24-detail";
    }.bind(this);
  }

  bindOpen(){
    let news24Items = this.elem.querySelectorAll('.news24-prewivelist-item_title');
    news24Items.forEach(function(item) {
      item.onclick = function(){
        this.openDetail();
      }.bind(this);
    }.bind(this))

  }



}
