import _ from 'lodash'
import './scss/styles.scss'
import "./font.js"


// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap'
import bootstrap from 'bootstrap'

document.querySelector('.thed').addEventListener('click',()=>{
    var btnSwitch = document.getElementById('btnSwitch');
    var body = document.querySelector('html');
    console.log('click');
    if (body.getAttribute('data-bs-theme')=='dark') {
        body.setAttribute('data-bs-theme', 'light');
        document.getElementById('btnSwitch').textContent="Switch to Dark Theme";

        
        
    }
    else {
        body.setAttribute('data-bs-theme', 'dark');
        document.getElementById('btnSwitch').textContent="Switch to Light Theme";

    }
});
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


