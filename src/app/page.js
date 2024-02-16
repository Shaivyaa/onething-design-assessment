import React from "react";
import Header from "@/components/common/Header";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import FormContainer from "@/components/FormContainer";
import RewardSection from "@/components/RewardSection";
import StyleSection from "@/components/StyleSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/common/Footer";

export default function page() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Content Section */}
      <ContentSection />

      {/* Form Container */}
      <FormContainer />

      {/* Reward Section */}
      <RewardSection />

      {/* Style Section */}
      <StyleSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
