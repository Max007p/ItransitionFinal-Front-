import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import authService from '../services/auth.service';
import { useNavigate } from 'react-router';

function Registration() {
    const theme = createTheme();
    let navigate = useNavigate();
    const [result, setResult] = React.useState([]);

    const handleSubmitRegister = React.useCallback(async() => {
        const login = document.getElementById("login");
        const password = document.getElementById("password");
        authService.register(login.value, password.value).then((response) => setResult(response.data))

    }, [])
    const handleSubmitLogin = React.useCallback(async() => {
        const login = document.getElementById("login");
        const password = document.getElementById("password");
        authService.login(login.value, password.value).then((response) => {if (response.status === 200) navigate("/");});
    }, [])

    

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            id="box"
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box id="registerBox" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="login"
                label="Логин"
                name="login"
                autoComplete="login"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button id="signup" type="submit" onClick={handleSubmitRegister} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Регистрация</Button>
              <Button id="signin" type="submit" onClick={handleSubmitLogin} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Логин</Button>

            </Box>
          </Box>
        </Container>
      </ThemeProvider>
            );
}
    
export default Registration;