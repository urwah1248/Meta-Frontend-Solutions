import { Stack, HStack, VStack, Heading, Divider, ButtonGroup, Button, Image, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const Project = ({name, desc, link, image}) => {
    return (
        <Card maxH='2xl' background='gray.100' className='text-left my-10 md:my-0'>
            <CardBody>
                <Image
                src={image}
                alt={name}
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text className='text-slate-500 text-md'>
                        {desc}
                    </Text>
                    <a href={link} className='font-semibold hover:underline text-sm' target='_blank'>Preview Project ➜</a>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default Project