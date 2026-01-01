"use client";

import React, { useState } from 'react';
import { Search, Sparkles, Loader2, History } from 'lucide-react';
import { askLegacy } from '../lib/gemini';

export default function LegacySearch() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const result = await askLegacy(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="legacy-search" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium uppercase tracking-wider">Cognitive Layer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Legacy Search
            </h2>
            <p className="text-gray-400 text-lg">
              Ask natural language questions about the Earlington community's history, 
              origins, and historical archives.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSearch} className="relative mb-8">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., What are the origins of the Earlington community?"
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-light text-lg"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={24} />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900/50 text-white px-6 py-2 rounded-xl transition-all flex items-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : "Ask"}
              </button>
            </form>

            {response && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
                    <History size={20} />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Historical Context</h4>
                    <div className="text-gray-300 leading-relaxed prose prose-invert max-w-none">
                      {response.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
