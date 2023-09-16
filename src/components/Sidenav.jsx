import React from 'react';
import { Sidenav as RSuiteSidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

const Sidenav = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');

  const handleToggleCollapse = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ width: 240 }}>
      <Toggle
        onChange={handleToggleCollapse}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      />
      <RSuiteSidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
        <RSuiteSidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Menu placement="leftStart" eventKey="3" title="Solutions" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Home</Nav.Item>
              <Nav.Item eventKey="3-2">Our Company</Nav.Item>
              <Nav.Item eventKey="3-3">Solutions</Nav.Item>
              <Nav.Item eventKey="3-4">Contact Us</Nav.Item>
            </Nav.Menu>
          </Nav>
        </RSuiteSidenav.Body>
        <RSuiteSidenav.Toggle expanded={expanded} onToggle={handleToggleCollapse} />
      </RSuiteSidenav>
    </div>
  );
};

export default Sidenav;
