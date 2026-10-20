/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsCatalog } from './components/ProductsCatalog';
import { PoultryCalculator } from './components/PoultryCalculator';
import { BiosecurityFeatures } from './components/BiosecurityFeatures';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileQuickContact } from './components/MobileQuickContact';
import { OrderModal } from './components/OrderModal';
import { POULTRY_PRODUCTS, PoultryProduct } from './data/poultryData';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<PoultryProduct | null>(null);
  const [modalQuantity, setModalQuantity] = useState(100);

  const handleOpenOrderModal = (productId?: string) => {
    if (productId) {
      const prod = POULTRY_PRODUCTS.find(p => p.id === productId);
      if (prod) {
        setModalProduct(prod);
        setModalQuantity(prod.minOrder);
      }
    } else {
      setModalProduct(POULTRY_PRODUCTS[0]);
      setModalQuantity(100);
    }
    setIsModalOpen(true);
  };

  const handleSelectProduct = (product: PoultryProduct) => {
    setModalProduct(product);
    setModalQuantity(product.minOrder);
    setIsModalOpen(true);
  };

  const handlePreloadFromCalculator = (birdType: string, quantity: number) => {
    let targetId = 'kuroiler-chicks';
    if (birdType === 'broiler') targetId = 'broiler-chicks';
    if (birdType === 'layer') targetId = 'layer-chicks';

    const prod = POULTRY_PRODUCTS.find(p => p.id === targetId) || POULTRY_PRODUCTS[0];
    setModalProduct(prod);
    setModalQuantity(quantity);
    setIsModalOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#EFECE6] flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-1 pb-16 md:pb-0">
        {/* Hero Section */}
        <Hero
          onOpenOrderModal={handleOpenOrderModal}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* Interactive Products & Breeds Catalog */}
        <ProductsCatalog onSelectProductForOrder={handleSelectProduct} />

        {/* Practical Farm Economics & Flock Calculator */}
        <PoultryCalculator onPreloadOrder={handlePreloadFromCalculator} />

        {/* Hatchery Biosecurity Standards & Operational Pillars */}
        <BiosecurityFeatures />

        {/* Customer Proof & Farmer Testimonials */}
        <Testimonials />

        {/* Direct In-Page Reservation & Quote Lead Form */}
        <BookingForm
          initialProductId={modalProduct?.id}
          initialQuantity={modalQuantity}
        />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Quick Actions Bar (<15% mobile viewport height) */}
      <MobileQuickContact onOpenOrder={() => handleOpenOrderModal()} />

      {/* Order / Quote Reservation Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedProduct={modalProduct}
        preloadedQuantity={modalQuantity}
      />
    </div>
  );
}
