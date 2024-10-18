import React, { useCallback, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMockData } from '@/store/slices/mockDataSlice';
import { RootState } from '../store/store';
import { useTheme } from '../theme/useTheme';
import { Button } from '@/components/Button';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { UserItem } from '@/components/UserItem';
import { User } from '@/types/user';
import { LoadingIndicator } from '@/components/Loading';
import { I18Text } from '@/components/I18Text';


export const MockScreen = () => {
    const mockList = useSelector((state: RootState) => state.mock.data);
    const loading = useSelector((state: RootState) => state.mock.loading);
    const dispatch = useDispatch();
    const { theme } = useTheme()

    const executeFetch = useCallback(() => {
        dispatch(fetchMockData() as any)
    }, [])

    useEffect(() => {
        executeFetch()
    }, [])

    const renderItem = ({ item }: { item: User; index: number }) => (
        <UserItem item={item} />
    );

    const keyExtractor = (item: User) => `user-${item.id}`;

    return (
        <ThemedView>
            {loading ? (<LoadingIndicator />) : (
                <>
                    <Button onPress={executeFetch} style={styles.btnRefresh}>
                        <I18Text keyText='common.refresh' style={styles.btnText}/>
                        <Ionicons name="refresh-circle" size={20} color={theme?.layoutBg} />
                    </Button>
                    <FlatList
                        data={mockList}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        contentContainerStyle={styles.flatList}
                    />
                </>
            )
            }
        </ThemedView >
    );
};

const styles = StyleSheet.create({
    flatList: {
        paddingHorizontal: 12,
        paddingVertical: 30,
    },
    btnRefresh: {
        borderRadius: 5,
        padding: 6,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        height: 50,
        marginLeft: 5,
        display: "flex",
        flexDirection: "row",
        gap: 8
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
    }
});
