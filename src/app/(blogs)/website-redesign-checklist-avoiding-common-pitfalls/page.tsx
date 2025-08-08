import BlogHero from "@/app/(blogs)/_components/BlogHero";
import { Box } from "@mui/material";
import BlogHeading from "../_components/BlogHeading";
import BlogParagraph from "../_components/BlogParagraph";
import BlogList from "../_components/BlogList";
import { sectionPadding, blogScreenGap, maxWidth } from "@/app/_utils/themes";

export default function WebsiteRedesignChecklistPage() {
  return (
    <>
      <BlogHero text="Website Redesign Checklist: Avoiding Common Pitfalls" />
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
          <BlogParagraph text="A website redesign is a significant undertaking. While the promise of a fresh, modern look is exciting, without a strategic approach, it can lead to costly mistakes, lost search rankings, and a confusing user experience. To ensure your redesign is a success, here's a checklist to help you navigate the process and avoid common pitfalls." />
          <BlogHeading heading="Phase 1: The Pre-Redesign Strategy" />
          <BlogParagraph text="Before a single line of code is written, a solid plan is your most valuable asset." />
          {/* there list comes here */}
          <BlogList
            items={[
              "Define Your Goals: Don't redesign just for the sake of it. What are you trying to achieve? More leads? Higher conversion rates? A better mobile experience? Clearly defined goals will guide every decision.",
              "Audit Your Existing Site: Use tools like Google Analytics to understand what content and pages are performing well. What are your most-visited pages? Where are users dropping off? This data is gold.",
              "Conduct a Content Inventory: Go through all your existing content. Decide what to keep, what to update, and what to remove entirely. This is the perfect time to streamline your messaging and clean out outdated information.",
              "Benchmark Your SEO Performance: Document your current keyword rankings, organic traffic, and backlink profile. This provides a baseline so you can measure the success of your redesign and ensure you don't lose valuable SEO equity.",
            ]}
          />
          <BlogHeading heading="Phase 2: Design & Development" />
          <BlogParagraph text="This is where your vision takes shape, but don't overlook the technical details." />
          {/* there list comes here */}
          <BlogList
            items={[
              "Prioritize User Experience (UX): A beautiful site is useless if it's hard to navigate. Focus on intuitive layouts, clear calls-to-action (CTAs), and a logical user flow that guides visitors toward your goals.",
              "Design for Mobile-First: With most traffic coming from mobile devices, your new website must be fully responsive. Start the design process with the mobile experience in mind and scale up to desktop.",
              "Create an SEO Migration Plan: This is the most common reason for redesign failure. You must create a URL redirect map (301 redirects) from your old URLs to the new ones to preserve your search rankings and prevent 'Page Not Found' errors.",
              "Optimize for Speed: A slow website frustrates users and hurts your search rankings. Ensure your new site uses optimized images, clean code, and fast hosting to deliver a quick and seamless experience.",
            ]}
          />
          <BlogHeading heading="Phase 3: The Launch & Post-Launch" />
          <BlogParagraph text="The work isn't over once the site goes live." />
          {/* there list comes here */}
          <BlogList
            items={[
              "Run a Comprehensive Technical Check: Before and immediately after launch, test every link, button, and form. Verify that your SSL certificate is installed correctly and that the site is secure.",
              "Integrate Analytics: Make sure your new site's analytics tools are properly installed and tracking data from day one. You can't improve what you don't measure.",
              "Monitor Performance Closely: For the first few weeks, keep a close eye on your website's performance. Monitor traffic, conversion rates, and SEO rankings. Be ready to make quick adjustments if any issues arise.",
            ]}
          />
          <BlogParagraph text="By following this checklist, you'll transform your redesign from a potential risk into a powerful opportunity for growth, ensuring your new website is not just aesthetically pleasing, but a high-performing asset for your business." />
        </Box>
      </Box>
    </>
  );
}
