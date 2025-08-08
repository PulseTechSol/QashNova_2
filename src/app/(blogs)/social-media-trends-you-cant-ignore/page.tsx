import BlogHero from "@/app/(blogs)/_components/BlogHero";
import { Box } from "@mui/material";
import BlogHeading from "../_components/BlogHeading";
import BlogParagraph from "../_components/BlogParagraph";
import BlogList from "../_components/BlogList";
import { sectionPadding, blogScreenGap, maxWidth } from "@/app/_utils/themes";

export default function SocialMediaTrendsPage() {
  return (
    <>
      <BlogHero
        text="Social Media Trends You Can't Ignore"
        backgroundImage="./blogsBackgrounds/blog3.webp"
      />
      <Box
        sx={{
          padding: sectionPadding,
          paddingTop: "0px !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: blogScreenGap,
            width: "100%",
            maxWidth: maxWidth,
            margin: "auto",
          }}
        >
          <BlogParagraph text="The social media landscape is in a constant state of flux. To connect with your audience and maintain a competitive edge, it's essential to not just follow but anticipate these changes. In 2025, a few key trends are reshaping how brands communicate and build communities online. Ignoring them means missing out on powerful opportunities for growth." />
          <BlogHeading heading="Key Trends to Watch:" />
          {/* there list comes here */}
          <BlogList
            items={[
              "The Rise of Short-Form Video: Platforms like TikTok, Instagram Reels, and YouTube Shorts have solidified short-form video as a primary medium for content consumption. These dynamic, engaging videos are perfect for capturing attention quickly, telling a story, and driving immediate engagement. Brands must lean into creating authentic, bite-sized content that resonates with this fast-paced format.",
              "Authenticity and Community Over Perfection: Audiences are increasingly wary of highly polished, corporate-speak content. They crave authenticity and genuine connection. This trend emphasizes behind-the-scenes glimpses, user-generated content, and direct, conversational interactions. Building a strong online community, where followers feel valued and heard, is now more important than ever.",
              "The Creator Economy's Influence: Content creators are no longer just influencers; they are trusted brand ambassadors and powerful partners. Collaborating with creators who align with your brand values and mission can open doors to new, highly engaged audiences. This trend moves beyond simple sponsored posts to long-term, strategic partnerships that feel organic and meaningful.",
              "AI-Powered Personalization: Artificial intelligence is now a powerful tool for social media marketing. AI helps in everything from generating creative content ideas and optimizing post timing to personalizing ad targeting. Leveraging AI allows brands to deliver highly relevant content to individual users, significantly improving engagement and conversion rates.",
            ]}
          />
          <BlogParagraph text="Staying on top of these trends is not about chasing fads, but about adapting your strategy to meet your audience where they are. By embracing short-form video, prioritizing authenticity, collaborating with creators, and using AI for personalization, your brand can build a more resilient and impactful social media presence." />
        </Box>
      </Box>
    </>
  );
}
