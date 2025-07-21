import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
    const posts = await getCollection("posts"); // adjust "blog" to your collection name
    const aboutPage = await getCollection('pages', ({ slug }) => slug === 'about');
    const about = aboutPage[0];
    const content = `# Dr Daniel Fascia: Musculoskeletal Radiologist, AI, Healthtech startup expert
    \n${about ? about.body : ''}
    \n## Posts
    \n${posts
            .map(
                (post) =>
`[${post.data.title}](https://www.danielfascia.com/post/${post.slug}.md)`
            )
            .join("\n\n")}`;
    return new Response(content, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
};