
import { useMemo, useState } from 'react';
import { ActivityIndicator, Image } from 'react-native'
import { ThemedView } from './ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons'

interface Props {
    url: string,
}

export const RoundedNetworkImage = ({ url }: Props) => {
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false)

    const handleLoadStart = () => {
        setLoading(true);
    };

    const handleLoadEnd = () => {
        setLoading(false);
    };

    const handleLoad = () => {
        setLoading(false);
    };

    const memorizedImage = useMemo(() => (
        <Image
            style={{
                flex: 1,
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
                borderRadius: 200 / 2
            }}
            source={{
                uri: url,
                headers: {
                    Pragma: 'no-cache',
                }
            }}
            onLoadStart={handleLoadStart}
            onLoadEnd={handleLoadEnd}
            onLoad={handleLoad}
            onError={()=>setError(true)}
        />
    ), [url])
    return (
        <ThemedView>
            {loading && (
                <ActivityIndicator color="#008000" style={{ position: 'absolute' }} />
            )}
            {(error && !loading) ? <Ionicons name='person-circle-sharp' size={30}/> : memorizedImage}
        </ThemedView>
    )
}