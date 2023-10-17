import { useEffect, useState } from "react";


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
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
import { LayTTCumrap } from '@/service/userService';

const Quanly = () => {
  interface Cumrap {
    id: number;
    ten_tttt: string;
    diachi: string;
  }
  const [value, setValue] = useState('1');
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(0);
  const [cumrap, setCumrap] = useState<Cumrap[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleClick = () => {
    setOpen(!open);
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
    handleLayTTCumrap()
  }, [])


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* <Tab label=" Rạp" value="1" /> */}

            <Tab label="Rạp" value="1" />
            <Tab label="Khách hàng" value="2" />
            <Tab label="Khuyến mãi" value="3" />
            <Tab label="Nhân Viên" value="4" />
            <Tab label="Doanh Thu" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="flex " >
            <div className="w-2/12 border-2 border-green-300 uppercase text-xl space-y-5">
              <ListItemButton>
                <ListItemIcon>
                  <VideocamIcon />
                </ListItemIcon>
                <ListItemText onClick={() => setOption(1)} primary="Cụm rap" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <VideocamIcon />
                </ListItemIcon>
                <ListItemText onClick={() => setOption(2)} primary="Phòng chiếu" />
              </ListItemButton>

              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Phim" />
                {open ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText onClick={() => setOption(3)} primary="Phim đang chiếu" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText onClick={() => setOption(4)} primary="Phim sắp chiếu" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton >
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText onClick={() => setOption(5)} primary="Lịch chiếu" />
              </ListItemButton>
            </div>
            <div className="w-10/12 border-2 border-red-300">
              {option == 1 ? (
                <div>
                  <div className="p-2">
                    <div >
                      <p>Tên trung tâm thương mại</p>
                      <input placeholder="" className="w-[90%] border-2 border-gray-500 outline-none"
                      // onChange={(event) => setTenphim(event.target.value)}
                      ></input>
                    </div>
                    <div>
                      <p>Địa chỉ</p>
                      <input placeholder="" className="w-[90%] border-2 border-gray-500"
                      // onChange={(event) => setTenphim(event.target.value)}
                      ></input>
                    </div>
                  </div>
                  <table className=" border-separate border border-slate-400 w-full  ">
                    <thead>
                      <tr>
                        {/* <th className="border border-slate-300">#</th> */}
                        <th className="border border-slate-300">#</th>
                        {/* <th className="border border-slate-300">ID</th> */}
                        <th className="border border-slate-300">Tên trung tâm thương mại</th>
                        <th className="border border-slate-300">Địa chỉ</th>
                        {/* <th className="border border-slate-300">Chẩn đoán</th> */}
                        {/* <th className="border border-slate-300">Đơn thuốc</th> */}
                        {/* <th className="border border-slate-300">Kết quả CLS</th> */}
                        {/* <th className="border border-slate-300">{sdt}</th> */}

                      </tr>
                    </thead>
                    <tbody>
                      {cumrap.map((item) => (
                        <>
                          <tr key={item.id}>
                            {/* <td className="border border-slate-300 text-center">{item.id}</td> */}
                            <td className="border border-slate-300 pl-5">{item.id}</td>
                            <td className="border border-slate-300 pl-5">{item.ten_tttt}</td>
                            <td className="border border-slate-300 pl-5">{item.diachi}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : ''}
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2"><Blog /></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
export default Quanly;