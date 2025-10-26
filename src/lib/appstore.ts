let inFlight:
  | Promise<{ avg?: number; count?: number; date?: string } | undefined>
  | undefined;

export function fetchAppStoreRating(appId = "1564492728") {
  if (!inFlight) {
    inFlight = (async () => {
      try {
        const res = await fetch(
          `/api/appstore?id=${encodeURIComponent(appId)}`
        );
        if (!res.ok) return undefined;
        const j = await res.json();
        return {
          avg: j.averageUserRating as number | undefined,
          count: j.userRatingCount as number | undefined,
          date: j.updatedAt as string | undefined,
        };
      } catch {
        return undefined;
      }
    })();
  }
  return inFlight;
}
