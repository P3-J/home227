import React, { useState } from 'react';
import './App.css';
import { Button, Drawer, Typography } from '@mui/material';




function App() {
  const [open, setOpen] = useState<boolean>(false)
  
  
  function toggleDrawer(bool: boolean){
    setOpen(bool)
  }

  return (
    <div className="App">
      <Button onClick={() => toggleDrawer(true)} sx={{marginTop: '70px'}}>Open</Button>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <h1> drawer </h1>
      </Drawer>
    </div>
  );
}

export default App;
