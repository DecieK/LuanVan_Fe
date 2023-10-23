import ReactDOM from "react-dom";
import styled from "styled-components";
// import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, button } from "@material-tailwind/react";
import { LayTTCumrap, LayTTRap_idcumrap, LayTTSuatchieu, layTTChieu } from "@/service/userService";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";



type Props = {
  //   fullname: string;
  //   name_clinic: string;
  //   iddv: number;
  show: any;
  onClose: any;
  id_phim: number;
};
// export type thongtinbenhnhan = {
//   id: number;
//   Ho: string;
//   Ten: string;
//   Dienthoai: string;
//   Gioitinh: string;
//   Diachi: string;
//   Hovaten: string;
// };
const Modal = ({ show, onClose, id_phim }: Props) => {
  interface Chieu {
    id: number;
    ngaychieu: string;
    giave: number;
    id_rap: number;
    id_suatchieu: number;
    id_phim: number;
  }
  interface Cumrap {
    id: number;
    ten_tttt: string;
    diachi: string;
  }
  interface Suatchieu {
    id: number;
    giobatdau: string;
    gioketthuc: string;
  }

  interface Rap {
    id: number;
    ten_rap: string;
    slghe: number;
    id_cumrap: number;
  }

  const [Ngaysinh, setNgaysinh] = useState<any>()
  const [isBrowser, setIsBrowser] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [chieu, setChieu] = useState<Chieu[]>([]);
  const [cumrap, setCumrap] = useState<Cumrap[]>([]);
  const [suatchieu, setSuatchieu] = useState<Suatchieu[]>([]);
  const [rap, setRap] = useState<Rap[]>([]);
  const [idSuatchieu, setIdSuatchieu] = useState(Number);
  const [idcumrap, setIdcumrap] = useState(Number);
  const [id_rap, setIdRap] = useState(Number);
  const [ngaychieu, setNgaychieu] = useState(Date);

  const [chieus, setDschieus] = useState([
    {
      id: 0,
      ngaychieu: "",
      giave: 0,
      id_rap: 0,
      id_suatchieu: 0,
      id_phim: 0
    },
  ])
  const [items, setDsitems] = useState([
    {
      id_rap: 0,
      ngaychieu: "",
      // giave: 0,
      id_phim: 0,
      id_suatchieu: 0,
      giobatdau: "",
      gioketthuc: "",
      slghe: 0,
      slghedadat: 0

    },
  ])
  const [suatchieus, setDssuatchieus] = useState([
    {
      // id: Number,
      // giobatdau: String,
      // gioketthuc: String
      id: 0,
      giobatdau: "",
      gioketthuc: ""
    },
  ])
  // chieus.splice(0, chieus.length);
  // suatchieus.splice(0, suatchieus.length);
  const handlePushTTchieu = async (id: number, ngaychieu: string, giave: number, id_r: number, id_suatchieu: number, id_phim: number) => {
    const isFound = chieus.some(element => {
      if (element.id === id) {
        return true;
      }

      return false;
    });
    if (isFound === false) {
      chieus.push({
        id: id,
        ngaychieu: ngaychieu,
        giave: giave,
        id_rap: id_r,
        id_suatchieu: id_suatchieu,
        id_phim: id_phim
      });
      // handleLayTTSuatchieu()

    }
  }

  const handleLayTTChieu = async (id_rap: number) => {
    // const key = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    // const keyfm = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    let res = await layTTChieu(
      {
        id_phim: id_phim,
        ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
        id_rap: id_rap
      });
    console.log("Thong tin bang Chieu", res)

    // try {
    const res1: Chieu[] = res.ttchieu;
    setChieu(res1)
    console.log(res1.length)
    res1.map((res1) => {
      console.log("gia", res1.giave)
      // const chieu = {
      //   id: res1.id,
      //   ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
      //   giave: res1.giave,
      //   id_rap: res1.id_rap,
      //   id_suatchieu: res1.id_suatchieu,
      //   id_phim: res1.id_phim
      // }
      // setDschieus([chieu, ...chieus])
      handlePushTTchieu(res1.id, res1.ngaychieu, res1.giave, res1.id_rap, res1.id_suatchieu, res1.id_suatchieu)
    })
    // } catch (error) {
    //   console.log(error);
    // }

    console.log("Thong tin bang chieus", chieus)

  }

  const deleteAllItems = () => {
    chieus.splice(0, chieus.length);
    // setDschieus([...chieus]); // Update the state with the modified array
  };

  const handleLayTTCumRap = async (id_cumrap: number) => {
    setIdcumrap(id_cumrap)
    deleteAllItems()
    setNgaychieu(startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate())
    //  if(id_cumrap !== idcumrap){
    try {
      const params = {
        key: id_cumrap,
      };
      // console.log("searchdate", params);
      const response = await LayTTRap_idcumrap(params);
      const res: Rap[] = response.raps;
      console.log("check api searchdate tat ca rap trong 1 cum rap: ", response);
      // console.log("length rap", res.length);
      setRap(res);
      res.map(async (res) => {
        // setIdRap(res.id)
        console.log("idp", id_phim)
        console.log("idr", res.id)

        let resChieu = await layTTChieu(
          {
            id_phim: id_phim,
            ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
            id_rap: res.id
          });
        
        const res1: Chieu[] = resChieu.ttchieu;
        console.log("asdassssssssssssss",resChieu.ttchieu)
        console.log("res1",res1)

        setChieu(res1)
        res1.map(async (res1) => {
          // setIdRap(res1.id_rap)
          suatchieus.splice(0, suatchieus.length);

          console.log("gia", res1.giave)      
                const params = {
                  key: res1.id_suatchieu
                };
                console.log("suatchieuparams", params);
                const response = await LayTTSuatchieu(params);
                const ressuatchieu: Suatchieu[] = response.suatchieus;
                console.log("check api searchdate Suatchieu: ", response);
                // console.log("length", res.length);
                setSuatchieu(ressuatchieu);

                ressuatchieu.map((res) => {
                  suatchieus.push({
                    id: res.id,
                    giobatdau: res.giobatdau,
                    gioketthuc: res.gioketthuc
                  });
                }) 
                console.log(ressuatchieu.length)
             
              
          // items.push({
          //   id_rap: res.id,
          //   ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
          //   // giave: 0,
          //   id_phim: id_phim,
          //   id_suatchieu: res1.id_suatchieu,
          //   giobatdau: '',
          //   gioketthuc: "",
          //   slghe: res.slghe,
          //   slghedadat: 0
          // });
          handlePushTTchieu(res1.id, res1.ngaychieu, res1.giave, res1.id_rap, res1.id_suatchieu, res1.id_suatchieu)
        })
        // handleLayTTChieu(res.id)
      })
      console.log("lengasdasdasth rap");
    } catch (error) {
      console.log(error);
    }
    console.log("chieuschieus2222", chieus)
  }
  const handleLayTTSuatchieu = async () => {
    suatchieus.splice(0, suatchieus.length);
    console.log("lengthchieus", chieus.length);
    chieus.map(async (item) => {
      try {
        const params = {
          // key: idSuatchieu,
          key: item.id
        };
        console.log("suatchieuparams", params);
        const response = await LayTTSuatchieu(params);
        const res: Suatchieu[] = response.suatchieus;
        console.log("check api searchdate Suatchieu: ", response);
        // console.log("length", res.length);
        setSuatchieu(res);
        res.map((res) => {
          suatchieus.push({
            id: res.id,
            giobatdau: res.giobatdau,
            gioketthuc: res.gioketthuc
          });
        })
        console.log(res.length)
      } catch (error) {
        console.log(error);
      }
    })
    // try {
    //   const params = {
    //     // key: idSuatchieu,
    //     key: 'ALL'
    //   };
    // console.log("searchdate", params);
    //   const response = await LayTTSuatchieu(params);
    //   const res: Suatchieu[] = response.suatchieus;
    //   // console.log("check api searchdate Suatchieu: ", response);
    //   console.log("length", res.length);
    //   setSuatchieu(res);
    //   res.map((res) => {
    //     const test = {
    //       text: res.giobatdau
    //     }
    //     setTests([test, ...tests])
    //   })
    //   // console.log(res.length)
    // } catch (error) {
    //   console.log(error);
    // }
  }
  const router = useRouter();

  const handleDatve = (id_sc: number) => {
    // console.log("suatchieu",suatchieus)
    // let idrr
    // suatchieus.map((item)=>{
    //   if(id_sc === item.id){
    //     idrr = item.
    //   }
    // })
    router.push({
      pathname: '/datve',
      query: { id_phim: id_phim, id_rap: id_sc, ngaychieu: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate()},

    })


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
 
    handleLayTTCumrap();
    setIsBrowser(true);
  }, [chieu, chieus, idSuatchieu, suatchieus]);

  const handleCloseClick = () => {
    onClose()
    console.log(onClose)
    console.log(show)

  }

  const modalContent = show ? (

    <StyledModalOverlay>
      { }
      <StyledModal className="  w-[500px]  rounded-lg ">
        <StyledModalHeader className=" bg-blue-300  ">
          <div className="flex text-xl p-2">
            <span className=" text-center uppercase w-full">
              Lịch chiếu CGV Cần
            </span>

            <button
              // href="#"
              className="rounded-full text-center h-7 w-7 bg-gray-300"
              onClick={handleCloseClick}
            >
              x
            </button>
          </div>
        </StyledModalHeader>
        {
          // title  && 
          (
            <StyledModal>
              {/* {title} */}
              {/* <div></div> */}
            </StyledModal>
          )}
        <StyledModalBody className="bg-gray-300 ">
          <div className="modal">
            <div className="flex pl-7">
              <DatePicker
                className=""
                // type="datetime"
                selected={startDate}
                // onChange={handlSearchLichkham}
                // onChange={(date: Date) => handleLayTTChieu(date)}
                onChange={(date: Date) => setStartDate(date)}
                // onChange={(date: Date) => handlSearchDate((date))}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            {
              cumrap.map((item, index) => {
                return (
                  <>
                    {/* <div key={index}> */}
                    <Button onClick={() => handleLayTTCumRap(item.id)} key={index} className="h-28 w-28 bg-slate-600 m-4">{item.ten_tttt}</Button>
                    {/* <Button className="h-28 w-28 bg-slate-600 m-4">Vincom HÙng Vương</Button> */}
                    {/* </div> */}
                  </>
                )
              })
            }


            {
              suatchieus.map((item, index) => {
                if (item.giobatdau !== '') {
                  return (
                    <>
                      {/* <div key={index}> */}
                      <Button onClick={()=>handleDatve(chieus[index].id_rap)} key={index} className="h-28 w-28 bg-slate-600 m-4">{item.giobatdau}~{item.gioketthuc} <br /> </Button>
                      {/* <Button className="h-28 w-28 bg-slate-600 m-4">Vincom HÙng Vương</Button> */}
                      {/* </div> */}
                    </>
                  )
                }
              })
            }
            <button
              // onClick={() => console.log("suatchieus", suatchieus)}
              onClick={() => handleLayTTSuatchieu()}
            >click</button>



            <button
              onClick={() => console.log("suatchieus", suatchieus)}
            // onClick={() => console.log("chieu", chieus)}
            >chieus</button>
          </div>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root') as HTMLElement
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 1px;
`;

const StyledModalHeader = styled.div`
  /* display: flex;
  justify-content: flex-end;
  font-size: 25px; */
`;

const StyledModal = styled.div`
  /* background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px; */
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;

// 1.có ngày,id phim
// 2.có idcumrap => tất cả id_rap trong cụm rạp đó
//  lay từng id_rap + ngày,id phim(buoc1) => idchieu
// 3. id chieu => id suatchieu