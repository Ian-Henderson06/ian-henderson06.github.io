import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

//import placeholderImg from '../public/images/works/placeholder.png'

import rougeliteImg from '../public/images/works/rougelite.png'
import vrImg from '../public/images/works/vr1.png'
import scapenetImg from '../public/images/works/csharp.png'


//ToDo: Finish editing these into displaying top projects. Possible custom API to pull info
const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                My Works
            </Heading>

            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
            </Section> 

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.1}>
                    <WorkGridItem id="toyrougelite" title="Toy Rougelite" thumbnail={rougeliteImg}>
                        A small rougelite created in Unity. It uses a custom dungeon generation
                        algorithm alongside a custom item system.               
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="movementskills" title="VR Movement Skills" thumbnail={vrImg}>
                        BSc project made to evaluate people's movement skills 
                        according to the TGMD.                     
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="scapenet" title="Scapenet" thumbnail={scapenetImg}>
                        A network packeting library developed to 'packet'
                        primitive types in Lidgren.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

          
      
        </Container>
    </Layout>
)

export default Works