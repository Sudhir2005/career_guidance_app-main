import Footer from "../components/Footer";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

const CareerExplorer = () => {
  const { t } = useTranslation();

  const careers = [
    { title: t("softwareEngineer"), description: t("softwareEngineerDesc"), buttonText: t("explore") },
    { title: t("dataScientist"), description: t("dataScientistDesc"), buttonText: t("explore") },
    { title: t("productManager"), description: t("productManagerDesc"), buttonText: t("explore") },
  ];

  return (
    <>
      <main className="max-w-6xl px-6 py-12 mx-auto">
        <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text">
          {t("careerExplorer")}
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {careers.map((career, i) => (
            <Card key={i} {...career} />
          ))}
        </div>
      </main>
    </>
  );
};

export default CareerExplorer;
