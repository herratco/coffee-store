import{
   Menu,
   MenuButton,
   MenuList, 
   MenuItem, 
   Button, 
   Image,
   Box
  } from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import PropTypes from 'prop-types';

const NavBar = ({children}) => {
    return (
      
       <>
        <nav className='nav'>
          <Box minH="48px">
          <Image
              boxSize='4rem'
              borderRadius='full'
              src='Coffee-cup-clip-art-free-perfect-cup-of-coffee-clipart-3-clipartcow.png'
              alt='Fluffybuns the destroyer'
              mr='12px'
              fallbackSrc='/vite.svg'
            />
          </Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
            Actions
          </MenuButton>
          <MenuList>
         
            <MenuItem>Elemento A</MenuItem>
            <MenuItem>Elemento B</MenuItem>
            
          </MenuList>
         
        </Menu>
        </nav>


        {children}
        </>
    )
}

NavBar.propTypes = {
  children: PropTypes.function
};
export default NavBar