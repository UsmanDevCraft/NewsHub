import React, { useEffect, useState } from 'react'
import Newsitems from './Newsitems'

const News = (props) => {

    const API_key = "83021bb6af17429aaa14055e1284a0f5";
    const [articles, setArticles] = useState([
      {
        "source": { "id": "the-washington-post", "name": "The Washington Post" },
        "author": "William Booth",
        "title": "King Charles at cancer center in return to public life after cancer diagnosis - The Washington Post",
        "description": "Charles is the monarch, but he has entered another realm and is now a cancer patient as well. This has unnerved the nation, who welcome photos of him out and about in public.",
        "url": "https://www.washingtonpost.com/world/2024/04/30/king-charles-cancer-center/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QFN2LP43FXCXBD3NJGVHNKRCRQ_size-normalized.jpg&w=1440",
        "publishedAt": "2024-04-30T14:39:13Z",
        "content": "LONDON King Charles III is back at work. Its been three months since he told Britain he has cancer. Hes been getting treatment.\r\nHe looked good.\r\nHis first outing in the public eye on Tuesday was a s… [+133 chars]"
      },
      {
        "source": { "id": "fox-news", "name": "Fox News" },
        "author": null,
        "title": "Trump fined $8,000 for gag order violations - Fox News",
        "description": "Criminal defense attorney Jonna Spilbor and former federal prosecutor Katie Cherkasky react to the breaking news on 'America's Newsroom'",
        "url": "https://www.foxnews.com/video/6352040852112",
        "urlToImage": "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/de2cf67e-df1c-404d-adc0-72053f04d556/c339e1c1-6e93-473b-93e9-96f32fa0ac8c/1280x720/match/1024/512/image.jpg?ve=1&tl=1",
        "publishedAt": "2024-04-30T14:32:28Z",
        "content": "©2024 FOX News Network, LLC. All rights reserved. This material may not be published, broadcast, rewritten, or redistributed. All market data delayed 20 minutes."
      },
      {
        "source": { "id": "associated-press", "name": "Associated Press" },
        "author": "MIKE CORDER",
        "title": "ICJ will rule on Nicaragua's ask for halt on German weapons sales to Israel - The Associated Press",
        "description": "The top United Nations court has rejected a request by Nicaragua to order Germany to halt military and other aid to Israel and renew funding to the U.N. aid agency in Gaza. The International Court of Justice said Tuesday that legal conditions for making such …",
        "url": "https://apnews.com/article/gaza-icj-nicaragua-germany-israel-9c4601a3749fb51ae77ca43cadde4c1a",
        "urlToImage": "https://dims.apnews.com/dims4/default/37ccc0e/2147483647/strip/true/crop/5669x3189+0+296/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F23%2Fee%2Fb9f5ee944226d8b46f3028914cf6%2Ff76f186842e04757b82cbb8988cce677",
        "publishedAt": "2024-04-30T14:24:00Z",
        "content": "THE HAGUE, Netherlands (AP) The top U.N. court rejected on Tuesday a request by Nicaragua to order Germany to halt military and other aid to Israel and renew funding to the U.N. aid agency in Gaza.\r\n… [+4997 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "By Elizabeth Wolfe and Anna Cooban, CNN",
        "title": "Pro-Palestinian protests disrupt colleges across the US: Live updates - CNN",
        "description": "Pro-Palestinian protests are disrupting major US universities, and several schools have called police to remove demonstrators. Follow for live updates.",
        "url": "https://www.cnn.com/business/live-news/university-protests-palestine-04-30-24/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/240426000842-01a-columbia-university-encampment-042524-super-tease.jpg",
        "publishedAt": "2024-04-30T14:09:00Z",
        "content": "Law enforcement arrested roughly 35 people at the California State Polytechnic University, Humboldt, campus in Northern California early Tuesday morning, clearing buildings occupied since last week a… [+1552 chars]"
      },
      {
        "source": { "id": "reuters", "name": "Reuters" },
        "author": "Bhanvi Satija, Patrick Wingrove",
        "title": "Weight-loss drug drives Eli Lilly to raise 2024 sales forecast by $2 billion - Reuters",
        "description": "Explosive demand and increased manufacturing capacity for Eli Lilly's weight-loss drug Zepbound drove the company to raise its annual sales forecast by $2 billion on Tuesday, lifting its shares nearly 6%.",
        "url": "https://www.reuters.com/business/healthcare-pharmaceuticals/eli-lilly-beats-profit-estimates-diabetes-weight-loss-drug-strength-2024-04-30/",
        "urlToImage": "https://www.reuters.com/resizer/v2/K2B6CT444VIJXFTEGBEDBVGP5Q.jpg?auth=b0a6e5a0a1e77c30387511ef8a0932ba5a01021a6c6d8388a9a407c5617782d2&height=1005&width=1920&quality=80&smart=true",
        "publishedAt": "2024-04-30T14:08:00Z",
        "content": null
      },
      {
        "source": { "id": "the-washington-post", "name": "The Washington Post" },
        "author": "Thomas Floyd",
        "title": "Tony Award nominations 2024: Updating list of nominees and analysis - The Washington Post",
        "description": "“Hell’s Kitchen,” “Illinoise,” “The Outsiders,” “Suffs” and “Water for Elephants” will contend for best musical at the Tony Awards, while Rachel McAdams, Jeremy Strong and Jessica Lange are also up for prizes.",
        "url": "https://www.washingtonpost.com/entertainment/theater/2024/04/30/tony-award-nominations-2024-list/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WLUGA2XNIB4S26OYNXCQPKUYHE.jpg&w=1440",
        "publishedAt": "2024-04-30T14:07:20Z",
        "content": "Hells Kitchen, Illinoise, The Outsiders, Suffs and Water for Elephants will contend for best musical at the Tony Awards and stars including Rachel McAdams, Jeremy Strong and Jessica Lange are also up… [+280 chars]"
      },
      {
        "source": { "id": null, "name": "[Removed]" },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
      },
      {
        "source": { "id": "usa-today", "name": "USA Today" },
        "author": "USA TODAY",
        "title": "Charlotte shooting suspect named after 4 officers killed in N.C. - USA TODAY",
        "description": null,
        "url": "https://www.usatoday.com/story/news/nation/2024/04/30/charlotte-police-shooting-suspect-named-updates/73509550007/",
        "urlToImage": null,
        "publishedAt": "2024-04-30T13:41:15Z",
        "content": null
      },
      {
        "source": { "id": "associated-press", "name": "Associated Press" },
        "author": "TIA GOLDENBERG",
        "title": "Netanyahu vows to invade Rafah 'with or without a deal' as cease-fire talks with Hamas continue - The Associated Press",
        "description": "Israeli Prime Minister Benjamin Netanyahu has pledged to launch an incursion into the southern Gaza city of Rafah, where hundreds of thousands of Palestinians are sheltering from the almost 7-month-long war. Netanyahu’s comments came hours before U.S. Secreta…",
        "url": "https://apnews.com/article/israel-hamas-war-news-04-30-2024-f5e14fd176d69f9c4e23b48f3ab5af6a",
        "urlToImage": "https://dims.apnews.com/dims4/default/cd274e3/2147483647/strip/true/crop/3378x1900+0+176/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F42%2F6b%2F781015a32b1ada8d627e6770491c%2F7b702e0d1b1c4f2f8f7d99b1b08e0698",
        "publishedAt": "2024-04-30T13:18:00Z",
        "content": "TEL AVIV, Israel (AP) Israeli Prime Minister Benjamin Netanyahu pledged Tuesday to launch an incursion into the southern Gaza city of Rafah, where hundreds of thousands of Palestinians are sheltering… [+4892 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Kevin Dotson",
        "title": "New contract makes Chiefs’ Travis Kelce highest paid tight end in the NFL, reps say - CNN",
        "description": "Three-time Super Bowl champion and four-time All-Pro Travis Kelce has signed a record contract for NFL tight ends, according to his representatives.",
        "url": "https://www.cnn.com/2024/04/29/sport/travis-kelce-contract-spt-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1716057967.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-04-30T13:18:00Z",
        "content": "Three-time Super Bowl champion and four-time All-Pro Travis Kelce has signed a record contract for NFL tight ends, according to his representatives.\r\nBack at it again, baby! Kelce, an 11-year veteran… [+1505 chars]"
      },
      {
        "source": { "id": null, "name": "MarketWatch" },
        "author": "Andrew Keshner",
        "title": "Stock futures drop after data shows employee costs rising quickly - MarketWatch",
        "description": "Follow all the latest U.S. market action for Tuesday here.",
        "url": "https://www.marketwatch.com/livecoverage/stock-market-today-dow-futures-flat-with-amazon-results-in-focus/card/stock-futures-drop-after-data-shows-employee-costs-rising-quickly-du3qQoOegoY3MM2GmZZX",
        "urlToImage": "https://images.mktw.net/im-21474590/social",
        "publishedAt": "2024-04-30T13:07:30Z",
        "content": "Back to TopIntraday Data provided by FACTSET and subject to terms of use. Historical and current end-of-day data provided by FACTSET. All quotes are in local exchange time. Real-time last sale data f… [+136 chars]"
      },
      {
        "source": { "id": "the-verge", "name": "The Verge" },
        "author": "Andrew Webster",
        "title": "Endless Ocean is a simple, serene swim on the Switch - The Verge",
        "description": "Endless Ocean Luminous, a follow-up to a series of scuba diving games on the Wii, is launching on the Nintendo Switch on May 2nd.",
        "url": "https://www.theverge.com/24144686/endless-ocean-luminous-review-nintendo-switch",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/iWrIQrWSk5bjO28Y-ZO3V-tIrRI=/0x0:1920x1080/1200x628/filters:focal(930x693:931x694)/cdn.vox-cdn.com/uploads/chorus_asset/file/25425955/EndlessOceanLuminous_Screenshot_01_png_jpgcopy.jpg",
        "publishedAt": "2024-04-30T13:00:00Z",
        "content": "Endless Ocean is a simple, serene swim on the Switch\r\nEndless Ocean is a simple, serene swim on the Switch\r\n / Nintendos new underwater adventure game is a little basic but just the thing if youre lo… [+3597 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Louis Mian",
        "title": "Scores missing as Kenya ravaged by mass flooding - CNN",
        "description": "At least 91 people are missing after heavy flooding across the Kenya’s capital, Nairobi, the government said Tuesday, after weeks of heavy rain and flash floods have ravaged parts of the country.",
        "url": "https://www.cnn.com/2024/04/30/africa/kenya-nairobi-flooding-missing-people-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2150180860.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-04-30T12:46:00Z",
        "content": "At least 91 people are missing after heavy flooding across Kenyas capital, Nairobi, the government said Tuesday, after weeks of heavy rain and flash floods ravaged parts of the country.\r\nSome 76 peop… [+2516 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Brenda Goodman",
        "title": "Spikes of flu virus in wastewater raise questions about spread of bird flu - CNN",
        "description": "Spikes of influenza A virus seen in wastewater samples from 59 sewer systems across 18 different states this spring may point to the spread of the H5N1 avian influenza virus that is currently infecting dairy cattle, a new study suggests.",
        "url": "https://www.cnn.com/2024/04/30/health/bird-flu-wastewater-cattle/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1498551049.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-04-30T12:38:00Z",
        "content": "Spikes of influenza A virus seen in wastewater samples from 59 sewer systems across 18 different states this spring may point to the spread of the H5N1 avian influenza virus that is currently infecti… [+6685 chars]"
      },
      {
        "source": { "id": null, "name": "KABC-TV" },
        "author": null,
        "title": "2-year-old boy dies after bounce house carried away by wind gusts in Arizona - KABC-TV",
        "description": "A 2-year-old boy was killed and another child was injured when a strong gust of wind sent a bounce house they were playing in flying into the neighboring lot, according to police.",
        "url": "https://abc7.com/2-year-old-boy-dies-after-bounce-house-carried-away-by-wind-gusts-in-arizona/14745362/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/14745408_043024-cc-shutterstock-police-lights-generic-img.jpg?w=1600",
        "publishedAt": "2024-04-30T12:28:41Z",
        "content": "ARIZONA -- A 2-year-old boy was killed and another child was injured when a strong gust of wind sent a bounce house they were playing in flying into the neighboring lot, according to police.\r\nAuthori… [+991 chars]"
      },
      {
        "source": { "id": null, "name": "CBS Sports" },
        "author": "Leger Douzable",
        "title": "NFL Draft grades 2024: Former 10-year NFL veteran analyzes every team's draft class, reveals favorite picks - CBS Sports",
        "description": "Some teams aced the test, whereas others needed improvement",
        "url": "https://www.cbssports.com/nfl/news/nfl-draft-grades-2024-former-10-year-nfl-veteran-analyzes-every-teams-draft-class-reveals-favorite-picks/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/04/30/957921ab-0e9c-4d54-9139-584341463149/thumbnail/1200x675/127b2531cee90fe63b99328f5ac1a11a/nfl-draft-2024.jpg",
        "publishedAt": "2024-04-30T12:26:21Z",
        "content": "The 2024 NFL Draft is in the books, but there's still plenty to discuss. Now that 257 players have heard their names called, it's time to analyze how each team fared with its draft class. That's what… [+4234 chars]"
      },
      {
        "source": { "id": "associated-press", "name": "Associated Press" },
        "author": null,
        "title": "Sword-wielding man attacks passersby in London, killing a 13-year-old boy and injuring 4 others - The Associated Press",
        "description": "A man wielding a sword attacked members of the public and police officers in a east London suburb, killing a 13-year-old boy and injuring four others, authorities said Tuesday. A 36-year-old man was arrested at the scene, police said. Chief Supt. Stuart Bell …",
        "url": "https://apnews.com/article/britain-london-hainault-incident-ecbc7339ad76d07a1ccce254d166f998",
        "urlToImage": "https://dims.apnews.com/dims4/default/74a1c9c/2147483647/strip/true/crop/4000x2250+0+192/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdb%2F06%2Fa73da12c651d7872d8f1179331a3%2F7e06fc8ddf1541079a4cd93d8f06890b",
        "publishedAt": "2024-04-30T12:13:00Z",
        "content": "LONDON (AP) A man wielding a sword attacked members of the public and police officers in a east London suburb early Tuesday, killing a 13-year-old boy and injuring four others, authorities said.\r\nA 3… [+1399 chars]"
      },
      {
        "source": { "id": null, "name": "Android Authority" },
        "author": null,
        "title": "Pixel 8a US price leaked: Yay or nay? - Android Authority",
        "description": "The US pricing of the Google Pixel 8a has leaked ahead of its launch. Said to start at $499, do you think the phone is priced right? Tell us!",
        "url": "https://www.androidauthority.com/google-pixel-8a-us-price-leaked-3438608/",
        "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2024/04/Google-Pixel-8a-Leaked-marketing-render_4.jpeg",
        "publishedAt": "2024-04-30T12:00:43Z",
        "content": "<ul><li>US pricing of the Pixel 8a has leaked, alongside marketing renders.</li><li>The Pixel 8a is said to cost $499 for its 128GB storage variant and $559 for its 256GB storage variant.</li></ul>\r\n… [+2152 chars]"
      },
      {
        "source": { "id": null, "name": "The Athletic" },
        "author": "Tony Jones",
        "title": "'He's one tough cookie': Jamal Murray has cemented himself as an all-time playoff performer - The Athletic",
        "description": "Monday night added to Jamal Murray's lore, as he hit the shot that won another series for the Nuggets.",
        "url": "https://theathletic.com/5459744/2024/04/30/jamal-murray-game-winner-lakers-nuggets-game-five/",
        "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/04/30040340/AP24121190974153.jpg",
        "publishedAt": "2024-04-30T11:32:01Z",
        "content": "DENVER In the moments after Jamal Murray ended a series for the Denver Nuggets and ended a season for the Los Angeles Lakers, he bumped into his head coach Michael Malone and delivered maybe the unde… [+7222 chars]"
      },
      {
        "source": { "id": "the-washington-post", "name": "The Washington Post" },
        "author": "Lori Rozsa, Caroline Kitchener",
        "title": "Florida prepares for near-total abortion ban to take effect - The Washington Post - The Washington Post",
        "description": "Clinics, patients and abortion rights activists in Florida are bracing for the impact of a six-week abortion ban that will significantly curtail access in the South.",
        "url": "https://www.washingtonpost.com/nation/2024/04/30/florida-abortion-ban/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4MTBW35ECAJ756VTOMVWQI7RNU_size-normalized.jpg&w=1440",
        "publishedAt": "2024-04-30T11:18:12Z",
        "content": "Clinics, patients and abortion rights activists in Florida are bracing for the impact of a new law that will transform the state overnight from one with the fewest restrictions for the procedure in t… [+370 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Thomas Lake",
        "title": "A school principal faced threats after being accused of offensive language on a recording. Now police say it was a deepfake - CNN",
        "description": "The recording surfaced in January, sending shockwaves through Pikesville High School near Baltimore. It appeared the principal had been caught making racist and antisemitic comments. Now police are saying it was a deepfake – and they’ve arrested the school’s …",
        "url": "https://www.cnn.com/2024/04/26/us/pikesville-principal-maryland-deepfake-cec/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1966058434.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-04-26T18:25:00Z",
        "content": "The recording went viral in January, provoking rage in suburban Baltimore. It seemed that Pikesville High School Principal Eric Eiswert had been caught making racist and antisemitic comments. Angry p… [+6583 chars]"
      },
      {
        "source": { "id": null, "name": "Yahoo Entertainment" },
        "author": null,
        "title": "Stock market today: Stocks build on tech-fueled jump as market takes PCE in its stride - Yahoo Finance",
        "description": null,
        "url": "https://finance.yahoo.com/news/stock-market-today-april-26-microsoft-alphabet-earnings-pce-114829664.html",
        "urlToImage": null,
        "publishedAt": "2024-04-26T18:17:35Z",
        "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
      },
      {
        "source": { "id": null, "name": "CBS Sports" },
        "author": "",
        "title": "2024 NFL Draft overreactions, reality checks: Kirk Cousins era already over? Big Year 1 for J.J. McCarthy? - CBS Sports",
        "description": "Which draft observations are overreactions and which are reality?",
        "url": "https://www.cbssports.com/nfl/news/2024-nfl-draft-overreactions-reality-checks-kirk-cousins-era-already-over-big-year-1-for-j-j-mccarthy/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/10/24/c9b811bf-c8b5-4a64-b8c6-31bbdac2f28e/thumbnail/1200x675/3ec14157ac1908e5455dbdc6538809ad/usatsi-kirk-cousins-vikings.jpg",
        "publishedAt": "2024-04-26T17:45:00Z",
        "content": "The 2024 NFL Draft is one for the record books, as six quarterbacks were taken with the first 12 picks -- an NFL record for how many quarterbacks were selected to start a draft (tying the record for … [+6109 chars]"
      },
      {
        "source": { "id": null, "name": "Department of Defense" },
        "author": null,
        "title": "Biden Administration Announces Historic New Security Assistance Package for Ukraine - Department of Defense",
        "description": "DOD announced a new security assistance package to address Ukraine's ongoing battlefield needs and demonstrate unwavering U.S. support.",
        "url": "https://www.defense.gov/News/Releases/Release/Article/3757794/biden-administration-announces-historic-new-security-assistance-package-for-ukr/",
        "urlToImage": "https://media.defense.gov/2021/Sep/30/2002865254/1280/1280/0/210930-D-EX074-055.JPG",
        "publishedAt": "2024-04-26T17:28:50Z",
        "content": "Today, as we commemorate the two-year anniversary of the Ukraine Defense Contact Group led by Secretary Austin, the Department of Defense (DoD) announced a historic new security assistance package to… [+2187 chars]"
      },
      {
        "source": { "id": null, "name": "[Removed]" },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "1970-01-01T00:00:00Z",
        "content": "[Removed]"
      },
      {
        "source": { "id": null, "name": "PEOPLE" },
        "author": "https://www.facebook.com/peoplemag",
        "title": "King Charles Reveals Return to Royal Duty amid Cancer in Health Update - PEOPLE",
        "description": "Buckingham Palace shared an encouraging update about King Charles amid his cancer treatment, sharing he will return to public royal duties soon and host a state visit in June.",
        "url": "https://people.com/king-charles-announces-return-royal-duties-amid-cancer-treatment-palace-health-update-8639110",
        "urlToImage": "https://people.com/thmb/bjR4wE_YIph8jHzro3ZRdwDvW4o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(757x180:759x182)/King-Charles-Queen-Camilla-042624-tout-38a4591a870d40a5bedcf4504555bf24.jpg",
        "publishedAt": "2024-04-26T17:00:02Z",
        "content": "King Charles is gearing up for a return to public-facing royal duties after revealing his cancer diagnosis in February.\r\nBuckingham Palace shared an encouraging update about the monarch's health on A… [+4426 chars]"
      },
      {
        "source": { "id": "associated-press", "name": "Associated Press" },
        "author": "NICHOLAS RICCARDI",
        "title": "Charges against Trump's 2020 'fake electors' are expected to deter a repeat this year - The Associated Press",
        "description": "An Arizona grand jury’s indictment of 18 people who either posed as or helped organize a slate of electors falsely claiming former President Donald Trump won the state in 2020 could help shape the landscape of challenges to the 2024 election. The indictment i…",
        "url": "https://apnews.com/article/fake-electors-trump-2020-arizona-indictments-059a719514b0c6cb56f7d7339e87d0d5",
        "urlToImage": "https://dims.apnews.com/dims4/default/871d9c7/2147483647/strip/true/crop/3498x1968+0+182/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd3%2F01%2Fbcaf18faf9cff88b9306e97f731e%2F7b4bdf61902846dc8f5b908aebde7156",
        "publishedAt": "2024-04-26T16:42:00Z",
        "content": "An Arizona grand jurys indictment of 18 people who either posed as or helped organize a slate of electors falsely claiming that former President Donald Trump won the state in 2020 could help shape th… [+5669 chars]"
      },
      {
        "source": { "id": "ars-technica", "name": "Ars Technica" },
        "author": "Jonathan M. Gitlin",
        "title": "Tesla's 2 million car Autopilot recall is now under federal scrutiny - Ars Technica",
        "description": "NHTSA has tested the updated system and still has questions.",
        "url": "https://arstechnica.com/cars/2024/04/feds-concerned-some-of-teslas-autopilot-recall-was-opt-in-reversible/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/08/26992255_1308817442555956_3930493683220288233_n-760x380.jpg",
        "publishedAt": "2024-04-26T16:28:41Z",
        "content": "Enlarge/ A 2014 Tesla Model S driving on Autopilot rear-ended a Culver City fire truck that was parked in the high-occupancy vehicle lane on Interstate 405.\r\n116\r\nTesla's lousy week continues. On Tue… [+3590 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Kevin Liptak, Betsy Klein",
        "title": "Biden says he’s happy to debate Trump ahead of November’s election - CNN",
        "description": "President Biden says he will debate former President Trump ahead of this year’s election, though said he didn’t know in what format.",
        "url": "https://www.cnn.com/2024/04/26/politics/biden-trump-debate/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/20240414-split-joe-biden-donald-trump.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-04-26T16:21:00Z",
        "content": "President Joe Biden said he will debate former President Donald Trump ahead of this years election, the clearest declaration yet of his willingness to face-off with his Republican rival before voters… [+5924 chars]"
      },
      {
        "source": { "id": null, "name": "PetaPixel" },
        "author": "Matt Growcoot",
        "title": "Satellite Photo Shows an Army of 'Black Spiders' on Mars - PetaPixel",
        "description": "Nothing to do with David Bowie.",
        "url": "https://petapixel.com/2024/04/26/satellite-photo-shows-an-army-of-black-spiders-on-mars/",
        "urlToImage": "https://petapixel.com/assets/uploads/2024/04/Spiders-on-Mars.jpg",
        "publishedAt": "2024-04-26T15:56:23Z",
        "content": "A photo taken by the European Space Agency’s Mars Express orbiter has set the internet alight after it apparently shows large clusters of black spiders crawling on the surface of the Red Planet’s sou… [+2713 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "By Elizabeth Wolfe, Dalia Faheid, Aya Elamroussi and Nouran Salahieh, CNN",
        "title": "Columbia president faces key vote of censure from faculty as protests continue nationwide - CNN",
        "description": "Pro-Palestinian protests continue at major US universities where several schools have called police on protesters, leading to the arrests of hundreds across the country. Follow for live updates.",
        "url": "https://www.cnn.com/business/live-news/columbia-university-palestine-protests-04-26-24/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/240426000842-01a-columbia-university-encampment-042524-super-tease.jpg",
        "publishedAt": "2024-04-26T15:47:00Z",
        "content": "A Columbia student who has spoken on behalf of pro-Palestinian protesters has apologized for saying on video that \"Zionists dont deserve to live.\" \r\nKhymani James, a student activist associated with … [+2143 chars]"
      },
      {
        "source": { "id": null, "name": "Austin American-Statesman" },
        "author": "Skye Seipp",
        "title": "Charges dropped against all 57 arrested in connection to UT-Austin pro-Palestinian protest - Austin American-Statesman",
        "description": "The Travis County attorney's office, which handles misdemeanor cases, said the arrests lacked probable cause.",
        "url": "https://www.statesman.com/story/news/local/2024/04/26/ut-austin-pro-palestinian-protest-charges-dropped-against-all-57-people-arrested/73468467007/",
        "urlToImage": "https://www.statesman.com/gcdn/authoring/authoring-images/2024/04/25/NAAS/73448161007-ut-palestine-protest-mlc-1777.jpg?crop=2399,1351,x0,y124&width=2399&height=1351&format=pjpg&auto=webp",
        "publishedAt": "2024-04-26T15:44:11Z",
        "content": "All charges have been declined against the 57 people arrested in connection to the Wednesday pro-Palestinian protest at the University of Texas.\r\nThe Travis County attorney's office said all 57 arres… [+1941 chars]"
      },
      {
        "source": { "id": "reuters", "name": "Reuters" },
        "author": "Julie Steenhuysen, Tom Polansek",
        "title": "Bird flu: one in five US commercial milk samples contain traces, says FDA - Reuters",
        "description": "One in five commercial milk samples tested in a nationwide survey contained particles of the H5N1 virus, the U.S. Food and Drug Administration said late on Thursday, suggesting the outbreak of bird flu is more widespread than previously thought.",
        "url": "https://www.reuters.com/world/us/us-fda-says-about-1-5-commercial-milk-samples-tested-positive-bird-flu-traces-2024-04-26/",
        "urlToImage": "https://www.reuters.com/resizer/v2/UKYQUFLU7NJ2LB673DLN3JMJCY.jpg?auth=711fc5bba0bba357ca51001b227f1b903e7ba42717c4407fa94c0ba6f0747598&height=1005&width=1920&quality=80&smart=true",
        "publishedAt": "2024-04-26T15:39:00Z",
        "content": null
      },
      {
        "source": { "id": "the-washington-post", "name": "The Washington Post" },
        "author": "Loveday Morris, Heba Farouk Mahfouz, Claire Parker, Karen DeYoung, Meg Kelly",
        "title": "As Gaza cease-fire talks resume, the coming fight for Rafah looms large - The Washington Post",
        "description": "Washington has said it cannot support a major military operation in Rafah. Israeli officials have described the coming campaign as essential to defeating Hamas.",
        "url": "https://www.washingtonpost.com/world/2024/04/26/rafah-gaza-israel-hostages-ceasefire/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/S2HHRGUDOENULBMHC76G66XBCI_size-normalized.jpg&w=1440",
        "publishedAt": "2024-04-26T15:31:35Z",
        "content": "Fighting in Gaza began to ebb earlier this month as Israel withdrew most of its ground troops from the enclave. The opening of new border crossings allowed for the entry of more desperately needed ai… [+12437 chars]"
      },
      {
        "source": { "id": null, "name": "BBC News" },
        "author": null,
        "title": "TikTok will not be sold, Chinese parent ByteDance tells US - BBC.com",
        "description": "The video sharing app faces being banned in the US unless it severs ties with its China's ByteDance.",
        "url": "https://www.bbc.com/news/articles/c289n8m4j19o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/08a9/live/7b202790-0395-11ef-ba16-6b66497f92e6.jpg",
        "publishedAt": "2024-04-26T15:12:50Z",
        "content": null
      },
      {
        "source": { "id": "the-washington-post", "name": "The Washington Post" },
        "author": "Daniel Gilbert, David Ovalle",
        "title": "FDA approves new spinal-cord device for chronic pain, Medtronic says - The Washington Post",
        "description": "Medtronic said that the FDA approved its new spinal implant, which delivers a variable electrical pulse to interrupt pain signals before they reach the brain.",
        "url": "https://www.washingtonpost.com/business/2024/04/26/medtronic-spinal-cord-stimulator/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OLX5DTWEQ4I6XCNEW6XCFKQZHY.jpg&w=1440",
        "publishedAt": "2024-04-26T15:05:00Z",
        "content": "Medtronic said Friday that the U.S. Food and Drug Administration has approved a new spinal-cord implant that relieves chronic pain, a bid to expand into a patient population that relies heavily on me… [+3274 chars]"
      },
      {
        "source": { "id": "fox-news", "name": "Fox News" },
        "author": "Chris Pandolfo",
        "title": "Trump NY trial enters day 8 with more testimony from American Media CEO David Pecker - Fox News",
        "description": "Former President Donald Trump will return to court in Manhattan on Friday for day eight of the NY v. Trump trial. Former American Media CEO David Pecker will take the stand for cross-examination by defense attorneys who seek to poke holes in prosecutors' alle…",
        "url": "https://www.foxnews.com/live-news/april-26-trump-new-york-trial",
        "urlToImage": "https://livenews.foxnews.com/images/2024/04/028ed81eb291ff92179e5143574c4c92.jpg",
        "publishedAt": "2024-04-26T14:58:35Z",
        "content": "Former American Media Inc. (AMI) CEO David Pecker told the court that former President Trump had an agreement with Stormy Daniels and every time she said his name she would have to pay a $1 million p… [+1964 chars]"
      },
      {
        "source": { "id": null, "name": "Deadline" },
        "author": "Anthony D'Alessandro",
        "title": "Zendaya & Luca Guadagnino Movie ‘Challengers’ Takes $1.9M Previews, ‘Unsung Hero’ $1.67M – Box Office - Deadline",
        "description": "Zendaya's movie 'Challengers' opened to $1.9 million in Thursday previews and is looking at a $15M opening at the weekend box office.",
        "url": "http://deadline.com/2024/04/box-office-challengers-zendaya-1235896116/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2024/04/C_00654_R.jpg?w=1024",
        "publishedAt": "2024-04-26T14:58:00Z",
        "content": "Amazon MGM Studios’ Challengers, starring Zendaya and directed by Luca Guadagnino, made $1.9 million in previews Thursday, a figure $100,000 shy of what Universal’s Cocaine Bear did. The sexy tennis … [+2642 chars]"
      },
      {
        "source": { "id": "associated-press", "name": "Associated Press" },
        "author": "MATTHEW LEE",
        "title": "US-China talks start with warnings about misunderstandings and miscalculations - The Associated Press",
        "description": "U.S. Secretary of State Antony Blinken has met with Chinese President Xi Jinping and senior Chinese officials in Beijing. He warned of the dangers of misunderstandings and miscalculations as the United States and China butted heads over a number of contentiou…",
        "url": "https://apnews.com/article/us-china-blinken-wang-yi-8c1c453df3afbd6ec87ced0c8d618064",
        "urlToImage": "https://dims.apnews.com/dims4/default/a6e522f/2147483647/strip/true/crop/5330x2998+0+278/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F21%2Fef%2F5f1618c49d3ace27aac38d53ea7c%2Fefa8c90326ae449b816deabae95d88e0",
        "publishedAt": "2024-04-26T14:01:00Z",
        "content": "BEIJING (AP) U.S. Secretary of State Antony Blinken met Friday with Chinese President Xi Jinping and senior Chinese officials, stressing the importance of responsibly managing the differences between… [+7459 chars]"
      },
      {
        "source": { "id": "fox-news", "name": "Fox News" },
        "author": "Ryan Morik",
        "title": "Patrick Mahomes give 2-emoji reaction to Chiefs trading up for record-breaking receiver - Fox News",
        "description": "The Kansas City Chiefs traded up to select Xavier Worthy, the record-holder for the fasted 40-time, and Patrick Mahomes seems excited about it.",
        "url": "https://www.foxnews.com/sports/patrick-mahomes-give-2-emoji-reaction-chiefs-trading-up-record-breaking-receiver",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/04/mahomes-worthy-good.png",
        "publishedAt": "2024-04-26T13:22:00Z",
        "content": "The defending Super Bowl champions just got even more dangerous.\r\nThe Kansas City Chiefs, less than three months after winning their second-straight Super Bowl, traded up on Thursday in the first rou… [+1794 chars]"
      }
    ]);


    const newsCall = async () => {
   const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${API_key}`;
      try {
          const data = await fetch(url);
          const parsedData = await data.json();
          setArticles(parsedData.articles);
      } catch (error) {
          console.error("Error fetching news:", error);
      }
  };
  
  useEffect(() => {
      newsCall();
  }, []);
  


  const capitalize = ()=>{
    return props.category.charAt(0).toUpperCase() + props.category.substr(1);
  };

  return (
<>
    <div className="container d-flex justify-content-center mt-5 text-center">
      <h1>NewsHub - Top {capitalize(props.category)} News</h1>
    </div>
      <div className='mt-5 d-flex flex-wrap justify-content-center gap-4'>
        {articles && articles.map((element)=>{
            return <div key={element.publishedAt}>
            <Newsitems title={element.title} description={element.description} imgUrl={element.urlToImage} author={element.author} url={element.url}/>
          </div>
        })}
      </div>
</>
  )
}


export default News
