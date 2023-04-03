import { FC } from 'react'
import { Grid, Text } from "@nextui-org/react";
import { VideoCardComponent } from '.';
type IVideoElement = {
    imgSrc: string;
    name?: string;
    author: string;
}
const videos = [
    {
        imgSrc: "/video1.jpg",
        name: "Asalto",
        author: "Lil Supa",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video2.jpg",
        name: "Sorry not sorry",
        author: "Denom ft. Natos",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video3.jpg",
        name: "Primera Cita",
        author: "Servando y Florentino",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video1.jpg",
        name: "Asalto",
        author: "Lil Supa",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video2.jpg",
        name: "Sorry not sorry",
        author: "Denom ft. Natos",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video3.jpg",
        name: "Primera Cita",
        author: "Servando y Florentino",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video1.jpg",
        name: "Asalto",
        author: "Lil Supa",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video2.jpg",
        name: "Sorry not sorry",
        author: "Denom ft. Natos",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video3.jpg",
        name: "Primera Cita",
        author: "Servando y Florentino",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video1.jpg",
        name: "Asalto",
        author: "Lil Supa",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video2.jpg",
        name: "Sorry not sorry",
        author: "Denom ft. Natos",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video3.jpg",
        name: "Primera Cita",
        author: "Servando y Florentino",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video1.jpg",
        name: "Asalto",
        author: "Lil Supa",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video2.jpg",
        name: "Sorry not sorry",
        author: "Denom ft. Natos",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video3.jpg",
        name: "Primera Cita",
        author: "Servando y Florentino",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video1.jpg",
        name: "Asalto",
        author: "Lil Supa",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video2.jpg",
        name: "Sorry not sorry",
        author: "Denom ft. Natos",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video3.jpg",
        name: "Primera Cita",
        author: "Servando y Florentino",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video1.jpg",
        name: "Asalto",
        author: "Lil Supa",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video2.jpg",
        name: "Sorry not sorry",
        author: "Denom ft. Natos",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
    {
        imgSrc: "/video3.jpg",
        name: "Primera Cita",
        author: "Servando y Florentino",
        link: "https://www.youtube.com/watch?v=kKLkbpV5ONs&ab_channel=RamesesB"
    },
]
export const VideoGridComponent: FC = () => {
    return (
        <>
            <Text h1 css={{ fontFamily: "Kanit", ml: 10 }}>Nuestro trabajo</Text>
            <Grid.Container gap={2} justify="center" css={{ mb: 50 }}>
                {videos.map((videoInstance: IVideoElement, i: number) => (<Grid xs={12} sm={6} md={4} lg={3} key={i + " " + videoInstance.name}><VideoCardComponent  {...videoInstance} /></Grid>))}
            </Grid.Container>
        </>
    )
}
