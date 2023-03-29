import { FC } from 'react'
import { Grid } from "@nextui-org/react";
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
    },
    {
        imgSrc: "/video2.jpg",
        name: "Sorry not sorry",
        author: "Denom ft. Natos",
    },
    {
        imgSrc: "/video3.jpg",
        name: "Primera Cita",
        author: "Servando y Florentino",
    },
]
export const VideoGridComponent: FC = () => {
    return (
        <Grid.Container gap={2} justify="center">
            {videos.map((videoInstance: IVideoElement, i: number) => (<Grid xs={4} key={i + " " + videoInstance.imgSrc}><VideoCardComponent  {...videoInstance} /></Grid>))}
        </Grid.Container>
    )
}
