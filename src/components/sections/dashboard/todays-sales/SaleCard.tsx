import { Box, Stack, Typography } from '@mui/material';
import Image from 'components/base/Image';

interface SaleCardProps {
  icon: string;
  title: string;
  subtitle: string;
  increment: number;
  color: string;
}

const SaleCard = ({ icon, title, subtitle, increment, color }: SaleCardProps) => {
  return (
    <Box px={3} py={2.5} borderRadius={2.5} bgcolor="background.default">
      <Image src={icon} alt={subtitle} width={26} height={26} />
      <Stack>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
        <Typography variant="body2" color={color}>
          +{increment}% from yesterday
        </Typography>
      </Stack>
    </Box>
  );
};

export default SaleCard;
