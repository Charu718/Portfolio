// movies


var movie = [
    {
      // new
      name:"Kasargold",
      videoSource:"video/Kasargold - Official Trailer _ Asif Ali _ Sunny Wayne _ Vinayakan _ Vishnu Vijay _ 15th Sept 2023.mp4",
      thumbnail:"\'www_netflix_com/kasargold.webp\'",
      genre: ["Action thriller", "On the run", "thriller"],
      "U/A": "16+",
      content:"gore, tobacco use, violence",
      time: "2h 16m",
      Cast: "Asif Ali, Sunny Wayne, Vinayakan",
      description: "A car crash leaves two gold smugglers without their valuable cargo. But getting it back means chasing the thief deep into Kerala's chaotic underworld.",
      director: "Mridul Nair"
    },
    {
      name:"OMG",
      videoSource:"video/OMG2 - Official Trailer _ Akshay Kumar, Pankaj Tripathi, Yami Gautam _ Amit Rai _ In Theatres Aug 11.mp4",
      thumbnail: "\'www_netflix_com/omg.webp\'",
      genre: ["Quirky", "Dramedy", "comedy"],
      "U/A": "A",
      content:"sexual violence references, mature themes, suicide",
      time: "2h 35m",
      Cast: "Akshay Kumar, Pankaj Tripathi, Yami Gowtham",
      description: "A devout father takes on a dogmatic school — and his own moral beliefs — after the school expels his son over an embarrassing video that goes viral.",
      director: "Amit Rai"
    },
    {
      name:"Khufiya",
      videoSource:"video/Khufiya _ Official Trailer _ Vishal Bhardwaj, Tabu, Ali Fazal, Wamiqa Gabbi.mp4",
      thumbnail: "\'www_netflix_com/khufia.jpg\'",
      genre: ["Slick", "Suspenseful", "thriller"],
      "U/A": "16+",
      content:"language, sexual content, tobacco use, violence",
      time: "2h 37m",
      Cast: "Tabu, Ali Fazal, Wamika Gabbi",
      description: "When a mole in an intelligence unit leads to the murder of an undercover spy, a hardened agent relentlessly pursues him to avenge the death.",
      director: "Vishal Bardwaj"
    },
    {
      name:"Jurassic World",
      videoSource:"video/Jurassic World - Official Trailer (HD).mp4",
      thumbnail: "\'www_netflix_com/juwold.webp\'",
      genre: ["Adrenaline rush", "Explosive", "Sci-Fi Adventure"],
      "U/A": "13+",
      content:"gore, language, fantasy",
      time: "2h 26m",
      Cast: "Tabu, Ali Fazal, Wamika Gabbi",
      description: "Catastrophe looms as dinosaurs live among humans in a volatile world, and heroes — both old and new — unite once more for a thrilling adventure.",
      director: "Colin Trvorrow"
    },
    {
      name:"Lupin",
      videoSource:"video/Lupin _ Official Trailer _ Netflix.mp4",
      thumbnail:"\'www_netflix_com/lupin.jpg\'",
      genre: ["Witty", "Exciting", "action"],
      "U/A": "16+",
      content:"mature themes, suicide, tobacco use",
      time: "3 parts",
      Cast: "Omar Sy, Ludivine Sagnier, Clotilde Hesme",
      description: "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family..",
      director: "George Kay"
    },
    {
      name:"Spy x Family",
      videoSource:"video/SPY x FAMILY _ Official Trailer _ Netflix.mp4",
      thumbnail: "\'www_netflix_com/spy.webp\'",
      genre: ["Slicky", "Offbeat", "anime"],
      "U/A": "16+",
      content:"substances, tobacco use",
      time: "2 seasons",
      Cast: "Takuya Eguchi, Atsume tsanezaki, Saori Hayamo",
      description: "A spy, an assassin and a telepath come together to pose as a family, each for their own reasons, while hiding their true identities from each other.",
      
    },
    {
      name:"Fall of the house of Usher",
      videoSource: "video/The Fall of the House of Usher _ Official Trailer _ Netflix.mp4",
      thumbnail: "\'www_netflix_com/usher.jpg\'",
      genre: ["Greusome", "Gory", "horror"],
      "U/A": "A",
      content:"language, nudity, sex, substances, suicide, violence",
      time: "8 Episodes",
      Cast: "Carla Gugino, Bruce Greenwood, Mary McDonnel",
      description: "To secure their fortune — and future — two ruthless siblings build a family dynasty that begins to crumble when their heirs mysteriously die, one by one.",
      director: "Mike Flaganan"
    },
    {
      name:"Insidious: The Red Door",
      videoSource: "video/INSIDIOUS_ THE RED DOOR _ Official Trailer (HD).mp4",
      thumbnail: "\'www_netflix_com/reddoor.webp\'",
      genre: ["Omnius", "Scary", "horror"],
      "U/A": "13+",
      content:"crude humor, gore, language, mature themes, threat, violence",
      time: "1h 47m",
      Cast: "Ty Simpkins, Patrick Willson, Rose Byrne",
      description: "Dalton Lambert, now in college, grapples with generational trauma when he and his father uncover repressed memories of the demon haunting their family.",
      director: "Patrick Willson"
    },
    {
        name:"Mrs. Shetty and Mr.Polishetty",
        videoSource:"video/Miss Shetty Mr Polishetty Telugu Trailer _ Anushka Shetty _ Naveen Polishetty _ Mahesh Babu P.mp4",
        thumbnail: "\'www_netflix_com/shetty.webp\'",
        genre: ["Charming", "Comedy","romance"],
        "U/A": "13+",
        content:"substances, tobacco use",
        time: "2h 28m",
        Cast: "Anushka Shetty, Naveen Polishetty, Jeyasudha",
        description: "An ambitious chef starts working with a stand-up comedian and initially struggles to deal with his carefree attitude — only to unexpectedly find love.",
        director: "Mahesh Babu p."
      },
      {
        name:"Maamannan",
        videoSource:"video/MAAMANNAN - Official Trailer _ Udhayanidhi Stalin _ A.R Rahman _ Vadivelu _ Mari Selvaraj.mp4",
        thumbnail: "\'www_netflix_com/maamannan.webp'",
        genre: ["Gritty", "Emotional", "drama"],
        "U/A": "A",
        content:"tobacco use, violence",
        time: "2h 35m",
        Cast: "Vadivelu, Fahadh Faasil, Keerthy Suresh",
        description: "A veteran statesman and his son are pulled into a violent power struggle when a cold-blooded political scion pursues a vengeful rise.",
        director: "Mari Selvaraj"
      },
      // tv
      {
        name:"Murder",
        videoSource:"video/Murder Tamil Movie Trailer _ Krishnaswamy Shrikanth _ Sahiti _ Ram Gopal Varma _ AP International.mp4",
        thumbnail:"\'www_netflix_com/murderrr.webp\'",
        genre: ["Suspenseful", "Mystery", "thriller"],
        "U/A": "16+",
        content:"gore, sexual content, substances, suicide",
        time: "6 seasons",
        Cast: "Viola Davis, Billy Brown, Alfred Enoch",
        description: "Brilliant criminal defense attorney and law professor Annalise Keating, plus five of her students, become involved in a twisted murder case.",
        director: "Peter Nowalk"
      },
      {
        name:"Guns and Gulabs",
        videoSource:"video/Guns & Gulaabs _ Official Trailer _ Raj & DK _ RajKummar, Dulquer, Adarsh, Gulshan _ Aug 18.mp4",
        thumbnail: "\'www_netflix_com/gg.jpg\'",
        genre: ["Offbeat", "Exciting", "thriller"],
        "U/A": "16+",
        content:"gore, language, tobacco use, violence",
        time: "7 Episodes",
        Cast: "Rajkummar Rao, Dulquer Salmaan, Adarsh Gourav",
        description: "In the cartel-run town of Gulaabgunj, an unprecedented opium deal pulls a big-city cop and a lovesick mechanic into its chaotic clutches.",
        director: "Raj Nidimoru, Krishna D.K."
      },
      {
        name:"Reply 1988",
        videoSource:"video/Reply 1988 _ Trailer with Eng Subs.mp4",
        thumbnail: "\'www_netflix_com/1998webp\'",
        genre: ["Nostalgic", "Charming", "drama"],
        "U/A": "13+",
        content:"language, substances, tobacco use",
        time: "20 Episodes",
        Cast: "Lee Hye-ri, Park bo-Gum, Ru Jun-yeol",
        description: "Take a nostalgic trip back to the late 1980s through the lives of five families and their five teenage kids living in a small neighborhood in Seoul.",
        director: "Shin Wom-ho, Lee Woo-jung"
      },
      {
        name:"Vampire Diaries",
        videoSource:"video/The Vampire Diaries Season 1 Trailer.mp4",
        thumbnail: "\'www_netflix_com/vd.webp\'",
        genre: ["Ominous", "Bittersweet", "horror"],
        "U/A": "A",
        content:"sex, violence",
        time: "8 seasons",
        Cast: "Nina Dobrey, Paul Wesley, Ian somerhalder",
        description: "Trapped in adolescent bodies, feuding vampire brothers Stefan and Damon vie for the affection of captivating teenager Elena.",
        director: "Julie Pleck, Kevin Williamson"
      },
      {
        name:"Lucifer",
        videoSource:"video/Official Trailer _ Season 1 _ LUCIFER.mp4",
        thumbnail:"\'www_netflix_com/lucifer.jpg\'",
        genre: ["Slick", "Exciting", "Fantasy TV"],
        "U/A": "16+",
        content:"nudity, substances, fantasy",
        time: "6 seasons",
        Cast: "Tom Ellis, Lauren german, Kavin Alejandro",
        description: "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.",
        director: "George Kay"
      },
      {
        name:"The good Doctor",
        videoSource:"video/The Good Doctor – Official Trailer.mp4",
        thumbnail: "\'www_netflix_com/thegoodDoctor.webp\'",
        genre: ["Inspiring", "Heartfelt", "comedy"],
        "U/A": "16+",
        content:"gore",
        time: "20 episodes",
        Cast: "Joo won, Moon chae-won, Joo sang-wook",
        description: "A savant-like pediatric surgeon is in constant conflict with a fellow doctor -- a rivalry that heats up when they develop feelings for the same woman.",
        director: "George Kay"
      },
      {
        name:"Naam",
        videoSource:"video/Naam Official Trailer - Suriavelan _ Stephen Zechariah _ Ajmal _ Suman.mp4",
        thumbnail: "\'www_netflix_com/naam.webp\'",
        genre: ["Inspiring", "Emotional", "drama"],
        "U/A": "16+",
        content:"naam",
        time: "2 seasons",
        Cast: "Stephen Zechariah, Alawdin Aldi, Vikneswary se",
        description: "Six bandmates from very different backgrounds navigate complicated personal lives and romances as their talent skyrockets them to musical stardom.",
        director: "T. Suriavelan"
      },
      {
        name:"The walking dead",
        videoSource:"video/The Walking Dead_ Daryl Dixon Official Trailer.mp4",
        thumbnail: "\'www_netflix_com/walkingDead.webp\'",
        genre: ["Omnius", "Scary", "fantasy"],
        "U/A": "13+",
        content:"crude humor, gore, language, mature themes, threat, violence",
        time: "1h 47m",
        Cast: "Ty Simpkins, Patrick Willson, Rose Byrne",
        description: "Dalton Lambert, now in college, grapples with generational trauma when he and his father uncover repressed memories of the demon haunting their family.",
        director: "Patrick Willson"
      },
      {
          name:"Mr. Queen",
          videoSource:"video/MR. QUEEN - OFFICIAL TRAILER _ Korean Drama _ Shin Hye Sun, Kim Jung Hyun.mp4",
          thumbnail: "\'www_netflix_com/mrqueen.webp\'",
          genre: ["Charming", "Quirky", "Comedy"],
          "U/A": "13+",
          content:"substances, romance",
          time: "2h 28m",
          Cast: "Anushka Shetty, Naveen Polishetty, Jeyasudha",
          description: "An ambitious chef starts working with a stand-up comedian and initially struggles to deal with his carefree attitude — only to unexpectedly find love.",
          director: "Mahesh Babu p."
        },
        {
          name:"All of us are dead  ",
          videoSource:"video/All of Us Are Dead _ Official Trailer _ Netflix.mp4",
          thumbnail: "\'www_netflix_com/allofusaredead.jpg\'",
          genre: ["Gritty", "Emotional", "thriller"],
          "U/A": "A",
          content:"tobacco use, violence",
          time: "2h 35m",
          Cast: "Vadivelu, Fahadh Faasil, Keerthy Suresh",
          description: "A veteran statesman and his son are pulled into a violent power struggle when a cold-blooded political scion pursues a vengeful rise.",
          director: "Mari Selvaraj"
        },
        // tamil
        {
          name:"Vaathi",
          videoSource:"video/Vaathi _ Official Trailer _ Dhanush, Samyuktha Menon _ Netflix India.mp4",
          thumbnail:"\'www_netflix_com/vaathi.webp\'",
          genre: ["Action thriller", "On the run", "drama"],
          "U/A": "16+",
          content:"gore, tobacco use, drama",
          time: "2h 16m",
          Cast: "Asif Ali, Sunny Wayne, Vinayakan",
          description: "A car crash leaves two gold smugglers without their valuable cargo. But getting it back means chasing the thief deep into Kerala's chaotic underworld.",
          director: "Mridul Nair"
        },
        {
          name:"Beast",
          videoSource:"video/Beast - Official Trailer _ Thalapathy Vijay _ Sun Pictures _ Nelson _ Anirudh _ Pooja Hegde.mp4",
          thumbnail: "\'www_netflix_com/beast.webp\'",
          genre: ["Quirky", "Understated", "action"],
          "U/A": "A",
          content:"sexual violence references, mature themes, suicide",
          time: "2h 35m",
          Cast: "Akshay Kumar, Pankaj Tripathi, Yami Gowtham",
          description: "A devout father takes on a dogmatic school — and his own moral beliefs — after the school expels his son over an embarrassing video that goes viral.",
          director: "Amit Rai"
        },
        {
          name:"Dasara",
          videoSource:"video/Dasara - Official Trailer _ Nani _ Keerthy Suresh _ Santhosh Narayanan _ Srikanth Odela.mp4",
          thumbnail: "\'www_netflix_com/dasara.webp\'",
          genre: ["Slick", "Suspenseful", "action"],
          "U/A": "16+",
          content:"language, sexual content, tobacco use, violence",
          time: "2h 37m",
          Cast: "Tabu, Ali Fazal, Wamika Gabbi",
          description: "When a mole in an intelligence unit leads to the murder of an undercover spy, a hardened agent relentlessly pursues him to avenge the death.",
          director: "Vishal Bardwaj"
        },
        {
          name:"Thunivu",
          videoSource:"video/Thunivu _ Official Trailer _ Ajith Kumar, Manju Warrier _ Netflix India.mp4",
          thumbnail: "\'www_netflix_com/thunivu.webp\'",
          genre: ["Adrenaline rush", "Explosive", "action"],
          "U/A": "13+",
          content:"gore, language, action",
          time: "2h 26m",
          Cast: "Tabu, Ali Fazal, Wamika Gabbi",
          description: "Catastrophe looms as dinosaurs live among humans in a volatile world, and heroes — both old and new — unite once more for a thrilling adventure.",
          director: "Colin Trvorrow"
        },
        {
          name:"Petta",
          videoSource:"video/Petta - Official Trailer [Tamil] _ Superstar Rajinikanth _ Sun Pictures _ Karthik Subbaraj _ Anirudh.mp4",
          thumbnail:"\'www_netflix_com/petta.webp\'",
          genre: ["Witty", "Exciting", "action"],
          "U/A": "16+",
          content:"mature themes, suicide, tobacco use",
          time: "3 parts",
          Cast: "Omar Sy, Ludivine Sagnier, Clotilde Hesme",
          description: "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family..",
          director: "George Kay"
        },
        {
          name:"Pattathu arasan",
          videoSource:"video/Pattathu Arasan - Official Trailer _ Rajkiran, Atharvaa _ Sarkunam _ Ghibran _ Lyca Production.mp4",
          thumbnail: "\'www_netflix_com/patathu.webp\'",
          genre: ["Slicky", "Offbeat", "action"],
          "U/A": "16+",
          content:"substances, tobacco use",
          time: "2 seasons",
          Cast: "Takuya Eguchi, Atsume tsanezaki, Saori Hayamo",
          description: "A spy, an assassin and a telepath come together to pose as a family, each for their own reasons, while hiding their true identities from each other.",
          
        },
        {
          name:"Mersal",
          videoSource: "video/Mersal - Official Tamil Teaser _ Vijay _ A R Rahman _ Atlee.mp4",
          thumbnail: "\'www_netflix_com/mersal.webp\'",
          genre: ["Greusome", "Gory", "action"],
          "U/A": "A",
          content:"language, nudity, sex, substances, suicide, violence",
          time: "8 Episodes",
          Cast: "Carla Gugino, Bruce Greenwood, Mary McDonnel",
          description: "To secure their fortune — and future — two ruthless siblings build a family dynasty that begins to crumble when their heirs mysteriously die, one by one.",
          director: "Mike Flaganan"
        },
        {
          name:"Leo",
          videoSource: "video/LEO - Official Trailer _ Thalapathy Vijay _ Lokesh Kanagaraj _ Anirudh Ravichander.mp4",
          thumbnail: "\'www_netflix_com/leo.jpeg\'",
          genre: ["Omnius", "Scary", "action"],
          "U/A": "13+",
          content:"crude humor, gore, language, mature themes, threat, violence",
          time: "1h 47m",
          Cast: "Ty Simpkins, Patrick Willson, Rose Byrne",
          description: "Dalton Lambert, now in college, grapples with generational trauma when he and his father uncover repressed memories of the demon haunting their family.",
          director: "Patrick Willson"
        },
        {
            name:"Kalaga Thalaivan",
            videoSource:"video/Kalaga Thalaivan - Trailer _ Udhayanidhi Stalin, Nidhhi Agerwal _ Magizh Thirumeni _ Srikanth Deva.mp4",
            thumbnail: "\'www_netflix_com/kt.webp\'",
            genre: ["Charming", "Quirky", "action"],
            "U/A": "13+",
            content:"substances, tobacco use",
            time: "2h 28m",
            Cast: "Anushka Shetty, Naveen Polishetty, Jeyasudha",
            description: "An ambitious chef starts working with a stand-up comedian and initially struggles to deal with his carefree attitude — only to unexpectedly find love.",
            director: "Mahesh Babu p."
          },
          {
            name:"Sarkar",
            videoSource:"video/Sarkar - Official Teaser [Tamil] _ Thalapathy Vijay _ Sun Pictures _ A.R Murugadoss _ A.R. Rahman.mp4",
            thumbnail: "\'www_netflix_com/sarkar.webp'",
            genre: ["Gritty", "Emotional", "action"],
            "U/A": "A",
            content:"tobacco use, violence",
            time: "2h 35m",
            Cast: "Vadivelu, Fahadh Faasil, Keerthy Suresh",
            description: "A veteran statesman and his son are pulled into a violent power struggle when a cold-blooded political scion pursues a vengeful rise.",
            director: "Mari Selvaraj"
          },
          // hindi
          {
            name:"Jaane jaan",
            videoSource:"video/Jaane Jaan _ Official Trailer _ Kareena Kapoor Khan, Jaideep Ahlawat, Vijay Varma _ Netflix India.mp4",
            thumbnail:"\'www_netflix_com/jj.jpg\'",
            genre: ["Suspenseful", "Mystery", "thriller"],
            "U/A": "16+",
            content:"gore, sexual content, substances, suicide",
            time: "6 seasons",
            Cast: "Viola Davis, Billy Brown, Alfred Enoch",
            description: "Brilliant criminal defense attorney and law professor Annalise Keating, plus five of her students, become involved in a twisted murder case.",
            director: "Peter Nowalk"
          },
          {
            name:"Tu joothi main makkar",
            videoSource:"video/Tu Jhoothi Main Makkaar _ Official Trailer _ Ranbir Kapoor, Shraddha Kapoor _ Netflix India.mp4",
            thumbnail: "\'www_netflix_com/tuJoothi.webp\'",
            genre: ["Offbeat", "Exciting", "romance"],
            "U/A": "16+",
            content:"gore, language, tobacco use, violence",
            time: "7 Episodes",
            Cast: "Rajkummar Rao, Dulquer Salmaan, Adarsh Gourav",
            description: "In the cartel-run town of Gulaabgunj, an unprecedented opium deal pulls a big-city cop and a lovesick mechanic into its chaotic clutches.",
            director: "Raj Nidimoru, Krishna D.K."
          },
          {
            name:"Gangubai",
            videoSource:"video/Gangubai Kathiawadi _ Official Trailer_ Sanjay Leela Bhansali, Alia Bhatt, Ajay Devgn _25th Feb 2022.mp4",
            thumbnail: "\'www_netflix_com/gangubai.webp\'",
            genre: ["Nostalgic", "Charming", "drama"],
            "U/A": "13+",
            content:"language, substances, tobacco use",
            time: "20 Episodes",
            Cast: "Lee Hye-ri, Park bo-Gum, Ru Jun-yeol",
            description: "Take a nostalgic trip back to the late 1980s through the lives of five families and their five teenage kids living in a small neighborhood in Seoul.",
            director: "Shin Wom-ho, Lee Woo-jung"
          },
          {
            name:"Adipurush",
            videoSource:"video/The Vampire Diaries Season 1 Trailer.mp4",
            thumbnail: "\'www_netflix_com/adipurush.webp\'",
            genre: ["Ominous", "Bittersweet", "action"],
            "U/A": "A",
            content:"sex, violence",
            time: "8 seasons",
            Cast: "Nina Dobrey, Paul Wesley, Ian somerhalder",
            description: "Trapped in adolescent bodies, feuding vampire brothers Stefan and Damon vie for the affection of captivating teenager Elena.",
            director: "Julie Pleck, Kevin Williamson"
          },
          {
            name:"Taare jameen par",
            videoSource:"video/Adipurush (Official Trailer) Hindi _ Prabhas _ Saif Ali Khan _ Kriti Sanon _ Om Raut _ Bhushan Kumar.mp4",
            thumbnail:"\'www_netflix_com/taare.webp\'",
            genre: ["Slick", "Exciting", "action"],
            "U/A": "16+",
            content:"nudity, substances, tobacco use",
            time: "6 seasons",
            Cast: "Tom Ellis, Lauren german, Kavin Alejandro",
            description: "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.",
            director: "George Kay"
          },
          {
            name:"Dilwale",
            videoSource:"video/Dilwale Trailer _ Kajol, Shah Rukh Khan, Varun Dhawan, Kriti Sanon _ A Rohit Shetty Film.mp4",
            thumbnail: "\'www_netflix_com/dilwale.webp\'",
            genre: ["Inspiring", "Heartfelt", "romance"],
            "U/A": "16+",
            content:"gore",
            time: "20 episodes",
            Cast: "Joo won, Moon chae-won, Joo sang-wook",
            description: "A savant-like pediatric surgeon is in constant conflict with a fellow doctor -- a rivalry that heats up when they develop feelings for the same woman.",
            director: "George Kay"
          },
          {
            name:"Mission manju",
            videoSource:"video/Mission Majnu _ Sidharth Malhotra, Rashmika Mandanna _ Official Trailer _ Netflix India.mp4",
            thumbnail: "\'www_netflix_com/mm.jpg\'",
            genre: ["Inspiring", "Drama", "thriller"],
            "U/A": "16+",
            content:"naam",
            time: "2 seasons",
            Cast: "Stephen Zechariah, Alawdin Aldi, Vikneswary se",
            description: "Six bandmates from very different backgrounds navigate complicated personal lives and romances as their talent skyrockets them to musical stardom.",
            director: "T. Suriavelan"
          },
          {
            name:"83",
            videoSource:"video/83 _ Official Trailer _ Hindi _ Ranveer Singh _ Kabir Khan _ IN CINEMAS 24TH DEC.mp4",
            thumbnail: "\'www_netflix_com/83.webp\'",
            genre: ["Omnius", "Scary", "drama"],
            "U/A": "13+",
            content:"crude humor, gore, language, mature themes, threat, violence",
            time: "1h 47m",
            Cast: "Ty Simpkins, Patrick Willson, Rose Byrne",
            description: "Dalton Lambert, now in college, grapples with generational trauma when he and his father uncover repressed memories of the demon haunting their family.",
            director: "Patrick Willson"
          },
          {
              name:"Khakee",
              videoSource:"video/Khakee_ The Bihar Chapter _ Official Teaser _ Netflix India.mp4",
              thumbnail: "\'www_netflix_com/khakee.jpg\'",
              genre: ["Charming", "Quirky", "thriller"],
              "U/A": "13+",
              content:"substances, tobacco use",
              time: "2h 28m",
              Cast: "Anushka Shetty, Naveen Polishetty, Jeyasudha",
              description: "An ambitious chef starts working with a stand-up comedian and initially struggles to deal with his carefree attitude — only to unexpectedly find love.",
              director: "Mahesh Babu p."
            },
            {
              name:"Main hoon na",
              videoSource:"video/Main Hoon Na - Trailer _ Shah Rukh Khan, Sushmita Sen, Zayed Khan, Amrita Rao.mp4",
              thumbnail: "\'www_netflix_com/main hoon.webp'",
              genre: ["Gritty", "Emotional", "romance"],
              "U/A": "A",
              content:"tobacco use, violence",
              time: "2h 35m",
              Cast: "Vadivelu, Fahadh Faasil, Keerthy Suresh",
              description: "A veteran statesman and his son are pulled into a violent power struggle when a cold-blooded political scion pursues a vengeful rise.",
              director: "Mari Selvaraj"
            },
            // RID
    {
      name:"Nitham oru vaanam",
      videoSource:"video/Nitham Oru Vaanam _ Ashok Selvan _ Ritu Varma _ Aparna Balamurali _ Shivatmika Rajshekar_ Ra.Karthik.mp4",
      thumbnail:"\'www_netflix_com/nitham.webp\'",
      genre: ["Action thriller", "On the run", "romance"],
      "U/A": "16+",
      content:"gore, tobacco use, violence",
      time: "2h 16m",
      Cast: "Asif Ali, Sunny Wayne, Vinayakan",
      description: "A car crash leaves two gold smugglers without their valuable cargo. But getting it back means chasing the thief deep into Kerala's chaotic underworld.",
      director: "Mridul Nair"
    },
    {
      name:"shyam singha roy",
      videoSource:"video/Shyam Singha Roy Telugu Trailer _ Nani _ Sai Pallavi _ Krithi Shetty _ Rahul Sankrithyan.mp4",
      thumbnail: "\'www_netflix_com/shyam singa.webp\'",
      genre: ["Quirky", "Understated", "romance"],
      "U/A": "A",
      content:"sexual violence references, mature themes, suicide",
      time: "2h 35m",
      Cast: "Akshay Kumar, Pankaj Tripathi, Yami Gowtham",
      description: "A devout father takes on a dogmatic school — and his own moral beliefs — after the school expels his son over an embarrassing video that goes viral.",
      director: "Amit Rai"
    },
    {
      name:"Rangabali",
      videoSource:"video/Rangabali _ Trailer _ Naga Shaurya & Yukti Thareja _ Netflix India.mp4",
      thumbnail: "\'www_netflix_com/rangabali.webp\'",
      genre: ["Slick", "Suspenseful", "action"],
      "U/A": "16+",
      content:"language, sexual content, tobacco use, violence",
      time: "2h 37m",
      Cast: "Tabu, Ali Fazal, Wamika Gabbi",
      description: "When a mole in an intelligence unit leads to the murder of an undercover spy, a hardened agent relentlessly pursues him to avenge the death.",
      director: "Vishal Bardwaj"
    },
    {
      name:"Butta bomma",
      videoSource:"video/#ButtaBomma - Official Trailer _ Anikha Surendran,Arjun Das, Surya Vashistta _Gopi Sundar_ Shourie T.mp4",
      thumbnail: "\'www_netflix_com/bb.webp\'",
      genre: ["Adrenaline rush", "Explosive", "romance"],
      "U/A": "13+",
      content:"gore, language, violence",
      time: "2h 26m",
      Cast: "Tabu, Ali Fazal, Wamika Gabbi",
      description: "Catastrophe looms as dinosaurs live among humans in a volatile world, and heroes — both old and new — unite once more for a thrilling adventure.",
      director: "Colin Trvorrow"
    },
    {
      name:"Anjaan",
      videoSource:"video/Anjaan - Official Trailer _ Suriya, Samantha _ Yuvan Shankar Raja.mp4",
      thumbnail:"\'www_netflix_com/anjaan.webp\'",
      genre: ["Witty", "Exciting", "Mystery"],
      "U/A": "16+",
      content:"mature themes, suicide, tobacco use",
      time: "3 parts",
      Cast: "Omar Sy, Ludivine Sagnier, action",
      description: "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family..",
      director: "George Kay"
    },
    {
      name:"Ei dil hai",
      videoSource:"video/SPY x FAMILY _ Official Trailer _ Netflix.mp4",
      thumbnail: "\'www_netflix_com/ei dil hai.webp\'",
      genre: ["Slicky", "Offbeat", "romance"],
      "U/A": "16+",
      content:"substances, tobacco use",
      time: "2 seasons",
      Cast: "Takuya Eguchi, Atsume tsanezaki, Saori Hayamo",
      description: "A spy, an assassin and a telepath come together to pose as a family, each for their own reasons, while hiding their true identities from each other.",
      
    },
    {
      name:"18pages",
      videoSource: "video/18 Pages _ Official Trailer _ Nikhil Siddhartha, Anupama Parameswaran _ Netflix India.mp4",
      thumbnail: "\'www_netflix_com/18.webp\'",
      genre: ["Greusome", "Gory", "romance"],
      "U/A": "A",
      content:"language, nudity, sex, substances, suicide, violence",
      time: "8 Episodes",
      Cast: "Carla Gugino, Bruce Greenwood, Mary McDonnel",
      description: "To secure their fortune — and future — two ruthless siblings build a family dynasty that begins to crumble when their heirs mysteriously die, one by one.",
      director: "Mike Flaganan"
    },
    {
      name:"fidaa",
      videoSource: "video/Fidaa Theatrical Trailer - Varun Tej, Sai Pallavi _ Sekhar Kammula _ Dil Raju.mp4",
      thumbnail: "\'www_netflix_com/fidaa.webp\'",
      genre: ["Omnius", "Scary", "romance"],
      "U/A": "13+",
      content:"crude humor, gore, language, mature themes, threat, violence",
      time: "1h 47m",
      Cast: "Ty Simpkins, Patrick Willson, Rose Byrne",
      description: "Dalton Lambert, now in college, grapples with generational trauma when he and his father uncover repressed memories of the demon haunting their family.",
      director: "Patrick Willson"
    },
    {
        name:"World famous lover",
        videoSource:"video/#WorldFamousLover Trailer _ Vijay Deverakonda _ RaashiKhanna_Catherine_IzabelleLeite_AishwaryaRajesh.mp4",
        thumbnail: "\'www_netflix_com/wfl.webp\'",
        genre: ["Charming", "Quirky", "romance"],
        "U/A": "13+",
        content:"substances, tobacco use",
        time: "2h 28m",
        Cast: "Anushka Shetty, Naveen Polishetty, Jeyasudha",
        description: "An ambitious chef starts working with a stand-up comedian and initially struggles to deal with his carefree attitude — only to unexpectedly find love.",
        director: "Mahesh Babu p."
      },
      {
        name:"Mehendi circus",
        videoSource:"video/Mehandi Circus Trailer _ Ranga, Shweta Tripathi _ Sean Roldan _ Saravana Rajendran.mp4",
        thumbnail: "\'www_netflix_com/mc.webp'",
        genre: ["Gritty", "Emotional", "romance"],
        "U/A": "A",
        content:"tobacco use, violence",
        time: "2h 35m",
        Cast: "Vadivelu, Fahadh Faasil, Keerthy Suresh",
        description: "A veteran statesman and his son are pulled into a violent power struggle when a cold-blooded political scion pursues a vengeful rise.",
        director: "Mari Selvaraj"
      },
      // children
      {
        name:"Clifford",
        videoSource:"video/Clifford's Really Big Movie (2004) Official Trailer - John Ritter, Children's Animated Movie HD.mp4",
        thumbnail:"\'www_netflix_com/cliff.webp\'",
        genre: ["Suspenseful", "Mystery", "children"],
        "U/A": "16+",
        content:"gore, sexual content, substances, suicide",
        time: "6 seasons",
        Cast: "Viola Davis, Billy Brown, Alfred Enoch",
        description: "Brilliant criminal defense attorney and law professor Annalise Keating, plus five of her students, become involved in a twisted murder case.",
        director: "Peter Nowalk"
      },
      {
        name:"Skater Girl",
        videoSource:"video/Skater Girl _ Official Trailer _ Netflix.mp4",
        thumbnail: "\'www_netflix_com/sg.jpg\'",
        genre: ["Offbeat", "Exciting", "children"],
        "U/A": "16+",
        content:"gore, language, tobacco use, violence",
        time: "7 Episodes",
        Cast: "Rajkummar Rao, Dulquer Salmaan, Adarsh Gourav",
        description: "In the cartel-run town of Gulaabgunj, an unprecedented opium deal pulls a big-city cop and a lovesick mechanic into its chaotic clutches.",
        director: "Raj Nidimoru, Krishna D.K."
      },
      {
        name:"Slumberland",
        videoSource:"video/Slumberland _ Official Trailer _ Netflix.mp4",
        thumbnail: "\'www_netflix_com/slum.jpg\'",
        genre: ["Nostalgic", "Charming", "children"],
        "U/A": "13+",
        content:"language, substances, tobacco use",
        time: "20 Episodes",
        Cast: "Lee Hye-ri, Park bo-Gum, Ru Jun-yeol",
        description: "Take a nostalgic trip back to the late 1980s through the lives of five families and their five teenage kids living in a small neighborhood in Seoul.",
        director: "Shin Wom-ho, Lee Woo-jung"
      },
      {
        name:"Doraemon",
        videoSource:"video/Stand by me Doraemon 2 _ Official Hindi Trailer _ हिन्दी ट्रेलर.mp4",
        thumbnail: "\'www_netflix_com/doraemon.webp\'",
        genre: ["Ominous", "Bittersweet", "children"],
        "U/A": "A",
        content:"sex, violence",
        time: "8 seasons",
        Cast: "Nina Dobrey, Paul Wesley, Ian somerhalder",
        description: "Trapped in adolescent bodies, feuding vampire brothers Stefan and Damon vie for the affection of captivating teenager Elena.",
        director: "Julie Pleck, Kevin Williamson"
      },
      {
        name:"Stuart Little",
        videoSource:"video/STUART LITTLE 2 [2002] - Official Trailer (HD).mp4",
        thumbnail:"\'www_netflix_com/sl.webp\'",
        genre: ["Slick", "Exciting", "children"],
        "U/A": "16+",
        content:"nudity, substances, tobacco use",
        time: "6 seasons",
        Cast: "Tom Ellis, Lauren german, Kavin Alejandro",
        description: "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.",
        director: "George Kay"
      },
      {
        name:"Angry Birds 2",
        videoSource:"video/THE ANGRY BIRDS MOVIE 2 - Official Trailer.mp4",
        thumbnail: "\'www_netflix_com/ab.webp\'",
        genre: ["Inspiring", "Heartfelt", "children"],
        "U/A": "16+",
        content:"gore",
        time: "20 episodes",
        Cast: "Joo won, Moon chae-won, Joo sang-wook",
        description: "A savant-like pediatric surgeon is in constant conflict with a fellow doctor -- a rivalry that heats up when they develop feelings for the same woman.",
        director: "George Kay"
      },
      {
        name:"The Boss Baby",
        videoSource:"video/The Boss Baby Official Trailer 1 (2017) - Alec Baldwin Movie.mp4",
        thumbnail: "\'www_netflix_com/bb.webp\'",
        genre: ["Inspiring", "Drama", "children"],
        "U/A": "16+",
        content:"naam",
        time: "2 seasons",
        Cast: "Stephen Zechariah, Alawdin Aldi, Vikneswary se",
        description: "Six bandmates from very different backgrounds navigate complicated personal lives and romances as their talent skyrockets them to musical stardom.",
        director: "T. Suriavelan"
      },
      {
        name:"The karate kid",
        videoSource:"video/THE KARATE KID - Official Trailer (HD).mp4",
        thumbnail: "\'www_netflix_com/kk.webp\'",
        genre: ["Omnius", "Scary", "children"],
        "U/A": "13+",
        content:"crude humor, gore, language, mature themes, threat, violence",
        time: "1h 47m",
        Cast: "Ty Simpkins, Patrick Willson, Rose Byrne",
        description: "Dalton Lambert, now in college, grapples with generational trauma when he and his father uncover repressed memories of the demon haunting their family.",
        director: "Patrick Willson"
      },
      {
          name:"Pokemon",
          videoSource:"video/Pokémon_ Mewtwo Strikes Back—Evolution _ Official Trailer _ Netflix.mp4",
          thumbnail: "\'www_netflix_com/pm.jpg\'",
          genre: ["Charming", "Quirky", "children"],
          "U/A": "13+",
          content:"substances, tobacco use",
          time: "2h 28m",
          Cast: "Anushka Shetty, Naveen Polishetty, Jeyasudha",
          description: "An ambitious chef starts working with a stand-up comedian and initially struggles to deal with his carefree attitude — only to unexpectedly find love.",
          director: "Mahesh Babu p."
        },
        {
          name:"Luck",
          videoSource:"video/Luck — Official Trailer _ Apple TV+.mp4",
          thumbnail: "\'www_netflix_com/images (1).jpeg\'",
          genre: ["Gritty", "Emotional", "children"],
          "U/A": "A",
          content:"tobacco use, violence",
          time: "2h 35m",
          Cast: "Vadivelu, Fahadh Faasil, Keerthy Suresh",
          description: "A veteran statesman and his son are pulled into a violent power struggle when a cold-blooded political scion pursues a vengeful rise.",
          director: "Mari Selvaraj"
        },
        // action
        {
          name:"Doctor",
          videoSource:"video/DOCTOR - Official Trailer _ Sivakarthikeyan _ Nelson Dilipkumar _ Anirudh _ Vinay _ Yogi Babu.mp4",
          thumbnail:"\'www_netflix_com/doct.webp\'",
          genre: ["Action thriller", "On the run", "comedy"],
          "U/A": "16+",
          content:"gore, tobacco use, violence",
          time: "2h 16m",
          Cast: "Asif Ali, Sunny Wayne, Vinayakan",
          description: "A car crash leaves two gold smugglers without their valuable cargo. But getting it back means chasing the thief deep into Kerala's chaotic underworld.",
          director: "Mridul Nair"
        },
        {
          name:"kannum kannum kollai adithal",
          videoSource:"video/Kannum Kannum Kollaiyadithaal _ Second Official Trailer _ Dulquer S, Ritu V, Rakshan, Niranjani A.mp4",
          thumbnail: "\'www_netflix_com/kannum .webp\'",
          genre: ["Quirky", "Understated", "romance"],
          "U/A": "A",
          content:"sexual violence references, mature themes, suicide",
          time: "2h 35m",
          Cast: "Akshay Kumar, Pankaj Tripathi, Yami Gowtham",
          description: "A devout father takes on a dogmatic school — and his own moral beliefs — after the school expels his son over an embarrassing video that goes viral.",
          director: "Amit Rai"
        },
        {
          name:"don",
          videoSource:"video/Don - Official Trailer _ Sivakarthikeyan, Priyanka Mohan _ Anirudh _ Cibi.mp4",
          thumbnail: "\'www_netflix_com/don.webp\'",
          genre: ["Slick", "Suspenseful", "comedy"],
          "U/A": "16+",
          content:"language, sexual content, tobacco use, violence",
          time: "2h 37m",
          Cast: "Tabu, Ali Fazal, Wamika Gabbi",
          description: "Seeking a sense of purpose, a wayward college student navigates life on campus while enduring a controlling father and a disciplinarian professor.",
          director: "Vishal Bardwaj"
        },
        {
          name:"f9",
          videoSource:"video/F9 - Official Trailer [HD].mp4",
          thumbnail: "\'www_netflix_com/f9.webp\'",
          genre: ["Adrenaline rush", "Explosive", "drama"],
          "U/A": "13+",
          content:"gore, language, violence",
          time: "2h 26m",
          Cast: "Tabu, Ali Fazal, Wamika Gabbi",
          description: "Catastrophe looms as dinosaurs live among humans in a volatile world, and heroes — both old and new — unite once more for a thrilling adventure.",
          director: "Colin Trvorrow"
        },
        {
          name:"raangi",
          videoSource:"video/Raangi _ Official Trailer _ Trisha _ Netflix India.mp4",
          thumbnail:"\'www_netflix_com/raangi.webp\'",
          genre: ["Witty", "Exciting", "action"],
          "U/A": "16+",
          content:"mature themes, suicide, tobacco use",
          time: "3 parts",
          Cast: "Omar Sy, Ludivine Sagnier, Clotilde Hesme",
          description: "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family..",
          director: "George Kay"
        },
        {
          name:"Hey sinamika",
          videoSource:"video/Hey Sinamika - Trailer _ Dulquer Salmaan, Aditi Rao Hydari, Kajal Aggarwal _ Govind Vasantha, Brinda.mp4",
          thumbnail: "\'www_netflix_com/hs.webp\'",
          genre: ["Slicky", "Offbeat", "romance"],
          "U/A": "16+",
          content:"substances, tobacco use",
          time: "2 seasons",
          Cast: "Takuya Eguchi, Atsume tsanezaki, Saori Hayamo",
          description: "A spy, an assassin and a telepath come together to pose as a family, each for their own reasons, while hiding their true identities from each other.",
          
        },
        {
          name:"takkar",
          videoSource: "video/Takkar (Tamil) Teaser _ Siddharth _ Yogi Babu _Karthik G Krish _ Nivas K Prasanna_ Passion Studios.mp4",
          thumbnail: "\'www_netflix_com/takkar.webp\'",
          genre: ["Greusome", "Gory", "romance"],
          "U/A": "A",
          content:"language, nudity, sex, substances, suicide, violence",
          time: "8 Episodes",
          Cast: "Carla Gugino, Bruce Greenwood, Mary McDonnel",
          description: "To secure their fortune — and future — two ruthless siblings build a family dynasty that begins to crumble when their heirs mysteriously die, one by one.",
          director: "Mike Flaganan"
        },
        {
          name:"love today",
          videoSource: "video/Love Today - Official Trailer _ Pradeep Ranganathan _ Yuvan Shankar Raja _ AGS.mp4",
          thumbnail: "\'www_netflix_com/lt.webp\'",
          genre: ["Omnius", "Scary", "romance"],
          "U/A": "13+",
          content:"crude humor, gore, language, mature themes, threat, violence",
          time: "1h 47m",
          Cast: "Ty Simpkins, Patrick Willson, Rose Byrne",
          description: "Dalton Lambert, now in college, grapples with generational trauma when he and his father uncover repressed memories of the demon haunting their family.",
          director: "Patrick Willson"
        },
        {
            name:"Beeshma",
            videoSource:"video/Bheeshma Theatrical Trailer _ Nithiin, Rashmika Mandanna _ Venky Kudumula.mp4",
            thumbnail: "\'www_netflix_com/beeshma.webp\'",
            genre: ["Charming", "Quirky", "romance"],
            "U/A": "13+",
            content:"substances, tobacco use",
            time: "2h 28m",
            Cast: "Anushka Shetty, Naveen Polishetty, Jeyasudha",
            description: "An ambitious chef starts working with a stand-up comedian and initially struggles to deal with his carefree attitude — only to unexpectedly find love.",
            director: "Mahesh Babu p."
          },
          {
            name:"Theera kadhal",
            videoSource:"video/Theera Kaadhal Official Trailer_ Jai, Aishwarya Rajesh, Sshivada_Siddhu Kumar_Rohin Venkatesan_ Lyca.mp4",
            thumbnail: "\'www_netflix_com/tk.webp'",
            genre: ["Gritty", "Emotional", "romance"],
            "U/A": "A",
            content:"tobacco use, violence",
            time: "2h 35m",
            Cast: "Vadivelu, Fahadh Faasil, Keerthy Suresh",
            description: "A veteran statesman and his son are pulled into a violent power struggle when a cold-blooded political scion pursues a vengeful rise.",
            director: "Mari Selvaraj"
          },
          
    
    
]






document.getElementsByClassName('showPrev')[0].style.transform = "scale(0)";
document.getElementById('testPreview').style.transform = 'scale(0)'
window.addEventListener('load', () => {
    document.getElementsByClassName('showPrev')[0].style.transform = "scale(1)";
    document.getElementsByClassName('showPrev')[0].style.transition = "1s";
    document.getElementById('testPreview').style.transform = "scale(1)";
    document.getElementById('testPreview').style.transition = "1s"
})
var movieName = document.getElementsByTagName('h1')[0];
var movieCont = document.getElementById('cont');
var desc = localStorage.getItem("description");
var Img = localStorage.getItem("bg");
var nameOfMovie = localStorage.getItem("nameId");
movieName.innerText = nameOfMovie;
movieCont.innerText = desc;
document.getElementsByClassName('showPrev')[0].style.backgroundImage = 'url(' + Img + ')';
document.getElementById("watch").addEventListener('click', () => window.location.href = 'movie.html');
document.getElementsByClassName('fa-arrow-left')[0].addEventListener('click', () => {
    window.location.href = 'mainPage.html';
})


// related movie show

var genreList = ['thriller', 'comedy', 'fantasy', 'action', 'anime', 'horror', 'drama', 'romance', 'children'];
var genNow = localStorage.getItem('gen').split(',')[2];
var row = document.createElement("div");
      row.className="carouselDiv";
      row.id = "tv";
      variousMovie.appendChild(row);
      if(genNow == 'thriller'){
         for(i=0; i<movie.length; i++){
         if(movie[i].genre[2] == 'thriller'){
        
    //   row.innerText = title[1] + '\n';
          var rowItem = document.createElement("div");
          rowItem.className = "movieDiv";
          rowItem.id = movie[i].name;
          // localStorage.setItem("videoURl",movie[j].videoSource);
          rowItem.className = "rwItm";
          row.appendChild(rowItem);
          rowItem.style.backgroundImage = 'url('+movie[i].thumbnail+')';
          rowItem.style.backgroundSize = "100% 100%";
      
    }
}
      }
      else if(genNow == 'comedy'){
        for(i=0; i<movie.length; i++){
         if(movie[i].genre[2] == 'comedy'){
        
    //   row.innerText = title[1] + '\n';
          var rowItem = document.createElement("div");
          rowItem.className = "movieDiv";
          rowItem.id = movie[i].name;
          // localStorage.setItem("videoURl",movie[j].videoSource);
          rowItem.className = "rwItm";
          row.appendChild(rowItem);
          rowItem.style.backgroundImage = 'url('+movie[i].thumbnail+')';
          rowItem.style.backgroundSize = "100% 100%";
         }
    }
      }
      else if(genNow == 'fantasy'){
        for(i=0; i<movie.length; i++){
         if(movie[i].genre[2] == 'fantasy'){
        
    //   row.innerText = title[1] + '\n';
          var rowItem = document.createElement("div");
          rowItem.className = "movieDiv";
          rowItem.id = movie[i].name;
          // localStorage.setItem("videoURl",movie[j].videoSource);
          rowItem.className = "rwItm";
          row.appendChild(rowItem);
          rowItem.style.backgroundImage = 'url('+movie[i].thumbnail+')';
          rowItem.style.backgroundSize = "100% 100%";
         }
    }
      }
      else if(genNow == 'action'){
        for(i=0; i<movie.length; i++){
         if(movie[i].genre[2] == 'action'){
        
    //   row.innerText = title[1] + '\n';
          var rowItem = document.createElement("div");
          rowItem.className = "movieDiv";
          rowItem.id = movie[i].name;
          // localStorage.setItem("videoURl",movie[j].videoSource);
          rowItem.className = "rwItm";
          row.appendChild(rowItem);
          rowItem.style.backgroundImage = 'url('+movie[i].thumbnail+')';
          rowItem.style.backgroundSize = "100% 100%";
         }
    }
      }
      else if(genNow == 'anime'){
        for(i=0; i<movie.length; i++){
         if(movie[i].genre[2] == 'anime'){
        
    //   row.innerText = title[1] + '\n';
          var rowItem = document.createElement("div");
          rowItem.className = "movieDiv";
          rowItem.id = movie[i].name;
          // localStorage.setItem("videoURl",movie[j].videoSource);
          rowItem.className = "rwItm";
          row.appendChild(rowItem);
          rowItem.style.backgroundImage = 'url('+movie[i].thumbnail+')';
          rowItem.style.backgroundSize = "100% 100%";
         }
    }
      }
      else if(genNow == 'horror'){
        for(i=0; i<movie.length; i++){
         if(movie[i].genre[2] == 'horror'){
        
    //   row.innerText = title[1] + '\n';
          var rowItem = document.createElement("div");
          rowItem.className = "movieDiv";
          rowItem.id = movie[i].name;
          // localStorage.setItem("videoURl",movie[j].videoSource);
          rowItem.className = "rwItm";
          row.appendChild(rowItem);
          rowItem.style.backgroundImage = 'url('+movie[i].thumbnail+')';
          rowItem.style.backgroundSize = "100% 100%";
         }
    }
      }
      else if(genNow == 'drama'){
        for(i=0; i<movie.length; i++){
         if(movie[i].genre[2] == 'drama'){
        
    //   row.innerText = title[1] + '\n';
          var rowItem = document.createElement("div");
          rowItem.className = "movieDiv";
          rowItem.id = movie[i].name;
          // localStorage.setItem("videoURl",movie[j].videoSource);
          rowItem.className = "rwItm";
          row.appendChild(rowItem);
          rowItem.style.backgroundImage = 'url('+movie[i].thumbnail+')';
          rowItem.style.backgroundSize = "100% 100%";
         }
    }
      }
      else if(genNow == 'romance'){
        for(i=0; i<movie.length; i++){
         if(movie[i].genre[2] == 'romance'){
        
    //   row.innerText = title[1] + '\n';
          var rowItem = document.createElement("div");
          rowItem.className = "movieDiv";
          rowItem.id = movie[i].name;
          // localStorage.setItem("videoURl",movie[j].videoSource);
          rowItem.className = "rwItm";
          row.appendChild(rowItem);
          rowItem.style.backgroundImage = 'url('+movie[i].thumbnail+')';
          rowItem.style.backgroundSize = "100% 100%";
         }
    }
      }
      else if(genNow == 'children'){
        for(i=0; i<movie.length; i++){
         if(movie[i].genre[2] == 'children'){
        
    //   row.innerText = title[1] + '\n';
          var rowItem = document.createElement("div");
          rowItem.className = "movieDiv";
          rowItem.id = movie[i].name;
          // localStorage.setItem("videoURl",movie[j].videoSource);
          rowItem.className = "rwItm";
          row.appendChild(rowItem);
          rowItem.style.backgroundImage = 'url('+movie[i].thumbnail+')';
          rowItem.style.backgroundSize = "100% 100%";
         }
    }
      }



    //   onclick functionality

    var rwItm = document.getElementsByClassName('rwItm');
  
  // document.getElementById("preview").style.display="none";
  document.getElementById("preview").style.transform="scale(0)";
  document.getElementById("preview").style.transition = '.6s ease opacity,.6s ease transform';
  for (var Itm of rwItm) {
    Itm.addEventListener('mouseover', (e)=> {e.target.style.transform = "translateY(-40px)";
    e.target.style.transition = '.5s'});
    Itm.addEventListener('mouseout', (e)=> {e.target.style.transform = "translateY(0px)";
    e.target.style.transition = '.5s'})
    Itm.addEventListener("click",(e)=> {
      // document.getElementById("preview").style.display="";
      document.getElementById("preview").style.transform="scale(1)";
      document.getElementById("preview").style.opacity = '0.5'
      function smoothShow(){
        document.getElementById("preview").style.opacity = '1';
        document.getElementById("preview").style.transition = '1s'
      }
      setTimeout(smoothShow, 500);
      // document.getElementById("preview").style.transition = '3s'
      // localStorage.setItem('gen', e.target.genre)
      console.log(e.target.id);
      var idOfElement = e.target.id;
      localStorage.setItem("idElem",e.target.id);
      for (var ele of movie){
          if(ele.name == idOfElement){
            var bgImg = ele.thumbnail;
            var sourceVideo = ele.videoSource;
            var time = ele.time;
            var genre = ele.genre;
            var description = ele.description;
            var cast = ele.Cast;
            var director = ele.director;
            var content = ele.content;
            console.log(sourceVideo);
          }
      }
      localStorage.setItem("gen",genre);
      localStorage.setItem("bg",bgImg);
      localStorage.setItem("nameId",idOfElement);
      localStorage.setItem("description",description);
      localStorage.setItem("videoUrl",sourceVideo);
      // window.location.href='movie.html';
      var timing = document.getElementById("time");
      var cont = document.getElementById("content");
      var descript = document.getElementById("descrip");
      var movieCast = document.getElementById("cast");
      var direction = document.getElementById("director");
      var movieTrailer = document.getElementById("movieTrailer");
      var genreMovie = document.getElementById("genre");
      timing.innerText = time;
      cont.innerText = content;
      descript.innerText = description;
      movieCast.innerText = cast;
      direction.innerText = director;
      genreMovie.innerText = genre;
      document.getElementById("movieTrailer").src = sourceVideo;
    } );
  }
  document.getElementById("movieTrailer").addEventListener('click',()=> window.location.href='moviePreview.html')
 var previewClose = document.getElementById("preview");
 var vidOff = document.getElementById("movieTrailer");
  previewClose.addEventListener('click', ()=>{
    previewClose.style.transform="scale(0)";
    vidOff.pause();
  } )
