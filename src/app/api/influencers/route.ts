import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const niche = searchParams.get("niche");
  const platform = searchParams.get("platform");
  const minFollowers = searchParams.get("minFollowers");
  const maxFollowers = searchParams.get("maxFollowers");
  const search = searchParams.get("search");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  const where: Record<string, unknown> = {};

  if (niche && niche !== "all") {
    where.niche = niche;
  }

  if (platform && platform !== "all") {
    where.platform = platform;
  }

  if (minFollowers) {
    where.followers = { ...((where.followers as object) || {}), gte: parseInt(minFollowers) };
  }

  if (maxFollowers) {
    where.followers = { ...((where.followers as object) || {}), lte: parseInt(maxFollowers) };
  }

  if (search) {
    where.OR = [
      { username: { contains: search } },
      { displayName: { contains: search } },
      { bio: { contains: search } },
    ];
  }

  const [influencers, total] = await Promise.all([
    prisma.influencer.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { followers: "desc" },
    }),
    prisma.influencer.count({ where }),
  ]);

  return NextResponse.json({
    influencers,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
}
