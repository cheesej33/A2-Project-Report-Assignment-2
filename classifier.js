'use strict';
function classify(email, version = 'v2') {
  const body = email.body || '';
  const urgent = email.subject.match(/\burgent\b/i);
  const action = body.match(/\b(confirm|complete)\b/i);
  const deadline = body.match(/\bby\s+[^.!?\n]*?\b(?:today|Friday)\b|\bdeadline\b/i);
  const noAction = body.match(/\bno action is required\b|\bfor your information only\b/i);
  const evidence = (...pairs) => pairs.filter(p=>p[1]).map(([field,match])=>({field,text:match[0]}));
  const result = (priority, reason, signals=[], review=false)=>({priority,reason,evidence:signals,review});
  if(version==='v2' && !body.trim()) return result('Normal','Body unavailable. Normal is a provisional label, not a finding of low urgency.',[],true);
  if(version==='v2' && noAction) return result('Normal',urgent?'Subject suggests urgency, but the body explicitly indicates no action is needed.':'Body indicates no action is needed.',evidence(['subject',urgent],['body',noAction]),!!urgent);
  if(urgent || action || deadline) return result('High','Detected '+[urgent&&'an urgency keyword',action&&'an action request',deadline&&'a deadline'].filter(Boolean).join(', ')+'.',evidence(['subject',urgent],['body',action],['body',deadline]),version==='v2' && !(action&&deadline));
  return result('Normal','No matching urgency, action or deadline signal was found.',[],!body.trim());
}
if(typeof module!=='undefined') module.exports={classify};
