import {
  Button,
  Divider,
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

const SignUp = (): ReactElement => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
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
          Create New Account
        </Typography>
        <Typography variant="h4" fontWeight={500} textAlign="center" color="text.primary">
          Have an account?{' '}
          <Link href="/authentication/login" underline="none">
            Sign In
          </Link>
        </Typography>
        <TextField
          variant="filled"
          label="Name"
          type="text"
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
                  onClick={handleShowPassword}
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
        <TextField
          variant="filled"
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
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
                  onClick={handleShowConfirmPassword}
                  size="small"
                  edge="end"
                  sx={{
                    mr: 2,
                  }}
                >
                  {showConfirmPassword ? (
                    <IconifyIcon icon="el:eye-open" color="text.secondary" />
                  ) : (
                    <IconifyIcon icon="el:eye-close" color="text.primary" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button LinkComponent={Link} href="/">
          Sign Up
        </Button>
        <Typography variant="subtitle2" textAlign="center">
          By creating account, you agree to our{' '}
          <Link href="#!" underline="none">
            Terms of Service
          </Link>
        </Typography>
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

export default SignUp;
