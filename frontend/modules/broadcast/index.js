import "./broadcast.css";
import template from "./broadcast.jade";
import itemTpl from "./broadcast-item.jade";
import Module from '../module.js';

export default class Broadcast extends Module{
  constructor(options){
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'broadcast';
    this.elem.innerHTML = template(options);
    this.name = 'broadcast';
    this.list = this.elem.querySelector(".broadcast-posts");
    this.post;
  }

  addItem(data){
    let post = document.createElement("div");
    post.className = "broadcast-post broadcast-post-hidden";
    post.innerHTML = itemTpl(data);
    this.renderPost(post);
  }

  renderPost(post){
    let list = this.elem.querySelectorAll('.broadcast-post');
    this.list.insertBefore(post, list[0]);
    this.goToHead(post)
    return false;
  }

  renderPostShow(post){
    post.className = "broadcast-post"
  }

  goToHead(post){
      let V = 0.2;  // скорость, может иметь дробное значение через точку
      let w = window.pageYOffset,  // прокрутка
          t = document.querySelector(".broadcast__head").getBoundingClientRect().top,  // отступ от окна браузера до элемента
          start = null;
      let self = this
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
        window.scrollTo(0,r);
        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          self.renderPostShow(post)
        }
      }
  }
}
