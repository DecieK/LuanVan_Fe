import React, { useCallback, useEffect, useState } from 'react';

const App = () => {


    return (
        <div >
            <div className='w-7/12 mt-10 m-auto border-2 border-gray-200'>
                <div className='bg-red-500 w-full h-14 uppercase pt-3 font-semibold text-2xl text-center'>người vợ cuối cùng</div>
                <div className='grid grid-cols-7 mt-5 gap-4 m-3'>
                    <button className='col-span-1 border-red-400 border-2 rounded-md'>
                        <p className='text-lg h-12 pt-2'>Chủ nhật</p>
                        <p className='bg-red-400 text-2xl h-16 pt-4'>05/11</p>
                    </button>
                    <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                        <p className='text-lg h-12 pt-2'>Thứ 2</p>
                        <p className='bg-gray-300 text-2xl h-16 pt-4'>06/11</p>
                    </button>
                    <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                        <p className='text-lg h-12 pt-2'>Thứ 3</p>
                        <p className='bg-gray-300 text-2xl h-16 pt-4'>07/11</p>
                    </button>
                    <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                        <p className='text-lg h-12 pt-2'>Thứ 4</p>
                        <p className='bg-gray-300 text-2xl h-16 pt-4'>08/11</p>
                    </button>
                    <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                        <p className='text-lg h-12 pt-2'>Thứ 5</p>
                        <p className='bg-gray-300 text-2xl h-16 pt-4'>09/11</p>
                    </button>
                    <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                        <p className='text-lg h-12 pt-2'>Thứ 6</p>
                        <p className='bg-gray-300 text-2xl h-16 pt-4'>10/11</p>
                    </button>
                    <button className='col-span-1 border-gray-300 border-2 rounded-md'>
                        <p className='text-lg h-12 pt-2'>Thứ 7</p>
                        <p className='bg-gray-300 text-2xl h-16 pt-4'>11/11</p>
                    </button>
                </div>
                <div className='grid grid-cols-3 mt-10 place-items-center'>
                    <button className='col-span-1 bg-red-400 h-20 w-40 rounded-md'>CGV Vincom Xuân Khánh</button>
                    <button className='col-span-1 bg-gray-300 h-20 w-40 rounded-md'>CGV Vincom Hùng Vương</button>
                    <button className='col-span-1 bg-gray-300 h-20 w-40 rounded-md'>CGV Sense City</button>
                </div>
                <div className='grid grid-cols-4 mt-8 gap-4 place-items-center mb-10'>
                    <button className='bg-gray-300 rounded-md h-10 w-32'>09:00 ~ 11:00</button>
                    <button className='bg-gray-300 rounded-md h-10 w-32'>09:00 ~ 11:00</button>
                    <button className='bg-gray-300 rounded-md h-10 w-32'>09:00 ~ 11:00</button>
                    <button className='bg-red-400 rounded-md h-10 w-32'>09:00 ~ 11:00</button>
                    <button className='bg-gray-300 rounded-md h-10 w-32'>09:00 ~ 11:00</button>
                    <button className='bg-gray-300 rounded-md h-10 w-32'>09:00 ~ 11:00</button>
                    <button className='bg-gray-300 rounded-md h-10 w-32'>09:00 ~ 11:00</button>
                    <button className='bg-gray-300 rounded-md h-10 w-32'>09:00 ~ 11:00</button>
                    <button className='bg-gray-300 rounded-md h-10 w-32'>09:00 ~ 11:00</button>
                    <button className='bg-gray-300 rounded-md h-10 w-32'>09:00 ~ 11:00</button>

                </div>
            </div>
            <div className='w-10/12 mt-10 m-auto border-2 border-gray-200'>
                <div className='bg-red-500 w-full h-14 uppercase pt-3 font-semibold text-2xl text-center'>dịch vụ</div>
                <div className='grid grid-cols-2 m-3 gap-3'>
                    <div className='col-span-1'>
                        <div className='flex space-x-4'>
                            <div className="h-44  w-36 bg-cover bg-center bg-[url('../public/DA3.png')] rounded-xl mt-4 "></div>
                            <div className=''>
                                <p className='uppercase font-semibold text-xl'>MILO COMBO 2023</p>
                                <div className='list-inside text-gray-600'>
                                    <li className=''>01 ly nhân vật Peanuts (kèm nước)</li>
                                    <li className=''>Nhận ngay trong ngày xong phim</li>
                                    <li className=''>Thêm 39,000đ nhận ngay 1 bắp ngọt lớn</li>
                                    <li className=''>Mẫu ly phụ thuộc vào số lượng của rạp</li>
                                    <li className=''>Giá: 199.000 ₫</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='flex space-x-4'>
                            <div className="h-44  w-36 bg-cover bg-center bg-[url('../public/DA3.png')] rounded-xl mt-4 "></div>
                            <div className=''>
                                <p className='uppercase font-semibold text-xl'>MILO COMBO 2023</p>
                                <div className='list-inside text-gray-600'>
                                    <li className=''>01 ly nhân vật Peanuts (kèm nước)</li>
                                    <li className=''>Nhận ngay trong ngày xong phim</li>
                                    <li className=''>Thêm 39,000đ nhận ngay 1 bắp ngọt lớn</li>
                                    <li className=''>Mẫu ly phụ thuộc vào số lượng của rạp</li>
                                    <li className=''>Giá: 199.000 ₫</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='flex space-x-4'>
                            <div className="h-44  w-36 bg-cover bg-center bg-[url('../public/DA3.png')] rounded-xl mt-4 "></div>
                            <div className=''>
                                <p className='uppercase font-semibold text-xl'>MILO COMBO 2023</p>
                                <div className='list-inside text-gray-600'>
                                    <li className=''>01 ly nhân vật Peanuts (kèm nước)</li>
                                    <li className=''>Nhận ngay trong ngày xong phim</li>
                                    <li className=''>Thêm 39,000đ nhận ngay 1 bắp ngọt lớn</li>
                                    <li className=''>Mẫu ly phụ thuộc vào số lượng của rạp</li>
                                    <li className=''>Giá: 199.000 ₫</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='flex space-x-4'>
                            <div className="h-44  w-36 bg-cover bg-center bg-[url('../public/DA3.png')] rounded-xl mt-4 "></div>
                            <div className=''>
                                <p className='uppercase font-semibold text-xl'>MILO COMBO 2023</p>
                                <div className='list-inside text-gray-600'>
                                    <li className=''>01 ly nhân vật Peanuts (kèm nước)</li>
                                    <li className=''>Nhận ngay trong ngày xong phim</li>
                                    <li className=''>Thêm 39,000đ nhận ngay 1 bắp ngọt lớn</li>
                                    <li className=''>Mẫu ly phụ thuộc vào số lượng của rạp</li>
                                    <li className=''>Giá: 199.000 ₫</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-7 mb-7'>
                    <button className='bg-red-400 uppercase w-32 h-10 hover:bg-red-500 rounded-md'>xác nhận</button>
                </div>
            </div>
        </div>
    );
}

export default App;
