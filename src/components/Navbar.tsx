'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { mainNavigation, type NavItem } from '@/data/navigation';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleMouseEnter(label: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  }

  function hasDropdown(item: NavItem) {
    return !!item.dropdown;
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-blue-600">
              <rect width="32" height="32" rx="8" fill="currentColor" />
              <path d="M8 12l4-4 4 4M16 12l4-4 4 4M12 20l4 4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="16" r="2" fill="white" />
            </svg>
            <span className="text-xl font-bold text-slate-900">
              BeMy<span className="text-blue-600">Crew</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasDropdown(item) && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href || '#'}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    item.label === 'Voice AI — Free'
                      ? 'text-blue-600 hover:text-blue-700 font-semibold'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {item.label === 'Voice AI — Free' && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-orange-500 text-white rounded">New</span>
                  )}
                  {hasDropdown(item) && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-slate-200 py-4 px-4 min-w-[480px]">
                    <div className="grid grid-cols-2 gap-4">
                      {item.dropdown.groups.map((group) => (
                        <div key={group.label}>
                          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">
                            {group.label}
                          </div>
                          {group.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block px-2 py-1.5 hover:bg-slate-50 rounded-md transition-colors"
                            >
                              <div className="text-sm font-medium text-slate-900">{link.label}</div>
                              {link.description && (
                                <div className="text-xs text-slate-500 mt-0.5">{link.description}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors px-3 py-2"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
        <div className={`lg:hidden border-t border-slate-200 bg-white transition-all duration-300 ${mobileOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
          <div className="px-4 py-4 space-y-1">
            {mainNavigation.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      item.label === 'Voice AI — Free'
                        ? 'text-blue-600 font-semibold hover:bg-blue-50'
                        : 'text-slate-900 hover:bg-slate-50'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    {item.label === 'Voice AI — Free' && (
                      <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-orange-500 text-white rounded">New</span>
                    )}
                  </Link>
                ) : (
                  <div className="px-3 py-2 text-base font-medium text-slate-900">
                    {item.label}
                  </div>
                )}
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.groups.map((group) => (
                      <div key={group.label}>
                        <div className="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {group.label}
                        </div>
                        {group.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-md"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <Link
                href="/login"
                className="block text-center px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="block text-center px-3 py-2.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
    </nav>
  );
}
