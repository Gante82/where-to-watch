import ILocation from 'api/models/ILocation';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface ILocationProps {
  location: ILocation;
}

const Location: React.FC<ILocationProps> = ({ location }) => {
  const { displayName, icon, url } = location;
  return (
    <ListGroup.Item className="px-3">
      <a href={url} target="blank">
        <img src={icon} alt={displayName} />
      </a>
    </ListGroup.Item>
  );
};

export default Location;
