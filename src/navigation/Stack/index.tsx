import { createStackNavigator } from "@react-navigation/stack"
// My navigation
import DrawerRoutes from "~/navigation/Drawer"
// Screens
import SignIn from "~/screens/SignIn"
import SignUp from "~/screens/SignUp"

const Stack = createStackNavigator()

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="home" component={DrawerRoutes} />
    </Stack.Navigator>
  )
}

export default StackRoutes
