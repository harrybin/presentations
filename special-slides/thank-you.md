---
layout: cover-dark
background: /thank_you.jpeg
backgroundPosition: 20% 100%
title: Thank you
hideInToc: true
---

<!-- issue in theme. See: https://github.com/xebia/presentation-templates/issues/12 -->
<h1 class="h-auto! mt--170px"> Thank you!</h1>


<QRCode class="ml-40px"
  type="svg"
  :data="`https://presentations.harrybin.de/${$slidev.configs.routeAlias}/`"
  :dotsOptions="{ color: 'white' ,  type: 'extra-rounded', roundSize: false}"
  :width="250"
  :height="250"
  image="logo.svg"
/>

<a :href="`https://presentations.harrybin.de/${$slidev.configs.routeAlias}/`" 
   :text="`https://presentations.harrybin.de/${$slidev.configs.routeAlias}/`"></a>

<!-- 
Thank you for joining this session. 
I hope you are inspired to explore Dev-Containers further.  
-->
