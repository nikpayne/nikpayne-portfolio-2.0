import { useEffect, useState } from "react";
import { fetchAppStoreRating } from "../lib/appstore";

interface Props {
  id?: string;
}

export default function AppStoreUpdatedDate({ id = "1564492728" }: Props) {
  const [date, setDate] = useState<string | undefined>();

  useEffect(() => {
    let mounted = true;
    fetchAppStoreRating(id)
      .then((d) => {
        if (!mounted) return;
        setDate(d?.date);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, [id]);

  if (!date) return <>recently</>;
  const display = new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return <>{display}</>;
}
