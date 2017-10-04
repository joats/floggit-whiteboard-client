import React from 'react';
import 'rc-menu/assets/index.css';

import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import dropdownMenuProps from './DropdownMenu.props';

const DropdownMenu = (props) => {
  const handleClick = (info) => {
    switch (info.key) {
      case 'edit':
        props.onEdit();
        break;
      case 'remove':
        props.onRemove();
        break;
      case 'primary':
      case 'secondary':
        props.onChangeColor();
        break;
      default:
        break;
    }
  };
  return (
    <div style={{ width: '400px' }}>
      <Menu
        multiple
        onClick={handleClick}
      >
        {props.titles.map((titles) => {
          if (titles.title.includes('color')) {
            return (
              <SubMenu key={titles.title} title={titles.title}>
                {props.colors.map(colors => (
                  <MenuItem key={colors.color}>{colors.color}</MenuItem>
                ))}
              </SubMenu>
            );
          }
          return (
            <MenuItem key={titles.title}>{titles.title}</MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

DropdownMenu.propTypes = dropdownMenuProps;

export default DropdownMenu;
