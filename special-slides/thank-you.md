---
layout: cover
background: thank_you.jpeg
# `background` bleibt für ältere Themes; das 2026-Theme verwendet `coverImage`.
coverImage: thank_you.jpeg
backgroundPosition: 20% 100%
title: Thank you
hideInToc: true
isDark: true
showXebiaLogo: false
---

<!-- issue in theme. See: https://github.com/xebia/presentation-templates/issues/12 -->
<h1 class="h-auto! mt--170px"> Thank you!</h1>


<QRCode class="ml-40px"
  type="svg"
  :data="`https://presentations.harrybin.de/${$slidev.configs.publicDeckPath || $slidev.configs.routeAlias}/`"
  :dotsOptions="{ color: 'white' ,  type: 'extra-rounded', roundSize: false}"
  :backgroundOptions="{ round: 0.05, color: '#1a1a2e' }"
  :width="250"
  :height="250"
  image="logo.svg"
/>

<a :href="`https://presentations.harrybin.de/${$slidev.configs.publicDeckPath || $slidev.configs.routeAlias}/`" 
   :text="`https://presentations.harrybin.de/${$slidev.configs.publicDeckPath || $slidev.configs.routeAlias}/`"></a>

<!-- 
Thank you for joining this session. 
I hope you are inspired to explore Dev-Containers further.  
-->
