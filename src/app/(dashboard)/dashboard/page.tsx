import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Megaphone, Users, TrendingUp } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();
  const userId = session?.user?.id;

  const [campaigns, lists, outreaches] = await Promise.all([
    prisma.campaign.count({ where: { userId } }),
    prisma.influencerList.count({ where: { userId } }),
    prisma.outreach.count({ where: { userId } }),
  ]);

  const recentOutreaches = await prisma.outreach.findMany({
    where: { userId },
    include: {
      influencer: true,
      campaign: true,
    },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const stats = [
    {
      label: "Active Campaigns",
      value: campaigns,
      icon: Megaphone,
      color: "text-indigo-600 bg-indigo-100",
    },
    {
      label: "Influencer Lists",
      value: lists,
      icon: Users,
      color: "text-green-600 bg-green-100",
    },
    {
      label: "Total Outreach",
      value: outreaches,
      icon: TrendingUp,
      color: "text-orange-600 bg-orange-100",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {session?.user?.name || "there"}!
          </h1>
          <p className="text-gray-500 mt-1">
            Here&apos;s what&apos;s happening with your outreach
          </p>
        </div>
        <Link href="/discover">
          <Button>
            <Search className="w-4 h-4 mr-2" />
            Find Influencers
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/discover" className="block">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Search className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="font-medium text-gray-900">Discover Influencers</p>
                  <p className="text-sm text-gray-500">
                    Search by niche, followers, engagement
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/campaigns" className="block">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Megaphone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Create Campaign</p>
                  <p className="text-sm text-gray-500">
                    Start a new outreach campaign
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/lists" className="block">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Users className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900">Manage Lists</p>
                  <p className="text-sm text-gray-500">
                    Organize your influencer lists
                  </p>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </CardHeader>
          <CardContent>
            {recentOutreaches.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No outreach activity yet</p>
                <Link href="/discover" className="text-indigo-600 hover:underline text-sm mt-1 block">
                  Start by finding influencers
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {recentOutreaches.map((outreach) => (
                  <div key={outreach.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                      {outreach.influencer.username[0].toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        @{outreach.influencer.username}
                      </p>
                      <p className="text-sm text-gray-500">{outreach.campaign.name}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-600">
                      {outreach.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
