import { Group, Line } from "react-konva";
import DraggableVertex from "../DraggableVertex/DraggableVertex";
import { useState } from "react";
import Konva from "konva";
import { Html } from "react-konva-utils";
import Draggable from "react-draggable";
import FormWithNotes from "../FormWithNotes/FormWithNotes";
import { Point, TextLine } from "../../types/types";
import { useStore } from "../../store/store";

interface DraggablePolygonProps {
  points: TextLine;
  selectedPolygon: string | null;
  setSelectedPolygon: (id: string | null) => void;
}

const DraggablePolygon = ({
  points,
  selectedPolygon,
  setSelectedPolygon,
}: DraggablePolygonProps) => {
  const [dragging, setDragging] = useState(false);
  const [polygonPoints, setPolygonPoints] = useState(points.points);
  const [verticesVisible, setVerticesVisible] = useState(false);
  const [fillOpacity, setFillOpacity] = useState(1);
  const { setNoteModal } = useStore((state) => state);

  const handlePolygonClick = () => {
    if (selectedPolygon === points.id) {
      setSelectedPolygon(null);
      setVerticesVisible(false);
    } else {
      setSelectedPolygon(points.id);
      setVerticesVisible(true);
      setNoteModal({ note: points.note!, regions: points });
    }
  };

  const updatePolygonInStore = (updatedPoints: Point[]) => {
    useStore.setState((state) => {
      const updatedTotalRegions = state.totalRegions.map((region) => {
        if (region.id === points.id) {
          return { ...region, points: updatedPoints };
        }
        return region;
      });
      return { totalRegions: updatedTotalRegions };
    });
  };
  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(dragging);
  };

  const handleMouseEnter = () => {
    setFillOpacity(0.2);
  };

  const handleMouseLeave = () => {
    setFillOpacity(1);
  };

  const handleVertexDrag = (
    index: number,
    event: Konva.KonvaEventObject<DragEvent>
  ) => {
    const updatedPoints = [...polygonPoints];

    updatedPoints[index] = { x: event.target.x(), y: event.target.y() };

    setPolygonPoints(updatedPoints);
    updatePolygonInStore(updatedPoints);
  };

  const vertices = polygonPoints.map((point, index) => (
    <DraggableVertex
      key={index}
      x={point.x}
      y={point.y}
      onDragMove={(event) => handleVertexDrag(index, event)}
    />
  ));

  return (
    <>
      <Group
        draggable
        onClick={handlePolygonClick}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <Line
          points={polygonPoints.flatMap((point) => [point.x, point.y])}
          closed
          strokeWidth={3}
          stroke="red"
          fill={fillOpacity === 1 ? null! : "red"}
          opacity={fillOpacity}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {selectedPolygon === points.id && verticesVisible && vertices}
        {selectedPolygon === points.id && verticesVisible && vertices ? (
          <Html>
            <Draggable
              defaultPosition={{
                x: points.points[0].x + 50,
                y: points.points[0].y - 50,
              }}
              scale={1}
            >
              <div className="cursor-pointe">
                <FormWithNotes initialText={points.text} />
              </div>
            </Draggable>
          </Html>
        ) : null}
      </Group>
    </>
  );
};

export default DraggablePolygon;
