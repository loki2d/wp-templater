export default class Module{

  constructor(options){
    if(options){
      this.elem = document.createElement(options.tag);
      this.elem.className = options.className;
      this.name =  options.name;
    }
  }

  render(selector = false){
    if (selector){
      document.querySelector(selector).appendChild(this.elem);
    }else{
      document.getElementById(`wpm-${this.name}`).appendChild(this.elem);
    }

    if (this.insideModules){
      this.renderInsideModules();
    }

  };

  renderInsideModules(){
    this.insideModules.forEach(function(el) {
        el.module.render(el.selector);
    })
  }
}
