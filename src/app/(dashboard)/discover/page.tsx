"use client";

import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { InfluencerCard } from "@/components/influencer-card";
import { Search, Filter, X } from "lucide-react";

const NICHES = [
  { value: "all", label: "All Niches" },
  { value: "fashion", label: "Fashion" },
  { value: "beauty", label: "Beauty" },
  { value: "fitness", label: "Fitness" },
  { value: "food", label: "Food & Cooking" },
  { value: "travel", label: "Travel" },
  { value: "tech", label: "Technology" },
  { value: "gaming", label: "Gaming" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "parenting", label: "Parenting" },
  { value: "pets", label: "Pets" },
  { value: "diy", label: "DIY & Crafts" },
  { value: "knitting", label: "Knitting" },
  { value: "photography", label: "Photography" },
  { value: "music", label: "Music" },
  { value: "comedy", label: "Comedy" },
];

const PLATFORMS = [
  { value: "all", label: "All Platforms" },
  { value: "tiktok", label: "TikTok" },
  { value: "instagram", label: "Instagram" },
  { value: "youtube", label: "YouTube" },
];

const FOLLOWER_RANGES = [
  { value: "", label: "Any followers" },
  { value: "1000-5000", label: "1K - 5K (Nano)" },
  { value: "5000-20000", label: "5K - 20K (Micro)" },
  { value: "20000-100000", label: "20K - 100K (Mid)" },
  { value: "100000-500000", label: "100K - 500K (Macro)" },
];

interface Influencer {
  id: string;
  platform: string;
  username: string;
  displayName: string | null;
  bio: string | null;
  profileUrl: string;
  avatarUrl: string | null;
  followers: number;
  engagement: number | null;
  niche: string;
  location: string | null;
  avgLikes: number | null;
  avgComments: number | null;
}

export default function DiscoverPage() {
  const [search, setSearch] = useState("");
  const [niche, setNiche] = useState("all");
  const [platform, setPlatform] = useState("all");
  const [followerRange, setFollowerRange] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [influencers, setInfluencers] = useState<Influencer[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchInfluencers = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (niche !== "all") params.set("niche", niche);
      if (platform !== "all") params.set("platform", platform);
      if (followerRange) {
        const [min, max] = followerRange.split("-");
        params.set("minFollowers", min);
        params.set("maxFollowers", max);
      }
      params.set("page", page.toString());

      const res = await fetch(`/api/influencers?${params}`);
      const data = await res.json();

      setInfluencers(data.influencers);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching influencers:", error);
    } finally {
      setLoading(false);
    }
  }, [search, niche, platform, followerRange, page]);

  useEffect(() => {
    const debounce = setTimeout(fetchInfluencers, 300);
    return () => clearTimeout(debounce);
  }, [fetchInfluencers]);

  const handleAddToList = (influencer: Influencer) => {
    console.log("Add to list:", influencer);
  };

  const clearFilters = () => {
    setSearch("");
    setNiche("all");
    setPlatform("all");
    setFollowerRange("");
    setPage(1);
  };

  const hasFilters = search || niche !== "all" || platform !== "all" || followerRange;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Discover Influencers</h1>
        <p className="text-gray-500 mt-1">
          Find micro-influencers in your niche
        </p>
      </div>

      {/* Search and filters */}
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by username, name, or bio..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          {hasFilters && (
            <Button variant="ghost" onClick={clearFilters}>
              <X className="w-4 h-4 mr-2" />
              Clear
            </Button>
          )}
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white rounded-lg border border-gray-200">
            <Select
              label="Niche"
              options={NICHES}
              value={niche}
              onChange={(e) => {
                setNiche(e.target.value);
                setPage(1);
              }}
            />
            <Select
              label="Platform"
              options={PLATFORMS}
              value={platform}
              onChange={(e) => {
                setPlatform(e.target.value);
                setPage(1);
              }}
            />
            <Select
              label="Followers"
              options={FOLLOWER_RANGES}
              value={followerRange}
              onChange={(e) => {
                setFollowerRange(e.target.value);
                setPage(1);
              }}
            />
          </div>
        )}
      </div>

      {/* Results */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-32 bg-gray-100 rounded-xl animate-pulse"
            />
          ))}
        </div>
      ) : influencers.length === 0 ? (
        <div className="text-center py-12">
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No influencers found</h3>
          <p className="text-gray-500 mt-1">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {influencers.map((influencer) => (
              <InfluencerCard
                key={influencer.id}
                influencer={influencer}
                onAddToList={handleAddToList}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <Button
                variant="outline"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span className="text-sm text-gray-600">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
