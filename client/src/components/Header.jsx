import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';
import FreshFeedLogo from './FreshFeed.jpeg'; // Import the image

const StyledHeader = styled(AppBar)`
    background-color: #a291d5;
    height: 70px;
`;

const MenuIcon = styled(Menu)`
    color: #000;
`;

const Image = styled(`img`)({
    height : 70,
    margin : 'auto',
    paddingRight : 70,
    width : 190
})


const Header = () => {
    return (
        <StyledHeader position="static">
            <Toolbar>
                <MenuIcon />
                <Image src={FreshFeedLogo} alt='logo'  /> {/* Adjust the style as needed */}
            </Toolbar>
        </StyledHeader>
    );
};

export default Header;
