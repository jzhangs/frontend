function updateChildren(vnode, newVnode) {
  var children = vnode.children || [];
  var newChildren = newVnode.children || [];

  children.forEach(function(childVnode, index) {
    var newChildVnode = newChildren[index];
    if (childVnode.tag === newChildVnode.tag) {
      // recursion
      updateChildren(childVnode, newChildVnode);
    } else {
      replaceNode(childVnode, newChildVnode);
    }
  });
}

function replaceNode(vnode, newVnode) {
  var elem = vnode.elem; // real dom node
  var newElem = createElement(newVnode);

  // replace
}
