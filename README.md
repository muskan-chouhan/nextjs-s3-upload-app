# AWS Cloud File Upload App

Production-ready Next.js application deployed on AWS that uploads images to Amazon S3 and stores application data in Amazon RDS. The application is deployed behind an Application Load Balancer (ALB) with multiple EC2 instances and an Auto Scaling Group for high availability.

---

## 🔄 Architecture

```text
                   Internet
                       │
                       ▼
        Application Load Balancer (ALB)
               │               │
               ▼               ▼
          EC2 Instance 1   EC2 Instance 2
               │               │
          Nginx + PM2     Nginx + PM2
               │               │
               └──────┬────────┘
                      ▼
                 Next.js App
                 │         │
                 ▼         ▼
            Amazon S3   Amazon RDS
```

## 🔄 Application Workflow

- Users interact with the Next.js application to upload images.
- Uploaded images are stored in Amazon S3.
- Application data is stored in Amazon RDS (MySQL).
- The application runs on multiple EC2 instances.
- Nginx is configured as a reverse proxy for the application.
- PM2 manages the Next.js application process.
- The Application Load Balancer distributes incoming traffic across EC2 instances.
- The Auto Scaling Group manages EC2 instances for scalable and highly available deployment.

---

 ## ✨ Features

- Image Upload
- Amazon S3 Integration
- Amazon RDS Integration
- Multi-EC2 Deployment
- Application Load Balancer
- Auto Scaling Group
- PM2 Process Manager
- Nginx Reverse Proxy
- High Availability Architecture

---

## 🚀 Installation / How to Run
```bash
npm install
npm run dev
```

---

## 👩‍💻 Author

Muskan Chouhan
