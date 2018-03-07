import { Observable } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockApi implements InMemoryDbService {
    createDb(): any {
        return {
          semesters: [
            {
                semester: 'S18',
                courses: [
                    {id: 'CSE 3330-801', name: 'Database Concepts', type: 'Lecture'},
                    {id: 'CSE 3330-N12C', name: 'Database Concepts', type: 'Lab'},
                    {id: 'CSE 3339-801', name: 'Information Assurance & Security', type: 'Lecture'},
                    {id: 'CSE 3339-N13', name: 'Information Assurance & Security', type: 'Lab'},
                    {id: 'CSE 3353-001', name: 'Fundamentals of Algorythms', type: 'Lecture'},
                    {id: 'JAPN 1402-801', name: 'Beginning Japanese: 2nd Term', type: 'Lecture'},
                    {id: 'JAPN 1402-N10', name: 'Beginning Japanese: 2nd Term', type: 'Lab'},
                    {id: 'ANTH 3319-001', name: 'Humanity & Global Env Change', type: 'Lecture'}
                ]
            },
            {
                semester: 'F17',
                courses: [
                    {id: 'CHEM 1303-001', name: 'General Chemistry', type: 'Lecture'},
                    {id: 'CHEM 1113-L07', name: 'General Chemistry Laboratory', type: 'Lab'},
                    {id: 'CSE 3342-002', name: 'Programming Languages', type: 'Lecture'},
                    {id: 'CSE 3345-801', name: 'Graphical User Interface', type: 'Lecture'},
                    {id: 'CSE 3381-801', name: 'Digital Logic Design', type: 'Lecture'},
                    {id: 'CSE 4340-001C', name: 'Stat Methods for Engineers', type: 'Lecture'},
                ]
            },
            {
                semester: 'S17',
                courses: [
                    {id: 'CSE 2341-801', name: 'Data Structures', type: 'Lecture'},
                    {id: 'CSE 2353-001', name: 'Discrete Comp Structures', type: 'Lecture'},
                    {id: 'CSE 3365-801C', name: 'Intro to Scientific Computing', type: 'Lecture'},
                    {id: 'PHYS 3305-001', name: 'Introduction to Modern Physics', type: 'Lecture'},
                    {id: 'PRW 2144-L01', name: 'PRW2: Scuba', type: 'Lab'}
                ]
            },
            {
                semester: 'F16',
                courses: [
                    {id: 'CSE 2341-801', name: 'Data Structures', type: 'Lecture'},
                    {id: 'JAPN 1401-801', name: 'Beginning Japanese', type: 'Lecture'},
                    {id: 'CSE 2240-801', name: 'Assy Lang Prog & Mach Org', type: 'Lecture'},
                    {id: 'PHYS 1304-001', name: 'Intro Electricity & Magnetism', type: 'Lecture'}
                ]
            },
            {
                semester: 'S16',
                courses: [
                    {id: 'CSE 1342-801', name: 'Programming Concepts', type: 'Lecture'},
                    {id: 'EMIS 1305-803', name: 'Computing Technology', type: 'Lecture'},
                    {id: 'PHYS 1304-002', name: 'Intro Electricity & Magnetism', type: 'Lecture'},
                    {id: 'PHYS 1106-L14', name: 'Electricity & Magnetism Lab', type: 'Lab'},
                    {id: 'MATH 3353-002', name: 'Introduction to Linear Algebra', type: 'lecture'}
                ]
            },
            {
                semester: 'F15',
                courses: [
                    {id: 'DISC 1313', name: 'Inquiry Seminar', type: 'Lecture'},
                    {id: 'KNW 2300-L01', name: 'Introduction to Engineering Design', type: 'Lab'},
                    {id: 'CSE 1341-801', name: 'Principles of Computer Science', type: 'Lecture'},
                    {id: 'MATH 1340-002', name: 'Consolidated Calculus', type: 'Lecture'},
                    {id: 'PHYS 1303-001', name: 'Introductory Mechanics', type: 'Lecture'},
                    {id: 'PHYS 1105-L17', name: 'Mechanics Laboratory', type: 'Lab'},
                    {id: 'PRW 1101-L01', name: 'PRW1: Concepts of Wellness', type: 'Lab'}
                ]
            },
          ],
          vocabulary: [
            {
                chapter: 'Chapter 1',
                vocab: [
                    {type: 'noun', kana: 'せんせい', kanji: '先生', meaning: ['Teacher']},
                    {type: 'suffix', kana: '～せんせい', kanji: '～先生', meaning: ['Professor ～']},
                ]
            },
            {
                chapter: 'Chapter 2',
                vocab: [
                    {type: 'noun', kana: 'アジアけんきゅう', kanji: 'アジア研究', meaning: ['Asian studies']},
                    {type: 'noun', kana: 'アメリカ', meaning: ['America', 'the United States']},
                    {type: 'noun', kana: 'イギリス', meaning: ['England']},
                    {type: 'noun', kana: 'いちねんせい', kanji: '一年生', meaning: ['freshman', 'first-year student'],
                        sidenote: ['the suffix せい may be dropped']},
                    {type: 'noun', kana: 'いま', kanji: '今', meaning: ['now']},
                    {type: 'noun', kana: 'えいご', kanji: '英語', meaning: ['English']},
                    {type: 'noun', kana: 'オーストラリア', meaning: ['Australia']},
                    {type: 'noun', kana: 'がくせい', kanji: '学生', meaning: ['student']},
                    {type: 'noun', kana: 'カナダ', meaning: ['Canada']},
                    {type: 'noun', kana: 'かんこく', kanji: '韓国', meaning: ['South Korea']},
                    {type: 'noun', kana: 'けいえいがく', kanji: '経営学', meaning: ['management', 'business administration']},
                    {type: 'noun', kana: 'こうがく', kanji: '工学', meaning: ['engineering']},
                    {type: 'noun', kana: 'こうこう', kanji: '高校', meaning: ['high school']},
                    {type: 'noun', kana: 'ごご', kanji: '午後', meaning: ['p.m.', 'afternoon']},
                    {type: 'noun', kana: 'ごぜん', kanji: '午前', meaning: ['a.m.', 'morning']},
                    {type: 'noun', kana: 'こちら', meaning: ['this person', 'this way']},
                    {type: 'noun', kana: 'さんねんせい', kanji: '三年生', meaning: ['junior', 'third-year student'],
                        sidenote: ['the suffix せい may be dropped']},
                    {type: 'noun', kana: 'しゅっしん', kanji: '出身', meaning: ['one\'s native country', 'hometown', 'birthplace', 'alma mater']},
                    {type: 'noun', kana: 'スペイン', meaning: ['Spain']},
                    {type: 'noun', kana: 'せんこう', kanji: '専攻', meaning: ['major']},
                    {type: 'noun', kana: 'だいがく', kanji: '大学', meaning: ['college', 'university']},
                    {type: 'noun', kana: 'だいがくいんせい', kanji: '大学院生', meaning: ['graduate student']},
                    {type: 'noun', kana: 'だいがくせい', kanji: '大学生', meaning: ['college student']},
                    {type: 'noun', kana: 'たいわん', kanji: '台湾', meaning: ['Taiwan']},
                    {type: 'noun', kana: 'ちゅうごく', kanji: '中国', meaning: ['China']},
                    {type: 'noun', kana: 'なまえ', kanji: '名前', meaning: ['name']},
                    {type: 'noun', kana: 'にねんせい', kanji: '二年生', meaning: ['sophomore', 'second-year student'],
                        sidenote: ['the suffix せい may be dropped']},
                    {type: 'noun', kana: 'にほん', kanji: '日本', meaning: ['Japan']},
                    {type: 'noun', kana: 'ビジネス', meaning: ['business']},
                    {type: 'noun', kana: 'フランス', meaning: ['France']},
                    {type: 'noun', kana: 'ぶんがく', kanji: '文学', meaning: ['literature']},
                    {type: 'noun', kana: 'メキシコ', meaning: ['Mexico']},
                    {type: 'noun', kana: 'よねんせい', kanji: '四年生', meaning: ['senior', 'fourth-year student'],
                        sidenote: ['the suffix せい may be dropped']},
                    {type: 'noun', kana: 'らいねん', kanji: '来年', meaning: ['next year']},
                    {type: 'noun', kana: 'りゅうがくせい', kanji: '留学生', meaning: ['foreign student']},
                    {type: 'noun', kana: 'れきし', kanji: '歴史', meaning: ['history']},
                    {type: 'pronoun', kana: 'ぼく', kanji: '僕', meaning: ['I'], sidenote: ['normally used by young males']},
                    {type: 'pronoun', kana: 'わたし', kanji: '私', meaning: ['I'], sidenote: ['used by both males and females']},
                    {type: 'copula verb', kana: 'です', meaning: ['(to) be']},
                    {type: 'time expression', kana: 'いちじ', kanji: '一時', meaning: ['one o\'clock']},
                    {type: 'time expression', kana: 'にじ', kanji: '二時', meaning: ['two o\'clock']},
                    {type: 'time expression', kana: 'さんじ', kanji: '三時', meaning: ['three o\'clock']},
                    {type: 'time expression', kana: 'よじ', kanji: '四時', meaning: ['four o\'clock']},
                    {type: 'time expression', kana: 'ごじ', kanji: '五時', meaning: ['five o\'clock']},
                    {type: 'time expression', kana: 'ろくじ', kanji: '六時', meaning: ['six o\'clock']},
                    {type: 'time expression', kana: 'しちじ', kanji: '七時', meaning: ['seven o\'clock']},
                    {type: 'time expression', kana: 'はちじ', kanji: '八時', meaning: ['eight o\'clock']},
                    {type: 'time expression', kana: 'くじ', kanji: '九時', meaning: ['nine o\'clock']},
                    {type: 'time expression', kana: 'じゅうじ', kanji: '十時', meaning: ['ten o\'clock']},
                    {type: 'time expression', kana: 'じゅういちじ', kanji: '十一時', meaning: ['eleven o\'clock']},
                    {type: 'time expression', kana: 'じゅうにじ', kanji: '十二時', meaning: ['twelve o\'clock']},
                    {type: 'time expression', kana: 'はん', kanji: '半', meaning: ['half past']},
                    {type: 'question word', kana: 'どこ', meaning: ['where']},
                    {type: 'question word', kana: 'どちら', meaning: ['where', 'which way'], sidenote: ['more polite than どこ']},
                    {type: 'question word', kana: 'なん、なに', kanji: '何', meaning: ['what']},
                    {type: 'particle', kana: 'か', meaning: ['question marker']},
                    {type: 'particle', kana: 'の', meaning: ['noun modifier marker (of), (\'s)']},
                    {type: 'particle', kana: 'は', meaning: ['topic marker']},
                    {type: 'particle', kana: 'を', meaning: ['similarity marker (also, too)']},
                    {type: 'prefix', kana: 'お～', kanji: '御～', meaning: ['polite prefix'], sidenote: ['おなまえ polite form of なまえ (name)']},
                    {type: 'suffix', kana: '～ご', kanji: '～語', meaning: ['language'], sidenote: ['にほんご Japanese language']},
                    {type: 'suffix', kana: '～じ', kanji: '～時', meaning: ['～ o\'clock']},
                    {type: 'suffix', kana: '～じん', kanji: '～人', meaning: ['nationality'], sidenote: ['アメリカじん American']},
                    {type: 'suffix', kana: '～せい', kanji: '～生', meaning: ['student'],
                        sidenote: ['だいがくせい college student', 'いちねんせい freshman']},
                    {type: 'suffix', kana: '～ねん', kanji: '～年', meaning: ['year'], sidenote: ['いちねん first year']},
                    {type: 'interjection', kana: 'あのう', meaning: ['uh', 'well ...']},
                    {type: 'interjection', kana: 'いいえ', meaning: ['no', 'don\'t mention it', 'you\'re welcome']},
                    {type: 'interjection', kana: 'はい、ええ', meaning: ['yes']},
                    {type: 'expression', kana: 'いいえ、そうじゃありません／そうじゃないです', meaning: ['No, that\'s not so']},
                    {type: 'expression', kana: 'はい／ええ、そうです', meaning: ['Yes, that\'s so']},
                    {type: 'expression', kana: 'そうですか', meaning: ['Is that so?', 'I see.']},
                    {type: 'expression', kana: '～からきました', kanji: '～から来ました', meaning: ['came from ～ [casual]']},
                    {type: 'expression', kana: 'こちらこそ', meaning: ['It is I who should be saying that.', 'Thank you.']},
                    {type: 'expression', kana: '～っていいます', kanji: '～って言います', meaning: ['colloquial version of ～といいます']}
                ]
            }
          ],
          kanji: [
              {
                  chapter: 'Chapter 4',
                  kanji: [
                      {kanji: '大', onyomi: ['ダイ', 'タイ'], kunyomi: ['おお', 'おお（きい）', 'おお（いに）'], meanings: ['big', 'large']
                        , examples: ['大学生'] },
                      {kanji: '学', onyomi: ['ガク', 'ガッ'], kunyomi: ['まな（ぶ）'], meanings: ['to study', 'learn']
                        , examples: ['学校', '大学']  },
                      {kanji: '校', onyomi: ['コウ'], meanings: ['school'], examples: ['学校'] },
                      {kanji: '先', onyomi: ['セン'], kunyomi: ['さき'], meanings: ['to study', 'learn']
                        , examples: ['先生'] },
                      {kanji: '生', onyomi: ['セイ'], kunyomi: ['なま', 'う（まれる）'], meanings: ['life', 'to live']
                        , examples: ['学生', '先生'] }
                  ]
              }
          ]
        };
    }
}

