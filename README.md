# AWS Cloud File Upload App

Production-ready Next.js application deployed on AWS that uploads images to Amazon S3 and stores application data in Amazon RDS. The application is deployed behind an Application Load Balancer (ALB) with multiple EC2 instances and an Auto Scaling Group for high availability.

---

## Architecture

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

---

## AWS Architecture

- Custom VPC
- Public Subnets
- Private Subnet
- Internet Gateway
- Route Tables
- Security Groups
- Application Load Balancer (ALB)
- Target Group
- Auto Scaling Group (ASG)
- Amazon EC2
- Amazon S3
- Amazon RDS

---

## Tech Stack

- Next.js
- TypeScript
- AWS SDK v3
- Amazon EC2
- Amazon S3
- Amazon RDS
- Application Load Balancer
- Auto Scaling Group
- IAM
- PM2
- Nginx

---

## Features

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

## Run Project

```bash
npm install

npm run dev
```

---

## Future Improvements

- HTTPS (SSL/TLS)
- Route 53
- AWS WAF
- CloudFront CDN
- Docker
- Terraform
- Kubernetes
- CI/CD Pipeline (GitHub Actions)

---

## Author

Muskan Chouhan