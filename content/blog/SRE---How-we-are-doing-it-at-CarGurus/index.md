---
title: SRE - How we are doing it at CarGurus
date: "2019-10-10T17:32:23.279Z"
author: abonassera
tags:
- SRE
- culture
---

A few years ago Google shared how they run their production environments when they published a book introducing [Site Reliability Engineering](https://landing.google.com/sre/books/) to the world. At the time I was managing a production operations team, and found the ideas and processes Google had put in place to manage their "world scale" resources inspiring. I felt that my team at the time was struggling under the operational toil of keeping our public facing high traffic web service running. We were staffed primarily to do the manual, repetitive toil and we not considered part of the "Engineering" organization. I felt as if my team were well payed grunts that looked at monitoring services on large TV screens in a NOC waiting for green things to become red things. The concept of treating operations as a software engineering problem via a formalized, consistent model and refusing to accept repetitive toil as a solution for problems felt like the "amazing future" to me.

Since its original publication, other books have been published, a community grew, and multiple Usenix yearly conferences world wide created where individuals and organizations come together to discuss SRE. 

As individuals such as myself started to try and bring SRE practices into their organizations and teams, it quickly became apparent that most of the places we work are not Google, or Facebook. Different "versions" of SRE have evolved, all trying to adhere to how Yaniv Aknin concisely distilled his definition of SRE at SREcon EMEA in Dublin, Ireland last week: **"Measurably Optimizing Reliability vs. Cost"**.

Here at CarGurus I am the Senior Manager of our SRE team.  We are a relatively new team, created early in 2019, and have the support of our Product teams and Senior Management to create a SRE practice from scratch. Given the size of our team (myself and two amazing engineers and [growing](https://boards.greenhouse.io/cargurus/jobs/1669824?gh_jid=1669824)) we decided to partner with product teams using a consulting/embedded model of engagement. As a group we take on carrying the pager for agreed upon services and coordinate and guide our Incident Response processes. Individually we focus our work on partnering with our assigned product teams to start the work of "Measurably Optimizing Reliability vs. Cost". Before starting the engagement, we draft a document outlying what we commit to, and what we expect our partners to provide for us. [Here](/Service-SRE-Proposal.pdf) is an sanitized version of our most recent engagement proposal.   

So far I feel that the work we are doing has been well appreciated by our peers. We plan on continuing to partner with our Product teams to help them define Service Level Objectives and leverage the tools and services our Observability team provides (p8s, honeycomb, graylog for example) to ensure we are both operating within these limit and maximizing their ability to do what they do, create and develop amazing products!


