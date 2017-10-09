import React from 'react';
import 'rc-menu/assets/index.css';

import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import dropdownMenuProps from './DropdownMenu.props';

const DropdownMenu = (props) => {
  const handleClick = (info) => {
    switch (info.key) {
      case 'edit':
        props.onEdit({ id: props.note.id, title: 'hello', infoList: props.note.infoList });
        break;
      case 'remove':
        props.onRemove(props.note.id);
        break;
      case 'primary':
        props.onChangeColor({ id: props.note.id, color: 'primary' });
        console.log(props.note);
        break;
      case 'secondary':
        props.onChangeColor({ id: props.note.id, color: 'secondary' });
        console.log(props.note);
        break;
      case 'tertiary':
        props.onChangeColor({ id: props.note.id, color: 'tertiary' });
        console.log(props.note);
        break;
      case 'quaternary':
        props.onChangeColor({ id: props.note.id, color: 'quaternary' });
        console.log(props.note);
        break;
      default:
        break;
    }
  };
  return (
    <div style={{ width: '40px' }}>
      <Menu
        openSubMenuOnMouseEnter={false}
        multiple
        onClick={handleClick}
      >
        <SubMenu>
          {props.titles.map((title) => {
            if (title.includes('color')) {
              return (
                <SubMenu key={title} title={title}>
                  {props.colors.map(color => (
                    <MenuItem key={color}>{color}</MenuItem>
                  ))}
                </SubMenu>
              );
            }
            return (
              <MenuItem key={title}>{title}</MenuItem>
            );
          })}
        </SubMenu>
      </Menu>
    </div>
  );
};

DropdownMenu.propTypes = dropdownMenuProps;

export default DropdownMenu;
