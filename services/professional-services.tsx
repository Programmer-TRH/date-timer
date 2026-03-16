import {
  getProfessionalBySlugRepo,
  getProfessionalRepo,
} from "@/repositories/professional-repos";
import { cacheLife, cacheTag } from "next/cache";

export async function getProfessionals() {
  "use cache";
  cacheTag("professionals");
  cacheLife("days");
  const professionals = await getProfessionalRepo();
  return professionals;
}

export async function getProfessionalBySlug(slug: string) {
  "use cache";
  cacheTag("professional");
  cacheLife("days");
  const professional = await getProfessionalBySlugRepo(slug);
  return professional;
}
