"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { formatNumber, getEngagementColor } from "@/lib/utils";
import { Users, Heart, MessageCircle, ExternalLink, Plus } from "lucide-react";

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

interface InfluencerCardProps {
  influencer: Influencer;
  onAddToList?: (influencer: Influencer) => void;
  showAddButton?: boolean;
}

export function InfluencerCard({ influencer, onAddToList, showAddButton = true }: InfluencerCardProps) {
  const platformColors: Record<string, string> = {
    tiktok: "bg-black text-white",
    instagram: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    youtube: "bg-red-600 text-white",
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            {influencer.avatarUrl ? (
              <img
                src={influencer.avatarUrl}
                alt={influencer.displayName || influencer.username}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xl font-bold">
                {influencer.username[0].toUpperCase()}
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900 truncate">
                {influencer.displayName || influencer.username}
              </h3>
              <Badge className={platformColors[influencer.platform] || "bg-gray-100"}>
                {influencer.platform}
              </Badge>
            </div>

            <p className="text-sm text-gray-500 mb-2">@{influencer.username}</p>

            {influencer.bio && (
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{influencer.bio}</p>
            )}

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span className="font-medium">{formatNumber(influencer.followers)}</span>
              </div>

              {influencer.engagement && (
                <div className={`flex items-center gap-1 ${getEngagementColor(influencer.engagement)}`}>
                  <Heart className="w-4 h-4" />
                  <span className="font-medium">{influencer.engagement.toFixed(1)}%</span>
                </div>
              )}

              {influencer.avgLikes && (
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{formatNumber(influencer.avgLikes)} avg</span>
                </div>
              )}

              {influencer.avgComments && (
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{formatNumber(influencer.avgComments)}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="info">{influencer.niche}</Badge>
              {influencer.location && (
                <Badge variant="default">{influencer.location}</Badge>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={influencer.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            {showAddButton && onAddToList && (
              <button
                onClick={() => onAddToList(influencer)}
                className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
