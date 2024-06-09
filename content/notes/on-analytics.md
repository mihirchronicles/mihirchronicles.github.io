---
title: "On Analytics"
tags: ["general"]
date: "2024-05-20"
draft: false
path: "/notes/on-analytics"
---

Analytics is about tracking the metrics that are critical to your business. It matters if your business cares about where the money is going from or where the money is going to in order to support the business model.

All organizations want to be data driven. Everyone has “data“ but they get the second part wrong—“driven.“ Measuring is the job that holds the organization accountable, but is the hardest job. You are forced to face inconvenient truths, should not serve personal agenda and requires changing paths in the light of new insights. Another part of “driven“ it requires an investment in data infrastructure. If an organization does not have the right tools or the right process to cleanse, structure and surface data, measuring anything will be an obstacle.

The flip side of data is analysis paralysis.

Data is powerful but it is addictive causing analysis paralysis. A/B testing colors at Google generate them billions, but that doesn't mean you run A/B testing before deciding what pants to put on before you go to work.

Critics argue too much data driven isn't healthy. To them being data informed is enough. They are right because optimizing one part of your business can harm another part of business without taking a step back to look at the bigger picture. But that does not warrant to skip the hard work of data analytics.

I know this because I shipped a feature to solve one pain-point to cause increase in call volumes causing frustration for my operation team. I oversold on data and dropped the ball on understanding the full picture.

Data-driven and optimization should co-exist, but too much optimization without human judgement can cause problems.

In mathematics, a local maximum is the largest value of a function within given parameters. That does not mean it is the largest possible value, the largest in a particular range. Consider a lake on a mountainside. The water isn't at its lowest level. It would be sea level, but it is at the lowest possible level in the area.

Optimization is all about finding the lowest or highest values, but within constrained range. If you tell a machine to build a bike with 3 tires, with the most stable layout, it will come up with a tricycle-like configuration. It is the most optimal solution. However, there is another option. Four wheels would be better to provide the most stability. Math is good at optimizing a known system. Human judgement is good at finding a new one. 

Optimizing without a soul misses the bigger picture. Quantitative data is great for testing hypotheses, but it is lousy to generate new ones unless you combine with human judgement.

It is all about developing healthy skepticism and curiosity to get closer to the truth. You need to be opportunistic and data analytics will help you get faster to making your vision into a reality.

> There are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns — the ones we don’t know we don’t know. — Donald Rumsfeld, Former US Secretary of Defense

And last thing, both insights and context are equally important.

> Insight tells you what's happening. Context tells you why it's happening. Insight come from customers and competitors, from markets and industries, but most important, from our data.  Context comes from knowledge and experience. It applies perspective to the data. Combining insights and context gives you the full-screen picture of what is happening, why it's happening and what needs to be done. — Transformed by Marty Cagan

## Organization maturity model

AMM—analytics maturity model is a sequence of steps or stages that represent the organization's evolution in leveraging data to inform business decisions. The maturity model gives context to where you are in the process and the stages ahead. There are 6 stages of the analytics maturity model and the beginning two stages are part of a starting point foundation. The stages of the analytics maturity model should build on each other, not replace each other. 

**Backward looking stages**—focusing on what the historical data shows already happened. 

1. _Foundational_
    - Companies that are in this stage are transitioning from no analytics to prioritize and understand what data they have and where it resides.
    - Companies rely on this information, combined with benchmark data to make business decisions about how they might need to course correct or continue in a positive direction.  
    - Organizations start to ask questions such as:
        - What information do I need to make better business decisions?
        - How can I obtain that information?
2.  _Descriptive_
    - Data and reports in this stage answer the question “What happened?”. 
        - How many quotes did we create?
        - How many of those quotes converted to sales?
        - How much revenue came from those sales?
3.  _Diagnostic_
    - This stage answers the question “Why did it happen?” to better understand the reason something happened the way it did.
        - How many quotes did we create compared to this time last year?
        - How did we convert quotes to sales by region?
        - Which regions had better or worse conversion rates?
        - How have our prices changed this year compared to last year?  
    - These diagnostic questions build upon the descriptive questions. They go one level deeper, focusing not on the outcome, but instead on understanding if that outcome should have been expected, or if not, why not. This stage looks for the factors that can explain why a certain outcome happened.

**Forward-looking stages**—focusing on predictive business mindset transitioning from reactive approach to proactive approach. 

4.  _Predictive_ 
    - Questions in this stage are proactive. They focus on what is likely to happen next. Based on the information companies gather in stages two and three, here are some examples questions that can start to emerge: 
        - What is our expected conversion rate next month by region?
        - Are we likely to meet our revenue budget this year based on early performance? 
    - At this stage, the analytics maturity model transitions to a forward-looking perspective, moving from a reactive approach to a proactive and predictive business mindset. 
    - This mindset enables stakeholders to have an idea of where the business is headed, based on the data they do have.
5.  _Prescriptive_
    - Building on the predictive questions, this stage focuses on what decisions can be made to influence the future – how can we make something happen? The goal is to find the best course of action for a given situation. 
        - How would having more sales reps affect our conversion rate?
        - How would adjusting our prices affect the expected revenue next month?
    - Moving to this stage in the model helps business leaders start considering what changes need to be made to move the business in the right direction by leveraging foundational analytics, simulations, or even artificial intelligence for decision support and perspective. 
    - Variable-driven, what-if style analysis can start to guide stakeholder understanding of where the company is to instead what they can do to affect the future and make more confident decisions.
6.  _Cognitive_
    - In this stage, companies begin utilizing machine learning and natural language processing to simulate human thought. 
    - The goal is to learn from data in real-time and with analytical agility at significant data scale. 
    - With a variety of approaches such as real-time data mining, pattern recognition, and natural language processing as just a few examples, organizations can identify unexpected, important, and influential patterns in large quantities of data across disparate sources. 
    - Companies that benefit most from this stage have discipline and a strong foundation in the previous 5 stages and have precise processes in place to gather and store data, often in a central data lake or warehouse, as well as strong cross-platform data analytics adoption.

## Flavors of analytics

There are 3 flavors of analytics—user analytics, customer analytics and business analytics. Having this context is critical to understand how metrics interact between these various stages.

1. User analytics: 
	- Aggregated and segmented data from all your apps
	- Funnel conversion based on cyclical periods and marketing campaigns
	- Google or Adobe are great at showcasing these analytics
2. Customer analytics:
	- Product usage across enterprise, active customers, customer support calls, onboarding, average revenue per customer 
	- CRM tools such as Salesforce can be leveraged including financial systems such as Oracle or any other system in place
3. Business analytics:
	- Most analytics are snapshots in time, such as what happened yesterday
	- This stage shows product usage across time such as lifetime value of a customer (LTV), customer churn rate or customer acquisition costs across all sources
	- This stage is a combination of all several data sources from—data warehouse, user analytics, customer analysis, CRM, and financial data
	- Data scientists spend majority of their time here
	- Your organization's key to success lie in your data warehouse

## Metrics quality

Intelligent products and solutions that build emotional connections with customers by solving their deepest needs depends on quality of your data. Data is not static. It is constantly changing. The virtuous cycle of maintaining quality data is at the heart of data driven organizations. Below are the core elements of building dynamic and intelligent analytics platform.

- Making data cleansing, quality metadata, and data standardization systematic via automation 
- Ensuring customer data is safe and private at scale
- Systematically identifying bias in the data through model explainability and error analysis tools
- Monitoring data and concept drift, creating feedback loops, and retraining models
- Augmenting and enriching data via programmatic labeling
- Real-time, structured, data that is standardized, available and applied to high-impact customer use cases
- Building foundation model architecture and frameworks, enabling teams to solve for customer problems

There is no substitute for engaging with your customer but choosing quality metrics are critical. Data quality measurement stands on 3 questions:
1. Is it easy to analyze?
2. Is it easy to maintain?
3. Is there bad data and do you know how to deal with it?

It depends on using *good* and *right* metric while avoiding *vanity* metric.

### Good metrics
 
1. *A good metric is comparative.* Being able to compare a metric to other time, groups of users, or industry metrics helps you understand where things are moving. “Increased conversion from last week” is more meaningful than “2% conversion.”
2. *A good metric is understandable.* If people can't remember it and discuss it, it's much harder to be a data driven culture. 
3. *A good metric is a ratio or a rate.* These are common within accounting and finance world to understand the health of an organization at a glance. Ratios are easier to act on. They are inherently comparative. And, they are good for comparing factors that are opposing to each other for which there is an inherent tension.
4. *A good metric changes the way you behave.* This is critical for any metric because it pushes you to do things differently based on changes in metrics. If you want to change behavior, your metric must be tied to the behavioral change you want.
5. *A good metric should be paired with others to get a full picture.* For example, _conversion rate_ (percentage of people who buy something) should be tied to _time-to-purchase_ (how long it takes for someone to buy something) to tell you about cash flow. Similarly, _viral coefficient_ (the number of people a user successfully invites to your service) and _viral cycle time_ (how long it takes them to invite others) drive your adoption rate.

### Right metrics

You need to keep five things in mind when picking metrics to measure.

1. *Qualitative versus quantitative metrics.* Qualitative metrics are unstructured, anecdotal, revealing, and hard to aggregate; quantitative metrics involve numbers and statistics, and provide hard numbers but less insight. Quantitative data is easy to understand, you can aggregate it, extrapolate it, and put in spreadsheet. But when you ask people about their opinions on the problems they are facing, that is quantitative data. It is messy, hard to quantify, and is emotional. It requires asking thoughtful question. Unprepared interviews yield misleading or meaningless results.
2. *Vanity versus actionable metrics.* Vanity metrics might make you feel good, but they don't change how you act. Actionable metrics change your behavior by helping you pick a course of action. Consider “total sign-ups”. That is a vanity metric. Actionable metric is “percent of users who are active.” Views, visits, unique visitors, followers, time on site, emails collected, and number of downloads are all vanity metrics. None of these lead to real value.
3. *Exploratory versus reporting metrics.* Exploratory metrics are speculative and try to find unknown insights to give you the upper hand, while reporting metrics keep you abreast of normal, managerial, day-to-day operations. The “unknown unknowns” coined by Donald Rumsfeld, former US Secretary of Defense are where the magic lives. Rumsfeld's quadrant is a great framework to conduct discovery:
	- Things we know, we know. Are *facts* that may be wrong and should be checked against data.
	- Things we know, we don't know. Are *questions* we can answer by reporting, which we should baseline and automate.
	- Things we don't know, we know. Are *intuition* which we should quantify and teach to improve effectiveness and efficiency.
	- Things we don't know, we don't know. Are *exploration*, which is where unfair advantage and interesting epiphanies live.
4. *Leading vs lagging metrics.* Leading metrics give you a predictive understanding of the future; lagging metrics explain the past. Leading metrics are better because you still have time to act on them—the horse hasn't left the barn yet. Leading metric sometimes called a leading indicator. For example, a number of prospects in your sales funnel give you a sense of how many customers you'll acquire in the future. On the other hand, lagging metric such as churn gives you an indication that there's a problem. By the time you find lagging metrics and try to figure out next steps, it might be too late because they measure after the fact. Indicators are everywhere. It requires proactiveness. You need to be able to do cohort analysis and compare groups over time.
5. *Correlated versus casual metrics.*  If two metrics change together, they are correlated, but if one metric causes another metric to change, they are causal. If you find a causal relationship between something you want (revenue) and something you can control (marketing/which ad you show), then change the future. For example, ice cream and drowning rates both happen because of summer weather, but looking at a simple correlation without demanding causality leads to bad decisions. Correlations can help you predict but finding the cause of something means you can change it. You prove causality by finding a correlation, then running an experiment in which you control the other variables and measure the difference. This is hard to do because no two users are identical; it's often impossible to subject a statistically significant number of people to a properly controlled experiment in the real world. Correlation is good. Causality is great.

### Vanity metrics

Vanity metrics are feel good metrics but don’t help us do better work or make better decisions. It shines light brighter on optics over transparency. Things don't add up when combined with other metrics. 

Rigor is usually missing from vanity metrics. For example, emphasizing on “unique visitors“ over “number of unique visitors who signed-up for the newsletter.” Or even taking one step further, “number unique visitors who signed-up for the newsletter and purchased an item from the store after marketing campaign x.”

Why vanity metrics fail?

- Vanity metrics lack context. For example, increase in unique visitors but who drove it? And does it matter for the business model? How many unique visitors came back again?
- Vanity metrics do not have a clear intent. For example, did unique visitors come back again because they found value in your offering or they came back to unsubscribe from your email newsletter?
- Vanity metrics do not guide action and learning. If a team celebrates a metric when it goes higher, but do not shift their strategy or tactics when it drops, you are  looking at a vanity metric.


## Common pitfalls

Monica Rogati who is a Data Scientist at LinkedIn have the following advice on how to avoid data pitfalls.

1. *Assuming data is clean.* Before you can analyze, you need to ensure data is clean and accounts for all business logic. For example, empty fields such as "Null" account for 30% of the values, you are miscalculating. Or if you are granting dollars to charities. But if a donor has multiple accounts, transferring funds from one account to another is considered granting which is not true because charities have not received anything.
2. *Not normalizing.* Let's say you are looking for popular destinations to take vacation with your family. Is it popular based on airport business or in fact people travel a lot there for a tourist attraction.
3. *Excluding outliers.* If a small selection of people, say 50 users out of thousands are using your product or bots crawling on your site for content, not ignoring them is a mistake.
4. *Including outliers.* While you might want to ignore 50 users, you might also want to include them to understand why they are heavy users of your product. It might be a feature that they understood, but the average users don't. It could be a marketing campaign opportunity. 
5. *Ignoring seasonality.* Of course, "intern" is the fastest growing job in the month of June. But all things equal, is it? Failure to account for time can lead to misunderstanding of a pattern and making poor decisions.
6. *Ignoring size when reporting growth.* Context is key. Your friends and family signing-up for product is not a sign of growth, but a sign of support because they want to show support. 
7. *Data vomit.* A dashboard isn't much use if you don't know where to look or is not friendly enough.
8. *Metrics that cry wolf.* To be responsive, you need alerts so you can be proactive about fixing it quickly. But if your thresholds are too sensitive, they get louder, and you'll start to ignore them.
9. *The Not Collected Here syndrome.* Mashing up your data with other data sources can lead to valuable insights. For example, do your best customers come from zip codes with a high concentration of sushi restaurants? This might give you growth ideas about what experiments to run next or even influence growth strategy. 
10. *Focusing on noise.* We are hardwired to see patterns where there are none. For example, seeing a joker shaped cloud. It helps to set aside vanity metrics, step back and look at the bigger picture.

## Testing methods

Testing is the heart of making progress and moving the business model in the right direction. A few concepts to remember while testing.

### A/B testing

A/B testing involves showing different versions of a webpage to different visitors and measuring which version performs better. Randomization is key to ensuring that the results of your A/B test are accurate and unbiased.

Controlled experiments like A/B tests or randomized field experiments are the de facto standard to make data-driven decisions when implementing changes and observing customer responses.

Studies in which different groups of test subjects are given different experiences at the same time is referred as cross-sectional studies.

This is in contrast with cohort analysis as the testing is done over the lifespan of a customer from the same group. When we are comparing one attribute of a subject's experience (for example link color), and assuming everything else is equal we are doing A/B testing. 

A/B testing does not come without criticism. For A/B test to be successful you need a large amount of data which is why Google is able to experiment a lot. Or to test all attributes, it might be time-consuming. 

To avoid the latter, you can conduct multivariate analysis. This relies on statistical analysis of the results to see which of many factors correlates strongly with an improvement in a key metric.

Bayesian inference recently gained a lot of popularity. Bayesian inference leverages conditional probability to help us understand how data impacts our beliefs. For example, let’s say we start with a prior belief that the sky is red. After looking at data, we would soon realize that this prior belief is wrong. So, we perform Bayesian updating to improve our incorrect model about the color of the sky, ending up with a more accurate posterior belief. While traditional A/B testing methods are computationally expensive, Bayesian inference are computed offline and on a smaller size, which reduces performance requirements. The main challenge is choosing effective distributions to support inference. One key component of your belief is the structure of our data. Then structure is described through distributions. In the sky example, assuming that there are categories of color (red, white, and blue), the distribution would be _multinomial_. If you are looking at a set of numbers, the distribution might be _normal_. If the data were true/false values, it would be _binomial_. These distributions are called likelihood distributions because they show the likelihood that your data will take on a certain value.

Ask the following questions:

- Which variant drives better results? 
- How much better are those results?
- Are you confident in your conclusion?
- What if you want to test more than two variants?
- What sample size is needed for a Bayesian A/B test?
- Can a test be terminated early if results look clear?

> Defining guardrail metrics for experiments is important for identifying what the organization is not willing to change. — Ron Kohavi

### Cohort retention analysis

Retention measures the ability of your product to keep users active over time. Retention for consumer businesses would have a different meaning than for enterprise, B2B, or B2C companies.

Cohort retention analysis allows for comparison of a same group over time. For example, user who signed up during alpha release (small group) will have a different experience than the user who signed up during beta release (larger group). 

Each group of users is a cohort—participants in an experiment across their lifecycle. You can compare cohort with one another to see if key metrics are getting better. Overtime you would be releasing key features satisfying your latest cohort from initial cohort. For example, cohort analysis might show you the revenue generated from January is a lot higher than the month in December. Overtime, the revenue is declining from January cohort. But as you launch more feature, the same cohort decides to stick making the drop-off better.

Be specific when defining what “active” means. Don't be too broad or too narrow. Most companies use logins or app opens as main events for the “active users” definition. But at Instacart, that doesn't mean anything unless it is tied to completing an order or at Uber taking a ride. Active needs to be defined. 

Differentiate users from customers.

> A customer is defined as the person/group who is paying you. A user is a person using the product. In subscription products, oftentimes there are multiple users associated with a single customer. Or people are users before they are customers. You need to separate the definition and language between these two things for teams to clearly act on them. — Brian Balfour

 Calculate retention by setting your timeline. As a team, you have to agree on what retention reporting type you should adopt. 
 
 The first is X-day (N-day or bounded) tells you the percentage of users who come back on a specific day. For example, for all users who join, what percentage return to your app on exactly day 14.
 
 The second is unbounded retention. Unbounded retention tells you how many of your users got back on a specific day or later. For example, for all new users who joined on a specific day, what percentage of users are using the product after 14 days (and not necessarily on day 14). If your goal is to match retention with your user churn, this is the way to go. The unbounded retention value for month 6 gives you the percentage of users who returned after month 6.
 
 The best practice for reporting retention is cohorts. You can segment retention reporting for active users, churned users, inactive users, and reactivated users. This will help you locate your power users and understand what makes them stick. You should always cohort your users into different behavioral segments if applicable.

### Segmentation

A segment is a group that shares common characteristics. For example, users who browse your application on Firefox. Then you can compare one segment to another. For example, users who browse your application on Safari. Segmentation is wide open to industry, marketing or product features.

## Product metric cheat sheet

Product metrics can be split into five categories:

1. Acquisition: like the number of new signups and qualified leads, measure when someone first starts using your product or service. They’re great for understanding what marketing channels are working best for your company.
2. Activation: like activation rate and time to activate, show you how well you are moving users from acquisition through that critical “aha” moment where they discover why your product is valuable to them and, in turn, provide value to your business.
3. Engagement: like monthly active users and feature usage, measure how (and how often) users interact with your product. Those interactions might include sharing a song or editing their profile. Users who engage with your product are considered active users. Increasing the number of daily, weekly, and monthly active users is important for company growth—but only if you measure them right.
4. Retention: like retention rate, free-to-paid conversions, and churn rate, gauge how many of your users return to your product over a certain period of time. These are critical metrics for your company’s growth. It doesn’t matter how fast you fill the top of your funnel if users are leaking out the bottom just as fast.
5. Monetization: like net revenue retention, monthly recurring revenue, and average revenue per user, capture how well your business is turning engagement into revenue.

| Category | Metric |
| -------------|:-------------:|
| _Acquisition_ | Number of new signups and/or qualified leads |
| _Acquisition_ | Customer acquisition cost (CAC) |
| _Activation_ | Activation rate |
| _Activation_ | Time to activate |
| _Activation_ | Free-to-paid conversions |
| _Engagement_ | Monthly, weekly, and/or daily active users/customers/paid-users (MAU, WAU, DAU/DAC/DAPU) |
| _Engagement_ | Stickiness (DAU/MAU) |
| _Engagement_ | Feature usage |
| _Retention_ | Retention rate |
| _Retention_ | Churn rate |
| _Retention_ | Customer lifetime value (CLV) |
| _Monetization_ | Net revenue retention (NRR) |
| _Monetization_ | Monthly recurring revenue (MRR) |
| _Monetization_ | Average revenue per user (ARPU) |
| _North Star_ | Only metric that truly matters (OMTTM) |

## Actionable tips for a product manager

- Retrieve: First, you need to learn how to get data. Learn your business intelligence tools. SQL is most common in work places. Divide data gathering into three buckets:
    - Business data: revenue, market share
    - Product data: product portfolio, features
    - Customers data: target group, reviews
- Analyze: Analytical thinking is to crunch numbers understand the why and execute at lightning speed. This is grunt work and requires deep thinking. To do so you need the following basic understanding.
    - Patterns: See the norm, what sticks out, what needs a second look. Get a lay of the land, so you can start developing a point of view. To solve the puzzle, ask yourself the following questions:
        - What is “normal” around here? 
        - What sticks out?
        - Why is it sticking out?
        - How much does it stick out vs everything else?
    - Nuances: It is powerful to see nuances when other people just see a binary yes or no. You want to be able to say— “This works for x situations, but not for y situations.”
    - Absolute numbers & percentages: If you only look at absolute numbers, big numbers will seem good and small numbers will seem bad. If you look at percentages, you’ll see the relationship between the parts and the whole.
    - Variance: Variance is about change. Change from the baseline & changes over time. 
        - How much did this change month over month? 
        - How much did it change this month vs this month last year? 
        - Was the variance in line with industry growth—or did it outpace or lag comparatively?
    - Expected vs actual: “Wow, we drove 19% growth!” might seem like good news, unless you forecasted 30% growth. This is where looking at expected vs actual number is useful. If you compare the two, you can better understand how good performance really is.
    - Percent contribution to whole: 
        - Money: “This accounts for 70% of total $.”
        - Volume: “This accounts for 17% of units.”
        - Top hits: “These 10 items drove 80% of new visitors.”
    - Peaks: Identify peaks and valleys, i.e., the highest or lowest something has ever been. This helps you see the range, which helps you get grounded. If you have new assets or levers to pull, you can say, “We'll beat the highest we've done because x.”
    - Check in on margins: revenues don't alone matter much without cash flows. 
    - Verify your biases by analyzing your data processing mechanics to ensure you are not building a data set to validate your own assumptions.
    - Look for clues by asking:
        - Why is this happening?
        - What is the impact?
        - What should we do about it (if anything)?

## Further reading
<details>
    <summary><strong>References</strong></summary>
    <br>

**Books**
- [Lean Analytics: Use Data to Build a Better Startup Faster by Alistair Croll & Benjamin Yoskovitz](https://www.amazon.com/Lean-Analytics-Better-Startup-Faster-ebook/dp/B00AG66LTM)
- [Good Books for All Things Data](https://multithreaded.stitchfix.com/blog/2016/06/09/ds-books/)
- [The Customer-Base Audit: The First Step on the Journey to Customer Centricity](https://www.amazon.com/dp/161363160X?trk=public_post_comment-text)

**Links**
- [Data Analysis Journal Substack](https://dataanalysis.substack.com)
- [The Role of Analytics by SVPG](https://www.svpg.com/the-role-of-analytics/)
- [Flavors of Analytics by SVPG](https://www.svpg.com/flavors-of-analytics/)
- [Leveraging Data Science by SVPG](https://www.svpg.com/leveraging-data-science/)
- [What Are Vanity Metrics and How to Stop Using Them by John Cutler](https://amplitude.com/blog/vanity-metrics?trk=feed_main-feed-card_comment-text)
- [Becoming Data Driven in Business: A Series by Commoncog](https://commoncog.com/becoming-data-driven-in-business/)
- [Emerging Architectures for Modern Data Infrastructure by A16Z](https://a16z.com/emerging-architectures-for-modern-data-infrastructure/)
- [Bayesian A/B Testing for Business Decisions Published Paper](https://arxiv.org/pdf/2003.02769)
- [Guidelines for running effective Bayesian A/B tests](https://www.dynamicyield.com/lesson/running-effective-bayesian-ab-tests/)
- [The Dangerous Seduction of the Lifetime Value (LTV) Formula by Bill Gurley](https://abovethecrowd.com/2012/09/04/the-dangerous-seduction-of-the-lifetime-value-ltv-formula/)
- [Customer Lifetime Value Uncovered Insights A Discussion with  Dan McCarthy](https://www.ivsc.org/pdfviewer/ivsc-professional-insights-customer-lifetime-value-uncovered/)
- [Data visualization and data science thread by Owen Comstock](https://x.com/comstockery/status/1432139055752523778)
- [Quantifying the potential value of data by Santa Fe Institute](https://www.santafe.edu/news-center/news/quantifying-the-potential-value-of-data)
- [Common Mistakes In Defining Metrics by Brian Balfour](https://brianbalfour.com/quick-takes/common-mistakes-defining-metrics)
- [When To Use Client-Side Or Server-Side Events For Analytics](https://dataanalysis.substack.com/p/when-to-use-client-side-or-server)
- [How to measure cohort retention by Lenny's Newsletter](https://www.lennysnewsletter.com/p/measuring-cohort-retention)
- [Everything You Need to Know About Retention (Rates) from ChartMogul](https://chartmogul.com/blog/retention-rate/)
- [Lecture 6: Growth from Alex Schultz, VP of Analytics, Meta ](https://genius.com/Alex-schultz-lecture-6-growth-annotated)
- [3 Things Your User Retention Rate Is Hiding from Mode](https://mode.com/blog/what-user-retention-hides)
- [Cohort Analysis That Helps You Look Ahead from Mode](https://mode.com/blog/cohort-analysis-helps-look-ahead)
- [Cohort Revenue & Retention Analysis](https://www.pymc-labs.com/blog-posts/cohort-revenue-retention/?trk=public_post_comment-text)
- [Stop optimizing for a CAC:LTV ratio of 1:3](https://elenaverna.substack.com/p/stop-optimizing-for-a-cacltv-ratio)
- [Customer Cohort Analysis and CLV by Daniel McCarthy Podcast Episode](https://thetaclv.com/resource/customer-cohort-analysis-and-clv/)
- [C3: The emerging “gold standard” of customer disclosures that investors should demand](https://thetaclv.com/resource/c3/?trk=public_post_comment-text)
- [My Favorite Analyses: The Customer Cohort Chart (C3)](https://www.artscience.ai/blog/my-favorite-analyses-the-customer-cohort-chart-c3?trk=public_post_comment-text)
- [How to increase your retention](https://www.lennysnewsletter.com/p/how-to-increase-your-retention-issue)
- [What is good retention](https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29)
- [User Engagement and Activity Histogram Analysis from Olga](https://dataanalysis.substack.com/p/user-engagement-and-activity-histogram)
- [Day of the Week Analysis in SQL from Olga](https://dataanalysis.substack.com/p/day-of-the-week-analysis-in-sql-issue)
- [Excel template for cohort analyses in SaaS from Christoph Janz](https://www.lennysnewsletter.com/p/measuring-cohort-retention)
- [How Cohort Analysis Improves Retention & Reduces Churn from Heap](https://www.heap.io/topics/how-cohort-analysis-improves-retention-reduces-churn)
- [Statistical Process Control: A Practitioner’s Guide](https://two-wrongs.com/statistical-process-control-a-practitioners-guide)

**People**
- [Ron Kohavi](https://docs.google.com/document/d/1Lp8hjXWWn9n60QzeI2kuoIxwpWYkaZii/edit)
- [Daniel McCarthy](https://www.linkedin.com/in/danielmcc/)

**Companies**
- AirBnB
	- [Experiments at Airbnb](https://medium.com/airbnb-engineering/experiments-at-airbnb-e2db3abf39e7#.miqyczkzb)
	- [Experiment Reporting Framework by AirBnB](https://medium.com/airbnb-engineering/experiment-reporting-framework-4e3fcd29e6c0#.cbl72jip2)
	- [Scaling Airbnb’s Experimentation Platform](https://medium.com/airbnb-engineering/https-medium-com-jonathan-parks-scaling-erf-23fd17c91166)
- Zappos
	- [Analyzing Data at the Extremes](https://outlierspath.com/2023/09/17/analyzing-data-at-the-extremes/)
- Gojeck
	- [Why Most Analytics Efforts Fail by Crystal Widjaja](https://www.reforge.com/blog/why-most-analytics-efforts-fail)
- Duolingo
	- [https://blog.duolingo.com/growth-model-duolingo/](https://blog.duolingo.com/growth-model-duolingo/)
	- [The secret to Duolingo’s exponential growth by Lenny's Newsletter](https://www.lennysnewsletter.com/p/the-secret-to-duolingos-growth)
	- [How Duolingo reignited user growth by Lenny's Newsletter](https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth)

**Tools**
- [Evan’s Awesome A/B Tools](https://www.evanmiller.org/ab-testing/)
- [Evan’s Awesome A/B Tools by Chi-Squared Test](https://www.evanmiller.org/ab-testing/chi-squared.html)
- [Jakub Linowski 's Good UI](https://goodui.org)
- [Deborah O'Malley's Guess The Test](https://guessthetest.com)
- [Propel Docs](https://www.propeldata.com/docs/)
- [Dashboard Design Patterns](https://dashboarddesignpatterns.github.io)
- [Statista Facts & Research](https://www.statista.com/)
- [Our World In Data](https://ourworldindata.org)
- [Mixpanel](https://mixpanel.com)
- [Amplitude](https://help.amplitude.com/hc/en-us/articles/360050153151-Build-a-retention-analysis)

</details>
<br />
