import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Scapenet <Badge>2020</Badge>
            </Title>
            <WorkImage
                src="/images/works/csharp.png"
                alt="Scapenet"
            />
            <P>
            A small library built on Lidgren for sending larger amounts of data at a time with ease. With Unity support for video game networking. Geared for a more low level approach.</P>
            <P>
ScapeNet is a small library, which allows the sending of organised sets of data in the form of 'packets', these make sending data more intuitive than the current system provided by Lidgren. The goal of ScapeNet, is to make rapid prototyping of multiplayer games, from a lower level perspective, a more pleasant and intuitive process. ScapeNet is by default clientside orientated but allows detailing on the server to make it more, if not fully serverside; however this must be done on a game to game basis.
</P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/Ian-Henderson06/ScapeNet">
                    https://github.com/Ian-Henderson06/ScapeNet
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Windows</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>C#</Link>
                </ListItem>
            </List>
            <br/>
        </Container>
    </Layout>
)

export default Project