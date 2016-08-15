'use strict';

import "../styles/mobile.css";
import {renderLayout} from '../kp';

import Menubutton from '../modules/menubutton/mobile.js';
import Logo from '../modules/logo/mobile.js';
import News24button from '../modules/btn_news24/';
import Articlelist from '../modules/articlelist/';

import mainleyout from '../layouts/mobile.jade';


module.exports = function(){

renderLayout('dafault', mainleyout);

  let menubutton = new Menubutton({
    tag : "div",
    className : "menubutton",
    name : "menubutton",
    place : ".m_menu-btn"
  }).render();

  let logo = new Logo({
    tag : "div",
    className : "logo-container",
    name : "logo",
    place : ".m_logo"
  }).render();

  let news24_btn = new News24button({
    tag : "a",
    class : "news24-btn",
    name : "btn_news24",
    place : ".m_news24-btn"

  }).render()

  let articleData = require('../modules/articlelist/data.json');
  let articlelist = new Articlelist({
    tag : "div",
    class : "articlelist",
    name : "articlelist",
    place : ".m_article-list",
    data : articleData
  }).render()


};
