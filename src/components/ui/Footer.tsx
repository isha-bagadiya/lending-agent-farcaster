import React from "react";
import { Tab } from "~/components/App";

interface FooterProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  showWallet?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  activeTab,
  setActiveTab,
  showWallet = false,
}) => (
  <div className="fixed bottom-0 left-0 right-0 z-50  mx-3 px-3 py-3 bg-purple-100 flex items-center justify-between rounded-t-3xl">
    <div className="flex justify-center items-center gap-2 h-12 w-max bg-transparent border-2 border-purple-600 p-1 rounded-2xl mx-auto">
      <button
        onClick={() => setActiveTab(Tab.Home)}
        className={`flex flex-col items-center justify-center w-[60px] h-full text-purple-600 ${
          activeTab === Tab.Home ? "border-2 border-purple-600 rounded-xl" : ""
        }`}
      >
        {/* <span className="text-xl">🏠</span> */}
        <span className="text-xs mt-1">
          {" "}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </span>
      </button>
      <button
        onClick={() => setActiveTab(Tab.Chat)}
        className={`flex flex-col items-center justify-center w-[60px] h-full text-purple-600 ${
          activeTab === Tab.Chat ? "border-2 border-purple-600 rounded-xl" : ""
        }`}
      >
        {/* <span className="text-xl">💬</span> */}
        <span className="text-xs mt-1">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
);
