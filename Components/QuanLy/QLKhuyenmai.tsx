import React, { useEffect, useState } from "react";
import { Noto_Serif } from 'next/font/google'
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LayTTDoan, LayTTKM, LayTTRap_idcumrap, SuaTTChieu, SuaTTkhuyenmai, ThemTTChieu, ThemTTDoan, ThemTTkhuyenmai, XoaTTChieu, XoaTTkhuyenmai, layTTChieu } from "@/service/userService";
import CommonUtils from "../CommonUtils";
import Image from 'next/image'
import dayjs from "dayjs"


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
const QLKhuyenmai = () => {
    interface Khuyenmai {
        id: number;
        ten_KM: string;
        tile_KM: number;
        mota_KM: string;
        dieukien_KM: number;
        thoigianbatdau: Date;
        thoigianketthuc: Date;
    }

    const [ten, setTen] = useState('');
    const [khuyenmai, setKhuyenmai] = useState<Khuyenmai[]>([]);

    const [anhminhhoa, setAnhminhhoa] = useState('');
    const [tile, setTile] = useState(Number);
    const [mota, setMota] = useState('');
    const [dieukien, setDieukien] = useState(Number);
    const [size, setSize] = useState('');
    const [id_km, setId_km] = useState(Number);
    const [fileIMG, setFileIMG] = useState<File>()
    const [prevURLIMG, setPrevURLIMG] = useState("");
    const [ngaybatdau, setNgaybatdau] = useState(new Date());
    const [ngayketthuc, setNgayketthuc] = useState(new Date());





    const handleThemTTKhuyenmai = async () => {
        // console.log("ngaychieu", ngaychieu)
        // console.log("giave", giave)
        // console.log("id_r", id_r)
        // console.log("id_p", id_p)
        // console.log("id_sc", id_sc)

        let res = await ThemTTkhuyenmai(
            {
                ten: ten,
                tile: tile,
                mota: mota,
                dieukien: dieukien,
                thoigianbatdau:ngaybatdau,
                thoigianketthuc:ngayketthuc
            });
        if (res && res.errCode === 0) {
            console.log(res)

            // setNgaychieu(new Date())
            // setGiave('')
            // setId_cr()
            // handleLayTTDoan()
            alert("Thêm khuyến mãi mới thành thông")
            handleLayTTKM()

            // handleCloseClick();
        } else {

            console.log(res)
            alert("Thêm khuyến mãi mới KHÔNG thành thông")

        };
    }


    
    const handleLayTTKM = async () => {
        try {

            const params = {
                key: "ALL",
            };
            // console.log("searchdate", params);
            const response = await LayTTKM(params);
            const res: Khuyenmai[] = response.khuyenmais;
            // console.log("check api KM: ", response);
            // console.log("length", res.length);
            setKhuyenmai(res);
            console.log(res)
            // res.map((res) => (

            // ));
            // console.log("gheArr",gheArr);

        } catch (error) {
            console.log(error);
        }
    }

    const handleSuaTTKhuyemai = async (id: number, ten: string, tile: number, mota: string, dieukien: number, thoigianbatdau: Date, thoigianketthuc: Date) => {
        let date1 = new Date(ngaybatdau)
        let date2 = new Date(ngayketthuc)

        // setId_c(id)

        setId_km(id)
        setTen(ten)
        setTile(tile)
        setMota(mota)
        setDieukien(dieukien)
        setNgaybatdau(date1)
        setNgayketthuc(date2)

    }

    const handleCapnhatTTKhuyemai = async () => {
        // console.log("ngaychieu", ngaychieu)
        // console.log("giave", giave)
        // console.log("id_r", id_r)
        // console.log("id_p", id_p)
        // console.log("id_sc", id_sc)
        let res = await SuaTTkhuyenmai(
            {
                id: id_km,
                ten: ten,
                tile: tile,
                mota: mota,
                dieukien: dieukien,
                thoigianbatdau: ngaybatdau,
                thoigianketthuc: ngayketthuc
            });
        if (res && res.errCode === 0) {

            console.log(res)
            setTen('')
            setTile(0)
            setDieukien(0)
            setMota('')
            setNgaybatdau(new Date())
            setNgayketthuc(new Date())

            handleLayTTKM()
            alert("Cập nhật khuyến mãi mới thành thông")

        } else {

            console.log(res)
            alert("Cập nhật khuyến mãi KHÔNG thành thông")

        };
    }

    const handleXoaTTKhuyenmai = async (id: number) => {
        let res = await XoaTTkhuyenmai(
            {
                id: id
            });
        if (res && res.errCode === 0) {

            console.log(res)
            setTen('')
            setTile(0)
            setDieukien(0)
            setMota('')
            setNgaybatdau(new Date())
            setNgayketthuc(new Date())

            handleLayTTKM()
            alert("Xóa thông tin khuyến mãi mới thành thông")
        } else {

            console.log(res)
            alert("Xóa thông tin khuyến mãi KHÔNG thành thông")

        };
    }
    useEffect(() => {
        const handleLayTTKM = async () => {
            try {

                const params = {
                    key: "ALL",
                };
                // console.log("searchdate", params);
                const response = await LayTTKM(params);
                const res: Khuyenmai[] = response.khuyenmais;
                // console.log("check api KM: ", response);
                // console.log("length", res.length);
                setKhuyenmai(res);
                console.log(res)
                // res.map((res) => (

                // ));
                // console.log("gheArr",gheArr);

            } catch (error) {
                console.log(error);
            }
        }
        handleLayTTKM()

    }, [])

    return (
        <div>
            <div className="space-y-5">
                <div className="flex space-x-5">
                    <p className="basis-[20%]">Tên khuyến mãi</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={ten}
                        onChange={(event) => setTen(event.target.value)}
                    ></input>
                </div>

                <div className="flex space-x-5">
                    <p className="basis-[20%]">Tỉ lệ (%) khuyến mãi</p>
                    <input type="number" placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={tile}
                        onChange={(event) => setTile(event.target.valueAsNumber)}
                    ></input>
                </div>

                <div className="flex space-x-5">
                    <p className="basis-[20%]">Mô tả khuyến mãi</p>
                    <input placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={mota}
                        onChange={(event) => setMota(event.target.value)}
                    ></input>
                </div>

                <div className="flex space-x-5">
                    <p className="basis-[20%]">Điều khiện nhận khuyến mãi<br />(Dựa theo điểm tích lũy)</p>
                    <input type="number" placeholder="" className="w-[50%] h-9 pl-2 border-2 border-gray-500 outline-none"
                        value={dieukien}
                        onChange={(event) => setDieukien(event.target.valueAsNumber)}
                    ></input>
                </div>

                <div className="flex space-x-5">
                    <div>
                        <p className="basis-[20%]">Thời gian bắt đầu</p>
                        <DatePicker
                            className=""
                            // type="datetime"
                            selected={ngaybatdau}
                            onChange={(date: Date) => setNgaybatdau(date)}
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div>
                        <p className="basis-[20%]">Thời gian kết thúc</p>
                        <DatePicker
                            className=""
                            // type="datetime"
                            selected={ngayketthuc}
                            onChange={(date: Date) => setNgayketthuc(date)}
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
            </div>
            <div className=" w-8/12 ">
                <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                onClick={() => handleCapnhatTTKhuyemai()}
                >Cập nhật thông tin</button>
                <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                    onClick={() => handleThemTTKhuyenmai()}
                >Lưu thông tin</button>
            </div>
            <table className=" border-separate  border border-slate-400 w-full  ">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-center">#</th>
                        <th className="border border-slate-300 text-center">Tên khuyến mãi</th>
                        <th className="border border-slate-300 text-center">Tỉ lệ (%) khuyến mãi</th>
                        <th className="border border-slate-300 text-center">Điều khiện nhận khuyến mãi</th>
                        <th className="border border-slate-300 text-center">Mô tả khuyến mãi</th>
                        <th className="border border-slate-300 text-center">Thời gian bắt đầu</th>
                        <th className="border border-slate-300 text-center">Thời gian kết thúc</th>
                        <th className="border border-slate-300 text-center">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {khuyenmai.map((item) => (
                        <>
                            <tr key={item.id}>
                                <td className="border border-slate-300 text-center">{item.id}</td>
                                <td className="border border-slate-300 text-center">{item.ten_KM}</td>
                                <td className="border border-slate-300 text-center">{item.tile_KM}</td>
                                <td className="border border-slate-300 text-center">{item.dieukien_KM}</td>
                                <td className="border border-slate-300 text-center">{item.mota_KM}</td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        dayjs(item.thoigianbatdau).format("DD/MM/YYYY")
                                    }
                                </td>
                                <td className="border border-slate-300 text-center">
                                    {
                                        dayjs(item.thoigianketthuc).format("DD/MM/YYYY")
                                    }
                                </td>
                                {/* src={new Buffer(item.poster, "base64").toString("binary")} */}

                                {/* <td className="border border-slate-300 text-center">{item.giave }</td> */}

                                <td className="border border-slate-300 text-center">
                                    <EditIcon className="cursor-pointer"
                                    onClick={() => handleSuaTTKhuyemai(item.id, item.ten_KM, item.tile_KM, item.mota_KM, item.dieukien_KM, item.thoigianbatdau, item.thoigianketthuc)}

                                    />
                                    <ClearIcon className="cursor-pointer" sx={{ color: 'red' }}
                                    onClick={() => handleXoaTTKhuyenmai(item.id)}

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

export default QLKhuyenmai;
