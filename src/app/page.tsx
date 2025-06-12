'use client';

import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import Image from 'next/image';
import banner from "@/assets/images/banner-home.png";
import CourseCarousel from '@/conponents/CourseCarousel/CourseCarousel';
import ReasonInflozaElearning from '@/conponents/ReasonInflozaElearning/ReasonInflozaElearning';
import SuccessStories from '@/conponents/SuccessStories/SuccessStories';
import Footer from './footer';
export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="my-0">
        <Image
          src={banner} // đường dẫn tương đối trong thư mục public
          alt="Logo"
          className="w-screen"
        />
      </section>

      <section className="my-0">
        <CourseCarousel />
      </section>
      <section className="my-0">
        <ReasonInflozaElearning />
      </section>
      <SuccessStories />

      <Footer />
    </div>
  );
}