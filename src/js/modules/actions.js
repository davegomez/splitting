export const animate = (node, className) =>
    node.className === className ?
        node.classList.remove(className) :
        node.classList.add(className);

export const paint = (node, color) =>
    node.style.backgroundColor = color;