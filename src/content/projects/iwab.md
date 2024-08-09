---
slug: gitlab-code-review-bot
title: GitLab Code Review Bot
description: An AI-powered bot developed during my graduation internship at Endeavour to automate the process of reviewing merge requests in GitLab projects.
image: '@lib/assets/images/iwab/iwab.png'
problemStatement: Manual code reviews are time-consuming and can be inconsistent. There was a need for an automated solution to streamline the code review process and improve code quality.
solution: 'Developed GitLab Code Review Bot, an AI-powered bot that integrates with GitLab to automatically review merge requests, provide detailed feedback, and summarize code changes. This solution involved creating two separate projects: an LLM service running on FastAPI using LangChain, and the code review bot backend using Laravel.'
features:
  - Fetches pending GitLab todos and identifies relevant merge requests
  - Analyzes code changes using large language models
  - Generates detailed feedback on code quality, style, and potential issues
  - Posts discussions on merge requests with suggestions for improvement
  - Updates merge request descriptions with summaries of code changes
technologies:
  - PHP
  - Laravel
  - GitLab API
  - Python
  - FastAPI
  - Pydantic
  - LangChain
  - Ollama
  - Bedrock
  - OpenAI
  - Large Language Models (LLM)
  - Docker
galleryImages:
  - '@lib/assets/images/iwab/iwab-example.png'
---
