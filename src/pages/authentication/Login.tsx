import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { ReactElement, useState } from 'react';
import { stone } from 'theme/colors';

const Login = (): ReactElement => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Paper
      sx={{
        py: 6,
        px: { xs: 5, sm: 7.5 },
      }}
    >
      <Stack justifyContent="center" gap={4}>
        <Typography variant="h2" textAlign="center" color="text.secondary">
          Log In
        </Typography>
        <Typography variant="h4" fontWeight={500} textAlign="center" color="text.primary">
          Don’t have an account?{' '}
          <Link href="/authentication/sign-up" underline="none">
            Sign up
          </Link>
        </Typography>
        <TextField
          variant="filled"
          label="Email"
          type="email"
          sx={{
            '.MuiFilledInput-root': {
              bgcolor: stone[800],
              ':hover': {
                bgcolor: 'background.default',
              },
              ':focus': {
                bgcolor: 'background.default',
              },
              ':focus-within': {
                bgcolor: 'background.default',
              },
            },
            borderRadius: 2,
          }}
        />
        <TextField
          variant="filled"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          sx={{
            '.MuiFilledInput-root': {
              bgcolor: stone[800],
              ':hover': {
                bgcolor: 'background.default',
              },
              ':focus': {
                bgcolor: 'background.default',
              },
              ':focus-within': {
                bgcolor: 'background.default',
              },
            },
            borderRadius: 2,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  size="small"
                  edge="end"
                  sx={{
                    mr: 2,
                  }}
                >
                  {showPassword ? (
                    <IconifyIcon icon="el:eye-open" color="text.secondary" />
                  ) : (
                    <IconifyIcon icon="el:eye-close" color="text.primary" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormGroup sx={{ ml: 1 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Keep me signed in"
            sx={{
              color: 'text.secondary',
            }}
          />
        </FormGroup>
        <Button LinkComponent={Link} href="/">
          Sign In
        </Button>
        <Divider />
        <Stack
          gap={1.5}
          sx={{
            mt: 4,
          }}
        >
          <Typography textAlign="center" color="text.secondary" variant="subtitle1">
            Or sign in using:
          </Typography>
          <Button startIcon={<IconifyIcon icon="flat-color-icons:google" />} variant="outlined">
            Continue with Google
          </Button>
          <Button startIcon={<IconifyIcon icon="logos:facebook" />} variant="outlined">
            Continue with Facebook
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Login;
