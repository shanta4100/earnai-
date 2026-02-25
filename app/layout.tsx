function RefTracker() {
  "use client";
  import { useEffect } from "react";
  import { saveRefFromUrl } from "../lib/affiliate";

  useEffect(() => {
    saveRefFromUrl();
  }, []);

  return null;
}
<RefTracker />