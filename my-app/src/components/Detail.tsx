import React from "react";
import { useParams } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    image: string;
    departureTime: string;
    arrivalTime: string;
    price: string;
    discount: string;
    availableSeats: number;
    description: string;
}

const Detail: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const product: Product = {
        id: Number(productId),
        name: "Hai Phong Travel (Dat Cang)",
        image: "/qrcode.png",
        departureTime: "19:00 Ha Noi",
        arrivalTime: "20:30 Hai Phong",
        price: "230.000d",
        discount: "Giam 10%",
        availableSeats: 11,
        description: "KHONG CAN THANH TOAN TRUOC",
    };

    return (
        <>
            <div className="flex justify-around mt-8">
                <div className="flex flex-col gap-2">
                    <div className="text-md font-bold">Sap Xep</div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="">Mac dinh</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="">Gio di som nhat</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="">Gio di muon nhat</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="">Danh gia cao nhat</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="">Gia tang nhat</label>
                    </div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="">Gia giam nhat</label>
                    </div>
                </div>
                <div className="flex justify-around">
                    <div>
                        <img src={product.image} width={80} height={80} alt="" />
                        <div>
                            <p className="text-black font-bold">{product.name}</p>
                            <div className="flex flex-col gap-4 mt-4">
                                <div>{product.departureTime}</div>
                                <div>{product.arrivalTime}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-8">
                        <div className="text-blue-500 font-bold flex justify-end">
                            Từ {product.price}
                        </div>
                        <div className="flex justify-end mb-2">
                            <div className="rounded-md border  flex items-center justify-center w-40 bg-gray-300">
                                {product.discount}
                            </div>
                        </div>
                        <span className="text-sm text-gray-500 flex justify-end">
                            Còn trong {product.availableSeats} chỗ
                        </span>
                        <div className="flex justify-end">
                            <button className="bg-yellow-300 rounded-sm text-black flex justify-center w-40">
                                Chọn tuyến
                            </button>
                        </div>
                        <div className="text-xs font-bold">{product.description}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detail;
