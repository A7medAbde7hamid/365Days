#!/usr/bin/env python3
import re, os

# ============================================================
# Phase 10: Add days 281-300 (20 days) after day 280
# ============================================================
with open('src/features/curriculum/days/phase-10.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find day 280 entry end and closing bracket
day280_marker = 'dayNumber: 280'
idx = content.find(day280_marker)
if idx < 0:
    print("Could not find day 280 in phase-10.ts")
else:
    end_search_start = idx + len(day280_marker)
    end_idx = content.find('},', end_search_start)
    if end_idx < 0:
        print("Could not find end of day 280 entry")
    else:
        close_bracket = content.rfind(']')
        if close_bracket < 0:
            print("Could not find closing bracket")
        else:
            insert_point = end_idx + 2
            
            new_days_text = """  {
    dayNumber: 281,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'CI/CD Pipeline Fundamentals',
    titleAr: 'أ fundamentals pipeline CI/CD',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Explain the core concepts of Continuous Integration and Continuous Deployment.',
    objectiveAr: 'اشرح concepts core لـ CI/CD',
    lessonEn:
      'Continuous Integration (CI) and Continuous Deployment (CD) are essential practices for modern software development. CI automates the building, testing, and merging of code changes, while CD automates the release of those changes to production. Together, they enable fast, reliable, and frequent deployments.',
    lessonAr:
      'CI/CD practices are essential for modern software development. CI ي automates the building, testing, and merging of code changes, while CD ي automates the release of those changes to الإنتاج. Together, they enable fast, reliable, and frequent deployments.',
    tasks: [
      {
        en: 'Explain the core concepts of Continuous Integration and Continuous Deployment',
        ar: 'Explain the core concepts of Continuous Integration and Continuous Deployment'
      },
      {
        en: 'Describe the typical CI/CD pipeline stages: build, test, deploy, and monitor',
        ar: 'Describe the typical CI/CD pipeline stages: build, test, deploy, and monitor'
      },
      {
        en: 'Set up a basic CI pipeline using GitHub Actions that runs on every push to main',
        ar: 'Set up a basic CI pipeline using GitHub Actions that runs on every push to main'
      },
      {
        en: 'Configure a pipeline to run linting, type checking, and tests automatically',
        ar: 'Configure a pipeline to run linting, type checking, and tests automatically'
      }
    ],
    exerciseEn: 'Set up a basic CI pipeline using GitHub Actions that runs on every push.',
    exerciseAr: 'Set up a basic CI pipeline using GitHub Actions that runs on every push.',
    deliverableEn: 'A GitHub Actions workflow file that builds and tests on every push.',
    deliverableAr: 'A GitHub Actions workflow file that builds and tests on every push.',
    resources: [
      {
        title: 'GitHub Actions docs',
        url: 'https://docs.github.com/en/actions',
        kind: 'official'
      },
      {
        title: 'CI/CD Tutorial',
        url: 'https://www.atlassian.com/ci-cd/tutorial',
        kind: 'reference'
      }
    ],
    challengeEn: 'Create a CI pipeline that runs on every push and passes all checks.',
    challengeAr: 'Create a CI pipeline that runs on every push and passes all checks.',
    prerequisites: [],
    criteriaEn: ['Can set up a GitHub Actions workflow', 'Can configure linting and testing'],
    criteriaAr: ['Can set up a GitHub Actions workflow', 'Can configure linting and testing']
  },
  {
    dayNumber: 282,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Containerizing Applications',
    titleAr: 'حاوية containerizing applications',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Write a Dockerfile for a Node.js application with multi-stage builds to optimize image size.',
    objectiveAr: 'Write a Dockerfile for a Node.js application multi-stage builds',
    lessonEn:
      'Docker enables consistent deployment environments. Multi-stage builds reduce image size by using a build stage and a final stage, removing build artifacts from the final image.',
    lessonAr:
      'Docker enables consistent deployment environments. Multi-stage builds reduce image size by using a build stage and a final stage, removing build artifacts from the final image.',
    tasks: [
      {
        en: 'Write a Dockerfile for a Node.js application with multi-stage builds',
        ar: 'Write a Dockerfile for a Node.js application multi-stage builds'
      },
      {
        en: 'Optimize image size by using Alpine base and removing build artifacts',
        ar: 'Optimize image size by using Alpine base and removing build artifacts'
      },
      {
        en: 'Push and pull a Docker image to Docker Hub',
        ar: 'Push and pull a Docker image to Docker Hub'
      },
      {
        en: 'Configure a .dockerignore file to exclude unnecessary files',
        ar: 'Configure a .dockerignore file to exclude unnecessary files'
      }
    ],
    exerciseEn: 'Create a Dockerfile for a Node.js project with multi-stage builds.',
    exerciseAr: 'Create a Dockerfile for a Node.js project with multi-stage builds.',
    deliverableEn: 'A Dockerfile with multi-stage builds and a small final image.',
    deliverableAr: 'A Dockerfile with multi-stage builds and a small final image.',
    resources: [
      {
        title: 'Docker docs',
        url: 'https://docs.docker.com',
        kind: 'official'
      },
      {
        title: 'Node.js Dockerfile guide',
        url: 'https://github.com/nodejs/docker-node',
        kind: 'reference'
      }
    ],
    challengeEn: 'Build and push a Docker image for your project.',
    challengeAr: 'Build and push a Docker image for your project.',
    prerequisites: [],
    criteriaEn: ['Can write a multi-stage Dockerfile', 'Can optimize image size'],
    criteriaAr: ['Can write a multi-stage Dockerfile', 'Can optimize image size']
  },
  {
    dayNumber: 283,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Orchestration with Docker Compose',
    titleAr: 'التنسيق بـ Docker Compose',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Define a docker-compose.yml for a full-stack app with frontend, backend, and database services.',
    objectiveAr: 'حدد docker-compose.yml لـ full-stack app frontend, backend, and database services',
    lessonEn:
      'Docker Compose simplifies running multi-container applications. A single docker-compose.yml file defines services, networks, and volumes for a full-stack app including frontend, backend, and database.',
    lessonAr:
      'Docker Compose simplifies running multi-container applications. A single docker-compose.yml file defines services, networks, and volumes for a full-stack app including frontend, backend, and database.',
    tasks: [
      {
        en: 'Define a docker-compose.yml for a full-stack app with frontend, backend, and database',
        ar: 'حدد docker-compose.yml لـ full-stack app frontend, backend, and database services'
      },
      {
        en: 'Use environment variables in docker-compose.yml for configuration across environments',
        ar: 'Use environment variables in docker-compose.yml for configuration across environments'
      },
      {
        en: 'Start the application with docker compose up',
        ar: 'Start the application with docker compose up'
      },
      {
        en: 'Define restart policies for production resilience',
        ar: 'Define restart policies for production resilience'
      }
    ],
    exerciseEn: 'Create a docker-compose.yml for a three-service app.',
    exerciseAr: 'Create a docker-compose.yml for a three-service app.',
    deliverableEn: 'A docker-compose.yml file for a full-stack application.',
    deliverableAr: 'A docker-compose.yml file for a full-stack application.',
    resources: [
      {
        title: 'Docker Compose docs',
        url: 'https://docs.docker.com/compose',
        kind: 'official'
      },
      {
        title: 'Compose file reference',
        url: 'https://github.com/compose-spec/compose-spec',
        kind: 'reference'
      }
    ],
    challengeEn: 'Set up a full-stack app with Docker Compose and start it.',
    challengeAr: 'Set up a full-stack app with Docker Compose and start it.',
    prerequisites: [],
    criteriaEn: ['Can define a docker-compose.yml', 'Can use environment variables'],
    criteriaAr: ['Can define a docker-compose.yml', 'Can use environment variables']
  },
  {
    dayNumber: 284,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Health Checks and Restart Policies',
    titleAr: 'فحوصات الصحة وسياسات إعادة الاستضافة',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Configure health checks in Docker Compose to monitor service readiness and set restart policies for production resilience.',
    objectiveAr: 'Configure health checks in Docker Compose to monitor service readiness and set restart policies for production resilience',
    lessonEn:
      'Health checks determine when a service is ready to receive traffic. Restart policies (on-failure, always, no) ensure production resilience by automatically recovering from failures.',
    lessonAr:
      'Health checks determine when a service is ready to receive traffic. Restart policies (on-failure, always, no) ensure production resilience by automatically recovering from failures.',
    tasks: [
      {
        en: 'Configure health checks in docker-compose.yml',
        ar: 'Configure health checks in docker-compose.yml'
      },
      {
        en: 'Set restart policies (on-failure, always, no)',
        ar: 'Set restart policies (on-failure, always, no)'
      },
      {
        en: 'Test failure recovery by stopping a container',
        ar: 'Test failure recovery by stopping a container'
      },
      {
        en: 'Document health check and restart configuration',
        ar: 'Document health check and restart configuration'
      }
    ],
    exerciseEn: 'Add health checks and restart policies to a docker-compose.yml.',
    exerciseAr: 'Add health checks and restart policies to a docker-compose.yml.',
    deliverableEn: 'A docker-compose.yml with health checks and restart policies.',
    deliverableAr: 'A docker-compose.yml with health checks and restart policies.',
    resources: [
      {
        title: 'Docker Compose reference',
        url: 'https://docs.docker.com/compose/reference/',
        kind: 'official'
      }
    ],
    challengeEn: 'Configure health checks and restart policies for your application.',
    challengeAr: 'Configure health checks and restart policies for your application.',
    prerequisites: [],
    criteriaEn: ['Can configure health checks', 'Can set restart policies'],
    criteriaAr: ['Can configure health checks', 'Can set restart policies']
  },
  {
    dayNumber: 285,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'CI Cache Strategies',
    titleAr: 'استراتيجيات caching CI',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Configure pip cache, npm cache, and Docker layer caching to speed up pipeline execution.',
    objectiveAr: 'Configure pip cache, npm cache, and Docker layer caching to speed up pipeline execution',
    lessonEn:
      'Pipeline caching dramatically reduces execution time by reusing dependencies and Docker layers. Configuring pip cache, npm cache, and Docker layer caching is essential for fast feedback loops.',
    lessonAr:
      'Pipeline caching dramatically reduces execution time by reusing dependencies and Docker layer caching. Configuring pip cache, npm cache, and Docker layer caching is essential for fast feedback loops.',
    tasks: [
      {
        en: 'Configure pip cache in GitHub Actions',
        ar: 'Configure pip cache in GitHub Actions'
      },
      {
        en: 'Configure npm cache in GitHub Actions',
        ar: 'Configure npm cache in GitHub Actions'
      },
      {
        en: 'Configure Docker layer caching',
        ar: 'Configure Docker layer caching'
      },
      {
        en: 'Measure pipeline duration before and after caching',
        ar: 'Measure pipeline duration before and after caching'
      }
    ],
    exerciseEn: 'Configure caching and measure pipeline duration improvement.',
    exerciseAr: 'Configure caching and measure pipeline duration improvement.',
    deliverableEn: 'A GitHub Actions workflow with caching configured.',
    deliverableAr: 'A GitHub Actions workflow with caching configured.',
    resources: [
      {
        title: 'GitHub Actions caching',
        url: 'https://docs.github.com/en/actions/using-workflows/caching',
        kind: 'official'
      }
    ],
    challengeEn: 'Implement caching and reduce pipeline time by at least 50%.',
    challengeAr: 'Implement caching and reduce pipeline time by at least 50%.',
    prerequisites: [],
    criteriaEn: ['Can configure pipeline caching', 'Can measure duration improvement'],
    criteriaAr: ['Can configure pipeline caching', 'Can measure duration improvement']
  },
  {
    dayNumber: 286,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Infrastructure as Code with Terraform',
    titleAr: 'Infrastructure as Code بـ Terraform',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Write a basic Terraform configuration to provision an AWS EC2 instance and apply the configuration.',
    objectiveAr: 'Write a basic Terraform configuration to provision an AWS EC2 instance and apply the configuration',
    lessonEn:
      'Infrastructure as Code (IaC) allows managing infrastructure through declarative configuration. Terraform uses HCL (HashiCorp Configuration Language) to provision resources safely and predictably.',
    lessonAr:
      'Infrastructure as Code (IaC) allows managing infrastructure through declarative configuration. Terraform uses HCL (HashiCorp Configuration Language) to provision resources safely and predictably.',
    tasks: [
      {
        en: 'Write a basic Terraform configuration to provision an AWS EC2 instance',
        ar: 'Write a basic Terraform configuration to provision an AWS EC2 instance'
      },
      {
        en: 'Apply the configuration and verify the resource in the AWS console',
        ar: 'Apply the configuration and verify the resource in the AWS console'
      },
      {
        en: 'Write Terraform variables for instance type and region',
        ar: 'Write Terraform variables for instance type and region'
      },
      {
        en: 'Run terraform init, plan, and apply',
        ar: 'Run terraform init, plan, and apply'
      }
    ],
    exerciseEn: 'Provision an AWS EC2 instance using Terraform.',
    exerciseAr: 'Provision an AWS EC2 instance using Terraform.',
    deliverableEn: 'Applied Terraform configuration and verified resource creation.',
    deliverableAr: 'Applied Terraform configuration and verified resource creation.',
    resources: [
      {
        title: 'Terraform docs',
        url: 'https://developer.hashicorp.com/terraform',
        kind: 'official'
      },
      {
        title: 'AWS EC2 resource',
        url: 'https://registry.terraform.io/resources/hashicorp/aws',
        kind: 'reference'
      }
    ],
    challengeEn: 'Provision an AWS resource using Terraform from scratch.',
    challengeAr: 'Provision an AWS resource using Terraform from scratch.',
    prerequisites: [],
    criteriaEn: ['Can write Terraform configuration', 'Can apply and verify resources'],
    criteriaAr: ['Can write Terraform configuration', 'Can apply and verify resources']
  },
  {
    dayNumber: 287,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Kubernetes Basics',
    titleAr: 'Basics Kubernetes',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Create a Kubernetes Deployment manifest for a simple application with 3 replicas and expose it as a LoadBalancer Service.',
    objectiveAr: 'Create a Kubernetes Deployment manifest for a simple application with 3 replicas and expose it as a LoadBalancer Service.',
    lessonEn:
      'Kubernetes is the leading container orchestration platform. A Deployment manages replicated applications, and a Service of type LoadBalancer exposes the application externally.',
    lessonAr:
      'Kubernetes is the leading container orchestration platform. A Deployment manages replicated applications, and a Service of type LoadBalancer exposes the application externally.',
    tasks: [
      {
        en: 'Create a Kubernetes Deployment manifest with 3 replicas',
        ar: 'Create a Kubernetes Deployment manifest with 3 replicas'
      },
      {
        en: 'Expose the application as a Kubernetes Service of type LoadBalancer',
        ar: 'Expose the application as a Kubernetes Service of type LoadBalancer'
      },
      {
        en: 'Verify the Service external IP is assigned',
        ar: 'Verify the Service external IP is assigned'
      },
      {
        en: 'Update the Deployment image and observe rollout',
        ar: 'Update the Deployment image and observe rollout'
      }
    ],
    exerciseEn: 'Create a Kubernetes Deployment and Service for a sample app.',
    exerciseAr: 'Create a Kubernetes Deployment and Service for a sample app.',
    deliverableEn: 'A Kubernetes Deployment and Service manifest.',
    deliverableAr: 'A Kubernetes Deployment and Service manifest.',
    resources: [
      {
        title: 'Kubernetes docs',
        url: 'https://kubernetes.io/docs',
        kind: 'official'
      },
      {
        title: 'Kubernetes Quickstart',
        url: 'https://kubernetes.io/docs/tutorials/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Deploy a sample app to a local Kubernetes cluster.',
    challengeAr: 'Deploy a sample app to a local Kubernetes cluster.',
    prerequisites: [],
    criteriaEn: ['Can create a Kubernetes Deployment', 'Can create a LoadBalancer Service'],
    criteriaAr: ['Can create a Kubernetes Deployment', 'Can create a LoadBalancer Service']
  },
  {
    dayNumber: 288,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Secret Management',
    titleAr: 'إدارة الأسرار',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Use GitHub Actions secrets to store database connection strings securely and never hardcode credentials in pipeline YAML.',
    objectiveAr: 'Use GitHub Actions secrets to store database connection strings securely and never hardcode credentials in pipeline YAML',
    lessonEn:
      'Hardcoding credentials in pipeline YAML is a security risk. GitHub Actions secrets provide a secure way to store and inject sensitive data at runtime.',
    lessonAr:
      'Hardcoding credentials in pipeline YAML is a security risk. GitHub Actions secrets provide a secure way to store and inject sensitive data at runtime.',
    tasks: [
      {
        en: 'Store a database connection string in GitHub Actions secrets',
        ar: 'Store a database connection string in GitHub Actions secrets'
      },
      {
        en: 'Use the secret in a workflow step',
        ar: 'Use the secret in a workflow step'
      },
      {
        en: 'Never hardcode credentials in pipeline YAML files',
        ar: 'Never hardcode credentials in pipeline YAML files'
      },
      {
        en: 'Rotate a secret and update the workflow',
        ar: 'Rotate a secret and update the workflow'
      }
    ],
    exerciseEn: 'Add a secret to a GitHub Actions workflow and use it.',
    exerciseAr: 'Add a secret to a GitHub Actions workflow and use it.',
    deliverableEn: 'A GitHub Actions workflow using secrets for database credentials.',
    deliverableAr: 'A GitHub Actions workflow using secrets for database credentials.',
    resources: [
      {
        title: 'GitHub Actions secrets',
        url: 'https://docs.github.com/en/actions/security',
        kind: 'official'
      }
    ],
    challengeEn: 'Add a secret and use it in a workflow step.',
    challengeAr: 'Add a secret and use it in a workflow step.',
    prerequisites: [],
    criteriaEn: ['Can use GitHub Actions secrets', 'Can avoid hardcoding credentials'],
    criteriaAr: ['Can use GitHub Actions secrets', 'Can avoid hardcoding credentials']
  },
  {
    dayNumber: 288,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Blue-Green Deployment',
    titleAr: 'Blue-Green Deployment',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Describe the blue-green deployment strategy and its advantages over rolling updates, and implement it using Kubernetes Deployments and Services.',
    objectiveAr: 'Describe the blue-green deployment strategy and its advantages over rolling updates, and implement it using Kubernetes Deployments and Services.',
    lessonEn:
      'Blue-green deployment maintains two identical production environments. Traffic is shifted from the green environment to the blue environment, enabling instant rollback if issues are detected.',
    lessonAr:
      'Blue-green deployment maintains two identical production environments. Traffic is shifted from the green environment to the blue environment, enabling instant rollback if issues are detected.',
    tasks: [
      {
        en: 'Describe the blue-green deployment strategy',
        ar: 'Describe the blue-green deployment strategy'
      },
      {
        en: 'Implement blue-green using Kubernetes Deployments and Services',
        ar: 'Implement blue-green using Kubernetes Deployments and Services'
      },
      {
        en: 'Shift traffic from green to blue environment',
        ar: 'Shift traffic from green to blue environment'
      },
      {
        en: 'Test rollback by switching traffic back to green',
        ar: 'Test rollback by switching traffic back to green'
      }
    ],
    exerciseEn: 'Implement a blue-green deployment for your application.',
    exerciseAr: 'Implement a blue-green deployment for your application.',
    deliverableEn: 'A blue-green deployment configuration using Kubernetes.',
    deliverableAr: 'A blue-green deployment configuration using Kubernetes.',
    resources: [
      {
        title: 'Kubernetes docs',
        url: 'https://kubernetes.io/docs',
        kind: 'official'
      }
    ],
    challengeEn: 'Implement blue-green deployment and test rollback.',
    challengeAr: 'Implement blue-green deployment and test rollback.',
    prerequisites: [],
    criteriaEn: ['Can describe blue-green strategy', 'Can implement with Kubernetes'],
    criteriaAr: ['Can describe blue-green strategy', 'Can implement with Kubernetes']
  },
  {
    dayNumber: 289,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Monitoring and Logging',
    titleAr: 'مراقبة والتسجيل',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Configure Prometheus metrics and Grafana dashboards for application monitoring, and set up centralized logging using the ELK stack.',
    objectiveAr: 'Configure Prometheus metrics and Grafana dashboards for application monitoring, and set up centralized logging using the ELK stack',
    lessonEn:
      'Observability requires metrics, logs, and traces. Prometheus collects metrics, Grafana visualizes them, and the ELK stack provides centralized logging with structured JSON entries.',
    lessonAr:
      'Observability requires metrics, logs, and traces. Prometheus collects metrics, Grafana visualizes them, and the ELK stack provides centralized logging with structured JSON entries.',
    tasks: [
      {
        en: 'Configure Prometheus metrics for an application',
        ar: 'Configure Prometheus metrics for an application'
      },
      {
        en: 'Create a Grafana dashboard',
        ar: 'Create a Grafana dashboard'
      },
      {
        en: 'Set up centralized logging using the ELK stack',
        ar: 'Set up centralized logging using the ELK stack'
      },
      {
        en: 'Send structured JSON logs to the ELK stack',
        ar: 'Send structured JSON logs to the ELK stack'
      }
    ],
    exerciseEn: 'Set up Prometheus metrics and a Grafana dashboard.',
    exerciseAr: 'Set up Prometheus metrics and a Grafana dashboard.',
    deliverableEn: 'A Prometheus configuration and Grafana dashboard.',
    deliverableAr: 'A Prometheus configuration and Grafana dashboard.',
    resources: [
      {
        title: 'Prometheus docs',
        url: 'https://prometheus.io/docs',
        kind: 'official'
      },
      {
        title: 'Grafana docs',
        url: 'https://grafana.com/docs',
        kind: 'official'
      }
    ],
    challengeEn: 'Set up monitoring and logging for your application.',
    challengeAr: 'Set up monitoring and logging for your application.',
    prerequisites: [],
    criteriaEn: ['Can configure Prometheus', 'Can create a Grafana dashboard'],
    criteriaAr: ['Can configure Prometheus', 'Can create a Grafana dashboard']
  },
  {
    dayNumber: 290,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Canary Deployments',
    titleAr: 'Deployments Canary',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Explain the canary deployment approach and implement it using feature flags, gradually shifting 10% of traffic to the new version and monitoring metrics.',
    objectiveAr: 'Explain the canary deployment approach and implement it using feature flags, gradually shifting 10% of traffic to the new version and monitoring metrics',
    lessonEn:
      'Canary deployments reduce risk by gradually shifting traffic to the new version. Starting with 10% and monitoring metrics allows safe promotion or quick rollback if errors are detected.',
    lessonAr:
      'Canary deployments reduce risk by gradually shifting traffic to the new version. Starting with 10% and monitoring metrics allows safe promotion or quick rollback if errors are detected.',
    tasks: [
      {
        en: 'Explain the canary deployment approach',
        ar: 'Explain the canary deployment approach'
      },
      {
        en: 'Implement using feature flags',
        ar: 'Implement using feature flags'
      },
      {
        en: 'Gradually shift 10% of traffic to the new version',
        ar: 'Gradually shift 10% of traffic to the new version'
      },
      {
        en: 'Monitor metrics and define rollout criteria',
        ar: 'Monitor metrics and define rollout criteria'
      }
    ],
    exerciseEn: 'Implement a canary deployment with 10% traffic shift.',
    exerciseAr: 'Implement a canary deployment with 10% traffic shift.',
    deliverableEn: 'A canary deployment configuration with feature flags.',
    deliverableAr: 'A canary deployment configuration with feature flags.',
    resources: [
      {
        title: 'Feature flags service',
        url: 'https://launchdarkly.com/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Implement a canary deployment with 10% traffic shift and monitor metrics.',
    challengeAr: 'Implement a canary deployment with 10% traffic shift and monitor metrics.',
    prerequisites: [],
    criteriaEn: ['Can implement canary deployment', 'Can monitor metrics'],
    criteriaAr: ['Can implement canary deployment', 'Can monitor metrics']
  },
  {
    dayNumber: 291,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Infrastructure Cost Optimization',
    titleAr: 'توفير تكاليف البنية',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Identify unused resources and implement cost-saving measures in cloud infrastructure, including monthly budget alerts and resource tagging.',
    objectiveAr: 'Identify unused resources and implement cost-saving measures in cloud infrastructure, including monthly budget alerts and resource tagging',
    lessonEn:
      'Cloud costs can spiral out of control without proper management. Identifying unused resources, implementing tagging strategies, and setting budget alerts are essential for cost optimization.',
    lessonAr:
      'Cloud costs can spiral out of control without proper management. Identifying unused resources, implementing tagging strategies, and setting budget alerts are essential for cost optimization.',
    tasks: [
      {
        en: 'Identify unused resources in your cloud account',
        ar: 'Identify unused resources in your cloud account'
      },
      {
        en: 'Implement a resource tagging strategy',
        ar: 'Implement a resource tagging strategy'
      },
      {
        en: 'Set up monthly budget alerts',
        ar: 'Set up monthly budget alerts'
      },
      {
        en: 'Generate a cost allocation report',
        ar: 'Generate a cost allocation report'
      }
    ],
    exerciseEn: 'Identify and remove 3 unused cloud resources.',
    exerciseAr: 'Identify and remove 3 unused cloud resources.',
    deliverableEn: 'A cost optimization report with removed resources.',
    deliverableAr: 'A cost optimization report with removed resources.',
    resources: [
      {
        title: 'AWS Cost Explorer',
        url: 'https://aws.amazon.com/cost-explorer/',
        kind: 'official'
      }
    ],
    challengeEn: 'Identify and remove unused resources and set a budget alert.',
    challengeAr: 'Identify and remove unused resources and set a budget alert.',
    prerequisites: [],
    criteriaEn: ['Can identify unused resources', 'Can set budget alerts'],
    criteriaAr: ['Can identify unused resources', 'Can set budget alerts']
  },
  {
    dayNumber: 292,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Service Mesh with Istio',
    titleAr: 'Service Mesh بـ Istio',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Install Istio service mesh and enable mutual TLS between services, and implement traffic routing rules using VirtualService and DestinationRule.',
    objectiveAr: 'Install Istio service mesh and enable mutual TLS between services, and implement traffic routing rules using VirtualService and DestinationRule',
    lessonEn:
      'A service mesh provides advanced traffic management, security, and observability for microservices. Istio is the leading service mesh solution, offering mTLS and traffic routing rules.',
    lessonAr:
      'A service mesh provides advanced traffic management, security, and observability for microservices. Istio is the leading service mesh solution, offering mTLS and traffic routing rules.',
    tasks: [
      {
        en: 'Install Istio service mesh',
        ar: 'Install Istio service mesh'
      },
      {
        en: 'Enable mutual TLS between services',
        ar: 'Enable mutual TLS between services'
      },
      {
        en: 'Implement traffic routing using VirtualService and DestinationRule',
        ar: 'Implement traffic routing using VirtualService and DestinationRule'
      },
      {
        en: 'Observe service mesh metrics in Grafana',
        ar: 'Observe service mesh metrics in Grafana'
      }
    ],
    exerciseEn: 'Install Istio and configure mTLS between two services.',
    exerciseAr: 'Install Istio and configure mTLS between two services.',
    deliverableEn: 'An Istio-installed cluster with mTLS and traffic rules.',
    deliverableAr: 'An Istio-installed cluster with mTLS and traffic rules.',
    resources: [
      {
        title: 'Istio docs',
        url: 'https://istio.io/docs',
        kind: 'official'
      }
    ],
    challengeEn: 'Install Istio and enable mTLS.',
    challengeAr: 'Install Istio and enable mTLS.',
    prerequisites: [],
    criteriaEn: ['Can install Istio', 'Can enable mTLS'],
    criteriaAr: ['Can install Istio', 'Can enable mTLS']
  },
  {
    dayNumber: 293,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Observability Three Pillars',
    titleAr: 'أ ثلاثة أعمدة للمراقبة',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Explain the three pillars of observability: logs, metrics, and traces, and how they work together to provide system insight.',
    objectiveAr: 'Explain the three pillars of observability: logs, metrics, and traces, and how they work together to provide system insight',
    lessonEn:
      'The three pillars of observability—logs, metrics, and traces—provide different types of system insight. Logs record events, metrics provide quantitative data, and traces track requests across services.',
    lessonAr:
      'The three pillars of observability—logs, metrics, and traces—provide different types of system insight. Logs record events, metrics provide quantitative data, and traces track requests across services.',
    tasks: [
      {
        en: 'Explain the three pillars of observability',
        ar: 'Explain the three pillars of observability'
      },
      {
        en: 'Set up Prometheus metrics',
        ar: 'Set up Prometheus metrics'
      },
      {
        en: 'Configure logging to output structured JSON',
        ar: 'Configure logging to output structured JSON'
      },
      {
        en: 'Configure a trace using OpenTelemetry',
        ar: 'Configure a trace using OpenTelemetry'
      }
    ],
    exerciseEn: 'Set up basic observability with metrics, logs, and a trace.',
    exerciseAr: 'Set up basic observability with metrics, logs, and a trace.',
    deliverableEn: 'Observability setup with metrics, logs, and a trace.',
    deliverableAr: 'Observability setup with metrics, logs, and a trace.',
    resources: [
      {
        title: 'OpenTelemetry docs',
        url: 'https://opentelemetry.io/docs',
        kind: 'official'
      }
    ],
    challengeEn: 'Set up metrics, logs, and a trace for your application.',
    challengeAr: 'Set up metrics, logs, and a trace for your application.',
    prerequisites: [],
    criteriaEn: ['Can set up metrics', 'Can configure logging', 'Can configure a trace'],
    criteriaAr: ['Can set up metrics', 'Can configure logging', 'Can configure a trace']
  },
  {
    dayNumber: 294,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'GitOps Workflow',
    titleAr: 'Workflow GitOps',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Implement GitOps using Argo CD to declaratively manage Kubernetes applications, and describe the sync controller role.',
    objectiveAr: 'Implement GitOps using Argo CD to declaratively manage Kubernetes applications, and describe the sync controller role',
    lessonEn:
      'GitOps uses Git as the single source of truth for declarative infrastructure and applications. Argo CD continuously syncs the desired state from Git with the live cluster.',
    lessonAr:
      'GitOps uses Git as the single source of truth for declarative infrastructure and applications. Argo CD continuously syncs the desired state from Git with the live cluster.',
    tasks: [
      {
        en: 'Implement GitOps using Argo CD',
        ar: 'Implement GitOps using Argo CD'
      },
      {
        en: 'Describe the sync controller role',
        ar: 'Describe the sync controller role'
      },
      {
        en: 'Set up a sample application in Argo CD',
        ar: 'Set up a sample application in Argo CD'
      },
      {
        en: 'Observe the sync status and automatic reconciliation',
        ar: 'Observe the sync status and automatic reconciliation'
      }
    ],
    exerciseEn: 'Set up Argo CD and deploy a sample application.',
    exerciseAr: 'Set up Argo CD and deploy a sample application.',
    deliverableEn: 'An Argo CD-configured cluster with a deployed application.',
    deliverableAr: 'An Argo CD-configured cluster with a deployed application.',
    resources: [
      {
        title: 'Argo CD docs',
        url: 'https://argo-cd.readthedocs.io',
        kind: 'official'
      }
    ],
    challengeEn: 'Set up Argo CD and deploy an application.',
    challengeAr: 'Set up Argo CD and deploy an application.',
    prerequisites: [],
    criteriaEn: ['Can set up Argo CD', 'Can deploy an application'],
    criteriaAr: ['Can set up Argo CD', 'Can deploy an application']
  },
  {
    dayNumber: 295,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Infrastructure Security Scan',
    titleAr: 'Scan أمني infrastructure',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Run Trivy or Grype vulnerability scanner on Docker images and fix identified high-severity vulnerabilities, integrating the scanner into the CI pipeline.',
    objectiveAr: 'Run Trivy or Grype vulnerability scanner on Docker images and fix identified high-severity vulnerabilities, integrating the scanner into the CI pipeline',
    lessonEn:
      'Container vulnerability scanning identifies known security issues in Docker images. Integrating scanning into the CI pipeline ensures that high-severity vulnerabilities fail the build.',
    lessonAr:
      'Container vulnerability scanning identifies known security issues in Docker images. Integrating scanning into the CI pipeline ensures that high-severity vulnerabilities fail the build.',
    tasks: [
      {
        en: 'Run Trivy or Grype on a Docker image',
        ar: 'Run Trivy or Grype on a Docker image'
      },
      {
        en: 'Fix identified high-severity vulnerabilities',
        ar: 'Fix identified high-severity vulnerabilities'
      },
      {
        en: 'Integrate the scanner into the CI pipeline to fail on high-severity',
        ar: 'Integrate the scanner into the CI pipeline to fail on high-severity'
      },
      {
        en: 'Run a second scan to verify fixes',
        ar: 'Run a second scan to verify fixes'
      }
    ],
    exerciseEn: 'Run a vulnerability scanner and fix identified issues.',
    exerciseAr: 'Run a vulnerability scanner and fix identified issues.',
    deliverableEn: 'A clean scan with no high-severity vulnerabilities.',
    deliverableAr: 'A clean scan with no high-severity vulnerabilities.',
    resources: [
      {
        title: 'Trivy docs',
        url: 'https://github.com/aquasecurity/trivy',
        kind: 'official'
      }
    ],
    challengeEn: 'Scan an image and fix all high-severity vulnerabilities.',
    challengeAr: 'Scan an image and fix all high-severity vulnerabilities.',
    prerequisites: [],
    criteriaEn: ['Can run a vulnerability scanner', 'Can fix identified issues'],
    criteriaAr: ['Can run a vulnerability scanner', 'Can fix identified issues']
  },
  {
    dayNumber: 296,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Event-Driven Architecture',
    titleAr: 'Architecture Event-Driven',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Design an event-driven system using Kafka or RabbitMQ for asynchronous communication between services.',
    objectiveAr: 'Design an event-driven system using Kafka or RabbitMQ for asynchronous communication between services',
    lessonEn:
      'Event-driven architecture enables asynchronous communication between services using a message broker. Kafka and RabbitMQ are the leading platforms for event-driven systems.',
    lessonAr:
      'Event-driven architecture enables asynchronous communication between services using a message broker. Kafka and RabbitMQ are the leading platforms for event-driven systems.',
    tasks: [
      {
        en: 'Design an event-driven system using Kafka or RabbitMQ',
        ar: 'Design an event-driven system using Kafka or RabbitMQ'
      },
      {
        en: 'Produce and consume events using the message broker',
        ar: 'Produce and consume events using the message broker'
      },
      {
        en: 'Set up topic partitioning and consumer groups',
        ar: 'Set up topic partitioning and consumer groups'
      },
      {
        en: 'Test end-to-end event flow',
        ar: 'Test end-to-end event flow'
      }
    ],
    exerciseEn: 'Design and implement an event-driven system using Kafka.',
    exerciseAr: 'Design and implement an event-driven system using Kafka.',
    deliverableEn: 'An event-driven system design with Kafka producers and consumers.',
    deliverableAr: 'An event-driven system design with Kafka producers and consumers.',
    resources: [
      {
        title: 'Kafka docs',
        url: 'https://kafka.apache.org/documentation',
        kind: 'official'
      }
    ],
    challengeEn: 'Design an event-driven system using Kafka for inter-service communication.',
    challengeAr: 'Design an event-driven system using Kafka for inter-service communication.',
    prerequisites: [],
    criteriaEn: ['Can design an event-driven system', 'Can set up Kafka producers/consumers'],
    criteriaAr: ['Can design an event-driven system', 'Can set up Kafka producers/consumers']
  },
  {
    dayNumber: 297,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Pipeline as Code',
    titleAr: 'Pipeline as Code',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Version-control your CI/CD pipeline definition and apply infrastructure principles to pipeline code, using reusable workflows and inputs.',
    objectiveAr: 'Version-control your CI/CD pipeline definition and apply infrastructure principles to pipeline code, using reusable workflows and inputs',
    lessonEn:
      'Pipeline code should be treated as infrastructure. Version- controlling it, applying infrastructure principles, and using reusable workflows with inputs enables maintainable and scalable CI/CD.',
    lessonAr:
      'Pipeline code should be treated as infrastructure. Version- controlling it, applying infrastructure principles, and using reusable workflows with inputs enables maintainable and scalable CI/CD.',
    tasks: [
      {
        en: 'Version-control your CI/CD pipeline definition',
        ar: 'Version-control your CI/CD pipeline definition'
      },
      {
        en: 'Apply infrastructure principles to pipeline code',
        ar: 'Apply infrastructure principles to pipeline code'
      },
      {
        en: 'Use reusable workflows with inputs',
        ar: 'Use reusable workflows with inputs'
      },
      {
        en: 'Refactor a pipeline to use modular steps',
        ar: 'Refactor a pipeline to use modular steps'
      }
    ],
    exerciseEn: 'Refactor a pipeline to use reusable workflows.',
    exerciseAr: 'Refactor a pipeline to use reusable workflows.',
    deliverableEn: 'A version-controlled pipeline with reusable workflows.',
    deliverableAr: 'A version-controlled pipeline with reusable workflows.',
    resources: [
      {
        title: 'GitHub Actions reusable workflows',
        url: 'https://docs.github.com/en/actions/using-workflows/reusable-workflows',
        kind: 'official'
      }
    ],
    challengeEn: 'Refactor a pipeline to use reusable workflows and inputs.',
    challengeAr: 'Refactor a pipeline to use reusable workflows and inputs.',
    prerequisites: [],
    criteriaEn: ['Can version-control pipeline code', 'Can use reusable workflows'],
    criteriaAr: ['Can version-control pipeline code', 'Can use reusable workflows']
  },
  {
    dayNumber: 298,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Secret Rotation',
    titleAr: 'Rotation الأسرار',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Implement automated secret rotation for database credentials using AWS Secrets Manager and describe the rotation lifecycle.',
    objectiveAr: 'Implement automated secret rotation for database credentials using AWS Secrets Manager and describe the rotation lifecycle',
    lessonEn:
      'Secret rotation prevents credential compromise. AWS Secrets Manager automates rotation, and understanding the lifecycle ensures no service disruption during rotation.',
    lessonAr:
      'Secret rotation prevents credential compromise. AWS Secrets Manager automates rotation, and understanding the lifecycle ensures no service disruption during rotation.',
    tasks: [
      {
        en: 'Implement automated secret rotation using AWS Secrets Manager',
        ar: 'Implement automated secret rotation using AWS Secrets Manager'
      },
      {
        en: 'Describe the rotation lifecycle',
        ar: 'Describe the rotation lifecycle'
      },
      {
        en: 'Test rotation without service disruption',
        ar: 'Test rotation without service disruption'
      },
      {
        en: 'Document the rotation procedure',
        ar: 'Document the rotation procedure'
      }
    ],
    exerciseEn: 'Implement secret rotation for a database credential.',
    exerciseAr: 'Implement secret rotation for a database credential.',
    deliverableEn: 'A secret rotation procedure documented and tested.',
    deliverableAr: 'A secret rotation procedure documented and tested.',
    resources: [
      {
        title: 'AWS Secrets Manager docs',
        url: 'https://docs.aws.amazon.com/secretsmanager',
        kind: 'official'
      }
    ],
    challengeEn: 'Implement secret rotation and test without disruption.',
    challengeAr: 'Implement secret rotation and test without disruption.',
    prerequisites: [],
    criteriaEn: ['Can implement secret rotation', 'Can test without disruption'],
    criteriaAr: ['Can implement secret rotation', 'Can test without disruption']
  },
  {
    dayNumber: 299,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Blue-Green with Canary Hybrid',
    titleAr: 'Blue-Green with Canary Hybrid',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Combine blue-green and canary deployment strategies for sophisticated release strategies, shifting traffic incrementally while maintaining rollback capability.',
    objectiveAr: 'Combine blue-green and canary deployment strategies for sophisticated release strategies, shifting traffic incrementally while maintaining rollback capability',
    lessonEn:
      'Combining blue-green and canary strategies enables sophisticated release management. Traffic is incrementally shifted while maintaining the ability to roll back the entire green environment if needed.',
    lessonAr:
      'Combining blue-green and canary strategies enables sophisticated release management. Traffic is incrementally shifted while maintaining the ability to roll back the entire green environment if needed.',
    tasks: [
      {
        en: 'Combine blue-green and canary deployment strategies',
        ar: 'Combine blue-green and canary deployment strategies'
      },
      {
        en: 'Shift traffic incrementally while maintaining rollback capability',
        ar: 'Shift traffic incrementally while maintaining rollback capability'
      },
      {
        en: 'Define rollout criteria for automated promotion',
        ar: 'Define rollout criteria for automated promotion'
      },
      {
        en: 'Test the hybrid strategy in a staging environment',
        ar: 'Test the hybrid strategy in a staging environment'
      }
    ],
    exerciseEn: 'Implement a hybrid blue-green and canary deployment.',
    exerciseAr: 'Implement a hybrid blue-green and canary deployment.',
    deliverableEn: 'A hybrid deployment configuration.',
    deliverableAr: 'A hybrid deployment configuration.',
    resources: [
      {
        title: 'Kubernetes docs',
        url: 'https://kubernetes.io/docs',
        kind: 'official'
      }
    ],
    challengeEn: 'Implement a hybrid blue-green and canary deployment.',
    challengeAr: 'Implement a hybrid blue-green and canary deployment.',
    prerequisites: [],
    criteriaEn: ['Can combine deployment strategies', 'Can maintain rollback capability'],
    criteriaAr: ['Can combine deployment strategies', 'Can maintain rollback capability']
  },
  {
    dayNumber: 300,
    phaseSlug: 'devops-deployment',
    kind: 'lesson' as const,
    titleEn: 'Final Project: Full CI/CD Pipeline',
    titleAr: 'مشروع نهائي: Pipeline CI/CD كامل',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Build and deploy a complete CI/CD pipeline from code commit to production deployment with monitoring, rollback strategies, and cost optimization, and present the architecture and lessons learned from the 365-day learning journey.',
    objectiveAr: 'Build and deploy a complete CI/CD pipeline from code commit to production deployment with monitoring, rollback strategies, and cost optimization, and present the architecture and lessons learned from the 365-day learning journey.',
    lessonEn:
      'The final project integrates all DevOps practices learned throughout the phase. Building a complete pipeline from code commit to production with monitoring, rollback, and cost optimization demonstrates mastery of DevOps principles. Presenting the architecture and lessons learned showcases the 365-day learning journey.',
    lessonAr:
      'The final project integrates all DevOps practices learned throughout the phase. Building a complete pipeline from code commit to production with monitoring, rollback, and cost optimization demonstrates mastery of DevOps principles. Presenting the architecture and lessons learned showcases the 365-day learning journey.',
    tasks: [
      {
        en: 'Build and deploy a complete CI/CD pipeline',
        ar: 'Build and deploy a complete CI/CD pipeline'
      },
      {
        en: 'Configure monitoring, rollback strategies, and cost optimization',
        ar: 'Configure monitoring, rollback strategies, and cost optimization'
      },
      {
        en: 'Present the complete pipeline architecture and lessons learned',
        ar: 'Present the complete pipeline architecture and lessons learned'
      },
      {
        en: 'Document the 365-day learning journey insights',
        ar: 'Document the 365-day learning journey insights'
      }
    ],
    exerciseEn: 'Build and present the complete CI/CD pipeline.',
    exerciseAr: 'Build and present the complete CI/CD pipeline.',
    deliverableEn: 'A complete CI/CD pipeline from commit to production with documentation.',
    deliverableAr: 'A complete CI/CD pipeline from commit to production with documentation.',
    resources: [
      {
        title: 'AWS CodePipeline',
        url: 'https://aws.amazon.com/codepipeline',
        kind: 'official'
      }
    ],
    challengeEn: 'Build and present the complete CI/CD pipeline.',
    challengeAr: 'Build and present the complete CI/CD pipeline.',
    prerequisites: [],
    criteriaEn: ['Can build a complete pipeline', 'Can present architecture and lessons'],
    criteriaAr: ['Can build a complete pipeline', 'Can present architecture and lessons']
  }"""

            new_content = content[:insert_point] + new_days_text + content[close_bracket:]
            
            with open('src/features/curriculum/days/phase-10.ts', 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print("Successfully added 20 missing days (281-300) to phase-10.ts")
            old_count = len(re.findall(r'dayNumber: (\d+)', content))
            new_count = len(re.findall(r'dayNumber: (\d+)', new_content))
            print(f"Day count: {old_count} -> {new_count}")
PYEOF