'use strict';
const inbox = document.getElementById('inbox');
const version = document.getElementById('version');
function add(parent,tag,value,cls=''){const node=document.createElement(tag);node.className=cls;node.textContent=value;parent.append(node);return node;}
function highlighted(parent,tag,value,signals){const node=add(parent,tag,'');let cursor=0;const ranges=signals.map(s=>({start:value.indexOf(s),length:s.length})).filter(r=>r.start>=0).sort((a,b)=>a.start-b.start);for(const r of ranges){if(r.start<cursor)continue;node.append(document.createTextNode(value.slice(cursor,r.start)));add(node,'mark',value.slice(r.start,r.start+r.length));cursor=r.start+r.length;}node.append(document.createTextNode(value.slice(cursor)));}
const storageKey='email-priority-review-v1';
let events=[]; let storageOK=true;
try { events=JSON.parse(localStorage.getItem(storageKey)||'[]'); if(!Array.isArray(events)) events=[]; } catch {storageOK=false;}
const feedback=document.getElementById('feedback');
function save(message){try{localStorage.setItem(storageKey,JSON.stringify(events));storageOK=true;}catch{storageOK=false;} feedback.textContent=message+(storageOK?'':' — storage unavailable; changes are session-only.');render();}
function decision(id){return events.filter(e=>e.version===version.value&&e.id===id).at(-1);}
function button(parent,label,fn){const b=add(parent,'button',label);b.type='button';b.addEventListener('click',fn);return b;}
function render(){const rows=EMAILS.map(email=>{const result=classify(email,version.value);const d=decision(email.id);return {email,...result,effective:d?.to||result.priority,d};}).sort((a,b)=>Number(b.effective==='High')-Number(a.effective==='High'));
inbox.replaceChildren();document.getElementById('status').textContent=`${rows.length} emails · ${rows.filter(r=>r.effective==='High').length} High · ${rows.filter(r=>r.review&&!r.d).length} flagged and unreviewed`;
for(const r of rows){const item=add(inbox,'article','');add(item,'p',r.email.sender,'sender');add(item,'span',r.effective+(r.d?' — user confirmed':' — suggested'),r.effective==='High'?'high':'normal');highlighted(item,'h3',r.email.subject,r.evidence.filter(e=>e.field==='subject').map(e=>e.text));highlighted(item,'p',r.email.body||'(Body unavailable)',r.evidence.filter(e=>e.field==='body').map(e=>e.text));add(item,'p','System suggestion: '+r.priority);add(item,'p','Why: '+r.reason,'reason');if(r.review)add(item,'p','Review needed — check the available original message.','review');
const controls=add(item,'div','','controls');const select=document.createElement('select');select.setAttribute('aria-label','New priority for '+r.email.subject);for(const value of ['High','Normal']){const o=add(select,'option',value);o.value=value;}select.value=r.effective;
function record(to,type){events.push({id:r.email.id,version:version.value,from:r.effective,to,type,at:new Date().toISOString()});save(r.email.subject+': '+(type==='keep'?'priority retained':r.effective+' → '+to));}
button(controls,'Keep Priority',()=>record(r.effective,'keep'));controls.append(select);const change=button(controls,'Change Priority',()=>record(select.value,'change'));change.disabled=true;select.addEventListener('change',()=>change.disabled=select.value===r.effective);
}
const history=document.getElementById('history');history.replaceChildren();const active=events.filter(e=>e.version===version.value);if(!active.length)add(history,'p','No review decisions yet.');for(const e of [...active].reverse()){add(history,'p',EMAILS.find(x=>x.id===e.id)?.subject+' — '+e.type+': '+e.from+' → '+e.to);}
document.getElementById('undo').disabled=!active.length;
}
document.getElementById('undo').addEventListener('click',()=>{const i=events.findLastIndex(e=>e.version===version.value);if(i>=0){events.splice(i,1);save('Last review decision undone.');}});
version.addEventListener('change',()=>{feedback.textContent='Switched rules. Review decisions are stored separately for each version.';render();});render();if(!storageOK)feedback.textContent='Storage unavailable; changes are session-only.';
