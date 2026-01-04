const AUTHOR_ID = "2220748413";
const API_BASE = "https://api.semanticscholar.org/graph/v1";

export interface Author {
  authorId: string;
  name: string;
}

export interface Publication {
  paperId: string;
  title: string;
  year: number;
  venue: string;
  authors: Author[];
  citationCount: number;
  url: string;
  externalIds?: {
    DOI?: string;
    PubMed?: string;
    ArXiv?: string;
  };
  isOpenAccess: boolean;
}

interface SemanticScholarResponse {
  offset: number;
  next?: number;
  data: Publication[];
}

export async function getPublications(): Promise<Publication[]> {
  const fields = [
    "title",
    "year",
    "venue",
    "authors",
    "citationCount",
    "externalIds",
    "isOpenAccess",
    "url",
  ].join(",");

  try {
    const response = await fetch(
      `${API_BASE}/author/${AUTHOR_ID}/papers?fields=${fields}&limit=100`,
      {
        next: { revalidate: false }, // Static at build time
      }
    );

    if (!response.ok) {
      console.error(
        `Semantic Scholar API error: ${response.status} ${response.statusText}`
      );
      return [];
    }

    const data: SemanticScholarResponse = await response.json();

    // Sort by year descending (newest first)
    return data.data.sort((a, b) => (b.year || 0) - (a.year || 0));
  } catch (error) {
    console.error("Failed to fetch publications:", error);
    return [];
  }
}

export function countFirstAuthorPapers(
  publications: Publication[],
  authorId: string = AUTHOR_ID
): number {
  return publications.filter(
    (pub) => pub.authors.length > 0 && pub.authors[0].authorId === authorId
  ).length;
}
