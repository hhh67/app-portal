import { SNS } from '@/constants';
import theme from '@/theme';
import { Typography } from '@mui/material';
import { LinkCard } from '../LinkCard';

export const ContactContent: React.FC = () => {
  return (
    <>
      <Typography variant="body2">メールにて承ります。</Typography>
      <Typography variant="body2">
        と言いつつ各種SNSのDMでも承ります。
      </Typography>
      <LinkCard
        detail={{
          description: SNS.MAIL.DESCRIPTION,
          iconSrc: SNS.MAIL.ICON_SRC,
          url: SNS.MAIL.URL,
        }}
        variant="light"
        background={theme.palette.background.mail}
      />
    </>
  );
};
