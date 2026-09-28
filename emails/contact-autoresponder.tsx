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
 * one-working-day expectation (mirrors data/copy/contact.ts) and restates what
 * they told us so the thread has context. Warm and direct, not a "thanks for your
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
      <Preview>We reply within one working day. Here is what happens next.</Preview>
      <Body style={{ backgroundColor: "#f4f4f5", fontFamily: "Arial, Helvetica, sans-serif" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", padding: "24px" }}>
          <Heading as="h1" style={{ fontSize: "20px", color: "#0A0B14", margin: "0 0 12px" }}>
            Thanks, {firstName} — we&apos;ve got your message.
          </Heading>
          <Text style={{ color: "#27272a", margin: "0 0 12px" }}>
            We will reply within one working day, and a message sent at the weekend is answered on
            the next working day. If you asked for a free audit, the reply gives the date your audit
            will arrive. Otherwise it suggests two or three times for a free 30-minute discovery
            call.
          </Text>
          <Text style={{ color: "#27272a", margin: "0 0 20px" }}>
            A discovery call ends with a clear next step: a written scope within three working days,
            with a fixed fee against it, or an honest reason the work should go elsewhere.
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
              href="https://webask.co.uk/free-audit"
              style={{
                backgroundColor: "#0F766E",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              See what the free audit covers
            </Button>
          </Section>

          <Text style={{ color: "#71717a", fontSize: "12px", margin: "24px 0 0" }}>
            WebAsk · Digital services for small businesses · info@webask.co.uk
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactAutoresponder;
