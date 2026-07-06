"use client";

import { useEffect } from "react";

const STORAGE_KEY = "jb_lead_attribution";
const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "lead_id",
];

function currentAttribution() {
  if (typeof window === "undefined") {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const attribution = TRACKED_PARAMS.reduce((memo, key) => {
    const value = params.get(key);
    if (value) {
      memo[key] = value;
    }
    return memo;
  }, {});

  if (!Object.keys(attribution).length) {
    return null;
  }

  return {
    ...attribution,
    first_seen_at: new Date().toISOString(),
    landing_path: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || "",
  };
}

export function readLeadAttribution() {
  if (typeof window === "undefined") {
    return {};
  }

  const attribution = currentAttribution();
  if (attribution) {
    return attribution;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export default function LeadAttribution() {
  useEffect(() => {
    const attribution = currentAttribution();
    if (!attribution) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    } catch {
      // Attribution is helpful, but the site should keep working without storage.
    }
  }, []);

  return null;
}
