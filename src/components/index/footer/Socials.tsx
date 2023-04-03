import { FC, MouseEvent } from 'react'
import { Button, Container } from '@nextui-org/react'
import { Facebook, Instagram, Tiktok, Twitter, Whatsapp, Youtube } from '../../../icons'

export const Socials: FC = () => {
    const handleRedirect = (e: MouseEvent<HTMLButtonElement>) => {
        const result = (e.target as HTMLButtonElement);
        const name = result.name;
        const protocol = 'https://';
        let at = '';
        switch (name) {
            case 'Whatsapp':
                at = 'jeje1'
                break;
            case 'Facebook':
                at = 'jeje2'
                break;
            case 'Twitter':
                at = 'jeje3'
                break;
            case 'Tiktok':
                at = 'jeje4'
                break;
            case 'Youtube':
                at = 'jeje5'
                break;
            case 'Instagram':
                at = 'jeje6'
                break;
            default:
                at = 'jeje7';
                break;
        }
        const url = `${protocol}${name.toLowerCase()}.com/${at}`;
        window.open(url, "_blank")
    }
    return (
        <Container fluid gap={1} css={{ display: "flex", flexFlow: "row nowrap", justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Button name="Whatsapp" icon={<Whatsapp />} onClick={handleRedirect} css={styles.iconButton}></Button>
            <Button name="Youtube" icon={<Youtube />} onClick={handleRedirect} css={styles.iconButton}></Button>
            <Button name="Instagram" icon={<Instagram />} onClick={handleRedirect} css={styles.iconButton}></Button>
            <Button name="Twitter" icon={<Twitter />} onClick={handleRedirect} css={styles.iconButton}></Button>
            <Button name="Tiktok" icon={<Tiktok />} onClick={handleRedirect} css={styles.iconButton}></Button>
            <Button name="Facebook" icon={<Facebook />} onClick={handleRedirect} css={styles.iconButton}></Button>
        </Container>
    )
}
const styles = {
    iconButton: {
        mr: 5,
        minWidth: 35,
        maxWidth: 35,
        minHeight: 35,
        maxHeight: 35,
        borderRadius: "50%",
        background: 'rgba(50,50,50)',
        '&:hover': {
            background: 'rgba(80, 80, 80, 0.2)'
        }
    }
}
