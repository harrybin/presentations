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
      <button onClick={
                () => count += 1
              }>
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
      <button onClick={
                () => setCount(count + 1)
              }>
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
Demo 
[https://github.com/harrybin/react](https://github.com/harrybin/react)

Instructions:
1. Show useState hook in action
2. Compare to WPF INotifyPropertyChanged
3. **Demonstrate/explain component re-rendering**
4. Show [React] DevTools
5. Explain one-way data flow vs two-way binding

-->