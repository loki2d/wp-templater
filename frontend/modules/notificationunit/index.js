import './notification.css';
import template from './notification.jade';

export default class NotificationUnit {
  constructor(data){
    this.id = data.id;
    this.parent = data.parent;
    this.prop = data.prop;
    this.template = template
    this.elementHTML = this.createHTML();
    this.init();
  }

  init(){
    this.locationStatus = this.checkLocation();
    this.closeBtn = this.elementHTML.querySelector('.notification__close');
    this.popupLink = this.elementHTML.querySelector('.notification__body');
    // this.notification = this.elem.querySelector('.notification');
    this.closeBtn.onclick = this.onClickClose.bind(this);
    this.popupLink.onclick = this.bindClick.bind(this);

    this.render();
  }

  render(){
    this.parent.elem.appendChild(this.elementHTML);
  }

  show(){
    this.elementHTML.className = "notification notification-active";
  }

  bindClick(fn, data){
    if (this.locationStatus != 0 && fn){
      this.popupLink.onclick = function(e){
        e.preventDefault();
        fn.addItem(data);
        this.hiddeElement();
      }.bind(this);
    }else{
      return true;
    }
    return false;
  }

  getId(){
    return this.id;
  }

  onClickClose(){
    this.hiddeElement();
  }

  hiddeElement(){
    this.elementHTML.className = 'notification' ;
    return true;
  }

  createHTML(){
    let html = this.template(this.prop);
    let item  = document.createElement('div');
        item.className= 'notification';
        item.innerHTML = html;
        item.style.backgroundImage = `url(${this.prop.img})`;
    return item;
  }

  checkLocation(){
    return  window.location.href.search(this.prop.url)  === -1 ? 0 : 1;
  }

}
