import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, TextField, Button, List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BarChartIcon from '@mui/icons-material/BarChart';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HelpIcon from '@mui/icons-material/Help';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
    },
    secondary: {
      main: '#8BC34A',
    },
  },
});

function MenuManager() {
  const [menuItems, setMenuItems] = useState([
    { name: 'Burger', doordash: 10, menulog: 10, ubereats: 10 },
    { name: 'Pizza', doordash: 15, menulog: 15, ubereats: 15 },
  ]);

  const updatePrice = (index: number, platform: string, price: string) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index] = { ...newMenuItems[index], [platform]: parseFloat(price) };
    setMenuItems(newMenuItems);
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>Menu Items</Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={item.name}
              secondary={`DoorDash: $${item.doordash} | Menulog: $${item.menulog} | Uber Eats: $${item.ubereats}`}
            />
            <TextField
              label="DoorDash"
              type="number"
              value={item.doordash}
              onChange={(e) => updatePrice(index, 'doordash', e.target.value)}
              style={{ width: 80, marginRight: 8 }}
            />
            <TextField
              label="Menulog"
              type="number"
              value={item.menulog}
              onChange={(e) => updatePrice(index, 'menulog', e.target.value)}
              style={{ width: 80, marginRight: 8 }}
            />
            <TextField
              label="Uber Eats"
              type="number"
              value={item.ubereats}
              onChange={(e) => updatePrice(index, 'ubereats', e.target.value)}
              style={{ width: 80 }}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={() => console.log('Update prices')}>
        Update Prices
      </Button>
    </Container>
  );
}

function Analytics() {
  const orderSummary = {
    completed: 150,
    cancelled: 10,
    refunded: 5,
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>Order Summary</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Completed</TableCell>
                  <TableCell align="right">{orderSummary.completed}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cancelled</TableCell>
                  <TableCell align="right">{orderSummary.cancelled}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Refunded</TableCell>
                  <TableCell align="right">{orderSummary.refunded}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
}

function Access() {
  const [doordashLogin, setDoordashLogin] = useState('');
  const [menulogLogin, setMenulogLogin] = useState('');
  const [uberEatsLogin, setUberEatsLogin] = useState('');

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>Access Logins</Typography>
          <TextField
            label="DoorDash Login"
            value={doordashLogin}
            onChange={(e) => setDoordashLogin(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Menulog Login"
            value={menulogLogin}
            onChange={(e) => setMenulogLogin(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Uber Eats Login"
            value={uberEatsLogin}
            onChange={(e) => setUberEatsLogin(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button 