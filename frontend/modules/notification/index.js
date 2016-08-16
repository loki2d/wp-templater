import './notification.css';
import template from './notification.jade';
import Module from '../module.js';

export default class Notification extends Module{
  constructor(options) {
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'b_notification';
    this.elem.innerHTML = template(options);
    this.name = "notification";
    this.place = "body";
    this.link = options.link;
    this.hash = options.hash || "";

    this.init();
  }

  init(){
    this.pageStatus = this.checkLocation();
    this.closeBtn = this.elem.querySelector('.notification__close');
    this.popupLink = this.elem.querySelector('.notification__body');
    this.notification = this.elem.querySelector('.notification');

    this.closeBtn.onclick = this.onClickClose.bind(this);
    this.popupLink.onclick = this.bindClick.bind(this);
    // this.popupLink.onclick = this.hiddeElement.bind(this);
  }

  onClickClose(){
    this.hiddeElement();
  }

  // onClickPopup(e){
  //   e.preventDefault();
  //   return false;
  // }

  bindClick(fn, data){
    if (this.pageStatus && fn){
      this.popupLink.onclick = function(e){
        e.preventDefault();
        fn.addItem(data);
        this.hiddeElement();
      }.bind(this);
    }else{
      // window.location.href = this.link + "#" + this.hash;
      console.log("надо скролл перерисовать");
      return false;
    }
  }

  hiddeElement(){
    this.notification.className = 'notification' ;
    return true;
  }

  showElement(){
    this.notification.className = 'notification active';
  }

  showNote(){
    this.showElement()
  }

  setData(data){
    this.elem.querySelector('.notification__body').href= data.hash;
    this.elem.querySelector('.notification__title').innerHTML = JSON.stringify(title);
  }

  checkLocation(){
    return  window.location.href.search(this.link)  === -1 ? 0 : 1;
  }

}
