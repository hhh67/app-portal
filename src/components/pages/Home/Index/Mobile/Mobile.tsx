import { Stack } from '@mui/material';
import { ContactContent } from './ContactContent';
import { MoreContent } from './MoreContent';
import { ProfileContent } from './ProfileContent';
import { Section } from './Section';

export const Mobile: React.FC = () => {
  return (
    <Stack direction={'column'} spacing={2} pb={4}>
      {/* 🐱 Profile */}
      <ProfileContent />

      {/* 🐈 More */}
      <Section title="More">
        <MoreContent />
      </Section>

      {/* ✉️ Contact */}
      <Section title="Contact">
        <ContactContent />
      </Section>
    </Stack>
  );
};
