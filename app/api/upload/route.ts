import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "@/lib/s3";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return Response.json({
        success: false,
        message: "No file selected",
      });
    }

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: file.name,
      Body: Buffer.from(await file.arrayBuffer()),
    });

    await s3.send(command);

    return Response.json({
      success: true,
      message: "Image Uploaded Successfully 🚀",
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
      message: "Upload Failed",
    });
  }
}