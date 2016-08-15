export default class Module{

  constructor(options){
    if(options){
      this.elem = document.createElement(options.tag);
      this.elem.className = options.className;
      this.name =  options.name;
      if (options.place){
        this.place = options.place;
      }
    }
  }

  render(place = false){
    if (place || this.place){
      document.querySelector(place || this.place).appendChild(this.elem);
    }else{
      document.getElementById(`wpm-${this.name}`).appendChild(this.elem);
    }

    if (this.insideModules){
      this.renderInsideModules();
    }
    return this;
  };

  renderInsideModules(){
    this.insideModules.forEach(function(el) {
        el.module.render(el.selector);
    })
  }
}
