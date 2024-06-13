import { Stack, Typography } from '@mui/material';
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
    <Stack gap={3} px={3} py={2.5} borderRadius={2.5} bgcolor="background.default">
      <Image src={icon} alt={subtitle} width={26} height={26} />
      <Stack gap={1.25}>
        <Typography variant="h4" color="common.white">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
        <Typography variant="body2" color={color} whiteSpace="nowrap">
          +{increment}% from yesterday
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SaleCard;
