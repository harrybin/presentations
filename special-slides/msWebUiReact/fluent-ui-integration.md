---
title: Fluent UI Integration
layout: image-right
background: /msWebUiReact-fluent-ui.jpg
hideInToc: true
---

<h1 class="h-auto!"> Fluent UI Integration </h1>

````md magic-move
```tsx
import { Button, Card } 
        from '@fluentui/react-components';
```

```tsx
import { Button, Card } 
        from '@fluentui/react-components';

const ShipCard = ({ ship }) => {
  return ( );
};
```

```tsx
import { Button, Card } 
        from '@fluentui/react-components';

const ShipCard = ({ ship }) => {
  return (
    <Card>
      <h3>{ship.name}</h3>
      <p>Capacity: {ship.capacity} TEU</p>
      <Button appearance="primary" 
              onClick={() => alert('Loaded!')}>
        Load Ship
      </Button>
    </Card>
  );
};
```
````

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