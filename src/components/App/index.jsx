import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

export default () =>
  <Row>
    <Col xs={6} md={4}>
      <h1>React App renderer</h1>
    </Col>
    <Col xs={6} md={8}>
      <p style={{ color: 'green' }}> change text or style color in dev mode to see hot reloading in action</p>
    </Col>
  </Row>;
