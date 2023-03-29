import { Card, Col, Text } from "@nextui-org/react";
import { FC } from "react";
interface Props {
    imgSrc: string;
    name?: string;
    author: string;
}
export const VideoCardComponent: FC<Props> = ({ imgSrc, name = '', author }) => (
    <Card css={{ w: "100%" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    {author}
                </Text>
                <Text h4 color="white">
                    {name}
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src={imgSrc}
            width="100%"
            height={250}
            objectFit="cover"
            alt={author + '-' + name}
        />
    </Card>
);