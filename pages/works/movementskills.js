import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, YoutubeEmbed } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                VR Movement Skills <Badge>2020/2021</Badge>
            </Title>
            <WorkImage
                src="/images/works/vr1.png"
                alt="Movement Skills"
            />
            <P>
                This project was created to allow the assessment of gross motor skills from the comfort of your own home.
                Assessing motor skills is typically a task performed by medical health care professionals on younger children to detect motor irregularities.
                The project was developed in Unity and utilised the XR interaction library with support for both hand and controller tracking.
                Worldspace VR friendly GUI systems were developed, alongisde movement analysis systems.
                The assessment conformed to the TGMD standard.
            </P>
          
            <br />
            
            <List>
            <ListItem>
                    <Meta>Youtube Showcase</Meta>
                    <Link href="https://www.youtube.com/watch?v=jm9nUu2zN_I">
                    https://www.youtube.com/watch?v=jm9nUu2zN_I
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Windows</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>C# | XR</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/vr2.png" alt="walknote" />
        </Container>
    </Layout>
)

export default Project