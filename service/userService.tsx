import axios from "axios";

export async function DangKy_KH(params: {
  hten_KH: string;
  Ngaysinh: string;
  gt_KH: string;
  sdt_KH: string;
  cccd_KH: string;
  email_KH: string;
  diachi_KH: string;
  // taikhoan_KH: string;
  matkhau_KH: string;
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/Dangky`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
interface DSDichVu {
  id: number,
  ten: string,
  anhminhhoa: string,
  loai: string,
  mota: string,
  gia: number,
  size: string,
  sl: number
}
export async function Datve(params: {
  hten_KH: string;
  httt: string;
  tongtien: number;
  soluongghe: number;
  ngaymuave: Date;
  id_KH: number;
  id_ghe: Array<number>
  id_chieu: number;
  id_suatchieu: number;
  id_rap: number;
  id_cumrap: number;
  id_KM: number;
  id_NV: number;
  id_doan: Array<DSDichVu>;
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/Datve`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}


export async function CapnhatTTve(params: {
  id: number;
  hten_KH: string;
  httt: string;
  tongtien: number;
  soluongghe: number;
  ngaymuave: Date;
  id_KH: number;
  id_ghe: Array<number>
  id_chieu: number;
  id_suatchieu: number;
  id_rap: number;
  id_cumrap: number;
  id_KM: number;
  id_NV: number;
  id_doan: Array<DSDichVu>;
  macode: string;
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/CapnhatTTve`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}


export async function LayTTchitietve(params: { id_ve: any }): Promise<any> {
  const { id_ve } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTChitietve?keyword=${id_ve}`
  );
  const data = await response.json();
  return data;
}
export async function LayTTGhe(params: { key: any }): Promise<any> {
  const { key } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTGhe?keyword=${key}`
  );
  const data = await response.json();
  return data;
}
export async function LayTTGhe_idrap(params: { id_rap: any }): Promise<any> {
  const { id_rap } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTGhetheoIdrap?id_rap=${id_rap}`
  );
  const data = await response.json();
  return data;
}

// export async function layTTChieu(params: { id_rap: number, id_phim: number,id_suatchieu: number}): Promise<any> {
//   const { id_rap,id_phim,id_suatchieu } = params;
//   const response = await fetch(
//     `http://localhost:8080/api/TTChieu?keyword=${id_rap & id_phim & id_suatchieu }`
//   );
//   const data = await response.json();
//   return data;
// }


export async function layTTChieu(params: {
  ngaychieu: any;
  id_phim: any;
  id_rap: any;


}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/TTChieu`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function LayTTKM(params: { key: any }): Promise<any> {
  const { key } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTKM?keyword=${key}`
  );
  const data = await response.json();
  return data;
}
export async function LayTTDoan(params: { key: any }): Promise<any> {
  const { key } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTDoan?keyword=${key}`
  );
  const data = await response.json();
  return data;
}


export async function TaoTTPhim(params: {
  id_suatchieu: number;
  id_rap: number;
  id_phim: number;

}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/uploadimage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function Themttphim(params: {
  Tenphim: string;
  Dieukien: number;
  Poster: string,
  Trailer: string,
  Dienvien: string;
  Ngonngu: string;
  Quocgia: string;
  Tomtat: string;
  Daodien: string;
  Thoiluong: string;
  Ngaychieu: string;
  Nsx: string;
  Trangthai: string;
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/ThemTTPhim`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function LayTTPhim(params: { key: any }): Promise<any> {
  const { key } = params;
  const response = await fetch(
    `http://localhost:8080/api/LayTTPhim?keyword=${key}`
  );
  const data = await response.json();
  return data;
}

export async function handleTest(params: {
  File: any
  Filename: string,
  File_src: string,
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/upload`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function LayTTCumrap(params: { key: any }): Promise<any> {
  const { key } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTCumrap?keyword=${key}`
  );
  const data = await response.json();
  return data;
}

export async function LayTTSuatchieu(params: { key: any }): Promise<any> {
  const { key } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTSuatchieu?keyword=${key}`
  );
  const data = await response.json();
  return data;
}

export async function LayTTRap_idcumrap(params: { key: any }): Promise<any> {
  const { key } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTRap_idcumrap?keyword=${key}`
  );
  const data = await response.json();
  return data;
}
export async function LayTTve_idchieu(params: { id_chieu: any }): Promise<any> {
  const { id_chieu } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTVe_idchieu?id_chieu=${id_chieu}`
  );
  const data = await response.json();
  return data;
}

export async function LayTTLoaiphim(params: { id: any }): Promise<any> {
  const { id } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTLoaiphim?id=${id}`
  );
  const data = await response.json();
  return data;
}

export async function ThemTTCumrap(params: {
  tentttt: string,
  diachi: string,
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/ThemTTCumrap`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function SuaTTCumrap(params: {
  id: number,
  tentttt: string,
  diachi: string,
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/SuaTTCumrap`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function XoaTTCumrap(params: {
  id: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/XoaTTCumrap`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}



export async function ThemTTRap(params: {
  id_cr: number,
  tenrap: string,
  slg: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/ThemTTRap`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
export async function SuaTTRap(params: {
  id: number,
  id_cr: number,
  tenrap: string,
  slg: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/SuaTTRap`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function XoaTTRap(params: {
  id: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/XoaTTRap`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}


export async function ThemTTGhe(params: {
  idr: number,
  maghe: string,
  loaighe: string
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/ThemTTGhe`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
export async function SuaTTGhe(params: {
  id: number,
  idr: number,
  maghe: string,
  loaighe: string
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/SuaTTGhe`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function XoaTTGhe(params: {
  id: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/XoaTTGhe`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}



export async function ThemTTLoaiphim(params: {
  tenloai: string
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/ThemTTLoaiphim`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
export async function SuaTTLoaiphim(params: {
  id: number,
  tenloai: string

}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/SuaTTLoaiphim`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function XoaTTLoaiphim(params: {
  id: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/XoaTTLoaiphim`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}



export async function ThemTTSuatchieu(params: {
  giobd: string,
  giokt: string
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/ThemTTSuatchieu`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
export async function SuaTTSuatchieu(params: {
  id: number,
  giobd: string,
  giokt: string


}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/SuaTTSuatchieu`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function XoaTTSuatchieu(params: {
  id: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/XoaTTSuatchieu`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function ThemTTChieu(params: {
 ngaychieu: string,
  giave: number,
  idr: number,
  idp: number,
  idsc: number

}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/ThemTTChieu`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
export async function SuaTTChieu(params: {
  id: number,
  ngaychieu: string,
  giave: number,
  idr: number,
  idp: number,
  idsc: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/SuaTTChieu`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function XoaTTChieu(params: {
  id: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/XoaTTChieu`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function ThemTTDoan(params: {
  Ten : string
  Anhminhhoa : string
  Loai : string
  Mota : string
  Gia : number
  Size : string
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/ThemTTDoan`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
export async function SuaTTDichvu(params: {
  id: number,
  Ten : string
  Anhminhhoa : string
  Loai : string
  Mota : string
  Gia : number
  Size : string
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/SuaTTDoan`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function XoaTTDichvu(params: {
  id: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/XoaTTDoan`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function LayTTKhachhang(params: { Email_KH: any }): Promise<any> {
  const { Email_KH } = params;
  const response = await fetch(
    `http://localhost:8080/api/LayTTKhachhang?keyword=${Email_KH}`
  );
  const data = await response.json();
  return data;
}


export async function LayTTCTLoaiphim_idP(params: { id: any }): Promise<any> {
  const { id } = params;
  const response = await fetch(
    `http://localhost:8080/api/LayTTCTLoaiphim_idP?id=${id}`
  );
  const data = await response.json();
  return data;
}

export async function ThemTTkhuyenmai(params: {
  ten: string,
  tile: number,
  mota: string,
  dieukien: number,
  thoigianbatdau: Date,
  thoigianketthuc: Date
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/ThemTTKhuyenmai`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
export async function SuaTTkhuyenmai(params: {
  id: number,
  ten: string,
  tile: number,
  mota: string,
  dieukien: number,
  thoigianbatdau: Date,
  thoigianketthuc: Date
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/SuaTTKhuyenmai`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function XoaTTkhuyenmai(params: {
  id: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/XoaTTKhuyenmai`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function LayTTNhanvien(params: { tenTK: any }): Promise<any> {
  const { tenTK } = params;
  const response = await fetch(
    `http://localhost:8080/api/LayTTNhanvien?keyword=${tenTK}`
  );
  const data = await response.json();
  return data;
}

export async function ThemTTNhanvien(params: {
   hten_nv: string;
   sdt_nv: string;
   ngaysinh_nv: Date
   tuoi_nv: number;
   diachi_nv: string;
   gioitinh_nv: string;
   cccd_nv: string;
   chucvu_nv : string;
   taikhoan_nv : string;
   matkhau_nv : string;
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/ThemTTNhanvien`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
export async function SuaTTNhanvien(params: {
  id: number,
  hten_nv: string;
  sdt_nv: string;
  ngaysinh_nv: Date
  tuoi_nv: number;
  diachi_nv: string;
  gioitinh_nv: string;
  cccd_nv: string;
  chucvu_nv : string;
  taikhoan_nv : string;
  matkhau_nv : string;
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/SuaTTNhanvien`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function XoaTTNhanvien(params: {
  id: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/XoaTTNhanvien`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

export async function VN_Query(params: {
  orderId: number
  transDate: string
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/order/querydr`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}

// export async function VNPay(params: { amount: number }): Promise<any> {
//   const { amount } = params;
//   const response = await fetch(
//     `http://localhost:8080/order/create_payment_url?keyword=${amount}`,
//   );
//   const data = await response.json();
//   return data;
// }

export async function LayTTVe_idKH(params: { id_kh: any }): Promise<any> {
  const { id_kh } = params;
  const response = await fetch(
    `http://localhost:8080/api/LayTTVe_idKH?keyword=${id_kh}`
  );
  const data = await response.json();
  return data;
}
export async function LayTTRap(params: { id: any }): Promise<any> {
  const { id } = params;
  const response = await fetch(
    `http://localhost:8080/api/LayTTRap?keyword=${id}`
  );
  const data = await response.json();
  return data;
}
export async function LayTTChieu_idc(params: { id: any }): Promise<any> {
  const { id } = params;
  const response = await fetch(
    `http://localhost:8080/api/LayTTChieu_idc?keyword=${id}`
  );
  const data = await response.json();
  return data;
}
export async function LayTTDoan_idve(params: { id_ve: any }): Promise<any> {
  const { id_ve } = params;
  const response = await fetch(
    `http://localhost:8080/api/LayTTDoan_idve?keyword=${id_ve}`
  );
  const data = await response.json();
  return data;
}
export async function LayTTKhuyenmai(params: { id: any }): Promise<any> {
  const { id} = params;
  const response = await fetch(
    `http://localhost:8080/api/LayTTKhuyenmai?keyword=${id}`
  );
  const data = await response.json();
  return data;
}

export async function handleXoaCTDoan(params: {
  id_ve: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/handleXoaCTDoan`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
export async function handleXoaCTVe(params: {
  id_ve: number
}): Promise<any> {
  const response = await fetch(
    `http://localhost:8080/api/handleXoaCTVe`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}