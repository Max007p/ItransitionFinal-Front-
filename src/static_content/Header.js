import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import GoogleIcon from '@mui/icons-material/Google';
import Backdrop from '@mui/material/Backdrop';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

function Header(props) {
  const { sections, title } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  let regTemplate;
  
  
  
  if (window.$name == null)
  {
    regTemplate = <Button variant="outlined" size="small" href="/user/1/">Profile</Button>
  }
  else
  {
    regTemplate = 
    <div>
      <Button variant="outlined" size="small" onClick={handleOpen}>Sign up</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Войдите с помощью социальной сети
            </Typography>
            <Divider/>
            <Stack
              direction="column"
              justifyContent="center"
              spacing={2}
              alignItems="stretch"
              sx={{marginBottom: 2, marginTop: 2}}
            >
              <Button size="small" variant="outlined" color="primary" aria-label="Sign in through Google" component="span" startIcon={<GoogleIcon/>}>Google</Button>
              <Button size="small" variant="outlined" color="primary" aria-label="Sign in through VK" component="span">Vkontakte</Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        {regTemplate}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="regular"
        sx={{ justifyContent: 'center' }}
      >
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {sections.map((section) => (
                <Button variant="contained" key={section.title} href={section.url}>
                    {section.title}
                </Button>
            ))}
        </ButtonGroup>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;