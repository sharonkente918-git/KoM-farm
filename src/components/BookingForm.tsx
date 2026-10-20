import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Send, CheckCircle, MapPin, Calendar, HelpCircle } from 'lucide-react';
import { POULTRY_PRODUCTS, PoultryProduct } from '../data/poultryData';

interface BookingFormProps {
  initialProductId?: string;
  initialQuantity?: number;
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialProductId, initialQuantity = 100 }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Nairobi County');
  const [selectedProductId, setSelectedProductId] = useState(initialProductId || 'kuroiler-chicks');
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [preferredDate, setPreferredDate] = useState('');
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialProductId) {
      setSelectedProductId(initialProductId);
    }
  }, [initialProductId]);

  useEffect(() => {
    if (initialQuantity) {
      setQuantity(initialQuantity);
    }
  }, [initialQuantity]);

  const selectedProduct = POULTRY_PRODUCTS.find(p => p.id === selectedProductId) || POULTRY_PRODUCTS[0];
  const totalKes = selectedProduct.priceKes * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.length < 9) {
      setErrorMsg('Please provide a valid phone number (e.g., +254... or +256...).');
      return;
    }
    if (quantity < selectedProduct.minOrder) {
      setErrorMsg(`Minimum order quantity for ${selectedProduct.name} is ${selectedProduct.minOrder} ${selectedProduct.unit}.`);
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const message = `*NEW ORDER INQUIRY - KoM Poultry Farm*\n` +
      `*Customer:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      `*Location:* ${location} (${orderType})\n` +
      `*Product:* ${selectedProduct.name}\n` +
      `*Quantity:* ${quantity} ${selectedProduct.unit}\n` +
      `*Est. Total:* KES ${totalKes.toLocaleString()}\n` +
      `*Date Required:* ${preferredDate || 'Earliest available'}\n` +
      `*Notes:* ${notes || 'None'}`;

    return `https://wa.me/256700719468?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="order-section" className="py-16 lg:py-24 border-b border-[#2A241F] bg-[#141210]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C89B6D]">
              <span>Direct Farm Dispatch</span>
              <span aria-hidden="true" className="text-[#554A40]">·</span>
              <span>Fast Lead Time</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#FAF6F0] sm:text-4xl">
              Place Your Batch Order or Request a Quote
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#BDB2A6]">
              Fill out the reservation form below. Our Nairobi dispatch coordinator will confirm your batch allocation, vaccination timing, and transportation details within 30 minutes.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-[#2E2721] bg-[#181513] p-5 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C89B6D] text-[#121110]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-[#8E8376] uppercase tracking-wider font-semibold">
                    Direct Phone Line
                  </div>
                  <a
                    href="tel:+256700719468"
                    className="font-display text-lg font-bold text-[#FAF6F0] hover:text-[#C89B6D] transition-colors"
                  >
                    +256 700 719 468
                  </a>
                  <div className="text-xs text-[#A89E92] mt-0.5">
                    Monday to Saturday, 7:00 AM – 6:30 PM EAT
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#2E2721] bg-[#181513] p-5 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-[#121110]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-[#8E8376] uppercase tracking-wider font-semibold">
                    Instant WhatsApp Support
                  </div>
                  <a
                    href="https://wa.me/256700719468?text=Hello%20KoM%20Poultry%20Farm,%20I%20have%20an%20order%20inquiry"
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-lg font-bold text-[#FAF6F0] hover:text-[#C89B6D] transition-colors"
                  >
                    Chat on +256 700 719 468
                  </a>
                  <div className="text-xs text-[#A89E92] mt-0.5">
                    Fast response for photos, questions, and M-Pesa setup
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#2E2721] bg-[#181513] p-5 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#29221C] text-[#C89B6D] border border-[#3E3328]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-[#8E8376] uppercase tracking-wider font-semibold">
                    Hatchery Dispatch &amp; Depot
                  </div>
                  <div className="font-display text-sm font-bold text-[#FAF6F0]">
                    Nairobi, Kenya
                  </div>
                  <div className="text-xs text-[#A89E92] mt-0.5">
                    Serving Nairobi, Kiambu, Rift Valley &amp; Regional Cross-Border routes
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Order Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#332A22] bg-[#181513] p-6 sm:p-8 shadow-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMsg && (
                    <div className="p-3.5 rounded-lg border border-red-500/40 bg-red-950/30 text-xs text-red-300">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#CDC4B9] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Samuel Karanja"
                        className="w-full rounded-lg border border-[#382E25] bg-[#121110] px-3.5 py-2.5 text-sm text-[#FAF6F0] placeholder-[#665B50] focus:border-[#C89B6D] focus:outline-none focus:ring-1 focus:ring-[#C89B6D]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-[#CDC4B9] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +254 7XX XXX XXX or +256 7XX XXX XXX"
                        className="w-full rounded-lg border border-[#382E25] bg-[#121110] px-3.5 py-2.5 text-sm text-[#FAF6F0] placeholder-[#665B50] focus:border-[#C89B6D] focus:outline-none focus:ring-1 focus:ring-[#C89B6D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Product Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-[#CDC4B9] mb-1.5">
                        Select Product / Breed *
                      </label>
                      <select
                        value={selectedProductId}
                        onChange={(e) => setSelectedProductId(e.target.value)}
                        className="w-full rounded-lg border border-[#382E25] bg-[#121110] px-3.5 py-2.5 text-sm text-[#FAF6F0] focus:border-[#C89B6D] focus:outline-none focus:ring-1 focus:ring-[#C89B6D]"
                      >
                        {POULTRY_PRODUCTS.map((p) => (
                          <option key={p.id} value={p.id} className="bg-[#181513]">
                            {p.name} (KES {p.priceKes} {p.unit})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="block text-xs font-semibold text-[#CDC4B9] mb-1.5">
                        Quantity ({selectedProduct.unit}) *
                      </label>
                      <input
                        type="number"
                        min={selectedProduct.minOrder}
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                        className="w-full rounded-lg border border-[#382E25] bg-[#121110] px-3.5 py-2.5 text-sm text-[#FAF6F0] focus:border-[#C89B6D] focus:outline-none focus:ring-1 focus:ring-[#C89B6D]"
                      />
                      <span className="text-[11px] text-[#8E8376] mt-1 block">
                        Min order: {selectedProduct.minOrder} {selectedProduct.unit}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Location */}
                    <div>
                      <label className="block text-xs font-semibold text-[#CDC4B9] mb-1.5">
                        Destination Location / County *
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Nairobi, Kiambu, Nakuru, Busia..."
                        className="w-full rounded-lg border border-[#382E25] bg-[#121110] px-3.5 py-2.5 text-sm text-[#FAF6F0] placeholder-[#665B50] focus:border-[#C89B6D] focus:outline-none focus:ring-1 focus:ring-[#C89B6D]"
                      />
                    </div>

                    {/* Delivery or Pickup */}
                    <div>
                      <label className="block text-xs font-semibold text-[#CDC4B9] mb-1.5">
                        Fulfillment Method
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setOrderType('delivery')}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                            orderType === 'delivery'
                              ? 'bg-[#C89B6D] text-[#121110] border-[#C89B6D]'
                              : 'bg-[#121110] text-[#A89E92] border-[#382E25]'
                          }`}
                        >
                          Express Delivery
                        </button>
                        <button
                          type="button"
                          onClick={() => setOrderType('pickup')}
                          className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                            orderType === 'pickup'
                              ? 'bg-[#C89B6D] text-[#121110] border-[#C89B6D]'
                              : 'bg-[#121110] text-[#A89E92] border-[#382E25]'
                          }`}
                        >
                          Depot Pickup
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div>
                    <label className="block text-xs font-semibold text-[#CDC4B9] mb-1.5">
                      Additional Notes or Inquiries (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Need feeder supplies, brooding heat advice, or preferred hatch day."
                      className="w-full rounded-lg border border-[#382E25] bg-[#121110] px-3.5 py-2 text-sm text-[#FAF6F0] placeholder-[#665B50] focus:border-[#C89B6D] focus:outline-none focus:ring-1 focus:ring-[#C89B6D]"
                    />
                  </div>

                  {/* Order Live Summary */}
                  <div className="rounded-xl border border-[#2D251E] bg-[#13110F] p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#8E8376]">Estimated Batch Value</div>
                      <div className="font-display text-lg font-bold text-[#FAF6F0]">
                        {quantity} × {selectedProduct.name}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#C89B6D] font-medium">Estimated Total</div>
                      <div className="font-display text-xl font-black text-[#FAF6F0] tabular-nums">
                        KES {totalKes.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#C89B6D] py-3.5 px-4 text-sm font-bold text-[#121110] hover:bg-[#D7AA7C] active:scale-95 transition-all shadow-md"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Batch Reservation</span>
                  </button>

                </form>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C89B6D]/20 text-[#C89B6D] mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#FAF6F0]">
                    Reservation Received!
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#BDB2A6] max-w-md mx-auto">
                    Thank you <span className="text-[#FAF6F0] font-semibold">{fullName}</span>. Your request for <span className="text-[#FAF6F0] font-semibold">{quantity} {selectedProduct.name}</span> (Est. KES {totalKes.toLocaleString()}) has been queued.
                  </p>

                  <div className="mt-6 p-4 rounded-xl border border-[#2F2721] bg-[#12110F] text-left max-w-md mx-auto text-xs space-y-2">
                    <div className="flex justify-between text-[#8E8376]">
                      <span>Destination:</span>
                      <span className="text-[#FAF6F0] font-medium">{location} ({orderType})</span>
                    </div>
                    <div className="flex justify-between text-[#8E8376]">
                      <span>Contact:</span>
                      <span className="text-[#FAF6F0] font-medium">{phone}</span>
                    </div>
                    <div className="flex justify-between text-[#8E8376]">
                      <span>Dispatch Phone:</span>
                      <span className="text-[#C89B6D] font-bold">+256 700 719 468</span>
                    </div>
                  </div>

                  {/* Immediate 1-Click WhatsApp Send */}
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-xs sm:text-sm font-bold text-[#121110] hover:bg-[#20ba5a] transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Send Order to WhatsApp (+256700719468)</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-[#A89E92] hover:text-[#FAF6F0] transition-colors"
                    >
                      Place Another Order
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
