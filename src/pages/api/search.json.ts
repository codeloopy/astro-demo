import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ url }): Promise<Response> => {
  const query: string | null = url.searchParams.get("query")?.toLowerCase() || "";

  // handle if query is not present
  if(query === null) {
    return new Response(JSON.stringify({ error: "Query parameter is required" }), { status: 400, headers: { "Content-Type": "application/json" }});
  }

  const allArticles: CollectionEntry<'blog'>[] = await getCollection("blog");

  // filter articles based on query
  const searchResults = allArticles.filter(article => {
  const titleMatch: boolean = article.data.title?.toLowerCase().includes(query!.toLowerCase());
  const bodyMatch: boolean = article.body?.toLowerCase().includes(query!.toLowerCase());
  const slugMatch: boolean = article.slug?.toLowerCase().includes(query!.toLowerCase());
  console.log("Title Match: ", titleMatch, "Body Match: ", bodyMatch, "Slug Match: ", slugMatch)
  return titleMatch || bodyMatch || slugMatch;
})

  return new Response(JSON.stringify({ searchResults }), { status: 200, headers: { "Content-Type": "application/json" }});

}


// to hit the endpoint /api/search.json?query=your_search_term
