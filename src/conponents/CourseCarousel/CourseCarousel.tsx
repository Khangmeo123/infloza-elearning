'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import demoImage1 from "@/assets/images/ldtm.png"
import demoImage2 from "@/assets/images/genAI.png"
import demoImage3 from "@/assets/images/x3speed.png"
import demoImage4 from "@/assets/images/demo-course.png"
import demoImage5 from "@/assets/images/genAI.png"

const courses = [
    { id: 1, title: 'Lãnh Đạo Thông Minh ', image: demoImage1 },
    { id: 2, title: 'GenAI for Office', image: demoImage2 },
    { id: 3, title: 'AI Productivity', image: demoImage3 },
    { id: 4, title: 'AI for Decision Making', image: demoImage4 },
    { id: 5, title: 'Tư duy ngược', image: demoImage5 },
];

export default function CourseCarousel() {
    return (
        <section className="bg-[#e6f8f9]">
            <div className="max-w-[1200px] mx-auto px-4 py-4 pt-10">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        Các khóa học nổi bật tại{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500">
                            Infloza eLearing
                        </span>

                    </h2>
                </div>

                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    breakpoints={{
                        // breakpoints là các mốc chiều rộng màn hình (px) để thay đổi số lượng slide hiển thị
                        640: { slidesPerView: 1.5 },    // >= 640px (điện thoại)
                        768: { slidesPerView: 2.2 },    // >= 768px (tablet)
                        1024: { slidesPerView: 3.2 },   // >= 1024px (desktop nhỏ)
                        1280: { slidesPerView: 4 },     // >= 1280px (màn hình rộng)
                    }}
                    speed={1300}
                    effect="fade"
                    modules={[Autoplay]}
                    className=''
                >
                    {courses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <div className="overflow-hidden">
                                <div className='w-full h-auto overflow-hidden rounded-xl'>
                                    <Image
                                        src={course?.image}
                                        alt={course.title}
                                        width={260}
                                        height={345}
                                        className="w-full h-auto  object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:round-xl"
                                    />
                                </div>
                                <div className="p-4 flex justify-center">
                                    <button className="bg-cyan-700 text-white px-6 py-2 rounded-full hover:bg-cyan-800 transition cursor-pointer">
                                        Tìm hiểu thêm
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}