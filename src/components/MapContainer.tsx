import { Draggable, Map, Point } from 'pigeon-maps';

import pinMarker from '../assets/marker.svg';

interface Props {
  anchor: Point | undefined;
  onDragEnd: ((anchor: Point) => void) | undefined;
}

export const MapContainer = ({ anchor, onDragEnd }: Props) => {
  return (
    <div
      style={{
        borderRadius: '25px',
        overflow: 'hidden',
        height: '240px',
      }}
    >
      <Map defaultCenter={[20.6721374, -103.3258491]} defaultZoom={11}>
        <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={onDragEnd}>
          <img src={pinMarker} width={50} height={85} alt="Map pin marker" />
        </Draggable>
      </Map>
    </div>
  );
};
