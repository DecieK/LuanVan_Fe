import { useEffect, useState } from "react";


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FastfoodIcon from '@mui/icons-material/Fastfood';
// import EditIcon from '@mui/icons-material/Edit';
// import ClearIcon from '@mui/icons-material/Clear';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Footer from '@/Components/Footer';
// import D from '@/Components/D';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilm, faVideo } from '@fortawesome/free-solid-svg-icons';
// import { icon } from '@fortawesome/fontawesome-svg-core';
// import { faDiscourse } from '@fortawesome/free-brands-svg-icons';
// import Button from '@mui/material/Button';
// import Grow from '@mui/material/Grow';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Paper from '@mui/material/Paper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
// import Popper from '@mui/material/Popper';


import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import StarBorder from '@mui/icons-material/StarBorder';
// import DraftsIcon from '@mui/icons-material/Drafts';
import List from '@mui/material/List';
import VideocamIcon from '@mui/icons-material/Videocam';
import MovieIcon from '@mui/icons-material/Movie';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Blog from '@/Components/Blog';
import { LayTTCumrap, LayTTGhe, LayTTLoaiphim, LayTTPhim, LayTTRap_idcumrap, LayTTSuatchieu, layTTChieu } from '@/service/userService';
import QLCumrap from "@/Components/QuanLy/QLCumrap";
import QLGhe from "@/Components/QuanLy/QLGhe";
import QLRap from "@/Components/QuanLy/QLRap";
import QLPhim from "@/Components/QuanLy/QLPhim";
import QLLoaiphim from "@/Components/QuanLy/QLLoaiphim";
import QLSuatchieu from "@/Components/QuanLy/QLSuatchieu";
import QLChieu from "@/Components/QuanLy/QLChieu";
import QLDoan from "@/Components/QuanLy/QLKhuyenmai";
import QLKhachhang from "@/Components/QuanLy/QLKhachhang";
import QLDichvu from "@/Components/QuanLy/QLDichvu";
import QLKhuyenmai from "@/Components/QuanLy/QLKhuyenmai";


const Quanly = () => {
  interface Cumrap {
    id: number;
    ten_tttt: string;
    diachi: string;
  }
  interface Ghe {
    id: number;
    maGhe: string;
    loaiGhe: string;
  }
  interface Rap {
    id: number;
    ten_rap: string;
    slghe: number;
    id_cumrap: number;
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
    ngaychieu: string;
    quocgia: string;
    tomtat: string;
    nsx: string;
    trangthai: string;
  }
  interface Loaiphim {
    id: number;
    tenloai: string;

  }
  interface Suatchieu {
    id: number;
    giobatdau: string;
    gioketthuc: string;
  }
  interface Chieu {
    id: number;
    ngaychieu: string;
    giave: number;
    id_rap: number;
    id_phim: number;
    id_suatchieu: number;


  }

  const [value, setValue] = useState('1');
  const [openP, setOpenP] = useState(false);
  const [openC, setOpenC] = useState(false);
  const [openL, setOpenL] = useState(false);

  const [option, setOption] = useState(0);
  const [cumrap, setCumrap] = useState<Cumrap[]>([]);
  const [ghe, setGhe] = useState<Ghe[]>([]);
  const [rap, setRap] = useState<Rap[]>([]);
  const [phim, setPhim] = useState<Phim[]>([]);
  const [loaiphim, setLoaiphim] = useState<Loaiphim[]>([]);
  const [suatchieu, setSuatchieu] = useState<Suatchieu[]>([]);
  const [chieu, setChieu] = useState<Chieu[]>([]);



  const [tenTTTT, setTenTTTT] = useState('');
  const [diachi, setDiachi] = useState('');


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClickPhim = () => {
    setOpenP(!openP);
  };
  const handleClickPhongchieu = () => {
    setOpenC(!openC);
  };
  const handleClickLichchieu = () => {
    setOpenL(!openL);
  };


  useEffect(() => {
    const handleLayTTCumrap = async () => {
      try {
        const params = {
          key: 'ALL',
        };
        // console.log("searchdate", params);
        const response = await LayTTCumrap(params);
        const res: Cumrap[] = response.cumraps;
        // console.log("check api searchdate ghe: ", response);
        // console.log("length", res.length);
        setCumrap(res);
        // console.log(res.length)

      } catch (error) {
        console.log(error);
      }
    }

    const handleLayTTChieu = async () => {
      try {
        const params = {
          ngaychieu: 'ALL',
          id_phim: 'ALL',
          id_rap: 'ALL'

        };
        // console.log("searchdate", params);
        const response = await layTTChieu(params);
        const res: Chieu[] = response.ttchieu;
        console.log("check api searchdate chieu: ", response);
        // console.log("length", res.length);
        setChieu(res);
        // console.log(res.length)


      } catch (error) {
        console.log(error);
      }
    }

    const handleLayTTGhe = async () => {
      try {
        const params = {
          key: 'ALL',
        };
        // console.log("searchdate", params);
        const response = await LayTTGhe(params);
        const res: Ghe[] = response.ghes;
        // console.log("check api searchdate ghe: ", response);
        // console.log("length", res.length);
        setGhe(res);
        // console.log(res.length)

      } catch (error) {
        console.log(error);
      }
    }
    const handleLayTTLoaiphim = async () => {
      try {
        const params = {
          id: 'ALL',
        };
        // console.log("searchdate", params);
        const response = await LayTTLoaiphim(params);
        const res: Loaiphim[] = response.loaiphims;
        // console.log("check api searchdate ghe: ", response);
        // console.log("length", res.length);
        setLoaiphim(res);
        // console.log(res.length)

      } catch (error) {
        console.log(error);
      }
    }
    const handleLayTTRap = async () => {
      try {
        const params = {
          key: 'ALL',
        };
        // console.log("searchdate", params);
        const response = await LayTTRap_idcumrap(params);
        const res: Rap[] = response.raps;
        // console.log("check api searchdate ghe: ", response);
        // console.log("length", res.length);
        setRap(res);

      } catch (error) {
        console.log(error);
      }
    }
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
    const handleLayTTSuatchieu = async () => {
      try {
        const params = {
          key: 'ALL',
        };
        // console.log("searchdate", params);
        const response = await LayTTSuatchieu(params);
        const res: Suatchieu[] = response.suatchieus;
        // console.log("check api searchdate ghe: ", response);
        // console.log("length", res.length);
        setSuatchieu(res);

      } catch (error) {
        console.log(error);
      }
    }

    handleLayTTCumrap()
    handleLayTTGhe()
    handleLayTTRap()
    handleLayTTPhim()
    handleLayTTLoaiphim()
    handleLayTTSuatchieu()
    handleLayTTChieu()
  }, [])


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* <Tab label=" Rạp" value="1" /> */}

            <Tab label="Rạp" value="1" />
            <Tab label="Khách hàng" value="2" />
            <Tab label="Dịch vụ" value="3" />
            <Tab label="Nhân Viên" value="4" />
            <Tab label="Doanh Thu" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="flex " >
            <div className="w-2/12 uppercase text-xl space-y-5 border-r-2">
              <ListItemButton
                className={`           
                ${option == 1 ? 'text-blue-600' : ''} `}
                onClick={() => setOption(1)}>

                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Cụm rap" />
              </ListItemButton>

              <ListItemButton
                onClick={handleClickPhongchieu}>
                <ListItemIcon>
                  <VideocamIcon />
                </ListItemIcon>
                <ListItemText
                  // onClick={() => setOption(2)}
                  primary="Phòng chiếu" />
                {openC ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>
              <Collapse in={openC} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}
                    className={`${option == 2 ? 'text-blue-600' : ''} `}
                    onClick={() => setOption(2)}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText primary="Rạp" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}
                    className={`${option == 3 ? 'text-blue-600' : ''} `}
                    onClick={() => setOption(3)} >
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText primary="Ghế" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton onClick={handleClickPhim}>
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Phim" />
                {openP ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

              <Collapse in={openP} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}
                    className={`${option == 4 ? 'text-blue-600' : ''} `}
                    onClick={() => setOption(4)}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText primary="Loại phim" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}
                    className={`${option == 5 ? 'text-blue-600' : ''} `}
                    onClick={() => setOption(5)}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText primary="Phim" />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                onClick={handleClickLichchieu}>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText
                  // onClick={() => setOption(5)} 
                  primary="Lịch chiếu" />
                {openL ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

              <Collapse in={openL} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}
                    className={`${option == 6 ? 'text-blue-600' : ''} `}
                    onClick={() => setOption(6)}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText primary="Suất chiếu" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}
                    className={`${option == 7 ? 'text-blue-600' : ''} `}
                    onClick={() => setOption(7)}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText primary="Chiếu" />
                  </ListItemButton>
                </List>
              </Collapse>
            </div>
            {option == 1 ? (
              <div className="w-10/12 m-5">

                <QLCumrap  />

              </div>
            ) : null}
            {option == 2 ? (
              <div className="w-10/12 m-5">

                <QLRap />

              </div>
            ) : null}
            {option == 3 ? (
              <div className="w-10/12 m-5">

                <QLGhe />

              </div>
            ) : null}
            {option == 4 ? (
              <div className="w-10/12 m-5">
                <QLLoaiphim  />

              </div>
            ) : null}
            {option == 5 ? (
              <div className="w-10/12 m-5">

                <QLPhim phimP={undefined} loaiphimP={undefined}  />

              </div>
            ) : null}
            {option == 6 ? (
              <div className="w-10/12 m-5">

                <QLSuatchieu />

              </div>
            ) : null}
            {option == 7 ? (
              <div className="w-10/12 m-5">

                <QLChieu  />
                {/* <QLDoan /> */}
              </div>
            ) : null}
          </div>
        </TabPanel>
        <TabPanel value="2">

          <QLKhachhang /></TabPanel>
        <TabPanel value="3">
          <div className="flex " >
            <div className="w-2/12 uppercase text-xl space-y-5 border-r-2">
              <ListItemButton
                className={`           
                ${option == 8 ? 'text-blue-600' : ''} `}
                onClick={() => setOption(8)}>

                <ListItemIcon>
                  <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary="Dịch vụ" />
              </ListItemButton>
              <ListItemButton
                className={`           
                ${option == 9 ? 'text-blue-600' : ''} `}
                onClick={() => setOption(9)}>

                <ListItemIcon>
                  {/* <LocationOnIcon /> */}
                </ListItemIcon>
                <ListItemText primary="Khuyến mãi" />
              </ListItemButton>
            </div>
            {
              option === 8 ? <QLDichvu /> : null
            }
                        {
              option === 9 ? <QLKhuyenmai /> : null
            }
          </div>
        </TabPanel>
      </TabContext>
    </Box >
  );
}
export default Quanly;