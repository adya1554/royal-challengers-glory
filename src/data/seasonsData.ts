export interface Player {
  name: string;
  role: string;
  image?: string;
  battingStats?: {
    matches?: number;
    runs?: number;
    average?: number;
    strikeRate?: number;
    fifties?: number;
    hundreds?: number;
  };
  bowlingStats?: {
    matches?: number;
    wickets?: number;
    economy?: number;
    average?: number;
    bestFigures?: string;
  };
}

export interface SeasonData {
  year: string;
  captain: string;
  viceCaptain?: string;
  coach: string;
  homeStadium: string;
  keyBatsmen: Array<{ name: string; role: string }>;
  keyBowlers: Array<{ name: string; role: string }>;
  allRounders?: Array<{ name: string; role: string }>;
  wicketkeeper?: string;
  highlights: string[];
  position?: string;
  topRunScorer?: { name: string; runs: number; average?: number };
  topWicketTaker?: { name: string; wickets: number; economy?: number };
  bestPerformer?: string;
  matchesPlayed?: number;
  matchesWon?: number;
  matchesLost?: number;
}

export const seasonsData: Record<string, SeasonData> = {
  "2008": {
    year: "2008",
    captain: "Rahul Dravid",
    viceCaptain: "Jacques Kallis",
    coach: "Venkatesh Prasad",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore (Capacity: 40,000)",
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
    position: "Semi-Finals",
    topRunScorer: { name: "Jacques Kallis", runs: 472, average: 47.2 },
    topWicketTaker: { name: "Zaheer Khan", wickets: 16, economy: 6.97 },
    bestPerformer: "Jacques Kallis",
    matchesPlayed: 16,
    matchesWon: 8,
    matchesLost: 8
  },
  "2009": {
    year: "2009",
    captain: "Anil Kumble",
    viceCaptain: "Jacques Kallis",
    coach: "Ray Jennings",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "7th Place",
    topRunScorer: { name: "Jacques Kallis", runs: 445, average: 40.5 },
    topWicketTaker: { name: "Anil Kumble", wickets: 21, economy: 6.99 },
    bestPerformer: "Jacques Kallis",
    matchesPlayed: 14,
    matchesWon: 4,
    matchesLost: 10
  },
  "2010": {
    year: "2010",
    captain: "Anil Kumble",
    viceCaptain: "Jacques Kallis",
    coach: "Ray Jennings",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "8th Place",
    topRunScorer: { name: "Jacques Kallis", runs: 379, average: 31.6 },
    topWicketTaker: { name: "Praveen Kumar", wickets: 13, economy: 6.96 },
    bestPerformer: "Praveen Kumar",
    matchesPlayed: 14,
    matchesWon: 4,
    matchesLost: 10
  },
  "2011": {
    year: "2011",
    captain: "Daniel Vettori",
    viceCaptain: "Virat Kohli",
    coach: "Ray Jennings",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "5th Place",
    topRunScorer: { name: "Chris Gayle", runs: 608, average: 67.6 },
    topWicketTaker: { name: "Daniel Vettori", wickets: 11, economy: 7.65 },
    bestPerformer: "Chris Gayle",
    matchesPlayed: 14,
    matchesWon: 8,
    matchesLost: 6
  },
  "2012": {
    year: "2012",
    captain: "Daniel Vettori",
    viceCaptain: "Virat Kohli",
    coach: "Ray Jennings",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "5th Place",
    topRunScorer: { name: "Chris Gayle", runs: 733, average: 61.1 },
    topWicketTaker: { name: "Vinay Kumar", wickets: 19, economy: 7.83 },
    bestPerformer: "Chris Gayle",
    matchesPlayed: 17,
    matchesWon: 8,
    matchesLost: 9
  },
  "2013": {
    year: "2013",
    captain: "Virat Kohli",
    viceCaptain: "AB de Villiers",
    coach: "Ray Jennings",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "5th Place",
    topRunScorer: { name: "Chris Gayle", runs: 708, average: 59.0 },
    topWicketTaker: { name: "Vinay Kumar", wickets: 16, economy: 7.76 },
    bestPerformer: "Chris Gayle",
    matchesPlayed: 16,
    matchesWon: 9,
    matchesLost: 7
  },
  "2014": {
    year: "2014",
    captain: "Virat Kohli",
    viceCaptain: "AB de Villiers",
    coach: "Allan Donald",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "7th Place",
    topRunScorer: { name: "Virat Kohli", runs: 359, average: 36.9 },
    topWicketTaker: { name: "Yuzvendra Chahal", wickets: 12, economy: 6.63 },
    bestPerformer: "Yuzvendra Chahal",
    matchesPlayed: 14,
    matchesWon: 5,
    matchesLost: 9
  },
  "2015": {
    year: "2015",
    captain: "Virat Kohli",
    viceCaptain: "AB de Villiers",
    coach: "Daniel Vettori",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "8th Place",
    topRunScorer: { name: "AB de Villiers", runs: 513, average: 51.3 },
    topWicketTaker: { name: "Harshal Patel", wickets: 17, economy: 8.40 },
    bestPerformer: "AB de Villiers",
    matchesPlayed: 14,
    matchesWon: 5,
    matchesLost: 9
  },
  "2016": {
    year: "2016",
    captain: "Virat Kohli",
    viceCaptain: "AB de Villiers",
    coach: "Daniel Vettori",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "Runners-Up",
    topRunScorer: { name: "Virat Kohli", runs: 973, average: 81.1 },
    topWicketTaker: { name: "Yuzvendra Chahal", wickets: 21, economy: 7.38 },
    bestPerformer: "Virat Kohli (Orange Cap Winner)",
    matchesPlayed: 17,
    matchesWon: 10,
    matchesLost: 7
  },
  "2017": {
    year: "2017",
    captain: "Virat Kohli",
    viceCaptain: "AB de Villiers",
    coach: "Daniel Vettori",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "8th Place",
    topRunScorer: { name: "Kedar Jadhav", runs: 368, average: 52.6 },
    topWicketTaker: { name: "Yuzvendra Chahal", wickets: 14, economy: 7.46 },
    bestPerformer: "Kedar Jadhav",
    matchesPlayed: 14,
    matchesWon: 3,
    matchesLost: 11
  },
  "2018": {
    year: "2018",
    captain: "Virat Kohli",
    viceCaptain: "AB de Villiers",
    coach: "Daniel Vettori",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "6th Place",
    topRunScorer: { name: "AB de Villiers", runs: 480, average: 53.3 },
    topWicketTaker: { name: "Yuzvendra Chahal", wickets: 12, economy: 8.13 },
    bestPerformer: "AB de Villiers",
    matchesPlayed: 14,
    matchesWon: 6,
    matchesLost: 8
  },
  "2019": {
    year: "2019",
    captain: "Virat Kohli",
    viceCaptain: "AB de Villiers",
    coach: "Gary Kirsten",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "8th Place",
    topRunScorer: { name: "Virat Kohli", runs: 464, average: 33.1 },
    topWicketTaker: { name: "Yuzvendra Chahal", wickets: 18, economy: 7.82 },
    bestPerformer: "Yuzvendra Chahal",
    matchesPlayed: 14,
    matchesWon: 5,
    matchesLost: 8
  },
  "2020": {
    year: "2020",
    captain: "Virat Kohli",
    viceCaptain: "AB de Villiers",
    coach: "Simon Katich",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "4th Place - Playoffs",
    topRunScorer: { name: "Devdutt Padikkal", runs: 473, average: 31.5 },
    topWicketTaker: { name: "Yuzvendra Chahal", wickets: 21, economy: 7.08 },
    bestPerformer: "Devdutt Padikkal",
    matchesPlayed: 15,
    matchesWon: 7,
    matchesLost: 8
  },
  "2021": {
    year: "2021",
    captain: "Virat Kohli",
    viceCaptain: "AB de Villiers",
    coach: "Simon Katich & Mike Hesson",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "3rd Place - Playoffs",
    topRunScorer: { name: "Glenn Maxwell", runs: 513, average: 42.8 },
    topWicketTaker: { name: "Harshal Patel", wickets: 32, economy: 8.14 },
    bestPerformer: "Harshal Patel (Purple Cap Winner)",
    matchesPlayed: 15,
    matchesWon: 9,
    matchesLost: 6
  },
  "2022": {
    year: "2022",
    captain: "Faf du Plessis",
    viceCaptain: "Glenn Maxwell",
    coach: "Sanjay Bangar",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "4th Place - Playoffs",
    topRunScorer: { name: "Faf du Plessis", runs: 468, average: 36.0 },
    topWicketTaker: { name: "Wanindu Hasaranga", wickets: 26, economy: 7.54 },
    bestPerformer: "Wanindu Hasaranga",
    matchesPlayed: 16,
    matchesWon: 8,
    matchesLost: 8
  },
  "2023": {
    year: "2023",
    captain: "Faf du Plessis",
    viceCaptain: "Glenn Maxwell",
    coach: "Sanjay Bangar",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "8th Place",
    topRunScorer: { name: "Virat Kohli", runs: 639, average: 53.3 },
    topWicketTaker: { name: "Mohammed Siraj", wickets: 16, economy: 9.14 },
    bestPerformer: "Virat Kohli",
    matchesPlayed: 14,
    matchesWon: 5,
    matchesLost: 9
  },
  "2024": {
    year: "2024",
    captain: "Faf du Plessis",
    viceCaptain: "Glenn Maxwell",
    coach: "Andy Flower",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
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
    position: "Runners-Up",
    topRunScorer: { name: "Virat Kohli", runs: 741, average: 61.8 },
    topWicketTaker: { name: "Yash Dayal", wickets: 13, economy: 9.81 },
    bestPerformer: "Virat Kohli (Orange Cap Winner)",
    matchesPlayed: 17,
    matchesWon: 10,
    matchesLost: 7
  },
  "2025": {
    year: "2025",
    captain: "Rajat Patidar",
    viceCaptain: "TBD",
    coach: "Andy Flower",
    homeStadium: "M. Chinnaswamy Stadium, Bangalore",
    keyBatsmen: [
      { name: "Rajat Patidar", role: "Top Order" },
      { name: "Phil Salt", role: "Wicketkeeper-Batsman" },
      { name: "Liam Livingstone", role: "All-rounder" },
    ],
    keyBowlers: [
      { name: "Josh Hazlewood", role: "Fast Bowler" },
      { name: "Bhuvneshwar Kumar", role: "Fast Bowler" },
      { name: "Krunal Pandya", role: "Spin All-rounder" },
    ],
    allRounders: [
      { name: "Liam Livingstone", role: "All-rounder" },
      { name: "Krunal Pandya", role: "All-rounder" },
    ],
    wicketkeeper: "Phil Salt",
    highlights: [
      "New captain Rajat Patidar",
      "Major squad overhaul with new players",
      "Season in progress"
    ],
    position: "TBD"
  },
};
