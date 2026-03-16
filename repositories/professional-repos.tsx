import { professionalsData } from "@/lib/data/professionals-data";
import { ProfessionalType } from "@/types/professional-type";

export async function getProfessionalRepo() {
  const professionals = professionalsData;
  return professionals as ProfessionalType[];
}

export async function getProfessionalBySlugRepo(slug: string) {
  const professionals = professionalsData.find(
    (professional) => professional.slug === slug,
  );
  return professionals as ProfessionalType;
}
