import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

/*
 * Internal lead notification — sent to CONTACT_NOTIFY_EMAIL on every valid
 * submission. Plain, scannable, and reply-friendly: the prospect's email is the
 * reply-to on the Resend send, so hitting "Reply" reaches them directly.
 */

export type ContactNotificationProps = {
  readonly name: string;
  readonly email: string;
  readonly company: string;
  readonly service: string;
  readonly budget: string;
  readonly timeline: string;
  readonly country: string;
  readonly message: string;
};

const row = { margin: "0 0 4px" } as const;
const labelStyle = { fontWeight: 600, color: "#0A0B14" } as const;

export function ContactNotification({
  name,
  email,
  company,
  service,
  budget,
  timeline,
  country,
  message,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>{`New enquiry from ${name} — ${service}, ${budget}`}</Preview>
      <Body style={{ backgroundColor: "#f4f4f5", fontFamily: "Arial, Helvetica, sans-serif" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", padding: "24px" }}>
          <Heading as="h1" style={{ fontSize: "20px", color: "#0A0B14", margin: "0 0 4px" }}>
            New contact enquiry
          </Heading>
          <Text style={{ color: "#52525b", margin: "0 0 20px" }}>
            A prospect just submitted the contact form on naxdor.com.
          </Text>

          <Section
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "20px",
              border: "1px solid #e4e4e7",
            }}
          >
            <Text style={row}>
              <span style={labelStyle}>Name: </span>
              {name}
            </Text>
            <Text style={row}>
              <span style={labelStyle}>Email: </span>
              <Link href={`mailto:${email}`}>{email}</Link>
            </Text>
            <Text style={row}>
              <span style={labelStyle}>Company: </span>
              {company}
            </Text>
            <Hr style={{ borderColor: "#e4e4e7", margin: "12px 0" }} />
            <Text style={row}>
              <span style={labelStyle}>Service: </span>
              {service}
            </Text>
            <Text style={row}>
              <span style={labelStyle}>Budget: </span>
              {budget}
            </Text>
            <Text style={row}>
              <span style={labelStyle}>Timeline: </span>
              {timeline}
            </Text>
            <Text style={row}>
              <span style={labelStyle}>Country: </span>
              {country}
            </Text>
            <Hr style={{ borderColor: "#e4e4e7", margin: "12px 0" }} />
            <Text style={{ ...labelStyle, margin: "0 0 4px" }}>Message</Text>
            <Text style={{ color: "#27272a", margin: 0, whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>

          <Text style={{ color: "#71717a", fontSize: "12px", margin: "16px 0 0" }}>
            Reply to this email to reach {name} directly.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactNotification;
