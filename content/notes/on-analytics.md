---
title: "On Analytics"
tags: ["general"]
date: "2024-05-02"
draft: false
path: "/notes/on-analytics"
---

_**UNDER CONSTRUCTION**_

Analytics is about tracking the metrics that are critical to your business. It matters if your business cares about where the money is going from or where the money is going to in order to support the business model.

All organizations want to be data driven. Everyone has “data“ but they get the second part wrong—“driven.“ Measuring is the job that holds the organization accountable, but is the hardest job. You are forced to face inconvenient truths, should not serve personal agenda and requires changing paths in the light of new insights. 

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

## Underlying principles of metrics

There is no substitute for engaging with your customer but choosing the good and right metrics pays. 

Following are _good_ metrics:
 
1. *A good metric is comparative.* Being able to compare a metric to other time, groups of users, or industry metrics helps you understand where things are moving. “Increased conversion from last week” is more meaningful than “2% conversion.”
2. *A good metric is understandable.* If people can't remember it and discuss it, it's much harder to be a data driven culture. 
3. *A good metric is a ratio or a rate.* These are common within accounting and finance world to understand the health of an organization at a glance. Ratios are easier to act on. They are inherently comparative. And, they are good for comparing factors that are opposing to each other for which there is an inherent tension.
4. *A good metric changes the way you behave.* This is critical for any metric because it pushes you to do things differently based on changes in metrics. If you want to change behavior, your metric must be tied to the behavioral change you want.
5. *A good metric should be paired with others to get a full picture.* For example, _conversion rate_ (percentage of people who buy something) should be tied to _time-to-purchase_ (how long it takes for someone to buy something) to tell you about cash flow. Similarly, _viral coefficient_ (the number of people a user successfully invites to your service) and _viral cycle time_ (how long it takes them to invite others) drive your adoption rate.

Following concepts will help you choose the _right_ metrics:

1. *Qualitative versus quantitative metrics.* Qualitative metrics are unstructured, anecdotal, revealing, and hard to aggregate; quantitative metrics involve numbers and statistics, and provide hard numbers but less insight. Quantitative data is easy to understand, you can aggregate it, extrapolate it, and put in spreadsheet. But when you ask people about their opinions on the problems they are facing, that is quantitative data. It is messy, hard to quantify, and is emotional. It requires asking thoughtful question. Unprepared interviews yield misleading or meaningless results.
2. *Vanity versus actionable metrics.* Vanity metrics might make you feel good, but they don't change how you act. Actionable metrics change your behavior by helping you pick a course of action. Consider “total sign-ups”. That is a vanity metric. Actionable metric is “percent of users who are active.” Views, visits, unique visitors, followers, time on site, emails collected, and number of downloads are all vanity metrics. None of these lead to real value.
3. *Exploratory versus reporting metrics.* Exploratory metrics are speculative and try to find unknown insights to give you the upper hand, while reporting metrics keep you abreast of normal, managerial, day-to-day operations. The “unknown unknowns” coined by Donald Rumsfeld, former US Secretary of Defense are where the magic lives. Rumsfeld's quadrant is a great framework to conduct discovery:
	- Things we know, we know. Are *facts* that may be wrong and should be checked against data.
	- Things we know, we don't know. Are *questions* we can answer by reporting, which we should baseline and automate.
	- Things we don't know, we know. Are *intuition* which we should quantify and teach to improve effectiveness and efficiency.
	- Things we don't know, we don't know. Are *exploration*, which is where unfair advantage and interesting epiphanies live.
4. *Leading vs lagging metrics.* Leading metrics give you a predictive understanding of the future; lagging metrics explain the past. Leading metrics are better because you still have time to act on them—the horse hasn't left the barn yet. Leading metric sometimes called a leading indicator. For example, a number of prospects in your sales funnel give you a sense of how many customers you'll acquire in the future. On the other hand, lagging metric such as churn gives you an indication that there's a problem. By the time you find lagging metrics and try to figure out next steps, it might be too late because they measure after the fact. Indicators are everywhere. It requires proactiveness. You need to be able to do cohort analysis and compare groups over time.
5. *Correlated versus casual metrics.*  If two metrics change together, they are correlated, but if one metric causes another metric to change, they are causal. If you find a causal relationship between something you want (revenue) and something you can control (marketing/which ad you show), then change the future. For example, ice cream and drowning rates both happen because of summer weather, but looking at a simple correlation without demanding causality leads to bad decisions. Correlations can help you predict but finding the cause of something means you can change it. You prove causality by finding a correlation, then running an experiment in which you control the other variables and measure the difference. This is hard to do because no two users are identical; it's often impossible to subject a statistically significant number of people to a properly controlled experiment in the real world. Correlation is good. Causality if great.

## Testing

Testing is the heart of making progress and moving the business model in the right direction. A few concepts to remember while testing.

1. *Segmentation*: A segment is a group that shares common characteristics. For example, users who browse your application on Firefox. Then you can compare one segment to another. For example, users who browse your application on Safari. Segmentation is wide open to industry, marketing or product features. 
2. *Cohort Analysis*: This allows for comparison of a same group over time. For example, user who signed up during alpha release (small group) will have a different experience than the user who signed up during beta release (larger group). Each group of users is a cohort—participants in an experiment across their lifecycle. You can compare cohort against one another to see if overall key metrics are getting better. Overtime you would be releasing key features satisfying your latest cohort from initial cohort. For example, cohort analysis might show you the revenue generated from January is a lot higher than the month in December. Overtime, the revenue is declining from January cohort. But as you launch more feature, the same cohort decides to stick making the drop-off better.
3. *A/B & Multivariate Testing*: Studies in which different groups of test subjects are given different experiences at the same time is referred as cross-sectional studies. This is in contrast with cohort analysis as the testing is done over the lifespan of a customer from the same group. When we are comparing one attribute of a subject's experience (for example link color), and assuming everything else is equal we are doing A/B testing. A/B testing does not come without criticism. For A/B test to be successful you need a large amount of data which is why Google is able to experiment a lot. Or to test all attributes, it might be time-consuming. To avoid the latter, you can conduct multivariate analysis. This relies on statistical analysis of the results to see which of many factors correlates strongly with an improvement in a key metric.

## Data pitfalls

Monica Rogati who is a Data Scientist at LinkedIn have the following advice on how to avoid data pitfalls.

1. *Assuming data is clean.* Before you can analyze, you need to ensure data is clean and accounts for all business logic. For example, empty fields such as "Null" account for 30% of the values, you are miscalculating. Or if you are granting dollars to charities. But if a donor has multiple accounts, transferring funds from one account to another is considered granting which is not true because charities have not received anything.
2. *Not normalizing.* Let's say you are looking for popular destinations to take vacation with your family. Is it popular based on airport business or in fact people travel a lot there for a tourist attraction.
3. *Excluding outliers.* If a small selection of people, say 50 users out of thousands are using your product or bots crawling on your site for content, not ignoring them is a mistake.
4. *Including outliers.* While you might want to ignore 50 users, you might also want to include them to understand why they are heavy users of your product. It might be a feature that they understood, but the average users don't. It could be a marketing campaign opportunity. 
5. *Ignoring seasonality.* Of course, "intern" is the fastest growing job in the month of June. But all things equal, is it? Failure to account for time can lead to misunderstanding of a pattern and making poor decisions.
6. *Ignoring size when reporting growth.* Context is key. Your friends and family signing-up for product is not a sign of growth, but a sign of support because they want to show support. 
7. *Data vomit.* A dashboard isn't much use if you don't know where to look or is not friendly enough.
8. *Metrics that cry wolf.* To be responsive, you need alerts so you can be proactive about fixing it quickly. But if your thresholds are too sensitive, they get louder, and you'll start to ignore them.
9. *The Not Collected Here Syndrome.* Mashing up your data with other data sources can lead to valuable insights. For example, do your best customers come from zip codes with a high concentration of sushi restaurants? This might give you growth ideas about what experiments to run next or even influence growth strategy. 
10. *Focusing on noise.* We are hardwired to see patterns where there are none. For example, seeing a joker shaped cloud. It helps to set aside vanity metrics, step back and look at the bigger picture.

## Actionable tips
- Retrieve: First, you need to learn how to get data. SQL is most common in work places. Divide data gathering into three buckets:
    - Business data: revenue, market share, etc.
    - Product data: product portfolio, features, etc.
    - Customers data: target group, reviews, etc.
- Analyze: Analytical thinking is to crunch numbers understand the why and execute at lightning speed. To do so you need the following basic understanding.
    - Patterns: See the norm, what sticks out, what needs a second look. Get a lay of the land, so you can start developing a point of view. To solve the puzzle, ask yourself the following questions:
        - What is “normal” around here? 
        - What sticks out?
        - Why is it sticking out?
        - How much does it stick out vs everything else?
    - Nuances: It is powerful to see nuances when other people just see a binary yes or no. You want to be able to say— “This works for x situations, but not for y situations.”
    - Absolute numbers & percentages: If you only look at absolute numbers, big numbers will seem good and small numbers will seem bad. If you look at percentages, you’ll see the relationship between the parts and the whole.
    - Variance: Variance is about change. Change from the baseline & changes over time. 
        - How much did this change month over month? 
        - This month vs this month last year? 
        - Was the variance in line with industry growth—or did it outpace or lag comparatively?
    - Expected vs actual: “Wow, we drove 19% growth!” might seem like good news, unless you forecasted 30% growth. This is where looking at expected vs actual numbers is useful. If you compare the two, you can better understand how good performance really is.
    - Percent contribution to whole: 
        - Money: “This accounts for 70% of total $.”
        - Volume: “This accounts for 17% of units.”
        - Top hits: “These 10 items drove 80% of new visitors.”
    - Peaks: Identify peaks and valleys, i.e. the highest or lowest something has ever been. This helps you see the range, which helps you get grounded. If you have new assets or levers to pull, you can say, “We'll beat the highest we've done because x.”
    - Check in on margins: revenues don't alone matter much without cash flows. 
    - Verify your biases by analyzing your data processing mechanics to ensure you are not building a data set to validate your own assumptions.
    - Look for clues by asking:
        - Why is this happening?
        - What is the impact?
        - What should we do about it (if anything)?

## Metrics

| Metrics | Description |
| -------------|:-------------:|
| TBD | TBD |


<details>
    <summary><strong>TBD</strong></summary>
    <br>

</details>
<br>
