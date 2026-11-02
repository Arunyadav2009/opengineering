import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Turnkey Project Execution',
    location: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build message for WhatsApp/Direct Communication to Er. Kishan Kumar Yadav
    const summary = `NEW CONTACT INQUIRY - O P ENGINEERING
Attn: Er. Kishan Kumar Yadav (Owner & CEO)
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Inquiry Type: ${formData.inquiryType}
Site Location: ${formData.location || 'N/A'}
Message: ${formData.message || 'No additional message'}

Please review and contact regarding fire safety engineering scope.`;

    const encoded = encodeURIComponent(summary);
    // Direct WhatsApp with Er. Kishan Kumar Yadav (Owner & CEO)
    window.open(`https://wa.me/918507302636?text=${encoded}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean Left Alignment */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Engineering Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Connect with Our Fire Safety Leadership
          </h2>
          <div className="h-1.5 w-20 bg-red-600 mt-2 mb-3 rounded-full" />
          <p className="text-base text-slate-600 font-body leading-relaxed">
            Speak directly with our Owner & Founder Gorakhnath Yadav and Owner & CEO Kishan Kumar Yadav for immediate project estimates, tender consultations, and emergency system support.
          </p>
        </div>

        {/* Two-Column Grid: Left (5 cols) Hotlines & Regional Offices, Right (7 cols) Consultation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Office Addresses (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Key Leadership Hotlines */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
              <span className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider block mb-4">
                Direct Leadership Hotlines
              </span>

              <div className="space-y-4">
                {COMPANY_INFO.contacts.map((contact, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0 gap-3">
                    <div className="flex items-center gap-3">
                      {contact.image ? (
                        <img 
                          src={contact.image} 
                          alt={contact.name} 
                          className="w-12 h-12 rounded-xl object-cover object-top border-2 border-red-200 shadow-xs shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold font-mono text-sm shrink-0">
                          {contact.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{contact.name}</h4>
                        <p className="text-xs text-red-600 font-bold">{contact.designation}</p>
                        <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">{contact.role}</span>
                      </div>
                    </div>

                    <a
                      href={`tel:${contact.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 font-mono text-xs font-bold rounded-lg border border-red-200 transition-colors shrink-0 self-start sm:self-auto"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-600" />
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Instant WhatsApp Direct to Er. Kishan Kumar Yadav */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/918507302636?text=Hello%20Er.%20Kishan%20Kumar%20Yadav%20(Owner%20%26%20CEO)%2C%20I%20am%20reaching%20out%20from%20your%20website%20regarding%20a%20fire%20protection%20requirement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp: Er. Kishan Kumar Yadav (+91 8507302636)</span>
                </a>
              </div>

              {/* Email direct */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Official RFQ & Tender Email</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs font-mono text-slate-900 hover:text-red-600 font-bold">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
                >
                  <Mail className="w-4 h-4 text-red-600" />
                </a>
              </div>
            </div>

            {/* Physical Offices (Head & Branch) */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
              <span className="text-xs font-mono text-slate-600 font-bold uppercase tracking-wider block mb-4">
                Operational Offices & Regional Presence
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                {/* Head Office */}
                <div className="pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-red-50 border border-red-200 text-[10px] font-mono font-bold text-red-700 uppercase">
                      {COMPANY_INFO.offices.head.type}
                    </span>
                    <span className="text-xs font-bold text-slate-900">Bihar Central Hub</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    {COMPANY_INFO.offices.head.address}, {COMPANY_INFO.offices.head.district}
                  </p>
                  <p className="text-xs text-slate-500">
                    {COMPANY_INFO.offices.head.state} ({COMPANY_INFO.offices.head.landmark})
                  </p>
                </div>

                {/* Branch Office */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono font-bold text-slate-700 uppercase">
                      {COMPANY_INFO.offices.branch.type}
                    </span>
                    <span className="text-xs font-bold text-slate-900">UP Power Belt Hub</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    {COMPANY_INFO.offices.branch.address}
                  </p>
                  <p className="text-xs text-slate-500">
                    {COMPANY_INFO.offices.branch.district}, {COMPANY_INFO.offices.branch.state}
                  </p>
                </div>
              </div>
            </div>

            {/* 24/7 Crisis & AMC Response Notice */}
            <div className="bg-white border border-red-200 rounded-xl p-4 flex items-center gap-3 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">24/7 Emergency Support & Urgent Line Audits</p>
                <p className="text-slate-600">Rapid response teams available for pump failures, valve leaks, and pressure drops.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Request a Detailed Site Consultation or Quotation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill in the basic parameters below to discuss technical specifications, tender documentation, or statutory fire safety compliance.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 border border-red-200 flex items-center justify-center mx-auto mb-3 text-red-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Inquiry Dispatched!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-4">
                  Thank you for reaching out to O P Engineering. Your inquiry has been routed directly via WhatsApp to <strong>Er. Kishan Kumar Yadav (Owner & CEO)</strong> at <span className="font-mono text-emerald-700 font-bold">+91 8507302636</span>. We will respond promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 rounded-lg border border-slate-200 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name / Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gorakhnath Yadav / Client Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94722 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="engineer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Site City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Barh, Patna, Anpara, Sonbhadra"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Requirement / Inquiry Category
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-red-600 shadow-xs"
                  >
                    <option value="Turnkey Project Execution">Turnkey Project Execution (Complete Installation)</option>
                    <option value="Pump House & Mechanical">Fire Pump House & Mechanical Fabrication</option>
                    <option value="Hydrant & Sprinkler Network">Hydrant & Sprinkler Network Laying</option>
                    <option value="Clean Agent Suppression">NOVEC 1230 / CO₂ Gas Suppression</option>
                    <option value="Alarm & Detection">Addressable Fire Alarm / VESDA System</option>
                    <option value="Annual Maintenance Contract">Annual Maintenance Contract (AMC) & Testing</option>
                    <option value="Fire NOC / Audit Consultation">Statutory Fire NOC & Risk Audit Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Project Details / Specific Technical Scope
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe site area, building type (industrial/residential), pumping requirement, or any tender reference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 shadow-xs resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Er. Kishan Kumar Yadav (+91 8507302636)</span>
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2 flex items-center justify-center gap-1.5 font-mono">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Dispatches directly to Er. Kishan Kumar Yadav's WhatsApp: +91 8507302636</span>
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
