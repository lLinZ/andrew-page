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
            }} src="/videobg.mp4" autoPlay={true} muted={true} loop={true}></video>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)", margin: 0, padding: 0, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexFlow: "column wrap" }}>

                <Image objectFit="cover" src={'/logo.jpg'} css={{ borderRadius: "50%", width: 200, height: 200 }} />
                <Text css={{ fontSize: 24, fontFamily: "Raleway" }}>
                    Entrefamilia, C.A
                </Text>
                <Text css={{ fontSize: 50, fontFamily: "Permanent Marker", padding: 20, textAlign: 'center' }}>
                    Hacemos arte tus ideas
                </Text>
            </div>
            <ShapeDivider />
        </div>
    )
}