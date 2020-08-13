
import * as domUtil from './util/dom';

class Button {
    constructor() {
        this._name = 'test button';
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        alert(this._name + ' is been clicked');
    }
    allocate(el) {
        this._btn = domUtil.element('button');
        this._btn.addEventListener('click', this.handleClick);
        this._btn.appendChild(domUtil.textNode('Ding'));
        domUtil.after(el, this._btn);
    }
    recycle() {
        this._btn.removeEventListener(this.handleClick);
        domUtil.remove(this._btn);
    }
}

var b = new Button();
b.allocate(document.body);