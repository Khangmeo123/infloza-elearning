'use client';

import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Chào mừng đến với EduPlatform
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Nền tảng học tập trực tuyến hàng đầu với hơn 1000+ khóa học chất lượng cao
            từ các chuyên gia trong ngành. Bắt đầu hành trình học tập của bạn ngay hôm nay!
          </p>
          <div className="flex justify-center space-x-4">
            {user ? (
              <Link href="/courses" className="btn-primary text-lg px-8 py-3">
                Khám phá khóa học
              </Link>
            ) : (
              <>
                <Link href="/register" className="btn-primary text-lg px-8 py-3">
                  Đăng ký ngay
                </Link>
                <Link href="/courses" className="btn-secondary text-lg px-8 py-3">
                  Xem khóa học
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tại sao chọn EduPlatform?
          </h2>
          <p className="text-lg text-gray-600">
            Những lợi ích vượt trội khi học tập cùng chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Khóa học chất lượng</h3>
            <p className="text-gray-600">
              Nội dung được thiết kế bởi các chuyên gia hàng đầu,
              cập nhật liên tục theo xu hướng công nghệ mới nhất.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Học mọi lúc mọi nơi</h3>
            <p className="text-gray-600">
              Truy cập khóa học 24/7 trên mọi thiết bị.
              Học theo tốc độ của riêng bạn, không bị giới hạn thời gian.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cộng đồng hỗ trợ</h3>
            <p className="text-gray-600">
              Tham gia cộng đồng học viên sôi động,
              trao đổi kinh nghiệm và nhận hỗ trợ từ giảng viên.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 text-white py-16 rounded-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Thành tích của chúng tôi</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Khóa học</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-100">Học viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-primary-100">Giảng viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Hài lòng</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!user && (
        <section className="text-center py-16 bg-gray-100 rounded-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bắt đầu hành trình học tập ngay hôm nay
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tham gia cùng hàng nghìn học viên đã thay đổi cuộc sống qua giáo dục
          </p>
          <Link href="/register" className="btn-primary text-lg px-8 py-3">
            Đăng ký miễn phí
          </Link>
        </section>
      )}
    </div>
  );
}