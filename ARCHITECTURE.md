# Earlington Legacy Institute (ELI) - "Zero-G" Cloud Topology

This document outlines the professional cloud architecture designed for the Earlington Legacy Institute. The infrastructure is built to be "Zero-Gravity"—lightweight, highly resilient, and globally distributed.

## 1. Overall Architecture

The ELI website utilizes a **Serverless Mesh Topology**. This decoupled approach ensures that failures in one layer do not affect the others.

- **Entry Point**: Afrihost Managed DNS → Google Cloud Global Load Balancer (GCLB).
- **Frontend Layer**: Firebase Hosting (Global CDN).
- **Intelligence Layer**: Google Studio AI (Gemini API) for generative search and analysis.
- **Logic & Data Layer**: Firebase Cloud Functions (Backend) & Firestore (NoSQL Database).

## 2. Technology Integration

### Firebase (The Engine)

- **Hosting**: Lightning-fast delivery of React/Next.js frontend.
- **Authentication**: Managed sign-ins for ELI members.
- **Firestore**: Real-time sync for historical data, community posts, and archives.

### Antigravity (The Resilience Layer)

- **Multi-Region Failover**: Implemented via GCLB. If the primary South African serving node experiences latency, traffic "floats" to the nearest healthy region (e.g., Europe-West).

### Afrihost (The Local Gateway)

- **Domain Management**: Manages the `.org.za` TLD.
- **DNS Strategy**: Registrar is Afrihost, with zones delegated to Google Cloud DNS for programmatic management and low TTLs.

### Google Studio AI (The Cognitive Layer)

- **Gemini API**: Integrated for "Legacy Search" using RAG (Retrieval-Augmented Generation).
- **Features**: Natural language querying of community history.

## 3. Quality Considerations

| Quality             | Design Choice              | Implementation Detail                                                               |
| :------------------ | :------------------------- | :---------------------------------------------------------------------------------- |
| **Secure**          | Identity-Aware Proxy & WAF | Google Cloud Armor (WAF) blocks SQLi/XSS. Firebase Security Rules protect archives. |
| **Efficient**       | Serverless Execution       | Cloud Functions & Firebase ensure zero "idle" costs.                                |
| **Resilient**       | The Antigravity Sync       | Multi-region Firestore replication for high consistency and availability.           |
| **High-Performing** | Edge Caching               | Firebase Hosting caches content at local PoPs (Johannesburg/Cape Town).             |
| **Cost-Effective**  | Scale-to-Zero              | Leverages free-tier credits and avoids dedicated VMs.                               |

## 4. Deployment & Operations

- **Environment**: Development in Google Studio AI/IDX.
- **CI/CD**: GitHub Actions with Firebase CLI. Automated "Antigravity Tests" verify builds before CDN deployment.
- **Monitoring**: Google Cloud Operations Suite (Project ID: `gen-lang-client-0837886678`).

## 5. Strategic Recommendations

1. **Immutable Archives**: Object Versioning in GCS for historical assets.
2. **Semantic Search**: Index content using Studio AI for meaning-based discovery.
3. **Local SEO**: Optimize DNS with CAA and DNSSEC.
4. **Audit Logs**: Maintain integrity with Cloud Audit Logs.
