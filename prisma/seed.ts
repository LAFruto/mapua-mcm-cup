import { db } from "app/lib/db";

const activities = [
  // 2/26

  {
    name: "Cheer-Off",
    type: "event",
    image: "/activities/cheer-off.png",
    banner: "/banner/cheer-off.png",
    url: "/a/cheer-off",
    startDate: new Date(new Date("02/26/25").setHours(9, 0, 0, 0)),
    endDate: new Date(new Date("02/26/25").setHours(12, 0, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Mapúa MCM Plaza",
    head: "CHRISTOPHER JOSH L. DELLOSA",
    title: "Cheerdance Event Chair",
    contact: "(0919) 082-7175",
    email: "cjdellosa@mcm.edu.ph",
  },
  {
    name: "MTV Spoof",
    type: "event",
    image: "/activities/mtv-spoof.png",
    banner: "/banner/mtv-spoof.png",
    url: "/a/mtv-spoof",
    startDate: new Date(new Date("02/26/25").setHours(13, 0, 0, 0)),
    endDate: new Date(new Date("02/26/25").setHours(15, 0, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Mapúa MCM Plaza",
    head: "CEDRIC JOSEPH R. MANDAP",
    title: "MTV Spoof Event Chair",
    contact: "(0923) 601-2285",
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

    location: "Mapúa MCM Plaza",
    head: "KEITH COLEEN N. MACEDA",
    title: "Singing Idol Event Chair",
    contact: "(0918) 335-1095",
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

    location: "Indoor",
    head: "MARTZEL BASTE",
    title: "Programming Competition Event Chair",
    email: "mbaste@mcm.edu.ph",
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

    location: "Mapúa MCM Plaza",
    head: "FEBBIE FAITH S. RAMOS",
    title: "Singing Duets Event Chair",
    contact: "(0995) 225-5711",
  },
  {
    name: "Craft 1-4-6",
    type: "event",
    image: "/activities/craft-1-4-6.png",
    banner: "/banner/craft-1-4-6.png",
    url: "/a/craft-1-4-6",
    startDate: new Date(new Date("02/27/25").setHours(10, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(12, 0, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Mapúa MCM Plaza",
    head: "ALMA ROSE T. MARQUEZ",
    title: "Craft 1.4.6 Event Chair",
    contact: "(0991) 226-4497",
  },
  {
    name: "Square Off",
    type: "event",
    image: "/activities/square-off.png",
    banner: "/banner/square-off.png",
    url: "/a/square-off",
    startDate: new Date(new Date("02/27/25").setHours(8, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(12, 0, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Room A409 & A410 Admin Building",
    head: "ENGR. ANNA JEDIDIAH S. ROQUE",
    title: "Mathematics Quiz Show Event Chair",
    email: "ajsroque@mcm.edu.ph",
  },
  {
    name: "Speak Up",
    type: "event",
    image: "/activities/speak-up.png",
    banner: "/banner/speak-up.png",
    url: "/a/speak-up",
    startDate: new Date(new Date("02/27/25").setHours(13, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(15, 0, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Mapúa MCM Plaza",
    head: "MATTHEW MARK D. OBREGON",
    title: "Speak Up Event Chair",
    email: "erbatenga@mcm.edu.ph",
    contact: "(0947) 796-1451",
  },
  {
    name: "Sci Meet",
    type: "event",
    image: "/activities/sci-meet.png",
    banner: "/banner/sci-meet.png",
    url: "/a/sci-meet",
    startDate: new Date(new Date("02/27/25").setHours(13, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(17, 0, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Room A409 & A410 Admin Building",
    head: "ENGR. FROILAN N. JIMENO II",
    title: "Science Quiz Show Event Chair",
    email: "fnjimeno@mcm.edu.ph",
    contact: "(0906) 207-3361",
  },
  {
    name: "Interviewing with Smart Talking",
    type: "event",
    image: "/activities/interviewing-with-smart-talking.png",
    banner: "/banner/interviewing-with-smart-talking.png",
    url: "/a/interviewing-with-smart-talking",
    startDate: new Date(new Date("02/27/25").setHours(15, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(17, 0, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Mapúa MCM Plaza",
    head: "HEIDEGGER JAKE DIACONO",
    title: "Interviewing with Smart Talking Event Chair",
    contact: "(0963) 941-2201",
    email: "hjbdiacono@mcm.edu.ph",
  },
  {
    name: "Innovation Pitching",
    type: "event",
    image: "/activities/innovation-pitching.png",
    banner: "/banner/innovation-pitching.png",
    url: "/a/innovation-pitching",
    startDate: new Date(new Date("02/27/25").setHours(9, 0, 0, 0)),
    endDate: new Date(new Date("02/27/25").setHours(17, 0, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Indoor",
    head: "DAISY B. AREJA",
    title: "Innovation Pitching Event Chair",
    email: "dbareja@mcm.edu.ph",
  },

  // 2/28

  {
    name: "Jazz Chant",
    type: "event",
    image: "/activities/jazz-chant.png",
    banner: "/banner/jazz-chant.png",
    url: "/a/jazz-chant",
    startDate: new Date(new Date("02/28/25").setHours(9, 0, 0, 0)),
    endDate: new Date(new Date("02/28/25").setHours(10, 30, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Mapúa MCM Plaza",
    head: "JOVAIRA MANGUBAT",
    title: "Jazz Chant Event Chair",
    contact: "(0948) 345-0999",
  },
  {
    name: "Cosplay",
    type: "event",
    image: "/activities/cosplay.png",
    banner: "/banner/cosplay.png",
    url: "/a/cosplay",
    startDate: new Date(new Date("02/28/25").setHours(10, 30, 0, 0)),
    endDate: new Date(new Date("02/28/25").setHours(12, 0, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Mapúa MCM Plaza",
    head: "MOIRA MONINA V. DUMAGAN",
    title: "Cosplay Event Chair",
    email: "mmvdumagan@mcm.edu.ph",
  },
  {
    name: "Mobile Legends Competition",
    type: "event",
    image: "/activities/mobile-legends-competition.png",
    banner: "/banner/mobile-legends-competition.png",
    url: "/a/mobile-legends-competition",
    startDate: new Date(new Date("02/28/25").setHours(8, 0, 0, 0)),
    endDate: new Date(new Date("02/28/25").setHours(17, 0, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Indoor",
    head: "PHILIP CENTENE D. SILOTERIO",
    title: "E-sports Event Chair",
    email: "erbatenga@mcm.edu.ph",
    contact: "(0927) 110-2041",
  },
  {
    name: "Street Dance Battle",
    type: "event",
    image: "/activities/street-dance-battle.png",
    banner: "/banner/street-dance-battle.png",
    url: "/a/street-dance-battle",
    startDate: new Date(new Date("02/28/25").setHours(13, 0, 0, 0)),
    endDate: new Date(new Date("02/28/25").setHours(16, 30, 0, 0)),
    isOverall: true,
    isScored: false,

    location: "Mapúa MCM Plaza",
    head: "AR. MARTINEE LLEMIT",
    title: "Street Dance Event Chair",
    contact: "(0977) 317-5693",
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
    name: "AL MUNAWWARA ISLAMIC SCHOOL",
    altName: "AMIS",
    num: 1,
    image: "/teams/amis.png",
  },
  {
    name: "AMYA POLYTECHNIC COLLEGE, INC.",
    altName: "AMYAPCI",
    num: 2,
    image: "/teams/amyapci.png",
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
    altName: "BC",
    num: 6,
    image: "/teams/bc.png",
  },
  {
    name: "CABANTIAN NATIONAL HIGH SCHOOL",
    altName: "CabNHS",
    num: 7,
    image: "/teams/cabnhs.png",
  },
  {
    name: "CABANTIAN STAND ALONE SENIOR HIGH SCHOOL",
    altName: "CSA",
    num: 8,
    image: "/teams/csa.png",
  },
  {
    name: "CALINAN NATIONAL HIGH SCHOOL",
    altName: "CalNHS",
    num: 9,
    image: "/teams/calnhs.png",
  },
  {
    name: "CARLOS P. GARCIA SENIOR HIGH SCHOOL",
    altName: "CPGSHS",
    num: 10,
    image: "/teams/cpgshs.png",
  },
  {
    name: "CATALUNAN PEQUEÑO NATIONAL HIGH SCHOOL",
    altName: "CPNHS",
    num: 11,
    image: "/teams/cpnhs.png",
  },
  {
    name: "DANIEL R. AGUINALDO NATIONAL HIGH SCHOOL",
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
    name: "DAVAO VISION COLLEGES, INC.",
    altName: "DVC",
    num: 16,
    image: "/teams/dvc.png",
  },
  {
    name: "DAVAO WISDOM ACADEMY, INC.",
    altName: "DWA",
    num: 17,
    image: "/teams/dwa.png",
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
    altName: "HCCC",
    num: 20,
    image: "/teams/hccc.png",
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
    num: 26,
    image: "/teams/mchs-shs.png",
  },

  ///

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
    altName: "PWC",
    num: 32,
    image: "/teams/pwc.png",
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
    altName: "SMSP",
    num: 36,
    image: "/teams/smsp.png",
  },
  {
    name: "SAN PEDRO COLLEGE",
    altName: "SPC",
    num: 37,
    image: "/teams/spc.png",
  },
  {
    name: "SAN PEDRO COLLEGE BASIC EDUCATION - DEPARTMENT, ULAS CAMPUS",
    altName: "SPC-Ulas",
    num: 38,
    image: "/teams/spc-ulas.png",
  },
  {
    name: "ST. PETER'S COLLEGE OF TORIL, INC.",
    altName: "SPCT",
    num: 39,
    image: "/teams/spct.png",
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
    altName: "STI",
    num: 42,
    image: "/teams/sti.png",
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
    altName: "TCRASHS",
    num: 45,
    image: "/teams/tcrashs.png",
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
    altName: "TuNHS",
    num: 48,
    image: "/teams/tunhs.png",
  },
  {
    name: "UM TAGUM COLLEGE",
    altName: "UMTC",
    num: 49,
    image: "/teams/umtc.png",
  },
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
        location: activity.location,
        head: activity.head,
        title: activity.title,
        contact: activity.contact,
        email: activity.email,
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
        location: activity.location,
        head: activity.head,
        title: activity.title,
        contact: activity.contact,
        email: activity.email,
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
