"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Megaphone, Users, Clock, Play, Pause } from "lucide-react";

interface Campaign {
  id: string;
  name: string;
  description: string | null;
  status: string;
  createdAt: string;
  list: { name: string } | null;
  _count: { outreaches: number };
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const res = await fetch("/api/campaigns");
      const data = await res.json();
      setCampaigns(data);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    } finally {
      setLoading(false);
    }
  };

  const createCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    try {
      const res = await fetch("/api/campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName, description: newDescription }),
      });
      if (res.ok) {
        setNewName("");
        setNewDescription("");
        setShowCreate(false);
        fetchCampaigns();
      }
    } catch (error) {
      console.error("Error creating campaign:", error);
    } finally {
      setCreating(false);
    }
  };

  const statusColors: Record<string, "default" | "success" | "warning" | "info"> = {
    draft: "default",
    active: "success",
    paused: "warning",
    completed: "info",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-gray-500 mt-1">Manage your outreach campaigns</p>
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Create form */}
      {showCreate && (
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Create New Campaign</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={createCampaign} className="space-y-4">
              <Input
                label="Campaign Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g., Summer Product Launch"
                required
              />
              <Input
                label="Description (optional)"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Brief description of the campaign"
              />
              <div className="flex gap-3">
                <Button type="submit" loading={creating}>
                  Create Campaign
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowCreate(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Campaigns list */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : campaigns.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Megaphone className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No campaigns yet</h3>
            <p className="text-gray-500 mt-1">
              Create your first campaign to start reaching out to influencers
            </p>
            <Button className="mt-4" onClick={() => setShowCreate(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Campaign
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                      <Megaphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                      {campaign.description && (
                        <p className="text-sm text-gray-500 mt-0.5">{campaign.description}</p>
                      )}
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {campaign._count.outreaches} outreach
                        </div>
                        {campaign.list && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {campaign.list.name}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={statusColors[campaign.status] || "default"}>
                      {campaign.status}
                    </Badge>
                    {campaign.status === "active" ? (
                      <Button variant="outline" size="sm">
                        <Pause className="w-4 h-4 mr-1" />
                        Pause
                      </Button>
                    ) : campaign.status === "draft" || campaign.status === "paused" ? (
                      <Button variant="outline" size="sm">
                        <Play className="w-4 h-4 mr-1" />
                        Start
                      </Button>
                    ) : null}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
