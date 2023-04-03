import { FC } from 'react';
import './services.css';

interface Props { }

export const Services: FC<Props> = () => {
    return (
        <>
            <div style={{ display: "flex", flexFlow: "row nowrap" }}>
                <div style={{ display: "flex", alignItems: "center", flexFlow: "column wrap" }}>
                    <div className={`card big animate-slightly2`} style={{ backgroundImage: "url(/services1c.jpg)" }}>Audiovisuales</div>
                    <div className={`card small animate`} style={{ backgroundImage: "url(/services2c.jpg)" }}>Direccion de videos</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", flexFlow: "column wrap" }}>
                    <div className={`card small animate2`} style={{ backgroundImage: "url(/services4c.jpg)", }}>Fotografia</div>
                    <div className={`card big animate-slightly`} style={{ backgroundImage: "url(/services3c.jpg)", }}>Escenografia</div>
                </div>
            </div>
        </>
    );
};
