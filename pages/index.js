import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Text, Button} from '@chakra-ui/react';

const Banner = ( {purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl} ) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' margin='10' color='red.900'>
    <Image src={imageUrl} width={500} height = {300} alt="banner" />
    <Box p='5'>
      <Text color='grey.500' font-size="sm" fontWeight='medium'></Text>
      <Text color='3xl' font-size="bold"> {title1}<br />{title2} </Text>
      <Text font-size="lg" paddingTop='3' color="gray.700">{desc1} <br /> {desc2} </Text>
      <Button fontSize="xl" bg='blue.300' color='white'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Banner 
        purpose="Rent a Home"
        title="Rental Homes for"
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'

      />
      <Banner 
        purpose="Buy a Home"
        title="Find, Buy and Own Your"
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      
      />

    </div>
  )
}
