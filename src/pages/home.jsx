import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { CloudinaryCmp } from '../components/cloudinary';

export const Home = () => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dl3ea7gi2' } });

    return <main className="homenpm">
        <h1>Home</h1>
        <div className="texture">
            <h2>hey there</h2>
        </div>
        <CloudinaryCmp/>
    </main>
}