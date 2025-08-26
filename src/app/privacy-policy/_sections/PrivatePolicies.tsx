"use client";
import { Box, Typography, List, ListItem } from "@mui/material";

type PrivatePoliciesProps = {
  date?: string;
  businessName: string;
  businessEmail: string;
  businessPhone: string;
};

export default function PrivatePolicies({
  date = "6 May 2025",
  businessName,
  businessEmail,
  businessPhone,
}: PrivatePoliciesProps) {
  return (
    <Box
      component="article"
      sx={{
        backgroundColor: "#ffffff",
        maxWidth: "1440px",
        mx: "auto",
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
        py: { xs: 5, sm: 8, md: 10 },
        mt: { xs: "96px", sm: 0 },
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontWeight: 600, fontSize: "32px", mb: 2 }}
      >
        Privacy Policy
      </Typography>

      <Typography paragraph>
        <strong>Effective Date:</strong> Effective from {date}
      </Typography>

      <Typography paragraph>
        This website is operated by {businessName}. We are committed to
        protecting and respecting your privacy in accordance with UK data
        protection laws, including the UK General Data Protection Regulation (UK
        GDPR) and the Data Protection Act 2018.
      </Typography>

      <Typography paragraph>
        This Privacy Policy explains how we collect, use, and safeguard your
        personal data when you interact with this website.
      </Typography>

      <Section title="1. Information We Collect">
        <Typography paragraph>
          We may collect and process the following data about you:
        </Typography>
        <Bullets
          items={[
            "Information you provide directly: such as your name, email address, phone number, or any other details submitted via contact forms or account registration.",
            "Technical information: including IP address, browser type, operating system, and browsing behavior via cookies and analytics tools.",
            "Usage data: pages visited, time spent, interactions with content, and referring URLs.",
          ]}
        />
      </Section>

      <Section title="2. How We Use Your Information">
        <Typography paragraph>We may use your personal data to:</Typography>
        <Bullets
          items={[
            "Respond to enquiries or provide services requested via the website.",
            "Improve the performance and content of the website.",
            "Ensure security and monitor for fraud or misuse.",
            "Comply with legal or regulatory obligations.",
          ]}
        />
      </Section>

      <Section title="3. Lawful Bases for Processing">
        <Typography paragraph>
          We process your personal data under one or more of the following legal
          bases:
        </Typography>
        <Bullets
          items={[
            "Consent: when you provide clear consent (e.g., newsletter signup).",
            "Contract: when processing is necessary for the performance of a contract.",
            "Legal obligation: to comply with applicable law.",
            "Legitimate interests: for the operation and improvement of the website and services.",
          ]}
        />
      </Section>

      <Section title="4. Cookies and Tracking">
        <Typography paragraph>
          We use cookies and similar technologies to collect technical and usage
          data. You can control cookie preferences through your browser
          settings. For more information, please see our Cookie Policy (if
          applicable).
        </Typography>
      </Section>

      <Section title="5. Data Sharing">
        <Typography paragraph>
          We do not sell your personal data. However, we may share data with:
        </Typography>
        <Bullets
          items={[
            "Service providers or contractors supporting our business operations (e.g., hosting providers).",
            "Law enforcement or regulatory authorities if legally required.",
          ]}
        />
      </Section>

      <Section title="6. International Transfers">
        <Typography paragraph>
          If we transfer your personal data outside the UK, we ensure
          appropriate safeguards are in place in accordance with UK GDPR
          requirements.
        </Typography>
      </Section>

      <Section title="7. Data Retention">
        <Typography paragraph>
          We retain your data only as long as necessary for the purposes set out
          in this policy or as required by law.
        </Typography>
      </Section>

      <Section title="8. Your Rights">
        <Typography paragraph>Under UK GDPR, you have the right to:</Typography>
        <Bullets
          items={[
            "Access the personal data we hold about you.",
            "Request correction or deletion of inaccurate or outdated data.",
            "Object to or restrict processing of your data.",
            "Withdraw consent (where applicable).",
            "Lodge a complaint with the UK Information Commissioner’s Office (ICO).",
          ]}
        />
      </Section>

      <Section title="9. Security">
        <Typography paragraph>
          We implement appropriate technical and organizational measures to
          safeguard your data against unauthorized access, loss, or disclosure.
        </Typography>
      </Section>

      <Section title="10. Contact Us">
        <Typography paragraph>
          If you have any questions or concerns about this Privacy Policy,
          please contact us.
        </Typography>
        <Typography paragraph>Email: {businessEmail}</Typography>
        <Typography>Phone: {businessPhone}</Typography>
      </Section>
    </Box>
  );
}

function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <Box component="section" sx={{ "&:not(:first-of-type)": { mt: 4 } }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontWeight: 600, fontSize: "20px", mb: 1.5 }}
      >
        {props.title}
      </Typography>
      {props.children}
    </Box>
  );
}

function Bullets(props: { items: string[] }) {
  return (
    <List
      component="ul"
      disablePadding
      sx={{
        pl: 3,
        listStyleType: "disc",
        "& .MuiListItem-root": { display: "list-item", px: 0, py: 0.5 },
      }}
    >
      {props.items.map((t, i) => (
        <ListItem key={i} component="li">
          {t}
        </ListItem>
      ))}
    </List>
  );
}
