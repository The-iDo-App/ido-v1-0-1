import NetInfo from '@react-native-community/netinfo';

export const checkConnected = async () => {
    const state = await NetInfo.fetch();
    return state.isConnected;
}

