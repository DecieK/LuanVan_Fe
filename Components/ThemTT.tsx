import { handleTest } from "@/service/userService";
import axios from "axios";
import path from "path";
import React, { useState } from "react";
import CommonUtils from "./CommonUtils";
// import 

const UploadVideos = () => {

    const [file, setFile] = useState();
    const [srcF, setSrcF] = useState(String);
    const [filename, setFilename] = useState(String);


    const handleFile = async (event: { target: { files: any; }; }) => {
        setFile(event.target.files[0])
        setFilename(event.target.files[0].name)
        // let value = URL.createObjectURL(event.target.files[0]);
        // console.log(path.dirname(file));
        // console.log("fs.", event.target.files[0].lastModifiedDate.toLocalDateString())
        let base64img = await CommonUtils.getBase64(event.target.files[0]);
        console.log(base64img);
        setSrcF(base64img)

    }
    const handleUploadFile = async () => {
        console.log("file", file)
        console.log("srcF", srcF)

        let res = await handleTest(
            {
                File: file,
                Filename: filename,
                File_src: srcF


            });
        if (res && res.errCode === 0) {
            console.log(res),
            // file.copy("../public/")
            alert("Đăng ký thành công")

        } else {
            console.log(res)
            alert("Đăng ký không thành công")

        };

    }

    return (
        <div className="container">
            <input type="file" onChange={handleFile}></input>
            <button onClick={handleUploadFile} >Upload</button>

        </div>
    );
};

export default UploadVideos;
