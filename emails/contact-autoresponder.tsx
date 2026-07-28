import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

/*
 * Autoresponder — sent to the prospect immediately after they submit. Sets the
 * one-business-day expectation (mirrors data/copy/contact.ts) and restates what
 * they told us so the thread has context. Warm, senior, not a "thanks for your
 * interest" template — per the trust bullets on the contact page.
 */

export type ContactAutoresponderProps = {
  readonly name: string;
  readonly service: string;
  readonly message: string;
};

export function ContactAutoresponder({ name, service, message }: ContactAutoresponderProps) {
  const firstName = name.split(/\s+/)[0] ?? name;
  return (
    <Html>
      <Head />
      <Preview>We reply within one business day — here is what happens next.</Preview>
      <Body style={{ backgroundColor: "#f4f4f5", fontFamily: "Arial, Helvetica, sans-serif" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", padding: "24px" }}>
          <Heading as="h1" style={{ fontSize: "20px", color: "#0A0B14", margin: "0 0 12px" }}>
            Thanks, {firstName} — we&apos;ve got your message.
          </Heading>
          <Text style={{ color: "#27272a", margin: "0 0 12px" }}>
            A senior engineer will reply within one business day with two or three suggested times
            for a free 30-minute discovery call. If your message landed over the weekend,
            you&apos;ll hear from us Monday morning your time.
          </Text>
          <Text style={{ color: "#27272a", margin: "0 0 20px" }}>
            The call ends with a clear next step — either a written scope on its way to you, or an
            honest referral to a better-fit partner. No sales pitch.
          </Text>

          <Section
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "20px",
              border: "1px solid #e4e4e7",
            }}
          >
            <Text style={{ fontWeight: 600, color: "#0A0B14", margin: "0 0 8px" }}>
              What you sent us
            </Text>
            <Text style={{ color: "#52525b", margin: "0 0 4px", fontSize: "14px" }}>
              Service of interest: {service}
            </Text>
            <Hr style={{ borderColor: "#e4e4e7", margin: "12px 0" }} />
            <Text style={{ color: "#27272a", margin: 0, whiteSpace: "pre-wrap", fontSize: "14px" }}>
              {message}
            </Text>
          </Section>

          <Section style={{ textAlign: "center", margin: "24px 0 0" }}>
            <Button
              href="https://naxdor.com/free-audit"
              style={{
                backgroundColor: "#5B4CDB",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Prefer a written audit first? Request one
            </Button>
          </Section>

          <Text style={{ color: "#71717a", fontSize: "12px", margin: "24px 0 0" }}>
            Naxdor · Digital services for SMBs · contact@naxdor.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactAutoresponder;
