// import fetch from "isomorphic-unfetch";
import axios from "axios";

// export async function AllUser_API() {
//   const response = await fetch("http://localhost:8080/api/get-all-users");
//   const data = await response.json();
//   return data;
// }




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
  ngaymuave: string;
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

export async function LayTTchitietve(params: { id_ve: any }): Promise<any> {
  const { id_ve } = params;
  const response = await fetch(
    `http://localhost:8080/api/TTChitietve?keyword=${id_ve}`
  );
  const data = await response.json();
  return data;
}

