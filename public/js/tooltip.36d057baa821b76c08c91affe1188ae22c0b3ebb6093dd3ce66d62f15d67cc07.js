(()=>{var n=class{constructor(){this.tooltip=null,this.currentTarget=null,this.showDelay=300,this.hideDelay=0,this.showTimer=null,this.hideTimer=null,this.init()}init(){this.tooltip=document.createElement("div"),this.tooltip.className="md-tooltip",this.tooltip.setAttribute("role","tooltip"),document.body.appendChild(this.tooltip),this.setupTooltips(),new MutationObserver(()=>this.setupTooltips()).observe(document.body,{childList:!0,subtree:!0})}setupTooltips(){document.querySelectorAll("[data-tooltip]").forEach(t=>{t.dataset.tooltipSetup||(t.dataset.tooltipSetup="true",t.addEventListener("mouseenter",()=>this.show(t)),t.addEventListener("mouseleave",()=>this.hide()),t.addEventListener("focus",()=>this.show(t)),t.addEventListener("blur",()=>this.hide()),t.addEventListener("touchstart",h=>{h.preventDefault(),this.show(t),setTimeout(()=>this.hide(),2e3)},{passive:!1}))})}show(t){clearTimeout(this.hideTimer),this.showTimer=setTimeout(()=>{this.currentTarget=t;let h=t.dataset.tooltip,i=t.dataset.tooltipPlacement||"top",o=t.dataset.tooltipRich==="true",e=t.dataset.tooltipIcon,s=t.dataset.tooltipTitle;o?this.tooltip.innerHTML=`
                <div class="md-tooltip__content md-tooltip__content--rich">
                ${e?`
                    <div class="md-tooltip__icon">
                    <span class="material-symbols-outlined">${e}</span>
                    ${s?`<span class="md-tooltip__title">${s}</span>`:""}
                    </div>
                    `:""}
                    ${!e&&s?`<div class="md-tooltip__title">${s}</div>`:""}
                    <div class="md-tooltip__body">${h}</div>
                    </div>
                    <div class="md-tooltip__arrow"></div>
                    `:this.tooltip.innerHTML=`
                <div class="md-tooltip__content">${h}</div>
                <div class="md-tooltip__arrow"></div>
                `,this.tooltip.dataset.placement=i,this.position(t,i),this.tooltip.classList.add("active")},this.showDelay)}hide(){clearTimeout(this.showTimer),this.hideTimer=setTimeout(()=>{this.tooltip.classList.remove("active"),this.currentTarget=null},this.hideDelay)}position(t,h){let i=t.getBoundingClientRect(),o=this.tooltip.getBoundingClientRect(),e=window.pageYOffset||document.documentElement.scrollTop,s=window.pageXOffset||document.documentElement.scrollLeft,l,d;switch(h){case"top":l=i.top+e-o.height-8,d=i.left+s+i.width/2-o.width/2;break;case"bottom":l=i.bottom+e+8,d=i.left+s+i.width/2-o.width/2;break;case"left":l=i.top+e+i.height/2-o.height/2,d=i.left+s-o.width-8;break;case"right":l=i.top+e+i.height/2-o.height/2,d=i.right+s+8;break}let a=window.innerWidth,c=window.innerHeight;d<8&&(d=8),d+o.width>a-8&&(d=a-o.width-8),l<e+8&&(l=i.bottom+e+8,this.tooltip.dataset.placement="bottom"),l+o.height>e+c-8&&(l=i.top+e-o.height-8,this.tooltip.dataset.placement="top"),this.tooltip.style.top=`${l}px`,this.tooltip.style.left=`${d}px`}};document.addEventListener("DOMContentLoaded",()=>{new n});})();
