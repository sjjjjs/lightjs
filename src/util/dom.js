
export function before(el, node) {
    el.parentNode.insertBefore(node, el);
}
export function after(el, node) {
    el.parentNode.insertBefore(node, el.nextSibling);
}
export function append(el, node) {
    el.appendChild(node);
}
export function prepend(el, node) {
    el.insertBefore(node, el.firstChild);
}
export function remove(node) {
    node.parent.removeChild(node);
}

export function textNode(string = '') {
    return window.document.createTextNode(string);
}
export function element(name, attrs = {}) {
    const el = window.document.createElement(name);
    for(let key in attrs) {
        el.setAttribue(key, attrs[key]);
    }
    return el;
}