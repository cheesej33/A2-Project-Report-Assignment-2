const assert=require('node:assert/strict');const {classify}=require('../classifier');
const fs=require('node:fs');const vm=require('node:vm');const emails=vm.runInNewContext(fs.readFileSync(require('node:path').join(__dirname,'../emails.js'),'utf8')+'\nEMAILS');
for(const [i,p] of ['High','High','High','Normal','Normal'].entries())assert.equal(classify(emails[i],'v1').priority,p);
for(const [i,p] of ['High','Normal','High','Normal','Normal'].entries())assert.equal(classify(emails[i],'v2').priority,p);
assert.equal(classify(emails[1]).review,true);assert.equal(classify(emails[4]).review,true);assert.equal(classify(emails[1]).evidence.length,2);
for(const e of emails)for(const v of ['v1','v2'])for(const s of classify(e,v).evidence)assert.ok(e[s.field].includes(s.text));console.log('All classifier assertions passed (5 emails, both versions, review flags and evidence).');
