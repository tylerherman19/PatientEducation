/*
 * Patient Education Generator - locked content.
 *
 * This file defines two global constants used by index.html:
 *   CLINICS - the five clinic locations (replace the placeholder fields below)
 *   CONTENT - the patient education content, organized by diagnosis and
 *             handout variant.
 *
 * No backend, no API calls. Everything below is plain data.
 */

const CLINICS = [
  {
    id: "clinic1",
    name: "St. Paul, MN Pain Clinic",
    address: "2550 University Ave W, Suite 189S",
    cityStateZip: "St. Paul, Minnesota 55414",
    phone: "(763) 233-7252",
    fax: "(763) 577-1375",
    hours: [
      "Monday: 8:00AM – 5:00PM",
      "Tuesday: 8:00AM – 5:00PM",
      "Wednesday: 8:00AM – 5:00PM",
      "Thursday: 8:00AM – 5:00PM",
      "Friday: 8:00AM – 5:00PM"
    ],
    cta: "Schedule A Visit",
    website: "WWW.MHNPC.COM"
  },
  {
    id: "clinic2",
    name: "Plymouth, MN Pain Clinic",
    address: "3475 Plymouth Blvd, Suite 200",
    cityStateZip: "Plymouth, Minnesota 55447",
    phone: "(763) 233-7252",
    fax: "(763) 577-1375",
    hours: [
      "Monday: 7:00AM – 5:00PM",
      "Tuesday: 8:00AM – 5:00PM",
      "Wednesday: 8:00AM – 5:00PM",
      "Thursday: 8:00AM – 7:00PM",
      "Friday: 8:00AM – 2:00PM"
    ],
    cta: "Schedule A Visit",
    website: "WWW.MHNPC.COM"
  },
  {
    id: "clinic3",
    name: "Burnsville, MN Pain Clinic",
    address: "675 East Nicollet Blvd, Suite 255",
    cityStateZip: "Burnsville, Minnesota 55337",
    phone: "(763) 233-7252",
    fax: "(763) 577-1375",
    hours: [
      "Monday: 7:00AM – 5:00PM",
      "Tuesday: 8:00AM – 7:00PM",
      "Wednesday: 7:00AM – 5:00PM",
      "Thursday: 8:00AM – 7:00PM",
      "Friday: 7:00AM – 2:00PM"
    ],
    cta: "Schedule A Visit",
    website: "WWW.MHNPC.COM"
  },
  {
    id: "clinic4",
    name: "St. Cloud Outreach",
    address: "622 Roosevelt Road, Suite 120",
    cityStateZip: "St. Cloud, Minnesota 56301",
    phone: "(763) 233-7252",
    fax: "(763) 577-1375",
    hours: ["Open every Monday: 9:00AM – 4:00PM"],
    cta: "Schedule A Visit",
    website: "WWW.MHNPC.COM"
  },
  {
    id: "clinic5",
    name: "Woodbury Outreach Clinic",
    address: "3100 Woodbury Dr",
    cityStateZip: "Woodbury, MN 55129",
    phone: "(651) 332-7474",
    fax: "(651) 332-7475",
    hours: ["Open every Friday: 9:00AM – 4:00PM"],
    cta: "Schedule A Visit",
    website: "WWW.MHNPC.COM"
  }
];

const VARIANT_LABELS = {
  general: "General Overview",
  selfCare: "Self-Care Instructions",
  firstAppointment: "After First Appointment",
  homeCare: "Home Care Focus"
};

const CONTENT = {

  /* ------------------------------------------------------------------ */
  /* 1. Jaw Pain, TMJ, and TMD                                          */
  /* ------------------------------------------------------------------ */
  tmd_tmj: {
    id: "tmd_tmj",
    label: "Jaw Pain, TMJ, and TMD",
    title: "Self-Care Guide for Jaw Pain, TMJ, and TMD",
    variants: {
      general: {
        intro: [
          "Your jaw joint connects your lower jaw to your skull. When this joint or the muscles around it become sore, you may feel pain in your jaw, ear, or temple. You might also hear clicking or feel your jaw catch.",
          "Many things can cause this pain, such as stress, clenching, grinding, posture, and certain foods. The good news is that small daily habits can help your jaw heal and feel better over time."
        ],
        tips: [
          { heading: "Rest Your Jaw", body: "Give your jaw a break each day. Try not to chew gum, bite your nails, or take big bites. Avoid wide yawning and long phone calls when you can. Keep your teeth slightly apart with your lips closed. Rest helps tight muscles calm down." },
          { heading: "Eat Softer Foods", body: "During a flare, choose soft foods like eggs, yogurt, soup, pasta, and cooked vegetables. Cut other foods into small pieces. Skip hard, chewy, or crunchy foods such as bagels, raw carrots, jerky, and ice. This lets your jaw rest while you eat." },
          { heading: "Use Heat or Cold", body: "Warm a moist cloth and hold it on sore jaw muscles for 10 to 15 minutes. Heat helps tight muscles relax. For sharp pain or swelling, try a cold pack wrapped in a thin towel for about 10 minutes. Use whichever one feels better to you." },
          { heading: "Check Your Posture", body: "Sit and stand with your head over your shoulders, not pushed forward. When you use a phone or computer, raise the screen to eye level. Good posture takes pressure off your jaw and neck. A small reminder on your phone can help you check in often." },
          { heading: "Find a Rest Position", body: "Try this through the day: tongue resting lightly on the roof of your mouth, teeth apart, lips closed. This is the jaw rest position. It keeps your jaw muscles from working when they do not need to. Check in with yourself often until it feels normal." },
          { heading: "Manage Stress and Clenching", body: "Many people clench their teeth when stressed and do not know it. Pause a few times each day and notice your jaw. If your teeth are touching, let them part. Slow breathing, short walks, and gentle stretching can lower the stress that leads to clenching." },
          { heading: "Mind Your Sleep Position", body: "Sleep on your back or side with a pillow that supports your neck. Try not to sleep on your stomach with your face pressed into the pillow. Avoid resting your chin on your hand during the day. These habits keep your jaw in a neutral position." },
          { heading: "Limit Caffeine and Alcohol", body: "Caffeine can make muscles tighter and raise stress in the body. Alcohol can change sleep in a way that leads to more grinding. Try to cut back on both, especially in the afternoon and evening. Drink water through the day. Small changes here can ease jaw pain." }
        ],
        whenToCall: [
          "Your pain gets worse or does not improve after two weeks of steady self-care.",
          "You cannot open your mouth normally, or your jaw locks open or closed.",
          "Your bite suddenly feels different or your teeth do not meet the way they used to.",
          "You have swelling, fever, or a sore that will not heal near your jaw.",
          "Pain is keeping you from eating, sleeping, or working."
        ],
        closing: "Most jaw pain can improve with steady care. Small daily changes can make a real difference."
      },
      selfCare: {
        intro: [
          "Jaw pain often comes from tired muscles and a sore joint. Daily habits are one of the strongest tools you have to feel better.",
          "The steps below focus on what you can do at home. Try a few each day. Small, steady actions add up faster than one big change."
        ],
        tips: [
          { heading: "Rest Your Jaw", body: "Build short jaw breaks into your day. Avoid chewing gum, biting nails, and taking big bites of food. Skip wide yawning when you can. Keep your teeth a little apart with your lips closed. Treat your jaw the way you would a sore ankle." },
          { heading: "Choose Softer Foods", body: "Pick soft foods like eggs, yogurt, soup, pasta, and cooked vegetables during sore days. Cut other foods into small pieces. Stay away from hard, chewy, or crunchy foods. Save bagels, jerky, raw carrots, and ice for when your jaw feels strong again." },
          { heading: "Apply Heat or Cold", body: "Use a warm, moist cloth on sore jaw muscles for 10 to 15 minutes. Heat eases tight muscles. For sharp pain or swelling, use a cold pack wrapped in a thin towel for about 10 minutes. Try both on different days and use the one that helps most." },
          { heading: "Sit Up Tall", body: "Keep your head stacked over your shoulders through the day. Raise your phone and screen to eye level so you are not looking down for long. Good posture lowers the load on your jaw and neck. Set a reminder a few times a day to reset." },
          { heading: "Use the Rest Position", body: "Practice this many times each day: tongue lightly on the roof of your mouth, teeth apart, lips closed. This trains your jaw muscles to relax. It feels odd at first. After a week or two, your jaw will start to settle there on its own." },
          { heading: "Lower Stress and Clenching", body: "Notice your jaw a few times each day. If your teeth are touching, let them part. Try slow breathing for one minute. Short walks, light stretches, and time away from screens also help. Less stress means less clenching, and less clenching means less pain." },
          { heading: "Protect Sleep", body: "Sleep on your back or side. Use a pillow that supports your neck. Try not to sleep with your face pressed into the pillow. During the day, do not rest your chin on your hand. These small habits keep your jaw in a calm, neutral spot." },
          { heading: "Watch Caffeine and Alcohol", body: "Coffee, tea, and energy drinks can tighten muscles. Alcohol can lead to more grinding at night. Cut back, especially after lunch. Drink water through the day. You do not have to give them up to see a change. Small cuts make a real difference." }
        ],
        whenToCall: [
          "Your pain gets worse or does not improve after two weeks of steady self-care.",
          "You cannot open your mouth normally, or your jaw locks open or closed.",
          "Your bite suddenly feels different or your teeth do not meet the way they used to.",
          "You have swelling, fever, or a sore that will not heal near your jaw.",
          "Pain is keeping you from eating, sleeping, or working."
        ],
        closing: "Daily care is your best tool. Be patient with your jaw, and give these steps a few weeks to work."
      },
      firstAppointment: {
        intro: [
          "Thank you for coming in today. Now that we have met and talked about your jaw, here is what to focus on after today's visit.",
          "These steps are meant to support the plan we made together. Keep this guide where you can see it. Bring it to your next visit and we can review what is helping."
        ],
        tips: [
          { heading: "Rest Your Jaw", body: "Start today by giving your jaw short breaks. Skip gum, nail biting, and big bites. Avoid wide yawning when you can. Keep teeth a little apart with lips closed. This rest is the base of your treatment plan and lets healing begin." },
          { heading: "Eat Softer Foods This Week", body: "For the first one to two weeks, stick with soft foods like eggs, yogurt, soup, pasta, and cooked vegetables. Cut harder foods small. Skip bagels, jerky, raw carrots, and ice for now. We can revisit your food list at your next visit." },
          { heading: "Use Heat or Cold Daily", body: "Place a warm, moist cloth on sore jaw muscles for 10 to 15 minutes, once or twice a day. If you have sharp pain or swelling, try a cold pack wrapped in a thin towel for 10 minutes. Use whichever one feels better to you." },
          { heading: "Reset Your Posture", body: "Through the day, stack your head over your shoulders. Raise screens to eye level. Take short standing breaks. The neck and jaw work as a team, and small posture changes will help the work we are doing in the clinic." },
          { heading: "Practice the Rest Position", body: "Many times each day, place your tongue lightly on the roof of your mouth, keep your teeth apart, and close your lips. This is the rest position we showed you. Practicing now will help your jaw learn this new habit." },
          { heading: "Watch for Clenching", body: "Set a phone reminder to check your jaw a few times each day. If your teeth are touching, let them part. Slow breathing and short walks help lower stress. Less stress means less clenching, which supports your healing." },
          { heading: "Protect Your Sleep", body: "Sleep on your back or side with a pillow that supports your neck. Try not to sleep face down. During the day, do not lean your chin on your hand. If you were given a night appliance, wear it as we discussed." },
          { heading: "Limit Caffeine and Alcohol", body: "Until your next visit, cut back on coffee, tea, and energy drinks, especially in the afternoon. Limit alcohol in the evening. Drink water through the day. These small changes can lower muscle tension and help the rest of your plan work better." }
        ],
        whenToCall: [
          "Your pain gets worse or does not improve in the next two weeks.",
          "You cannot open your mouth normally, or your jaw locks open or closed.",
          "Your bite suddenly feels different or your teeth do not meet the way they used to.",
          "You have swelling, fever, or a sore that will not heal near your jaw.",
          "You have questions about your treatment plan or the steps in this guide."
        ],
        closing: "We are partners in your care. Follow these steps, and we will review your progress together at your next visit."
      },
      homeCare: {
        intro: [
          "These are direct steps you can use at home for jaw pain. Do as many as you can each day.",
          "Pick a few to start. Build the rest in over the next week. Steady habits work better than big efforts."
        ],
        tips: [
          { heading: "Rest Your Jaw", body: "Skip gum and nail biting. Take small bites. Avoid wide yawning. Keep teeth a little apart with lips closed. Give your jaw the same rest you would give a sore muscle in your arm or leg. Build short jaw breaks into your day." },
          { heading: "Eat Soft Foods", body: "Stick with soft foods: eggs, yogurt, soup, pasta, cooked vegetables, soft fish. Cut other food small. Skip bagels, jerky, raw carrots, ice, and hard candy for now. Soft food does not mean boring. It just means easier on your jaw for a while." },
          { heading: "Apply Heat or Cold", body: "Use a warm, moist cloth on sore muscles for 10 to 15 minutes. For sharp pain or swelling, use a cold pack wrapped in a thin towel for 10 minutes. Do this once or twice a day. Pick whichever one helps you most." },
          { heading: "Stack Head Over Shoulders", body: "Sit and stand with your head over your shoulders, not jutted forward. Raise screens to eye level. Take a short standing break each hour. Good posture lowers the pull on your jaw and neck muscles right away." },
          { heading: "Use the Rest Position", body: "Tongue light on the roof of your mouth, teeth apart, lips closed. Do this often. Set a phone reminder if it helps. Over time, your jaw will rest there on its own. This is one of the simplest and strongest steps you can take." },
          { heading: "Unclench and Breathe", body: "Check your jaw a few times each day. If your teeth are touching, let them part. Take three slow breaths. Drop your shoulders. Move on. This 30-second reset is the easiest stress and clenching tool you have." },
          { heading: "Sleep on Your Back or Side", body: "Skip stomach sleeping. Use a pillow that supports your neck. Do not rest your chin on your hand during the day. These habits keep your jaw in a calm position while you rest and heal." },
          { heading: "Cut Caffeine and Alcohol", body: "Cut back on coffee, tea, and energy drinks after lunch. Limit alcohol at night, especially in the hours before bed. Drink water through the day. These small cuts can lower muscle tension and help your jaw feel better over a week or two." }
        ],
        whenToCall: [
          "Pain gets worse or does not improve after two weeks.",
          "You cannot open your mouth normally, or your jaw locks.",
          "Your bite feels suddenly different.",
          "You have swelling, fever, or a sore near your jaw that will not heal.",
          "Pain is keeping you from eating, sleeping, or working."
        ],
        closing: "Small, steady steps work. Keep at it, and call us if things change."
      }
    }
  },

  /* ------------------------------------------------------------------ */
  /* 2. Migraines                                                       */
  /* ------------------------------------------------------------------ */
  migraines: {
    id: "migraines",
    label: "Migraines",
    title: "Self-Care Guide for Migraines",
    variants: {
      general: {
        intro: [
          "A migraine is more than a bad headache. It can bring strong head pain, a sick stomach, and a need for a quiet, dark room. Some people see flashing lights or feel off before the pain starts.",
          "Migraines have many triggers, like missed sleep, missed meals, stress, dehydration, and weather changes. Steady daily habits make migraines less common and often less strong when they do come."
        ],
        tips: [
          { heading: "Keep a Steady Sleep Schedule", body: "Go to bed and wake up at the same time each day, even on weekends. Aim for seven to nine hours. Skip late screen time. Keep your room cool and dark. Steady sleep is one of the most powerful ways to lower migraine days." },
          { heading: "Eat Regular Meals", body: "Try not to skip meals. Eat three meals or smaller meals plus snacks across the day. Include some protein. Long gaps without food can trigger a migraine. A simple snack in your bag or desk can help keep your blood sugar steady." },
          { heading: "Drink Enough Water", body: "Aim for steady water through the day, not just one big drink. A good goal is to keep your urine pale yellow. Dehydration is a common migraine trigger. Carry a water bottle, and refill it a few times. Limit drinks that pull water out of your body." },
          { heading: "Watch Caffeine", body: "Caffeine in small, steady amounts can help some people. Too much, or sudden drops, can trigger migraines. If you drink coffee or tea, try to have the same amount each day. Avoid adding a late afternoon cup, since it can hurt your sleep that night." },
          { heading: "Track Your Triggers", body: "Use a notebook or phone app to log each migraine. Write down what you ate, slept, and did the day before. Over a few weeks, patterns appear. Common triggers include aged cheeses, red wine, processed meats, stress, and bright lights. Bring your log to visits." },
          { heading: "Manage Stress", body: "Stress is one of the most common migraine triggers. Build short breaks into your day. Try slow breathing, a short walk, or quiet time. Even a five-minute pause helps. The goal is not zero stress, but small, steady ways to let it out before it builds up." },
          { heading: "Move Most Days", body: "Light exercise such as walking, swimming, or gentle yoga can lower migraine days. Aim for 20 to 30 minutes most days. Start slow if you are new to it. Avoid intense effort during a migraine. Steady, gentle movement works better than rare hard workouts." },
          { heading: "Plan for Attacks", body: "Have a plan ready. When a migraine starts, move to a cool, dark, quiet room if you can. Drink water. Use any medicine your provider has given you, and use it early. The sooner you treat a migraine, the better it usually responds." }
        ],
        whenToCall: [
          "Your worst headache ever, or a headache that comes on like a thunderclap.",
          "Migraines are getting more often, stronger, or different from your usual ones.",
          "You have new weakness, numbness, trouble speaking, or vision loss with a headache.",
          "A fever, stiff neck, rash, or confusion comes with your headache.",
          "Your usual medicines are no longer helping, or you need them many days each week."
        ],
        closing: "Migraines can be managed. Daily habits and a clear plan often bring real relief over time."
      },
      selfCare: {
        intro: [
          "The best migraine plan blends what your provider gives you with steady daily habits. The steps below focus on what you can do at home to lower migraine days.",
          "Pick a few to work on this week. Build the rest in over time. Small, steady changes work better than one big push."
        ],
        tips: [
          { heading: "Protect Your Sleep", body: "Set the same bedtime and wake time every day, even on weekends. Aim for seven to nine hours. Keep your room cool and dark. Stop screens 30 minutes before bed. Sleep is a strong medicine for migraines, and a steady pattern matters more than catch-up sleep." },
          { heading: "Eat on a Schedule", body: "Plan three meals, or smaller meals with snacks, across the day. Add some protein to each. Do not let yourself get too hungry. Pack a snack like nuts, cheese, or fruit for busy days. Steady fuel keeps migraine triggers down." },
          { heading: "Hydrate All Day", body: "Drink water through the day, not just when you feel thirsty. Aim for pale yellow urine. Carry a water bottle and refill it a few times. Cut back on drinks with a lot of sugar or alcohol, which can pull water out of your body." },
          { heading: "Keep Caffeine Steady", body: "If you drink coffee or tea, have about the same amount each day. Skip late afternoon caffeine so it does not hurt your sleep. Sudden changes in caffeine, up or down, can trigger a migraine. If you want to cut back, do it slowly over weeks." },
          { heading: "Find Your Triggers", body: "Keep a simple log. After each migraine, write down what you ate, drank, slept, and did the day before. Over time you will see patterns. Common triggers are red wine, aged cheese, processed meats, missed sleep, and stress. Avoid yours when you can." },
          { heading: "Lower Stress in Small Doses", body: "Stress builds up quickly when life is busy. Take short breaks each day. Try slow breathing for one minute, a walk outside, or a quiet pause with no screen. The goal is small, steady release valves, not a perfect calm life." },
          { heading: "Move Gently", body: "Walk, swim, or do gentle yoga for 20 to 30 minutes most days. Start slow if you are new to it. Skip hard workouts during a migraine. Steady, easy movement lowers migraine days for many people. Do what fits your life so you can keep it up." },
          { heading: "Have an Attack Plan", body: "Know what to do when a migraine starts. Go to a cool, dark, quiet room. Drink water. Take any medicine your provider has given you, and take it early. Tell people around you what you need. Acting fast often makes the attack shorter." }
        ],
        whenToCall: [
          "Your worst headache ever, or one that comes on like a thunderclap.",
          "Migraines are getting more often, stronger, or different from before.",
          "You have new weakness, numbness, trouble speaking, or vision loss.",
          "A fever, stiff neck, rash, or confusion comes with your headache.",
          "Your usual medicines are no longer helping, or you need them many days each week."
        ],
        closing: "Daily care lowers migraine days for most people. Give these steps a few weeks to show what they can do."
      },
      firstAppointment: {
        intro: [
          "Thank you for coming in today. Now that we have talked about your migraines, here is what to focus on after today's visit.",
          "Use this guide along with the plan we made. Keep it where you can see it. Bring it to your next visit and we will review what is helping and what to change."
        ],
        tips: [
          { heading: "Lock In Your Sleep", body: "Starting tonight, set the same bedtime and wake time every day. Aim for seven to nine hours. Keep your room cool and dark. Stop screens 30 minutes before bed. Steady sleep is one of the strongest things we can change between visits." },
          { heading: "Eat at Regular Times", body: "Eat three meals, or smaller meals with snacks, each day. Add some protein. Do not let yourself get too hungry. Keep a snack like nuts or fruit nearby on busy days. Skipping meals is a common trigger and one we can fix together." },
          { heading: "Drink Water Through the Day", body: "Carry a water bottle and refill it a few times. Aim for pale yellow urine. Cut back on sugary drinks and alcohol. Steady hydration helps lower migraine days, and it costs you nothing to try this week." },
          { heading: "Keep Caffeine Steady", body: "If you use caffeine, keep the same daily amount. Skip caffeine after lunch. If you want to cut back, lower it slowly over a few weeks. Tell us at your next visit what changed, so we can see how it affected your migraines." },
          { heading: "Start a Trigger Log", body: "After each migraine, write down what you ate, drank, slept, and did the day before. Use a notebook or your phone. Bring the log to your next visit. We will look at it with you and find patterns you can use." },
          { heading: "Build In Stress Breaks", body: "Plan small daily breaks. Try slow breathing, a short walk, or quiet time without a screen. These are not extras. They are part of your migraine plan. Even five minutes a few times a day will help." },
          { heading: "Move Most Days", body: "Aim for 20 to 30 minutes of light movement most days, like walking, swimming, or gentle yoga. Start slow. Skip hard workouts during a migraine. Steady, easy movement lowers migraine days and supports the medical part of your plan." },
          { heading: "Use Your Attack Plan", body: "When a migraine starts, go to a cool, dark, quiet room. Drink water. Take any medicine we prescribed early in the attack, not after the pain has peaked. Note what helped. Share that with us at your next visit so we can fine-tune your plan." }
        ],
        whenToCall: [
          "Your worst headache ever, or one that comes on like a thunderclap.",
          "Migraines get more often, stronger, or different from before.",
          "You have new weakness, numbness, trouble speaking, or vision loss with a headache.",
          "You have fever, stiff neck, rash, or confusion with a headache.",
          "You are using your rescue medicine more than two or three days a week."
        ],
        closing: "We will work on this together. Try these steps until your next visit, and bring your notes with you."
      },
      homeCare: {
        intro: [
          "These are direct steps to lower migraine days. Use as many as you can each day.",
          "Pick three to start. Add more over the next two weeks. Steady habits beat short bursts of effort."
        ],
        tips: [
          { heading: "Same Sleep Times", body: "Same bedtime and wake time every day. Seven to nine hours. Cool, dark room. No screens 30 minutes before bed. Steady sleep is your strongest tool. Even one or two off nights can set off a migraine, so protect this every day." },
          { heading: "Do Not Skip Meals", body: "Three meals, or smaller meals with snacks. Include some protein. Pack a snack like nuts, cheese, or fruit. Do not let yourself get too hungry. Steady fuel keeps your blood sugar level, which lowers migraine risk." },
          { heading: "Drink Water Often", body: "Sip water through the day. Aim for pale yellow urine. Cut back on sugary drinks and alcohol. Keep a water bottle in sight at home and work. Dehydration is one of the easiest triggers to fix." },
          { heading: "Steady Caffeine", body: "Same amount of coffee or tea each day. None after lunch. To cut back, lower it slowly over weeks. Sudden changes can trigger a migraine, so avoid stop-and-start patterns. Track your daily cups in a note and watch for headaches after big swings up or down." },
          { heading: "Track Each Attack", body: "After each migraine, jot down what you ate, drank, slept, and did the day before. A notebook or phone note works fine. Bring it to your visits. Patterns show up after a few weeks, and the log gives us something to work with together." },
          { heading: "Short Stress Breaks", body: "Build two or three short breaks into your day. One minute of slow breathing. A short walk outside. Quiet time off screens. Do not wait until you are overloaded. Small breaks scattered through the day beat one long break later, and they lower migraine risk." },
          { heading: "Move Lightly Most Days", body: "Walk, swim, or do gentle yoga for 20 to 30 minutes most days. Start slow. Skip hard workouts during a migraine. Pick something you can keep up year-round. If 20 minutes is too much, start with 5 or 10 and build slowly. Steady habit beats big effort." },
          { heading: "Treat Migraines Early", body: "When a migraine starts, go to a cool, dark, quiet room. Drink water. Take your prescribed medicine right away, not after the pain has peaked. Tell people around you what you need. The earlier you act, the better the result usually is." }
        ],
        whenToCall: [
          "Your worst headache ever, or a thunderclap headache.",
          "Migraines get more often, stronger, or different from before.",
          "New weakness, numbness, trouble speaking, or vision loss.",
          "Fever, stiff neck, rash, or confusion with a headache.",
          "Rescue medicine needed more than two or three days a week."
        ],
        closing: "Steady habits lower migraine days. Stick with them and call us if things change."
      }
    }
  },

  /* ------------------------------------------------------------------ */
  /* 3. Tension Headaches                                               */
  /* ------------------------------------------------------------------ */
  tension_headaches: {
    id: "tension_headaches",
    label: "Tension Headaches",
    title: "Self-Care Guide for Tension Headaches",
    variants: {
      general: {
        intro: [
          "Tension headaches often feel like a tight band around your head. They can come from tight muscles in your neck, shoulders, and jaw. They may last from 30 minutes to a few days.",
          "Long hours at a screen, stress, poor sleep, and not enough water are common causes. The good news is that small, steady changes in daily habits can lower how often and how hard these headaches hit."
        ],
        tips: [
          { heading: "Check Your Posture", body: "Stack your head over your shoulders, not forward. Raise your screen so the top is at eye level. Pull your shoulders back and down. Take a short standing break every hour. Posture is the most common cause we can fix, and it costs nothing." },
          { heading: "Take Screen Breaks", body: "Try the 20-20-20 rule. Every 20 minutes, look at something 20 feet away for 20 seconds. Stand up every hour. Roll your shoulders. Look around the room. These small breaks rest the muscles around your eyes, neck, and jaw." },
          { heading: "Stretch Your Neck and Shoulders", body: "Try gentle stretches twice a day. Slowly tilt your ear to your shoulder and hold for 20 seconds. Roll your shoulders forward and back. Stretch your chest in a doorway. Move slowly and stop if it hurts. Steady stretching beats one long session." },
          { heading: "Drink Enough Water", body: "Sip water through the day. Aim for pale yellow urine. Keep a water bottle in sight at home and work. Even mild dehydration can trigger a headache. Cut back on sugary drinks and alcohol, which can pull water out of your body." },
          { heading: "Get Steady Sleep", body: "Go to bed and wake up at the same time each day. Aim for seven to nine hours. Keep your room cool and dark. Skip screens for 30 minutes before bed. Steady sleep helps your muscles and nerves reset and lowers headache days." },
          { heading: "Use Heat for Tight Muscles", body: "Place a warm, moist cloth on your neck and shoulders for 10 to 15 minutes. Heat helps tight muscles relax. A warm shower works too. This is a simple way to ease a building headache before it grows. Try it once or twice a day during sore times." },
          { heading: "Lower Stress in Small Doses", body: "Stress builds in your shoulders and jaw without warning. Pause a few times each day. Drop your shoulders. Take three slow breaths. Step outside for a short walk. These tiny resets prevent the all-day buildup that leads to tension headaches." },
          { heading: "Watch Clenching and Grinding", body: "Many people clench their teeth when focused or stressed. Check in often. If your teeth are touching, let them part. Keep your tongue light on the roof of your mouth, teeth apart, lips closed. This jaw rest position lowers tension in your whole head." }
        ],
        whenToCall: [
          "Your worst headache ever, or one that comes on like a thunderclap.",
          "Headaches are getting more often or stronger than before.",
          "New weakness, numbness, trouble speaking, or vision loss with a headache.",
          "Fever, stiff neck, rash, or confusion with a headache.",
          "You need pain medicine more than two or three days a week."
        ],
        closing: "Most tension headaches improve with steady habits. Small daily changes can make a real difference."
      },
      selfCare: {
        intro: [
          "Tension headaches respond well to daily care. The steps below focus on what you can do at home and at work.",
          "Pick a few steps to start with this week. Build the rest in over time. Small, steady habits work better than one big push."
        ],
        tips: [
          { heading: "Sit Up Tall", body: "Through the day, stack your head over your shoulders. Raise your screen so the top is at eye level. Keep your shoulders relaxed and back. Set a reminder to check your posture each hour. This one habit lowers headache days for many people." },
          { heading: "Use the 20-20-20 Rule", body: "Every 20 minutes, look at something 20 feet away for 20 seconds. Stand up. Roll your shoulders. Look around. This short break rests your eyes, neck, and jaw, and breaks the slow buildup that leads to a tension headache." },
          { heading: "Stretch Each Day", body: "Twice a day, do a few gentle stretches. Tilt your ear toward your shoulder for 20 seconds on each side. Roll your shoulders. Stretch your chest in a doorway. Move slowly. If it hurts, ease off. A few minutes a day is enough." },
          { heading: "Drink Water All Day", body: "Keep a water bottle in sight. Sip often. Aim for pale yellow urine. Cut back on sugary drinks and alcohol. Even mild dehydration can trigger a headache. Setting your bottle in front of you is the trick that makes this stick." },
          { heading: "Protect Your Sleep", body: "Set the same bedtime and wake time every day. Aim for seven to nine hours. Keep your room cool and dark. Skip screens before bed. Sleep is a strong tool for headaches. Build it into your day with the same care you give your meals." },
          { heading: "Use Heat on Sore Spots", body: "Place a warm, moist cloth on your neck and shoulders for 10 to 15 minutes once or twice a day. A warm shower works too. Use heat at the first sign of tightness, not just after a headache has set in. Acting early often stops it." },
          { heading: "Build Stress Breaks", body: "Plan two or three short breaks each day. Try slow breathing for one minute. Step outside. Drop your shoulders. These small breaks release tension before it builds into a headache. Set a phone reminder if it helps you remember." },
          { heading: "Unclench Your Jaw", body: "Many people clench without knowing. Check in often. If your teeth are touching, let them part. Keep your tongue light on the roof of your mouth, teeth apart, lips closed. A relaxed jaw lowers tension across your whole head and neck." }
        ],
        whenToCall: [
          "Your worst headache ever, or one that comes on like a thunderclap.",
          "Headaches are getting more often or stronger than before.",
          "New weakness, numbness, trouble speaking, or vision loss with a headache.",
          "Fever, stiff neck, rash, or confusion with a headache.",
          "You need pain medicine more than two or three days a week."
        ],
        closing: "Daily habits are your most powerful tool. Give them a few weeks to show what they can do."
      },
      firstAppointment: {
        intro: [
          "Thank you for coming in today. Now that we have talked about your headaches, here is what to focus on after today's visit.",
          "Use this guide along with the plan we made. Keep it where you can see it. Bring it to your next visit and we will review what is working."
        ],
        tips: [
          { heading: "Reset Your Posture", body: "Through the day, stack your head over your shoulders. Raise your screen so the top is at eye level. Keep your shoulders relaxed. Take a standing break every hour. Posture is one of the first things we can change between visits." },
          { heading: "Try the 20-20-20 Rule", body: "Every 20 minutes, look 20 feet away for 20 seconds. Stand up. Roll your shoulders. Look around the room. This short break rests your eyes, neck, and jaw, and breaks the slow muscle buildup behind tension headaches. Build it into your work day starting tomorrow." },
          { heading: "Stretch Twice a Day", body: "Do the stretches we showed you twice a day, morning and afternoon. Tilt your ear toward your shoulder. Roll your shoulders. Stretch your chest. Move slowly. Track how often you do them and share that with us at your next visit." },
          { heading: "Drink Water Through the Day", body: "Carry a water bottle. Sip often. Aim for pale yellow urine. Cut back on sugary drinks and alcohol. Steady hydration is a simple, free way to lower headache days. Try it this week and notice the difference." },
          { heading: "Lock In Your Sleep", body: "Starting tonight, set the same bedtime and wake time every day. Aim for seven to nine hours. Cool, dark room. No screens for 30 minutes before bed. Steady sleep supports everything else in your plan." },
          { heading: "Use Heat Daily", body: "Place a warm, moist cloth or use a warm shower on your neck and shoulders for 10 to 15 minutes a day. Use heat early, at the first sign of tightness. Acting early often keeps a headache from forming." },
          { heading: "Plan Stress Breaks", body: "Schedule short breaks into your day, like meetings. One minute of slow breathing. A short walk outside. Quiet time off screens. These are part of your headache plan, not extras. Even three short breaks a day will help lower the muscle buildup that causes headaches." },
          { heading: "Watch for Clenching", body: "Set a few daily reminders to check your jaw. If your teeth are touching, let them part. Keep tongue light on the roof of your mouth, teeth apart, lips closed. A relaxed jaw eases the muscles that drive tension headaches." }
        ],
        whenToCall: [
          "Worst headache ever, or one that comes on like a thunderclap.",
          "Headaches get more often or stronger than before.",
          "New weakness, numbness, trouble speaking, or vision loss with a headache.",
          "Fever, stiff neck, rash, or confusion with a headache.",
          "You are using pain medicine more than two or three days a week."
        ],
        closing: "We will work on this together. Try these steps until your next visit, and bring your notes with you."
      },
      homeCare: {
        intro: [
          "These are direct steps for tension headaches. Use as many as you can each day.",
          "Pick a few to start. Add the rest over the next week. Steady habits beat one big effort."
        ],
        tips: [
          { heading: "Stack Head Over Shoulders", body: "Sit and stand with your head over your shoulders. Raise your screen to eye level. Drop your shoulders. Take a short standing break each hour. Set a phone reminder if you need one. Posture is the easiest change you can make today." },
          { heading: "20-20-20", body: "Every 20 minutes, look 20 feet away for 20 seconds. Stand up. Roll your shoulders. Look around the room. This short pattern is built for screen work and stops the slow muscle buildup that leads to tension headaches. Set a timer if you forget to take breaks." },
          { heading: "Stretch Neck and Shoulders", body: "Twice a day: ear to shoulder, hold 20 seconds each side. Roll shoulders forward and back. Stretch your chest in a doorway. Slow and gentle. A few minutes is enough. Skip any stretch that hurts. Build the routine into morning coffee and the end of work." },
          { heading: "Drink Water", body: "Bottle in sight. Sip often. Aim for pale yellow urine. Cut sugary drinks and alcohol. Steady water all day works better than chugging at the end of the day. Refill the bottle a few times. Set it on your desk so you remember without thinking." },
          { heading: "Same Sleep Times", body: "Same bedtime, same wake time, every day including weekends. Seven to nine hours. Cool, dark room. No screens 30 minutes before bed. Sleep does the heavy lifting for headaches. A steady pattern matters more than catching up on weekends, so protect this every night." },
          { heading: "Warm Cloth or Shower", body: "Apply heat to your neck and shoulders for 10 to 15 minutes, once or twice a day. A warm, moist cloth or a warm shower works well. Use it at the first sign of tightness, not after a full headache hits. Acting early often keeps a headache from forming." },
          { heading: "Short Stress Breaks", body: "Two or three short breaks each day. One minute of slow breathing. A short walk. Quiet time off screens. Build them into your calendar like a meeting. Do not wait until you feel overloaded. Small breaks beat one long break at the end of the day." },
          { heading: "Unclench", body: "Check your jaw a few times each day. Teeth apart, tongue light on the roof of your mouth, lips closed. Less clenching means less head and neck tension. Set a phone reminder if you forget. Notice your jaw at stoplights, in meetings, and before bed." }
        ],
        whenToCall: [
          "Worst headache ever, or thunderclap headache.",
          "Headaches get more often or stronger than before.",
          "New weakness, numbness, trouble speaking, or vision loss.",
          "Fever, stiff neck, rash, or confusion with a headache.",
          "Pain medicine needed more than two or three days a week."
        ],
        closing: "Small steps work. Stick with them and call us if things change."
      }
    }
  },

  /* ------------------------------------------------------------------ */
  /* 4. Sleep Apnea and Oral Appliance Therapy                          */
  /* ------------------------------------------------------------------ */
  sleep_apnea: {
    id: "sleep_apnea",
    label: "Sleep Apnea and Oral Appliance Therapy",
    title: "Guide to Sleep Apnea and Oral Appliance Therapy",
    variants: {
      general: {
        intro: [
          "Sleep apnea is when your breathing stops and starts during sleep. It can make you tired during the day and affect your heart and overall health. You may snore, gasp, or wake up often without remembering why.",
          "An oral appliance is a custom mouthpiece you wear at night. It holds your lower jaw slightly forward to keep your airway open. Used along with good habits, it can lower snoring and improve your sleep."
        ],
        tips: [
          { heading: "Wear the Appliance Every Night", body: "Use your appliance every time you sleep, including naps and travel. Skipping nights lowers how well it works. Place it next to your bed where you will see it. Make it part of your bedtime routine, like brushing your teeth. Steady use brings the best results." },
          { heading: "Clean It Each Morning", body: "Rinse the appliance with cool water after you take it out. Brush it gently with a soft toothbrush and mild soap. Skip hot water and toothpaste, which can damage it. Let it dry, then store it in its case. Clean care helps it last longer and keeps it fresh." },
          { heading: "Sleep on Your Side", body: "Side sleeping helps keep your airway open, even with the appliance. Try a body pillow to keep you from rolling onto your back. Some people sew a tennis ball into the back of a sleep shirt as a reminder. Less back sleeping often means less snoring." },
          { heading: "Keep a Regular Sleep Schedule", body: "Go to bed and wake up at the same time each day. Aim for seven to nine hours. Keep your room cool and dark. Steady sleep helps your whole body, and it makes the appliance work better. Weekends count too." },
          { heading: "Limit Alcohol Before Bed", body: "Alcohol relaxes the muscles in your airway. That can make snoring and apnea worse, even with the appliance. Try to avoid drinks for three to four hours before bed. If you do drink, keep it small. Notice how you feel the next morning." },
          { heading: "Avoid Heavy Meals at Night", body: "Large meals close to bedtime can make sleep harder. Try to eat your last big meal two to three hours before bed. If you are hungry later, choose a light snack. This helps you fall asleep and stay asleep more easily." },
          { heading: "Cut Back on Late Caffeine", body: "Caffeine stays in your system for hours. Skip coffee, tea, and energy drinks after lunch. Even if you feel like you can still sleep, late caffeine often lowers deep sleep quality. Better sleep makes everything else work better." },
          { heading: "Keep Your Follow-Ups", body: "Come in for your scheduled visits so we can check the fit and how your jaw feels. Small changes over time can keep the appliance working well. Tell us if you have new jaw soreness, tooth changes, or if your sleep is not improving." }
        ],
        whenToCall: [
          "You have new jaw pain, tooth pain, or your bite feels off.",
          "The appliance no longer fits or feels different than before.",
          "Your snoring or daytime tiredness comes back or gets worse.",
          "You have new chest pain, gasping at night, or trouble breathing.",
          "You have questions about cleaning, storing, or replacing the appliance."
        ],
        closing: "Steady use plus healthy sleep habits give your appliance the best chance to work. Reach out with any questions."
      },
      selfCare: {
        intro: [
          "Your appliance does its job best when paired with daily habits. The steps below focus on what you can do at home for better sleep.",
          "Pick a few to start with. Build the rest in over time. Small, steady changes work better than one big push."
        ],
        tips: [
          { heading: "Use It Every Night", body: "Wear your appliance every time you sleep, including naps and travel. Keep it on your nightstand so you see it. Add it to your bedtime routine. Even one night off can bring snoring back. Steady use is what makes it work." },
          { heading: "Clean It Daily", body: "Each morning, rinse the appliance with cool water. Brush gently with a soft toothbrush and mild soap. Skip hot water and toothpaste. Let it dry, then store in its case. Clean care keeps it fresh and helps it last." },
          { heading: "Sleep on Your Side", body: "Side sleeping keeps your airway more open. Use a body pillow to keep from rolling onto your back. Or try a sleep shirt with a small pocket on the back to remind you. Less back sleeping often means less snoring." },
          { heading: "Set the Same Sleep Times", body: "Go to bed and wake up at the same time every day, even on weekends. Aim for seven to nine hours. Keep your room cool and dark. A steady pattern matters more than any single great night of sleep." },
          { heading: "Skip Alcohol Before Bed", body: "Alcohol relaxes airway muscles and can bring snoring back. Try to avoid drinks for three to four hours before bed. If you do drink, keep it small. Notice how you sleep that night and how you feel the next morning." },
          { heading: "Eat Lighter at Night", body: "Try to eat your last big meal two to three hours before bed. Save heavy, spicy, or fatty meals for earlier in the day. If you are hungry later, choose a small snack. Lighter evenings often lead to better sleep." },
          { heading: "Cut Caffeine After Lunch", body: "Coffee, tea, and energy drinks stay in your system for hours. Skip them after lunch. Even if you feel you sleep fine, late caffeine often lowers deep sleep. Better sleep helps everything else in this plan work." },
          { heading: "Watch How You Feel", body: "Notice your snoring, daytime sleepiness, and morning mood. Keep a simple log. Bring it to your next visit. Patterns help us fine-tune the fit and your habits. You are the best source of information about how this is going." }
        ],
        whenToCall: [
          "You have new jaw pain, tooth pain, or your bite feels off.",
          "The appliance no longer fits or feels different than before.",
          "Your snoring or daytime tiredness comes back or gets worse.",
          "You have new chest pain, gasping at night, or trouble breathing.",
          "You have questions about cleaning, storing, or replacing the appliance."
        ],
        closing: "Daily habits give your appliance its best chance to work. Stick with them and reach out with any questions."
      },
      firstAppointment: {
        intro: [
          "Thank you for coming in today. Now that you have your appliance and a plan, here is what to focus on after today's visit.",
          "Use this guide along with what we showed you. Keep it where you can see it. Bring it to your next visit and we will check the fit and your progress."
        ],
        tips: [
          { heading: "Start Wearing It Tonight", body: "Use the appliance every time you sleep, starting tonight. Some mild soreness in the first one to two weeks is normal. Place it next to your bed where you will see it. Make it part of your bedtime routine. Steady use brings the best results." },
          { heading: "Clean It Each Morning", body: "Rinse with cool water. Brush gently with a soft toothbrush and mild soap. Skip hot water and toothpaste. Let it dry, then store in its case. Clean care helps the appliance last and keeps it fresh." },
          { heading: "Sleep on Your Side", body: "Try side sleeping each night. Use a body pillow or a sleep shirt with a back pocket to keep from rolling onto your back. Side sleeping plus the appliance gives you the best chance at quiet, restful sleep." },
          { heading: "Lock In Sleep Times", body: "Go to bed and wake up at the same time every day. Aim for seven to nine hours. Cool, dark room. The appliance works best when paired with steady sleep habits, so start this week." },
          { heading: "Limit Alcohol at Night", body: "Try to avoid alcohol for three to four hours before bed for now. Notice how you sleep and how you feel in the morning. Tell us at your next visit what you noticed. This helps us fine-tune your plan." },
          { heading: "Track How You Feel", body: "Keep a simple log of snoring, sleepiness, and morning mood for the next few weeks. A few words a day is enough. Bring it to your next visit. Your notes are one of the most useful tools we have." },
          { heading: "Mind Mild Soreness", body: "It is common to feel mild jaw soreness or tooth pressure in the first week or two. Do the morning bite-reset exercise we showed you. If soreness lasts past two weeks or gets worse, call us. We can adjust the fit." },
          { heading: "Keep Your Follow-Ups", body: "Come in for your scheduled visits so we can check fit, comfort, and your sleep results. Small changes over time keep the appliance working well. Bring questions and your sleep log to every visit. Tell us about any jaw or tooth changes between visits." }
        ],
        whenToCall: [
          "You have new jaw pain, tooth pain, or your bite feels off.",
          "The appliance no longer fits or feels different than before.",
          "Your snoring or daytime tiredness comes back or gets worse.",
          "New chest pain, gasping at night, or trouble breathing.",
          "Questions about cleaning, storing, or wearing the appliance."
        ],
        closing: "We will work on this together. Use your appliance every night and we will check in at your next visit."
      },
      homeCare: {
        intro: [
          "These are direct steps for using your appliance and protecting your sleep.",
          "Do as many as you can each night. Steady habits give your appliance its best chance to work."
        ],
        tips: [
          { heading: "Wear It Every Night", body: "Every time you sleep, including naps and travel. Keep it on your nightstand where you will see it. Add it to your bedtime routine like brushing your teeth. Skipping nights lowers results. If you forget once, just wear it the next night and keep going." },
          { heading: "Clean It Every Morning", body: "Rinse with cool water as soon as you take it out. Brush gently with a soft toothbrush and mild soap. No hot water. No toothpaste. Let it air dry, then store it in its case. Clean care keeps it fresh and helps it last longer." },
          { heading: "Side Sleep", body: "Use a body pillow to keep from rolling onto your back. Or sew a small pocket with a tennis ball into the back of a sleep shirt as a reminder. Side sleeping plus the appliance works better than either alone for keeping your airway open." },
          { heading: "Same Sleep Times", body: "Same bedtime and wake time every day, including weekends. Aim for seven to nine hours. Keep the room cool, dark, and quiet. Steady sleep makes the appliance work better. A regular pattern matters more than any single great night, so protect it every day." },
          { heading: "No Alcohol Before Bed", body: "Skip drinks for three to four hours before bed. Alcohol relaxes airway muscles and can bring snoring back, even with the appliance. If you do drink, keep it small and early in the evening. Notice how you sleep that night and how you feel the next morning." },
          { heading: "Light Evenings", body: "Eat your last big meal two to three hours before bed. Skip spicy and fatty meals at night. Save those for earlier in the day. Light snacks are fine if you are hungry later. Lighter evenings make it easier to fall asleep and stay asleep." },
          { heading: "No Late Caffeine", body: "Skip coffee, tea, and energy drinks after lunch. Switch to water or decaf in the afternoon. Late caffeine can lower deep sleep even when you fall asleep fine. Better sleep makes the appliance work better, so this small change pays back at night." },
          { heading: "Keep Follow-Ups", body: "Come in for your scheduled visits so we can check the fit and how your jaw feels. Bring questions and notes about how you are sleeping. Tell us right away about new jaw soreness, tooth pressure, or bite changes. Small adjustments keep results strong." }
        ],
        whenToCall: [
          "New jaw pain, tooth pain, or bite changes.",
          "Appliance no longer fits.",
          "Snoring or daytime sleepiness returns.",
          "Chest pain, gasping, or trouble breathing.",
          "Questions about cleaning or storing the appliance."
        ],
        closing: "Wear it, clean it, sleep on your side, and call us with questions."
      }
    }
  },

  /* ------------------------------------------------------------------ */
  /* 5. Chronic Facial Pain                                             */
  /* ------------------------------------------------------------------ */
  chronic_facial_pain: {
    id: "chronic_facial_pain",
    label: "Chronic Facial Pain",
    title: "Self-Care Guide for Chronic Facial Pain",
    variants: {
      general: {
        intro: [
          "Chronic facial pain is pain in your face, jaw, or head that has lasted three months or more. It can shift from dull and tight to sharp and burning. It may also affect your sleep, mood, and daily life.",
          "Facial pain has many causes, and care often works best when you use several tools together. Small daily habits, gentle movement, and good sleep can all help your nervous system calm down over time."
        ],
        tips: [
          { heading: "Pace Your Day", body: "Long stretches of activity can flare your pain. Break tasks into smaller chunks. Take short breaks before you feel sore, not after. Switch between active and quiet tasks. Pacing protects your energy and keeps small pain from turning into a bigger flare." },
          { heading: "Use Heat or Cold", body: "Heat a moist cloth and place it on sore spots for 10 to 15 minutes. Heat helps tight muscles relax. For sharp pain, try a cold pack wrapped in a thin towel for 10 minutes. Use whichever one feels better that day. Both are safe to try." },
          { heading: "Move Gently Most Days", body: "Walking, swimming, and gentle yoga can lower chronic pain over time. Aim for 20 to 30 minutes most days. Start with five or ten minutes if you are new. Go slow. The goal is steady movement, not pushing through pain. Easy beats hard here." },
          { heading: "Practice Slow Breathing", body: "Try slow breathing for one to two minutes a few times a day. Breathe in through your nose for four counts, out through your mouth for six. This calms your nervous system. Pain often eases when your body shifts out of high alert." },
          { heading: "Protect Your Sleep", body: "Set the same bedtime and wake time each day. Aim for seven to nine hours. Cool, dark, quiet room. Skip screens 30 minutes before bed. Sleep helps your body and brain reset, which lowers daily pain levels for most people." },
          { heading: "Eat to Support Yourself", body: "Eat regular meals with some protein. Drink water through the day. Limit alcohol and very sugary foods. These habits steady your energy, support healing, and lower the kind of stress your body feels when blood sugar swings up and down." },
          { heading: "Use Mind-Body Tools", body: "Tools like guided imagery, gentle stretching, and mindfulness can help. Free apps and short videos can guide you. Five to ten minutes a day adds up. These tools do not replace medical care, but they teach your body that it is safe, which lowers pain over time." },
          { heading: "Stay Connected", body: "Chronic pain can feel isolating. Stay in touch with people who support you. A short call, a walk with a friend, or a peer group can lift your mood, which often lowers pain. You do not have to manage this alone." }
        ],
        whenToCall: [
          "Your pain is much worse than usual or feels different from before.",
          "New numbness, weakness, vision changes, or trouble speaking.",
          "Swelling, fever, or a sore that will not heal on your face or jaw.",
          "Pain is keeping you from eating, sleeping, or working.",
          "Your mood is low or hopeless, or you are thinking of hurting yourself."
        ],
        closing: "Chronic pain often improves with steady care over time. You are not alone, and we are here to help."
      },
      selfCare: {
        intro: [
          "Chronic facial pain often eases with steady daily care. The steps below focus on what you can do at home, in small, doable amounts.",
          "Pick two or three to start with this week. Add more as you find what helps. Steady habits work better than one big effort."
        ],
        tips: [
          { heading: "Pace Yourself", body: "Break tasks into smaller pieces. Take short breaks before you feel sore. Switch between active and quiet tasks. Pacing keeps small pain from growing into a bigger flare. Plan rest the same way you plan work, not as a reward you earn after." },
          { heading: "Use Heat or Cold", body: "Warm a moist cloth and hold it on sore spots for 10 to 15 minutes. For sharp pain, use a cold pack wrapped in a thin towel for 10 minutes. Try both. Use what helps that day. Either one can be used a few times a day as needed." },
          { heading: "Move Most Days", body: "Walk, swim, or do gentle yoga for 20 to 30 minutes most days. Start small, even five minutes if needed. Go slow. Move every joint a little. The goal is gentle, steady movement, not pushing through pain. Over weeks, this lowers pain for most people." },
          { heading: "Breathe Slowly", body: "A few times each day, breathe in through your nose for four counts, out through your mouth for six. Do this for one to two minutes. Slow breathing tells your body it is safe. Pain often eases as your nervous system shifts out of high alert." },
          { heading: "Sleep on a Schedule", body: "Same bedtime, same wake time, every day. Aim for seven to nine hours. Keep the room cool, dark, and quiet. Skip screens before bed. Good sleep is one of the strongest tools you have for chronic pain, and it is free." },
          { heading: "Eat Steady, Drink Water", body: "Eat regular meals with some protein. Drink water through the day. Cut back on alcohol and very sugary foods. Keep snacks nearby on busy days. Steady fuel lowers the stress your body feels when blood sugar swings up and down." },
          { heading: "Try Mind-Body Tools", body: "Guided imagery, mindfulness, and gentle stretching can lower pain over time. Free apps and short videos can guide you. Five to ten minutes a day is enough to start. Be patient. These tools train your body to feel safe, which takes time." },
          { heading: "Stay Connected", body: "A short call with a friend, a walk with someone you trust, or a support group can lift your mood. Better mood often means less pain. You do not have to handle this on your own, and reaching out is part of your care, not extra." }
        ],
        whenToCall: [
          "Your pain is much worse than usual or feels different from before.",
          "New numbness, weakness, vision changes, or trouble speaking.",
          "Swelling, fever, or a sore that will not heal on your face or jaw.",
          "Pain is keeping you from eating, sleeping, or working.",
          "Your mood is low or hopeless, or you are thinking of hurting yourself."
        ],
        closing: "Small daily steps add up. Be patient with yourself, and reach out anytime."
      },
      firstAppointment: {
        intro: [
          "Thank you for coming in today. Now that we have talked about your pain, here is what to focus on after today's visit.",
          "Use this guide along with the plan we made. Keep it where you can see it. Bring it to your next visit and we will review what is helping and what to adjust."
        ],
        tips: [
          { heading: "Start Pacing This Week", body: "Pick one daily task and split it into smaller pieces. Take a short break in between. Watch how it feels over the next few days. Pacing is a skill that gets stronger with practice. We will review it together at your next visit." },
          { heading: "Use Heat or Cold Daily", body: "Try heat with a warm, moist cloth or cold with a cold pack wrapped in a thin towel, 10 to 15 minutes. Notice which one helps more. Tell us at your next visit. Your feedback shapes what we add to your plan." },
          { heading: "Move a Little Each Day", body: "Start with 5 or 10 minutes of gentle movement most days, like a slow walk. Build up over weeks. Skip days when pain is high, but come back the next day. Steady, gentle movement is part of your treatment, not separate from it." },
          { heading: "Practice Slow Breathing", body: "A few times each day, breathe in through your nose for four counts and out through your mouth for six, for one or two minutes. This is one of the simplest tools to calm a flare. Use it before pain peaks, not only after." },
          { heading: "Lock In Sleep", body: "Starting tonight, set the same bedtime and wake time every day. Aim for seven to nine hours. Cool, dark room. No screens before bed. Sleep is one of the most useful changes we can make between visits." },
          { heading: "Eat and Drink Steady", body: "Plan three meals a day, or smaller meals with snacks. Include some protein at each. Sip water through the day. Cut back on alcohol and very sugary foods. Steady fuel supports the other parts of your plan and lowers the stress your body feels from blood sugar swings." },
          { heading: "Try a Mind-Body Tool", body: "Pick one short tool to try this week, like a guided meditation app or a gentle stretch video. Five to ten minutes a day is enough to start. Tell us what you tried and how it felt at your next visit." },
          { heading: "Lean on Support", body: "Plan one connection moment each day, even a short call or text to someone you trust. Mood and pain travel together. Better mood often eases pain. Support is part of your care, not an extra." }
        ],
        whenToCall: [
          "Pain is much worse than usual or feels different from before.",
          "New numbness, weakness, vision changes, or trouble speaking.",
          "Swelling, fever, or a sore that will not heal on your face or jaw.",
          "Pain is keeping you from eating, sleeping, or working.",
          "You feel low, hopeless, or are thinking of hurting yourself."
        ],
        closing: "We will work on this together. Try these steps until your next visit, and bring your notes with you."
      },
      homeCare: {
        intro: [
          "These are direct steps for chronic facial pain. Use as many as you can each day.",
          "Pick two or three to start. Add more over time. Steady habits work better than big efforts."
        ],
        tips: [
          { heading: "Pace Tasks", body: "Break tasks into smaller pieces. Take a short break before you feel sore, not after. Switch between active and quiet tasks. Plan rest the same way you plan work. Pacing protects your energy and keeps small pain from turning into a bigger flare day." },
          { heading: "Heat or Cold", body: "Warm a moist cloth or use a cold pack wrapped in a thin towel for 10 to 15 minutes on sore spots. Use either or both, a few times a day. Pick whichever feels better that day. Both are safe to try and easy to keep on hand." },
          { heading: "Move Daily", body: "Walk, swim, or stretch for 20 to 30 minutes most days. Start with five or ten minutes if needed. Go slow. Skip days when pain is high, but come back the next day. Steady, gentle movement lowers pain over weeks for most people." },
          { heading: "Slow Breathing", body: "A few times a day, breathe in through your nose for four counts and out through your mouth for six. Do this for one or two minutes. Use it before pain peaks, not only during a flare. This simple tool can calm your nervous system quickly." },
          { heading: "Steady Sleep", body: "Same bedtime and wake time, every day. Aim for seven to nine hours. Keep the room cool, dark, and quiet. No screens for 30 minutes before bed. Steady sleep is one of the strongest tools you have for chronic pain, and it costs nothing." },
          { heading: "Eat and Drink", body: "Three meals a day with some protein, or smaller meals with snacks. Sip water through the day. Cut back on alcohol and very sugary foods. Keep snacks nearby on busy days. Steady fuel lowers the stress your body feels from blood sugar swings." },
          { heading: "Mind-Body Tool", body: "Pick one short tool: guided imagery, mindfulness, or gentle stretching. Aim for five to ten minutes a day. Use a free app or short video to guide you. Be patient. These tools train your body to feel safe, which lowers pain over time." },
          { heading: "Stay Connected", body: "Plan one connection moment a day. A short call, a text, or a walk with someone you trust. Mood and pain travel together, so a small lift helps. You do not have to handle chronic pain alone, and reaching out is part of your care." }
        ],
        whenToCall: [
          "Pain much worse than usual or feels different.",
          "New numbness, weakness, vision changes, or trouble speaking.",
          "Swelling, fever, or a sore that will not heal.",
          "Pain keeping you from eating, sleeping, or working.",
          "Low or hopeless mood, or thoughts of hurting yourself."
        ],
        closing: "Small steps add up. Stick with them and call us with any concern."
      }
    }
  }

};
