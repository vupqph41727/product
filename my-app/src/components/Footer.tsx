const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
                    <div>
                        <p className="font-medium text-gray-900">Tuyến đường</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Xe đi Buôn Mê Thuột từ Sài Gòn{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Xe đi Vũng Tàu từ Sài Gòn{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Xe đi Nha Trang từ Sài Gòn{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Xe đi Đà Lạt từ Sài Gòn{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Xe đi Sapa từ Hà Nội{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">Xe Limousine</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Xe Limousine đi Đà Lạt từ Sài Gòn{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Xe Limousine đi Vũng Tàu từ Sài Gòn{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Xe Limousine đi Nha Trang từ Sài Gòn{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">Tin tức</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Xe giường nằm Limousine – đỉnh cao mới của ngành xe khách{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe chất lượng cao{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Review xe limousine đi Đà Lạt: những câu hỏi thường gặp{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">Bến xe</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Bến xe Miền Đông{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Bến xe Trung tâm Đà Nẵng{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Bến xe Gia Lâm{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Bến xe Mỹ Đình{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">Hỗ trợ</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Hướng dẫn thanh toán{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Quy chế Vexere.com{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Chính sách bảo mật thông tin{" "}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 transition hover:opacity-75">
                                    {" "}
                                    Chính sách bảo mật thanh toán{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">Tải ứng dụng Vexere</p>
                        <img src="/qrcode.png" alt="" />
                    </div>
                </div>
                <p className="text-xs text-gray-500">
                    © 2022. Company Name. All rights reserved.
                </p>
            </div>
        </footer>

    )
}
export default Footer;