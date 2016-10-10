'use strict';
import "../main.css";

import {renderLayout} from '../kp';

import Menu from '../modules/menu';
import Logo from '../modules/logo';
import Currency from '../modules/currency';
import RegionFrame from '../modules/regionframe';
import RadioFrame from '../modules/radioframe';
import Search from '../modules/search';
import MenuButton from '../modules/menubutton';
import News24List from '../modules/news24';
import ArticleList from '../modules/articlelist';
import Notification from '../modules/notification';

import mainleyout from '../layouts/home.jade';

module.exports = function() {
  renderLayout('home', mainleyout);

  new Logo({
    tag: "div",
    className: 'logo-container',
    name: "logo"
  }).render();

  new Currency().render();
  new RegionFrame().render();
  new RadioFrame().render();
  new Search().render();
  new MenuButton().render();

  let menuData = require("../modules/menu/data.json");
  new Menu(menuData).render();

  let newsData = require('../modules/news24/data.json');
  new News24List(newsData).render();

  let articleData = require('../modules/articlelist/data.json');
  new ArticleList(articleData).render();

  let notification = new Notification().render();

  let noteData = require('../modules/notificationunit/data.json');
  let note = notification.addNewNotification(noteData);

  setTimeout(function() {
    notification.showNotification(note);
  }, 5000);
};
