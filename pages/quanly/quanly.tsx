import { useEffect, useState } from "react";


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
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
import { LayTTCumrap } from '@/service/userService';
import QLCumrap from "@/Components/QuanLy/QLCumrap";

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
  const [tenTTTT, setTenTTTT] = useState('');
  const [diachi, setDiachi] = useState('');


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  const handleSuaThongTin = () => {
    // setTenTTTT()
  }



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
            <div className="w-2/12 uppercase text-xl space-y-5 border-r-2">
              <ListItemButton
                className={`           
                ${option == 1 ? 'text-blue-600' : ''} `}>

                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText onClick={() => setOption(1)} primary="Cụm rap" />
              </ListItemButton>

              <ListItemButton className={`           
                ${option == 2 ? 'text-blue-600' : ''} `}>
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
                  <ListItemButton sx={{ pl: 4 }}
                    className={`${option == 3 ? 'text-blue-600' : ''} `}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText onClick={() => setOption(3)} primary="Phim đang chiếu" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}
                    className={`${option == 4 ? 'text-blue-600' : ''} `}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText onClick={() => setOption(4)} primary="Phim sắp chiếu" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton className={`${option == 5 ? 'text-blue-600' : ''} `}> 
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText onClick={() => setOption(5)} primary="Lịch chiếu" />
              </ListItemButton>
            </div>
            <div className="w-10/12 m-5">
              {option == 1 ? (
                <QLCumrap cumrapP={cumrap} />
              ) : ''}
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2"><Blog /></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box >
  );
}
export default Quanly;