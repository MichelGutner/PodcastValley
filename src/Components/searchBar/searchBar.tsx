import React from 'react';
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Theme } from '../../../Themes/colors';

type Props = TextInputProps & {
    value: string;
    onChangeText: Function;
    onClear: any;
}

const SearchBar = ({ value, onChangeText, onClear }: Props) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder='Pesquise...'
                placeholderTextColor={Theme.color.white}
                style={styles.searchBar}
            />
            <TouchableOpacity onPress={onClear}>
                {value ?
                    <Icon
                        name='close'
                        size={18}
                        color={Theme.color.white}
                        style={styles.clearIcon}
                    /> : null}
            </TouchableOpacity>

        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        width: 120,
        backgroundColor: Theme.color.transparent,
        height: 40,
        borderRadius: 10,
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 10,
        marginLeft: 15,
        marginTop: 37,
        opacity: 0.9,
        color: Theme.color.white
    },
    container: {
        justifyContent: 'center'
    },
    clearIcon: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    }
})
