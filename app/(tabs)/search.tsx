import MovieCard from '@/components/MovieCard';
import { images } from '@/constants/images';
import React from 'react';
import { View, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import { icons } from '@/constants/icons';
import SearchBar from '@/components/SearchBar';

const Search = () => {
    const router = useRouter();

    const {
        data: movies,
        loading: moviesLoading,
        error: moviersError
    } = useFetch(() => fetchMovies({
        query: '',
    }))

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
                        <SearchBar placeholder="Search for a movies..."/>
                    </View>
                    </>
                }
                
            />


        </View>
    )
}

export default Search;