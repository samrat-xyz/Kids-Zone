import { ObjectId } from "mongodb";
import { collections, dbConnect,  } from "@/lib/dbConnect";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    // Validate ObjectId
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
        product,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to fetch product",
      },
      { status: 500 }
    );
  }
}
