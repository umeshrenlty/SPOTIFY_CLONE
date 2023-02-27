import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);



const ButtonTool = () => (
    <SafeAreaView>
        <View>
            <Text style={styles.title}>
                Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
            </Text>
            <Button
                title='press me'

                onPress={() => Alert.alert('button is pressed')}
            />

        </View>
        <Separator />

        <View>
            <Text style={styles.title}>
                Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
            </Text>
            <Button
                title='press me'
                color="#f194ff"
                onPress={() => Alert.alert('button is pressed')}
            />

        </View>
        <Separator />
        <View>
            <Text style={styles.title}>
                Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
            </Text>
            <Button
                title='press me'
                color="#f194ff"
                onPress={() => Alert.alert('button is pressed')}
                disabled
            />
        </View>
        <Separator />
        <Text style={styles.title}>
            Adjust the color in a way that looks standard on each platform.
            </Text>
        <View style={styles.hk}>
            
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
        <Separator />

    </SafeAreaView>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title:
    {
        color: 'red',
        textAlign: 'center',
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
        backgroundColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    hk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'red',
    },
});
export default ButtonTool

