import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchTotalClicks = (token, onError) => {
    return useQuery({
        queryKey: ["url-totalclick", token],
        queryFn: async () => {
            const response = await api.get(
                "/api/urls/totalClicks?startDate=2025-01-01&endDate=2025-12-31",
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return response.data;
        },
        select: (data) =>
            Object.entries(data || {}).map(([clickDate, count]) => ({
                clickDate,
                count,
            })),
        onError,
        staleTime: 5000,
        // enabled: !!token,
    });
};

export const useFetchMyShortUrls = (token, onError) => {
    return useQuery({
        queryKey: ["my-shorten-urls", token],
        queryFn: async () => {
            const response = await api.get("/api/urls/myurls", {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        },
        select: (data) => {
            const list = Array.isArray(data) ? data : [];
            return list.sort(
                (a, b) => new Date(b.localDateTime) - new Date(a.localDateTime)
            );
        },
        onError,
        staleTime: 5000,
        enabled: !!token,
    });
};
