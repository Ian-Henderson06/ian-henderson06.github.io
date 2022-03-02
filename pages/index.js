import NextLink from 'next/link'
import {
    Container,
    Heading,
    Box,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return(
        <Layout>
            <Container>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Ian Henderson
                        </Heading>
                        <p>Postgraduate Student ( Java  |  C#  |  JavaScript )</p>
                    </Box>
                </Box>
                <br/>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me:
                    </Heading>
                    <Paragraph>Ian is a postgraduate student based just outside Glasgow.
                        He has a First Class Batchelors degree in Computing and is currently
                        studying for his masters. He has experience in commerical software development,
                        but has yet to fully enter the industry.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button righticon={<ChevronRightIcon/>} color="purple">
                                Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Education:
                    </Heading>
                    <BioSection>
                        <BioYear>2022</BioYear>
                    MSc Computer Science - Pending Grade, University of Glasgow.
                    </BioSection>
                    <br/>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        BSc Computing Science - First-Class Honours degree (1:1), University of Strathclyde.
                    </BioSection>
                    <br/>
                </Section>
              
            </Container>
        </Layout>
    )
}

export default Page