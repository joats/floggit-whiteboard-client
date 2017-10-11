import React from 'react';
import 'rc-menu/assets/index.css';

import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import dropdownMenuProps from './DropdownMenu.props';

const DropdownMenu = (props) => {
  const handleClick = (info) => {
    switch (info.key) {
      case 'edit':
        props.isEdit();
        break;
      case 'remove':
        props.onRemove(props.note.id);
        break;
      case 'primary':
        props.onChangeColor({ id: props.note.id, title: props.note.title, infoList: props.note.infoList, color: 'primary' });
        break;
      case 'secondary':
        props.onChangeColor({ id: props.note.id, title: props.note.title, infoList: props.note.infoList, color: 'secondary' });
        break;
      case 'tertiary':
        props.onChangeColor({ id: props.note.id, title: props.note.title, infoList: props.note.infoList, color: 'tertiary' });
        break;
      case 'quaternary':
        props.onChangeColor({ id: props.note.id, title: props.note.title, infoList: props.note.infoList, color: 'quaternary' });
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
                    <MenuItem key={color} className={color} />
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
