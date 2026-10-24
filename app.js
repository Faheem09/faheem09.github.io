'use strict';
document.documentElement.classList.add('js');
const tabs=[...document.querySelectorAll('[data-case]')];
function showCase(button){
  tabs.forEach(t=>{
    const selected=t===button;
    t.setAttribute('aria-selected',String(selected));
    t.tabIndex=selected?0:-1;
    document.getElementById(t.getAttribute('aria-controls')).hidden=!selected;
  });
}
tabs.forEach((button,i)=>{
  button.addEventListener('click',()=>showCase(button));
  button.addEventListener('keydown',e=>{
    let n=i;
    if(e.key==='ArrowRight'||e.key==='ArrowDown')n=(i+1)%tabs.length;
    else if(e.key==='ArrowLeft'||e.key==='ArrowUp')n=(i+tabs.length-1)%tabs.length;
    else if(e.key==='Home')n=0;
    else if(e.key==='End')n=tabs.length-1;
    else return;
    e.preventDefault();tabs[n].focus();showCase(tabs[n]);
  });
});
if(tabs.length)showCase(tabs[0]);
document.querySelectorAll('[data-offer]').forEach(a=>a.addEventListener('click',()=>{
  document.querySelector('#service').value=a.dataset.offer;
}));
document.querySelector('#intake').addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const company=String(data.get('company')).trim();
  const subject='GeminiWave project fit call'+(company?' — '+company:'');
  const body='Hello Faheem,\n\nI would like to request a 20-minute project fit call.\n\nName: '+data.get('name')+(company?'\nCompany: '+company:'')+'\nEmail: '+data.get('email')+'\nEngagement: '+data.get('service')+'\nTarget timing: '+data.get('timing')+'\n\nChallenge / milestone:\n'+data.get('challenge')+'\n\nPlease let me know a suitable time to talk.\n\nThank you,\n'+data.get('name');
  document.querySelector('#prepared-message').value=body;
  document.querySelector('#email-inquiry').href='mailto:ffaheem@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  document.querySelector('#inquiry-preview').hidden=false;
  document.querySelector('#inquiry-status').textContent='Ready for your review. Open your email app to send, or copy the message. No meeting has been booked yet.';
  document.querySelector('#prepared-message').focus();
});
document.querySelector('#copy-inquiry').addEventListener('click',async()=>{
  const area=document.querySelector('#prepared-message');
  try{
    await navigator.clipboard.writeText(area.value);
    document.querySelector('#inquiry-status').textContent='Message copied. Paste it into an email to ffaheem@gmail.com.';
  }catch{
    area.focus();area.select();
    document.querySelector('#inquiry-status').textContent='Select and copy the message above, then email ffaheem@gmail.com.';
  }
});
