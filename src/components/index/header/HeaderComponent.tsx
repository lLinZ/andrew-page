import { ShapeDivider } from "../../ui/shape/ShapeDivider"
import { Container, Text } from "@nextui-org/react"

export const HeaderComponent = () => {
    return (
        <Container fluid css={{ padding: 0, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>

            <Text css={{ position: "absolute", top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quia optio sed consectetur. Voluptatum ex, quod modi ut cupiditate repudiandae vitae veritatis nihil neque, laboriosam odit facilis porro, voluptates voluptas?</Text>
            <video style={{
                background: "tomato",
                width: "100%",
                height: "500px",
                objectFit: "cover",
            }} src="/bg-video.mp4" autoPlay={true} muted={true} loop={true}></video>
            <ShapeDivider />
        </Container>
    )
}
