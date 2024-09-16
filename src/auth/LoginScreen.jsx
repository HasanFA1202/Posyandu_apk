import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({ setIsLoggedIn }) => {  
    const [showPassword, setShowPassword] = React.useState(false); // State untuk visibilitas password

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['#00bfff', '#1e90ff']} 
                style={styles.header}
            >
                <Text style={styles.headerText}>Hello!</Text>
            </LinearGradient>
            
            <View style={styles.formContainer}>
                <Text style={styles.welcomeText}>Welcome</Text>
                
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="username"
                    placeholderTextColor="#a9a9a9"
                />
                
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputWithIcon}
                        placeholder="password"
                        secureTextEntry={!showPassword} 
                        placeholderTextColor="#a9a9a9"
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
                        <Image 
                            style={styles.eyeIcon} 
                            source={showPassword ? require('../assets/eye-icon-visible.png') : require('../assets/eye-icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forget Password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <LinearGradient
                        colors={['#00bfff', '#1e90ff']}
                        style={styles.loginButtonGradient}
                    >
                        <Text style={styles.loginButtonText}>Log In</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    formContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    welcomeText: {
        fontSize: 42,
        color: '#00bfff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 8,
    },
    input: {
        height: 50,
        backgroundColor: '#f0f8ff',
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    inputWithIcon: {
        height: 50,
        backgroundColor: '#f0f8ff',
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 45, // Memberikan ruang untuk icon
        fontSize: 16,
    },
    passwordContainer: {
        position: 'relative',
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 15, // Jarak dari kanan
        top: '50%', // Vertikal tengah
        transform: [{ translateY: -10 }], // Untuk menyelaraskan icon di tengah input
    },
    eyeIcon: {
        width: 20,
        height: 20,
    },
    forgotPassword: {
        fontSize: 14,
        color: '#00bfff',
        textAlign: 'right',
        marginTop: 10,
    },
    loginButton: {
        marginTop: 30,
        alignItems: 'center',
    },
    loginButtonGradient: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
