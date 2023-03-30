import { ShapeDivider } from "../../ui/shape/ShapeDivider"
import { Container, Text, Image } from "@nextui-org/react"

export const HeaderComponent = () => {
    return (
        <div style={{ padding: 0, marginInline: 0, background: "black", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", width: "100%", height: "600px" }}>

            <video style={{
                background: "tomato",
                position: "absolute",
                top: 0, left: 0,
                width: "100%",
                height: "600px",
                objectFit: "cover",
            }} src="/bg-video.mp4" autoPlay={true} muted={true} loop={true}></video>
            <Container css={{ position: "absolute", top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)", margin: 0, padding: 0, width: "100%" }}>

                <div style={{ width: "150px", height: "150px", borderRadius: "50%", overflow: "hidden" }}>

                    <Image objectFit="cover" src={'/logo.jpg'} />
                </div>
                <Text css={{ fontSize: 24, fontFamily: "Kanit" }}>
                    Empresadeandrew hehe
                </Text>
            </Container>
            <ShapeDivider />
        </div>
    )
}
