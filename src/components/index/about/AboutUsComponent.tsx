import { FC } from 'react'
import { Button, Card, Col, Container, Grid, Row, Text } from '@nextui-org/react'
import { Services } from '../../servicios';
interface IServiceCard {
    imageSrc: string;
    title: string;
    text: string;
}
const ServiceCard: FC<IServiceCard> = ({ imageSrc, title, text }) => {
    return (
        <Card css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text h3 color="#fefefe">
                        {title}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={imageSrc}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt={title + " - " + text}
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Text color="#101010" size={12}>
                            {text}
                        </Text>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}
export const AboutUsComponent: FC = () => {
    return (
        <Container css={{ display: "flex", alignItems: "center", justifyContent: "center", flexFlow: "row wrap", mb: 50 }}>
            <Container css={{ "@xs": { width: "100%" }, '@md': { width: "50%" } }}>
                <Text h1>¿Quiénes somos?</Text>
                <Text h4>Nos especializamos en brindar soluciones de alta calidad para eventos y producciones de todo tipo. Desde la planificación hasta la ejecución, nuestro equipo de expertos en audio, video e iluminación trabajará con usted para garantizar que su evento sea un éxito.</Text>
            </Container>
            <Services />
        </Container>
    )
}
