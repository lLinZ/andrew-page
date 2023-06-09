import React, { FC } from 'react'
import { NavbarComponent } from '.'
import { FooterComponent } from '../index/footer';
interface Props {
    children: React.ReactNode;
}
export const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            <div style={{ marginTop: "-60px" }}>
                {children}
            </div>
            <FooterComponent />
        </>
    )
}
