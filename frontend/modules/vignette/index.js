/* global document*/
/* eslint no-undef: "error" */

import "./vignette.css";
import template from "./vignette.jade";
import Module from '../module.js';

export default class Vignette extends Module {

  constructor(options) {
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'vignette';
    this.elem.innerHTML = template(options);
    this.name = 'vignette';
    this.place = '.home-pagebloks';
    this.action = "http://kp.ru/catcher/api/1/files/upload";
    this.userPic = "";
    this.userPicMouseIsDown = false;
    this.catcherObj = {};
    this.templateMouseIsDown = false;
    this.template = "";
    this.templateCoordinates = {};
    this.templateUnit = "";
  }
}
