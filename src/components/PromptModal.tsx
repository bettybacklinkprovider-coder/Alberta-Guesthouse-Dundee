import React, { useState } from 'react';
import { COPIABLE_PROMPTS } from '../data/hotelData';
import { X, Copy, Check, FileCode, Sparkles } from 'lucide-react';

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptModal: React.FC<PromptModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'urdu' | 'english'>('urdu');
  const [copied, setCopied] = useState<boolean>(false);

  const activeContent =
    activeTab === 'urdu'
      ? COPIABLE_PROMPTS.urduPrompt
      : COPIABLE_PROMPTS.englishPrompt;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#0f1c2e] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-[#c59b27] flex items-center justify-center">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">
                Alberta Guesthouse Website Prompts
              </h3>
              <p className="text-xs text-slate-300">
                4 Separate Pages · 6 Landing Page Sections · WhatsApp +447753429354
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-600 leading-relaxed">
            Yeh prompts aapke exact requirements ke mutabiq tayyar kiye gaye hain. Aap inhein copy kar ke kisi bhi AI builder ya developer ko de sakte hain, ya yahan live website par inka mukammal working result dekh sakte hain!
          </p>

          <div className="flex rounded-lg bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setActiveTab('urdu')}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'urdu'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Roman Urdu / Urdu Prompt
            </button>
            <button
              onClick={() => setActiveTab('english')}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'english'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              English Professional Prompt
            </button>
          </div>

          <div className="relative">
            <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs font-mono leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto border border-slate-800">
              {activeContent}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-[#c59b27] hover:bg-amber-600 text-slate-950 font-semibold text-xs rounded-md shadow-xs transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-950" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-900">
            <Sparkles className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">All 4 Pages & 6 Sections Live!</p>
              <p className="text-amber-800 mt-0.5">
                All 6 sections on the home page and all 4 separate pages (Home, Rooms & Suites, Special Offers, Contact & Location) are already built and fully interactive in this app.
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#0f1c2e] hover:bg-slate-800 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer"
            >
              Back to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
