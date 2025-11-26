export interface SeasonData {
  year: string;
  captain: string;
  coach: string;
  keyBatsmen: Array<{ name: string; role: string }>;
  keyBowlers: Array<{ name: string; role: string }>;
  allRounders?: Array<{ name: string; role: string }>;
  wicketkeeper?: string;
  highlights: string[];
  position?: string;
}

export const seasonsData: Record<string, SeasonData> = {
  "2008": {
    year: "2008",
    captain: "Rahul Dravid",
    coach: "Venkatesh Prasad",
    keyBatsmen: [
      { name: "Rahul Dravid", role: "Top Order" },
      { name: "Jacques Kallis", role: "Top Order" },
      { name: "Mark Boucher", role: "Middle Order" },
      { name: "Ross Taylor", role: "Middle Order" },
    ],
    keyBowlers: [
      { name: "Zaheer Khan", role: "Fast Bowler" },
      { name: "Anil Kumble", role: "Leg Spinner" },
      { name: "Dale Steyn", role: "Fast Bowler" },
    ],
    allRounders: [
      { name: "Jacques Kallis", role: "All-rounder" },
    ],
    wicketkeeper: "Mark Boucher",
    highlights: [
      "RCB's inaugural IPL season",
      "Reached semi-finals",
      "Rahul Dravid's leadership debut as captain"
    ],
    position: "Semi-Finals"
  },
  "2009": {
    year: "2009",
    captain: "Anil Kumble",
    coach: "Ray Jennings",
    keyBatsmen: [
      { name: "Jacques Kallis", role: "Top Order" },
      { name: "Rahul Dravid", role: "Top Order" },
      { name: "Robin Uthappa", role: "Middle Order" },
      { name: "Ross Taylor", role: "Middle Order" },
    ],
    keyBowlers: [
      { name: "Anil Kumble", role: "Leg Spinner" },
      { name: "Zaheer Khan", role: "Fast Bowler" },
      { name: "Jesse Ryder", role: "Medium Pacer" },
      { name: "Praveen Kumar", role: "Medium Pacer" },
    ],
    allRounders: [
      { name: "Jacques Kallis", role: "All-rounder" },
    ],
    wicketkeeper: "Mark Boucher",
    highlights: [
      "Finished 7th in the league",
      "Anil Kumble took over as captain",
      "Struggled with consistency"
    ],
    position: "7th Place"
  },
  "2010": {
    year: "2010",
    captain: "Anil Kumble",
    coach: "Ray Jennings",
    keyBatsmen: [
      { name: "Jacques Kallis", role: "Top Order" },
      { name: "Robin Uthappa", role: "Top Order" },
      { name: "Manish Pandey", role: "Middle Order" },
      { name: "Ross Taylor", role: "Middle Order" },
    ],
    keyBowlers: [
      { name: "Anil Kumble", role: "Leg Spinner" },
      { name: "Zaheer Khan", role: "Fast Bowler" },
      { name: "Dale Steyn", role: "Fast Bowler" },
      { name: "Praveen Kumar", role: "Medium Pacer" },
    ],
    allRounders: [
      { name: "Jacques Kallis", role: "All-rounder" },
    ],
    wicketkeeper: "Mark Boucher",
    highlights: [
      "Finished 8th in the league",
      "Last season for Anil Kumble",
      "Team underwent restructuring"
    ],
    position: "8th Place"
  },
  "2011": {
    year: "2011",
    captain: "Daniel Vettori",
    coach: "Ray Jennings",
    keyBatsmen: [
      { name: "Chris Gayle", role: "Opening Batsman" },
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "Tillakaratne Dilshan", role: "Opening Batsman" },
    ],
    keyBowlers: [
      { name: "Zaheer Khan", role: "Fast Bowler" },
      { name: "Daniel Vettori", role: "Left-arm Spinner" },
      { name: "Sreenath Aravind", role: "Fast Bowler" },
    ],
    allRounders: [
      { name: "Daniel Vettori", role: "All-rounder" },
    ],
    wicketkeeper: "AB de Villiers",
    highlights: [
      "Chris Gayle's explosive debut season",
      "Gayle scored 608 runs with 175* against PWI",
      "Finished 5th in the league"
    ],
    position: "5th Place"
  },
  "2012": {
    year: "2012",
    captain: "Daniel Vettori",
    coach: "Ray Jennings",
    keyBatsmen: [
      { name: "Chris Gayle", role: "Opening Batsman" },
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "Tillakaratne Dilshan", role: "Opening Batsman" },
    ],
    keyBowlers: [
      { name: "Vinay Kumar", role: "Fast Bowler" },
      { name: "Zaheer Khan", role: "Fast Bowler" },
      { name: "Muttiah Muralitharan", role: "Off Spinner" },
      { name: "Ravi Rampaul", role: "Fast Bowler" },
    ],
    allRounders: [
      { name: "Daniel Vettori", role: "All-rounder" },
    ],
    wicketkeeper: "AB de Villiers",
    highlights: [
      "Finished 5th in the league",
      "Gayle continued his explosive form",
      "Virat Kohli's emergence as key batsman"
    ],
    position: "5th Place"
  },
  "2013": {
    year: "2013",
    captain: "Virat Kohli",
    coach: "Ray Jennings",
    keyBatsmen: [
      { name: "Chris Gayle", role: "Opening Batsman" },
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "Moises Henriques", role: "All-rounder" },
    ],
    keyBowlers: [
      { name: "Vinay Kumar", role: "Fast Bowler" },
      { name: "RP Singh", role: "Fast Bowler" },
      { name: "Jaydev Unadkat", role: "Fast Bowler" },
      { name: "Murali Kartik", role: "Left-arm Spinner" },
    ],
    allRounders: [
      { name: "Moises Henriques", role: "All-rounder" },
    ],
    wicketkeeper: "AB de Villiers",
    highlights: [
      "Virat Kohli became captain at 24",
      "Gayle's historic 175* off 66 balls vs PWI",
      "Finished 5th in the league"
    ],
    position: "5th Place"
  },
  "2014": {
    year: "2014",
    captain: "Virat Kohli",
    coach: "Allan Donald",
    keyBatsmen: [
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "Yuvraj Singh", role: "Middle Order" },
      { name: "Parthiv Patel", role: "Wicketkeeper-Batsman" },
    ],
    keyBowlers: [
      { name: "Mitchell Starc", role: "Fast Bowler" },
      { name: "Yuzvendra Chahal", role: "Leg Spinner" },
      { name: "Varun Aaron", role: "Fast Bowler" },
      { name: "Albie Morkel", role: "All-rounder" },
    ],
    allRounders: [
      { name: "Albie Morkel", role: "All-rounder" },
    ],
    wicketkeeper: "Parthiv Patel",
    highlights: [
      "Finished 7th in the league",
      "Yuzvendra Chahal's IPL debut for RCB",
      "Yuvraj Singh joined the squad"
    ],
    position: "7th Place"
  },
  "2015": {
    year: "2015",
    captain: "Virat Kohli",
    coach: "Daniel Vettori",
    keyBatsmen: [
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "Chris Gayle", role: "Opening Batsman" },
      { name: "Dinesh Karthik", role: "Wicketkeeper-Batsman" },
    ],
    keyBowlers: [
      { name: "Mitchell Starc", role: "Fast Bowler" },
      { name: "Yuzvendra Chahal", role: "Leg Spinner" },
      { name: "David Wiese", role: "All-rounder" },
      { name: "Harshal Patel", role: "Medium Pacer" },
    ],
    allRounders: [
      { name: "David Wiese", role: "All-rounder" },
    ],
    wicketkeeper: "Dinesh Karthik",
    highlights: [
      "Finished 8th in the league",
      "AB de Villiers scored at record strike rates",
      "Gayle returned to the squad"
    ],
    position: "8th Place"
  },
  "2016": {
    year: "2016",
    captain: "Virat Kohli",
    coach: "Daniel Vettori",
    keyBatsmen: [
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "KL Rahul", role: "Opening Batsman" },
      { name: "Chris Gayle", role: "Opening Batsman" },
    ],
    keyBowlers: [
      { name: "Yuzvendra Chahal", role: "Leg Spinner" },
      { name: "Shane Watson", role: "All-rounder" },
      { name: "Chris Jordan", role: "Fast Bowler" },
      { name: "Sreenath Aravind", role: "Fast Bowler" },
    ],
    allRounders: [
      { name: "Shane Watson", role: "All-rounder" },
    ],
    wicketkeeper: "Kedar Jadhav",
    highlights: [
      "RUNNERS-UP - Lost to SRH in finals",
      "Virat Kohli's legendary 973 runs in a season",
      "Kohli scored 4 centuries including 113 vs KXIP"
    ],
    position: "Runners-Up"
  },
  "2017": {
    year: "2017",
    captain: "Virat Kohli",
    coach: "Daniel Vettori",
    keyBatsmen: [
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "Chris Gayle", role: "Opening Batsman" },
      { name: "Kedar Jadhav", role: "Middle Order" },
    ],
    keyBowlers: [
      { name: "Yuzvendra Chahal", role: "Leg Spinner" },
      { name: "Samuel Badree", role: "Leg Spinner" },
      { name: "Tymal Mills", role: "Fast Bowler" },
      { name: "Sreenath Aravind", role: "Fast Bowler" },
    ],
    allRounders: [
      { name: "Pawan Negi", role: "All-rounder" },
    ],
    wicketkeeper: "Kedar Jadhav",
    highlights: [
      "Finished 8th in the league",
      "Last season for Chris Gayle with RCB",
      "Disappointing season after 2016 finals"
    ],
    position: "8th Place"
  },
  "2018": {
    year: "2018",
    captain: "Virat Kohli",
    coach: "Daniel Vettori",
    keyBatsmen: [
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "Parthiv Patel", role: "Wicketkeeper-Batsman" },
      { name: "Quinton de Kock", role: "Opening Batsman" },
    ],
    keyBowlers: [
      { name: "Yuzvendra Chahal", role: "Leg Spinner" },
      { name: "Umesh Yadav", role: "Fast Bowler" },
      { name: "Mohammed Siraj", role: "Fast Bowler" },
      { name: "Washington Sundar", role: "Off Spinner" },
    ],
    allRounders: [
      { name: "Moeen Ali", role: "All-rounder" },
      { name: "Washington Sundar", role: "All-rounder" },
    ],
    wicketkeeper: "Parthiv Patel",
    highlights: [
      "Finished 6th in the league",
      "Mohammed Siraj's breakthrough season",
      "Kohli and AB's partnership remained strong"
    ],
    position: "6th Place"
  },
  "2019": {
    year: "2019",
    captain: "Virat Kohli",
    coach: "Gary Kirsten",
    keyBatsmen: [
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "Parthiv Patel", role: "Wicketkeeper-Batsman" },
      { name: "Marcus Stoinis", role: "All-rounder" },
    ],
    keyBowlers: [
      { name: "Yuzvendra Chahal", role: "Leg Spinner" },
      { name: "Umesh Yadav", role: "Fast Bowler" },
      { name: "Mohammed Siraj", role: "Fast Bowler" },
      { name: "Navdeep Saini", role: "Fast Bowler" },
    ],
    allRounders: [
      { name: "Marcus Stoinis", role: "All-rounder" },
      { name: "Moeen Ali", role: "All-rounder" },
    ],
    wicketkeeper: "Parthiv Patel",
    highlights: [
      "Finished 8th in the league",
      "Gary Kirsten joined as coach",
      "Struggled with bowling inconsistency"
    ],
    position: "8th Place"
  },
  "2020": {
    year: "2020",
    captain: "Virat Kohli",
    coach: "Simon Katich",
    keyBatsmen: [
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "Devdutt Padikkal", role: "Opening Batsman" },
      { name: "Aaron Finch", role: "Opening Batsman" },
    ],
    keyBowlers: [
      { name: "Yuzvendra Chahal", role: "Leg Spinner" },
      { name: "Navdeep Saini", role: "Fast Bowler" },
      { name: "Mohammed Siraj", role: "Fast Bowler" },
      { name: "Washington Sundar", role: "Off Spinner" },
    ],
    allRounders: [
      { name: "Washington Sundar", role: "All-rounder" },
      { name: "Shivam Dube", role: "All-rounder" },
    ],
    wicketkeeper: "Josh Philippe",
    highlights: [
      "Finished 4th - Playoffs appearance",
      "Devdutt Padikkal's outstanding debut (473 runs)",
      "Lost eliminator to SRH"
    ],
    position: "4th Place - Playoffs"
  },
  "2021": {
    year: "2021",
    captain: "Virat Kohli",
    coach: "Simon Katich & Mike Hesson",
    keyBatsmen: [
      { name: "Virat Kohli", role: "Top Order" },
      { name: "AB de Villiers", role: "Middle Order" },
      { name: "Devdutt Padikkal", role: "Opening Batsman" },
      { name: "Glenn Maxwell", role: "All-rounder" },
    ],
    keyBowlers: [
      { name: "Harshal Patel", role: "Medium Pacer" },
      { name: "Yuzvendra Chahal", role: "Leg Spinner" },
      { name: "Mohammed Siraj", role: "Fast Bowler" },
      { name: "Kyle Jamieson", role: "Fast Bowler" },
    ],
    allRounders: [
      { name: "Glenn Maxwell", role: "All-rounder" },
      { name: "Washington Sundar", role: "All-rounder" },
    ],
    wicketkeeper: "KS Bharat",
    highlights: [
      "Finished 3rd - Playoffs appearance",
      "Harshal Patel won Purple Cap (32 wickets)",
      "Glenn Maxwell's resurgence (513 runs)",
      "AB de Villiers' last IPL season"
    ],
    position: "3rd Place - Playoffs"
  },
  "2022": {
    year: "2022",
    captain: "Faf du Plessis",
    coach: "Sanjay Bangar",
    keyBatsmen: [
      { name: "Faf du Plessis", role: "Opening Batsman" },
      { name: "Virat Kohli", role: "Top Order" },
      { name: "Glenn Maxwell", role: "All-rounder" },
      { name: "Dinesh Karthik", role: "Finisher" },
    ],
    keyBowlers: [
      { name: "Wanindu Hasaranga", role: "Leg Spinner" },
      { name: "Harshal Patel", role: "Medium Pacer" },
      { name: "Mohammed Siraj", role: "Fast Bowler" },
      { name: "Josh Hazlewood", role: "Fast Bowler" },
    ],
    allRounders: [
      { name: "Glenn Maxwell", role: "All-rounder" },
      { name: "Shahbaz Ahmed", role: "All-rounder" },
    ],
    wicketkeeper: "Dinesh Karthik",
    highlights: [
      "Finished 4th - Playoffs appearance",
      "Faf du Plessis became captain",
      "Dinesh Karthik's resurgence as finisher (330 runs)",
      "Lost qualifier to RR"
    ],
    position: "4th Place - Playoffs"
  },
  "2023": {
    year: "2023",
    captain: "Faf du Plessis",
    coach: "Sanjay Bangar",
    keyBatsmen: [
      { name: "Faf du Plessis", role: "Opening Batsman" },
      { name: "Virat Kohli", role: "Top Order" },
      { name: "Glenn Maxwell", role: "All-rounder" },
      { name: "Dinesh Karthik", role: "Finisher" },
    ],
    keyBowlers: [
      { name: "Mohammed Siraj", role: "Fast Bowler" },
      { name: "Harshal Patel", role: "Medium Pacer" },
      { name: "Wanindu Hasaranga", role: "Leg Spinner" },
      { name: "Josh Hazlewood", role: "Fast Bowler" },
    ],
    allRounders: [
      { name: "Glenn Maxwell", role: "All-rounder" },
      { name: "Cameron Green", role: "All-rounder" },
    ],
    wicketkeeper: "Dinesh Karthik",
    highlights: [
      "Finished 8th in the league",
      "Virat Kohli scored 639 runs",
      "Disappointing season despite strong batting"
    ],
    position: "8th Place"
  },
  "2024": {
    year: "2024",
    captain: "Faf du Plessis",
    coach: "Andy Flower",
    keyBatsmen: [
      { name: "Virat Kohli", role: "Opening Batsman" },
      { name: "Faf du Plessis", role: "Opening Batsman" },
      { name: "Glenn Maxwell", role: "All-rounder" },
      { name: "Rajat Patidar", role: "Middle Order" },
    ],
    keyBowlers: [
      { name: "Mohammed Siraj", role: "Fast Bowler" },
      { name: "Yash Dayal", role: "Fast Bowler" },
      { name: "Alzarri Joseph", role: "Fast Bowler" },
      { name: "Mayank Dagar", role: "Left-arm Spinner" },
    ],
    allRounders: [
      { name: "Glenn Maxwell", role: "All-rounder" },
      { name: "Cameron Green", role: "All-rounder" },
    ],
    wicketkeeper: "Dinesh Karthik",
    highlights: [
      "RUNNERS-UP - Lost to KKR in finals",
      "Virat Kohli won Orange Cap (741 runs)",
      "Andy Flower joined as head coach",
      "Reached finals after 8 years"
    ],
    position: "Runners-Up"
  },
};
