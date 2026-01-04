import { getPublications, countFirstAuthorPapers } from "@/lib/semantic-scholar";
import HomePage from "./components/HomePage";

export default async function Page() {
  const publications = await getPublications();
  const firstAuthorCount = countFirstAuthorPapers(publications);

  return <HomePage publications={publications} firstAuthorCount={firstAuthorCount} />;
}
