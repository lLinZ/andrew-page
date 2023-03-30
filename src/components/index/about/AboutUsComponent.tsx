import { FC } from 'react'
import { Button, Card, Col, Container, Grid, Row, Text } from '@nextui-org/react'
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
        <Container>
            <Text h2>¿Quiénes somos?</Text>
            <Text h6>Nos especializamos en brindar soluciones de alta calidad para eventos y producciones de todo tipo. Desde la planificación hasta la ejecución, nuestro equipo de expertos en audio, video y iluminación trabajará con usted para garantizar que su evento sea un éxito. Ya sea que esté organizando una conferencia, una boda o un concierto, podemos proporcionarle los equipos y el personal necesarios para hacer realidad su visión. Contáctenos hoy para obtener más información sobre cómo podemos ayudarlo a llevar su evento al siguiente nivel.</Text>

            <Grid.Container gap={1} justify="center">
                <Grid xs={12} md={3}>
                    <ServiceCard imageSrc="/services1.jpg" title="Audiovisuales" text="Lorem ipsum dolorum mamelguebum" />
                </Grid>
                <Grid xs={12} md={3}>
                    <ServiceCard imageSrc="/services2.jpg" title="Videos musicales" text="Lorem ipsum dolorum mamelguebum" />
                </Grid>
                <Grid xs={12} md={3}>
                    <ServiceCard imageSrc="/services3.jpg" title="Creacion de guiones" text="Lorem ipsum dolorum mamelguebum" />
                </Grid>
                <Grid xs={12} md={3}>
                    <ServiceCard imageSrc="/services4.jpg" title="Fotografia profesional" text="Lorem ipsum dolorum mamelguebum" />
                </Grid>
            </Grid.Container>
        </Container>
    )
}
