import { db } from "app/lib/db";

const activities = [
  // 2/26

  {
    name: "Cheerdance",
    type: "event",
    image: "/activities/cheerdance.png",
    banner: "/banner/cheerdance.png",
    url: "/a/cheerdance",
    startDate: new Date(new Date("02/26/25").setHours(8, 0, 0, 0)),
    endDate: new Date(new Date("02/26/25").setHours(12, 0, 0, 0)),
    isOverall: true,
    isScored: false,
  },
  {
    name: "MTV Spoof",
    type: "event",
    image: "/activities/mtv-spoof.png",
    banner: "/banner/mtv-spoof.png",
    url: "/a/mtv-spoof",
    startDate: new Date(new Date("02/26/25").setHours(13, 0, 0, 0)),
    endDate: new Date(new Date("02/26/25").setHours(17, 0, 0, 0)),
    isOverall: true,
    isScored: false,
  },
  {
    name: "Singing Idol",
    type: "event",
    image: "/activities/singing-idol.png",
    banner: "/banner/singing-idol.png",
    url: "/a/singing-idol",
    startDate: new Date(new Date("02/26/25").setHours(15, 0, 0, 0)),
    endDate: new Date(new Date("02/26/25").setHours(17, 0, 0, 0)),
    isOverall: true,
    isScored: false,
  },
  {
    name: "Code Clash",
    type: "event",
    image: "/activities/code-clash.png",
    banner: "/banner/code-clash.png",
    url: "/a/code-clash",
    startDate: new Date(new Date("02/26/25").setHours(9, 0, 0, 0)),
    endDate: new Date(new Date("02/26/25").setHours(17, 0, 0, 0)),
    isOverall: true,
    isScored: false,
  },

  // 2/27
  {
    name: "Singing Duet",
    type: "event",
    image: "/activities/singing-duet.png",
    banner: "/banner/singing-duet.png",
    url: "/a/singing-duet",
    startDate: new Date(new Date("02/27/25").setHours(8, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(10, 0, 0, 0)),
    isOverall: true,
    isScored: false,
  },
  {
    name: "Craft 1.4.6",
    type: "event",
    image: "/activities/craft-1-4-6.png",
    banner: "/banner/craft-1-4-6.png",
    url: "/a/craft-1-4-6",
    startDate: new Date(new Date("02/27/25").setHours(10, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(12, 0, 0, 0)),
    isOverall: true,
    isScored: false,
  },
  {
    name: "Square Off: Math Quiz",
    type: "event",
    image: "/activities/square-off-math-quiz.png",
    banner: "/banner/square-off-math-quiz.png",
    url: "/a/square-off-math-quiz",
    startDate: new Date(new Date("02/27/25").setHours(8, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(12, 0, 0, 0)),
    isOverall: false,
    isScored: true,
  },
  {
    name: "Speak Up - Impromptu Speech",
    type: "event",
    image: "/activities/speak-up.png",
    banner: "/banner/speak-up.png",
    url: "/a/speak-up",
    startDate: new Date(new Date("02/27/25").setHours(13, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(15, 0, 0, 0)),
    isOverall: true,
    isScored: true,
  },
  {
    name: "Sci Meet: Science Quiz Show",
    type: "event",
    image: "/activities/science-quiz-show.png",
    banner: "/banner/science-quiz-show.png",
    url: "/a/science-quiz-show",
    startDate: new Date(new Date("02/27/25").setHours(13, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(17, 0, 0, 0)),
    isOverall: false,
    isScored: true,
  },
  {
    name: "Interviewing With Smart Talking",
    type: "event",
    image: "/activities/interviewing-with-smart-talking.png",
    banner: "/banner/interviewing-with-smart-talking.png",
    url: "/a/interviewing-with-smart-talking",
    startDate: new Date(new Date("02/27/25").setHours(15, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(17, 0, 0, 0)),
    isOverall: false,
    isScored: true,
  },
  {
    name: "Innovation Pitching",
    type: "event",
    image: "/activities/innovation-pitching.png",
    banner: "/banner/innovation-pitching.png",
    url: "/a/innovation-pitching",
    startDate: new Date(new Date("02/27/25").setHours(9, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(17, 0, 0, 0)),
    isOverall: false,
    isScored: true,
  },

  // 2/28

  {
    name: "Jazz Chant",
    type: "event",
    image: "/activities/jazz-chant.png",
    banner: "/banner/jazz-chant.png",
    url: "/a/jazz-chant",
    startDate: new Date(new Date("02/28/25").setHours(9, 0, 0, 0)),
    endDate: new Date(new Date("02/28/25").setHours(11, 0, 0, 0)),
    isOverall: true,
    isScored: true,
  },
  {
    name: "Cosplay",
    type: "event",
    image: "/activities/cosplay.png",
    banner: "/banner/cosplay.png",
    url: "/a/cosplay",
    startDate: new Date(new Date("02/28/25").setHours(11, 0, 0, 0)),
    endDate: new Date(new Date("02/28/25").setHours(12, 0, 0, 0)),
    isOverall: true,
    isScored: true,
  },
  {
    name: "MLBB",
    type: "event",
    image: "/activities/mlbb.png",
    banner: "/banner/mlbb.png",
    url: "/a/mlbb",
    startDate: new Date(new Date("02/28/25").setHours(8, 0, 0, 0)),
    endDate: new Date(new Date("02/28/25").setHours(17, 0, 0, 0)),
    isOverall: false,
    isScored: true,
  },
  {
    name: "Street Dance",
    type: "event",
    image: "/activities/street-dance.png",
    banner: "/banner/street-dance.png",
    url: "/a/street-dance",
    startDate: new Date(new Date("02/28/25").setHours(13, 0, 0, 0)),
    endDate: new Date(new Date("02/28/25").setHours(17, 0, 0, 0)),
    isOverall: true,
    isScored: true,
  },
];

const activityTypes = [{ name: "sport" }, { name: "event" }];

const categories = [
  // { name: "Festival King", event: "Parade of Festivals" },

  { name: "Interviewing", event: "Interviewing with Smart Talking" },
  { name: "Smart Talking", event: "Interviewing with Smart Talking" },
];

const teams = [
  {
    name: "AL MUNAWARA ISLAMIC SCHOOL",
    altName: "AMIS",
    num: 1,
    image: "/teams/amis.png",
  },
  {
    name: "AMYA POLYTECHNIC COLLEGE, INC.",
    altName: "APCI",
    num: 2,
    image: "/teams/apci.png",
  },
  {
    name: "ASSUMPTION COLLEGE OF DAVAO",
    altName: "ACD",
    num: 3,
    image: "/teams/acd.png",
  },
  {
    name: "BERNARDO D. CARPIO NATIONAL HIGH SCHOOL",
    altName: "BDCNHS",
    num: 4,
    image: "/teams/bdcnhs.png",
  },
  {
    name: "BROKENSHIRE COLLEGE TORIL",
    altName: "BCT",
    num: 5,
    image: "/teams/bct.png",
  },
  {
    name: "BROKENSHIRE COLLEGE, INC.",
    altName: "BCI",
    num: 6,
    image: "/teams/bci.png",
  },
  {
    name: "CABANTIAN NATIONAL HIGH SCHOOL",
    altName: "CNHS",
    num: 7,
    image: "/teams/cnhs.png",
  },
  {
    name: "CABANTIAN STAND ALONE SENIOR HIGH SCHOOL",
    altName: "CSASHS",
    num: 8,
    image: "/teams/csashs.png",
  },
  {
    name: "CALINAN NATIONAL HIGH SCHOOL",
    altName: "CalNHS",
    num: 9,
    image: "/teams/calnhs.png",
  },
  {
    name: "CARLOS P. GARCIA NATIONAL HIGH SCHOOL",
    altName: "CPGNHS",
    num: 10,
    image: "/teams/cpgnhs.png",
  },
  {
    name: "CATALUNAN PEQUEÑO NATIONAL HIGH SCHOOL",
    altName: "CPNHS",
    num: 11,
    image: "/teams/cpnhs.png",
  },
  {
    name: "DANIEL R. AGUINALDO'S NATIONAL HIGH SCHOOL",
    altName: "DRANHS",
    num: 12,
    image: "/teams/dranhs.png",
  },
  {
    name: "DAVAO CHONG HUA HIGH SCHOOL",
    altName: "DCHHS",
    num: 13,
    image: "/teams/dchhs.png",
  },
  {
    name: "DAVAO CHRISTIAN HIGH SCHOOL",
    altName: "DCHS",
    num: 14,
    image: "/teams/dchs.png",
  },
  {
    name: "DAVAO CITY NATIONAL HIGH SCHOOL",
    altName: "DCNHS",
    num: 15,
    image: "/teams/dcnhs.png",
  },
  {
    name: "DAVAO VISION COLLEGE, INC.",
    altName: "DVCI",
    num: 16,
    image: "/teams/dvci.png",
  },
  {
    name: "DAVAO WISDOM ACADEMY, INC.",
    altName: "DWAI",
    num: 17,
    image: "/teams/dwai.png",
  },
  {
    name: "DIGOS CITY NATIONAL HIGH SCHOOL",
    altName: "DiCNHS",
    num: 18,
    image: "/teams/dicnhs.png",
  },
  {
    name: "F. BUSTAMANTE NATIONAL HIGH SCHOOL",
    altName: "FBNHS",
    num: 19,
    image: "/teams/fbnhs.png",
  },
  {
    name: "HOLY CROSS COLLEGE OF CALINAN, INC.",
    altName: "HCCCI",
    num: 20,
    image: "/teams/hccci.png",
  },
  {
    name: "HOLY CROSS OF AGDAO",
    altName: "HCA",
    num: 21,
    image: "/teams/hca.png",
  },
  {
    name: "KAPALONG NATIONAL HIGH SCHOOL",
    altName: "KNHS",
    num: 22,
    image: "/teams/knhs.png",
  },
  {
    name: "LOS AMIGOS NATIONAL HIGH SCHOOL",
    altName: "LANHS",
    num: 23,
    image: "/teams/lanhs.png",
  },
  {
    name: "MAGDUM NATIONAL HIGH SCHOOL",
    altName: "MNHS",
    num: 24,
    image: "/teams/mnhs.png",
  },
  {
    name: "MATINA PANGI NATIONAL HIGH SCHOOL",
    altName: "MPNHS",
    num: 25,
    image: "/teams/mpnhs.png",
  },
  {
    name: "MINTAL COMPREHENSIVE HIGH SCHOOL",
    altName: "MCHS",
    num: 26,
    image: "/teams/mchs.png",
  },
  {
    name: "MINTAL COMPREHENSIVE HIGH SCHOOL - SENIOR HIGH SCHOOL",
    altName: "MCHS-SHS",
    num: 27,
    image: "/teams/mchs-shs.png",
  },
  {
    name: "PABLO LORENZO NATIONAL HIGH SCHOOL",
    altName: "PLNHS",
    num: 28,
    image: "/teams/plnhs.png",
  },
  {
    name: "PANABO CITY NATIONAL HIGH SCHOOL",
    altName: "PCNHS",
    num: 29,
    image: "/teams/pcnhs.png",
  },
  {
    name: "PHILIPPINE ACADEMY OF SAKYA DAVAO, INC.",
    altName: "PASDI",
    num: 30,
    image: "/teams/pasdi.png",
  },
  {
    name: "PHILIPPINE SCIENCE HIGH SCHOOL - SOUTHERN MINDANAO",
    altName: "PSHS-SM",
    num: 31,
    image: "/teams/pshs-sm.png",
  },
  {
    name: "PHILIPPINE WOMEN'S COLLEGE OF DAVAO",
    altName: "PWCD",
    num: 32,
    image: "/teams/pwcd.png",
  },
  {
    name: "PRECIOUS INTERNATIONAL SCHOOL OF DAVAO",
    altName: "PISD",
    num: 33,
    image: "/teams/pisd.png",
  },
  {
    name: "RIZAL MEMORIAL COLLEGES, INC.",
    altName: "RMC",
    num: 34,
    image: "/teams/rmc.png",
  },
  {
    name: "SAINT HELEN GARDEN COLLEGE AND TECHNOLOGY",
    altName: "SHGCT",
    num: 35,
    image: "/teams/shgct.png",
  },
  {
    name: "SAINT MICHAEL'S SCHOOL OF PADADA, INC.",
    altName: "SMSPI",
    num: 36,
    image: "/teams/smspi.png",
  },
  {
    name: "SAN PEDRO COLLEGE",
    altName: "SPC",
    num: 37,
    image: "/teams/spc.png",
  },
  {
    name: "SAN PEDRO COLLEGE BASIC EDUCATION - DEPARTMENT, ULAS CAMPUS",
    altName: "SPCBE-U",
    num: 38,
    image: "/teams/spcbe-u.png",
  },
  {
    name: "ST. PETER'S COLLEGE OF TORIL, INC.",
    altName: "SPCTI",
    num: 39,
    image: "/teams/spcti.png",
  },
  {
    name: "STA. ANA NATIONAL HIGH SCHOOL",
    altName: "SANHS",
    num: 40,
    image: "/teams/sanhs.png",
  },
  {
    name: "STELLA MARIS ACADEMY OF DAVAO",
    altName: "SMAD",
    num: 41,
    image: "/teams/smad.png",
  },
  {
    name: "STI COLLEGE OF DAVAO",
    altName: "STID",
    num: 42,
    image: "/teams/stid.png",
  },
  {
    name: "STO. NIÑO NATIONAL HIGH SCHOOL",
    altName: "SNNHS",
    num: 43,
    image: "/teams/snnhs.png",
  },
  {
    name: "TAGUM CITY NATIONAL HIGH SCHOOL",
    altName: "TCNHS",
    num: 44,
    image: "/teams/tcnhs.png",
  },
  {
    name: "TAGUM CITY REGIONAL ACADEMY FOR SENIOR HIGH SCHOOL",
    altName: "TCRASH",
    num: 45,
    image: "/teams/tcrash.png",
  },
  {
    name: "TAGUM DOCTORS COLLEGE, INC.",
    altName: "TDCI",
    num: 46,
    image: "/teams/tdci.png",
  },
  {
    name: "TALOMO NATIONAL HIGH SCHOOL",
    altName: "TNHS",
    num: 47,
    image: "/teams/tnhs.png",
  },
  {
    name: "TUGBOK NATIONAL HIGH SCHOOL",
    altName: "TUNHS",
    num: 48,
    image: "/teams/tunhs.png",
  },
  { name: "UM TAGUM", altName: "UMT", num: 49, image: "/teams/umt.png" },
  {
    name: "UNIVERSITY OF THE IMMACULATE CONCEPTION",
    altName: "UIC",
    num: 50,
    image: "/teams/uic.png",
  },
  {
    name: "WISDOM ISLAMIC SCHOOL",
    altName: "WIS",
    num: 51,
    image: "/teams/wis.png",
  },
];

for (const activityType of activityTypes) {
  await db.activityType.upsert({
    create: {
      name: activityType.name,
    },
    update: {},
    where: {
      name: activityType.name,
    },
  });
}

const seed = async () => {
  for (const activity of activities) {
    await db.activity.upsert({
      create: {
        name: activity.name,
        altName: activity.name.toLowerCase().replace(/\s+/g, "-"),
        image: activity.image,
        banner: activity.banner,
        url: activity.url,
        isOverall: activity.isOverall,
        isScored: activity.isScored,
        startDateTime: activity.startDate,
        endDateTime: activity.endDate,
        activityType: {
          connect: {
            name: activity.type,
          },
        },
      },
      update: {},
      where: {
        name: activity.name,
        isOverall: activity.isOverall,
        isScored: activity.isScored,
        startDateTime: activity.startDate,
        endDateTime: activity.endDate,
      },
    });
  }

  for (const category of categories) {
    const id = await db.activity.findUnique({
      where: {
        name: category.event,
      },
    });

    // console.log(`${category.name} : ${id ? "found" : "not found"}`);

    await db.category.upsert({
      create: {
        name: category.name,
        activity: {
          connect: {
            name: category.event,
          },
        },
      },
      update: {},
      where: {
        name_activityId: {
          name: category.event,
          activityId: id!.id,
        },
      },
    });
  }

  for (const cluster of teams) {
    await db.cluster.upsert({
      create: {
        name: cluster.name,
        image: cluster.image,
        altName: cluster.altName,
        num: cluster.num,
      },
      update: {},
      where: {
        name: cluster.name,
      },
    });
  }
};

await seed();
