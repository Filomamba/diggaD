import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { View, ScrollView, StyleSheet } from 'react-native';
import { 
  AppBar, 
  IconButton, 
  List, 
  TextInput, 
  Button, 
  Card, 
  Title, 
  Paragraph, 
  DataTable,
  Checkbox
} from 'react-native-paper';
import { Menu, BarChart2, Key, HelpCircle } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4CAF50',
    accent: '#8BC34A',
  },
};

function MenuManager() {
  const [menuItems, setMenuItems] = useState([
    { name: 'Burger', doordash: 10, menulog: 10, ubereats: 10 },
    { name: 'Pizza', doordash: 15, menulog: 15, ubereats: 15 },
  ]);

  const updatePrice = (index, platform, price) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index][platform] = parseFloat(price);
    setMenuItems(newMenuItems);
  };

  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Menu Items</List.Subheader>
        {menuItems.map((item, index) => (
          <List.Item
            key={index}
            title={item.name}
            description={`DoorDash: $${item.doordash} | Menulog: $${item.menulog} | Uber Eats: $${item.ubereats}`}
            right={() => (
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  label="DoorDash"
                  value={item.doordash.toString()}
                  onChangeText={(text) => updatePrice(index, 'doordash', text)}
                  keyboardType="numeric"
                  style={{ width: 80 }}
                />
                <TextInput
                  label="Menulog"
                  value={item.menulog.toString()}
                  onChangeText={(text) => updatePrice(index, 'menulog', text)}
                  keyboardType="numeric"
                  style={{ width: 80 }}
                />
                <TextInput
                  label="Uber Eats"
                  value={item.ubereats.toString()}
                  onChangeText={(text) => updatePrice(index, 'ubereats', text)}
                  keyboardType="numeric"
                  style={{ width: 80 }}
                />
              </View>
            )}
          />
        ))}
      </List.Section>
      <Button mode="contained" onPress={() => console.log('Update prices')}>
        Update Prices
      </Button>
    </ScrollView>
  );
}

function Analytics() {
  const orderSummary = {
    completed: 150,
    cancelled: 10,
    refunded: 5,
  };

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Order Summary</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Status</DataTable.Title>
              <DataTable.Title numeric>Count</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>Completed</DataTable.Cell>
              <DataTable.Cell numeric>{orderSummary.completed}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Cancelled</DataTable.Cell>
              <DataTable.Cell numeric>{orderSummary.cancelled}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Refunded</DataTable.Cell>
              <DataTable.Cell numeric>{orderSummary.refunded}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

function Access() {
  const [doordashLogin, setDoordashLogin] = useState('');
  const [menulogLogin, setMenulogLogin] = useState('');
  const [uberEatsLogin, setUberEatsLogin] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Access Logins</Title>
          <TextInput
            label="DoorDash Login"
            value={doordashLogin}
            onChangeText={setDoordashLogin}
            style={styles.input}
          />
          <TextInput
            label="Menulog Login"
            value={menulogLogin}
            onChangeText={setMenulogLogin}
            style={styles.input}
          />
          <TextInput
            label="Uber Eats Login"
            value={uberEatsLogin}
            onChangeText={setUberEatsLogin}
            style={styles.input}
          />
          <Button mode="contained" onPress={() => console.log('Save logins')}>
            Save Logins
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

function Support() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Support</Title>
          <Paragraph>Contact us for any issues or questions:</Paragraph>
          <Button mode="contained" onPress={() => console.log('Call support')} style={styles.button}>
            Call Support
          </Button>
          <Button mode="outlined" onPress={() => console.log('Email support')} style={styles.button}>
            Email Support
          </Button>
          <Button mode="text" onPress={() => console.log('Open chat')} style={styles.button}>
            Live Chat
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let icon;

              if (route.name === 'Menu') {
                icon = <Menu color={color} size={size} />;
              } else if (route.name === 'Analytics') {
                icon = <BarChart2 color={color} size={size} />;
              } else if (route.name === 'Access') {
                icon = <Key color={color} size={size} />;
              } else if (route.name === 'Support') {
                icon = <HelpCircle color={color} size={size} />;
              }

              return icon;
            },
          })}
        >
          <Tab.Screen name="Menu" component={MenuManager} />
          <Tab.Screen name="Analytics" component={Analytics} />
          <Tab.Screen name="Access" component={Access} />
          <Tab.Screen name="Support" component={Support} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});