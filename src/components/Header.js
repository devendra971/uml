import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu'; 
import MenuItem from '@mui/material/MenuItem';


function Header(props) {
  const { sections, title } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPersona, setSelectedPersona] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (persona) => {
    setSelectedPersona(persona);
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
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
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={handleClick}
          aria-controls="persona-menu"
          aria-haspopup="true"
        >
          {selectedPersona ? selectedPersona : 'Login'}
        </Button>
        <Menu
          id="persona-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose(selectedPersona)}
        >
          {['Student', 'Faculty', 'Staff', 'Moderator', 'Administrator'].map((persona) => (
            <MenuItem key={persona} onClick={() => handleClose(persona)}>
              {persona}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}x
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
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