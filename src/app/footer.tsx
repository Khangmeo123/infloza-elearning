import React from 'react';
import Link from 'next/link';
import facebook from "@/assets/images/facebook.png";
import linkedin from "@/assets/images/linkedin.png";
import tiktok from "@/assets/images/tiktok.png";
import Image from 'next/image';
const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo và mô tả */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">S</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">SKILLS BRIDGE</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Skills Bridge cung cấp các chương trình đào tạo giúp
                            cá khách hàng cá nhân và doanh nghiệp nâng cao kỹ
                            năng chuyên môn, kỹ năng lãnh đạo và xây dựng
                            doanh nghiệp thành công.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-3">

                            <Image
                                src={facebook}
                                alt="facebook"
                                className="object-contain hover:cursor-pointer rounded-[50%] "
                                width={40}
                                height={40}
                            />
                            <Image
                                src={linkedin}
                                alt="linkedin"
                                className="object-contain hover:cursor-pointer rounded-[50%]"
                                width={40}
                                height={40}
                            />
                            <Image
                                src={tiktok}
                                alt="tiktok"
                                className="object-contain hover:cursor-pointer rounded-sm"
                                width={40}
                                height={40}
                            />
                        </div>
                    </div>

                    {/* Giới thiệu */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Giới thiệu</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                                    Về Skills Bridge
                                </Link>
                            </li>
                            <li>
                                <Link href="/business-training" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                                    Đào tạo doanh nghiệp
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                                    Blog chia sẻ
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                                    Chính sách mua khóa học
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Liên hệ */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Liên hệ</h3>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
                                <span className="text-white text-xs">@</span>
                            </div>
                            <a
                                href="mailto:info@skillsbridge.vn"
                                className="text-gray-600 hover:text-teal-600 transition-colors text-sm"
                            >
                                info@skillsbridge.vn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Phần thông tin công ty */}
                <div className="mt-4 pt-4">
                    <div className="text-xs text-gray-500 space-y-1">
                        <p>© 2024 - Bản quyền của Công ty TNHH Skills Bridge</p>
                        <p>Địa chỉ: Số 14 Đường Thảo Điền, Phường Thảo Điền, Thành phố Thủ Đức, Thành phố Hồ Chí Minh</p>
                        <p>Mã số doanh nghiệp: 0317402205</p>
                        <p>Ngày cấp: 26/07/2022</p>
                        <p>Nơi cấp: Sở Kế Hoạch và Đầu Tư thành phố Hồ Chí Minh</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;