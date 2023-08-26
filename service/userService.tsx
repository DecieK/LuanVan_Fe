// import fetch from "isomorphic-unfetch";
import axios from "axios";

// export async function AllUser_API() {
//   const response = await fetch("http://localhost:8080/api/get-all-users");
//   const data = await response.json();
//   return data;
// }


// export async function SearchPhone1(params: { key: string }): Promise<any> {
//   const { key } = params;
//   const response = await fetch(
//     // `http://localhost:8080/clinics/search?keyword=${key}`
//     `http://localhost:8080/api/get-history?SDT=${key}`
//   );
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

