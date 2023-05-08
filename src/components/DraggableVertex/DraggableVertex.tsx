import { Circle } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";
interface DraggableVertexProps {
  x: number;
  y: number;
  onDragMove: (event: KonvaEventObject<DragEvent>) => void;
}

const DraggableVertex = ({
  x,
  y,
  onDragMove,
}: DraggableVertexProps): JSX.Element => {
  return (
    <Circle
      x={x}
      y={y}
      radius={8}
      fill="blue"
      draggable
      onDragMove={onDragMove}
    />
  );
};

export default DraggableVertex;
