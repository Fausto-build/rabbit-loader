# Rabbit Loader

A plug-and-play React loading component that draws the Rabbit silhouette with a glowing contour. The default animation cycle is six seconds, remains a silhouette throughout, and respects reduced-motion preferences.

## Add it to an app

1. Copy `src/RabbitCraftLoader.tsx` into your React project.
2. Copy `src/rabbit-idle.png` into the app's public directory.
3. Render the component:

```tsx
import RabbitCraftLoader from "./RabbitCraftLoader";

export function LoadingState() {
  return <RabbitCraftLoader src="/rabbit-idle.png" />;
}
```

The styling is embedded in the component, so no separate CSS import is required.

## Props

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `label` | `string` | `"Crafting your experience"` | Accessible and visible loading label |
| `size` | `number` | `280` | Component width in pixels |
| `duration` | `number` | `6` | Animation cycle in seconds |
| `src` | `string` | `"/rabbit-idle.png"` | URL of the transparent Rabbit artwork |
| `className` | `string` | `""` | Optional custom class |
