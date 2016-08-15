import template from "./btn_news24.jade";
import "./btn_news24.css";
import Module from "../module.js";

export default class Button_new24 extends Module{
  constructor(options = {
    name : "btn_news24",
    className : "btn-news24",
    tag : "a"
  }){
    super(options);
    this.elem.innerHTML = template();
  }
}
