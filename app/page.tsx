"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import { ParisDistricts, PropertyPricesByMonth } from "./lib/types";

export default function Home() {
  const [priceData, setPriceData] = useState<PropertyPricesByMonth | null>(
    null
  );
  const [districtData, setDistrictData] = useState<ParisDistricts | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"general" | "districts">(
    "general"
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        // Data loading logic would go here
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(
          "Impossible de charger les données. Veuillez réessayer plus tard."
        );
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <Header />
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : (
          <div>
            {/* Tabs for switching between views */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "general"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("general")}
              >
                Vue Générale
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "districts"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("districts")}
              >
                Par Arrondissement
              </button>
            </div>

            {/* Main content area - visualization components would be added here */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                  Prix moyen au m² à Paris
                </h2>
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                  Chart component would go here
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                  Nombre de transactions par mois
                </h2>
                <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                  Chart component would go here
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}