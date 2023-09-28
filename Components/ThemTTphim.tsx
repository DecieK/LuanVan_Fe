import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Noto_Serif } from 'next/font/google'
// import { FormattedMessage } from "react-intl";
import Link from "next/link";
import { useRouter } from 'next/router';
import { LayTTPhim, Themttphim } from "@/service/userService";
import CommonUtils from "@/Components/CommonUtils"



const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const Upload = () => {
    interface Phim {
        id: number;
        tenphim: string;
        dieukien: number;
        trailer: Blob;
        poster: Blob;
        dienvien: string;
        ngonngu: string;
        quocgia: string;
        tomtat: string;
        nsx: string;
        trangthai: string;
    }

    const [isBrowser, setIsBrowser] = useState(false);
    const [tenphim, setTenphim] = useState("");
    const [dieukien, setDieukien] = useState(Number);
    const [trailer, setTrailer] = useState("");
    const [dienvien, setDienvien] = useState("");
    const [ngonngu, setNgonngu] = useState("");
    const [quocgia, setQuocgia] = useState("");
    const [tomtat, setTomtat] = useState("");
    const [nsx, setNsx] = useState("");
    const [trangthai, setTrangthai] = useState("");
    // const [base64Img, setBase64Img] = useState("");
    const [prevURLIMG, setPrevURLIMG] = useState("");
    const [poster, setPoster] = useState("");
    const [prevURLVideo, setPrevURLVideo] = useState("");
    const [fileIMG, setFileIMG] = useState<File>()
    const [fileVD, setFileVD] = useState<File>()
    const [phim, setPhim] = useState<Phim[]>([]);
    const [open, setOpen] = useState(Boolean);


    // const [trailer, setTrailer] = useState("");



    useEffect(() => {
        const handleLayTTPhim = async () => {

            try {
                const params = {
                    key: 'ALL'

                };
                console.log("searchdate", params);
                const response = await LayTTPhim(params);
                const res: Phim[] = response.phims;
                console.log("check api handleLayTTChieu: ", response);
                // console.log("length", res.length);
                setPhim(res);
                console.log(res.length)
                //   res.map((res) => (
                //     setGiave(res.giave),
                //     console.log("giave", res.giave)

                //   ));

            } catch (error) {
                console.log(error);
            }
        }
        handleLayTTPhim()
    }, []);
    // const onChangeGT = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setGT_KH(e.target.value)
    // }

    const handleEdit = () => {
        console.log("pposter", poster)
        let imageBase64 = "";
        if (poster) {
            imageBase64 = new Buffer(poster, "base64").toString("binary");
            // const decoded = poster.content.toString().replace("data:image/png;base64,", "");
            // const imageResp = new Buffer(decoded, "base64");
        }
        setPrevURLIMG(poster)
        console.log("setPrevURLIMG", prevURLIMG)
        // console.log("imageBase64", imageBase64)



    }
    const openPreviewImg = () => {
        if (!prevURLIMG) return;
        setOpen(true)

    };
    const handleOnChangeImage = async (event: { target: { files: any; }; }) => {
        console.log("img")
        setFileIMG(event.target.files[0]);

        let data = event.target.files;
        let file = data[0];

        if (file) {
            let base64img = await CommonUtils.getBase64(file);
            console.log("check base64 img: ", base64img);
            let objectUrl = URL.createObjectURL(file);
            console.log("check objectUrl img: ", objectUrl);

            setPoster(base64img)
            setPrevURLIMG(objectUrl)

        }
        console.log("setPrevURLIMG", prevURLIMG)

    };


    const handleOnChangeVideos = async (e: { target: { files: any; }; }) => {
        setFileVD(e.target.files[1]);
        console.log("video")

        let data = e.target.files;
        let file = data[0];

        if (file) {


            let base64 = await CommonUtils.getBase64(file);
            console.log("check base64 video: ", base64);
            let objectUrl = URL.createObjectURL(file);
            console.log("check objectUrl video: ", objectUrl);

            setTrailer(base64)
            setPrevURLVideo(objectUrl)

        }
    };


    const handleDangKy = async () => {
        console.log("tenphim", tenphim)
        console.log("dieukien", dieukien)
        console.log("trailer", trailer)
        console.log("dienvien", dienvien)
        console.log("ngonngu", ngonngu)
        console.log("quocgia", quocgia)
        console.log("tomtat", tomtat)
        console.log("nsx", nsx)
        console.log("trangthai", trangthai)
        let res = await Themttphim(
            {
                Tenphim: tenphim,
                Dieukien: dieukien,
                Poster: poster,
                Trailer: trailer,
                Dienvien: dienvien,
                Ngonngu: ngonngu,
                Quocgia: quocgia,
                Tomtat: tomtat,
                Nsx: nsx,
                Trangthai: trangthai

            });
        if (res && res.errCode === 0) {
            console.log(res)
            alert("Đăng ký thành công")

        } else {
            console.log(res)
            alert("Đăng ký không thành công")

        };
    }
    const router = useRouter();
    const handleBackPage = () => {
        router.push("/");
        console.log("asdasd")

    };
    return (
        <div className={noto_serif.className}>
            <div className="pt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-screen">
                <form className="text-black m-auto text-sm h-auto w-[450px] bg-yellow-900 bg-opacity-20 rounded-xl leading-normal">
                    <h1 className="text-center uppercase text-3xl pt-6 ">Thêm phim mới</h1>
                    <div className="pl-6">
                        <p>Tên phim:</p>
                        <input placeholder="" className="w-[90%] border-b-2 bg-black bg-opacity-0 border-white"
                            onChange={(event) => setTenphim(event.target.value)}
                        ></input>

                        <p>Điều kiện (tuổi):</p>
                        <input type="number" placeholder="" className="w-[90%] border-2 border-gray-300"
                            onChange={(event) => setDieukien(event.target.valueAsNumber)}

                        ></input>

                        {/* <p>Xác nhận lại mật khẩu:</p>
            <input placeholder="" className="w-[90%] border-2 border-gray-300" ></input> */}

                        <p>Trailer:</p>
                        <input placeholder="" className="w-[90%] border-2 border-gray-300"
                            onChange={(event) => setTrailer(event.target.value)}

                        ></input>

                        <p>Diễn viên:</p>
                        <input placeholder="" className="w-[90%] border-2 border-gray-300"
                            onChange={(event) => setDienvien(event.target.value)}

                        ></input>

                        <p>Ngôn ngữ:</p>
                        <input placeholder="" className="w-[90%] border-2 border-gray-300"
                            onChange={(event) => setNgonngu(event.target.value)}

                        ></input>

                        <p>Quốc gia:</p>
                        <input placeholder="" className="w-[90%] border-2 border-gray-300"
                            onChange={(event) => setQuocgia(event.target.value)}

                        ></input>

                        <p>Tóm tắt:</p>
                        <input placeholder="" className="w-[90%] border-2 border-gray-300"
                            onChange={(event) => setTomtat(event.target.value)}
                        ></input>

                        <p>NSX:</p>
                        <input placeholder="" className="w-[90%] border-2 border-gray-300"
                            onChange={(event) => setNsx(event.target.value)}
                        ></input>

                        <p>Trạng thái:</p>
                        <input placeholder="" className="w-[90%] border-2 border-gray-300"
                            onChange={(event) => setTrangthai(event.target.value)}

                        ></input>
                        {/* <button onClick={handleBackPage} className="text-left pt-3 "
                        >Trở về</button> */}
                        {/* <button onClick={() => Router.back()} className="text-left pt-3 ">Trở về</button> */}
                    </div>

                </form>

                <div>

                    <div>
                        <div className="  pb-20">
                            <label>
                                {/* <FormattedMessage id="" /> */}
                            </label>
                            <div className="preview-img-container bg-slate-500">
                                <input
                                    className="w-56 boder-2 bg-slate-400"
                                    id="preview-img"
                                    type="file"
                                    accept=".png,.jpg"
                                    hidden
                                    // onChange={(e) => setFileIMG(e.target.files?.[0])}
                                    onChange={(event) => handleOnChangeImage(event)}
                                />
                                <label className="lable-upload" htmlFor="preview-img">
                                    Tải ảnh <i className="fas fa-upload"></i>
                                </label>

                            </div>
                        </div>
                        <div
                            className="preview-img"

                            style={{
                                backgroundImage: `url(${prevURLIMG})`,
                            }}
                            onClick={() => openPreviewImg()}

                        >
                            review image:
                        </div>
                        {/* <img src={prevURLIMG}></img> */}
                    </div>

                    <div>
                        <div className="">
                            <label>
                                {/* <FormattedMessage id="" /> */}
                            </label>
                            <div className="preview-img-container">
                                <input
                                    id="preview-video"

                                    type="file"
                                    accept=".mp4,.flv"
                                    hidden
                                    onChange={(event) => handleOnChangeVideos(event)}
                                />
                                <label className="lable-upload" htmlFor="preview-video">
                                    Tải video <i className="fas fa-upload"></i>
                                </label>
                            </div>
                        </div>
                        <div>
                            <video autoPlay controls
                                style={{ width: '500px', height: '500px' }}
                                src={prevURLVideo}
                            >
                            </video>
                        </div>
                    </div>

                </div>

                <button className="uppercase w-[90%] h-8 mt-6 mb-6 bg-green-600"
                    onClick={handleDangKy}
                    // onClick={handleEdit}

                >Đăng kí</button>
            </div>
            {/* <form action="/" method="POST" encType="multipart/form-data">
                <h3>Upload Profile Photo</h3>
                <input type="file" name="sampleFile" accept="image/*" />
                <input type="submit" className="btn btn-primary" />
            </form> */}

        </div >
    );
};

export default Upload;
