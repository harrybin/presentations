---
title: React UI Components
layout: image-right
background: /msWebUiReact-fluent-ui.jpg
hideInToc: true
---

<h1 class="h-auto! mt--7"> React UI Components (e.g. Fluent UI Integration) </h1>

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
  );};
```
````

<v-click>

- **No CSS required!** Fluent UI provides styled components.
- **easy layouting** with MUI's layout components like Stack and Grid.

</v-click>

<!-- 
"Demo"
Instructions:
1. Show Fluent UI component library (Storybook)
2. Demonstrate component usage without CSS
3. Compare to XAML controls
4. Show theming capabilities
5. Explore [Fluent UI documentation](https://storybooks.fluentui.dev/react/?path=/docs/concepts-introduction--docs)
6. Explore MUI as alternative [https://mui.com/material-ui/getting-started/](https://mui.com/material-ui/getting-started/)
   - mention layouting components like Stack, Grid, etc. [https://mui.com/material-ui/react-box/](https://mui.com/material-ui/react-box/)

-->