import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const App = () => {

  const Stack = createNativeStackNavigator();

  function Navigations() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={"DrawerNavigations"} component={DrawerNavigations} />

      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>

      <Navigations />
    </NavigationContainer>
  );
};



const Drawer = createDrawerNavigator();

function DrawerNavigations() {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // drawerActiveBackgroundColor: theme.colors.halfWhite,
        // drawerActiveTintColor: theme.colors.activeTintColor,
        // drawerInactiveTintColor: theme.colors.inactiveTintColor,
        // drawerStyle: {width: drawerWidth},
        // drawerLabelStyle: {
        //   fontFamily: fonts.monsterrat.medium,
        //   fontSize: fontSizes.bodyText,
        // },
        // drawerItemStyle: {
        //   marginHorizontal: 0,
        //   paddingHorizontal: 0,
        //   borderRadius: 0,
        // },
      }}
    // drawerContent={rest => <DrawerContent {...rest} />}
    >
      <Drawer.Screen
        name={"WalletD"}
        initialParams={{ name: "Wallet" }}
        options={{
          drawerLabel: 'Wallet',
        }}
        component={Dashboard}
      />
      <Drawer.Screen
        name={"Receive"}
        initialParams={{ name: "Receive" }}
        options={{
          drawerLabel: 'Receive',
        }}
        component={Dashboard}
      />
      <Drawer.Screen
        name={"Send"}
        initialParams={{ name: "Send" }}
        options={{
          drawerLabel: 'Send',
        }}
        component={Dashboard}
      />
      <Drawer.Screen
        name={"Staking"}
        initialParams={{ name: "Staking" }}
        options={{
          drawerLabel: 'Staking',
        }}
        component={Dashboard}
      />

    </Drawer.Navigator >
  );
}

const Tab = createBottomTabNavigator();

const Dashboard = () => {

  const params = useRoute().params;



  const [screens] = useState([
    {
      name: "Wallet",
      component: Wallet,
      label: 'Wallet',
    },
    {
      name: "Receive",
      component: Receive,
      label: 'Receive',
    },
    {
      name: "Send",
      component: Send,
      label: 'Send',
    },
    {
      name: "ReceStakingive",
      component: Staking,
      label: 'Staking',
    },
  ]);

  return (
    <Tab.Navigator
      initialRouteName={params.name}
      screenOptions={{
        headerShown: false,

      }}>
      {screens.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}

        />
      ))}
    </Tab.Navigator>
  );
};

const Wallet = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Wallet</Text>
      </View>
    </SafeAreaView>
  )
}
const Staking = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Staking</Text>
      </View>
    </SafeAreaView>
  )
}
const Receive = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Receive</Text>
      </View>
    </SafeAreaView>
  )
}
const Send = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Send</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;
