import { FC, useRef, useState } from "react";
import { Navbar, Link, Image } from "@nextui-org/react";

type ILink = {
    link: string;
    name: string;
}

// Color
const activeColor = 'primary'

// Links
const collapseItems: ILink[] = [
    { link: '#header', name: 'Inicio' },
    { link: '#about', name: 'Nosotros' },
    { link: '#content', name: 'Contenido' },
];
export const NavbarComponent: FC = () => {
    const navbarToggleRef = useRef<any>()
    const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState<string>('');
    const HandleSideMenu = (link = '') => {
        setActiveMenu(link)
        isSideMenuOpen && navbarToggleRef.current.click()
    }

    return (
        <Navbar isBordered variant="floating">
            <Navbar.Toggle ref={navbarToggleRef} showIn="xs" onChange={(isSelected) => setIsSideMenuOpen(Boolean(isSelected))} />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <Link href="#header">
                    <Image src={'/logo.jpg'} objectFit="cover" css={{ width: 45, height: 45, borderRadius: "50%", overflow: "hidden" }} />
                </Link>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor={activeColor}
                hideIn="xs"
                variant="highlight"
            >
                <Navbar.Link href="#header" onClick={() => HandleSideMenu('#header')}>Inicio</Navbar.Link>
                <Navbar.Link href="#about" onClick={() => HandleSideMenu('#about')}>Nosotros</Navbar.Link>
                <Navbar.Link href="#content" onClick={() => HandleSideMenu('#content')}>Contenido</Navbar.Link>
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={index}
                        isActive={item.link === activeMenu}

                        activeColor={activeColor}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            onClick={() => HandleSideMenu(item.link)}
                            href={item.link}
                        >
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}
