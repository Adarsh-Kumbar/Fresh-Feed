import { Box, Typography, styled } from "@mui/material";



const Container = styled(Box)(({ theme }) => ({
    background: '#e5fbea',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Image = styled (`img`)({
    height :34,
    '&:last-child' : {
        margin: '0 50px 0 20px'
    }
})


const Text = styled(Typography)`
    font-size : 14px;
    font-weight : 500;
    margin-left : 50px;
    color : #181919;
`





const InfoHeader = () => {


  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";



  return (
    <Container>
      <Text>
        For the best experience use freshFeed app in your smartphone
      </Text>
      <Box style = {{display : 'flex'}}>
        <Image src={appleStore} alt="appleStore"/>
        <Image src={googleStore} alt="googleStore"/>
      </Box>
    </Container>
  );
};

export default InfoHeader;
