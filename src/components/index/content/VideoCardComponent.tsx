import { Card, Col, Container, Text } from "@nextui-org/react";
import { FC } from "react";
interface Props {
    imgSrc: string;
    name?: string;
    author: string;
    link?: string;
}
export const VideoCardComponent: FC<Props> = ({ imgSrc, name = '', author, link }) => {
    const handleView = () => {
        window.open(link, '_blank')
    }
    return (
        <Card isHoverable isPressable borderWeight="bold" onClick={handleView} css={{
            w: "100%", borderRadius: 0,
        }}>
            <Card.Header css={{ position: "absolute", padding: 0, zIndex: 1, top: '50%', left: '50%', transform: "translateX(-50%) translateY(-50%)", color: "rgba(0,0,0,0)", height: "100%", transition: '0.3s ease all', '&:hover': { background: "rgba(0,0,0,0.7)", color: "white" } }}>
                <Container css={{
                    fontFamily: "Kanit", width: '100%', height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexFlow: "column nowrap", color: "transparent",
                    '&:hover': {
                        color: "white"
                    }
                }}>
                    <p style={{ fontSize: 16 }}>
                        {author}
                    </p>
                    <p style={{ fontSize: 24, fontWeight: "bold" }}>
                        {name}
                    </p>
                </Container>
            </Card.Header>
            <Card.Image
                src={imgSrc}
                width="100%"
                css={{ '@xs': { height: '250px', '@md': { height: '300px' }, '@lg': { height: '300px' } } }}
                objectFit="cover"
                alt={author + '-' + name}
            />
        </Card >
    )
};