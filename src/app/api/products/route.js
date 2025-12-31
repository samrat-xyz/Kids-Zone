import { dbConnect, collections } from "@/lib/dbConnect";

export async function GET() {
  try {
    const productCollection = dbConnect(collections.PRODUCTS);

    const products = await productCollection.find().toArray();

    return Response.json(
      {
        success: true,
        products,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to fetch products",
      },
      { status: 500 }
    );
  }
}

