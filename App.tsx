/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
//border Exercise
// // eslint-disable-next-line prettier/prettier
// import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
// import React from 'react';
// // import {SafeAreaView} from 'react-native-safe-area-context';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <View style={styles.borderStyle}>
//         <Text>Hi, I just completed my first React Native Assignment</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const styles = StyleSheet.create({
//   borderStyle: {
//     borderWidth: 1,
//     borderTopWidth: 5,
//     borderBottomWidth: 10,
//     borderLeftWidth: 3,
//     borderRightWidth: 20,
//     borderColor: 'red',
//     borderRadius: 10,
//   },
// });

//margin Exercise

// import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <SafeAreaView style={{backgroundColor: 'green', height: '100%'}}>
//       <View style={styles.box1Style}>
//         <Text>Hello world 1</Text>
//       </View>
//       <View style={styles.box2Style}>
//         <Text>Hello world 2</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   box1Style: {
//     backgroundColor: 'yellow',
//     margin: 10,
//     marginTop: 5,
//     marginLeft: 100,
//     marginRight: 100,
//     marginBottom: 100,
//     marginVertical: 50,
//     marginHorizontal: 50,
//     padding: 10,
//     // paddingTop: 100,
//     // paddingLeft: 100,
//     paddingHorizontal: 50,
//     paddingVertical: 50,
//     zIndex: 2,
//     elevation: 2,
//   },
//   box2Style: {
//     backgroundColor: 'red',
//     position: 'absolute',
//     top: 100,
//   },
// });
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unused-vars
//UseState Example
// import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import IntroText from './src/Atom/IntroText';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <IntroText />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const styles = StyleSheet.create({});
//UseEffect Example
// import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';

// const App = () => {
//   const [text, setText] = useState('Press Here');

//   useEffect(() => {
//     console.log('the text has changed');
//   }, [text]);

//   useEffect(() => {
//     console.log('the component has rendered');
//   }, []);

//   return (
//     <SafeAreaView>
//       <View>
//         <Text onPress={() => setText('hello world, I just used useEffect')}>
//           {text}
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// });
// Example Refs, useRefs
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Button,
//   Animated,
// } from 'react-native';
// import React, {useRef} from 'react';
// const App = () => {
//   let array = Array(100).fill(0);
//   const handleClick = () => {
//     scrollViewRef.current.scrollTo({x: 0, y: 0, Animated: true});
//   };
//   const scrollViewRef = useRef(null);
//   return (
//     <SafeAreaView>
//       <Button onPress={handleClick} title={'Bring me back up'} />
//       <ScrollView ref={scrollViewRef}>
//         {array.map((value, index) => (
//           <Text key={index}>Test{index}!</Text>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// });
//useContext Example
// import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
// import React, {useState} from 'react';
// import {ThemeContext} from './contexts/ThemeContext';
// import HomeScreen from './src/screens/HomeScreen';
// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };
//   return (
//     <ThemeContext.Provider value={isDarkMode}>
//       <SafeAreaView>
//         <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
//           <Text style={{color: isDarkMode ? '#ffffff' : '#000000'}}>Test</Text>
//           <Button title={'Switch Mode'} onPress={toggleTheme} />
//         </View>
//         <HomeScreen />
//       </SafeAreaView>
//     </ThemeContext.Provider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
// });
// CustomHooks Example
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// import useToggle from './customHooks/useToggle';

// const App = () => {
//   const [isOn, toggleIsOn, isDarkMode] = useToggle(false);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View
//         style={[
//           styles.container,
//           {backgroundColor: isDarkMode ? '#121212' : '#ffffff'},
//         ]}>
//         <Text style={{color: isDarkMode ? '#ffffff' : '#121212'}}>
//           {isOn ? 'Switch is On' : 'Switch is Off'}
//         </Text>
//         <TouchableOpacity
//           style={[styles.switch, isOn ? styles.switchOn : styles.switchOff]}
//           onPress={toggleIsOn}>
//           <View
//             style={[
//               styles.switchHandle,
//               isOn ? styles.switchHandleOn : styles.switchHandleOff,
//             ]}
//           />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   switch: {
//     width: 50,
//     height: 25,
//     borderRadius: 25,
//     justifyContent: 'center',
//     padding: 3,
//     marginTop: 20,
//   },
//   switchOn: {
//     backgroundColor: '#4cd137',
//     alignItems: 'flex-end',
//   },
//   switchOff: {
//     backgroundColor: '#dcdde1',
//     alignItems: 'flex-start',
//   },
//   switchHandle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: '#ffffff',
//   },
//   switchHandleOn: {
//     marginLeft: 25,
//   },
//   switchHandleOff: {
//     marginLeft: 0,
//   },
// });
//Learning Class Component
// import {SafeAreaView, Text, View} from 'react-native';
// import React, {Component} from 'react';

// export default class App extends Component {
//   constructor(props: {}) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <SafeAreaView>
//         <View>
//           <Text
//             onPress={() => {
//               this.setState({name: 'Azlin'});
//             }}>
//             Hello, {this.state?.name}!
//           </Text>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }
//========================imgComponent=========================================
// import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <Image
//           source={require('./src/assets/img/cake.png')}
//           style={{width: '100%', height: '100%'}}
//           resizeMode={'repeat'}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
//===================TextInput Component===================
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   TextInput,
// } from 'react-native';
// import React, {useState} from 'react';

// const App = () => {
//   const [textValue, setTextValue] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   return (
//     <SafeAreaView>
//       <View style={{}}>
//         <TextInput
//           style={{borderWidth: 1, padding: 10, borderRadius: 4}}
//           value={textValue}
//           onChangeText={value => {
//             setTextValue(value);
//           }}
//           returnKeyType={'done'}
//           autoFocus={true}
//           placeholder={'Please your name here'}
//         />
//         <TextInput
//           style={{borderWidth: 1, padding: 10, borderRadius: 4}}
//           value={email}
//           onChangeText={value => {
//             setEmail(value);
//           }}
//           keyboardType={'email-address'}
//           autoFocus={true}
//           placeholder={'Please enter your email'}
//         />
//         <TextInput
//           style={{borderWidth: 1, padding: 10, borderRadius: 4}}
//           value={password}
//           onChangeText={value => {
//             setPassword(value);
//           }}
//           keyboardType={'numeric'}
//           secureTextEntry={true}
//           autoFocus={true}
//           placeholder={'Please enter your password'}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
//===================ScrollView Component===================
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   ScrollView,
// } from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         horizontal={true}
//         onScroll={() => {
//           //tocheck if it works
//           console.log('We are scrolling');
//         }}>
//         <Image
//           source={require('./src/assets/img/cake.png')}
//           style={{width: 500, height: 500}}
//         />
//         <Image
//           source={require('./src/assets/img/cake.png')}
//           style={{width: 500, height: 500}}
//         />
//         <Image
//           source={require('./src/assets/img/cake.png')}
//           style={{width: 500, height: 500}}
//         />
//         <Image
//           source={require('./src/assets/img/cake.png')}
//           style={{width: 500, height: 500}}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
//==================== button component, Switch Toggle, fontAwesome ========================
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TextInput,
//   Button,
//   Pressable,
//   Switch,
// } from 'react-native';
// import React, {useState} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faCheck} from '@fortawesome/free-solid-svg-icons';
// const App = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const isDisabled = email.length === 0 || password.length < 8;
//   const [ShouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <TextInput
//           value={email}
//           keyboardType={'email-address'}
//           style={{borderWidth: 1, borderRadius: 4, padding: 10}}
//           placeholder="Please enter your email here"
//           onChangeText={value => {
//             setEmail(value);
//           }}
//         />

//         <TextInput
//           value={password}
//           secureTextEntry={true}
//           style={{borderWidth: 1, borderRadius: 4, padding: 10}}
//           placeholder="Please enter your password here"
//           onChangeText={value => {
//             setPassword(value);
//           }}
//         />
//         <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
//           <Switch
//             value={ShouldKeepLoggedIn}
//             onValueChange={value => setShouldKeepLoggedIn(value)}
//           />
//           <Text>Keep me logged in</Text>
//         </View>
//         <Pressable
//           style={{backgroundColor: isDisabled ? 'grey' : 'black'}}
//           disabled={isDisabled}
//           onPress={() => console.log(email, password, ShouldKeepLoggedIn)}>
//           <View
//             style={{
//               flex: 1,
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
//               {' '}
//               Submit
//             </Text>
//             <FontAwesomeIcon icon={faCheck} style={{color: 'white'}} />
//           </View>
//         </Pressable>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
//====================== Flexbox ============================= //flexDirection: 'row-reverse', flexDirection: 'column-reverse'
// import {View, Text, SafeAreaView} from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'space-around',
//         flexDirection: 'row',
//         alignItems: 'baseline',
//       }}>
//       <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
//       <View style={{backgroundColor: 'green', width: 50, height: 50}} />
//       <View style={{backgroundColor: 'black', height: 50, width: 50}} />
//     </View>
//   );
// };

// export default App;
//==================== Exercise Udemy ========================
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  Switch,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const isDisabled = name.length === 0 || age.length < 8;
  const [ShouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          value={name}
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder="Please enter your name here"
          onChangeText={value => {
            setName(value);
          }}
        />

        <TextInput
          value={age}
          secureTextEntry={true}
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder="Please enter your age here"
          onChangeText={value => {
            setAge(value);
          }}
        />
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            value={ShouldKeepLoggedIn}
            onValueChange={value => setShouldKeepLoggedIn(value)}
          />
          <Text>Keep me logged in</Text>
        </View>
        <Pressable
          style={{backgroundColor: isDisabled ? 'grey' : 'black'}}
          disabled={isDisabled}
          onPress={() => console.log(name, age, ShouldKeepLoggedIn)}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
              {' '}
              Submit
            </Text>
            <FontAwesomeIcon icon={faCheck} style={{color: 'white'}} />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
