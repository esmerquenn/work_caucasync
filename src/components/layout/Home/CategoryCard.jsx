"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function CategoryCard({ icon, title, description, readMoreLink = "#", className }) {
  const t = useTranslations("Common");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-image">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative overflow-hidden rounded-[6px] transition-all duration-300 ease-out ",
          isHovered ? "scale-y-104 " : "bg-white border border-gray-200 ",
          className
        )}
      >
        <div className="p-8  min-h-60 flex flex-col">
          {/* Icon Section */}
          <div className={cn("mb-3 transition-all duration-300", isHovered ? "scale-100" : "scale-100")}>
            <div
              className={cn(
                "w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300",
                isHovered ? "bg-white shadow-lg" : "border-2 border-dashed border-green-900"
              )}
            >
              <div className={cn("transition-colors duration-300 text-green-900")}>
                {icon}
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="mb-3">
            <h3
              className={cn(
                "text-2xl md:text-3xl font-bold transition-colors duration-300",
                isHovered ? "text-white" : "brown-700-text"
              )}
            >
              {title}
            </h3>
            <div
              className={cn(
                " h-1 rounded-full transition-all duration-300 mt-3 ",
                isHovered ? "bg-white w-40" : "brown-700-bg w-12"
              )}
            />
          </div>

          {/* Description Section */}
          <p
            className={cn(
              "text-base md:text-lg leading-relaxed transition-colors duration-300 flex-grow",
              isHovered ? "text-white font-semibold" : "text-gray-600"
            )}
          >
            {description}
          </p>

          {/* Read More Link */}
          {readMoreLink && (
            <div className="mt-1 pt-2">
              <a
                href={readMoreLink}
                className={cn(
                  "inline-flex items-center gap-2 font-semibold transition-all duration-300",
                  isHovered ? "text-white hover:gap-3" : "green-500-text hover:text-green-700"
                )}
              >
                {t("readMore")}
                <span className={cn("transition-transform duration-300", isHovered ? "translate-x-1" : "")}>
                  {" "}
                  <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                </span>
              </a>
            </div>
          )}
        </div>

        {isHovered && (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
