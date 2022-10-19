import React from 'react'
import Box from '@mui/material/Box';

const BoxC = ({children}) => {
  return (
    <Box
      sx={{
        width: 400,
        height: 400,
        backgroundColor: '#e2e2e2',
        paddingTop: 10
      }}
      children={children}
      
    />
  );
}

export default BoxC