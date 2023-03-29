import { FC } from 'react'
import { Text } from '@nextui-org/react'
import { Layout } from '../components/ui'
import { ShapeDivider } from '../components/ui/shape/ShapeDivider';
import { HeaderComponent } from '../components/index/header';
import { AboutUsComponent } from '../components/index/about';
import { VideoGridComponent } from '../components/index/content';

export const IndexPage: FC = () => {
    return (
        <Layout>
            <HeaderComponent />
            <AboutUsComponent />
            <VideoGridComponent />
            {/* <ShapeDivider /> */}
        </Layout>
    )
}
export default IndexPage;