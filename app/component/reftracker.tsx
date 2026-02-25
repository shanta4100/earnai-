"use client";

import { useEffect } from "react";

function getParam(name: string) {
  if (typeof window === "undefined") return null;
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

export default function RefTracker() {
  useEffect(() => {
    const ref =
      getParam("ref") ||
      getParam("aff") ||
      getParam("affiliate") ||
      getParam("utm_source");

    if (ref) {
      localStorage.setItem("earnai_ref", ref);
      // optional: keep a copy for debugging
      localStorage.setItem("earnai_ref_saved_at", new Date().toISOString());
    }
  }, []);

  return null;
}

export function getSavedRef() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("earnai_ref");
}