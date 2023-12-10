import dynamic from "next/dynamic";
import React from "react";
import Navbar from "@/components/Navbar"
import AboutMe from "@/components/AboutMe"
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import EmailSection from '@/components/EmailSection';
import Footer from '@/components/Footer';
import AchievementsSection from '@/components/AchievementsSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
        <Navbar/>
        <main>
        <HeroSection/>
        <AchievementsSection/>
        <AboutMe/>
        <Project/>
        <EmailSection/>
        </main>
        <Footer/>
    </div>
  );
}