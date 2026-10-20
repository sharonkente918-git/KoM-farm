import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { POULTRY_PRODUCTS, PoultryProduct } from '../data/poultryData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: PoultryProduct | null;
  preloadedQuantity?: number;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
  preloadedQuantity = 100
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    preselectedProduct?.id || POULTRY_PRODUCTS[0].id
  );
  const [quantity, setQuantity] = useState<number>(preloadedQuantity);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [county, setCounty] = useState('Nairobi');
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setSelectedProductId(preselectedProduct.id);
      setQuantity(Math.max(preselectedProduct.minOrder, preloadedQuantity));
    }
  }, [preselectedProduct, preloadedQuantity]);

  if (!isOpen) return null;

  const currentProduct = POULTRY_PRODUCTS.find(p => p.id === selectedProductId) || POULTRY_PRODUCTS[0];
  const totalPriceKes = currentProduct.priceKes * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setValidationError('Please provide a valid phone number for dispatch.');
      return;
    }
    if (quantity < currentProduct.minOrder) {
      setValidationError(`Minimum order quantity is ${currentProduct.minOrder} ${currentProduct.unit}.`);
      return;
    }
    setValidationError('');
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `*ORDER RESERVATION - KoM Poultry Farm*\n` +
      `*Name:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      `*Location:* ${county}\n` +
      `*Product:* ${currentProduct.name}\n` +
      `*Quantity:* ${quantity} ${currentProduct.unit}\n` +
      `*Total Price:* KES ${totalPriceKes.toLocaleString()}\n` +
      `Please confirm availability and dispatch schedule.`;
    return `https://wa.me/256700719468?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-[#3A3026] bg-[#161311] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-[#9E9284] hover:text-[#FAF6F0] rounded-lg bg-[#221C18] border border-[#332A22]"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C89B6D]">
              KoM Poultry Farm · Nairobi
            </div>
            <h3 className="font-display text-2xl font-bold text-[#FAF6F0] mt-1">
              Reserve Batch / Request Quote
            </h3>
            <p className="text-xs text-[#9E9284] mt-1">
              Direct dispatch helpline: <span className="text-[#C89B6D] font-bold">+256 700 719 468</span>
            </p>

            {validationError && (
              <div className="mt-4 p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-xs text-red-200">
                {validationError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#CDC4B9] mb-1">
                  Product / Breed
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => {
                    const prod = POULTRY_PRODUCTS.find(p => p.id === e.target.value);
                    setSelectedProductId(e.target.value);
                    if (prod && quantity < prod.minOrder) {
                      setQuantity(prod.minOrder);
                    }
                  }}
                  className="w-full rounded-lg border border-[#362D24] bg-[#100E0D] px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF6F0] focus:border-[#C89B6D] focus:outline-none"
                >
                  {POULTRY_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name} (KES {prod.priceKes} {prod.unit})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-[#CDC4B9]">
                    Quantity ({currentProduct.unit})
                  </label>
                  <span className="text-[11px] text-[#C89B6D]">
                    Min: {currentProduct.minOrder} {currentProduct.unit}
                  </span>
                </div>
                <input
                  type="number"
                  min={currentProduct.minOrder}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full rounded-lg border border-[#362D24] bg-[#100E0D] px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF6F0] focus:border-[#C89B6D] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#CDC4B9] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Mwangi"
                    className="w-full rounded-lg border border-[#362D24] bg-[#100E0D] px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF6F0] placeholder-[#665B50] focus:border-[#C89B6D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#CDC4B9] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +254 7XX XXX XXX"
                    className="w-full rounded-lg border border-[#362D24] bg-[#100E0D] px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF6F0] placeholder-[#665B50] focus:border-[#C89B6D] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#CDC4B9] mb-1">
                  Delivery Destination / County
                </label>
                <input
                  type="text"
                  value={county}
                  onChange={(e) => setCounty(e.target.value)}
                  placeholder="e.g. Nairobi, Kiambu, Nakuru, Eldoret..."
                  className="w-full rounded-lg border border-[#362D24] bg-[#100E0D] px-3.5 py-2.5 text-xs sm:text-sm text-[#FAF6F0] placeholder-[#665B50] focus:border-[#C89B6D] focus:outline-none"
                />
              </div>

              {/* Live Price Calculator Box */}
              <div className="p-3.5 rounded-xl border border-[#2B231C] bg-[#100E0D] flex items-center justify-between">
                <span className="text-xs text-[#8E8376]">Estimated Batch Total:</span>
                <span className="font-display text-lg font-black text-[#FAF6F0] tabular-nums">
                  KES {totalPriceKes.toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#C89B6D] py-3 px-4 text-xs sm:text-sm font-bold text-[#121110] hover:bg-[#D7AA7C] active:scale-95 transition-all shadow-md"
              >
                <Send className="h-4 w-4" />
                <span>Confirm Reservation</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href="tel:+256700719468"
                  className="text-xs text-[#A89E92] hover:text-[#FAF6F0] flex items-center justify-center gap-1.5"
                >
                  <Phone className="h-3.5 w-3.5 text-[#C89B6D]" />
                  <span>Prefer to speak directly? Call +256 700 719 468</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C89B6D]/20 text-[#C89B6D] mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#FAF6F0]">
              Reservation Submitted!
            </h3>
            <p className="mt-2 text-xs text-[#A89E92]">
              Thank you {fullName}. Your order for {quantity} {currentProduct.name} has been sent to our dispatch system.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 px-4 text-xs sm:text-sm font-bold text-[#121110] hover:bg-[#20ba5a] transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Notify Dispatch on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="py-2.5 text-xs font-semibold text-[#8E8376] hover:text-[#FAF6F0] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
