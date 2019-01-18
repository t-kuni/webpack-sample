import _ from 'lodash';
import './style.css';
import Vue from 'vue';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    var myIcon = new Image();
    // myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

function vueRoot() {
    const vueRoot = document.createElement('div');
    vueRoot.id = 'vue-root';

    return vueRoot;
}

document.body.appendChild(component());
document.body.appendChild(vueRoot());

new Vue({
    el: '#vue-root',
    components: [],
    template: `<div><p>aaaaaaaaaaaあああああaa</p></div>`
});