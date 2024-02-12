// import { useState } from 'react'
import './App.css'
import { Box, Card } from './ui'
import { Colors } from './styles/colors'

function App() {

  return (
    <>
      <Box display='flex' m='4' justifyContent='center'>
        <Box width='25px' height="25px" background={Colors.WHITE}></Box>
        <Box width='25px' height="25px" background={Colors.BLACK}></Box>
        <Box width='25px' height="25px" background={Colors.GRAY_800}></Box>
        <Box width='25px' height="25px" background={Colors.GRAY_600}></Box>
        <Box width='25px' height="25px" background={Colors.GRAY_400}></Box>
        <Box width='25px' height="25px" background={Colors.GRAY_300}></Box>
        <Box width='25px' height="25px" background={Colors.GRAY_200}></Box>
        <Box width='25px' height="25px" background={Colors.GRAY_100}></Box>
        <Box width='25px' height="25px" background={Colors.ORANGE_800}></Box>
        <Box width='25px' height="25px" background={Colors.ORANGE_600}></Box>
        <Box width='25px' height="25px" background={Colors.ORANGE_400}></Box>
        <Box width='25px' height="25px" background={Colors.BLUE_800}></Box>
        <Box width='25px' height="25px" background={Colors.BLUE_600}></Box>
        <Box width='25px' height="25px" background={Colors.BLUE_400}></Box>
      </Box>
      <Card width='500px' height='350px' level={200}>

      </Card>

    </>
  )
}

export default App
