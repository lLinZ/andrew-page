import { Text, Col, Container, Row, Divider, Grid } from '@nextui-org/react'
import { FC } from 'react'
import { Youtube } from '../../../icons'
import { Socials } from './'

export const FooterComponent: FC = () => {
    return (
        <Container fluid css={{ padding: 0, minHeight: 300 }}>
            <Divider />
            <Row gap={1} css={{ width: "100%", mt: 5 }}>
                <Col css={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "row wrap" }}>
                    <Text css={{ textAlign: "center", whiteSpace: "nowrap", flex: 1, fontWeight: "bold" }}>Siguenos en redes sociales</Text>
                    <Socials />
                </Col>
            </Row>
            <Grid.Container gap={1} css={{ width: "100%", mt: 10 }}>
                <Grid xs={12} sm={6} md={4} lg={4} >
                    <Container css={{ display: "flex", flexFlow: "column nowrap" }}>
                        <Text h4>Empresa</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam itaque qui ipsa a voluptatum sunt dignissimos labore incidunt recusandae cum, tenetur vitae amet saepe, accusamus nostrum soluta repudiandae accusantium?</Text>
                    </Container>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4} >
                    <Container css={{ display: "flex", flexFlow: "column nowrap" }}>
                        <Text h4>Accesos</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam itaque qui ipsa a voluptatum sunt dignissimos labore incidunt recusandae cum, tenetur vitae amet saepe, accusamus nostrum soluta repudiandae accusantium?</Text>
                    </Container>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={4} >
                    <Container css={{ display: "flex", flexFlow: "column nowrap" }}>
                        <Text h4>Contacto</Text>
                        <Text>Casa 98, Calle 69, Valencia, Carabobo, Venezuela</Text>
                        <Text>email@email.com</Text>
                        <Text>+58 5252525252</Text>
                    </Container>
                </Grid>
            </Grid.Container >
        </Container >
    )
}
