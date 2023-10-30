import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LayTTDoan, LayTTRap_idcumrap, SuaTTChieu, SuaTTDichvu, ThemTTChieu, ThemTTDoan, Themttphim, XoaTTChieu, XoaTTDichvu, layTTChieu } from "@/service/userService";
import index from "@/pages";
import dayjs from "dayjs"
import Image from 'next/image'
import CommonUtils from "../CommonUtils";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const QLDichvu = () => {
    interface Doan {
        id: number;
        ten: string;
        anhminhhoa: string;
        loai: string;
        mota: string;
        gia: number;
        size: string;
        sl: number;
    }
    const [ngaychieu, setNgaychieu] = useState(new Date());
    const [gia, setGia] = useState(Number);


    const [valueSize, setValueSize] = useState('');
    const [id_dv, setId_dv] = useState(Number);
    const [anhminhhoa, setAnhminhhoa] = useState('');
    const [doan, setDoan] = useState<Doan[]>([]);
    const [prevURLIMG, setPrevURLIMG] = useState('');
    const Size = [
        'S', 'M', 'L', 'XL', '2XL'
    ];
    const [tendv, setTendv] = useState('');
    const [loaidv, setLoaidv] = useState('');
    const [motadv, setMotadv] = useState('');


    // const handleLayTTChieu = async () => {
    //     try {
    //         const params = {
    //             ngaychieu: 'ALL',
    //             id_phim: 'ALL',
    //             id_rap: 'ALL'

    //         };
    //         // console.log("searchdate", params);
    //         const response = await layTTChieu(params);
    //         const res: Chieu[] = response.ttchieu;
    //         console.log("check api searchdate chieu: ", response);
    //         // console.log("length", res.length);
    //         setChieu(res);
    //         res.map((res) => {
    //             console.log("asdasdasdas", res.ngaychieu.getDate())
    //         })


    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const handleLayTTPhim = (value: string) => {
    //     setValuePhim(value)
    //     // setValueRap('')
    //     phim.map(async (item) => {
    //         if (value === item.tenphim) {
    //             setId_p(item.id)
    //         }
    //     })
    // }
    // const handleLayTTRap = (value: string) => {
    //     setValueRap(value)
    //     // setValueRap('')
    //     rap.map(async (item) => {
    //         if (value === item.ten_rap) {
    //             setId_r(item.id)
    //         }
    //     })
    // }
    // const handleLayTTSuatchieu = (value: string) => {
    //     setValueSuatchieu(value)
    //     // setValueRap('')
    //     suatchieu.map(async (item) => {
    //         if (value === (item.giobatdau + ' - ' + item.gioketthuc)) {
    //             setId_sc(item.id)
    //         }
    //     })
    // }

    const handleThemTTDichvu = async () => {
        // console.log("ngaychieu", ngaychieu)
        // console.log("giave", giave)
        // console.log("id_r", id_r)
        // console.log("id_p", id_p)
        // console.log("id_sc", id_sc)

        let res = await ThemTTDoan(
            {
                Ten: tendv,
                Anhminhhoa: anhminhhoa,
                Loai: loaidv,
                Mota: motadv,
                Gia: gia,
                Size: valueSize

            });
        if (res && res.errCode === 0) {
            console.log(res)
            setTendv('')
            setAnhminhhoa('')
            setLoaidv('')
            setMotadv('')
            setGia(0)
            setValueSize('')

            handleLayTTDoan()
            alert("Thêm thông tin dịch vụ mới thành thông")

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Thêm thông tin dịch vụ mới KHÔNG thành thông")

        };
    }

    const handleCapnhatTTDichvu = async () => {
        // console.log("ngaychieu", ngaychieu)
        // console.log("giave", giave)
        // console.log("id_r", id_r)
        // console.log("id_p", id_p)
        // console.log("id_sc", id_sc)
        let res = await SuaTTDichvu(
            {
                id: id_dv,
                Ten: tendv,
                Anhminhhoa: anhminhhoa,
                Loai: loaidv,
                Mota: motadv,
                Gia: gia,
                Size: valueSize
            });
        if (res && res.errCode === 0) {

            console.log(res)
            setTendv('')
            setAnhminhhoa('')
            setLoaidv('')
            setMotadv('')
            setGia(0)
            setValueSize('')

            handleLayTTDoan()
            alert("Cập nhật thông tin dịch vụ mới thành thông")

        } else {

            console.log(res)
            alert("Cập nhật thông tin dịch vụ KHÔNG thành thông")

        };
    }

    const handleXoaTTDichvu = async (id: number) => {
        let res = await XoaTTDichvu(
            {
                id: id
            });
        if (res && res.errCode === 0) {

            console.log(res)
            setTendv('')
            setAnhminhhoa('')
            setLoaidv('')
            setMotadv('')
            setGia(0)
            setValueSize('')

            handleLayTTDoan()
            alert("Xóa thông tin dịch vụ mới thành thông")
        } else {

            console.log(res)
            alert("Xóa thông tin dịch vụ KHÔNG thành thông")

        };
    }
    const handleSuaTTDichvu = async (id: number, ten: string, anh: string, ldv: string, mtdv: string, size: string, gia: number) => {
        // let date1 = new Date(ngay)
        // setId_c(id)

        setId_dv(id)
        setTendv(ten)
        setPrevURLIMG(new Buffer(anh, "base64").toString("binary"))
        setAnhminhhoa(anh)
        setLoaidv(ldv)
        setMotadv(mtdv)
        setValueSize(size)
        setGia(gia)

    }
    const handleOnChangeImage = async (event: { target: { files: any; }; }) => {
        // console.log("img")
        // setFileIMG(event.target.files[0]);

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
                    <p className="basis-[20%]">Tên dịch vụ</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={tendv}
                        onChange={(event) => setTendv(event.target.value)}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Ảnh minh họa</p>
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
                    <div
                        className="preview-img bg-contain bg-no-repeat  w-96 h-32"

                        style={{
                            backgroundImage: `url(${prevURLIMG})`,
                        }}
                    // onClick={() => openPreviewImg()}
                    >
                    </div>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Loại dịch vụ</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={loaidv}
                        onChange={(event) => setLoaidv(event.target.value)}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Mô tả</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={motadv}
                        onChange={(event) => setMotadv(event.target.value)}
                    ></input>
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Size</p>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Size}
                        value={valueSize}
                        onChange={(event: any, newValue: string | null) => {
                            // {newValue ? setValueCumrap(newValue) : null}
                            { newValue ? setValueSize(newValue) : null }

                        }}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Size" />}
                    />
                </div>
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Giá</p>
                    <input placeholder="" type="number" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={gia}
                        onChange={(event) => setGia(event.target.valueAsNumber)}
                    ></input>
                </div>
                <div className=" w-8/12 ">
                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                    onClick={()=> handleCapnhatTTDichvu()}
                    >Cập nhật thông tin</button>
                    <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                        onClick={() => handleThemTTDichvu()}
                    >Lưu thông tin</button>
                </div>
            </div>
            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Tên dịch vụ</th>
                        <th className="border border-slate-300 text-center">Ảnh minh họa</th>
                        <th className="border border-slate-300 text-center">Loại dịch vụ</th>
                        <th className="border border-slate-300 text-center">Mô tả</th>
                        <th className="border border-slate-300 text-center">Size</th>
                        <th className="border border-slate-300 text-center">Giá</th>
                        <th className="border border-slate-300 text-center">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {doan.map((item, index) => (
                        <>
                            <tr key={index}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">
                                    {item.ten}
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        <Image
                                            src={new Buffer(item.anhminhhoa, "base64").toString("binary")}
                                            width={300}
                                            height={300}
                                            alt="Picture of the author"
                                        />
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        item.loai
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        item.mota
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">{item.size}</td>
                                <td className="border border-slate-300 text-center">{item.gia} VNĐ</td>

                                <td className="border border-slate-300 text-center">
                                    <EditIcon className="cursor-pointer"
                                    onClick={() => handleSuaTTDichvu(item.id, item.ten, item.anhminhhoa, item.loai, item.mota, item.size, item.gia)}

                                    />
                                    <ClearIcon className="cursor-pointer" sx={{ color: 'red' }}
                                    onClick={() => handleXoaTTDichvu(item.id)}

                                    />
                                </td>

                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
            {/* <button onClick={handleLayTTChieu}>click</button> */}
        </div>
    );
};

export default QLDichvu;
