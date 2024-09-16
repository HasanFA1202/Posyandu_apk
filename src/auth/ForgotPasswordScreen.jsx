import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');

    const handleSubmit = () => {
        // Logic untuk mengirim permintaan reset password
        console.log('Email submitted:', email);
        // Navigasi kembali ke layar login setelah mengirim permintaan
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['#00bfff', '#1e90ff']} 
                style={styles.header}
            >
                <Text style={styles.headerText}>Forgot Password</Text>
            </LinearGradient>

            <View style={styles.formContainer}>
                <Text style={styles.instructionsText}>
                    Enter your email to reset your password
                </Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#a9a9a9"
                    value={email}
                    onChangeText={setEmail}
                />

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <LinearGradient
                        colors={['#00bfff', '#1e90ff']}
                        style={styles.submitButtonGradient}
                    >
                        <Text style={styles.submitButtonText}>Submit</Text>
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
    instructionsText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        backgroundColor: '#f0f8ff',
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    submitButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    submitButtonGradient: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ForgotPasswordScreen;
