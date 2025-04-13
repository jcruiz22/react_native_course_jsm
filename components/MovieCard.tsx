import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";

// Remove the hardcoded genreMap and accept it as a prop
const MovieCard = ({ 
  id, 
  poster_path, 
  title, 
  vote_average, 
  release_date, 
  genre_ids = [], 
  adult = false, 
  original_language, 
  overview,
  genreMap = {} // Default to empty object if not provided
}: Movie) => {
    // Calculate rating for display (out of 5)
    const rating = Math.round(vote_average) / 2;
    
    // Get year from release date
    const year = release_date?.split("-")[0] || "";
    
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-[45%] mb-6 rounded-lg overflow-hidden bg-gray-900 ml-2" >
                {/* Movie Poster with Gradient Overlay */}
                <View className="relative">
                    <Image
                        source={{
                            uri: poster_path
                                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                : "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=No+Image"
                        }}
                        className="w-full h-64 rounded-t-lg"
                        resizeMode="cover"
                    />
                    
                    {/* Age Rating Badge */}
                    {adult && (
                        <View className="absolute top-2 right-2 bg-red-600 px-2 py-1 rounded-md">
                            <Text className="text-white text-xs font-bold">18+</Text>
                        </View>
                    )}
                    
                    {/* Rating Badge */}
                    <View className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded-md flex-row items-center">
                        <Image source={icons.star} className="size-3 mr-1" />
                        <Text className="text-yellow-400 text-xs font-bold">{rating.toFixed(1)}</Text>
                    </View>
                </View>
                
                {/* Content Section */}
                <View className="p-3">
                    {/* Title */}
                    <Text className="text-white text-sm font-bold" numberOfLines={1}>{title}</Text>
                    
                    {/* Info Row */}
                    <View className="flex-row justify-between mt-1">
                        <Text className="text-gray-400 text-xs">{year}</Text>
                        <Text className="text-gray-400 text-xs uppercase">{original_language}</Text>
                    </View>
                    
                    {/* Genre Tags */}
                    {genre_ids && genre_ids.length > 0 && (
                        <View className="flex-row flex-wrap mt-2 gap-1">
                            {genre_ids.slice(0, 2).map(genreId => (
                                <View key={genreId} className="bg-gray-800 px-2 py-1 rounded-full">
                                    <Text className="text-gray-300 text-xs">{genreMap[genreId] || "Unknown"}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                    
                    {/* Overview Preview */}
                    {overview && (
                        <Text className="text-gray-400 text-xs mt-2" numberOfLines={2}>
                            {overview}
                        </Text>
                    )}
                </View>
            </TouchableOpacity>
        </Link>
    );
}

export default MovieCard;