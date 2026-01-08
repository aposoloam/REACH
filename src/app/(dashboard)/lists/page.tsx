"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, List, Users, Trash2 } from "lucide-react";

interface InfluencerList {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  _count: { items: number };
}

export default function ListsPage() {
  const [lists, setLists] = useState<InfluencerList[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const res = await fetch("/api/lists");
      const data = await res.json();
      setLists(data);
    } catch (error) {
      console.error("Error fetching lists:", error);
    } finally {
      setLoading(false);
    }
  };

  const createList = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    try {
      const res = await fetch("/api/lists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName, description: newDescription }),
      });
      if (res.ok) {
        setNewName("");
        setNewDescription("");
        setShowCreate(false);
        fetchLists();
      }
    } catch (error) {
      console.error("Error creating list:", error);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Lists</h1>
          <p className="text-gray-500 mt-1">Organize influencers into lists</p>
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New List
        </Button>
      </div>

      {/* Create form */}
      {showCreate && (
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Create New List</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={createList} className="space-y-4">
              <Input
                label="List Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g., Fashion Influencers NYC"
                required
              />
              <Input
                label="Description (optional)"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Brief description of this list"
              />
              <div className="flex gap-3">
                <Button type="submit" loading={creating}>
                  Create List
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

      {/* Lists grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : lists.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <List className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No lists yet</h3>
            <p className="text-gray-500 mt-1">
              Create a list to organize your influencers
            </p>
            <Button className="mt-4" onClick={() => setShowCreate(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create List
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lists.map((list) => (
            <Card key={list.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <List className="w-5 h-5" />
                  </div>
                  <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{list.name}</h3>
                {list.description && (
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {list.description}
                  </p>
                )}
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  {list._count.items} influencers
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
