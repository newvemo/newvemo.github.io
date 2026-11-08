(function(){
var P=location.pathname.split('/').pop()||'index.html',Y=new Date().getFullYear();
function a(h,t,x){var on=P==h||(h=='blogs.html'&&P=='blog-post.html');return '<a class="nl'+(on?' on':'')+'" href="'+h+'">'+t+'</a>'}
var logo='<a class="brand" href="index.html"><img src="assets/logo.png" alt="NewVemo Technology" height="48"></a>';
document.body.insertAdjacentHTML('afterbegin','<header class="nb" id="nb"><div class="ni">'+logo+'<nav class="nm">'+a('index.html','Home')+a('index.html#why','Our Services')+a('blogs.html','Blogs')+a('index.html#about','About Us')+'</nav><div class="na">'+a('contact.html','Contacts')+'<a class="btn bo" href="downloads.html"><i class="fa-solid fa-download"></i>Downloads</a><button class="hb" id="hb" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button></div></div></header><div class="dr" id="dr"><div class="dh">'+logo+'<button class="hb" id="hx" style="display:block" aria-label="Close"><i class="fa-solid fa-xmark"></i></button></div>'+a('index.html','Home')+a('index.html#why','Our Services')+a('blogs.html','Blogs')+a('index.html#about','About Us')+a('contact.html','Contacts')+a('downloads.html','Downloads')+'</div>');
var f=document.getElementById('ftr');
if(f)f.innerHTML='<div class="wrap"><div class="ft"><div><div class="lw">'+logo+'</div>'+'<p>NewVemo Technology designs and builds professional websites, web-based applications, desktop software and Android apps for businesses and institutions across Tanzania.</p><div class="so"><a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a><a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a><a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a><a href="#" aria-label="GitHub"><i class="fa-brands fa-github"></i></a></div></div>'+
'<div><h5>Company</h5><ul><li><a href="index.html">Home</a></li><li><a href="index.html#about">About Us</a></li><li><a href="index.html#why">Our Services</a></li><li><a href="blogs.html">Blogs</a></li><li><a href="downloads.html">Downloads</a></li><li><a href="contact.html">Contacts</a></li></ul></div>'+
'<div><h5>Our Services</h5><ul><li><a href="contact.html">Professional Websites</a></li><li><a href="contact.html">Web-based Applications</a></li><li><a href="contact.html">Desktop Applications</a></li><li><a href="contact.html">BRELA Registration</a></li><li><a href="https://shulebrain.com" target="_blank" rel="noopener">ShuleBrain DSK</a></li></ul></div>'+
'<div><h5>Get in touch</h5><ul><li><i class="fa-solid fa-location-dot"></i>Kilimanjaro, Tanzania</li><li><i class="fa-solid fa-phone"></i><a href="tel:+255656519591">+255 656 519 591</a></li><li><i class="fa-solid fa-envelope"></i><a href="mailto:newvemotechnology@gmail.com">newvemotechnology@gmail.com</a></li></ul></div></div>'+
'<div class="fb"><span>&copy; '+Y+' NewVemo Technology. All rights reserved.</span><span><a href="admin.html">Admin</a></span></div></div>';
var $=function(i){return document.getElementById(i)};
$('hb').onclick=function(){$('dr').classList.add('on')};$('hx').onclick=function(){$('dr').classList.remove('on')};document.querySelectorAll('#dr a.nl').forEach(function(l){l.addEventListener('click',function(){$('dr').classList.remove('on')})});
addEventListener('scroll',function(){$('nb').style.boxShadow=scrollY>8?'0 8px 24px -12px rgba(13,19,48,.2)':'none'},{passive:true});
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('in')})},{threshold:.1});
window.NVreveal=function(){document.querySelectorAll('.rv:not(.in)').forEach(function(e){io.observe(e)})};NVreveal();
document.querySelectorAll('[data-slider]').forEach(function(h){var s=h.querySelectorAll('.sl'),d=h.querySelector('.dots'),i=0,t;
s.forEach(function(_,k){var b=document.createElement('button');b.setAttribute('aria-label','Slide '+(k+1));b.onclick=function(){go(k)};d.appendChild(b)});
function go(n){i=(n+s.length)%s.length;s.forEach(function(x,k){x.classList.toggle('on',k==i)});d.querySelectorAll('button').forEach(function(x,k){x.classList.toggle('on',k==i)});clearInterval(t);t=setInterval(function(){go(i+1)},6000)}
h.querySelector('.al').onclick=function(){go(i-1)};h.querySelector('.arr').onclick=function(){go(i+1)};go(0)});
window.NV=window.NV||{};NV.esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
NV.client=function(){try{return supabase.createClient(NV.SUPABASE_URL,NV.SUPABASE_ANON_KEY)}catch(e){console.error(e);return null}};
NV.date=function(d){return d?new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}):''};
NV.CAT={shulebrain:['ShuleBrain','fa-graduation-cap'],desktop:['Desktop Software','fa-desktop'],android:['Android App','fa-brands fa-android'],web:['Web Application','fa-globe'],tools:['Tools & Utilities','fa-screwdriver-wrench'],other:['Other','fa-cube']};
NV.ICON={package:'fa-box',rocket:'fa-rocket',shield:'fa-shield-halved',code:'fa-code',globe:'fa-globe',mobile:'fa-mobile-screen',chart:'fa-chart-line',bulb:'fa-lightbulb',school:'fa-graduation-cap',news:'fa-newspaper'};
})();
