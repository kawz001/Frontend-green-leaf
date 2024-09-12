import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    boxMid: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor: '#DDDDDD',
        borderRadius: 30
    },
    imageBox: {
        height: 100,
        width: 100
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        padding: 30
    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingStart: 10,
        marginBottom: 10,
    },
    options: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
