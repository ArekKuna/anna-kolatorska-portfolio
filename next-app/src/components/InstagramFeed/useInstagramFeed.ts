import { InstagramImageData } from "types/types";
import { useEffect, useState } from "react";

export const useInstagramFeed = () => {
  const [instagramFeedData, setInstagramFeedData] = useState<
    InstagramImageData[] | undefined
  >(undefined);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const instagramFetchUrl = `https://graph.instagram.com/me/media?fields=id,media_url,timestamp,caption,media_type,thumbnail_url,children{id,media_url,timestamp,media_type,thumbnail_url}&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`;

    const fetchData = async () => {
      try {
        const response = await fetch(instagramFetchUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setInstagramFeedData(data.data);

        setLoadingData(false);
      } catch (error: any) {
        setError(error);
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  return {
    instagramFeedData,
    loadingData,
    error,
  };
};
