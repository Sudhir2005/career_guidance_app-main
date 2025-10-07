import { useState } from "react";
import { FaRobot, FaRegCopy, FaSave, FaFileAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Aichat() {
  const { t } = useTranslation();
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    console.log("User message:", input);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="sticky top-0 z-10 p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-600">{t("aiChat")}</h1>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <p className="mt-10 text-center text-gray-400">{t("startConversation")}</p>
      </div>

      <div className="grid grid-cols-1 gap-0 px-0 mb-20">
        <button className="flex items-center justify-center gap-2 px-4 py-3 text-blue-600 transition border border-blue-500 rounded-xl hover:bg-blue-50">
          <FaFileAlt /> {t("summarize")}
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 text-blue-600 transition border border-blue-500 rounded-xl hover:bg-blue-50">
          <FaRegCopy /> {t("copyText")}
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-3 text-blue-600 transition border border-blue-500 rounded-xl hover:bg-blue-50">
          <FaSave /> {t("save")}
        </button>
      </div>

      <div className="p-3 bg-white shadow-inner">
        <div className="flex items-center gap-2 mt-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("typeYourMessage")}
            className="flex-1 p-3 mb-40 text-white border border-purple-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 mb-40 text-white bg-blue-500 rounded-xl hover:bg-blue-600"
          >
            {t("askAI")}
          </button>
        </div>
      </div>
    </div>
  );
}
