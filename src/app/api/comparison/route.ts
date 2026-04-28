import { NextResponse } from "next/server";

export async function GET() {
  // Mock comparison data for the demo widget
  const data = {
    product: "Amul Butter 500g",
    results: [
      { provider: "Blinkit", price: 285, time: 8 },
      { provider: "Zepto", price: 279, time: 10 },
      { provider: "Swiggy Instamart", price: 295, time: 15 },
      { provider: "BigBasket", price: 289, time: 30 },
    ],
    cheapest: { provider: "Zepto", price: 279, time: 10 },
    costliest: { provider: "Swiggy Instamart", price: 295, time: 15 },
    savings: 16,
  };

  return NextResponse.json(data);
}
