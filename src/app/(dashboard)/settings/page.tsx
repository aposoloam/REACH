"use client";

import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, CreditCard, Bell, Shield } from "lucide-react";

export default function SettingsPage() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account and preferences</p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-2 bg-gray-100 rounded-lg">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Profile</h2>
            <p className="text-sm text-gray-500">Your account information</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Name"
            defaultValue={session?.user?.name || ""}
            placeholder="Your name"
          />
          <Input
            label="Email"
            defaultValue={session?.user?.email || ""}
            type="email"
            disabled
          />
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Subscription */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <CreditCard className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Subscription</h2>
            <p className="text-sm text-gray-500">Manage your plan</p>
          </div>
          <Badge variant="info">Free Trial</Badge>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-gray-50 rounded-lg mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Current Plan</span>
              <span className="text-gray-600">Free</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Searches remaining</span>
              <span>10 / 10</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button>Upgrade to Pro</Button>
            <Button variant="outline">View Plans</Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Bell className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Notifications</h2>
            <p className="text-sm text-gray-500">Configure email preferences</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium">Campaign updates</p>
                <p className="text-sm text-gray-500">Get notified when influencers respond</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium">Weekly digest</p>
                <p className="text-sm text-gray-500">Summary of your outreach performance</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium">Product updates</p>
                <p className="text-sm text-gray-500">New features and improvements</p>
              </div>
              <input type="checkbox" className="w-4 h-4 text-indigo-600" />
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <Shield className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Security</h2>
            <p className="text-sm text-gray-500">Manage your password</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Current Password"
            type="password"
            placeholder="Enter current password"
          />
          <Input
            label="New Password"
            type="password"
            placeholder="Enter new password"
          />
          <Button>Update Password</Button>
        </CardContent>
      </Card>
    </div>
  );
}
