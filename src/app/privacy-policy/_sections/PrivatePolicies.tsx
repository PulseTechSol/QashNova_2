import { Box, Typography, List, ListItem } from "@mui/material";

interface PrivatePoliciesProps {
  date?: string;
  businessName: string;
  businessEmail: string;
  businessPhone: string;
}

export default function PrivatePolicies({
  date = "6 may 2025",
  businessName,
  businessEmail,
  businessPhone,
}: PrivatePoliciesProps): JSX.Element {
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "40px 20px",
            sm: "80px 30px",
            md: "80px 50px",
            lg: "100px 100px",
          },
        }}
      >
        <Box
          sx={{
            bgColor: "#ffffff",
            maxWidth: "1440px",
            margin: "auto",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Privacy Policy
          </Typography>
          <br />
          <Typography>
            <Typography component="span" fontWeight="bold">
              Effective Date:{" "}
            </Typography>
            Effective from {date}
          </Typography>
          <br />
          <Typography>
            This website is operated by {businessName}. We are committed to
            protecting and respecting your privacy in accordance with UK data
            protection laws, including the UK General Data Protection Regulation
            (UK GDPR) and the Data Protection Act 2018.
            <br />
            <br />
            This Privacy Policy explains how we collect, use, and safeguard your
            personal data when you interact with this website. <br /> <br />
          </Typography>
          <Box
            sx={{
              "& > :not(:last-child)": {
                pb: { xs: "6px", sm: "12px", md: "18px" },
              },
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                1. Information We Collect
              </Typography>
              <Typography>
                We may collect and process the following data about you:
              </Typography>
              <List component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Information you provide directly: Such as your name, email
                  address, phone number, or any other details submitted via
                  contact forms or account registration.
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Technical information: Including IP address, browser type,
                  operating system, and browsing behavior via cookies and
                  analytics tools.
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Usage data: Pages visited, time spent, interactions with
                  content, and referring URLs.
                </ListItem>
              </List>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                2. How We Use Your Information
              </Typography>
              <Typography>We may use your personal data to:</Typography>
              <List component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Respond to enquiries or provide services requested via the
                  website.
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Improve the performance and content of the website.
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Ensure security and monitor for fraud or misuse.
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Comply with legal or regulatory obligations.
                </ListItem>
              </List>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                3. Lawful Bases for Processing
              </Typography>
              <Typography>
                We process your personal data under one or more of the following
                legal bases:
              </Typography>
              <List component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Consent: When you provide clear consent (e.g., newsletter
                  signup).
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Contract: When processing is necessary for the performance of
                  a contract.
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Legal obligation: To comply with applicable law.
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Legitimate interests: For the operation and improvement of the
                  website and services.
                </ListItem>
              </List>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                4. Cookies and Tracking
              </Typography>
              <Typography>
                We use cookies and similar technologies to collect technical and
                usage data. You can control cookie preferences through your
                browser settings. For more information, please see our Cookie
                Policy (if applicable).
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                5. Data Sharing
              </Typography>
              <Typography>
                We do not sell your personal data. However, we may share data
                with:
              </Typography>
              <List component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Service providers or contractors supporting our business
                  operations (e.g., hosting providers).
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Law enforcement or regulatory authorities if legally required.
                </ListItem>
              </List>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                6. International Transfers
              </Typography>
              <Typography>
                If we transfer your personal data outside the UK, we ensure
                appropriate safeguards are in place in accordance with UK GDPR
                requirements.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                7. Data Retention
              </Typography>
              <Typography>
                We retain your data only as long as necessary for the purposes
                set out in this policy or as required by law.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                8. Your Rights
              </Typography>
              <Typography>Under UK GDPR, you have the right to:</Typography>
              <List component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Access the personal data we hold about you.
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Request correction or deletion of inaccurate or outdated data.
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Object to or restrict processing of your data.
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Withdraw consent (where applicable).
                </ListItem>
                <ListItem
                  component="li"
                  sx={{ display: "list-item", paddingX: 0 }}
                >
                  Lodge a complaint with the UK Information Commissioner’s
                  Office (ICO).
                </ListItem>
              </List>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                9. Security
              </Typography>
              <Typography>
                We implement appropriate technical and organizational measures
                to safeguard your data against unauthorized access, loss, or
                disclosure.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                10. Contact Us
              </Typography>
              <Typography>
                If you have any questions or concerns about this Privacy Policy,
                please contact us
              </Typography>
              <Typography>Email: {businessEmail}</Typography>
              <Typography>Phone: {businessPhone}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
