# Rabbit Loader

A single React loading component that traces the Rabbit silhouette in one continuous line. The cycle takes six seconds, never reveals the original image, and respects reduced-motion preferences.

## Use it

1. Copy [RabbitCraftLoader.tsx](RabbitCraftLoader.tsx) into your React app (for example, `components/RabbitCraftLoader.tsx`).
2. Copy [rabbit-idle.png](rabbit-idle.png) into your app's `public` directory.
3. Render it wherever you need a loading state:

```tsx
import RabbitCraftLoader from "./RabbitCraftLoader";

export function LoadingState() {
  return <RabbitCraftLoader />;
}
```

The component defaults to `src="/rabbit-idle.png"`. Its styles are embedded, so no CSS file or extra animation library is needed. You can override `src` if you store the PNG at another URL.

## Props

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `label` | `string` | `"Crafting your experience"` | Accessible and visible loading label |
| `size` | `number` | `280` | Component width in pixels |
| `duration` | `number` | `6` | Animation cycle in seconds |
| `src` | `string` | `"/rabbit-idle.png"` | URL of the transparent Rabbit artwork |
| `className` | `string` | `""` | Optional custom class |
