import { FC } from 'react'
interface Props {
    h?: number;
    w?: number;
    color?: string;
}
export const Instagram: FC<Props> = ({ h = 24, w = 24, color = "#fff" }) => {
    return (
        <img src="/icons/instagram.svg" width={w} height={h}></img>
    )
}
