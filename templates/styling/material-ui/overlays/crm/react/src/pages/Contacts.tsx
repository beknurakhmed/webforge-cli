import { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import ContactsTable from '../components/ContactsTable';
import { contacts } from '../data/contacts';

function Contacts() {
  const [search, setSearch] = useState('');

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>
          Contacts
        </Typography>
        <TextField
          size="small"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: 260, '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
        />
      </Box>
      <ContactsTable contacts={filtered} />
    </Box>
  );
}

export default Contacts;
