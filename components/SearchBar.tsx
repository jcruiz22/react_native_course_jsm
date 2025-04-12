import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { icons } from '@/constants/icons';

interface Props {
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder: string;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: Props) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image
                source={icons.search}
                className="size-5"
                resizeMode="contain"
                tintColor="#AB8BFF"
            />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                placeholderTextColor="#A8B5DB"
                onChangeText={onChangeText}
                className="flex-1 ml-2 text-white"
            />
        </View>
    );
};


export default SearchBar;