'use strict';
import "../main.css";

import {renderLayout} from '../kp';

import Menu from '../modules/menu';
import Logo from '../modules/logo';
import Currency from '../modules/currency';
import Weather from '../modules/weather';
import RegionFrame from '../modules/regionframe';
import RadioFrame from '../modules/radioframe';
import Search from '../modules/search';
import MenuButton from '../modules/menubutton';
import News24List from '../modules/news24';
import ArticleList from '../modules/articlelist';

import mainleyout from '../layouts/home.jade';

module.exports = function(){

  renderLayout('home', mainleyout);

  let logo = new Logo({
    tag: "div",
    className : 'logo-container',
    name : "logo"
  }).render();

  let currency = new Currency().render();
  let regionframe = new RegionFrame().render();
  let radioframe = new RadioFrame().render();
  let search = new Search().render();

  let menuButton = new MenuButton().render();
  let menuData = require("../modules/menu/data.json");
  let mainMenu = new Menu(menuData).render();

  let newsData = require('../modules/news24/data.json');
  let news24 = new News24List(newsData).render();

  let articleData = require('../modules/articlelist/data.json');
  let articleList = new ArticleList(articleData).render();
}
