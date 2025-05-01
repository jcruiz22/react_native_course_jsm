import MovieCard from '@/components/MovieCard';
import { images } from '@/constants/images';
import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, ActivityIndicator, Text } from 'react-native';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import { icons } from '@/constants/icons';
import SearchBar from '@/components/SearchBar';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');

    const {
        data: movies,
        loading,
        error,
        refetch,
    } = useFetch(() => fetchMovies({
        query: debouncedQuery,
    }), { autoFetch: false });

    // Debounce search to avoid too many API calls while typing
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    // Trigger search when debounced query changes
    useEffect(() => {
        if (debouncedQuery.trim()) {
            refetch();
        }
    }, [debouncedQuery]);


    return (
        <View className='flex-1 bg-primary'>
            <Image
            source={images.bg}
            className='flex-1 absolute w-full z-0'
            resizeMode='cover'
            />
            <FlatList
            data={movies}
            className="px-5"
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{
                justifyContent: 'center',
                marginBottom: 10,
                paddingRight: 5,
                gap: 20
            }}
            contentContainerStyle={{
                paddingBottom: 100,
            }}
            ListHeaderComponent={
                <>
                <View className='flex-row w-full justify-center items-center mt-20'>
                    <Image
                    source={icons.logo}
                    className='w-12 h-10'
                    />
                </View>

                <View className='my-5'>
                    <SearchBar 
                    placeholder="Search for a movie..." 
                    value={searchQuery}
                    onChangeText={(text) => {
                    setSearchQuery(text);
                    }}
                    />
                </View>

                {loading && (
                    <ActivityIndicator size='large' color="#0000ff" className='my-3' />
                )}

                {error && (
                    <Text className='text-red-500 px-5 my-3'>
                    Error: {error}
                    </Text>
                )}

                {!loading && !error && searchQuery.trim() ? (
                    movies?.length > 0 ? (
                    <Text className='text-white text-xl font-bold'>
                        Search results for {""}
                        <Text className='text-accent'>
                        {searchQuery}
                        </Text>
                    </Text>
                    ) : null
                ) : (
                    <Text className='text-white text-xl font-bold mb-3'>
                    Search for a movie
                    </Text>
                )} 

                </>
            }
            ListEmptyComponent={
                !loading && !error && searchQuery.trim() ? (
                <View className='mt-10 px-5'>
                    <Text className='text-white text-lg font-bold'>
                    No results found for {""}
                    <Text className='text-accent'>
                        {searchQuery}
                    </Text>
                    </Text>
                    <Text className='text-white text-base mt-2'>
                    Try searching for something else.
                    </Text>
                </View>
                ) : null
            }
            />
        </View>
    )
}

export default Search;