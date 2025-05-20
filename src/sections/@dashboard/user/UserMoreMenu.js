import { useRef, useState, useEffect } from 'react';
import Axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// component
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import Iconify from '../../../components/Iconify';

import AddMember from "../../../pages/AddMember";

// ----------------------------------------------------------------------

export default function UserMoreMenu(props) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const { menu, setMenu, setMembers, member } = props;

  const handleDelete  = () => {
    if (window.confirm(`Delete ${member.firstName} ${member.lastName}?`)) {
      Axios.delete(`${process.env.REACT_APP_API_URL}/api/members/${member._id}`)
        .then((response) => {
          if (response.message) {
            console.error("An error occurred");
          } else {
            setMenu(!menu);
          }
        });
    }
  };

  const handleUpdate = () => setOpen(!open);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/api/members/`)
      .then((response) => {
        setMembers(response.data);
      });
  }, [open, setMembers]);

  const handleGenerateCard = () => {
    Axios.get(
      `${process.env.REACT_APP_API_URL}/members/card/${member._id}`,
      { responseType: 'blob' }
    ).then((response) => {
      window.open(URL.createObjectURL(response.data));
    });
  };

  return (
    <>
      <AddMember
        isOpen={open}
        toggle={handleUpdate}
        edit={open}
        member={member}
      />

      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{ sx: { width: 200, maxWidth: '100%' } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem
          key="delete-member"
          sx={{ color: 'text.secondary' }}
          onClick={handleDelete}
        >
          <ListItemIcon>
            <Iconify icon="eva:trash-2-outline" width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Delete"
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>

        <MenuItem
          key="edit-member"
          component={RouterLink}
          to="#"
          sx={{ color: 'text.secondary' }}
          onClick={handleUpdate}
        >
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Edit"
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>

        <MenuItem
          key="generate-card"
          sx={{ color: 'text.secondary' }}
          onClick={handleGenerateCard}
        >
          <ListItemIcon>
            <CardMembershipIcon width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Card"
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}
