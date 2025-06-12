'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import student1 from "@/assets/images/std-1.png"
import student2 from "@/assets/images/std-2.png"
import student3 from "@/assets/images/std-3.png"
const SuccessStories = () => {
    const testimonials = [
        {
            id: 1,
            quote: "Sau khóa học, mình đã biết cách duy trì các vòng kết nối của mình.",
            story: "Cách chị Thái Vân Linh hướng dẫn và các tài liệu của khóa học rất là thực tế.Có nhiều phần học mình có thể ứng dụng ngay vào các sự kiện networking, ví dụ là khi bắt tay thì lúc bắt tay sao cho để mạnh hoặc hướng đế tay như thế nào. Trước đây mình không biết chính xác những mẹo đó. Sau khóa học, mình có hẹn lại với các bạn học cũ và mình đã biết cách duy trì các mối quan hệ sao cho hiệu quả đối với vòng kết nối của mình",
            course: "Học viên khóa Networking, Đàm phán thành công, Lập kế hoạch và quản lý chuyên nghiệp",
            name: "Nguyễn Lê",
            title: "Tư vấn đầu tư và định cư nước ngoài",
            image: student1,
            alt: "Nguyễn Lê - Học viên khóa Networking"
        },
        {
            id: 2,
            quote: "Khóa học đã thay đổi hoàn toàn cách tiếp cận công việc của tôi.",
            story: "Trước khi tham gia khóa học, tôi luôn cảm thấy khó khăn trong việc thuyết trình và giao tiếp với khách hàng. Nhưng sau khi học với các chuyên gia tại Skills Bridge, tôi đã tự tin hơn rất nhiều. Không chỉ vậy, tôi còn áp dụng được những kỹ năng đàm phán hiệu quả vào công việc hàng ngày. Doanh số bán hàng của tôi đã tăng 40% sau 3 tháng áp dụng những kiến thức học được.",
            course: "Học viên khóa Thuyết trình chuyên nghiệp, Kỹ năng bán hàng",
            name: "Trần Minh Hải",
            title: "Trưởng phòng kinh doanh",
            image: student2,
            alt: "Trần Minh Hải - Học viên khóa Thuyết trình"
        },
        {
            id: 3,
            quote: "Tôi đã có thể chuyển đổi sự nghiệp thành công nhờ khóa học này.",
            story: "Với background là kỹ sư, tôi luôn muốn chuyển sang lĩnh vực quản lý dự án nhưng không biết bắt đầu từ đâu. Khóa học tại Skills Bridge đã cung cấp cho tôi những kiến thức nền tảng vững chắc về quản lý dự án, từ lập kế hoạch đến điều phối nhóm. Sau khi hoàn thành khóa học, tôi đã được thăng chức lên vị trí Project Manager với mức lương tăng 60%. Điều quan trọng nhất là tôi cảm thấy tự tin và có đủ năng lực để đảm nhiệm vị trí mới.",
            course: "Học viên khóa Quản lý dự án chuyên nghiệp, Lãnh đạo nhóm",
            name: "Phạm Thu Hương",
            title: "Project Manager",
            image: student3,
            alt: "Phạm Thu Hương - Học viên khóa Quản lý dự án"
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden mb-0">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
            </div>

            <div className=" px-4 sm:px-6 lg:px-8 relative">
                {/* Title */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                            Câu chuyện thành công
                        </span>
                    </h2>
                </div>

                {/* Testimonials Swiper */}
                <div className="relative">
                    <Swiper
                        modules={[Pagination, Autoplay, EffectFade]}
                        slidesPerView={1}
                        effect="fade"
                        fadeEffect={{
                            crossFade: true
                        }}
                        pagination={{
                            el: '.testimonial-pagination',
                            clickable: true,
                            bulletClass: 'inline-block w-3 h-3 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 mx-1',
                            bulletActiveClass: '!bg-blue-500 !w-8',
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className={`testimonial-swiper max-w-[1200px] mx-auto`}

                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white  rounded-3xl p-8 md:p-12 lg:p-16 mx-4 relative">
                                    {/* Quote Icon */}
                                    <div className="absolute top-6 right-6 md:top-8 md:right-8">
                                        <svg className="w-12 h-12 md:w-16 md:h-16 text-blue-100" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                        </svg>
                                    </div>

                                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                                        {/* Content */}
                                        <div className="flex-1">
                                            {/* Main Quote */}
                                            <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
                                                {`"${testimonial.quote}"`}
                                            </blockquote>

                                            {/* Story */}
                                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 line-clamp-none">
                                                {testimonial.story}
                                            </p>

                                            {/* Course Info */}
                                            <p className="text-sm md:text-base text-gray-500 italic mb-4">
                                                ({testimonial.course})
                                            </p>
                                        </div>

                                        {/* Profile */}
                                        <div className="flex-shrink-0 flex flex-row lg:flex-col items-center lg:items-center gap-4 lg:gap-6 w-full lg:w-auto">
                                            <div className="relative">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.alt}
                                                    className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                                                />
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-teal-400/20"></div>
                                            </div>
                                            <div className="text-center lg:text-center flex-1 lg:flex-none">
                                                <h4 className="font-bold text-lg md:text-xl text-gray-800 mb-1">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-sm md:text-base text-gray-600 leading-tight">
                                                    {testimonial.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Pagination */}
                    <div className="testimonial-pagination flex justify-center mt-8 lg:mt-12"></div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;