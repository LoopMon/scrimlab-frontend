const teams = [
  {
    name: "LOUD",
    label: "LOUD",
    value: "loud",
    logo: "https://owcdn.net/img/62bbec8dc1b9f.png",
    players: [
      {
        name: "saadhak",
        image: "https://owcdn.net/img/66306e037e53b.png",
      },
      {
        name: "cauanzin",
        image: "https://owcdn.net/img/66306e74ba40e.png",
      },
      {
        name: "Less",
        image: "https://owcdn.net/img/66306e28a3dc7.png",
      },
      {
        name: "tuyz",
        image: "https://owcdn.net/img/66306e474531d.png",
      },
      {
        name: "pancada",
        image: "https://owcdn.net/img/6416955d4ce03.png",
      },
    ],
    id: "1",
    country: "Brasil",
  },
  {
    name: "furia",
    label: "Furia",
    value: "furia",
    logo: "https://owcdn.net/img/632be843b7d51.png",
    players: [
      {
        name: "mwzera",
        image: "https://owcdn.net/img/60bf8c8424ec7.png",
      },
      {
        name: "khalil",
        image: "https://owcdn.net/img/62795e26e083a.png",
      },
      {
        name: "nzr",
        image: "https://owcdn.net/img/64b6590d6b004.png",
      },
      {
        name: "havoc",
        image:
          "https://s2-ge.glbimg.com/5f4I14xcBW3dn3fIE12wXZLxtOQ=/0x0:1366x1058/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/b/r/hVj0sESCCBlkQVm358gw/havoc-valorant-furia.jpg",
      },
      {
        name: "kon4n",
        image: "https://owcdn.net/img/62d077d38b7a5.png",
      },
    ],
    id: "2",
    country: "Brasil",
  },
  {
    name: "Sentinels",
    label: "Sentinels",
    value: "sentinels",
    logo: "https://owcdn.net/img/62875027c8e06.png",
    players: [
      {
        name: "johnqt",
        image: "https://owcdn.net/img/65622aa13dc03.png",
      },
      {
        name: "TenZ",
        image: "https://owcdn.net/img/6416950ce6638.png",
      },
      {
        name: "Zellsis",
        image: "https://owcdn.net/img/64168e9618e29.png",
      },
      {
        name: "zekken",
        image: "https://owcdn.net/img/6416956f0da1e.png",
      },
      {
        name: "Sacy",
        image: "https://owcdn.net/img/6416954a0788d.png",
      },
    ],
    id: "3",
    country: "Estados Unidos",
  },
  {
    name: "G2 Esports",
    label: "G2",
    value: "g2",
    logo: "https://owcdn.net/img/633822848a741.png",
    players: [
      {
        name: "valyn",
        image: "https://owcdn.net/img/65e4660ee20e5.png",
      },
      {
        name: "icy",
        image: "https://owcdn.net/img/661d7796c23e2.png",
      },
      {
        name: "trent",
        image: "https://owcdn.net/img/65e466071ca19.png",
      },
      {
        name: "JonahP",
        image: "https://owcdn.net/img/65e4636c00e46.png",
      },
      {
        name: "leaf",
        image: "https://owcdn.net/img/6613103dd51a4.png",
      },
    ],
    id: "4",
    country: "Estados Unidos",
  },
  {
    name: "100 Thieves",
    label: "100T",
    value: "100t",
    logo: "https://owcdn.net/img/603c00dbb7d39.png",
    players: [
      {
        name: "Boostio",
        image: "https://owcdn.net/img/641693760f427.png",
      },
      {
        name: "bang",
        image: "https://owcdn.net/img/64169245acebe.png",
      },
      {
        name: "Cryocells",
        image: "https://owcdn.net/img/64169262982eb.png",
      },
      {
        name: "eeiu",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawy0g6vwTBS7pRXsqg3o9PixztMFtNjJ-eJ4SQ9tWFA&s",
      },
      {
        name: "Asuna",
        image: "https://owcdn.net/img/641692800624c.png",
      },
    ],
    id: "5",
    country: "Estados Unidos",
  },
  {
    name: "Leviatán",
    label: "Leviatán",
    value: "leviatan",
    logo: "https://owcdn.net/img/61b88892a9814.png",
    players: [
      {
        name: "kiNgg",
        image: "https://owcdn.net/img/639a594be8d04.png",
      },
      {
        name: "tex",
        image: "https://owcdn.net/img/64bac4cfd9f9f.png",
      },
      {
        name: "Mazino",
        image: "https://owcdn.net/img/64b620c96e85f.png",
      },
      {
        name: "Aspas",
        image: "https://owcdn.net/img/64169733ae9f1.png",
      },
      {
        name: "C0M",
        image: "https://owcdn.net/img/641693c3a0312.png",
      },
    ],
    id: "6",
    country: "Chile",
  },
  {
    name: "Kru Esports",
    label: "KRU",
    value: "kru",
    logo: "https://owcdn.net/img/63976677069e1.png",
    players: [
      {
        name: "Klaus",
        image: "https://owcdn.net/img/63828f6495831.png",
      },
      {
        name: "keznit",
        image: "https://owcdn.net/img/66403b45d7584.png",
      },
      {
        name: "Shyy",
        image: "https://owcdn.net/img/664039e011708.png",
      },
      {
        name: "Melser",
        image: "https://owcdn.net/img/66403a76c87b8.png",
      },
      {
        name: "heat",
        image: "https://owcdn.net/img/6640398c585f8.png",
      },
    ],
    id: "7",
    country: "Argentina",
  },
  {
    name: "MIBR",
    label: "MIBR",
    value: "mibr",
    logo: "https://owcdn.net/img/632be767b57aa.png",
    players: [
      {
        name: "jzz",
        image: "https://owcdn.net/img/64408cff206c4.png",
      },
      {
        name: "mazin",
        image: "https://owcdn.net/img/65a4933f9b56c.png",
      },
      {
        name: "artzin",
        image: "https://owcdn.net/img/64328a8010bd9.png",
      },
      {
        name: "RgLMeister",
        image: "https://owcdn.net/img/64408cf1d1d0c.png",
      },
      {
        name: "frz",
        image: "https://owcdn.net/img/64408d3024970.png",
      },
    ],
    id: "8",
    country: "Brasil",
  },
  {
    name: "Cloud9",
    label: "CLOUD9",
    value: "cloud9",
    logo: "https://owcdn.net/img/628addcbd509e.png",
    players: [
      {
        name: "vanity",
        image: "https://owcdn.net/img/66193fd86424a.png",
      },
      {
        name: "Xeppaa",
        image: "https://owcdn.net/img/66193fbe36ba3.png",
      },
      {
        name: "runi",
        image: "https://owcdn.net/img/66193fc89a20b.png",
      },
      {
        name: "moose",
        image: "https://owcdn.net/img/66193fcfde2a8.png",
      },
      {
        name: "OXY",
        image: "https://owcdn.net/img/66193fe3c0381.png",
      },
    ],
    id: "9",
    country: "Estados Unidos",
  },
  {
    name: "Evil Geniuses",
    label: "Evil Geniuses",
    value: "evilGeniuses",
    logo: "https://owcdn.net/img/62a409b29c1ab.png",
    players: [
      {
        name: "NaturE",
        image: "https://owcdn.net/img/6100fb567bb9f.png",
      },
      {
        name: "Derrek",
        image: "https://owcdn.net/img/6416929dadae1.png",
      },
      {
        name: "supamen",
        image: "https://owcdn.net/img/6224ad074eaec.png",
      },
      {
        name: "Apoth",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3goFrc4u4K8Xi6HexuxUjv_8ujycIUVbqXic2pjJxBQ&s",
      },
      {
        name: "jawgemo",
        image: "https://owcdn.net/img/64169400bfed7.png",
      },
    ],
    id: "10",
    country: "Estados Unidos",
  },
  {
    name: "NRG Esports",
    label: "NRG",
    value: "nrg",
    logo: "https://owcdn.net/img/6610f02d2d7b0.png",
    players: [
      {
        name: "Ethan",
        image: "https://owcdn.net/img/6416939a5a1c2.png",
      },
      {
        name: "crashies",
        image: "https://owcdn.net/img/64169021cbddb.png",
      },
      {
        name: "Victor",
        image: "https://owcdn.net/img/64169062bfcf2.png",
      },
      {
        name: "Marved",
        image: "https://owcdn.net/img/6207474eb81b1.png",
      },
      {
        name: "Demon1",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw2vibqXyMmBKRz_ja91REwZh0QkRZ0bD_BqcV5UIjQ&s",
      },
    ],
    id: "11",
    country: "Estados Unidos",
  },
]

export default teams
