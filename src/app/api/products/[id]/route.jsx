import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
export async function GET(req, { params }) {
  try {
    const { id } = await params;

    // validate Mongo ObjectId
    if (!ObjectId.isValid(id)) {
      return Response.json(
        { success: false, message: "Invalid product ID" },
        { status: 400 }
      );
    }

    const productCollection = dbConnect(collections.PRODUCTS);

    const product = await productCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!product) {
      return Response.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        product: {
          ...product,
          _id: product._id.toString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: "Failed to fetch product" },
      { status: 500 }
    );
  }
}