import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Counselling() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-white">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">{t("counselling")}</h2>
      <p className="mb-4 text-lg text-center text-gray-600">{t("counsellingYetToStart")}</p>
      <p className="px-4 py-2 mb-6 text-xl font-semibold text-center text-red-500 bg-red-100 rounded-lg">
        {t("expectedCounsellingDate", { date: "15th October 2025" })}
      </p>

      <div className="flex flex-col w-full max-w-xs gap-4">
        <Link
          to="/previous-counselling"
          className="py-3 text-center !text-white no-underline bg-blue-500 rounded-xl hover:bg-blue-600 transition"
        >
          {t("viewPreviousCounselling")}
        </Link>
        <Link
          to="/mock-counselling"
          className="py-3 text-center !text-white no-underline bg-green-500 rounded-xl hover:bg-green-600 transition"
        >
          {t("takeMockCounselling")}
        </Link>
      </div>
    </div>
  );
}
