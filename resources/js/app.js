
require('./bootstrap');

//Promise polyfill
var Promise = require('es6-promise').Promise;

//Router - move this to separate file
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.mixin({
    data() {
        return {
            get appName() {
                return "D2SkillCalc";
            }
        }
    },
    methods: {
        lowerFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        capFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toKebabCase(string) {
            return string.replace(/\s+/g, '-').toLowerCase();
        }
    }
});

import App from './views/App';
import Home from './views/Home';
import Build from './views/Build';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/amazon',
            name: 'Amazon',
            component: Build
        },
        {
            path: '/assassin',
            name: 'Assassin',
            component: Build
        },
        {
            path: '/barbarian',
            name: 'Barbarian',
            component: Build
        },
        {
            path: '/druid',
            name: 'Druid',
            component: Build
        },
        {
            path: '/paladin',
            name: 'Paladin',
            component: Build
        },
        {
            path: '/necromancer',
            name: 'Necromancer',
            component: Build
        }, {
            path: '/sorceress',
            name: 'Sorceress',
            component: Build
        },
    ],
});


//Vuex store
import { store } from './store/store'

const app = new Vue({
    el: '#app',
    data: {
        
    },
    components: { App },
    store,
    router,
});

// Bulma NavBar Burger Script
document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                let target = $el.dataset.target;
                let $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});