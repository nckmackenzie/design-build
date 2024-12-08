import {
  Body,
  Font,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
  Section,
} from '@react-email/components';

interface DebtorEmailReminderProps {
  clientName: string;
  phoneNo: string;
  email: string;
  message: string;
}

export default function FreeConsultEmail({
  clientName,
  phoneNo,
  email,
  message,
}: DebtorEmailReminderProps) {
  return (
    <Html>
      <Preview>New Email from the website.</Preview>
      <Tailwind>
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="">
          <Section className="p-2">
            <Heading>New Email from the website</Heading>
            <Text>
              You have received a new email from {clientName}. Details as below:
            </Text>
            <Text>
              <span className="font-semibold">Full Name:</span> {clientName}
            </Text>
            <Text>
              <span className="font-semibold">Phone No:</span> {phoneNo}
            </Text>
            <Text>
              <span className="font-semibold">Email:</span> {email}
            </Text>
            <Text className="font-semibold">Message</Text>
            <Text>{message}</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
