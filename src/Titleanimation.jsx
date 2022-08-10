import React from 'react';
import RubberBand from 'react-reveal/RubberBand';

class BounceExample extends React.Component {
  render() {
    return (
      <div className="title">
        <RubberBand duration={3000}>
          <div>navodi's gallery.</div>
        </RubberBand>
      </div>
    );
  }
}

export default BounceExample;