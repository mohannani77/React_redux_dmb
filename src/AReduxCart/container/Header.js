import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar sx={{textAlign:'center',margin:'auto'}}>
            Fake Mart
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
