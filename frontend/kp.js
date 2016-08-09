export let renderLayout = function(name, tpl){
  let la = document.createElement('div');
      la.id = "wrapperJS"
      la.className = "wrapper"
      la.innerHTML = tpl();
      document.body.className = `la-${name}`;
      document.body.appendChild(la);
};
