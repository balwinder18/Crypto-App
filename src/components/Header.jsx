import React from 'react'
import Home from './Home'
import Exchanges from './Exchanges'
import Coin from './Coin'
import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <HStack bgColor={'blackAlpha.400'}  shadow={'base'}>
        <Button variant={'unstyled'}>
            <Link to="/">Home</Link>
        </Button>
        <Button variant={'unstyled'}>
            <Link to="/Exchanges">Exchanges</Link>
        </Button>
        <Button variant={'unstyled'}>
            <Link to="/Coin">Coins</Link>
        </Button>

    </HStack>
  )
}

export default Header