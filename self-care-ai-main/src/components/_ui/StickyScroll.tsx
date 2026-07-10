import React from "react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  return (
    <div className="relative flex flex-col space-y-24 max-w-5xl mx-auto">
      {content.map((item, index) => (
        <div key={item.title + index} className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content Side */}
          <div className={cn("relative pl-16", index % 2 === 1 && "lg:order-2")}>
            {/* Tree Structure Line & Node */}
            <div 
              className={cn(
                "absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200",
                // Hide the line extending from the last item if we wanted a continuous line, 
                // but for a static layout, maybe individual lines or no lines is better.
                // Let's keep a subtle line to indicate sequence if they were connected, 
                // but here they are separate blocks. Let's remove the connecting line for the static version 
                // and just keep the node for the number.
                "hidden" 
              )}
            />
            
            <div className="absolute top-0 left-0 w-10 h-10 rounded-full border-2 border-emerald-500 bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm z-10">
              <span className="font-serif text-base font-bold">{index + 1}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              {item.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              {item.description}
            </p>
          </div>

          {/* Visual Content Side */}
          <div className={cn(
            "relative h-80 w-full rounded-2xl overflow-hidden bg-white shadow-xl shadow-slate-200/40 border border-slate-100",
            contentClassName,
            index % 2 === 1 && "lg:order-1"
          )}>
            {item.content ?? null}
          </div>
        </div>
      ))}
    </div>
  );
};
