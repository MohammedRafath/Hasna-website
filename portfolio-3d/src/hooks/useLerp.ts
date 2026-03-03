import { useCallback } from 'react';

export function useLerp() {
    return useCallback((start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
    }, []);
}
