import axios from "axios";

export async function DangKy_KH(params: {
  hten_KH: string;
  Ngaysinh: string;
  gt_KH: string;
  sdt_KH: string;
  cccd_KH: string;
  email_KH: string;
  diachi_KH: string;
  taikhoan_KH: string;
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

export async function Datve(params: {
  hten_KH: string;
  httt: string;
  tongtien: number;
  soluongghe: number;
  ngaymuave: Date;
  id_KH: number;
  id_ghe: number;
  id_suatchieu: number;
  id_rap: number;
  id_cumrap: number;
  id_KM: number;
  id_NV: number;
  id_doan: number;
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

export async function LayTTchitietve(params: { id_ve: number }): Promise<any> {
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

// export async function layTTChieu(params: { id_rap: number, id_phim: number,id_suatchieu: number}): Promise<any> {
//   const { id_rap,id_phim,id_suatchieu } = params;
//   const response = await fetch(
//     `http://localhost:8080/api/TTChieu?keyword=${id_rap & id_phim & id_suatchieu }`
//   );
//   const data = await response.json();
//   return data;
// }


export async function layTTChieu(params: {
  ngaychieu: string;
  id_phim: number;
  id_rap: number;


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