import ProfessionalCard from "./professional-card";
import { getProfessionals } from "@/services/professional-services";

export default async function ProfessionalGrid() {
  const professionals = await getProfessionals();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {professionals.map((professional) => (
        <ProfessionalCard key={professional.id} professional={professional} />
      ))}
    </div>
  );
}
