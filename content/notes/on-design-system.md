---
title: "On Design System"
tags: ["general"]
date: "2020-08-24"
draft: false
path: "/notes/on-design-system"
---
I have been working on Design System at Morningstar since 2018. There is so much I have learned. I am a systems thinker because of this experience. Below are some of the lessons from my observations made and experiences gained while helping build a Design System.

The team has gone through 3 versions of the library since I joined. The team is meticulously process driven shaped by Nathan Curtis of Eight Shapes since the early days of the team. That culture of systems thinking is still present and the team continues to evolve as it overcomes challenges and solve problems.

> A highly disciplined team that is ruthless about process, rigor and attention to details. This ensures delivery with high quality. The process is transparent and honest. Team members are compassionate but firm; they challenge one another and others. But, don't become married to process. — Nathan Curtis

> Design systems provide a convenient, centralized, and evolving map of a brand’s known product territories with directional pointers to help you explore new regions. — Chris Messina

The Morningstar Design System (MDS) didn't start with Vue or React. MDS didn't even support javascript for almost 2 years. The components were supported using plain HTML & CSS. After three years, we rallied everyone to use Vue for their products so the system can scale and support product needs. The game of inches by going after the incremental changes paid off for our team and the organization. MDS is thriving today because the community is contributing and engineers are creating pull requests. The system is alive! 

## Problems

Before joining Morningstar Design System team, I had no clue what Design System did or meant. Twitter Bootstrap was the closest thing I knew. Developers who were not proficient in design would import a third party library such as Twitter Bootstrap to make their web application look “pretty.” These third party libraries covered the basics such as spacing, sizes, and colors. This allowed developers to focus on coding their applications instead of design.

**Problem statement 1:** Morningstar has over 60 products and they are all distributed across the organization, globally. Designers and developers faced many challenges of maintaining the design and code standard. Deadlines and roadmaps took over so the goal would be to make the components look as similar to other products as possible. There were central design specifications in form of PDFs but were not accessible to everyone. Or the specifications would be outdated. So the organizational products would have permutations of buttons, navigation, menus, etc. This disrupted branding and the user experience (UX) for Morningstar.

Every time a new product was launched, so were the components. They were being rebuilt over and over again. If you factor in the salary of developers and designers, and tie it into the time spent on building these same components, it would turn out to be hundreds and thousands of dollars. This would turn out to be very costly for the organization.

**Problem statement 2:** To solve the problem stated above, developers and designers teamed up part-time to build a central library. So anyone could consume this library (our version of Twitter Bootstrap) and would meet the design standard. It was not perfect, but it was progress in the right direction.

Consuming teams found many challenges including implementation of the components because of lack of documentation. Changes made were less frequent making the library stale. However, the library was available for anyone to fork it and expand it, which frequently happened.

This led to consuming teams building their own versions on top of this central library. 

- Product A built the central library.
- Product B built another set of library on top of the central library.
- Product C is now consuming Product B's library because Product B has the variation of button they need. So there were many extensions of the central library. This led to many non-standard components again.

The intention of Design System is not to stop people from doing. Design system exist to help people work faster, sacrifice control and embrace chaos when necessary.

## Morningstar design system (MDS)

There was no central team managing the library, contributing to the components, documenting the visual guidelines and technical guidelines, and educating developers and designers on the system.

Until Morningstar Design System (MDS) arrived. 

The team was responsible for version 1 release of the library with components that were largely consumed across all products. The library was also introduced with [public documentation site](https://designsystem.morningstar.com/). Below is the easy-to-consume definition by the MDS team.

> The Morningstar Design System is a collection of design & technical standards built into a central library to help teams quickly build high-quality, consistent experiences.

## Objectives of a design system

> Design never was just how it looks, but now it’s also how it sounds, how it speaks, and where it can go. — Chris Messina

The main objective of the Design System is to bring consistency across all products, improve the speed of development, and support for maintenance. In other words, the system should never get in the way of development.

1. **Central team:** The central team has a clear ownership and is accountable for its roadmap. A centralized team helps scale the system. The decisions made by the team should benefit the entire organization not just itself. The central team is not only responsible for building blocks, but also need to maintain what they build. This ensures trust and durability for other product teams to adopt the Design System.
2. **Maintenance & standardization:** Design System eliminates code redundancy which then helps save time and money. Imagine a developer building a button every time a new product is built. Building a component library standardizes the technology stack which allows for maintainable changes or modifications. Reusable components then standardizes the user experience (UX) and branding across all products.
3. **Product focused:** Design system should be treated as a product while treating consuming teams and implementors as clients. If clients are not treated well, there won't be any adoption, gradually leading to decline of the system. Design System is a living system serving other products. Design System consists of many *features—*UI components, design assets, design tokens and documentation. These are tangible outputs from the system which users value. Features are mostly driven by designers. But, developers consume these features while they do rapid development of applications. The following questions must be asked when architecting the system.
    - How do we release the new components?
    - How do we architect with little to no disruption?
    - What tools do developers currently use?
    - Which languages are products written in? For example, Vue or React.
4. **Stakeholders:** Design system consist of several stakeholders. The system should be built with the mindset of keeping everyone in mind. Treat all stakeholders as part of the system. An inclusive system brings transparency and build trust. The following are the group of people who keep the design system alive.
    - Developers use and build the system
    - Designers create visual language and components
    - Product managers are customers of the system
    - The leadership team are the buyers of the system
    - Contributors include both designers and developers
5. **Roadmap**: Since Design System is a product, it should also have a roadmap. There were two roadmaps for the year—for the first half and second half. MDS team operated remotely since its inception so to bring everyone together the team would gather during the on-site meeting in Chicago. During this week-long planning meeting, the team conducted several sessions on large themes and objectives. The team would have breakout sessions and small group discussions. During the end of the planning meeting, the team would share these objectives with key stakeholders and users. Sharing these objectives with everyone validated the team's priorities. Every design system should have a roadmap because it consists of features and value delivered to users.
6. **Collaboration**: To welcome collaboration, communication channels are accessible for transparency. There are separate channels for engineering and design. Temporary channels are created during the beta and alpha testing. JIRA board is accessible to everyone. The team hosts weekly showcases to share a sprint progress. The team would accept pull-requests (PRs) from other developers if the changes made benefited the larger audience. This sort of transparency is intentional which leads to adoption and contribution.
7. **Adoption & contribution:** Once adoption reaches the peak, community contribution takes off. Process needs to be defined because quality can be sacrificed. This helps scale the system but quality can be sacrificed. But if the adoption rate is slow, getting contributing back can be challenging. To embed contribution and collaboration requires continuous engagement with adopters and implementors. But it doesn't just stop at engaging. As a central team, prioritizing feedback and implementing the changes are as crucial to maintaining the trust.
8. **Building process:** Process must be established for feature delivery. MDS team broke down the process into 4 steps — Discovery, Design, Build, Doc and Publish. These are not sequential and not role specific. These steps overlapped all the time and could be carried out by anyone. 
9. **Library distribution:** There are a few ways to distribute UI Libraries. System can publish using NPM or Yarn with Semantic Versioning (SemVer) by versioning in form of X.Y.Z. See below to read more on SemVer. System can also publish the assets on CDN. At Morningstar, for version 3 of the library, MDS used monorepo to distribute pre-built components. Now consuming teams can pick and choose what they need from the library.

## Design system myths

- Design System is not a project or a side project. It is a product serving other products.
- Design System is not a style guide, pattern library or a component library. But all of these together make up the system.

> A style guide is an artefact of the design process. A design system is a living, funded product with a roadmap & backlog, serving an ecosystem. — Nathan Curtis

- Design System does not just serve the design organization. It serves engineering, product and key stakeholders.
- Design System does not care about agile methodology. If it is treated like a product which it should be then it needs agile for it to be efficient.
- Design System is just a documentation site or a component library. No. Maintenance and support are ongoing tasks which means constantly updating documentation and supporting adopters with new features and components.
- Design System does not need documentation. A system can be complex depending on the size of the organization. This requires thorough documentation for adopters to understand and consume the system.
- Design System stops at building. Promoting the system to potential adopters is part of primary tasks.
- Design System is defaulted to just web platform. It can be multi-platform.
- Design System limits product teams from building new components. Not true. For a component to be in the system, MDS uses a 2-team rule which means there should be a need for X by more than just one team.

## What makes a design system?

A design system consists of but not limited to:

- Reusable UI Components with many variations
- Sketch Library (or any other tool)
- Visual Language Assets: Logo, Typography, Colors, Layouts, Grids, Icons, Spaces & Sizes
- Documentation for Engineers & Designers
- Accessibility Guidelines
- Content Guidelines
- Release Notes and Change Logs
- Contribution Guidelines

Design system requires a change in mindset. The bullet points below are credited to Nathan Curtis.
- Component style libraries → Shared resources
- Standards → shared values
- Documentation → shared language
- Roadmap → shared destination
- Communication strategy → shared understanding
- Contribution → shared equity
- Governance → shared execution

## Favorite design system

While building components, I spent much of my time on what other systems were doing with their components. Below are a few that I frequently visited during the discovery phase.

- [Morningstar](https://designsystem.morningstar.com/)
- [Shopify](https://polaris.shopify.com/)
- [Atlassian](https://www.atlassian.design/)
- [Salesforce](https://www.lightningdesignsystem.com/)
- [IBM](https://www.ibm.com/design/language/)
- [Spotify](https://spotify.design/)
- [AirBnB](https://airbnb.design/)
- [Github](https://primer.style/)

## Further reading
<details>
    <summary><strong>References</strong></summary>
    <br>

- [Atomic Design](https://atomicdesign.bradfrost.com/) by Brad Frost
- [Component](https://eightshapes.com/components/) by Eight Shapes
- [Design Principle](https://marcabraham.com/2014/10/22/priya-prakash-explains-about-design-principles-at-mobile-academy/) by Priya Prakash
- [Multi-Platform](https://dbanks.design/blog/multi-platform/) by Danny Banks
- [Design System Support](https://eightshapes.com/articles/design-system-support.html) by Nathan Curtis
- [Measuring the Impact of Design System](https://medium.com/@didoo/measuring-the-impact-of-a-design-system-7f925af090f7) by Cristiano Rastelli
- [UI Case Study](https://blog.prototypr.io/ui-case-study-state-styles-of-card-component-with-accessibility-in-mind-2f30137c6108) by Nana Jeon
- [Design System Process](https://medium.com/eightshapes-llc/system-features-step-by-step-e69c90982630) by Nathan Curtis
- [Semantic Versioning (Semver)](http://semver.org/)
- [Vue Design System](https://github.com/viljamis/vue-design-system/wiki/terminology)
- [Design System Newsletter](http://news.design.systems/)
- [Design Systems Blog](https://www.designsystems.com/)
- [Awesome Design Systems](https://github.com/alexpate/awesome-design-systems)
</details>
<br />
