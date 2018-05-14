
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
// load bootstrap packages
// require('jquery');
// require('bootstrap');
// require('bootstrap/dist/css/bootstrap.min.css');
require('flatpickr');
require('flatpickr/dist/flatpickr.min.css');
require('flatpickr/dist/themes/material_orange.css');
require('jquery-validation');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('test', require('./components/Test.vue'));

const app = new Vue({
    el: '#app'
});
