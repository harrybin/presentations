---
theme: "@xebia/slidev-theme-xebia"
transition: "fade"
addons:
  - slidev-component-progress
  - "@xebia/slidev-addon-components-common"
  - slidev-addon-qrcode
download: false
browserExporter: true
record: false
editor: true
overviewSnapshots: false
glowEnabled: true
layout: cover
background: /msWebUiReact-cover.png
description: Exploring Microsoft's web UI technology choices and why React is the strategic choice for Windows developers modernizing applications
hideInToc: true
routeAlias: msWebUiReact
---

# Microsoft's Web UI Technology


<!-- 
Regardless of whether it's SharePoint, Power Platform, or a new Office 365 application (Teams, Outlook, etc.), Microsoft uses React for new web or hybrid applications.

So, why not bet on the same horse?

When modernizing a legacy Windows desktop application, developers are confronted with a multitude of web technologies and different programming paradigms for the front-end. By selecting the appropriate web technologies and frameworks, Windows developers can avoid the necessity of mastering demanding technologies like CSS.

This presentation offers a brief overview and practical guidance on the knowledge that Windows developers can easily transfer, as well as the main differences when developing a front-end for the web. Using React and the Material-UI framework, participants will be shown the essential differences and how they can largely avoid tedious topics like CSS.

By the end of this session, former Windows developers will have knowledge of a fundamental set of technologies at hand to start building a web front-end.
-->

---
title: Speaker
layout: intro
src: special-slides/speaker.md
---

---
src: /special-slides/msWebUiReact/timeline.md
---

---
layout: image-right
title: Agenda
background: /public/spaceships-right.jpg
hideInToc: true
---

<h1 class="h-auto!"> Agenda </h1>

<div class="ml-16">

<Toc minDepth="1" maxDepth="1"/>

</div>

<!-- 
Standard agenda slide showing the main chapter-darks of the presentation
-->

---
layout: chapter-dark
background: /react-steps.png
---

# Really? React?

<!--
How to start local Outlook with developer tools open showing React components (commandline parameter):
  - `olk.exe --devtools`
  
```
THIRD-PARTY SOFTWARE NOTICES
react v18.3.1 - MIT license (https://github.com/facebook/react.git)
react-dom v18.3.1 - MIT license (https://github.com/facebook/react.git)
scheduler v0.23.2 - MIT license (https://github.com/facebook/react.git)
raf v3.4.1 - Chris Dickinson <chris@neversaw.us> - MIT license (git://github.com/chrisdickinson/raf.git)
mobx v6.13.7 - Michel Weststrate - MIT license (https://github.com/mobxjs/mobx.git)
reflect-metadata v0.1.13 - Ron Buckton - Apache-2.0 license (https://github.com/rbuckton/reflect-metadata.git)
@ctrl/tinycolor v3.6.1 - Scott Cooper <scttcper@gmail.com> - MIT license
@floating-ui/devtools v0.2.3 - MIT license (https://github.com/floating-ui/floating-ui.git)
@floating-ui/dom v1.6.13 - atomiks - MIT license (https://github.com/floating-ui/floating-ui.git)
use-sync-external-store v1.5.0 - MIT license (https://github.com/facebook/react.git)
ts-md5 v1.2.0 - MIT license (git+https://github.com/cotag/ts-md5.git)
@nevware21/ts-utils v0.12.3 - Nevware21 Solutions LLC - MIT license (https://github.com/nevware21/ts-utils.git)
rtl-css-js v1.16.1 - Kent C. Dodds <kent@doddsfamily.us> (http://kentcdodds.com/) - MIT license (https://github.com/kentcdodds/rtl-css-js.git)
@floating-ui/utils v0.2.9 - atomiks - MIT license (https://github.com/floating-ui/floating-ui.git)
@emotion/hash v0.9.1 - MIT license
react-transition-group v4.4.5 - BSD-3-Clause license (https://github.com/reactjs/react-transition-group.git)
@floating-ui/core v1.6.9 - atomiks - MIT license (https://github.com/floating-ui/floating-ui.git)
@nevware21/ts-async v0.5.4 - NevWare21 Solutions LLC - MIT license (https://github.com/nevware21/ts-async.git)
stylis v4.3.6 - Sultan Tarimo <sultantarimo@me.com> - MIT license
mobx-react v9.2.0 - Michel Weststrate - MIT license (https://github.com/mobxjs/mobx.git)
embla-carousel-autoplay v8.5.1 - David Jerleke - MIT license (git+https://github.com/davidjerleke/embla-carousel)
embla-carousel v8.6.0 - David Jerleke - MIT license (git+https://github.com/davidjerleke/embla-carousel)
embla-carousel-fade v8.5.1 - David Jerleke - MIT license (git+https://github.com/davidjerleke/embla-carousel)
@babel/runtime v7.27.1 - The Babel Team (https://babel.dev/team) - MIT license (https://github.com/babel/babel.git)
dom-helpers v5.2.1 - Jason Quense - MIT license (git+https://github.com/react-bootstrap/dom-helpers.git)
prop-types v15.8.1 - MIT license
react-is v18.3.1 - MIT license (https://github.com/facebook/react.git)
mobx-react-lite v4.1.0 - Daniel K. - MIT license (https://github.com/mobxjs/mobx.git)
mobx-utils v6.0.5 - Michel Weststrate - MIT license (https://github.com/mobxjs/mobx-utils.git)
url v0.10.3 - MIT license (https://github.com/defunctzombie/node-url.git)
hash.js v1.1.7 - Fedor Indutny <fedor@indutny.com> - MIT license (git@github.com:indutny/hash.js)
punycode v2.3.1 - Mathias Bynens - MIT license (https://github.com/mathiasbynens/punycode.js.git)
querystring v0.2.0 - Irakli Gozalishvili <rfobic@gmail.com> - MIT license (git://github.com/Gozala/querystring.git)
minimalistic-assert v1.0.1 - ISC license (https://github.com/calvinmetcalf/minimalistic-assert.git)
inherits v2.0.4 - ISC license
css-loader v6.8.1 - Tobias Koppers @sokra - MIT license
```
-->

---
layout: image-right
background: /msWebUiReact-crossroads.jpg
backgroundSize: contain
hideInToc: true
---

# The Crossroads

<v-clicks>

- SharePoint → **React**
- Power Platform → **React**  
- Teams → **React**
- Outlook (new) → **React**
- Office Add-ins → **React**

</v-clicks>

<br>

<v-click>

## The Question

If Microsoft bets on React...

**Should you?**

</v-click>

<!-- 
This slide introduces the central paradox: Microsoft, known for its own frameworks, has standardized on React for its modern web applications. This sets up the core question of the presentation.

AI Image Prompt: A crossroads with multiple technology paths converging into one modern web path, featuring subtle React and Microsoft logos. Style: clean, professional, blue/purple gradient, similar to pilot-large.jpg
-->


---
layout: image-right
background: /msWebUiReact-desktop-kings.jpg
backgroundSize: contain
---

# The Desktop Kings

## Windows Forms (2002)
<v-clicks>

- Drag & drop designer
- Event-driven model
- **RAD** development
- Legacy but still used
- .NET Framework/Core

</v-clicks>

<br>

<v-clicks>
## WPF (2006)

- **XAML**-based UI
- Data binding magic
- MVVM pattern
- DirectX acceleration
- Still actively maintained

</v-clicks>

<!--
Abscract: 
Windows Forms and WPF dominated desktop development for nearly two decades. WPF introduced concepts (XAML, data binding, MVVM) that influenced all subsequent Microsoft UI frameworks.

AI Image Prompt: Split image showing classic Windows desktop applications on left transitioning to modern UI on right. Style: professional, clean, corporate blue tones.
-->

---
layout: image-right
background: /msWebUiReact-mobile-push.jpg
---

# The Web Attempts

## Silverlight (2007-2021)
<v-clicks>

- Browser plugin
- WPF for the web
- Used by Netflix
- **Discontinued** ⚰️
- HTML5 won

</v-clicks>

## ASP.NET Web Forms
<v-clicks>

- Desktop-like web dev
- ViewState complexity
- Server-centric
- Legacy now
- Replaced by MVC/Razor

</v-clicks>

<!-- 
Microsoft's early web attempts tried to bring desktop paradigms to the web. Both ultimately failed because they fought against web standards rather than embracing them. This taught Microsoft important lessons.
-->

---
layout: image-right
background: /msWebUiReact-mobile-push.jpg
---

# The Mobile Push

## UWP (2015)
<v-clicks>

- Universal Windows Platform
- Write once, run on Win10/11, Xbox, HoloLens
- Windows Store apps
- XAML-based
- Transitioning to WinUI 3

</v-clicks>

## Xamarin.Forms (2014-2024)
<v-clicks>

- True cross-platform mobile
- iOS, Android, Windows
- C# + XAML
- **Sunset May 2024** 
- Evolved into .NET MAUI

</v-clicks>

<!-- 
UWP aimed for Windows ecosystem universality, while Xamarin.Forms tackled true cross-platform mobile. Both laid groundwork for modern solutions but had limitations.

AI Image Prompt: Devices (desktop, tablet, phone, Xbox) connected in a network showing unified application. Style: modern, tech, blue/purple gradient.
-->

---
layout: image-right
background: /msWebUiReact-winui3.jpg
backgroundSize: contain
hideInToc: true
---

# WinUI 3: Windows Native

<v-clicks>

- **Launched**: 2021
- **Platform**: Windows 10/11
- **Language**: C#, C++
- **Architecture**: MVVM
- **Rendering**: DirectX 12
- **Design**: Fluent Design

</v-clicks>

<v-clicks>

## Use Cases
- Modern Windows apps
- High-performance desktop
- Native Windows 11 experiences
- Gaming launchers
- Enterprise tools

</v-clicks>

<!-- 
WinUI 3 is Microsoft's recommended framework for modern Windows desktop applications. It's the evolution of UWP with better flexibility and performance.

AI Image Prompt: Modern Windows 11 application window with Fluent Design elements, translucent effects, and smooth animations. Style: clean, professional, Windows 11 aesthetic.
-->

---
layout: image-right
background: /msWebUiReact-winui3.jpg
backgroundSize: contain
hideInToc: true
---

# WinUI 3: Developer Perspective

## Strengths
<v-clicks>

- **Native performance**
- Hardware acceleration
- Fluent Design built-in
- Familiar to WPF devs
- Strong VS tooling

</v-clicks>

## Challenges
<v-clicks>

- **Windows-only**
- Steeper learning curve
- XAML complexity
- Smaller community
- Desktop paradigm only

</v-clicks>

<!-- 
For Windows developers, WinUI 3 feels familiar but is limited to Windows. This single-platform limitation is critical when considering web alternatives.
-->

---
layout: image-right
background: /msWebUiReact-maui.jpg
backgroundSize: contain
---

# .NET MAUI: True Cross-Platform

<v-clicks>

- **Launched**: 2022
- **Platform**: Windows, macOS, iOS, Android, Tizen
- **Language**: C# + XAML
- **Architecture**: MVVM, Handlers
- **One codebase**: 90%+ sharing

</v-clicks>

<v-clicks>

## Use Cases
- Mobile-first apps
- Desktop + mobile
- Enterprise internal tools
- Cross-platform utilities
- Hybrid with Blazor

</v-clicks>

<!-- 
.NET MAUI is the evolution of Xamarin.Forms, offering true write-once, run-anywhere capability across desktop and mobile platforms.

AI Image Prompt: Single codebase branching to multiple devices (Windows laptop, Mac, iPhone, Android phone) with connecting lines. Style: modern, technical diagram, blue/purple gradient.
-->

---
layout: image-right
background: /msWebUiReact-maui.jpg
backgroundSize: contain
hideInToc: true
---

# .NET MAUI: Developer Perspective

## Strengths
<v-clicks>

- **Truly cross-platform**
- Native controls
- Blazor Hybrid support
- Familiar XAML
- Single project structure

</v-clicks>

## Challenges
<v-clicks>

- Mobile paradigms required
- Need macOS for iOS builds
- Young ecosystem
- Performance tuning needed
- **Not for web browsers**

</v-clicks>

<!-- 
MAUI solves cross-platform desktop and mobile, but doesn't address web deployment - a critical gap for many modernization scenarios.
-->

---
layout: image-right
background: /msWebUiReact-blazor.jpg
backgroundSize: contain
---

# Blazor: C# for the Web

<v-clicks>

- **Launched**: 2018-2020
- **Platform**: Web browsers
- **Language**: C# + Razor
- **Models**: Server, WebAssembly, Hybrid
- **Paradigm**: Component-based

</v-clicks>

<v-clicks>

## Use Cases
- Full-stack web apps
- SPAs
- Progressive Web Apps
- Admin dashboards
- Hybrid desktop/mobile (via MAUI)

</v-clicks>

<!-- 
Blazor is Microsoft's answer to React/Angular/Vue, allowing C# developers to build web applications without JavaScript.

AI Image Prompt: Browser window showing modern web application with C# code transforming into web UI. Style: modern, tech-focused, blue/purple gradient with code snippets.
-->

---
layout: image-right
background: /msWebUiReact-blazor.jpg
backgroundSize: contain
hideInToc: true
---

# Blazor: Developer Perspective

## Strengths
<v-clicks>

- **C# in the browser**
- No JavaScript required
- Full .NET ecosystem
- Strong typing
- Familiar to C# devs
- Multiple hosting models

</v-clicks>

## Challenges
<v-clicks>

- Larger initial payload (WASM)
- Web concepts still needed
- Smaller community vs React
- CSS still required
- Limited component libraries

</v-clicks>

<!-- 
Blazor lets Windows developers use C#, but it still requires understanding web paradigms and doesn't eliminate CSS complexity.
-->

---
layout: chapter-dark
---

# Modern Microsoft UI & React
## Strategic Technologies Comparison

<!-- 
chapter-dark divider covering Microsoft's current UI frameworks (WinUI 3, .NET MAUI, Blazor) and the strategic comparison with React
-->

---
layout: default
title: Technology Comparison Matrix
---

<h1 class="h-auto!"> Technology Comparison Matrix </h1>

| Aspect | WinUI 3 | .NET MAUI | Blazor | React |
|--------|---------|-----------|--------|-------|
| **Platform** | Windows only | Desktop + Mobile | Web + Hybrid | Web (+ Native) |
| **Language** | C#/XAML | C#/XAML | C#/Razor | JavaScript/TypeScript |
| **Paradigm** | MVVM | MVVM | Component | Component |
| **Community** | Small | Growing | Growing | **Massive** |
| **Jobs** | Limited | Limited | Growing | **Abundant** |
| **Libraries** | Moderate | Moderate | Limited | **Vast** |
| **Browser Support** | ❌ | ❌ | ✅ | ✅ |

<!-- 
This comparison shows the strategic advantages of React: massive community, abundant jobs, vast ecosystem, and universal browser support.
-->

---
layout: image-right
background: /msWebUiReact-microsoft-react.jpg
---

# Why Microsoft Uses React

## The Evidence
<v-clicks>

- **SharePoint Framework**: React + TypeScript
- **Teams**: React frontend
- **Outlook**: React rewrite
- **Power Platform**: React controls
- **Fluent UI**: React components

</v-clicks>

## The Reasons
<v-clicks>

- **Ecosystem size**
- Developer availability
- Community support
- Proven at scale
- Cross-team collaboration
- Industry standard

</v-clicks>

<!-- 
Microsoft's own products prove React's superiority for web applications. When even Microsoft chooses React over its own frameworks, that's a powerful signal.

AI Image Prompt: Microsoft product logos (SharePoint, Teams, Outlook, Power Platform) connected to React logo in center. Style: professional, corporate, blue theme with connecting lines.
-->

---
title: React Component Basics
layout: image-right
background: /msWebUiReact-demo1.jpg
hideInToc: true
---

<h1 class="h-auto!"> React Component Basics </h1>


```tsx
import React from 'react';

interface ShipProps {
  name: string;
  containers: number;
}

const Ship: React.FC<ShipProps> = 
  ({ name, containers }) => {
    return (
        <div className="ship-card">
        <h2>{name}</h2>
        <p>Containers: {containers}</p>
        </div>
    );
};
```

<v-click>

**Key Concepts**: TypeScript props, functional components, JSX syntax

</v-click>

<!-- 
Demo Instructions:
1. Show simple functional component with TypeScript
2. Explain props vs WPF dependency properties
3. Compare to XAML UserControl
4. Highlight similarities: typed props, composition
5. Show in browser DevTools

AI Image Prompt: Code editor showing React component with browser preview side by side. Style: modern, clean, developer-focused with code syntax highlighting.
-->

---
title: Fluent UI Integration
layout: image-right
background: /msWebUiReact-fluent-ui.jpg
hideInToc: true
---

<h1 class="h-auto!"> Fluent UI Integration </h1>

<v-click>

````md magic-move
```tsx
import { Button, Card } from '@fluentui/react-components';
```

```tsx
import { Button, Card } from '@fluentui/react-components';

const ShipCard = ({ ship }) => {
  return ( );
};
```

```tsx
import { Button, Card } from '@fluentui/react-components';

const ShipCard = ({ ship }) => {
  return (
    <Card>
      <h3>{ship.name}</h3>
      <p>Capacity: {ship.capacity} TEU</p>
      <Button appearance="primary" onClick={() => alert('Loaded!')}>
        Load Ship
      </Button>
    </Card>
  );
};
```
```` 

</v-click>

<v-click>

**No CSS required!** Fluent UI provides styled components.

</v-click>

<!-- 
Demo Instructions:
1. Show Fluent UI component library (Storybook)
2. Demonstrate component usage without CSS
3. Compare to XAML controls
4. Show theming capabilities
5. Explore Fluent UI documentation

AI Image Prompt: Fluent UI component library showcase with various buttons, cards, and controls in Microsoft's design language. Style: clean, modern, Windows 11 aesthetic.
-->

---
title: React State Management
layout: image-right
background: /msWebUiReact-state-management.jpg
hideInToc: true
---

<h1 class="h-auto!"> React State Management </h1>

````md magic-move
```tsx

import { useState } from 'react';

const ShipCounter = () => {
  let count = 0;
  
  return (
    <div>
      <h2>Ships Loaded: {count}</h2>
      <button onClick={() => count += 1}>
        Load Another Ship
      </button>
    </div>
  );
};
```

```tsx

import { useState } from 'react';

const ShipCounter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Ships Loaded: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Load Another Ship
      </button>
    </div>
  );
};
```
```` 

<v-click>

**Similar to**: `INotifyPropertyChanged` but simpler!

</v-click>

<!-- 
Demo Instructions:
1. Show useState hook in action
2. Compare to WPF INotifyPropertyChanged
3. Demonstrate component re-rendering
4. Show React DevTools
5. Explain one-way data flow vs two-way binding

AI Image Prompt: Split screen showing React useState code on left and WPF XAML/C# code on right with arrows showing data flow. Style: educational, technical diagram.
-->

---
layout: image-right
background: /msWebUiReact-transfers.jpg
hideInToc: true
---

# What Transfers Directly

## Programming Concepts
<v-clicks>

- **Object-oriented thinking**
- Component composition
- Event handling
- Async/await patterns
- Dependency injection
- Testing practices

</v-clicks>

## With TypeScript
<v-clicks>

- **Strong typing**
- Interfaces
- Classes
- Generics
- Null safety
- IDE IntelliSense

</v-clicks>

<!-- 
Windows developers have many transferable skills. TypeScript especially makes React feel familiar to C# developers.

AI Image Prompt: Bridge connecting desktop window to web browser with labeled concepts crossing over. Style: infographic, professional, blue/purple gradient.
-->

---
layout: two-column
---

# The Paradigm Shifts

::left::

## Desktop (XAML) Mindset
<v-clicks>

- Two-way data binding
- Complex state trees
- Imperative commands
- Control templates
- Design-time tools
- Click-drag designers

</v-clicks>

::right::

## React Mindset
<v-clicks>

- **One-way data flow**
- Component state
- Declarative UI
- Composition > inheritance
- Code-first design
- Props down, events up

</v-clicks>

<!-- 
The biggest mental shift is from imperative, stateful UI to declarative, functional components. This requires unlearning some desktop habits.
-->

---
layout: default
title: Concept Mapping XAML → React
hideInToc: true
---

<h1 class="h-auto!"> Concept Mapping: XAML → React </h1>

<div class="flex justify-center text-2xl">

```mermaid {scale: 0.7}
graph LR
    A[UserControl] -->|becomes| B[Function Component]
    C[DependencyProperty] -->|becomes| D[Props]
    E[INotifyPropertyChanged] -->|becomes| F[useState Hook]
    G[DataTemplate] -->|becomes| H[Component Function]
    I[Style/ResourceDictionary] -->|becomes| J[CSS/Styled Components]
    K[Command] -->|becomes| L[Event Handler]
    M[ObservableCollection] -->|becomes| N[Array State]
    
    style B fill:#0B7A9E,stroke:#333,color:#fff
    style D fill:#0B7A9E,stroke:#333,color:#fff
    style F fill:#0B7A9E,stroke:#333,color:#fff
    style H fill:#0B7A9E,stroke:#333,color:#fff
    style J fill:#0B7A9E,stroke:#333,color:#fff
    style L fill:#0B7A9E,stroke:#333,color:#fff
    style N fill:#0B7A9E,stroke:#333,color:#fff
```

</div>

<!-- 
Visual mapping of familiar XAML concepts to their React equivalents. This helps Windows developers find their bearings in React.
-->

---
layout: image-right
background: /msWebUiReact-css-challenge.jpg
hideInToc: true
---

# The CSS Challenge

## The Problem
<v-clicks>

- Different mental model
- Browser quirks
- Layout complexity
- Responsive design
- Specificity rules

</v-clicks>

## The Solutions
<v-clicks>

- **Fluent UI** components
- **Material-UI** (MUI)
- CSS-in-JS libraries
- Tailwind CSS
- Component libraries
- Let designers handle it!

</v-clicks>

<!-- 
CSS is often cited as the biggest hurdle for Windows developers. Component libraries like Fluent UI and Material-UI solve this by providing pre-styled, accessible components.

AI Image Prompt: Tangled CSS code on left transforming into clean component library UI on right. Style: before/after, humorous but professional.
-->

---
layout: two-column
hideInToc: true
---

# Component Libraries Comparison

::left::

## Fluent UI (Microsoft)
<v-clicks>

- Microsoft's design language
- Office 365 look & feel
- React, Web Components
- TypeScript-first
- Active development
- Enterprise-ready

</v-clicks>

::right::

## Material-UI (MUI)
<v-clicks>

- Google's Material Design
- Larger community
- More components
- Extensive docs
- Free + Pro versions
- Industry standard

</v-clicks>

<!-- 
Both libraries eliminate most CSS work. Fluent UI aligns with Microsoft products, while Material-UI offers broader community and components.
-->


---
layout: two-column
hideInToc: true
---

# Project Structure Comparison

::left::

## WPF/WinUI Project
```
📁 MyApp/
  ├── 📁 Views/
  │   ├── 📄 MainWindow.xaml
  │   └── 📁 UserControls/
  ├── 📁 ViewModels/
  ├── 📁 Models/
  ├── 📁 Services/
  └── 📄 App.xaml
   
```

::right::

## React Project
```
📁 my-app/
  ├── 📁 src/
  │   ├── 📁 components/
  │   │   ├── 📄 Ship.tsx
  │   │   └── 📄 ShipList.tsx
  │   ├── 📁 hooks/
  │   ├── 📁 services/
  │   └── 📄 App.tsx
  └── 📄 package.json
```

<!-- 
Project structure is similar conceptually: separate UI from logic, organize by feature or type. React projects are typically flatter and less ceremony.
-->

---
layout: image-right
background: /msWebUiReact-tooling.jpg
backgroundSize: contain
---

# Tooling & Ecosystem

## Development Tools
<v-clicks>

- **VS Code** (not Visual Studio!)
- React DevTools
- npm/yarn package managers
- Vite/Create React App
- ESLint/Prettier

</v-clicks>

## Key Libraries
<v-clicks>

- **React Router** (navigation)
- NextJS (SSR/SSG)
- Fetch (HTTP)
- React Query (data fetching)
- Formik/React Hook Form
- Jest/React Testing Library
- Storybook (component dev)

</v-clicks>

<!-- 
The JavaScript ecosystem is vast. Start with the essentials: VS Code, React DevTools, and a few key libraries. Add others as needed.

AI Image Prompt: Toolbox with modern developer tools icons (VS Code, React, npm, Git) arranged professionally. Style: flat design, colorful but professional.
-->

---
layout: two-column
background: /error-failed.png
backgroundSize: contain
---

# Common Pitfalls & Solutions

::left::

## Common Mistakes
<v-clicks>

- Trying to use two-way binding
- Over-engineering state
- Fighting CSS instead of using libraries
- Not using TypeScript
- Ignoring functional patterns
- Over-componentizing

</v-clicks>

::right::

## Best Practices
<v-clicks>

- **Embrace one-way data flow**
- Keep state minimal
- Use component libraries
- TypeScript from day 1
- Think in components
- Composition over complexity

</v-clicks>

<!-- 
Avoid trying to recreate XAML patterns in React. Embrace React's functional, declarative approach for better results.
-->

---
layout: chapter-dark
---

# Practical Guidance & Modernization
## From Windows Developer to React Developer

<!-- 
chapter-dark divider covering the transition from Windows development to React and practical modernization strategies
-->

---
layout: default
hideInToc: true
---

# Migration Strategies

## Big Bang Rewrite
<v-clicks>

- ❌ High risk
- ❌ Long timeline
- ❌ No incremental value
- ✅ Clean architecture
- **Rarely recommended**

</v-clicks>

## Incremental Approach
<v-clicks>

- ✅ Lower risk
- ✅ Continuous delivery
- ✅ Learn as you go
- ✅ Parallel systems
- **Recommended path**

</v-clicks>

<!-- 
Avoid big-bang rewrites. Incremental migration allows learning, reduces risk, and delivers value continuously.
-->


---
layout: two-column
hideInToc: true
---

# Hybrid Approaches

::left::

## WebView in Desktop
<v-clicks>

- Embed React in WPF/WinForms
- WebView2 control
- Gradual transition
- Share authentication
- **Good for prototyping**
</v-clicks>

::right::

## Blazor Hybrid
<v-clicks>

- Keep C# skills
- Gradual web learning
- MAUI + Blazor
- Desktop + Web
- **Bridge solution**

</v-clicks>

<!-- 
Hybrid approaches allow gradual transition. WebView2 lets you embed React in existing apps. Blazor Hybrid keeps C# while learning web concepts.
-->

---
layout: image-right
background: /msWebUiReact-decision-tree.jpg
backgroundSize: contain
hideInToc: true
---

# Technology Selection Decision Tree

## Choose WinUI 3 if:
<v-clicks>

- Windows-only forever
- Need native performance
- Desktop paradigm fits
- Existing WPF investment

</v-clicks>

## Choose .NET MAUI if:
<v-clicks>

- Need mobile + desktop
- Prefer C#/XAML
- Internal enterprise apps
- Can avoid web browsers

</v-clicks>

## Choose Blazor if:
<v-clicks>

- Want to stay in C#
- Learning web gradually
- Small team, one language
- Accept smaller ecosystem

</v-clicks>

## Choose React if:
<v-clicks>

- **Web-first application**
- **Need largest ecosystem**
- **Want abundant hiring pool**
- **Following Microsoft's lead**

</v-clicks>

<!-- 
Decision framework: For web applications, React is the strategic choice. For desktop-only or mobile, Microsoft frameworks may fit. For most modernization scenarios, React wins.

AI Image Prompt: Decision tree diagram with technology choices branching based on requirements. Style: clean flowchart, professional, blue/purple theme.
-->

---
layout: two-column
hideInToc: true
---

# Success Metrics

::left::

## Technical Metrics
<v-clicks>

- Developer velocity
- Bug rates
- Performance benchmarks
- Bundle size
- Load times
- Code maintainability

</v-clicks>

::right::

## Business Metrics
<v-clicks>

- Time to market
- Hiring success
- Team satisfaction
- Cost per feature
- Browser compatibility
- User adoption

</v-clicks>

<!-- 
Track both technical and business metrics. React's ecosystem advantages often show up in hiring speed and developer velocity.
-->


---
layout: image-right
background: /msWebUiReact-summary.jpg
---

# Takeaways

## Microsoft's Journey
<v-clicks>

- 30+ years of UI evolution
- From desktop-only to web-first
- **Microsoft itself uses React**
- Blazor is great, but niche
- Ecosystem matters

</v-clicks>

## For Windows Developers
<v-clicks>

- Many skills transfer
- TypeScript feels like C#
- Component libraries save you
- CSS avoidable with Fluent/MUI
- **React is strategic choice**

</v-clicks>

<!-- 
The evidence is clear: Microsoft's own products prove React's superiority for web applications. Windows developers can successfully transition with the right approach.

AI Image Prompt: Summary visualization with key points radiating from center, professional infographic style. Include React, Microsoft, and developer icons. Style: clean, professional, blue/purple gradient.
-->


---
layout: image-right
background: /msWebUiReact-strategic-answer.jpg
hideInToc: true
---

# The Strategic Answer

## "Is It React?"

<v-clicks>

### For Microsoft: **Yes**
- SharePoint
- Teams  
- Outlook
- Power Platform
- Office 365

</v-clicks>

## For You?

<v-clicks>

### **Probably Yes**
- If building for web
- If modernizing legacy
- If hiring matters
- If ecosystem matters
- **If following best practices**

</v-clicks>

<!-- 
The title question answered: Microsoft uses React for web, and you probably should too. The evidence, ecosystem, and strategic advantages are compelling.

AI Image Prompt: Large stylized question mark transforming into checkmark, with React logo integrated. Style: bold, professional, gradient blue/purple.
-->


---
src: /special-slides/questions.md
---

---
src: special-slides/thank-you.md
---

---
layout: end
hideInToc: true
---

![](/ddc25.png)  Nov 2025

<br/>

# End of presentation
