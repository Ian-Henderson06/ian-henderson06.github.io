import {
    Container,
    Heading,
    Box,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'

const Page = () => {
    return(
        <Layout>
            <Container>
                <a href='/IAN HENDERSON.pdf' download>Click to download CV.</a>
            </Container>
        </Layout>
    )
}

export default Page