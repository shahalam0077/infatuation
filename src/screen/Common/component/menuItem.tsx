import React from 'react';
import { MenuItem, Divider } from '@mui/material';

interface MenuItemsProps {
  handleClose: () => void;
  onSelect: (category: string) => void;
  categories: { name: string, icon: React.ElementType }[];
}

const MenuItems: React.FC<MenuItemsProps> = ({ handleClose, onSelect, categories }) => (
  <>
    {categories.map((category, index) => (
      <MenuItem key={category.name} onClick={() => { handleClose(); onSelect(category.name); }} disableRipple>
        <category.icon />
        {category.name}
      </MenuItem>
    ))}
    <Divider sx={{ my: 0.5 }} />
  </>
);

export default MenuItems;
