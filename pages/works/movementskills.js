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
            The assessment of movement skills is typically performed in person with a professional. This is 
slow and can only be performed infrequently. With the use of a VR headset, this test can be 
made available to anyone, anytime, anywhere. 
This project aims to create a way in which the assessment of movement skills can be performed 
via a VR headset with the use of hand and controller tracking.
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