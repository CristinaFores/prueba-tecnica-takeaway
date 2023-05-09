import { Layer, Stage, Image } from "react-konva";
import DraggablePolygon from "../DraggablePolygon/DraggablePolygon";
import useImage from "use-image";
import { useState } from "react";
import { KonvaEventObject } from "konva/lib/Node";
import { TextLine } from "../../types/types";

interface AnnotatorProps {
  imageUrl: string;
  pointsArray: TextLine[];
}

const Regions = ({ imageUrl, pointsArray }: AnnotatorProps): JSX.Element => {
  const [image] = useImage(imageUrl);
  const [scale, setScale] = useState(0.45);
  const [selectedPolygon, setSelectedPolygon] = useState(null as string | null);

  const handleWheel = (event: KonvaEventObject<WheelEvent>) => {
    event.evt.preventDefault();

    const scaleFactor = 1.1;
    const newScale =
      event.evt.deltaY > 0 ? scale / scaleFactor : scale * scaleFactor;

    setScale(newScale);
  };

  return (
    <div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight * 2.8}
        onWheel={handleWheel}
        scaleX={scale}
        scaleY={scale}
        x={window.innerWidth / 10}
        y={window.innerHeight / 10}
      >
        <Layer>
          <Image image={image} />
          {pointsArray.map((polygonPoints, index) => (
            <DraggablePolygon
              key={index}
              points={polygonPoints}
              selectedPolygon={selectedPolygon}
              setSelectedPolygon={setSelectedPolygon}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Regions;
