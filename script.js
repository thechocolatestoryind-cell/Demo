const IMG={
 "a_palace": "images/a_palace.jpg",
 "a_vap": "images/a_vap.jpg",
 "a_baby": "images/a_baby.jpg",
 "a_juco": "images/a_juco.jpg",
 "a_ts": "images/a_ts.jpg",
 "a_mp": "images/a_mp.jpg",
 "a_jra": "images/a_jra.jpg",
 "a_dolce": "images/a_dolce.jpg",
 "b_krishna": "images/b_krishna.jpg",
 "b_cotton": "images/b_cotton.jpg",
 "b_patola": "images/b_patola.jpg",
 "b_lotus": "images/b_lotus.jpg",
 "b_cp": "images/b_cp.jpg",
 "b_geshna": "images/b_geshna.jpg",
 "b_swing": "images/b_swing.jpg",
 "c_vihaan": "images/c_vihaan.jpg",
 "d_red": "images/d_red.jpg",
 "d_house": "images/d_house.jpg",
 "d_block": "images/d_block.jpg",
 "d_floral": "images/d_floral.jpg",
 "d_pvc": "images/d_pvc.jpg",
 "logo": "images/logo.jpg"
},$=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const P=[["a_vap","Temple and elephant monogram","wedding"],["a_mp","Pichwai arch monogram","wedding"],["a_jra","Peacock crest","wedding"],["a_ts","Peacock initials","wedding"],["a_palace","Palace garden","wedding"],["b_cp","Garden monogram","wedding"],["a_baby","Little lotus one","kids"],["b_geshna","Geshna Giggles paper bag","kids"],["c_vihaan","Race car birthday paper bag","kids"],["a_juco","Juco pastel patchwork","kids"],["a_dolce","La Dolce Vita","kids"],["b_krishna","Krishna and calf","devotional"],["b_swing","Krishna on a swing","devotional"],["d_house","Housewarming cow","home"],["b_lotus","Lotus pond","floral"],["d_floral","Lotus border","floral"],["d_block","Block-print flowers","pattern"],["b_patola","Patola elephant","pattern"],["d_red","Red patola","pattern"],["b_cotton","Cotton Seed Linen","corporate"],["d_pvc","Bag with PVC window","corporate"]];
const L={all:"All",wedding:"Weddings",kids:"Baby & kids",devotional:"Devotional",home:"Housewarming",floral:"Florals",pattern:"Patterns",corporate:"Corporate"};
const wa=t=>"https://wa.me/919771611778?text="+encodeURIComponent(t||"Hi Cloud9 Creatives, I’d like to order custom jute bags.");
$$("[data-wa]").forEach(a=>{a.href=wa();a.target="_blank";a.rel="noopener"});
$$("img[data-i]").forEach(i=>i.src=IMG[i.dataset.i]);
const tr=(id,a)=>{$(id).innerHTML=[...a,...a].map(k=>`<img src="${IMG[k]}" alt="" loading="lazy">`).join("")};
tr("#m1",P.slice(0,11).map(p=>p[0]));tr("#m2",P.slice(10).map(p=>p[0]));
/* occasions */
$("#occ").innerHTML=[["Weddings","a_vap","wedding"],["Baby & birthdays","a_baby","kids"],["Housewarming","d_house","home"],["Corporate gifts","b_cotton","corporate"],["Devotional","b_krishna","devotional"]].map(o=>`<a data-cat="${o[2]}" tabindex="0" role="link"><div class="im"><img src="${IMG[o[1]]}" alt=""></div><b>${o[0]}</b></a>`).join("");
$("#occ").onclick=e=>{const a=e.target.closest("[data-cat]");if(a){cur=a.dataset.cat;location.hash="shop";route()}};
/* customizer */
const D=["a_mp","b_lotus","a_jra","d_floral","b_krishna","a_baby","d_block","b_patola"],H=[["Jute","#C9A56B"],["White","#F6EFE0"],["Forest green","#1F4A42"],["Maroon","#6B1F2E"]];let sd=D[0],sh=H[0];
$("#th").innerHTML=D.map((d,i)=>`<button aria-label="Design ${i+1}" data-d="${d}" aria-pressed="${!i}"><img src="${IMG[d]}" alt=""></button>`).join("");
$("#sw").innerHTML=H.map((h,i)=>`<button aria-label="${h[0]} handles" data-h="${i}" style="background:${h[1]}" aria-pressed="${!i}"></button>`).join("");
function cz(){$("#bi").src=IMG[sd];$("#bag").style.setProperty("--h",sh[1]);$("#bt").textContent=$("#nm").value;
$("#cw").href=wa(`Hi Cloud9, I’d like a custom bag: design #${D.indexOf(sd)+1}, ${sh[0].toLowerCase()} handles${$("#nm").value?`, text “${$("#nm").value}”`:""}.`)}
$("#th").onclick=e=>{const b=e.target.closest("button");if(b){sd=b.dataset.d;$$("#th button").forEach(x=>x.setAttribute("aria-pressed",x==b));cz()}};
$("#sw").onclick=e=>{const b=e.target.closest("button");if(b){sh=H[b.dataset.h];$$("#sw button").forEach(x=>x.setAttribute("aria-pressed",x==b));cz()}};
$("#nm").oninput=cz;cz();
/* shop */
let cur="all";const grid=$("#grid"),chips=$("#chips");
function draw(){grid.innerHTML=P.filter(p=>cur=="all"||p[2]==cur).map((p,i)=>`<article class="card" style="--d:${i}"><div class="im"><img src="${IMG[p[0]]}" alt="${p[1]}" loading="lazy"></div><h3>${p[1]}</h3><span>${L[p[2]]}</span><a href="${wa("Hi Cloud9, I’m interested in the “"+p[1]+"” bag.")}" target="_blank" rel="noopener">Enquire on WhatsApp</a></article>`).join("");
chips.innerHTML=Object.keys(L).map(k=>`<button class="chip" data-f="${k}" aria-pressed="${k==cur}">${L[k]}</button>`).join("")}
chips.onclick=e=>{const f=e.target.dataset.f;if(f){cur=f;draw()}};
/* motion */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
const st=$("#stage");
$(".hero").addEventListener("pointermove",e=>{const r=st.getBoundingClientRect();st.style.setProperty("--mx",(e.clientX-r.left-r.width/2)/r.width);st.style.setProperty("--my",(e.clientY-r.top-r.height/2)/r.height)});
function route(){const s=location.hash=="#shop";$("#v-home").hidden=s;$("#v-shop").hidden=!s;
$$(".nav .l").forEach(b=>b.dataset.go==(s?"shop":"home")?b.setAttribute("aria-current","page"):b.removeAttribute("aria-current"));
if(s)draw();else $$(".rvl:not(.in)").forEach(x=>io.observe(x));window.scrollTo(0,0)}
$$("[data-go]").forEach(b=>b.onclick=()=>{location.hash=b.dataset.go;route()});
$$("[data-sc]").forEach(a=>a.onclick=e=>{e.preventDefault();$("#design").scrollIntoView()});
document.addEventListener("keydown",e=>{if(e.key=="Enter"&&e.target.dataset.cat)e.target.click()});
addEventListener("hashchange",route);route();