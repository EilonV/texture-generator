import { useState } from "react";
import CloudinaryUploadWidget from "./cloudinaryUpload";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

export const CloudinaryCmp = () => {

    const [publicId, setPublicId] = useState("");
    // Replace with your own cloud name
    const [cloudName] = useState("hzxyensd5");
    // Replace with your own upload preset
    const [uploadPreset] = useState("aoh4fpwm");
    return <section>
        <h2>cloudinary</h2>
    </section>
}