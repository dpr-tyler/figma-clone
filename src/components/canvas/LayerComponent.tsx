import { useStorage } from "@liveblocks/react";
import { memo } from "react";
import Rectangle from "./Rectangle";
import { LayerType } from "~/types";
import Ellipse from "./Ellipse";

const LayerComponent = memo(({ id }: { id: string }) => {
  const layer = useStorage((root) => root.layers[id]);

  if (!layer) return null;

  switch (layer.type) {
    case LayerType.Rectangle:
      return <Rectangle id={id} layer={layer} />;
    case LayerType.Ellipse:
      return <Ellipse id={id} layer={layer} />;
    default:
      return null;
  }
});

LayerComponent.displayName = "LayerComponent";

export default LayerComponent;
