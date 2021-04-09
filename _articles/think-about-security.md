---
lang: en
title: Think about security
description: Build your open source project with security in mind
class: best-practices
toc: 
  why-is-security-such-a-big-deal: "Why is security such a big deal"
  secure-your-software-supply-chain: "Secure your software supply chain"
  automate-repetitive-tasks: "Automate repetitive tasks"
  create-a-security-policy: "Create a security policy"
  responsibly-disclose-your-vulnerabilities: "Responsibly disclose your vulnerabilities"
order: 11
related:
  - best-practices
---

## Why is security such a big deal? 

Even small projects in open-source can have a big impact because of the way ideas move through the community. 

When it comes to software security, vulnerabilities can move through the community just as quickly as great ideas! If you've created a library, anyone that takes a dependency on your code has included it in their risk surface for the project they run on top of you. And if you're releasing an app or service, you could be putting user data at risk if you don't handle security vulnerabilities. Either way, it's important that every open-source project maintainer to think about how they will approach security up-front.

## Secure your software supply chain

Software component analysis is an important part of protecting your software supply chain. 

When open-source modules that you depend on have vulnerabilities, your users are at risk! Services like [GitHub](https://github.com/), [Snyk](https://snyk.io/), or [WhiteSource](https://www.whitesourcesoftware.com/) offer vulnerability scanning for free for open-source projects. These services will send you security alerts when your projects have a vulnerability and will include information on the impact of the vulnerability.

Docker containers are another major source of vulnerabilities. Any of the code that's part of a Docker container that you run could have vulnerabilities. The open-source project [Clair](https://github.com/coreos/clair) does scanning of Docker containers for known vulnerabilities. There are also many commercial security vendors which may perform more comprehensive scanning of Docker containers. 

## Automate repetitive tasks

Updating dependencies can be a frequent, and repetitive task.

Many services offer free dependency updates including [Dependabot](https://dependabot.com/) (which is built-into GitHub as a beta right now), and [GreenKeeper](https://greenkeeper.io/). These tools will automatically generate pull requests with the required version updates in response to security vulnerabilities, and dramatically improve the experience of updating dependencies. 

## Create a security policy

 A security policy helps your community by a) letting them know what you will support in terms of security issues, and b) letting them know how to work with you when they discover security issues.  

### Scope/Supported versions

Tell users about the parts of your project which are within scope of the security policy. For example, if you will not accept security bugs on test collateral, or samples, you should describe those limitations here. If your project has any official releases or versions, you should let users know which ones are being officially supported here. 

### Disclosure policy 

In the disclosure policy section, describe how and where users should disclose security vulnerabilities here. This is the right place for a link to the private inbox you might host, a link to your HackerOne, or a link to your own custom website. 

If you have any security requirements on the communications (eg, no attachments, signed with a PGP key, etc), you should also list them here. 

### Safe harbor 

Safe harbor provisions are important in terms of setting boundaries as to what constitutes ethical hacking, vs unlawful hacking on your project. These sections are important, so if your company or project has lawyers, now's the time to call them. A good security policy should encourage security researchers to report security issues responsibly, and a good safe harbor provision gives those researches confidence that they won't be prosecuted for doing so. The [GitHub Bug Bounty Program](https://github.blog/2019-02-19-five-years-of-the-github-bug-bounty-program/#legal-safe-harbor) provides more information about how GitHub uses a safe harbor provision to protect hackers provided that they abide by certain limitations. 

## Responsibly disclose your vulnerabilities

When you learn about a security vulnerability in your code, it's important that you fix and disclose that issue responsibly. 

In open-source projects, this can be challenging, since everything is open by default. 

GitHub offers a beta feature called [maintainer security advisories](https://help.github.com/en/articles/about-maintainer-security-advisories) which allow you to discuss, fix, and disclose vulnerabilities without disclosing them before they are ready. Some projects may also employ a shadow repository where they maintain a clone of their main repository and lock this down to only trusted maintainers. 

Finally, when you do publish a security fix, you should make sure to publish the vulnerability as a CVE. Mitre runs the [CVE request process](https://cve.mitre.org/cve/request_id.html). If your project is covered by a particular numbering authority, you should work with them to obtain a CVE number for your vulnerability. If you are not, then you may leverage Mitre as your numbering authority. 

## See also
* [HackerOne's security policy builder](https://hackerone.com/policy-builder/)
* [Securitytxt.org](https://securitytxt.org)
* [NTIA Coordinated Vulnerability Disclosure template](https://www.ntia.doc.gov/files/ntia/publications/ntia_vuln_disclosure_early_stage_template.pdf)


