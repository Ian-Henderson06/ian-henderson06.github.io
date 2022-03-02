import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Toy Rougelite <Badge>2021/2022</Badge>
            </Title>
            <WorkImage
                src="/images/works/rougelite.PNG"
                alt="Rougelite"
            />
            <P>
                A small rougelite built to experiment with items,
                AI, dungeon generation and stylised graphics.
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Windows | Mac | Linux</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>Unity | C# </Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/rougelite-gif.gif" alt="walknote" />
            <WorkImage src="/images/works/rougelitegen.gif" alt="walknote" />
        </Container>
    </Layout>
)

export default Project