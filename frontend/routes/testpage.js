'use strict';

import "../styles/desktop.css";
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

module.exports = function() {
  renderLayout('dafault', mainleyout);

  let menuData = require("../modules/menu/data.json");
  new Menu(menuData).render();
  new Logo({
    tag: "div",
    className: "logo-container",
    name: "logo"
  }).render();
  new Currency().render();
  new Regionframe().render();
  new Radioframe().render();
  new Search().render();
  new Menubutton().render();
  let news24Data = require("../modules/news24/data.json");
  new News24List(news24Data).render();
};
