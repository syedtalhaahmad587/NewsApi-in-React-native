
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        marginVertical: 10
    },
    mainInner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "black",
        color: "white",
        paddingVertical: 10
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    headerImgView: {
        marginHorizontal: 10
    },
    headertImgInner: {
        width: 50,
        height: 50,
        borderRadius: 60
    },
    headerText: {
        marginTop: 4,
        color: "white"
    },
    headerTextInner: {
        color: "white"
    },
    titleMain: {
        margin: 5
    },
    centerMainImg: {
        width: 360,
        height: 210,
        resizeMode: 'contain'
    },
    colorBlack: {
        color: "black"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }

})

export default styles