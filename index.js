import{a as p,S as u,i}from"./assets/vendor-CqoLp5UU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",m="58349884-cb67c3693c894603089b85818",f=o=>p.get(d,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250}),g=o=>{const s=o.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>

          <div class="image-info">
            <p><span>Likes</span>${t.likes}</p>
            <p><span>Views</span>${t.views}</p>
            <p><span>Comments</span>${t.comments}</p>
            <p><span>Downloads</span>${t.downloads}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",s),y.refresh()},h=()=>{c.innerHTML=""},L=()=>{l.classList.remove("hidden")},b=()=>{l.classList.add("hidden")},w=document.querySelector(".form");w.addEventListener("submit",o=>{o.preventDefault();const s=o.currentTarget.elements["search-text"].value.trim();h(),s&&(L(),f(s).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}).catch(t=>{i.error({message:"Something went wrong. Please try again later!",position:"topRight"}),console.error("Request error:",t)}).finally(()=>{b()}),o.currentTarget.reset())});
//# sourceMappingURL=index.js.map
