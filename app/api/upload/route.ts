import db from "@/lib/db";
import {
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
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

    // Object Key
    const objectKey = file.name;

    // Upload Image to S3
    const uploadCommand = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: objectKey,
      Body: Buffer.from(await file.arrayBuffer()),
    });

    await s3.send(uploadCommand);

    // Save Metadata in RDS
    await db.query(
      `INSERT INTO uploads (file_name, s3_url)
       VALUES (?, ?)`,
      [file.name, objectKey]
    );

    // Generate Temporary Signed URL
    const getCommand = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: objectKey,
    });

    const url = await getSignedUrl(s3, getCommand, {
      expiresIn: 300,
    });

    return Response.json({
      success: true,
      message: "Upload Successful 🚀",
      url,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
      message: "Upload Failed",
    });
  }
}