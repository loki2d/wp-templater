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
import Notification from '../modules/notification';

import ArticlePicture from '../modules/articlepicture';
import Article from '../modules/article';

import Broadcast from '../modules/broadcast';
import mainleyout from '../layouts/article.jade';



module.exports = function(){

  renderLayout('article', mainleyout);

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

  let articleData = require('../modules/article/data.json');
  let articlePicture = new ArticlePicture(articleData.article.picture).render();
  let article = new Article(articleData).render();


  let notificationData = require('../modules/notification/data.json');
  let notification = new Notification(notificationData).render();

  let broadcastData = require('../modules/broadcast/data.json');
  let broadcast = new Broadcast(broadcastData).render();

  setTimeout(function(){
    notification.showNote()
  }, 3000);


  let d = {
    "author": {
      "avatar" : "http://www.kp.ru/share/i/3/2744636/",
      "url" : "",
      "name" : "Дарья ИВАШКИНА",
      "position" : "Слежу за ситуацией"
    },
    "date" : {
      "time" : "16:01",
      "dey" : "21 Июль"
    },
    "text" : "Новое сообщение!!"
  };
  notification.bindClick(broadcast, d);

}
