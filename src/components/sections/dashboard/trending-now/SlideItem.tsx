import { ReactElement } from 'react';
import {
  Avatar,
  AvatarGroup,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import { TrendingItem } from 'data/trending-items';
import { stringAvatar } from 'helpers/string-avatar';

const SlideItem = ({ name, imgsrc, popularity, users }: TrendingItem): ReactElement => {
  return (
    <Card
      sx={{
        bgcolor: 'background.default',
      }}
    >
      <CardMedia image={imgsrc} />
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary">
          {name}
        </Typography>
        <Stack direction="row" justifyContent="space-between" color="text.primary">
          <Typography variant="subtitle2">Popularity</Typography>
          <Typography variant="subtitle2">{popularity}%</Typography>
        </Stack>
        <LinearProgress variant="determinate" color="info" value={popularity} />
        <AvatarGroup max={4}>
          {users.map((user, idx) => (
            <Avatar key={idx} {...stringAvatar(user)} />
          ))}
        </AvatarGroup>
      </CardContent>
    </Card>
  );
};

export default SlideItem;
