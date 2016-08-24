import './notification.css';
import template from './notification.jade';
import Module from '../module.js';
import notificationUnit from './notificationUnit.js';

export default class Notification extends Module{
  constructor(options) {
    super(options);
    this.elem = document.createElement('div');
    this.elem.className = 'notification-box';
    this.name = "notification";
    this.place = "body";
    this.units = {};
  };

  addNewNotification(data){
    let obj = {
      parent : this,
      id : data.id,
      prop : data
    };

    this.units[data.id] = new notificationUnit(obj);
    return this.units[data.id];
  };

  showNotification(obj){
    obj.show();
  };

  showNote(){
    this.showElement();
  };
};
