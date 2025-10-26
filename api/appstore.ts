export default async function handler(req: any, res: any) {
  try {
    const id = (req.query?.id as string) || "1564492728";
    const url = `https://itunes.apple.com/lookup?id=${encodeURIComponent(id)}`;
    const r = await fetch(url);
    if (!r.ok) {
      res.status(r.status).json({ error: "upstream_error" });
      return;
    }
    const json = await r.json();
    const app = json?.results?.[0] || {};
    const averageUserRating = app.averageUserRating ?? null;
    const userRatingCount = app.userRatingCount ?? null;

    res.setHeader(
      "Cache-Control",
      "s-maxage=3600, stale-while-revalidate=86400"
    );
    res.status(200).json({
      averageUserRating,
      userRatingCount,
      updatedAt: new Date().toISOString(),
    });
  } catch (e) {
    res.status(500).json({ error: "internal_error" });
  }
}
