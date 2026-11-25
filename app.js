'use strict';
const inbox = document.getElementById('inbox');
for (const email of EMAILS) {
  const item = document.createElement('article');
  for (const [tag, value, className] of [['p',email.sender,'sender'],['h3',email.subject,''],['p',email.body || '(Body unavailable)','']]) {
    const node = document.createElement(tag);
    node.textContent = value;
    node.className = className;
    item.append(node);
  }
  inbox.append(item);
}
document.getElementById('status').textContent = `${EMAILS.length} sample emails loaded. Classification not yet implemented.`;
