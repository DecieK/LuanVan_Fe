import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LayTTDoan, LayTTRap_idcumrap, SuaTTChieu, ThemTTChieu, ThemTTDoan, XoaTTChieu, layTTChieu } from "@/service/userService";
import CommonUtils from "../CommonUtils";
import Image from 'next/image'


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})
// type Props = {
//     suatchieuP: any,
//     rapP: any,
//     phimP: any,
//     chieuP: any

// };
const QLDoan = () => {
    interface Doan {
        id: number;
        ten: string;
        anhminhhoa: string
        loai: number;
        mota: number;
        gia: number;
        size: number;
    }

    const [ten, setTen] = useState('');
    const [doan, setDoan] = useState<Doan[]>([]);

    const [anhminhhoa, setAnhminhhoa] = useState('');
    const [loai, setLoai] = useState('');
    const [mota, setMota] = useState('');
    const [gia, setGia] = useState('');
    const [size, setSize] = useState('');
    const [id_da, setId_c] = useState(Number);
    const [fileIMG, setFileIMG] = useState<File>()
    const [prevURLIMG, setPrevURLIMG] = useState("");



    const handleLayTTDoan = async () => {
        try {

            const params = {
                key: "ALL",
            };
            // console.log("searchdate", params);
            const response = await LayTTDoan(params);
            const res: Doan[] = response.doans;
            // console.log("check api Doan: ", response);
            // console.log("length", res.length);
            setDoan(res);

        } catch (error) {
            console.log(error);
        }
    }

    const handleThemTTDoan = async () => {
        // console.log("ngaychieu", ngaychieu)
        // console.log("giave", giave)
        // console.log("id_r", id_r)
        // console.log("id_p", id_p)
        // console.log("id_sc", id_sc)

        let res = await ThemTTDoan(
            {
                Ten: ten,
                Anhminhhoa: anhminhhoa,
                Loai: loai,
                Mota: mota,
                Gia: Number(gia),
                Size: size
            });
        if (res && res.errCode === 0) {
            console.log(res)

            // setNgaychieu(new Date())
            // setGiave('')
            // setId_cr()
            handleLayTTDoan()
            alert("Thêm thông tin chiếu mới thành thông")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Thêm thông tin chiếu mới KHÔNG thành thông")

        };
    }

    // const handleCapnhatTTChieu = async () => {
    //     console.log("ngaychieu", ngaychieu)
    //     console.log("giave", giave)
    //     console.log("id_r", id_r)
    //     console.log("id_p", id_p)
    //     console.log("id_sc", id_sc)
    //     let res = await SuaTTChieu(
    //         {
    //             ngaychieu: ngaychieu.getFullYear() + "-" + (ngaychieu.getMonth() + 1) + "-" + ngaychieu.getDate(),
    //             giave: Number(giave),
    //             idr: id_r,
    //             idp: id_p,
    //             idsc: id_sc,
    //             id: id_c
    //         });
    //     if (res && res.errCode === 0) {

    //         console.log(res)

    //         setNgaychieu(new Date())
    //         setGiave('')
    //         // setId_cr()
    //         handleLayTTChieu()
    //         alert("Cập nhật thông tin chiếu mới thành thông")


    //         // handleCloseClick();
    //     } else {

    //         console.log(res)
    //         alert("Cập nhật thông tin chiếu KHÔNG thành thông")

    //     };
    // }

    // const handleXoaTTChieu = async (id: number) => {
    //     let res = await XoaTTChieu(
    //         {
    //             id: id
    //         });
    //     if (res && res.errCode === 0) {

    //         console.log(res)

    //         setNgaychieu(new Date())
    //         setGiave('')
    //         // setId_cr()
    //         handleLayTTChieu()
    //         alert("Xóa thông tin chiếu mới thành thông")
    //     } else {

    //         console.log(res)
    //         alert("Xóa thông tin chiếu KHÔNG thành thông")

    //     };
    // }
    // const handleSuaTTChieu = async (ngay: string, gv: number, id: number, idp: number, idr: number, idsc: number) => {
    //     let date1 = new Date(ngay)
    //     setId_c(id)

    //     setNgaychieu(date1)
    //     setGiave(gv.toString())
    //     phim.map((item) => {
    //         if (idp === item.id) {
    //             setValuePhim(item.tenphim)
    //             setId_p(item.id)
    //         }
    //     })
    //     rap.map((item) => {
    //         if (idr === item.id) {
    //             setValueRap(item.ten_rap)
    //             setId_r(item.id)
    //         }
    //     })
    //     suatchieu.map((item) => {
    //         if (idsc === item.id) {
    //             setId_sc(item.id)
    //             setValueSuatchieu(item.giobatdau + ' - ' + item.gioketthuc)
    //         }
    //     })
    // }
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

            setAnhminhhoa(base64img)
            setPrevURLIMG(objectUrl)

        }
        console.log("setPrevURLIMG", prevURLIMG)

    };



    useEffect(() => {
        const handleLayTTDoan = async () => {
            try {

                const params = {
                    key: "ALL",
                };
                // console.log("searchdate", params);
                const response = await LayTTDoan(params);
                const res: Doan[] = response.doans;
                // console.log("check api Doan: ", response);
                // console.log("length", res.length);
                setDoan(res);

            } catch (error) {
                console.log(error);
            }
        }
        handleLayTTDoan()

    }, [])

    return (
        <div>
            <div className="space-y-5">
                <div className="flex space-x-5">
                    <p className="basis-[20%]">ten</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={ten}
                        onChange={(event) => setTen(event.target.value)}
                    ></input>
                </div>

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
                    <div
                        className="preview-img bg-no-repeat "

                        style={{
                            backgroundImage: `url(${prevURLIMG})`,
                        }}
                    // onClick={() => openPreviewImg()}

                    >
                        review image:
                    </div>
                </div>


                <div className="flex space-x-5">
                    <p className="basis-[20%]">loai</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={loai}
                        onChange={(event) => setLoai(event.target.value)}
                    ></input>
                </div>

                <div className="flex space-x-5">
                    <p className="basis-[20%]">mota</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={mota}
                        onChange={(event) => setMota(event.target.value)}
                    ></input>
                </div>

                <div className="flex space-x-5">
                    <p className="basis-[20%]">Giá vé</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={gia}
                        onChange={(event) => setGia(event.target.value)}
                    ></input>
                </div>

                <div className="flex space-x-5">
                    <p className="basis-[20%]">size</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={size}
                        onChange={(event) => setSize(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className=" w-8/12 ">
                <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                // onClick={() => handleCapnhatTTChieu()}
                >Cập nhật thông tin</button>
                <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                    onClick={() => handleThemTTDoan()}
                >Lưu thông tin</button>
            </div>
            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Tên</th>
                        <th className="border border-slate-300 text-center">Ảnh minh họa</th>
                        <th className="border border-slate-300 text-center">Loại</th>
                        <th className="border border-slate-300 text-center">Mô tả</th>
                        <th className="border border-slate-300 text-center">Giá</th>
                        <th className="border border-slate-300 text-center">Size</th>
                        <th className="border border-slate-300 text-center">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {doan.map((item) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">{item.ten}</td>

                                <td className="border border-slate-300 text-center">
                                    <Image
                                        className="w-11/12 h-64  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                        src={new Buffer(item.anhminhhoa, "base64").toString("binary")}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </td>
                                <td className="border border-slate-300 text-center">{item.loai}</td>
                                <td className="border border-slate-300 text-center">{item.mota}</td>
                                <td className="border border-slate-300 text-center">{item.gia}</td>
                                <td className="border border-slate-300 text-center">{item.size}</td>
                                {/* src={new Buffer(item.poster, "base64").toString("binary")} */}

                                {/* <td className="border border-slate-300 text-center">{item.giave }</td> */}

                                <td className="border border-slate-300 text-center">
                                    <EditIcon className="cursor-pointer"
                                    // onClick={() => handleSuaTTChieu(item.ngaychieu, item.giave, item.id, item.id_phim, item.id_rap, item.id_suatchieu)}

                                    />
                                    <ClearIcon className="cursor-pointer" sx={{ color: 'red' }}
                                    // onClick={() => handleXoaTTChieu(item.id)}

                                    />
                                </td>

                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default QLDoan;
