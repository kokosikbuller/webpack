import User from './User';
import * as $ from 'jquery';
import './scss/index.scss';

const h = $('h1');
console.log(h);

const user = new User('Kostya');
user.fullName;
user.getUser();

console.log('Work');
