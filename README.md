# Next.js AWS S3 Upload App

A simple project that demonstrates how to upload images from a Next.js application to Amazon S3 using the AWS SDK.

---

## Features

- Upload image from browser
- Store image in Amazon S3
- AWS SDK v3 integration
- API Route using Next.js
- Environment Variables
- IAM User Authentication

---

## Tech Stack

- Next.js
- TypeScript
- Amazon S3
- AWS SDK v3
- IAM

---

## Project Structure

```text
app/
 ├── api/
 │    └── upload/
 │         └── route.ts
 ├── page.tsx

lib/
 └── s3.ts
```

---

## Environment Variables

Create a `.env.local` file.

```env
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=ap-south-1
AWS_BUCKET_NAME=
```

---

## Request Flow

```text
Browser
    │
    ▼
Next.js
    │
    ▼
API Route
    │
    ▼
AWS SDK
    │
    ▼
Amazon S3 Bucket
```

---

## Future Improvements

- Generate unique file names
- Pre-Signed URL Upload
- Image Preview
- EC2 Deployment
- Docker Support

---

## Author

**Muskan Chouhan**