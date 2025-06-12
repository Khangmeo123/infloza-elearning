'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import demoImage1 from "@/assets/images/reason-1.png"
import demoImage2 from "@/assets/images/reason-2.png"
import demoImage3 from "@/assets/images/reason-3.png"
import demoImage4 from "@/assets/images/reason-4.png"

const ReasonInflozaElearning = () => {
    const features = [
        {
            id: 1,
            title: "Giảng viên uy tín",
            subtitle: "kinh nghiệm thực chiến",
            image: demoImage1,
            alt: "Giảng viên đang giảng dạy"
        },
        {
            id: 2,
            title: "Kiến thức chuyên sâu",
            subtitle: "cập nhật theo thị trường",
            image: demoImage2,
            alt: "Phân tích dữ liệu và biểu đồ"
        },
        {
            id: 3,
            title: "Thực hành thực tế",
            subtitle: "ứng dụng vào công việc",
            image: demoImage3,
            alt: "Nhóm làm việc thực tế"
        },
        {
            id: 4,
            title: "Tham gia cộng đồng",
            subtitle: "mở rộng kết nối",
            image: demoImage4,
            alt: "Cộng đồng học viên vui vẻ"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        Tại sao bạn nên học tại{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                            Infloza eLearing
                        </span>
                        ?
                    </h2>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="aspect-[4/4] overflow-hidden rounded-2xl ">
                                <Image
                                    src={feature.image}
                                    alt={feature.alt}
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    width={280}
                                    height={300}
                                />
                            </div>
                            <div className="text-center mt-3">
                                <h3 className="text-lg text-gray-800 ">
                                    {feature.title}
                                </h3>
                                <h3 className="text-lg text-gray-800 mb-2">
                                    {feature.subtitle}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Swiper View */}
                <div className="lg:hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet !bg-blue-500',
                            bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600',
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                            },
                        }}
                        className="relative pb-12"
                    >
                        {features.map((feature) => (
                            <SwiperSlide key={feature.id}>
                                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={feature.image}
                                            alt={feature.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {feature.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Custom Navigation Buttons */}
                        <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors duration-200">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ReasonInflozaElearning;