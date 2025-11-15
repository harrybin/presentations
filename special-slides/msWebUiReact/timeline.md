---
layout: default
hideInToc: true
---

# Microsofts UI Technologies

<div class="timeline-wrapper">
  <div class="timeline-line"></div>
  <div class="timeline-events">
    <div class="timeline-event" style="left: 0%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">1992</div>
        <div class="timeline-tech">MFC</div>
      </div>
    </div>
    <v-click>
    <div class="timeline-event" style="left: 3.3%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">1993</div>
        <div class="timeline-tech">Win32 API</div>
      </div>
    </div>
    </v-click>
    <v-click>
    <div class="timeline-event" style="left: 33%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">2002</div>
        <div class="timeline-tech">Windows Forms<br/>ASP.NET WebForms</div>
      </div>
    </div>
    </v-click>
    <v-click>
    <div class="timeline-event" style="left: 46.6%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">2006</div>
        <div class="timeline-tech">WPF</div>
      </div>
    </div>
    </v-click>
    <v-click>
    <div class="timeline-event" style="left: 50%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">2007</div>
        <div class="timeline-tech">Silverlight</div>
      </div>
    </div>
    </v-click>
    <v-click>
    <div class="timeline-event" style="left: 56.6%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">2009</div>
        <div class="timeline-tech">ASP.NET MVC</div>
      </div>
    </div>
    </v-click>
    <v-click>
    <div class="timeline-event" style="left: 73.3%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">2014</div>
        <div class="timeline-tech">Xamarin.Forms</div>
      </div>
    </div>
    </v-click>
    <v-click>
    <div class="timeline-event" style="left: 76.6%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">2015</div>
        <div class="timeline-tech">UWP</div>
      </div>
    </div>
    </v-click>
    <v-click>
    <div class="timeline-event" style="left: 86.6%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">2018</div>
        <div class="timeline-tech">WinUI 2<br/>Blazor</div>
      </div>
    </div>
    </v-click>
    <v-click>
    <div class="timeline-event" style="left: 96.6%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">2021</div>
        <div class="timeline-tech">WinUI 3</div>
      </div>
    </div>
    </v-click>
    <v-click>
    <div class="timeline-event" style="left: 100%">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">2022</div>
        <div class="timeline-tech">.NET MAUI</div>
      </div>
    </div>
    </v-click>
  </div>
</div>

<style>
.timeline-wrapper {
  position: relative;
  margin: 3rem auto 4rem;
  height: 300px;
  max-width: 95%;
}

.timeline-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #8B2EA8 0%, #E91E63 50%, #2196F3 100%);
  border-radius: 2px;
  transform: translateY(-50%);
}

.timeline-events {
  position: relative;
  height: 100%;
}

.timeline-event {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* Connecting lines from dots to content */
.timeline-event::before {
  content: '';
  position: absolute;
  left: 50%;
  width: 2px;
  background: rgba(139, 46, 168, 0.3);
  transform: translateX(-50%);
  z-index: 5;
}

.timeline-event:nth-child(odd)::before {
  bottom: 8px;
  height: 64px;
}

.timeline-event:nth-child(even)::before {
  top: 8px;
  height: 24px;
}

.timeline-event:nth-child(odd) .timeline-content {
  top: -80px;
}

.timeline-event:nth-child(even) .timeline-content {
  top: 40px;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background: white;
  border: 4px solid #8B2EA8;
  border-radius: 50%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.timeline-content {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  white-space: nowrap;
  min-width: 120px;
}

.timeline-year {
  font-weight: bold;
  font-size: 1.1rem;
  color: #8B2EA8;
  margin-bottom: 0.25rem;
}

.timeline-tech {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.3;
}
</style>

<!-- 
Visual representation of the timeline showing the rapid pace of innovation, especially in recent years. Notice the convergence toward cross-platform and web technologies.
-->
