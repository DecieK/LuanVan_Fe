import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Noto_Serif } from 'next/font/google'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import { aborted } from "util";
import { LayTTPhim, LayTTRap_idcumrap, SuaTTPhim, Themttphim, XoaTTPhim } from "@/service/userService";
import Image from 'next/image'
import dayjs from "dayjs"
import CommonUtils from "../CommonUtils";


const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
})

const QLPhim = () => {

    interface Loaiphim {
        id: number;
        tenloai: string;
    }
    interface Phim {
        id: number;
        tenphim: string;
        dieukien: number;
        trailer: string;
        poster: string;
        dienvien: string;
        ngonngu: string;
        daodien: string;
        thoiluong: number;
        ngaychieu: Date;
        quocgia: string;
        tomtat: string;
        nsx: string;
        trangthai: string;
    }
    const [id, setId] = useState(Number);
    const [loaiphim, setLoaiphim] = useState<Loaiphim[]>([]);
    const [phim, setPhim] = useState<Phim[]>([]);
    const [valueloaiphim, setValueloaiphim] = useState('');
    const [tenphim, setTenphim] = useState("");
    const [dieukien, setDieukien] = useState(Number);
    const [trailer, setTrailer] = useState("");
    const [dienvien, setDienvien] = useState("");
    const [ngonngu, setNgonngu] = useState("");
    const [quocgia, setQuocgia] = useState("");
    const [daodien, setDaodien] = useState("");
    const [thoiluong, setThoiluong] = React.useState('')
    const [ngaychieu, setNgaychieu] = useState(new Date());
    const [tomtat, setTomtat] = useState("");
    const [nsx, setNsx] = useState("");
    const [trangthai, setTrangthai] = useState("");
    const [prevURLIMG, setPrevURLIMG] = useState("");
    const [poster, setPoster] = useState<any>();
    const [fileIMG, setFileIMG] = useState<File>()
    const [open, setOpen] = useState(Boolean);

    const handleSuaTTPhim = (id: number, tenphim: string, daodien: string, dienvien: string, nsx: string, ngonngu: string, ngaychieu: Date, tomtat: string, thoiluong: number, poster: string, trailer: string, trangthai: string, dieukien: number, quocgia: string) => {
        setTenphim(tenphim)
        setDaodien(daodien)
        setDienvien(dienvien)
        setNsx(nsx)
        setNgonngu(ngonngu)
        let d = new Date(ngaychieu)
        setNgaychieu(d)
        setTomtat(tomtat)
        setThoiluong(String(thoiluong))
        setPrevURLIMG(new Buffer(poster, "base64").toString("binary"))
        setPoster(poster)
        setTrailer(trailer)
        setTrangthai(trangthai)
        setDieukien(dieukien)
        setQuocgia(quocgia)
        setId(id)
    }
    const handleCapnhatTTphim = async () => {
        console.log("poster", poster)
        let res = await SuaTTPhim(
            {
                id: id,
                Tenphim: tenphim,
                Dieukien: dieukien,
                Poster: prevURLIMG,
                Trailer: trailer,
                Dienvien: dienvien,
                Ngonngu: ngonngu,
                Quocgia: quocgia,
                Tomtat: tomtat,
                Daodien: daodien,
                Thoiluong: thoiluong,
                Ngaychieu: ngaychieu.getFullYear() + "-" + (ngaychieu.getMonth() + 1) + "-" + ngaychieu.getDate(),
                Nsx: nsx,
                Trangthai: trangthai
            });
        if (res && res.errCode === 0) {
            console.log(res)
            handleLayTTPhim()
            setDaodien('')
            setDienvien('')
            setDieukien(0)
            setNgaychieu(new Date())
            setNgonngu('')
            setNsx('')
            setQuocgia('')
            setTenphim('')
            setTrangthai('')
            setThoiluong('')
            setTomtat('')
            setTrailer('')

            alert("Cập nhật thông tin phim thành thông")
        } else {

            console.log(res)
            alert("Cập nhật thông tin phim KHÔNG thành thông")

        };
    }
    const handleXoaTTphim = async (id: number) => {
        let res = await XoaTTPhim(
            {
                id: id
            });
        if (res && res.errCode === 0) {
            console.log(res)
            handleLayTTPhim()
            setDaodien('')
            setDienvien('')
            setDieukien(0)
            setNgaychieu(new Date())
            setNgonngu('')
            setNsx('')
            setQuocgia('')
            setTenphim('')
            setTrangthai('')
            setThoiluong('')
            setTomtat('')
            setTrailer('')

            alert("Xóa thông tin phim thành thông")
        } else {

            console.log(res)
            alert("Xóa thông tin phim KHÔNG thành thông")

        };

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
    const handleLayTTPhim = async () => {
        try {
            const params = {
                key: 'ALL',
            };
            // console.log("searchdate", params);
            const response = await LayTTPhim(params);
            const res: Phim[] = response.phims;
            // console.log("check api searchdate ghe: ", response);
            // console.log("length", res.length);
            setPhim(res);

        } catch (error) {
            console.log(error);
        }
    }
    const handleThemTTPhim = async () => {
        console.log("tenphim", tenphim)
        console.log("dieukien", dieukien)
        console.log("trailer", trailer)
        console.log("dienvien", dienvien)
        console.log("ngonngu", ngonngu)
        console.log("quocgia", quocgia)
        console.log("daodien", daodien)
        console.log("tomtat", tomtat)
        console.log("nsx", nsx)
        console.log("trangthai", trangthai)
        console.log("thoiluong", thoiluong)
        console.log("ngaychieu", ngaychieu)

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
                Daodien: daodien,
                Thoiluong: thoiluong,
                Ngaychieu: ngaychieu.getFullYear() + "-" + (ngaychieu.getMonth() + 1) + "-" + ngaychieu.getDate(),
                Nsx: nsx,
                Trangthai: trangthai

            });
        if (res && res.errCode === 0) {
            console.log(res)
            handleLayTTPhim()
            setDaodien('')
            setDienvien('')
            setDieukien(0)
            setNgaychieu(new Date())
            setNgonngu('')
            setNsx('')
            setQuocgia('')
            setTenphim('')
            setTrangthai('')
            setThoiluong('')
            setTomtat('')
            setTrailer('')


            alert("Thêm thành công")



        } else {
            console.log(res)
            alert("Thêm không thành công")

        };
    }
    useEffect(() => {
        const handleLayTTPhim = async () => {
            try {
                const params = {
                    key: 'ALL',
                };
                // console.log("searchdate", params);
                const response = await LayTTPhim(params);
                const res: Phim[] = response.phims;
                // console.log("check api searchdate ghe: ", response);
                // console.log("length", res.length);
                setPhim(res);

            } catch (error) {
                console.log(error);
            }
        }

        handleLayTTPhim()

    }, [])
    // useEffect(() => {
    //     setPhim(phimP)
    //     setLoaiphim(loaiphimP)

    // }, [loaiphimP, phimP])
    //chọn TTTT, chọn rạp => lưu tt ghế
    return (
        <div>
            <p className="uppercase text-center text-2xl font-semibold">danh sách phim</p>
            <div className="w-11/12 flex m-auto mt-5 mb-5">
                <div className="basis-6/12 space-y-3 ">
                    <div className="flex">
                        <p className="basis-3/12">Tên phim:</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2"
                            value={tenphim}
                            onChange={(event) => setTenphim(event.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Đạo diễn</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2"
                            value={daodien}
                            onChange={(event) => setDaodien(event.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Diễn viên</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2"
                            value={dienvien}
                            onChange={(event) => setDienvien(event.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Nhà sản xuất</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2"
                            value={nsx}
                            onChange={(event) => setNsx(event.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Ngôn ngữ</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2"
                            value={ngonngu}
                            onChange={(event) => setNgonngu(event.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Ngày chiếu</p>
                        {/* <input className="h-9 w-80 border-2 outline-none pl-2"

                        /> */}
                        <DatePicker
                            className=""
                            // type="datetime"
                            selected={ngaychieu}
                            // onChange={handlSearchLichkham}
                            // onChange={(date: Date) => handleLayTTChieu(date)}
                            onChange={(date: Date) => setNgaychieu(date)}
                            // onChange={(date: Date) => handlSearchDate((date))}
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Tóm tắt</p>
                        <textarea className="h-20 w-80 border-2 outline-none pl-2"
                            value={tomtat}
                            onChange={(event) => setTomtat(event.target.value)}
                        />
                    </div>

                </div>
                <div className="basis-6/12 space-y-3">
                    <div className="flex">
                        <p className="basis-3/12">Thời lượng</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2"
                            onChange={(event) => setThoiluong(event.target.value)}
                            value={thoiluong}
                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Poster</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2"

                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Trailer</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2"
                            value={trailer}
                            onChange={(event) => setTrailer(event.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Trạng thái phim</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2"
                            value={trangthai}
                            onChange={(event) => setTrangthai(event.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Giới hạn tuổi</p>
                        <input type="number" className="h-9 w-80 border-2 outline-none pl-2"
                            value={dieukien}
                            onChange={(event) => setDieukien(event.target.valueAsNumber)}

                        />
                    </div>
                    <div className="flex">
                        <p className="basis-3/12">Quốc gia</p>
                        <input className="h-9 w-80 border-2 outline-none pl-2"
                            value={quocgia}
                            onChange={(event) => setQuocgia(event.target.value)}
                        />
                    </div>

                </div>
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
                        className="preview-img bg-no-repeat "

                        style={{
                            backgroundImage: `url(${prevURLIMG})`,
                        }}
                        onClick={() => openPreviewImg()}

                    >
                        review image:
                    </div>
                    {/* <img src={prevURLIMG}></img> */}
                </div>
                {/* <div className="basis-4/12 border-2 border-green-300">

                </div> */}

            </div>
            <div className=" w-8/12 ">
                <button
                    className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"

                    onClick={handleThemTTPhim}
                >Thêm phim</button>
                <button className="boder border-2 mb-10 bg-blue-400 font-bold float-right h-10 w-40"
                    onClick={handleCapnhatTTphim}>Cập nhật phim</button>
            </div>

            <div className="w-full overflow-x-auto">
                <table className=" border-separate  border border-slate-400 w-full ">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 text-center ">#</th>
                            <th className="border border-slate-300 text-center w-[100px]">Tên phim</th>
                            <th className="border border-slate-300 text-center">Đạo diễn</th>
                            <th className="border border-slate-300 text-center">Diễn viên</th>
                            <th className="border border-slate-300 text-center">Nhà sản xuất</th>
                            <th className="border border-slate-300 text-center">Ngôn ngữ</th>
                            <th className="border border-slate-300 text-center">Ngày chiếu</th>
                            <th className="border border-slate-300 text-center">Tóm tắt</th>
                            <th className="border border-slate-300 text-center">Thời lượng</th>
                            <th className="border border-slate-300 text-center w-96">Poster</th>
                            <th className="border border-slate-300 text-center">Trailer</th>
                            <th className="border border-slate-300 text-center">Trạng thái phim</th>
                            <th className="border border-slate-300 text-center">Giới hạn tuổi</th>
                            <th className="border border-slate-300 text-center">Quốc gia</th>
                            <th className="border border-slate-300 text-center">Tác vụ</th>



                        </tr>
                    </thead>
                    <tbody>
                        {phim.map((item) => (
                            <>
                                <tr key={item.id}>
                                    <td className="border border-slate-300 text-center">{item.id}</td>
                                    <td className="border border-slate-300 text-center w-[100px]">{item.tenphim}</td>
                                    <td className="border border-slate-300 text-center">{item.daodien}</td>
                                    <td className="border border-slate-300 text-center">{item.dienvien}</td>
                                    <td className="border border-slate-300 text-center">{item.nsx}</td>
                                    <td className="border border-slate-300 text-center">{item.ngonngu}</td>
                                    <td className="border border-slate-300 text-center">
                                        {
                                            dayjs(item.ngaychieu).format("DD/MM/YYYY")
                                        }

                                    </td>
                                    <td className="border border-slate-300 text-center">{item.tomtat}</td>
                                    <td className="border border-slate-300 text-center">{item.thoiluong}</td>
                                    <td className="border border-slate-300 text-center">{
                                        <Image
                                            src={new Buffer(item.poster, "base64").toString("binary")}
                                            width={300}
                                            height={300}
                                            alt="Picture of the author"
                                        />
                                    }</td>
                                    <td className="border border-slate-300 text-center">{item.trailer}</td>
                                    <td className="border border-slate-300 text-center">{item.trangthai}</td>
                                    <td className="border border-slate-300 text-center">{item.dieukien}</td>
                                    <td className="border border-slate-300 text-center">{item.quocgia}</td>

                                    <td className="border border-slate-300 text-center">
                                        <EditIcon onClick={() => handleSuaTTPhim(item.id, item.tenphim, item.daodien, item.dienvien, item.nsx, item.ngonngu, item.ngaychieu, item.tomtat, item.thoiluong, item.poster, item.trailer, item.trangthai, item.dieukien, item.quocgia)} className="cursor-pointer" />
                                        <ClearIcon onClick={() => handleXoaTTphim(item.id)} className="cursor-pointer" sx={{ color: 'red' }} />
                                    </td>

                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QLPhim;
