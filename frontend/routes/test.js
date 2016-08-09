'use strict';

import "../main.css";
import {renderLayout} from '../kp';

import Menu from '../modules/menu';
import Logo from '../modules/logo';
import Currency from '../modules/currency';
import Regionframe from '../modules/regionframe';
import Radioframe from '../modules/radioframe';
import Search from '../modules/search';
import Menubutton from '../modules/menubutton';
import News24List from '../modules/news24';

import mainleyout from '../layouts/default.jade';


module.exports = function(){

renderLayout('dafault', mainleyout);

  let menuData = require("../modules/menu/data.json");
  let menu = new Menu(menuData).render();
  let logo = new Logo({
    tag : "div",
    className : "logo-container",
    name : "logo",
  }).render();
  let currency = new Currency().render();
  let regionframe = new Regionframe().render();
  let radioframe = new Radioframe().render();
  let search = new Search().render();
  let menubutton = new Menubutton().render();
  let news24Data = require("../modules/news24/data.json");
  let news24 = new News24List(news24Data).render();

};