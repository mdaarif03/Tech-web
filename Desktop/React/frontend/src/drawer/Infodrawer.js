import React from 'react'
import { Drawer } from '@mui/material';
import styled from '@emotion/styled';

const styldrawer = {
  boxShadow:'none',
  width:'20%',
  // height:'95%'
}

const InfoDrawer = ({open, setOpen}) => {

  const handlClose = () => {
    setOpen(false);
  }

  return (
    <Drawer
      open={open}
      onClose={handlClose}
      PaperProps={{sx: styldrawer}}
    >
      Hello from Drawer
    </Drawer>
  );
}

export default InfoDrawer;
