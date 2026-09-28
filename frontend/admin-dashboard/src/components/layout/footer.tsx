import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Database,
  HelpCircle,
} from "lucide-react";
import { footerGroups } from "@/data/footergroup";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08090b] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        
        <div className="absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          
          {/* Brand */}
          <div className="max-w-sm">
            
            <Link href="/" className="group inline-flex items-center gap-3">
              
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition-colors group-hover:bg-white/10">
                
                <BarChart3 className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                
                WORKLYTICS
              </span>
            </Link>
            <p className="mt-5 text-sm leading-6 text-white/50">
              
              Workforce Performance Intelligence Platform
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/35">
              
              Turn workforce data into understanding, insight, and meaningful
              action.
            </p>
            {/* Intelligence indicators */}
            <div className="mt-8 flex items-center gap-3">
              
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50">
                
                <Database className="h-3.5 w-3.5" /> Data
              </div>
              <div className="h-px w-5 bg-white/10" />
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50">
                
                <BrainCircuit className="h-3.5 w-3.5" /> Intelligence
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            
            {footerGroups.map((group) => (
              <div key={group.title}>
                
                <h3 className="text-sm font-medium text-white">
                  
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  
                  {group.links.map((link) => (
                    <li key={link.label}>
                      
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-white"
                      >
                        
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Intelligence visual */}
        <div className="relative my-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
          
          <div className="flex flex-col gap-6 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            
            <div>
              
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                
                Workforce Intelligence
              </p>
              <p className="mt-2 text-sm text-white/50">
                
                Data → Understanding → Action
              </p>
            </div>
            <div className="flex items-center gap-2">
              
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-white/40">
                
                Intelligence at work
              </span>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          
          <p className="text-xs text-white/35">
            
            © 2026 Worklytics. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            
            <Link
              href="/privacy"
              className="text-xs text-white/35 transition-colors hover:text-white"
            >
              
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/35 transition-colors hover:text-white"
            >
              
              Terms
            </Link>
            <Link
              href="/help"
              className="inline-flex items-center gap-1.5 text-xs text-white/35 transition-colors hover:text-white"
            >
              
              <HelpCircle className="h-3.5 w-3.5" /> Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
