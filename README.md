# 🚀 DevOps Production-Level CI/CD Pipeline with Monitoring

## 📌 Project Overview

This project demonstrates a production-style DevOps pipeline integrating CI/CD, containerization, and real-time monitoring.

A React application is automatically built, containerized using Docker, and deployed on an AWS EC2 instance using Jenkins.

The system is monitored using Prometheus and Grafana.

---

## 🏗️ Architecture

GitHub → Jenkins → Docker → EC2 → React App (Live)  
                             ↓  
        Prometheus → Grafana (Monitoring)

---

## ⚙️ Tech Stack

- React.js (Frontend Application)
- Jenkins (CI/CD Automation)
- Docker (Containerization)
- AWS EC2 (Deployment Server)
- GitHub (Source Code Management)
- Prometheus (Metrics Collection)
- Grafana (Monitoring & Visualization)

---

## 🔄 CI/CD Pipeline Flow

- Developer pushes code to GitHub  
- GitHub Webhook triggers Jenkins  
- Jenkins pulls latest code  
- Builds Docker image  
- Runs container on EC2  
- Application is deployed automatically  

---

## 📊 Monitoring Setup

- Prometheus collects system and container metrics (CPU, memory, disk)
- Grafana visualizes metrics using dashboards
- Node Exporter provides system-level metrics from EC2

---

## 📸 Screenshots

### 🔹 Jenkins Pipeline Success
Build success triggered by GitHub push

### 🔹 Prometheus Targets
node-exporter = UP

### 🔹 Prometheus Graphs
Live metric data

### 🔹 Grafana Dashboard
CPU, memory, disk usage graphs

### 🔹 React Application Running
Live UI deployed on EC2

---

## 🚀 Features

- Fully automated CI/CD pipeline  
- Dockerized React application  
- Real-time system monitoring  
- Auto deployment on code push  
- Production-style DevOps workflow  

---

## 📌 Author

Nandhini  
DevOps Engineer 
