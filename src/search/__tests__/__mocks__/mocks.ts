import { Prisma } from "@prisma/client";
import { Book } from "../../../lib/types";

export const searchMocks: {
  search: string;
  searchObj: Book;
  prismaObj?: Prisma.BookFindManyArgs[] | Prisma.BookFindManyArgs;
  sqlResult?: any;
}[] = [
  {
    search: "2 Peter",
    searchObj: {
      name: "2 Peter",
      chapters: [],
    },
    prismaObj: [
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: { number: "asc" },
          },
        },
        where: { name: { startsWith: "2 Peter", mode: "insensitive" } },
      },
    ],
    sqlResult: [
      [
        {
          name: "2 Peter",
          chapters: [
            {
              number: 1,
              bookName: "2 Peter",
              verses: [
                {
                  number: 1,
                  text: "Simon Peter, a servant and an apostle of Jesus Christ, to them that have obtained like precious faith with us through the righteousness of God and our Saviour Jesus Christ:",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 2,
                  text: "Grace and peace be multiplied unto you through the knowledge of God, and of Jesus our Lord,",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 3,
                  text: "According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue:",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 4,
                  text: "Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 5,
                  text: "And beside this, giving all diligence, add to your faith virtue; and to virtue knowledge;",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 6,
                  text: "And to knowledge temperance; and to temperance patience; and to patience godliness;",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 7,
                  text: "And to godliness brotherly kindness; and to brotherly kindness charity.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 8,
                  text: "For if these things be in you, and abound, they make you that ye shall neither be barren nor unfruitful in the knowledge of our Lord Jesus Christ.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 9,
                  text: "But he that lacketh these things is blind, and cannot see afar off, and hath forgotten that he was purged from his old sins.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 10,
                  text: "Wherefore the rather, brethren, give diligence to make your calling and election sure: for if ye do these things, ye shall never fall:",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 11,
                  text: "For so an entrance shall be ministered unto you abundantly into the everlasting kingdom of our Lord and Saviour Jesus Christ.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 12,
                  text: "Wherefore I will not be negligent to put you always in remembrance of these things, though ye know them, and be established in the present truth.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 13,
                  text: "Yea, I think it meet, as long as I am in this tabernacle, to stir you up by putting you in remembrance;",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 14,
                  text: "Knowing that shortly I must put off this my tabernacle, even as our Lord Jesus Christ hath shewed me.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 15,
                  text: "Moreover I will endeavour that ye may be able after my decease to have these things always in remembrance.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 16,
                  text: "For we have not followed cunningly devised fables, when we made known unto you the power and coming of our Lord Jesus Christ, but were eyewitnesses of his majesty.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 17,
                  text: "For he received from God the Father honour and glory, when there came such a voice to him from the excellent glory, This is my beloved Son, in whom I am well pleased.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 18,
                  text: "And this voice which came from heaven we heard, when we were with him in the holy mount.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 19,
                  text: "We have also a more sure word of prophecy; whereunto ye do well that ye take heed, as unto a light that shineth in a dark place, until the day dawn, and the day star arise in your hearts:",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 20,
                  text: "Knowing this first, that no prophecy of the scripture is of any private interpretation.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
                {
                  number: 21,
                  text: "For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.",
                  chapterNumber: 1,
                  bookName: "2 Peter",
                },
              ],
            },
            {
              number: 2,
              bookName: "2 Peter",
              verses: [
                {
                  number: 1,
                  text: "But there were false prophets also among the people, even as there shall be false teachers among you, who privily shall bring in damnable heresies, even denying the Lord that bought them, and bring upon themselves swift destruction.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 2,
                  text: "And many shall follow their pernicious ways; by reason of whom the way of truth shall be evil spoken of.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 3,
                  text: "And through covetousness shall they with feigned words make merchandise of you: whose judgment now of a long time lingereth not, and their damnation slumbereth not.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 4,
                  text: "For if God spared not the angels that sinned, but cast them down to hell, and delivered them into chains of darkness, to be reserved unto judgment;",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 5,
                  text: "And spared not the old world, but saved Noah the eighth person, a preacher of righteousness, bringing in the flood upon the world of the ungodly;",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 6,
                  text: "And turning the cities of Sodom and Gomorrha into ashes condemned them with an overthrow, making them an ensample unto those that after should live ungodly;",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 7,
                  text: "And delivered just Lot, vexed with the filthy conversation of the wicked:",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 8,
                  text: "(For that righteous man dwelling among them, in seeing and hearing, vexed his righteous soul from day to day with their unlawful deeds;)",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 9,
                  text: "The Lord knoweth how to deliver the godly out of temptations, and to reserve the unjust unto the day of judgment to be punished:",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 10,
                  text: "But chiefly them that walk after the flesh in the lust of uncleanness, and despise government. Presumptuous are they, selfwilled, they are not afraid to speak evil of dignities.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 11,
                  text: "Whereas angels, which are greater in power and might, bring not railing accusation against them before the Lord.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 12,
                  text: "But these, as natural brute beasts, made to be taken and destroyed, speak evil of the things that they understand not; and shall utterly perish in their own corruption;",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 13,
                  text: "And shall receive the reward of unrighteousness, as they that count it pleasure to riot in the day time. Spots they are and blemishes, sporting themselves with their own deceivings while they feast with you;",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 14,
                  text: "Having eyes full of adultery, and that cannot cease from sin; beguiling unstable souls: an heart they have exercised with covetous practices; cursed children:",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 15,
                  text: "Which have forsaken the right way, and are gone astray, following the way of Balaam the son of Bosor, who loved the wages of unrighteousness;",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 16,
                  text: "But was rebuked for his iniquity: the dumb ass speaking with man’s voice forbad the madness of the prophet.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 17,
                  text: "These are wells without water, clouds that are carried with a tempest; to whom the mist of darkness is reserved for ever.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 18,
                  text: "For when they speak great swelling words of vanity, they allure through the lusts of the flesh, through much wantonness, those that were clean escaped from them who live in error.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 19,
                  text: "While they promise them liberty, they themselves are the servants of corruption: for of whom a man is overcome, of the same is he brought in bondage.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 20,
                  text: "For if after they have escaped the pollutions of the world through the knowledge of the Lord and Saviour Jesus Christ, they are again entangled therein, and overcome, the latter end is worse with them than the beginning.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 21,
                  text: "For it had been better for them not to have known the way of righteousness, than, after they have known it, to turn from the holy commandment delivered unto them.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
                {
                  number: 22,
                  text: "But it is happened unto them according to the true proverb, The dog is turned to his own vomit again; and the sow that was washed to her wallowing in the mire.",
                  chapterNumber: 2,
                  bookName: "2 Peter",
                },
              ],
            },
            {
              number: 3,
              bookName: "2 Peter",
              verses: [
                {
                  number: 1,
                  text: "This second epistle, beloved, I now write unto you; in both which I stir up your pure minds by way of remembrance:",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 2,
                  text: "That ye may be mindful of the words which were spoken before by the holy prophets, and of the commandment of us the apostles of the Lord and Saviour:",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 3,
                  text: "Knowing this first, that there shall come in the last days scoffers, walking after their own lusts,",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 4,
                  text: "And saying, Where is the promise of his coming? for since the fathers fell asleep, all things continue as they were from the beginning of the creation.",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 5,
                  text: "For this they willingly are ignorant of, that by the word of God the heavens were of old, and the earth standing out of the water and in the water:",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 6,
                  text: "Whereby the world that then was, being overflowed with water, perished:",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 7,
                  text: "But the heavens and the earth, which are now, by the same word are kept in store, reserved unto fire against the day of judgment and perdition of ungodly men.",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 8,
                  text: "But, beloved, be not ignorant of this one thing, that one day is with the Lord as a thousand years, and a thousand years as one day.",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 9,
                  text: "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance.",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 10,
                  text: "But the day of the Lord will come as a thief in the night; in the which the heavens shall pass away with a great noise, and the elements shall melt with fervent heat, the earth also and the works that are therein shall be burned up.",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 11,
                  text: "Seeing then that all these things shall be dissolved, what manner of persons ought ye to be in all holy conversation and godliness,",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 12,
                  text: "Looking for and hasting unto the coming of the day of God, wherein the heavens being on fire shall be dissolved, and the elements shall melt with fervent heat?",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 13,
                  text: "Nevertheless we, according to his promise, look for new heavens and a new earth, wherein dwelleth righteousness.",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 14,
                  text: "Wherefore, beloved, seeing that ye look for such things, be diligent that ye may be found of him in peace, without spot, and blameless.",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 15,
                  text: "And account that the longsuffering of our Lord is salvation; even as our beloved brother Paul also according to the wisdom given unto him hath written unto you;",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 16,
                  text: "As also in all his epistles, speaking in them of these things; in which are some things hard to be understood, which they that are unlearned and unstable wrest, as they do also the other scriptures, unto their own destruction.",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 17,
                  text: "Ye therefore, beloved, seeing ye know these things before, beware lest ye also, being led away with the error of the wicked, fall from your own stedfastness.",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
                {
                  number: 18,
                  text: "But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen.",
                  chapterNumber: 3,
                  bookName: "2 Peter",
                },
              ],
            },
          ],
        },
      ],
    ],
  },
  {
    search: "Song Of Solomon 3",
    searchObj: {
      name: "Song Of Solomon",
      chapters: [
        {
          number: 3,
          verses: [],
        },
      ],
    },
    prismaObj: {
      include: {
        chapters: {
          include: {
            verses: {
              orderBy: {
                number: "asc",
              },
            },
          },
          orderBy: {
            number: "asc",
          },
          where: {
            AND: [
              {
                bookName: {
                  startsWith: "Song Of Solomon",
                  mode: "insensitive",
                },
              },
              {
                number: 3,
              },
            ],
          },
        },
      },
      where: {
        name: {
          startsWith: "Song Of Solomon",
          mode: "insensitive",
        },
      },
    },
    sqlResult: [
      [
        {
          name: "Song of Solomon",
          chapters: [
            {
              number: 3,
              bookName: "Song of Solomon",
              verses: [
                {
                  number: 1,
                  text: "By night on my bed I sought him whom my soul loveth: I sought him, but I found him not.",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
                {
                  number: 2,
                  text: "I will rise now, and go about the city in the streets, and in the broad ways I will seek him whom my soul loveth: I sought him, but I found him not.",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
                {
                  number: 3,
                  text: "The watchmen that go about the city found me: to whom I said, Saw ye him whom my soul loveth?",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
                {
                  number: 4,
                  text: "It was but a little that I passed from them, but I found him whom my soul loveth: I held him, and would not let him go, until I had brought him into my mother’s house, and into the chamber of her that conceived me.",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
                {
                  number: 5,
                  text: "I charge you, O ye daughters of Jerusalem, by the roes, and by the hinds of the field, that ye stir not up, nor awake my love, till he please.",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
                {
                  number: 6,
                  text: "Who is this that cometh out of the wilderness like pillars of smoke, perfumed with myrrh and frankincense, with all powders of the merchant?",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
                {
                  number: 7,
                  text: "Behold his bed, which is Solomon’s; threescore valiant men are about it, of the valiant of Israel.",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
                {
                  number: 8,
                  text: "They all hold swords, being expert in war: every man hath his sword upon his thigh because of fear in the night.",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
                {
                  number: 9,
                  text: "King Solomon made himself a chariot of the wood of Lebanon.",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
                {
                  number: 10,
                  text: "He made the pillars thereof of silver, the bottom thereof of gold, the covering of it of purple, the midst thereof being paved with love, for the daughters of Jerusalem.",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
                {
                  number: 11,
                  text: "Go forth, O ye daughters of Zion, and behold king Solomon with the crown wherewith his mother crowned him in the day of his espousals, and in the day of the gladness of his heart.",
                  chapterNumber: 3,
                  bookName: "Song of Solomon",
                },
              ],
            },
          ],
        },
      ],
    ],
  },
  {
    search: "1 Samuel 11:11",
    searchObj: {
      name: "1 Samuel",
      chapters: [
        {
          number: 11,
          verses: [{ number: 11 }],
        },
      ],
    },
    prismaObj: [
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
                where: {
                  AND: [
                    {
                      bookName: {
                        startsWith: "1 Samuel",
                        mode: "insensitive",
                      },
                    },
                    {
                      number: {
                        in: [11],
                      },
                    },
                  ],
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 Samuel",
                    mode: "insensitive",
                  },
                },
                {
                  number: 11,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 Samuel",
            mode: "insensitive",
          },
        },
      },
    ],
    sqlResult: [
      [
        {
          name: "1 Samuel",
          chapters: [
            {
              number: 11,
              bookName: "1 Samuel",
              verses: [
                {
                  number: 11,
                  text: "And it was so on the morrow, that Saul put the people in three companies; and they came into the midst of the host in the morning watch, and slew the Ammonites until the heat of the day: and it came to pass, that they which remained were scattered, so that two of them were not left together.",
                  chapterNumber: 11,
                  bookName: "1 Samuel",
                },
              ],
            },
          ],
        },
      ],
    ],
  },
  {
    search: "1 John2 - 4",
    searchObj: {
      name: "1 John",
      chapters: [
        {
          number: 2,
          verses: [],
        },
        {
          number: 3,
          verses: [],
        },
        {
          number: 4,
          verses: [],
        },
      ],
    },
    prismaObj: [
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 John",
                    mode: "insensitive",
                  },
                },
                {
                  number: 2,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 John",
            mode: "insensitive",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 John",
                    mode: "insensitive",
                  },
                },
                {
                  number: 3,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 John",
            mode: "insensitive",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 John",
                    mode: "insensitive",
                  },
                },
                {
                  number: 4,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 John",
            mode: "insensitive",
          },
        },
      },
    ],
    sqlResult: [
      [
        {
          chapters: [
            {
              bookName: "1 John",
              number: 2,
              verses: [
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 1,
                  text: "My little children, these things write I unto you, that ye sin not. And if any man sin, we have an advocate with the Father, Jesus Christ the righteous:",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 2,
                  text: "And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 3,
                  text: "And hereby we do know that we know him, if we keep his commandments.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 4,
                  text: "He that saith, I know him, and keepeth not his commandments, is a liar, and the truth is not in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 5,
                  text: "But whoso keepeth his word, in him verily is the love of God perfected: hereby know we that we are in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 6,
                  text: "He that saith he abideth in him ought himself also so to walk, even as he walked.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 7,
                  text: "Brethren, I write no new commandment unto you, but an old commandment which ye had from the beginning. The old commandment is the word which ye have heard from the beginning.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 8,
                  text: "Again, a new commandment I write unto you, which thing is true in him and in you: because the darkness is past, and the true light now shineth.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 9,
                  text: "He that saith he is in the light, and hateth his brother, is in darkness even until now.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 10,
                  text: "He that loveth his brother abideth in the light, and there is none occasion of stumbling in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 11,
                  text: "But he that hateth his brother is in darkness, and walketh in darkness, and knoweth not whither he goeth, because that darkness hath blinded his eyes.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 12,
                  text: "I write unto you, little children, because your sins are forgiven you for his name’s sake.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 13,
                  text: "I write unto you, fathers, because ye have known him that is from the beginning. I write unto you, young men, because ye have overcome the wicked one. I write unto you, little children, because ye have known the Father.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 14,
                  text: "I have written unto you, fathers, because ye have known him that is from the beginning. I have written unto you, young men, because ye are strong, and the word of God abideth in you, and ye have overcome the wicked one.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 15,
                  text: "Love not the world, neither the things that are in the world. If any man love the world, the love of the Father is not in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 16,
                  text: "For all that is in the world, the lust of the flesh, and the lust of the eyes, and the pride of life, is not of the Father, but is of the world.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 17,
                  text: "And the world passeth away, and the lust thereof: but he that doeth the will of God abideth for ever.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 18,
                  text: "Little children, it is the last time: and as ye have heard that antichrist shall come, even now are there many antichrists; whereby we know that it is the last time.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 19,
                  text: "They went out from us, but they were not of us; for if they had been of us, they would no doubt have continued with us: but they went out, that they might be made manifest that they were not all of us.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 20,
                  text: "But ye have an unction from the Holy One, and ye know all things.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 21,
                  text: "I have not written unto you because ye know not the truth, but because ye know it, and that no lie is of the truth.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 22,
                  text: "Who is a liar but he that denieth that Jesus is the Christ? He is antichrist, that denieth the Father and the Son.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 23,
                  text: "Whosoever denieth the Son, the same hath not the Father: he that acknowledgeth the Son hath the Father also.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 24,
                  text: "Let that therefore abide in you, which ye have heard from the beginning. If that which ye have heard from the beginning shall remain in you, ye also shall continue in the Son, and in the Father.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 25,
                  text: "And this is the promise that he hath promised us, even eternal life.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 26,
                  text: "These things have I written unto you concerning them that seduce you.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 27,
                  text: "But the anointing which ye have received of him abideth in you, and ye need not that any man teach you: but as the same anointing teacheth you of all things, and is truth, and is no lie, and even as it hath taught you, ye shall abide in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 28,
                  text: "And now, little children, abide in him; that, when he shall appear, we may have confidence, and not be ashamed before him at his coming.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 29,
                  text: "If ye know that he is righteous, ye know that every one that doeth righteousness is born of him.",
                },
              ],
            },
          ],
          name: "1 John",
        },
      ],
      [
        {
          chapters: [
            {
              bookName: "1 John",
              number: 3,
              verses: [
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 1,
                  text: "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 2,
                  text: "Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be like him; for we shall see him as he is.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 3,
                  text: "And every man that hath this hope in him purifieth himself, even as he is pure.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 4,
                  text: "Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 5,
                  text: "And ye know that he was manifested to take away our sins; and in him is no sin.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 6,
                  text: "Whosoever abideth in him sinneth not: whosoever sinneth hath not seen him, neither known him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 7,
                  text: "Little children, let no man deceive you: he that doeth righteousness is righteous, even as he is righteous.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 8,
                  text: "He that committeth sin is of the devil; for the devil sinneth from the beginning. For this purpose the Son of God was manifested, that he might destroy the works of the devil.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 9,
                  text: "Whosoever is born of God doth not commit sin; for his seed remaineth in him: and he cannot sin, because he is born of God.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 10,
                  text: "In this the children of God are manifest, and the children of the devil: whosoever doeth not righteousness is not of God, neither he that loveth not his brother.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 11,
                  text: "For this is the message that ye heard from the beginning, that we should love one another.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 12,
                  text: "Not as Cain, who was of that wicked one, and slew his brother. And wherefore slew he him? Because his own works were evil, and his brother’s righteous.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 13,
                  text: "Marvel not, my brethren, if the world hate you.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 14,
                  text: "We know that we have passed from death unto life, because we love the brethren. He that loveth not his brother abideth in death.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 15,
                  text: "Whosoever hateth his brother is a murderer: and ye know that no murderer hath eternal life abiding in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 16,
                  text: "Hereby perceive we the love of God, because he laid down his life for us: and we ought to lay down our lives for the brethren.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 17,
                  text: "But whoso hath this world’s good, and seeth his brother have need, and shutteth up his bowels of compassion from him, how dwelleth the love of God in him?",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 18,
                  text: "My little children, let us not love in word, neither in tongue; but in deed and in truth.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 19,
                  text: "And hereby we know that we are of the truth, and shall assure our hearts before him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 20,
                  text: "For if our heart condemn us, God is greater than our heart, and knoweth all things.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 21,
                  text: "Beloved, if our heart condemn us not, then have we confidence toward God.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 22,
                  text: "And whatsoever we ask, we receive of him, because we keep his commandments, and do those things that are pleasing in his sight.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 23,
                  text: "And this is his commandment, That we should believe on the name of his Son Jesus Christ, and love one another, as he gave us commandment.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 24,
                  text: "And he that keepeth his commandments dwelleth in him, and he in him. And hereby we know that he abideth in us, by the Spirit which he hath given us.",
                },
              ],
            },
          ],
          name: "1 John",
        },
      ],
      [
        {
          chapters: [
            {
              bookName: "1 John",
              number: 4,
              verses: [
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 1,
                  text: "Beloved, believe not every spirit, but try the spirits whether they are of God: because many false prophets are gone out into the world.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 2,
                  text: "Hereby know ye the Spirit of God: Every spirit that confesseth that Jesus Christ is come in the flesh is of God:",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 3,
                  text: "And every spirit that confesseth not that Jesus Christ is come in the flesh is not of God: and this is that spirit of antichrist, whereof ye have heard that it should come; and even now already is it in the world.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 4,
                  text: "Ye are of God, little children, and have overcome them: because greater is he that is in you, than he that is in the world.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 5,
                  text: "They are of the world: therefore speak they of the world, and the world heareth them.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 6,
                  text: "We are of God: he that knoweth God heareth us; he that is not of God heareth not us. Hereby know we the spirit of truth, and the spirit of error.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 7,
                  text: "Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 8,
                  text: "He that loveth not knoweth not God; for God is love.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 9,
                  text: "In this was manifested the love of God toward us, because that God sent his only begotten Son into the world, that we might live through him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 10,
                  text: "Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 11,
                  text: "Beloved, if God so loved us, we ought also to love one another.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 12,
                  text: "No man hath seen God at any time. If we love one another, God dwelleth in us, and his love is perfected in us.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 13,
                  text: "Hereby know we that we dwell in him, and he in us, because he hath given us of his Spirit.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 14,
                  text: "And we have seen and do testify that the Father sent the Son to be the Saviour of the world.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 15,
                  text: "Whosoever shall confess that Jesus is the Son of God, God dwelleth in him, and he in God.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 16,
                  text: "And we have known and believed the love that God hath to us. God is love; and he that dwelleth in love dwelleth in God, and God in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 17,
                  text: "Herein is our love made perfect, that we may have boldness in the day of judgment: because as he is, so are we in this world.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 18,
                  text: "There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 19,
                  text: "We love him, because he first loved us.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 20,
                  text: "If a man say, I love God, and hateth his brother, he is a liar: for he that loveth not his brother whom he hath seen, how can he love God whom he hath not seen?",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 4,
                  number: 21,
                  text: "And this commandment have we from him, That he who loveth God love his brother also.",
                },
              ],
            },
          ],
          name: "1 John",
        },
      ],
    ],
  },
  {
    search: "1 Samuel  11 :  11  -  13",
    searchObj: {
      name: "1 Samuel",
      chapters: [
        {
          number: 11,
          verses: [{ number: 11 }, { number: 12 }, { number: 13 }],
        },
      ],
    },
    prismaObj: {
      include: {
        chapters: {
          include: {
            verses: {
              orderBy: {
                number: "asc",
              },
              where: {
                AND: [
                  {
                    bookName: {
                      startsWith: "1 Samuel",
                      mode: "insensitive",
                    },
                  },
                  {
                    number: {
                      in: [11, 12, 13],
                    },
                  },
                ],
              },
            },
          },
          orderBy: {
            number: "asc",
          },
          where: {
            AND: [
              {
                bookName: {
                  startsWith: "1 Samuel",
                  mode: "insensitive",
                },
              },
              {
                number: 11,
              },
            ],
          },
        },
      },
      where: {
        name: {
          startsWith: "1 Samuel",
          mode: "insensitive",
        },
      },
    },
    sqlResult: [
      [
        {
          chapters: [
            {
              bookName: "1 Samuel",
              number: 11,
              verses: [
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 11,
                  text: "And it was so on the morrow, that Saul put the people in three companies; and they came into the midst of the host in the morning watch, and slew the Ammonites until the heat of the day: and it came to pass, that they which remained were scattered, so that two of them were not left together.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 12,
                  text: "And the people said unto Samuel, Who is he that said, Shall Saul reign over us? bring the men, that we may put them to death.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 13,
                  text: "And Saul said, There shall not a man be put to death this day: for to day the LORD hath wrought salvation in Israel.",
                },
              ],
            },
          ],
          name: "1 Samuel",
        },
      ],
    ],
  },
  {
    search: "1 John1 - 3, 5",
    searchObj: {
      name: "1 John",
      chapters: [
        {
          number: 1,
        },
        {
          number: 2,
        },
        {
          number: 3,
        },
        {
          number: 5,
        },
      ],
    },
    prismaObj: [
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 John",
                    mode: "insensitive",
                  },
                },
                {
                  number: 1,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 John",
            mode: "insensitive",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 John",
                    mode: "insensitive",
                  },
                },
                {
                  number: 2,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 John",
            mode: "insensitive",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 John",
                    mode: "insensitive",
                  },
                },
                {
                  number: 3,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 John",
            mode: "insensitive",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 John",
                    mode: "insensitive",
                  },
                },
                {
                  number: 5,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 John",
            mode: "insensitive",
          },
        },
      },
    ],
    sqlResult: [
      [
        {
          chapters: [
            {
              bookName: "1 John",
              number: 1,
              verses: [
                {
                  bookName: "1 John",
                  chapterNumber: 1,
                  number: 1,
                  text: "That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked upon, and our hands have handled, of the Word of life;",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 1,
                  number: 2,
                  text: "(For the life was manifested, and we have seen it, and bear witness, and shew unto you that eternal life, which was with the Father, and was manifested unto us;)",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 1,
                  number: 3,
                  text: "That which we have seen and heard declare we unto you, that ye also may have fellowship with us: and truly our fellowship is with the Father, and with his Son Jesus Christ.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 1,
                  number: 4,
                  text: "And these things write we unto you, that your joy may be full.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 1,
                  number: 5,
                  text: "This then is the message which we have heard of him, and declare unto you, that God is light, and in him is no darkness at all.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 1,
                  number: 6,
                  text: "If we say that we have fellowship with him, and walk in darkness, we lie, and do not the truth:",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 1,
                  number: 7,
                  text: "But if we walk in the light, as he is in the light, we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 1,
                  number: 8,
                  text: "If we say that we have no sin, we deceive ourselves, and the truth is not in us.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 1,
                  number: 9,
                  text: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 1,
                  number: 10,
                  text: "If we say that we have not sinned, we make him a liar, and his word is not in us.",
                },
              ],
            },
          ],
          name: "1 John",
        },
      ],
      [
        {
          chapters: [
            {
              bookName: "1 John",
              number: 2,
              verses: [
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 1,
                  text: "My little children, these things write I unto you, that ye sin not. And if any man sin, we have an advocate with the Father, Jesus Christ the righteous:",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 2,
                  text: "And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 3,
                  text: "And hereby we do know that we know him, if we keep his commandments.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 4,
                  text: "He that saith, I know him, and keepeth not his commandments, is a liar, and the truth is not in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 5,
                  text: "But whoso keepeth his word, in him verily is the love of God perfected: hereby know we that we are in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 6,
                  text: "He that saith he abideth in him ought himself also so to walk, even as he walked.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 7,
                  text: "Brethren, I write no new commandment unto you, but an old commandment which ye had from the beginning. The old commandment is the word which ye have heard from the beginning.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 8,
                  text: "Again, a new commandment I write unto you, which thing is true in him and in you: because the darkness is past, and the true light now shineth.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 9,
                  text: "He that saith he is in the light, and hateth his brother, is in darkness even until now.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 10,
                  text: "He that loveth his brother abideth in the light, and there is none occasion of stumbling in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 11,
                  text: "But he that hateth his brother is in darkness, and walketh in darkness, and knoweth not whither he goeth, because that darkness hath blinded his eyes.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 12,
                  text: "I write unto you, little children, because your sins are forgiven you for his name’s sake.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 13,
                  text: "I write unto you, fathers, because ye have known him that is from the beginning. I write unto you, young men, because ye have overcome the wicked one. I write unto you, little children, because ye have known the Father.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 14,
                  text: "I have written unto you, fathers, because ye have known him that is from the beginning. I have written unto you, young men, because ye are strong, and the word of God abideth in you, and ye have overcome the wicked one.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 15,
                  text: "Love not the world, neither the things that are in the world. If any man love the world, the love of the Father is not in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 16,
                  text: "For all that is in the world, the lust of the flesh, and the lust of the eyes, and the pride of life, is not of the Father, but is of the world.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 17,
                  text: "And the world passeth away, and the lust thereof: but he that doeth the will of God abideth for ever.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 18,
                  text: "Little children, it is the last time: and as ye have heard that antichrist shall come, even now are there many antichrists; whereby we know that it is the last time.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 19,
                  text: "They went out from us, but they were not of us; for if they had been of us, they would no doubt have continued with us: but they went out, that they might be made manifest that they were not all of us.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 20,
                  text: "But ye have an unction from the Holy One, and ye know all things.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 21,
                  text: "I have not written unto you because ye know not the truth, but because ye know it, and that no lie is of the truth.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 22,
                  text: "Who is a liar but he that denieth that Jesus is the Christ? He is antichrist, that denieth the Father and the Son.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 23,
                  text: "Whosoever denieth the Son, the same hath not the Father: he that acknowledgeth the Son hath the Father also.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 24,
                  text: "Let that therefore abide in you, which ye have heard from the beginning. If that which ye have heard from the beginning shall remain in you, ye also shall continue in the Son, and in the Father.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 25,
                  text: "And this is the promise that he hath promised us, even eternal life.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 26,
                  text: "These things have I written unto you concerning them that seduce you.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 27,
                  text: "But the anointing which ye have received of him abideth in you, and ye need not that any man teach you: but as the same anointing teacheth you of all things, and is truth, and is no lie, and even as it hath taught you, ye shall abide in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 28,
                  text: "And now, little children, abide in him; that, when he shall appear, we may have confidence, and not be ashamed before him at his coming.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 2,
                  number: 29,
                  text: "If ye know that he is righteous, ye know that every one that doeth righteousness is born of him.",
                },
              ],
            },
          ],
          name: "1 John",
        },
      ],
      [
        {
          chapters: [
            {
              bookName: "1 John",
              number: 3,
              verses: [
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 1,
                  text: "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 2,
                  text: "Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be like him; for we shall see him as he is.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 3,
                  text: "And every man that hath this hope in him purifieth himself, even as he is pure.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 4,
                  text: "Whosoever committeth sin transgresseth also the law: for sin is the transgression of the law.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 5,
                  text: "And ye know that he was manifested to take away our sins; and in him is no sin.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 6,
                  text: "Whosoever abideth in him sinneth not: whosoever sinneth hath not seen him, neither known him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 7,
                  text: "Little children, let no man deceive you: he that doeth righteousness is righteous, even as he is righteous.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 8,
                  text: "He that committeth sin is of the devil; for the devil sinneth from the beginning. For this purpose the Son of God was manifested, that he might destroy the works of the devil.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 9,
                  text: "Whosoever is born of God doth not commit sin; for his seed remaineth in him: and he cannot sin, because he is born of God.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 10,
                  text: "In this the children of God are manifest, and the children of the devil: whosoever doeth not righteousness is not of God, neither he that loveth not his brother.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 11,
                  text: "For this is the message that ye heard from the beginning, that we should love one another.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 12,
                  text: "Not as Cain, who was of that wicked one, and slew his brother. And wherefore slew he him? Because his own works were evil, and his brother’s righteous.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 13,
                  text: "Marvel not, my brethren, if the world hate you.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 14,
                  text: "We know that we have passed from death unto life, because we love the brethren. He that loveth not his brother abideth in death.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 15,
                  text: "Whosoever hateth his brother is a murderer: and ye know that no murderer hath eternal life abiding in him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 16,
                  text: "Hereby perceive we the love of God, because he laid down his life for us: and we ought to lay down our lives for the brethren.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 17,
                  text: "But whoso hath this world’s good, and seeth his brother have need, and shutteth up his bowels of compassion from him, how dwelleth the love of God in him?",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 18,
                  text: "My little children, let us not love in word, neither in tongue; but in deed and in truth.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 19,
                  text: "And hereby we know that we are of the truth, and shall assure our hearts before him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 20,
                  text: "For if our heart condemn us, God is greater than our heart, and knoweth all things.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 21,
                  text: "Beloved, if our heart condemn us not, then have we confidence toward God.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 22,
                  text: "And whatsoever we ask, we receive of him, because we keep his commandments, and do those things that are pleasing in his sight.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 23,
                  text: "And this is his commandment, That we should believe on the name of his Son Jesus Christ, and love one another, as he gave us commandment.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 3,
                  number: 24,
                  text: "And he that keepeth his commandments dwelleth in him, and he in him. And hereby we know that he abideth in us, by the Spirit which he hath given us.",
                },
              ],
            },
          ],
          name: "1 John",
        },
      ],
      [
        {
          chapters: [
            {
              bookName: "1 John",
              number: 5,
              verses: [
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 1,
                  text: "Whosoever believeth that Jesus is the Christ is born of God: and every one that loveth him that begat loveth him also that is begotten of him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 2,
                  text: "By this we know that we love the children of God, when we love God, and keep his commandments.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 3,
                  text: "For this is the love of God, that we keep his commandments: and his commandments are not grievous.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 4,
                  text: "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 5,
                  text: "Who is he that overcometh the world, but he that believeth that Jesus is the Son of God?",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 6,
                  text: "This is he that came by water and blood, even Jesus Christ; not by water only, but by water and blood. And it is the Spirit that beareth witness, because the Spirit is truth.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 7,
                  text: "For there are three that bear record in heaven, the Father, the Word, and the Holy Ghost: and these three are one.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 8,
                  text: "And there are three that bear witness in earth, the Spirit, and the water, and the blood: and these three agree in one.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 9,
                  text: "If we receive the witness of men, the witness of God is greater: for this is the witness of God which he hath testified of his Son.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 10,
                  text: "He that believeth on the Son of God hath the witness in himself: he that believeth not God hath made him a liar; because he believeth not the record that God gave of his Son.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 11,
                  text: "And this is the record, that God hath given to us eternal life, and this life is in his Son.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 12,
                  text: "He that hath the Son hath life; and he that hath not the Son of God hath not life.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 13,
                  text: "These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life, and that ye may believe on the name of the Son of God.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 14,
                  text: "And this is the confidence that we have in him, that, if we ask any thing according to his will, he heareth us:",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 15,
                  text: "And if we know that he hear us, whatsoever we ask, we know that we have the petitions that we desired of him.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 16,
                  text: "If any man see his brother sin a sin which is not unto death, he shall ask, and he shall give him life for them that sin not unto death. There is a sin unto death: I do not say that he shall pray for it.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 17,
                  text: "All unrighteousness is sin: and there is a sin not unto death.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 18,
                  text: "We know that whosoever is born of God sinneth not; but he that is begotten of God keepeth himself, and that wicked one toucheth him not.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 19,
                  text: "And we know that we are of God, and the whole world lieth in wickedness.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 20,
                  text: "And we know that the Son of God is come, and hath given us an understanding, that we may know him that is true, and we are in him that is true, even in his Son Jesus Christ. This is the true God, and eternal life.",
                },
                {
                  bookName: "1 John",
                  chapterNumber: 5,
                  number: 21,
                  text: "Little children, keep yourselves from idols. Amen.",
                },
              ],
            },
          ],
          name: "1 John",
        },
      ],
    ],
  },
  {
    search: "1 Samuel  11 :  11  -  13",
    searchObj: {
      name: "1 Samuel",
      chapters: [
        {
          number: 11,
          verses: [{ number: 11 }, { number: 12 }, { number: 13 }],
        },
      ],
    },
    prismaObj: {
      include: {
        chapters: {
          include: {
            verses: {
              orderBy: {
                number: "asc",
              },
              where: {
                AND: [
                  {
                    bookName: {
                      startsWith: "1 Samuel",
                      mode: "insensitive",
                    },
                  },
                  {
                    number: {
                      in: [11, 12, 13],
                    },
                  },
                ],
              },
            },
          },
          orderBy: {
            number: "asc",
          },
          where: {
            AND: [
              {
                bookName: {
                  startsWith: "1 Samuel",
                  mode: "insensitive",
                },
              },
              {
                number: 11,
              },
            ],
          },
        },
      },
      where: {
        name: {
          startsWith: "1 Samuel",
          mode: "insensitive",
        },
      },
    },
    sqlResult: [
      [
        {
          chapters: [
            {
              bookName: "1 Samuel",
              number: 11,
              verses: [
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 11,
                  text: "And it was so on the morrow, that Saul put the people in three companies; and they came into the midst of the host in the morning watch, and slew the Ammonites until the heat of the day: and it came to pass, that they which remained were scattered, so that two of them were not left together.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 12,
                  text: "And the people said unto Samuel, Who is he that said, Shall Saul reign over us? bring the men, that we may put them to death.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 13,
                  text: "And Saul said, There shall not a man be put to death this day: for to day the LORD hath wrought salvation in Israel.",
                },
              ],
            },
          ],
          name: "1 Samuel",
        },
      ],
    ],
  },
  {
    search: "1  Samuel  9,  11,  13",
    searchObj: {
      name: "1 Samuel",
      chapters: [
        {
          number: 9,
        },
        {
          number: 11,
        },
        {
          number: 13,
        },
      ],
    },
    prismaObj: [
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 Samuel",
                    mode: "insensitive",
                  },
                },
                {
                  number: 9,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 Samuel",
            mode: "insensitive",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 Samuel",
                    mode: "insensitive",
                  },
                },
                {
                  number: 11,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 Samuel",
            mode: "insensitive",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 Samuel",
                    mode: "insensitive",
                  },
                },
                {
                  number: 13,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 Samuel",
            mode: "insensitive",
          },
        },
      },
    ],
    sqlResult: [
      [
        {
          chapters: [
            {
              bookName: "1 Samuel",
              number: 9,
              verses: [
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 1,
                  text: "Now there was a man of Benjamin, whose name was Kish, the son of Abiel, the son of Zeror, the son of Bechorath, the son of Aphiah, a Benjamite, a mighty man of power.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 2,
                  text: "And he had a son, whose name was Saul, a choice young man, and a goodly: and there was not among the children of Israel a goodlier person than he: from his shoulders and upward he was higher than any of the people.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 3,
                  text: "And the asses of Kish Saul’s father were lost. And Kish said to Saul his son, Take now one of the servants with thee, and arise, go seek the asses.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 4,
                  text: "And he passed through mount Ephraim, and passed through the land of Shalisha, but they found them not: then they passed through the land of Shalim, and there they were not: and he passed through the land of the Benjamites, but they found them not.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 5,
                  text: "And when they were come to the land of Zuph, Saul said to his servant that was with him, Come, and let us return; lest my father leave caring for the asses, and take thought for us.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 6,
                  text: "And he said unto him, Behold now, there is in this city a man of God, and he is an honourable man; all that he saith cometh surely to pass: now let us go thither; peradventure he can shew us our way that we should go.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 7,
                  text: "Then said Saul to his servant, But, behold, if we go, what shall we bring the man? for the bread is spent in our vessels, and there is not a present to bring to the man of God: what have we?",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 8,
                  text: "And the servant answered Saul again, and said, Behold, I have here at hand the fourth part of a shekel of silver: that will I give to the man of God, to tell us our way.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 9,
                  text: "(Beforetime in Israel, when a man went to enquire of God, thus he spake, Come, and let us go to the seer: for he that is now called a Prophet was beforetime called a Seer.)",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 10,
                  text: "Then said Saul to his servant, Well said; come, let us go. So they went unto the city where the man of God was.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 11,
                  text: "And as they went up the hill to the city, they found young maidens going out to draw water, and said unto them, Is the seer here?",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 12,
                  text: "And they answered them, and said, He is; behold, he is before you: make haste now, for he came to day to the city; for there is a sacrifice of the people to day in the high place:",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 13,
                  text: "As soon as ye be come into the city, ye shall straightway find him, before he go up to the high place to eat: for the people will not eat until he come, because he doth bless the sacrifice; and afterwards they eat that be bidden. Now therefore get you up; for about this time ye shall find him.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 14,
                  text: "And they went up into the city: and when they were come into the city, behold, Samuel came out against them, for to go up to the high place.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 15,
                  text: "Now the LORD had told Samuel in his ear a day before Saul came, saying,",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 16,
                  text: "To morrow about this time I will send thee a man out of the land of Benjamin, and thou shalt anoint him to be captain over my people Israel, that he may save my people out of the hand of the Philistines: for I have looked upon my people, because their cry is come unto me.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 17,
                  text: "And when Samuel saw Saul, the LORD said unto him, Behold the man whom I spake to thee of! this same shall reign over my people.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 18,
                  text: "Then Saul drew near to Samuel in the gate, and said, Tell me, I pray thee, where the seer’s house is.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 19,
                  text: "And Samuel answered Saul, and said, I am the seer: go up before me unto the high place; for ye shall eat with me to day, and to morrow I will let thee go, and will tell thee all that is in thine heart.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 20,
                  text: "And as for thine asses that were lost three days ago, set not thy mind on them; for they are found. And on whom is all the desire of Israel? Is it not on thee, and on all thy father’s house?",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 21,
                  text: "And Saul answered and said, Am not I a Benjamite, of the smallest of the tribes of Israel? and my family the least of all the families of the tribe of Benjamin? wherefore then speakest thou so to me?",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 22,
                  text: "And Samuel took Saul and his servant, and brought them into the parlour, and made them sit in the chiefest place among them that were bidden, which were about thirty persons.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 23,
                  text: "And Samuel said unto the cook, Bring the portion which I gave thee, of which I said unto thee, Set it by thee.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 24,
                  text: "And the cook took up the shoulder, and that which was upon it, and set it before Saul. And Samuel said, Behold that which is left! set it before thee, and eat: for unto this time hath it been kept for thee since I said, I have invited the people. So Saul did eat with Samuel that day.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 25,
                  text: "And when they were come down from the high place into the city, Samuel communed with Saul upon the top of the house.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 26,
                  text: "And they arose early: and it came to pass about the spring of the day, that Samuel called Saul to the top of the house, saying, Up, that I may send thee away. And Saul arose, and they went out both of them, he and Samuel, abroad.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 9,
                  number: 27,
                  text: "And as they were going down to the end of the city, Samuel said to Saul, Bid the servant pass on before us, (and he passed on), but stand thou still a while, that I may shew thee the word of God.",
                },
              ],
            },
          ],
          name: "1 Samuel",
        },
      ],
      [
        {
          chapters: [
            {
              bookName: "1 Samuel",
              number: 11,
              verses: [
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 1,
                  text: "Then Nahash the Ammonite came up, and encamped against Jabeshgilead: and all the men of Jabesh said unto Nahash, Make a covenant with us, and we will serve thee.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 2,
                  text: "And Nahash the Ammonite answered them, On this condition will I make a covenant with you, that I may thrust out all your right eyes, and lay it for a reproach upon all Israel.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 3,
                  text: "And the elders of Jabesh said unto him, Give us seven days’ respite, that we may send messengers unto all the coasts of Israel: and then, if there be no man to save us, we will come out to thee.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 4,
                  text: "Then came the messengers to Gibeah of Saul, and told the tidings in the ears of the people: and all the people lifted up their voices, and wept.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 5,
                  text: "And, behold, Saul came after the herd out of the field; and Saul said, What aileth the people that they weep? And they told him the tidings of the men of Jabesh.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 6,
                  text: "And the Spirit of God came upon Saul when he heard those tidings, and his anger was kindled greatly.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 7,
                  text: "And he took a yoke of oxen, and hewed them in pieces, and sent them throughout all the coasts of Israel by the hands of messengers, saying, Whosoever cometh not forth after Saul and after Samuel, so shall it be done unto his oxen. And the fear of the LORD fell on the people, and they came out with one consent.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 8,
                  text: "And when he numbered them in Bezek, the children of Israel were three hundred thousand, and the men of Judah thirty thousand.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 9,
                  text: "And they said unto the messengers that came, Thus shall ye say unto the men of Jabeshgilead, To morrow, by that time the sun be hot, ye shall have help. And the messengers came and shewed it to the men of Jabesh; and they were glad.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 10,
                  text: "Therefore the men of Jabesh said, To morrow we will come out unto you, and ye shall do with us all that seemeth good unto you.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 11,
                  text: "And it was so on the morrow, that Saul put the people in three companies; and they came into the midst of the host in the morning watch, and slew the Ammonites until the heat of the day: and it came to pass, that they which remained were scattered, so that two of them were not left together.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 12,
                  text: "And the people said unto Samuel, Who is he that said, Shall Saul reign over us? bring the men, that we may put them to death.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 13,
                  text: "And Saul said, There shall not a man be put to death this day: for to day the LORD hath wrought salvation in Israel.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 14,
                  text: "Then said Samuel to the people, Come, and let us go to Gilgal, and renew the kingdom there.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 11,
                  number: 15,
                  text: "And all the people went to Gilgal; and there they made Saul king before the LORD in Gilgal; and there they sacrificed sacrifices of peace offerings before the LORD; and there Saul and all the men of Israel rejoiced greatly.",
                },
              ],
            },
          ],
          name: "1 Samuel",
        },
      ],
      [
        {
          chapters: [
            {
              bookName: "1 Samuel",
              number: 13,
              verses: [
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 1,
                  text: "Saul reigned one year; and when he had reigned two years over Israel,",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 2,
                  text: "Saul chose him three thousand men of Israel; whereof two thousand were with Saul in Michmash and in mount Bethel, and a thousand were with Jonathan in Gibeah of Benjamin: and the rest of the people he sent every man to his tent.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 3,
                  text: "And Jonathan smote the garrison of the Philistines that was in Geba, and the Philistines heard of it. And Saul blew the trumpet throughout all the land, saying, Let the Hebrews hear.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 4,
                  text: "And all Israel heard say that Saul had smitten a garrison of the Philistines, and that Israel also was had in abomination with the Philistines. And the people were called together after Saul to Gilgal.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 5,
                  text: "And the Philistines gathered themselves together to fight with Israel, thirty thousand chariots, and six thousand horsemen, and people as the sand which is on the sea shore in multitude: and they came up, and pitched in Michmash, eastward from Bethaven.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 6,
                  text: "When the men of Israel saw that they were in a strait, (for the people were distressed,) then the people did hide themselves in caves, and in thickets, and in rocks, and in high places, and in pits.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 7,
                  text: "And some of the Hebrews went over Jordan to the land of Gad and Gilead. As for Saul, he was yet in Gilgal, and all the people followed him trembling.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 8,
                  text: "And he tarried seven days, according to the set time that Samuel had appointed: but Samuel came not to Gilgal; and the people were scattered from him.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 9,
                  text: "And Saul said, Bring hither a burnt offering to me, and peace offerings. And he offered the burnt offering.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 10,
                  text: "And it came to pass, that as soon as he had made an end of offering the burnt offering, behold, Samuel came; and Saul went out to meet him, that he might salute him.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 11,
                  text: "And Samuel said, What hast thou done? And Saul said, Because I saw that the people were scattered from me, and that thou camest not within the days appointed, and that the Philistines gathered themselves together at Michmash;",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 12,
                  text: "Therefore said I, The Philistines will come down now upon me to Gilgal, and I have not made supplication unto the LORD: I forced myself therefore, and offered a burnt offering.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 13,
                  text: "And Samuel said to Saul, Thou hast done foolishly: thou hast not kept the commandment of the LORD thy God, which he commanded thee: for now would the LORD have established thy kingdom upon Israel for ever.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 14,
                  text: "But now thy kingdom shall not continue: the LORD hath sought him a man after his own heart, and the LORD hath commanded him to be captain over his people, because thou hast not kept that which the LORD commanded thee.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 15,
                  text: "And Samuel arose, and gat him up from Gilgal unto Gibeah of Benjamin. And Saul numbered the people that were present with him, about six hundred men.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 16,
                  text: "And Saul, and Jonathan his son, and the people that were present with them, abode in Gibeah of Benjamin: but the Philistines encamped in Michmash.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 17,
                  text: "And the spoilers came out of the camp of the Philistines in three companies: one company turned unto the way that leadeth to Ophrah, unto the land of Shual:",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 18,
                  text: "And another company turned the way to Bethhoron: and another company turned to the way of the border that looketh to the valley of Zeboim toward the wilderness.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 19,
                  text: "Now there was no smith found throughout all the land of Israel: for the Philistines said, Lest the Hebrews make them swords or spears:",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 20,
                  text: "But all the Israelites went down to the Philistines, to sharpen every man his share, and his coulter, and his axe, and his mattock.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 21,
                  text: "Yet they had a file for the mattocks, and for the coulters, and for the forks, and for the axes, and to sharpen the goads.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 22,
                  text: "So it came to pass in the day of battle, that there was neither sword nor spear found in the hand of any of the people that were with Saul and Jonathan: but with Saul and with Jonathan his son was there found.",
                },
                {
                  bookName: "1 Samuel",
                  chapterNumber: 13,
                  number: 23,
                  text: "And the garrison of the Philistines went out to the passage of Michmash.",
                },
              ],
            },
          ],
          name: "1 Samuel",
        },
      ],
    ],
  },
  {
    search: "1 Chronicles 11:11, 13, 15",
    searchObj: {
      name: "1 Chronicles",
      chapters: [
        {
          number: 11,
          verses: [{ number: 11 }, { number: 13 }, { number: 15 }],
        },
      ],
    },
    prismaObj: [
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
                where: {
                  AND: [
                    {
                      bookName: {
                        startsWith: "1 Chronicles",
                        mode: "insensitive",
                      },
                    },
                    {
                      number: {
                        in: [11, 13, 15],
                      },
                    },
                  ],
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 Chronicles",
                    mode: "insensitive",
                  },
                },
                {
                  number: 11,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 Chronicles",
            mode: "insensitive",
          },
        },
      },
    ],
    sqlResult: [
      [
        {
          chapters: [
            {
              bookName: "1 Chronicles",
              number: 11,
              verses: [
                {
                  bookName: "1 Chronicles",
                  chapterNumber: 11,
                  number: 11,
                  text: "And this is the number of the mighty men whom David had; Jashobeam, an Hachmonite, the chief of the captains: he lifted up his spear against three hundred slain by him at one time.",
                },
                {
                  bookName: "1 Chronicles",
                  chapterNumber: 11,
                  number: 13,
                  text: "He was with David at Pasdammim, and there the Philistines were gathered together to battle, where was a parcel of ground full of barley; and the people fled from before the Philistines.",
                },
                {
                  bookName: "1 Chronicles",
                  chapterNumber: 11,
                  number: 15,
                  text: "Now three of the thirty captains went down to the rock to David, into the cave of Adullam; and the host of the Philistines encamped in the valley of Rephaim.",
                },
              ],
            },
          ],
          name: "1 Chronicles",
        },
      ],
    ],
  },
];
