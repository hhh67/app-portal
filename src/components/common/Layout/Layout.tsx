import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Box } from '@mui/system';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const isMobile = useMediaQuery();

  return <>{isMobile ? <Box mb={4}>{children}</Box> : <Box>{children}</Box>}</>;
};
