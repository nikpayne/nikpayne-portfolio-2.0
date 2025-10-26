import { useEffect, useState } from "react";
import { fetchAppStoreRating } from "../lib/appstore";

interface Props {
  id?: string;
  showCount?: boolean;
  showUpdated?: boolean;
}

export default function AppStoreRating({
  id = "1564492728",
  showCount = true,
  showUpdated = true,
}: Props) {
  const [avg, setAvg] = useState<number | undefined>();
  const [count, setCount] = useState<number | undefined>();
  const [date, setDate] = useState<string | undefined>();

  useEffect(() => {
    let mounted = true;
    fetchAppStoreRating(id)
      .then((d) => {
        if (!mounted || !d) return;
        setAvg(d.avg);
        setCount(d.count);
        setDate(d.date);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, [id]);

  if (!avg) return <>4.9</>;

  const updated = date
    ? new Date(date).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : undefined;

  return (
    <>
      {avg.toFixed(1)}
      {showCount && typeof count === "number"
        ? ` (${count.toLocaleString()})`
        : ""}
      {showUpdated && updated ? ` — as of ${updated}` : ""}
    </>
  );
}
