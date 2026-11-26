{
/* ================= sprites (12x12, X = color, o = black detail) ================= */
const SPR={
thumb:["....XX......", "...XXX......", "...XXX......", "...XXX......", "..XXXX......", ".XXXXXXXXXX.", "XXXXXXXXXXXX", "XoXXXoooooXX", "XoXXXXXXXXXX", "XoXXXoooooX.", "XoXXXXXXXXX.", ".XXXXXXXXX.."],
uke:[".........XXX", "........XXoX", ".......XXXX.", "......XoX...", ".....XoX....", "..XXXoX.....", ".XXXXXX.....", "XXXooXXX....", "XXooooXX....", "XXXooXXX....", ".XXXXXX.....", "..XXXX......"],
scroll:[".XXXXXXXXX..", "X.XXXXXXXXX.", ".XXXXXXXXX.X", ".XoooooooX..", ".XXXXXXXXX..", ".XoooooXXX..", ".XXXXXXXXX..", ".XooooooXX..", ".XXXXXXXXX..", ".XooooXXXX..", "XXXXXXXXXX..", ".XXXXXXXXXX."],
fish:["......X.....", "......X.....", "......X.....", "......X.....", "....X.X.....", "....XXX.....", "............", "..XXXXX...X.", ".XXXXXXX.XX.", "XXoXXXXXXXX.", ".XXXXXXX.XX.", "..XXXXX...X."],
bulb:["....XXXX....", "..XXXXXXXX..", ".XXXXXXXXXX.", ".XXXoXXoXXX.", ".XXXXooXXXX.", "..XXXooXXX..", "...XXooXX...", "....XXXX....", "............", "....XXXX....", "............", ".....XX....."],
pepper:["............", "......X.....", ".....XX.....", "...XXXXXX...", "..XXXXXXXX..", ".XXoXXXXXXX.", ".XXXXXXXoXX.", ".XXXXXXXXXX.", ".XXXXoXXXXX.", "..XXXXXXXX..", "...XXXXXX...", "............"],
grade:["XXXXXXXXXX..", "XXXXXXXXXXX.", "XXXooooXXXXX", "XXoXXXXXXXXX", "XXoXXXXXXXXX", "XXXoooXXXXXX", "XXXXXXoXXXXX", "XXXXXXoXXXXX", "XXooooXXXXXX", "XXXXXXXXXXXX", "XXXXXXXXXXoX", "XXXXXXXXXooX"],
potato:['....XXXX....','..XXXXXXXX..','.XXXXXXXXXX.','XXXoXXXXoXXX','XXXoXXXXoXXX','XXXXXXXXXXXX','XXXXoXXoXXXX','XXXXXooXXXXX','.XXXXXXXXXXX','.XXXXXXXXXX.','..XXXXXXXX..','....XXXX....'],
cat:['X..........X','XX........XX','XXX.XXXX.XXX','XXXXXXXXXXXX','XXoXXXXXXoXX','XXoXXXXXXoXX','XXXXXXXXXXXX','XXXXXooXXXXX','.XXoXXXXoXX.','..XXooooXX..','...XXXXXX...','............'],
frog:['.XXX....XXX.','XXoXX..XXoXX','XXoXXXXXXoXX','XXXXXXXXXXXX','XXXXXXXXXXXX','XoXXXXXXXXoX','XXooooooooXX','XXXXXXXXXXXX','.XXXXXXXXXX.','XX.XX..XX.XX','X..X....X..X','............'],
ghost:['....XXXX....','..XXXXXXXX..','.XXXXXXXXXX.','.XXoXXXXoXX.','.XXoXXXXoXX.','XXXXXXXXXXXX','XXXXXooXXXXX','XXXXXooXXXXX','XXXXXXXXXXXX','XXXXXXXXXXXX','XX.XXX.XXX.X','X...X...X...'],
star:['.....XX.....','.....XX.....','....XXXX....','XXXXXXXXXXXX','.XXXoXXoXXX.','..XXoXXoXX..','...XXXXXX...','...XXooXX...','..XXX..XXX..','..XX....XX..','.XX......XX.','............'],
mushroom:['...XXXXXX...','.XXXoXXXXXX.','XXXooXXXoXXX','XXXXXXXXooXX','XoXXXXXXXXXX','XXXXXXXXXXXX','...XXXXXX...','...XoXXoX...','...XXXXXX...','...XXooXX...','...XXXXXX...','............'],
crab:['XX........XX','X.X......X.X','XX.X.XX.X.XX','...XoXXoX...','..XXXXXXXX..','.XXXXXXXXXX.','XXXXXooXXXXX','XXXXXXXXXXXX','.XXXXXXXXXX.','X.X......X.X','X..........X','............'],
cactus:['.....XX.....','....XXXX....','....XXXX..X.','.X..XoXo..XX','XX..XXXX..XX','XX..XooX.XXX','XXX.XXXXXXX.','.XXXXXXXX...','....XXXX....','....XXXX....','..XXXXXXXX..','..XXXXXXXX..'],
gavel:['.XXXXXXX....','.XXXXXXX....','XXXXXXXXX...','XoXXXXXoX...','XXXXXXXXX...','.XXXXXXX....','.....XXX....','......XXX...','.......XXX..','........XXX.','.........XXX','XXXXXXX...X.'],
book:['............','.XXXXXXXXXX.','.XoooXXoooX.','.XXXXXXXXXX.','.XoooXXoooX.','.XXXXXXXXXX.','.XoooXXoooX.','.XXXXXXXXXX.','.XXXXXXXXXX.','XXXXXXXXXXXX','XoooooooooXX','XXXXXXXXXXXX'],
moon:['....XXXX....','..XXXX......','.XXXX.......','.XXX........','XXXX........','XXXX....X...','XXXX........','XXXXX.......','.XXXXX....X.','.XXXXXXX....','..XXXXXXXXX.','....XXXX....'],
bird:['............','...XXXX.....','..XXoXXX....','.XXXXXXXXX..','XXXXXXXX....','..XXXXXXXXX.','.XXXXXXXXXXX','.XXXXXXXXXX.','..XXXXXXXX..','....X..X....','...XX.XX....','............'],
highlighter:['.....XX.....','....XXXX....','....XXXX....','...XXXXXX...','...XXXXXX...','...XoXXoX...','...XXXXXX...','...XXooXX...','...XXXXXX...','...XooooX...','...XXXXXX...','...XXXXXX...'],
coffee:['..X..X..X...','...X..X..X..','..X..X..X...','............','XXXXXXXXXX..','XXXXXXXXXXXX','XXoXXXXoXX.X','XXoXXXXoXX.X','XXXXooXXXXXX','XXXXXXXXXX..','.XXXXXXXX...','..XXXXXX....'],
curve:['............','.....XX.....','....XXXX....','....XooX....','...XXooXX...','...XXXXXX...','..XXXXXXXX..','..XXXXXXXX..','.XXXXXXXXXX.','XXXXXXXXXXXX','XXXXXXXXXXXX','XXXXXXXXXXXX'],
knight:['....XXXX....','..XXXXXXXX..','.XXXXXXXXXX.','.XXXXXXXXXX.','.XooooooooX.','.XXXXXXXXXX.','.XXoXoXoXXX.','.XXXXXXXXXX.','.XXXXXXXXXX.','..XXXXXXXX..','.XXXXXXXXXX.','XXXXXXXXXXXX'],
clock:['...XXXXXX...','.XXXXXXXXXX.','.XXXXXoXXXX.','XXXXXoXXXXXX','XXXXXoXXXXXX','XXXXXooooXXX','XXXXXXXXXXXX','XXoXXXXXXoXX','.XXXXXXXXXX.','.XXXXXXXXXX.','...XXXXXX...','..X......X..'],
gunner:['.........XX.','.........XX.','...XXXX..XX.','..XXXXXX.XX.','..XoXXoX.XX.','..XXXXXX.XX.','..XXooXX.XX.','...XXXX.XXX.','.XXXXXXXXX..','.XXXXXXXX...','.XXXXXXXX...','..XX..XX....'],
tiny:['............','............','............','....XXXX....','...XXXXXX...','...XoXXoX...','...XXXXXX...','...XXooXX...','....XXXX....','....X..X....','............','............'],
envelope:['............','............','XXXXXXXXXXXX','XoXXXXXXXXoX','XXoXXXXXXoXX','XXXoXXXXoXXX','XXXXoXXoXXXX','XXXXXooXXXXX','XXXXXXXXXXXX','XXXoXXXXoXXX','XXXXXXXXXXXX','............'],
egg:['....XXXX....','...XXXXXX...','..XXXXXXXX..','..XXXXXXXX..','.XXXoXXoXXX.','.XXXoXXoXXX.','.XXXXXXXXXX.','.XXXXooXXXX.','.XXXXXXXoXX.','..XXXXXoXX..','...XXXXXX...','....XXXX....'],
pepper:['............','............','............','....XXXX....','...XXXXXX...','..XXoXXoXX..','..XXXXXXXX..','..XXXooXXX..','...XXXXXX...','....XXXX....','............','............'],
person:['....XXXX....','...XXXXXX...','...XXXXXX...','....XXXX....','..XXXXXXXX..','.XXXXXXXXXX.','.XX.XXXX.XX.','.XX.XXXX.XX.','....XXXX....','...XX..XX...','...XX..XX...','..XXX..XXX..'],
mirror:['..XXXXXXXX..','.XXooooooXX.','.XoXooooooX.','.XooXoooooX.','.XooooooooX.','.XooooooooX.','.XooooooooX.','.XooooooooX.','.XXooooooXX.','..XXXXXXXX..','.....XX.....','...XXXXXX...']};
const PROF={
peterson:{p:{H:'#c8442b',S:'#f0c4a2',G:'#e6e6e6',L:'#9fd3ff',J:'#3a4a6a',W:'#ffffff',o:'#000000'},r:['......HHHH......','.....HHHHHH.....','......HHHH......','....HHHHHHHH....','...HHHHHHHHHH...','...HHSSSSSSHH...','...HSSSSSSSSH...','...GGGGSSGGGG...','...GLLGSSGLLG...','...GGGGSSGGGG...','...HSSSSSSSSH...','....SSSooSSS....','......SSSS......','....JJJWWJJJ....','..JJJJJWWJJJJJ..','.JJJJJJWWJJJJJJ.']},
pimentel:{p:{R:'#d4d4d4',S:'#efc8a8',K:'#d6a57f',o:'#000000',B:'#d23a4a',W:'#ffffff',J:'#7a5a3e'},r:['................','.....RRRRRR.....','....RRSSSSRR....','...RSSSSSSSSR...','...RSSSSSSSSR...','...SSoSSSSoSS...','...SSSSSSSSSS...','..SSSSSSSSSSSS..','...SSSSKKSSSS...','...SSSSSSSSSS...','....SSooooSS....','.....SSSSSS.....','......SSSS......','....JWBBBBWJ....','..JJJWBBBBWJJJ..','.JJJJJWWWWJJJJJ.']},
tirrell:{p:{D:'#2b2018',S:'#e0b08a',G:'#e6e6e6',L:'#9fd3ff',o:'#000000',N:'#2b3048',W:'#ffffff',T:'#3f63c9'},r:['................','.....DDDDDD.....','....DDDDDDDD....','...DDDDDDDDDD...','...DSSSSSSSSD...','...SSSSSSSSSS...','...GGGGSSGGGG...','...GLLGSSGLLG...','...GGGGSSGGGG...','...SSSSSSSSSS...','....SSSooSSS....','.....SSSSSS.....','......SSSS......','....NNWTTWNN....','..NNNNWTTWNNNN..','.NNNNNWTTWNNNNN.']}};
const ICONS=['potato','cat','frog','ghost','star','mushroom','crab','cactus','gavel','book','moon','bird',
  // unlocked by achievements:
  'scroll','fish','peterson','thumb','uke','pimentel','bulb','pepper','tirrell','grade'];
const BASE_ICONS=12;
const COLORS=['#ffffff','#ffd84a','#ff6a3d','#ff4d6d','#c58bff','#6ad6ff','#5ee08f','#ff9be1'];
const spr=(name,col,cls)=>{if(PROF[name]){const P=PROF[name];let r='';P.r.forEach((row,y)=>[...row].forEach((c,x)=>{const f=P.p[c];if(f)r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${f}"/>`}));return `<svg class="pix prof16 ${cls||''}" viewBox="0 0 16 16" aria-hidden="true">${r}</svg>`}const g=SPR[name]||SPR.potato;let r='';g.forEach((row,y)=>[...row].forEach((c,x)=>{if(c==='X')r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${col}"/>`;else if(c==='o')r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="#000"/>`}));return `<svg class="pix ${cls||''}" viewBox="0 0 12 12" aria-hidden="true">${r}</svg>`};
const SPUD=()=>spr('potato','#d9a05b');

/* ================= cast ================= */
const CPU={
highlighta:{n:'HIGHLIGHTA',s:'highlighter',c:'#ffe24a',acc:.52,spd:1,right:['i highlighted that one. twice.','see? important.','yellow means correct, i think.'],wrong:['...i highlighted the wrong page.','my ink is weeping.','that was fluorescent of me.'],life:['ow. ow. ow. ow.','i’m running dry.'],streak:['i’m glowing. literally.'],elim:['tell my cap... i’m sorry...']},
moss:{n:'MOSS TARBELL',s:'frog',c:'#7bd96a',acc:.56,spd:1,right:['Ribbit. Latin for “obviously.”','I learned that on my fourth try.','Croak. Counsel, take notes.'],wrong:['I will be appealing this to a pond.','Ribbit. Latin for “oh no.”','I meant the other lily pad.'],life:['My blazer is too big for this.','Ribbit. (in pain)'],streak:['Three in a row. The pond would be proud.'],elim:['I’m going back to the pond. The pond never cold-called me.']},
gunner:{n:'GUNNER GRIMSBY',s:'gunner',c:'#ff8a5c',acc:.72,spd:1.25,right:['Actually, professor—','As I said in section, obviously.','I’ve read ahead. Of everything.'],wrong:['That question was poorly drafted.','I’d like to file a motion to reconsider.','Interesting. Wrong, but interesting.'],life:['This is going on my blog.','My hand is still up. Why is my hand still up.'],streak:['Streak acquired. Curve, beware.'],elim:['I’ll be emailing the professor about this.']},
ghost:{n:'OUTLINE GHOST',s:'ghost',c:'#cfd8ff',acc:.68,spd:1,right:['the law hasn’t changed since 2019. probably.','i was passed down by a 3L.','page 41 of me.'],wrong:['someone forgot to update me...','that was in the footnotes. i don’t have footnotes.','boo. (sad boo)'],life:['i’m losing pages.','my margins are fading.'],streak:['i feel... annotated.'],elim:['i return to the shared drive. forever.']},
coldbrew:{n:'COLD BREW ELEMENTAL',s:'coffee',c:'#c58a52',acc:.7,spd:1.6,right:['HAVENT SLEPT SINCE THE RESTATEMENT (SECOND)','CORRECT. VIBRATING.','I CAN SEE THROUGH TIME'],wrong:['the caffeine. it lies.','i blinked. never blink.','DECAF THOUGHTS. DECAF THOUGHTS.'],life:['i’m... cooling...','someone left me out overnight.'],streak:['TRIPLE SHOT.'],elim:['i become room temperature. it is over.']},
footnote:{n:'FOOTNOTE 47',s:'tiny',c:'#ff9be1',acc:.66,spd:1.1,right:['See generally, me.','Id.','(citing myself).'],wrong:['But see, everything.','that was footnote 46’s fault.','I’m very small. Please forgive me.'],life:['ibid. ow.','supra, but in pain.'],streak:['accord: three cases.'],elim:['I have been struck from the record.']},
curve:{n:'THE CURVE',s:'curve',c:'#ffffff',acc:.9,spd:1.3,right:['I AM NOT AGAINST YOU. I AM DISTRIBUTED.','A MEDIAN ANSWER. FOR ME.','I HAVE ALREADY GRADED YOU.'],wrong:['A STATISTICAL ANOMALY.','EVEN I HAVE OUTLIERS.','THIS DOES NOT CHANGE THE MEAN.'],life:['MY TAILS... THINNING...','THE MEAN... SHIFTS...'],streak:['THREE STANDARD DEVIATIONS ABOVE YOU.'],elim:['I... FLATTEN. EVERYONE GETS... A B PLUS...']},
rap:{n:'RULE AGAINST PERPETUITIES',s:'clock',c:'#b9a0ff',acc:.8,spd:.9,right:['No one understands me. That is my power.','Lives in being plus twenty-one years.','Correct. Vesting... now.'],wrong:['I’m from Property. I don’t even go here.','That interest failed to vest.','A fertile octogenarian distracted me.'],life:['I’m being reformed by statute...','Wait and see. (I am losing.)'],streak:['I shall vest within the period.'],elim:['I am void ab initio. Goodbye.']},
knight:{n:'SIR HORNBOOK',s:'knight',c:'#c7c7c7',acc:.82,spd:1,right:['By the black letter, it is so.','Huzzah. Black letter law.','My armor is made of summaries.'],wrong:['The black letter has... a gray area.','A chink in mine treatise.','Forsooth, that was a minority rule.'],life:['My binding cracks.','I need a new edition.'],streak:['Three victories! Fetch my page tabs!'],elim:['I return to the bookstore. Used. Highlighted.']},
server:{n:'PROCESS SERVER',s:'envelope',c:'#9fe3ff',acc:.5,spd:1.1,right:['Served. Personally. In hand.','Rule 4 compliant.','Service: effective.'],wrong:['I left it with a person of suitable age. A toddler.','Insufficient service. Mine.','I mailed it. Nobody signed.'],life:['I’ve been... quashed.','Return of service: ouch.'],streak:['Three for three. Proof of service filed.'],elim:['I’m being dismissed under 12(b)(5)...']},
eggshell:{n:'EGGSHELL',s:'egg',c:'#f3ead7',acc:.52,spd:1,right:['Gently correct.','I didn’t crack. This time.','Take me as you find me: smart.'],wrong:['Crack.','Unforeseeably wrong.','That damage was greater than expected.'],life:['A hairline fracture.','I’m more fragile than I look. And I look fragile.'],streak:['Hard-boiled now.'],elim:['Full extent of the harm. Goodbye.']},
pepper:{n:'PEPPERCORN',s:'pepper',c:'#a0805a',acc:.5,spd:1,right:['Sufficient. Not adequate. Sufficient.','A bargain at any price.','Consideration: given.'],wrong:['Nominal performance.','That was a sham. Like me, sometimes.','Illusory.'],life:['I’m being ground.','Pepper mill. Pepper mill.'],streak:['Three bargains in a row!'],elim:['I was never really consideration...']},
reasonable:{n:'THE REASONABLE PERSON',s:'person',c:'#e8e8e8',acc:.9,spd:1.2,right:['A REASONABLE ANSWER.','AS ANY PRUDENT PERSON WOULD.','I FORESAW THIS.'],wrong:['AN UNFORESEEABLE ERROR.','EVEN I HAVE BAD DAYS. (I DO NOT.)','THIS WAS NOT REASONABLE.'],life:['MY STANDARD... SLIPS...','I AM... MERELY ORDINARY...'],streak:['I AM BEHAVING... OPTIMALLY.'],elim:['I WAS ONLY... A LEGAL FICTION...']},
mirror:{n:'THE MIRROR IMAGE',s:'mirror',c:'#bfe9ff',acc:.9,spd:1.2,right:['ACCEPTED. EXACTLY AS OFFERED.','I MIRROR THE CORRECT ANSWER.','NO VARIATION.'],wrong:['A COUNTEROFFER? FROM ME?','I ADDED A TERM. I AM ASHAMED.','THE KNOCKOUT RULE APPLIES TO ME.'],life:['CRACKS IN MY... TERMS...','BATTLE OF THE FORMS... LOST...'],streak:['PERFECT TENDER.'],elim:['I... AM ONLY A REFLECTION...']}};
Object.assign(CPU,{
peterson:{n:'PROF. PETERSON',s:'peterson',c:'#c8442b',acc:.86,spd:1.1,prof:true,right:['Correct. Note the rule and the policy behind it.','Exactly. Subject matter jurisdiction first, always.','Good. That one tends to show up on exams.'],wrong:['Hm. Let me re-read the rule.','A reminder that even professors check the statute.','I’ll call that a teaching moment.'],life:['Fair question. Well drafted.','The Rules giveth, the Rules taketh away.'],streak:['Three for three. Don’t tell the curve.'],elim:['Well played, everyone. Office hours are on the syllabus.']},
pimentel:{n:'PROF. PIMENTEL',s:'pimentel',c:'#d23a4a',acc:.86,spd:.95,prof:true,right:['Precisely. Duty, breach, causation, damages.','That’s the reasonable answer.','Correct. I’ve taught that one for many years.'],wrong:['Even a careful person slips now and then.','Not my most foreseeable mistake.','Let me straighten my bow tie and try again.'],life:['A minor injury. I’ll recover.','Some comparative fault on my part.'],streak:['Three in a row. Not bad for an old hand.'],elim:['Splendid work. Class dismissed.']},
tirrell:{n:'PROF. TIRRELL',s:'tirrell',c:'#3f63c9',acc:.86,spd:1.05,prof:true,right:['Correct. Read the terms carefully.','Exactly as bargained for.','That’s the black letter rule.'],wrong:['I’ll review my notes on that one.','A mistake on my part. Not a material one, I hope.','Let’s treat that as a counteroffer.'],life:['Noted. I’ll mitigate.','A minor breach.'],streak:['Three for three. Performance complete.'],elim:['Well argued, all of you. See you in class.']}});
const PROFOF={cp:'peterson',torts:'pimentel',k:'tirrell'};
const BOTPOOL=['highlighta','moss','gunner','ghost','coldbrew','footnote','knight','server','eggshell','pepper','rap'];

/* ================= worlds ================= */
const WORLDS=[
{id:'cp',name:'THE PROCEDURAL ABYSS',course:'Civil Procedure',sub:'Built from your Civ Pro coursebook',exp:false,color:'#6ad6ff',floors:[
 {name:'THE CLERK’S WINDOW',cpus:['server','highlighta'],boost:0,
  intro:[['peterson','Welcome to Civil Procedure. Before you file anything, ask three questions: subject matter jurisdiction, personal jurisdiction, venue. Then hold the potato.'],['','You take a number. The number is 12(b)(6). It is never called.'],['server','You’ve been served. I mean: hello. I serve. It’s what I do.'],['highlighta','welcome! i highlighted every federal rule. all of them. they’re all yellow now.'],['potato','hi. i’m the potato. i’m very hot. answer a question while you hold me, then pass me on.'],['potato','miss and it hurts. five misses and you’re out. three right in a row and you get a streak. it protects you, but your clock gets shorter.']],
  win:[['server','Proper service. Proper victory. I’m moved.'],['','A door marked DISCOVERY creaks open. It wants everything you have.']],
  lose:[['highlighta','it’s okay. you can amend once as a matter of course.'],['potato','try again. i’m still warm.']]},
 {name:'THE DISCOVERY DUNGEON',cpus:['gunner','ghost','footnote','server'],boost:.02,
  intro:[['peterson','Discovery is where most cases are won and lost. Relevant, proportional, nonprivileged. Remember those words down here.'],['','The walls are banker’s boxes. Every one is labeled RESPONSIVE.'],['gunner','I’ve already served interrogatories on all of you. Twenty-five each. Including subparts.'],['ghost','i’m someone’s outline from a past semester. my personal jurisdiction section is... vintage.'],['footnote','(Hello. I’m relevant and proportional.)'],['potato','more players means more passing. i’m dizzy already.']],
  win:[['gunner','I’m moving to compel a rematch.'],['','Far above, something bell-shaped is grading.']],
  lose:[['ghost','i failed this floor too. then i became an outline.'],['potato','discovery is long. so is life. again?']]},
 {name:'THE CURVE',cpus:['curve','peterson','knight','gunner','ghost','coldbrew','footnote'],boost:.08,
  intro:[['peterson','This is the final exam room. I\u2019ll be joining you at the table. Think of it as office hours, with a timer.'],['','The room is shaped like a bell. You don’t remember walking in.'],['knight','Halt! Only those who know the black letter may pass.'],['curve','HELLO, STUDENT.'],['curve','I AM NOT YOUR ENEMY. I AM SIMPLY HOW THINGS ARE DISTRIBUTED.'],['curve','SOMEONE IN THIS ROOM WILL BE AT THE TOP. STATISTICALLY, IT IS NOT YOU.'],['potato','i’m very hot now. i believe in you. i also believe in being put down.']],
  win:[['peterson','Excellent work. You\u2019d do well on the real thing. Now go get some sleep.'],['curve','IMPOSSIBLE. YOU ARE... AN OUTLIER.'],['curve','VERY WELL. I WILL BEND. JUST THIS ONCE.'],['potato','we did it. i can finally cool down.'],['','You climb out of the bell. The sun is up. You have an exam in four hours. You feel ready anyway.']],
  lose:[['curve','DO NOT BE SAD. SOMEONE HAD TO BE BELOW THE MEDIAN.'],['potato','it’s a curve, not a cliff. try again.']]}]},
{id:'torts',name:'THE REASONABLE WILDS',course:'Torts',sub:'Experimental · general 1L coverage',exp:true,color:'#ff6a3d',floors:[
 {name:'PALSGRAF STATION',cpus:['eggshell','moss'],boost:0,
  intro:[['pimentel','Good morning. Torts is the law of what we owe each other. Let\u2019s begin, as we always do, with a train platform.'],['','A train platform. Down the track, someone is handling a package of fireworks carelessly.'],['eggshell','Hello. Please be gentle. Any contact with me has unforeseeable consequences.'],['moss','Ribbit. I’m outside the zone of danger. Probably.'],['potato','this world is experimental. like most tort theories.']],
  win:[['eggshell','You take me as you find me. And you found me... defeated.'],['','The scales at the end of the platform wobble. You walk past them carefully.']],
  lose:[['moss','Ribbit. Proximate cause got you.'],['potato','again? i’m foreseeable.']]},
 {name:'THE NEGLIGENCE WOODS',cpus:['eggshell','highlighta','coldbrew','ghost'],boost:.02,
  intro:[['pimentel','Negligence. Duty, breach, causation, damages. Say it with me. Then say it faster, because the potato is warm.'],['','The trees here are planted exactly where a reasonable person would plant them.'],['coldbrew','I HAVE BREACHED MY DUTY TO SLEEP.'],['highlighta','i highlighted the Hand formula. B is less than PL. it’s glowing.'],['eggshell','Careful. I break if you look at me.']],
  win:[['coldbrew','I AM THE PROXIMATE CAUSE OF MY OWN DEFEAT.'],['','Ahead, a figure stands perfectly still. It is exactly average height.']],
  lose:[['ghost','even the reasonable person loses sometimes.'],['potato','res ipsa. you lost. try again.']]},
 {name:'THE REASONABLE PERSON',cpus:['reasonable','pimentel','eggshell','knight','gunner','coldbrew','rap'],boost:.08,
  intro:[['pimentel','I\u2019ve taught this course for a very long time. Today, I\u2019ll play too. Do take care.'],['','A clearing. In the center stands someone you can’t quite picture.'],['reasonable','HELLO. I AM THE REASONABLE PERSON.'],['reasonable','I HAVE NEVER BEEN NEGLIGENT. I HAVE NEVER BEEN ANYTHING.'],['reasonable','I WILL NOW BEHAVE EXACTLY AS I SHOULD UNDER THE CIRCUMSTANCES.'],['potato','it has no face. i don’t like it.']],
  win:[['pimentel','Wonderful. Reasonable, prudent, and quick. I\u2019m proud of you.'],['reasonable','UNREASONABLE. BUT UNDER THE CIRCUMSTANCES... ACCEPTABLE.'],['potato','we survived the wilds. i need a nap.']],
  lose:[['reasonable','YOU ACTED AS A REASONABLE PERSON WOULD. THAT IS WHY YOU LOST.'],['potato','that doesn’t make sense. try again.']]}]},
{id:'k',name:'THE BARGAIN BAZAAR',course:'Contracts',sub:'Experimental · general 1L coverage',exp:true,color:'#ffd84a',floors:[
 {name:'THE MAILBOX',cpus:['pepper','moss'],boost:0,
  intro:[['tirrell','Welcome to Contracts. Every promise here is either a bargain or a gift. Your job is to tell which.'],['','A wall of mailboxes. Each one is accepting something on dispatch.'],['pepper','I’m a peppercorn. Someone traded me for a whole house once. I’m very valuable. Legally.'],['moss','Ribbit. That’s an offer. Ribbit. That’s acceptance.'],['potato','this world is experimental. offer and acceptance are not.']],
  win:[['pepper','You gave sufficient consideration. I’m impressed.'],['','A market opens ahead. Everything is for sale. Nothing is a gift.']],
  lose:[['moss','Ribbit. Counteroffer: try again.'],['potato','mailbox rule: your next try counts the moment you send it.']]},
 {name:'THE BAZAAR STALLS',cpus:['pepper','rap','coldbrew','highlighta'],boost:.02,
  intro:[['tirrell','Consideration, defenses, the Statute of Frauds. Read the terms before you accept them. That includes the potato.'],['','Stalls stretch in every direction. Every price tag says AS IS.'],['rap','I’m from Property. I sell interests that may never vest.'],['coldbrew','THIS COFFEE IS MERCHANTABLE. BARELY.'],['pepper','Everything here is a bargained-for exchange.']],
  win:[['rap','You have vested. Within the period, even.'],['','At the end of the bazaar hangs a mirror. It is waiting for you to say something.']],
  lose:[['highlighta','i highlighted the parol evidence rule but forgot what it bars.'],['potato','substantial performance. not enough, though. again?']]},
 {name:'THE MIRROR IMAGE',cpus:['mirror','tirrell','pepper','rap','knight','gunner','ghost'],boost:.08,
  intro:[['tirrell','I\u2019ll be taking a seat for this one. Consider it a firm offer to play.'],['','A huge mirror. Your reflection is wearing a better suit.'],['mirror','HELLO. I ACCEPT YOUR TERMS.'],['mirror','EXACTLY YOUR TERMS. NO ADDITIONS. ANYTHING ELSE IS A COUNTEROFFER.'],['potato','it keeps repeating me. i’m hot. it’s hot. stop.']],
  win:[['tirrell','A fully performed contract. Well done.'],['mirror','A MATERIAL ALTERATION... I CANNOT ACCEPT THIS... BUT I MUST.'],['potato','we did it. the bazaar is closed. everyone go home.']],
  lose:[['mirror','YOUR ATTEMPT IS REJECTED. YOU MAY MAKE A NEW OFFER.'],['potato','try again. i’m a firm offer. irrevocable.']]}]}];
const WBY=Object.fromEntries(WORLDS.map(w=>[w.id,w]));
const NARR_VSSTREAK='STREAK! Bonus points on every answer, but a shorter clock. No shield outside Story Mode: a miss still costs a life.';
const NARR={right:['Correct. The potato respects you now. A little.','Right. Somewhere, a professor nods, then forgets.','Correct. You feel briefly employable.','Correct. The potato sighs with relief.'],wrong:['Wrong. The potato burns your hand. Metaphorically. Mostly.','Incorrect. The potato is passed. So is the blame.','Not quite. Your outline flinches.'],timeout:['Time’s up. The potato made the decision for you.','You hesitated. The potato did not.'],streak:['STREAK! A thin film of confidence protects you. Your clock gets shorter, though.'],shield:['Your streak shatters like a bad outline. But you’re still standing.'],elimYou:['You are out. You go sit with the other ghosts. There are snacks.'],topic:['The topic changes. The room gets warmer. It’s the potato.','A new topic crawls out of the syllabus.','The potato spins. It lands on something you half-remember.']};
const FLAV=['The potato is warm. It has always been warm.','Five lives. One potato. No curve. (There is a curve.)','The library never closes. It just pretends.','Remember: the potato is not your friend. The potato is everyone’s friend.','Somewhere, a 1L is reading the footnotes. Be like them. Or don’t.'];
const BOTCHAT={hi:['hello. i am also hot.','greetings, counsel.','hi. no talking during the cold call.'],gg:['gg. the potato thanks you.','good game. i’ll be outlining this.','gg. well distributed.'],law:['objection.','sustained.','see generally, the Federal Rules.','that’s a minority rule.'],any:['...','the potato hears you.','noted for the record.','is this on the exam?','i’m just a bot. i don’t have feelings. (i have feelings.)']};
const DIFF={easy:.5,normal:.66,hard:.8,brutal:.9};
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ordinal=n=>n+(['th','st','nd','rd'][(n%100-20)%10]||['th','st','nd','rd'][n%100]||'th');

/* ================= save ================= */
const DEF=()=>({v:3,profile:{name:'',icon:0,color:1},prog:{cp:1,torts:1,k:1},wins:{},best:{},seen:{},lb:{},played:0,answered:0,right:0,bestRun:0,settings:{time:15,speed:1,text:1}});
let S=DEF();
try{const raw=localStorage.getItem('hpesq3');if(raw){const o=JSON.parse(raw);S={...S,...o,settings:{...S.settings,...(o.settings||{})},prog:{...S.prog,...(o.prog||{})}}}else{const old=JSON.parse(localStorage.getItem('hpesq1')||'null');if(old){S.profile=old.profile||S.profile;S.played=old.played||0;S.answered=old.answered||0;S.right=old.right||0;S.bestRun=old.bestRun||0;if(old.settings&&old.settings.time)S.settings.time=old.settings.time===10?15:old.settings.time;if(old.lb&&old.lb.vs)S.lb.vs=old.lb.vs}}}catch(e){}
const save=()=>{try{localStorage.setItem('hpesq3',JSON.stringify(S))}catch(e){}};
const prof=()=>S.profile;
const myIcon=cls=>spr(ICONS[prof().icon],COLORS[prof().color],cls);
const withCrown=(id,svg)=>{const n=crownN(id);return n?`<span class="crowned">${crownSvg(n,'oncap')}${svg}</span>`:svg};

/* ================= online ================= */
let ON=null,ME='me',onState=window.HP_FIREBASE?'connecting':'off',onErr='';
/* ================= music: original chiptune city-pop, synthesized live ================= */
// Five original compositions in the spirit of 80s Japanese fusion / city pop. No audio files:
// everything is generated with Web Audio (pulse leads, triangle bass, noise drums).
const CH={maj7:[0,4,7,11],m7:[0,3,7,10],m9:[0,3,7,10,14],'7':[0,4,7,10],'7#9':[0,4,7,10,15],'7b9':[0,4,7,10,13],'7sus':[0,5,7,10],
  '6':[0,4,7,9],m7b5:[0,3,6,10],'13':[0,4,10,14,21],'maj7#11':[0,4,7,11,18],maj9:[0,4,7,11,14]};
const NN={C:0,'C#':1,Db:1,D:2,'D#':3,Eb:3,E:4,F:5,'F#':6,Gb:6,G:7,'G#':8,Ab:8,A:9,'A#':10,Bb:10,B:11};
const midi=n=>{const m=/^([A-G][b#]?)(-?\d)$/.exec(n);return m?NN[m[1]]+12*(+m[2]+1):null};
// chord "Abmaj7" -> {root midi (octave 2), ivs}
const chordOf=c=>{const m=/^([A-G][b#]?)(.*)$/.exec(c);return {r:NN[m[1]]+36,iv:CH[m[2]||'maj7']}};
const SONGS={
 home:[
 {title:'Library at Golden Hour',bpm:100,swing:.12,bass:'walk',drums:'chill',arp:'8th',
  bars:[['Abmaj7'],['Gm7'],['Cm9'],['Fm7',8,'Bb7',8],['Abmaj7'],['Gm7'],['Fm7'],['Bb7sus',12,'Bb7',4]],
  mel:'G5:3 Eb5:1 F5:2 G5:2 Bb5:4 G5:2 F5:2|F5:6 -:2 D5:2 F5:2 G5:2 Bb5:2|C6:4 Bb5:2 G5:2 D6:6 -:2|C6:2 Bb5:2 Ab5:2 G5:2 F5:4 D5:2 F5:2|Eb5:2 G5:2 C6:3 Bb5:1 G5:4 -:2 Eb5:2|F5:2 G5:2 Bb5:2 D6:2 C6:4 Bb5:2 G5:2|Ab5:4 G5:2 F5:2 Eb5:4 C5:2 Eb5:2|F5:12 -:4'},
 {title:'Reading Room Rain',bpm:92,swing:.14,bass:'bossa',drums:'bossa',arp:'8th',
  bars:[['Bbmaj7'],['Am7'],['Gm7'],['C7sus',8,'C7',8],['Fmaj7'],['Dm9'],['Gm9'],['C13']],
  mel:'D6:4 C6:2 A5:2 F5:4 G5:2 A5:2|G5:6 E5:2 C5:2 E5:2 G5:2 A5:2|Bb5:3 A5:1 G5:2 F5:2 D5:4 -:4|F5:2 G5:2 Bb5:2 C6:2 E6:4 D6:2 C6:2|A5:4 C6:2 E6:2 G6:4 E6:2 C6:2|F6:3 E6:1 D6:2 C6:2 A5:4 F5:4|A5:2 Bb5:2 D6:2 F6:2 E6:2 D6:2 Bb5:4|A5:10 -:6'},
 {title:'Highlighter Sunset',bpm:106,swing:.1,bass:'walk',drums:'chill',arp:'16th',
  bars:[['Gmaj7'],['F#m7'],['Em9'],['A7sus',8,'A7',8],['Dmaj9'],['Bm7'],['Em7',8,'A7',8],['Dmaj7']],
  mel:'B5:2 D6:2 F#6:4 E6:2 D6:2 B5:4|A5:6 C#6:2 E6:2 C#6:2 A5:4|G5:2 F#5:2 E5:2 F#5:2 G5:2 B5:2 D6:4|E6:4 D6:2 C#6:2 B5:2 A5:2 G5:4|F#5:2 A5:2 C#6:4 E6:4 C#6:4|D6:3 C#6:1 B5:4 F#5:4 A5:4|G5:2 B5:2 E6:4 C#6:2 E6:2 G6:4|F#6:8 E6:2 C#6:2 D6:4'},
 ],
 vs:[
 {title:'Objection Overdrive',bpm:138,swing:0,bass:'slap',drums:'drive',arp:'16th',
  bars:[['Em9'],['Cmaj7'],['Am9'],['B7#9'],['D6'],['Cmaj7'],['F#m7b5',8,'B7',8],['Em9']],
  mel:'B5:1 D6:1 E6:2 D6:1 B5:1 A5:2 B5:2 -:2 G5:1 A5:1 B5:2|E6:3 D6:1 B5:2 G5:2 E5:4 G5:2 B5:2|C6:2 B5:2 A5:2 G5:2 A5:1 B5:1 C6:2 E6:4|D#6:4 D6:2 B5:2 F#5:2 A5:2 D#6:4|F#6:2 E6:2 D6:2 B5:2 A5:2 B5:2 D6:4|E6:6 G6:2 F#6:2 E6:2 D6:2 B5:2|A5:2 C6:2 E6:2 D#6:2 C6:2 A5:2 F#5:2 D#5:2|E5:1 G5:1 B5:1 D6:1 E6:8 -:4'},
 {title:'Hearsay Hyperdrive',bpm:146,swing:0,bass:'slap',drums:'drive',arp:'16th',
  bars:[['Am9'],['Fmaj7'],['G6'],['E7#9'],['Am9'],['Dm9'],['Bm7b5',8,'E7',8],['Am9']],
  mel:'E6:2 C6:1 B5:1 A5:2 E5:2 G5:1 A5:1 C6:2 E6:4|F6:3 E6:1 C6:2 A5:2 G5:2 A5:2 C6:4|B5:2 D6:2 E6:2 G6:2 E6:2 D6:2 B5:4|G#5:4 B5:2 D6:2 G6:4 F6:2 E6:2|A5:1 B5:1 C6:1 E6:1 A6:6 G6:2 E6:4|F6:2 E6:2 D6:2 C6:2 A5:4 C6:4|D6:2 F6:2 A5:2 B5:2 G#5:2 B5:2 E6:4|A5:8 -:8'},
 {title:'Speedy Trial',bpm:132,swing:.04,bass:'pulse',drums:'funk',arp:'16th',
  bars:[['Gmaj7'],['Am7'],['Bm7'],['Cmaj7',8,'D7',8],['Em9'],['Am7',8,'D7',8],['Gmaj7'],['F7',8,'D7',8]],
  mel:'D6:2 B5:2 G5:2 A5:2 B5:4 F#5:4|E6:2 D6:2 C6:2 A5:2 G5:2 A5:2 C6:4|D6:3 F#6:1 E6:2 D6:2 B5:4 A5:4|G5:2 B5:2 E6:4 F#6:2 E6:2 C6:2 A5:2|B5:2 E6:2 G6:4 F#6:2 E6:2 B5:4|C6:2 A5:2 E5:2 G5:2 F#5:2 A5:2 C6:4|B5:6 D6:2 F#6:4 D6:4|A5:4 Eb6:4 D6:4 C6:4'},
 ],
 cp:[
 {title:'The Procedural Abyss',bpm:108,swing:.08,bass:'pulse',drums:'half',arp:'8th',
  bars:[['Dm9'],['Bbmaj7'],['Gm9'],['A7b9'],['Dm9'],['Fmaj7'],['Ebmaj7#11'],['A7sus',8,'A7',8]],
  mel:'A5:4 F5:2 E5:2 D5:4 E5:2 F5:2|A5:6 C6:2 D6:4 C6:2 A5:2|Bb5:3 A5:1 G5:4 F5:2 A5:2 D5:4|C#6:4 Bb5:4 G5:2 E5:2 C#5:4|D6:2 E6:2 F6:4 E6:2 D6:2 A5:4|C6:4 E6:4 A5:4 G5:2 A5:2|Bb5:4 A5:2 G5:2 D6:6 -:2|E5:4 D5:2 E5:2 C#5:8'},
 {title:'Motion to Dismiss',bpm:100,swing:.1,bass:'walk',drums:'half',arp:'8th',
  bars:[['Gm9'],['Ebmaj7'],['Cm9'],['D7b9'],['Gm9'],['Bbmaj7'],['Am7b5',8,'D7',8],['Gm9']],
  mel:'D6:4 Bb5:2 A5:2 G5:4 A5:2 Bb5:2|G5:6 Bb5:2 D6:4 C6:2 Bb5:2|Eb6:3 D6:1 C6:4 G5:2 Bb5:2 D6:4|F#5:4 A5:2 C6:2 Eb6:4 D6:4|Bb5:2 C6:2 D6:4 F6:2 D6:2 A5:4|D6:4 F6:4 A5:4 C6:4|C6:2 Eb6:2 G5:2 A5:2 F#5:4 C6:4|G5:12 -:4'},
 {title:'Subject Matter Midnight',bpm:116,swing:.06,bass:'slap',drums:'drive',arp:'16th',
  bars:[['Cm9'],['Abmaj7'],['Fm9'],['G7#9'],['Cm9'],['Ebmaj7'],['Dm7b5',8,'G7',8],['Cm9']],
  mel:'G5:2 Bb5:2 C6:2 D6:2 Eb6:4 D6:2 C6:2|C6:6 Eb6:2 G6:4 F6:2 Eb6:2|Ab5:3 G5:1 F5:2 C6:2 Eb6:4 G5:4|B5:4 D6:2 F6:2 Bb6:4 Ab6:2 G6:2|Eb6:2 D6:2 C6:4 G5:2 Bb5:2 D6:4|G6:4 F6:2 D6:2 Bb5:4 G5:4|Ab5:2 C6:2 F6:2 D6:2 B5:4 D6:4|C6:10 -:6'},
 ],
 torts:[
 {title:'Reasonable Breeze',bpm:96,swing:.14,bass:'bossa',drums:'bossa',arp:'8th',
  bars:[['Fmaj7'],['Em7',8,'A7',8],['Dm9'],['Gm7',8,'C7',8],['Bbmaj7'],['Am7'],['Gm7'],['C7sus']],
  mel:'C6:2 A5:2 E6:4 C6:2 A5:2 G5:4|G5:2 A5:2 B5:2 D6:2 C#6:4 A5:4|E6:6 D6:2 C6:2 A5:2 F5:4|Bb5:2 A5:2 G5:2 F5:2 E5:4 G5:4|D6:2 F6:2 A6:4 F6:2 D6:2 C6:4|C6:3 B5:1 A5:4 E5:4 G5:4|F5:2 G5:2 A5:2 Bb5:2 D6:4 C6:4|G5:10 -:6'},
 {title:'Eggshell Afternoon',bpm:90,swing:.16,bass:'walk',drums:'chill',arp:'8th',
  bars:[['Dmaj7'],['C#m7'],['Bm9'],['E7sus',8,'E7',8],['Amaj9'],['F#m7'],['Bm7',8,'E7',8],['Amaj7']],
  mel:'F#5:2 A5:2 C#6:4 E6:2 C#6:2 A5:4|B5:6 G#5:2 E5:4 G#5:4|D6:3 C#6:1 B5:2 A5:2 F#5:4 A5:4|B5:4 A5:2 B5:2 G#5:4 D6:4|C#6:2 E6:2 G#6:4 E6:2 C#6:2 B5:4|A5:3 G#5:1 F#5:4 C#6:4 E6:4|D6:2 C#6:2 B5:2 A5:2 G#5:2 B5:2 D6:4|C#6:10 -:6'},
 {title:'Duty of Breeze',bpm:102,swing:.12,bass:'bossa',drums:'bossa',arp:'16th',
  bars:[['Cmaj9'],['Am9'],['Dm9'],['G13'],['Em7'],['A7'],['Dm7',8,'G7',8],['Cmaj7']],
  mel:'E6:2 D6:2 B5:4 G5:2 A5:2 B5:4|C6:6 B5:2 A5:2 E5:2 G5:4|F5:2 A5:2 C6:2 E6:2 D6:4 A5:4|B5:3 A5:1 G5:4 E6:4 D6:4|G5:2 B5:2 D6:4 E6:2 D6:2 B5:4|C#6:4 E6:4 G6:4 E6:2 C#6:2|F6:2 E6:2 D6:2 C6:2 B5:2 D6:2 F6:4|E6:10 -:6'},
 ],
 k:[
 {title:'Bargain Bazaar Funk',bpm:120,swing:.06,bass:'slap',drums:'funk',arp:'16th',
  bars:[['Bbmaj7'],['Am7',8,'D7',8],['Gm7'],['C7'],['Ebmaj7'],['Dm7'],['Cm7',8,'F7',8],['Bb6']],
  mel:'F5:1 G5:1 Bb5:2 -:1 Bb5:1 C6:2 D6:2 C6:2 Bb5:2 G5:2|A5:3 G5:1 E5:2 G5:2 F#5:4 A5:2 C6:2|Bb5:2 D6:2 F6:4 D6:2 Bb5:2 A5:2 G5:2|E5:2 G5:2 Bb5:2 C6:2 E6:4 -:2 C6:2|D6:4 Bb5:2 G5:2 F5:2 G5:2 Bb5:4|A5:2 C6:2 D6:2 F6:2 E6:4 D6:4|Eb6:2 D6:2 C6:2 Bb5:2 A5:2 C6:2 Eb6:4|D6:2 C6:2 Bb5:8 -:4'},
 {title:'Consideration Groove',bpm:116,swing:.08,bass:'pulse',drums:'funk',arp:'16th',
  bars:[['Ebmaj7'],['Dm7',8,'G7',8],['Cm7'],['F7'],['Abmaj7'],['Gm7'],['Fm7',8,'Bb7',8],['Eb6']],
  mel:'Bb5:1 C6:1 Eb6:2 -:1 Eb6:1 F6:2 G6:2 F6:2 Eb6:2 C6:2|D6:3 C6:1 A5:2 C6:2 B5:4 D6:2 F6:2|Eb6:2 G6:2 Bb6:4 G6:2 Eb6:2 D6:2 C6:2|A5:2 C6:2 Eb6:2 F6:2 A6:4 -:2 F6:2|G6:4 Eb6:2 C6:2 Bb5:2 C6:2 Eb6:4|D6:2 F6:2 G6:2 Bb6:2 A6:4 G6:4|Ab6:2 G6:2 F6:2 Eb6:2 D6:2 F6:2 Ab6:4|G6:2 F6:2 Eb6:8 -:4'},
 {title:'Mailbox Rule Boogie',bpm:126,swing:.02,bass:'slap',drums:'drive',arp:'16th',
  bars:[['Fmaj7'],['Eb7'],['Bbmaj7'],['C7#9'],['Dm9'],['Gm7'],['Bbmaj7',8,'C7',8],['F6']],
  mel:'C6:2 A5:1 C6:1 F6:2 E6:2 C6:2 A5:2 G5:4|G5:2 Bb5:2 Db6:4 C6:2 Bb5:2 G5:4|D6:3 C6:1 A5:4 F5:4 A5:4|E5:2 G5:2 Bb5:2 Eb6:2 D6:4 C6:4|F5:2 A5:2 C6:2 E6:2 F6:4 E6:4|D6:2 Bb5:2 G5:2 F5:2 G5:4 Bb5:4|D6:2 F6:2 A6:4 G6:2 E6:2 C6:4|A5:2 C6:2 F6:8 -:4'},
 ],
};
// Bass patterns: [step, interval from root (or 'third'/'fifth' via chord), length]
const BASS={
  walk:[[0,0,3],[4,7,2],[6,12,2],[8,10,3],[12,7,2],[14,5,2]],
  slap:[[0,0,2],[3,12,1],[4,0,1],[6,0,2],[8,7,1],[10,12,1],[11,10,1],[12,0,2],[14,12,1],[15,7,1]],
  pulse:[[0,0,2],[2,0,1],[4,12,2],[6,0,2],[8,7,2],[10,0,1],[12,10,2],[14,12,2]],
  bossa:[[0,0,3],[3,7,1],[4,7,3],[8,0,3],[11,7,1],[12,7,4]],
};
// Drums: k=kick s=snare h=closed hat o=open hat, one char per 16th step
const DRUMS={
  chill:{k:'x.......x.x.....',s:'....x.......x...',h:'x.x.x.x.x.x.x.x.',o:'..............x.'},
  drive:{k:'x.....x...x.....',s:'....x.......x..x',h:'xxxxxxxxxxxxxxxx',o:'......x.......x.'},
  half:{k:'x.........x.....',s:'........x.......',h:'x.x.x.x.x.x.x.x.',o:'......x.........'},
  bossa:{k:'x..x....x..x....',s:'..x..x....x..x..',h:'x.xxx.xxx.xxx.xx',o:'................'},
  funk:{k:'x..x..x...x.....',s:'....x..x....x...',h:'xxxxxxxxxxxxxxxx',o:'..x.......x.....'},
};
function parseMel(str){return str.split('|').map(bar=>{let st=0;const out=[];bar.trim().split(/\s+/).forEach(t=>{const [n,l]=t.split(':');const len=+l;if(n!=='-')out.push({s:st,n:midi(n),l:len});st+=len});return out})}
const MUS={ctx:null,master:null,layers:[],cur:null,timer:0,noise:null,waves:{},want:'home',vi:{}};
const LOOPS_PER_SONG=2;
function musVol(){const st=S.settings;return st.mmute?0:Math.pow(st.mvol==null?.5:st.mvol,2)*.55}
function musInit(){
  if(MUS.ctx)return true;const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return false;
  const c=MUS.ctx=new AC();MUS.master=c.createGain();MUS.master.gain.value=musVol();
  const comp=c.createDynamicsCompressor();comp.threshold.value=-14;comp.ratio.value=3;MUS.master.connect(comp);comp.connect(c.destination);
  // gentle echo for the lead: the "smooth" part of the groove
  const d=c.createDelay(1);d.delayTime.value=.27;const fb=c.createGain();fb.gain.value=.28;const wet=c.createGain();wet.gain.value=.22;
  d.connect(fb);fb.connect(d);d.connect(wet);wet.connect(MUS.master);MUS.echo=d;
  const mk=duty=>{const n=32,re=new Float32Array(n),im=new Float32Array(n);for(let k=1;k<n;k++){im[k]=2/(k*Math.PI)*Math.sin(k*Math.PI*duty)}return c.createPeriodicWave(re,im)};
  MUS.waves={p12:mk(.125),p25:mk(.25),p50:mk(.5)};
  // campaign voices: a soft overdriven guitar and an electric piano
  const mkH=f=>{const n=32,re=new Float32Array(n),im=new Float32Array(n);for(let k=1;k<n;k++)im[k]=f(k);return c.createPeriodicWave(re,im)};
  MUS.waves.gtr=mkH(k=>k>22?0:(k%2?1:.55)/Math.pow(k,1.25));MUS.waves.keys=mkH(k=>[0,1,.38,.14,.07,.03][k]||0);
  const b=c.createBuffer(1,c.sampleRate,c.sampleRate),ch=b.getChannelData(0);for(let i=0;i<ch.length;i++)ch[i]=Math.random()*2-1;MUS.noise=b;
  document.addEventListener('visibilitychange',()=>{if(!MUS.ctx)return;if(document.hidden)MUS.ctx.suspend();else if(musVol()>0)MUS.ctx.resume()});
  return true;
}
const hz=m=>440*Math.pow(2,(m-69)/12);
function tone(dest,t,m,len,wave,vol,o={}){const c=MUS.ctx,os=c.createOscillator(),g=c.createGain();
  if(MUS.waves[wave])os.setPeriodicWave(MUS.waves[wave]);else os.type=wave;os.frequency.setValueAtTime(hz(m),t);
  if(o.vib){const l=c.createOscillator(),lg=c.createGain();l.frequency.value=5.5;lg.gain.setValueAtTime(0,t);lg.gain.linearRampToValueAtTime(hz(m)*.012,t+Math.min(len,.35));l.connect(lg);lg.connect(os.frequency);l.start(t);l.stop(t+len+.05)}
  if(o.slide)os.frequency.setValueAtTime(hz(m-1),t),os.frequency.linearRampToValueAtTime(hz(m),t+.04);
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+.008);g.gain.setTargetAtTime(vol*(o.sus??.6),t+.02,.08);g.gain.setTargetAtTime(0,t+len*.92,.03);
  os.connect(g);g.connect(dest);if(o.echo)g.connect(MUS.echo);os.start(t);os.stop(t+len+.15)}
function noise(dest,t,len,vol,hp){const c=MUS.ctx,s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=MUS.noise;f.type='highpass';f.frequency.value=hp;
  g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+len);s.connect(f);f.connect(g);g.connect(dest);s.start(t,Math.random()*.5);s.stop(t+len+.02)}
function kick(dest,t){const c=MUS.ctx,o=c.createOscillator(),g=c.createGain();o.type='triangle';o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(42,t+.12);
  g.gain.setValueAtTime(.9,t);g.gain.exponentialRampToValueAtTime(.001,t+.2);o.connect(g);g.connect(dest);o.start(t);o.stop(t+.22)}
function chordAt(song,bar,st){const b=song.bars[bar];if(b.length===1)return chordOf(b[0]);let acc=0;for(let i=0;i<b.length;i+=2){acc+=b[i+1];if(st<acc)return chordOf(b[i])}return chordOf(b[b.length-2])}
function schedStep(song,g,t,absStep){
  const bar=Math.floor(absStep/16)%song.bars.length,st=absStep%16,sx=60/song.bpm/4,ch=chordAt(song,bar,st),loop=Math.floor(absStep/(16*song.bars.length));
  // drums
  const D=DRUMS[song.drums];if(D.k[st]==='x')kick(g,t);if(D.s[st]==='x')noise(g,t,.14,.32,1200);if(D.h[st]==='x')noise(g,t,.035,.09,7000);if(D.o[st]==='x')noise(g,t,.18,.08,6000);
  // bass (triangle, two octaves down, with a light pulse layer for definition)
  BASS[song.bass].forEach(([s0,iv,l])=>{if(s0!==st)return;const m=ch.r+(iv===7&&!ch.iv.includes(7)?ch.iv[2]:iv);tone(g,t,m,l*sx*.95,'triangle',.5,{sus:.8});tone(g,t,m+12,l*sx*.6,'p50',.05,{sus:.3})});
  // chord stabs / arpeggio (quiet 12.5% pulse)
  const every=song.arp==='16th'?1:2;
  if(st%every===0){const tones=ch.iv.slice(1);const idx=(st/every+loop)%tones.length;const m=ch.r+24+tones[idx];tone(g,t,m,sx*every*.8,song.aw||'p12',song.aw==='keys'?.06:.045,{sus:.4})}
  if(st===0||(song.bars[bar].length>1&&st===song.bars[bar][1])){ch.iv.slice(1,4).forEach(iv=>tone(g,t,ch.r+24+iv,sx*6,song.pw||'p25',song.pw==='keys'?.04:.018,{sus:.7}))}
  // lead
  const mel=song._mel[bar];mel.forEach(n=>{if(n.s!==st)return;const alt=loop%2===1;tone(g,t,n.n,n.l*sx*.96,alt?(song.lw2||song.lw||'p50'):(song.lw||'p25'),song.lw==='gtr'?.1:.13,{vib:n.l>=4,echo:true,slide:n.l>=6,sus:.75});if(alt)tone(g,t,n.n-12,n.l*sx*.9,'p12',.035,{sus:.6})});
}
// Each playing track is a "layer" with its own clock. A track plays LOOPS_PER_SONG times through,
// fades out over its final bar, and the next variation for that mode fades in right after.
function musLayer(id,v,t0,fadeIn){
  const song=SONGS[id][v];if(!song._mel)song._mel=parseMel(song.mel);
  const c=MUS.ctx,g=c.createGain();g.gain.setValueAtTime(0,c.currentTime);g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(1,t0+fadeIn);g.connect(MUS.master);
  const L={id,v,song,gain:g,step:0,next:t0,end:song.bars.length*16*LOOPS_PER_SONG,handed:false};
  MUS.layers.push(L);MUS.cur=L;MUS.vi[id]=v;updMusUI();return L}
function musTick(){
  const c=MUS.ctx;if(!c)return;
  for(const L of MUS.layers.slice()){
    const song=L.song,sx=60/song.bpm/4;
    while(L.step<L.end&&L.next<c.currentTime+.15){const sw=(L.step%2===1)?sx*song.swing:0;schedStep(song,L.gain,L.next+sw,L.step);L.next+=sx;L.step++;
      // start of the final bar of the last loop: fade this one out and queue the next variation
      if(L===MUS.cur&&!L.handed&&L.step===L.end-16){L.handed=true;const barEnd=L.next+16*sx;
        L.gain.gain.setValueAtTime(1,L.next);L.gain.gain.linearRampToValueAtTime(0,barEnd);
        const nv=(L.v+1)%SONGS[L.id].length;musLayer(L.id,nv,barEnd,1.6)}}
    if(L.step>=L.end&&c.currentTime>L.next+.5){L.gain.disconnect();MUS.layers.splice(MUS.layers.indexOf(L),1)}
  }
}
function musFadeAll(sec){const c=MUS.ctx;if(!c)return;for(const L of MUS.layers){L.gain.gain.cancelScheduledValues(c.currentTime);L.gain.gain.setValueAtTime(L.gain.gain.value,c.currentTime);L.gain.gain.linearRampToValueAtTime(0,c.currentTime+sec);L.end=Math.min(L.end,L.step+2);L.handed=true}MUS.cur=null}
function musPlay(id){
  MUS.want=id;if(!MUS.ctx||musVol()===0){updMusUI();return}
  if(MUS.cur&&MUS.cur.id===id)return;
  if(!SONGS[id])return;const c=MUS.ctx;
  musFadeAll(.6);
  musLayer(id,MUS.vi[id]||0,c.currentTime+.35,.8);
  if(!MUS.timer)MUS.timer=setInterval(musTick,40);
}
function musStop(){musFadeAll(.3)}
function musSetVol(v,mute){S.settings.mvol=v;if(mute!=null)S.settings.mmute=mute;save();
  if(!MUS.ctx){if(musVol()>0)musUnlock();updMusUI();return}
  MUS.master.gain.setTargetAtTime(musVol(),MUS.ctx.currentTime,.05);
  if(musVol()===0)musStop();else{if(MUS.ctx.state!=='running')MUS.ctx.resume();musPlay(MUS.want)}updMusUI()}
function musUnlock(){if(musVol()===0)return;if(!musInit())return;if(MUS.ctx.state!=='running')MUS.ctx.resume();musPlay(MUS.want)}
function musFor(){if(V==='camp')return CM.mus||'cp';if(V==='game'&&G&&G.camp)return G.camp.mus;if(V==='game'&&G)return G.mode==='story'?(G.world||'cp'):'vs';if(V==='lobby'||V==='vs')return 'vs';if(V==='worlds')return 'home';if(V==='floors'||V==='dlg')return WSEL;return 'home'}
function musSync(){const id=musFor();if(id!==MUS.want||(!MUS.cur&&MUS.ctx&&musVol()>0))musPlay(id)}
function updMusUI(){const el=document.getElementById('mus');if(!el)return;const st=S.settings,v=st.mvol==null?.5:st.mvol,off=st.mmute||v===0;
  el.querySelector('#musb').innerHTML=off?'🔇':v<.34?'🔈':v<.67?'🔉':'🔊';el.querySelector('#musb').setAttribute('aria-label',off?'Unmute music':'Mute music');
  const r=el.querySelector('#musv');if(+r.value!==Math.round(v*100))r.value=Math.round(v*100);
  const t=el.querySelector('#must');const s=MUS.cur?MUS.cur.song:(SONGS[MUS.want]||[])[MUS.vi[MUS.want]||0];t.textContent=off?'music off':!MUS.ctx||!MUS.cur?'♪ tap anywhere to start':'♪ '+(s?s.title:'')}
function musMount(){if(document.getElementById('mus'))return;const st=S.settings;if(st.mvol==null)st.mvol=.5;
  const el=document.createElement('div');el.id='mus';el.className='mus';el.setAttribute('role','group');el.setAttribute('aria-label','Music');
  el.innerHTML=`<button id="musb" type="button" title="Mute / unmute music"></button><input id="musv" type="range" min="0" max="100" step="5" value="${Math.round(st.mvol*100)}" aria-label="Music volume"><span id="must" class="must"></span>`;
  document.body.appendChild(el);
  el.querySelector('#musb').addEventListener('click',()=>{const s=S.settings;if(s.mmute||s.mvol===0)musSetVol(s.mvol||.5,false);else musSetVol(s.mvol,true)});
  el.querySelector('#musv').addEventListener('input',e=>{const v=+e.target.value/100;musSetVol(v,v===0?S.settings.mmute:false)});
  // browsers only allow audio after the first tap or key press
  const go1=()=>{musUnlock();window.removeEventListener('pointerdown',go1,true);window.removeEventListener('keydown',go1,true)};
  window.addEventListener('pointerdown',go1,true);window.addEventListener('keydown',go1,true);updMusUI()}

/* ================= accounts ================= */
let ADMINUID=null,NAMEBUMP='',NAMESTAT={n:'',st:''},nameT=0,ACCTMSG='',ACCTBUSY=false;
const ADMINNAME='COOPER',ADMINC='#ffd84a';
const isAdmin=uid=>!!uid&&uid===ADMINUID;
async function accountBoot(){
  try{ADMINUID=await ON.nameOwner(ADMINNAME)}catch(e){}
  if(ON.watchName)ON.watchName(ADMINNAME,u=>{if(u===ADMINUID)return;ADMINUID=u;if(GNODE)gDraw();if(V!=='game')render()});
  if(ON.regName){S.reg=ON.regName;S.profile.name=ON.regName;save();
    // Repair a registration whose name claim didn't go through.
    try{const o=await ON.nameOwner(ON.regName);if(o!==ME){await ON.claimName();if(ON.regName===ADMINNAME)ADMINUID=ME;ACCTMSG=''}}catch(e){ACCTMSG=e.message||String(e)}
    return}
  S.reg=null;const n=prof().name;if(!n)return;
  try{const o=await ON.nameOwner(n);if(o&&o!==ME){NAMEBUMP=n;S.profile.name='';save()}}catch(e){}
}
// Live availability check while typing a username.
function checkName(n){
  n=(n||'').trim().toUpperCase();clearTimeout(nameT);
  if(!n){NAMESTAT={n:'',st:''};drawNameStat();return}
  if(!ON){NAMESTAT={n,st:'offline'};drawNameStat();return}
  if(S.reg&&n===S.reg){NAMESTAT={n,st:'mine'};drawNameStat();return}
  NAMESTAT={n,st:'checking'};drawNameStat();
  nameT=setTimeout(async()=>{let o=null;try{o=await ON.nameOwner(n)}catch(e){NAMESTAT={n,st:'err'};drawNameStat();return}
    if((document.getElementById('nm')||{}).value&&document.getElementById('nm').value.trim().toUpperCase()!==n)return;
    NAMESTAT={n,st:o?(o===ME?'mine':'taken'):(ON.validRegName(n)?'free':'freeonly')};drawNameStat()},350);
}
function nameStatHTML(){const s=NAMESTAT.st,n=esc(NAMESTAT.n);
  return s==='checking'?'<span class="dim">checking…</span>':s==='free'?`<span class="good">✓ ${n} is available</span> <span class="dim">· not registered yet: add a password below to claim it</span>`:s==='freeonly'?`<span class="good">✓ available</span> <span class="dim">(to register it, use only letters, numbers, _ and -)</span>`:s==='mine'?`<span class="good">✓ registered to you</span>`:s==='taken'?`<span class="bad">✗ ${n} is registered. Log in below if it’s yours.</span>`:s==='offline'?'<span class="dim">offline: names can’t be checked</span>':s==='err'?'<span class="dim">couldn’t check right now</span>':''}
function drawNameStat(){const el=document.getElementById('nmstat');if(el)el.innerHTML=nameStatHTML();const b=document.getElementById('save');if(b)b.disabled=NAMESTAT.st==='taken'||NAMESTAT.st==='checking'}
function acctV(){
  if(onState!=='on')return `<div class="acct"><h3>ACCOUNT</h3><p class="dim" style="font-size:15px">Registering a name needs online play.</p></div>`;
  if(S.reg)return `<div class="acct"><h3>ACCOUNT</h3><p class="good" style="margin:6px 0">🔒 Logged in as <b>${esc(S.reg)}</b>${isAdmin(ME)?' <span class="admintag">ADMIN</span>':''}</p><p class="dim" style="font-size:14px;margin:0 0 10px">This name is yours. You stay logged in on this browser. Log in on other devices with your name and password.${S.reg===ADMINNAME&&!isAdmin(ME)?'</p><p class="bad" style="font-size:14px">Admin isn’t active yet: the name claim didn’t finish. Tap FINISH CLAIM.':''}</p>${S.reg===ADMINNAME&&!isAdmin(ME)?'<button class="btn sm gold" data-act="claimfix" id="claimfix" style="margin-right:8px">FINISH CLAIM</button>':''}<button class="btn sm" data-act="logout" id="logout">LOG OUT</button>${ACCTMSG?`<p class="vt" style="margin:8px 0 0">${esc(ACCTMSG)}</p>`:''}</div>`;
  return `<div class="acct"><h3>REGISTER YOUR NAME <span class="dim" style="font-size:14px">(optional)</span></h3>
  <p class="dim" style="font-size:14px;margin:4px 0 8px">Add a password so nobody else can use your name, and stay logged in. No email needed. Any password with 8 or more characters works.</p>
  <form id="regf" autocomplete="on"><input type="hidden" autocomplete="username" value="${esc(prof().name)}"><input type="password" id="pw1" minlength="8" maxlength="64" placeholder="password (8+ characters)" autocomplete="new-password" aria-label="New password"><input type="password" id="pw2" minlength="8" maxlength="64" placeholder="type it again" autocomplete="new-password" aria-label="Confirm password" style="margin-top:6px"><button class="btn gold" type="submit" id="regb" style="margin-top:8px" ${ACCTBUSY?'disabled':''}>REGISTER ${esc(prof().name||'NAME')}</button></form>
  <h3 style="margin-top:18px">ALREADY REGISTERED? LOG IN</h3>
  <form id="logf" autocomplete="on"><input type="text" id="lgn" maxlength="10" placeholder="username" autocomplete="username" spellcheck="false" aria-label="Username"><input type="password" id="lgp" maxlength="64" placeholder="password" autocomplete="current-password" aria-label="Password" style="margin-top:6px"><button class="btn" type="submit" id="logb" style="margin-top:8px" ${ACCTBUSY?'disabled':''}>LOG IN</button></form>
  ${ACCTMSG?`<p class="vt" style="margin:8px 0 0">${esc(ACCTMSG)}</p>`:''}
  <p class="dim" style="font-size:13px;margin-top:10px">There’s no password reset without email, so pick one you’ll remember.</p></div>`;
}
document.addEventListener('submit',async e=>{
  if(e.target.id!=='regf'&&e.target.id!=='logf')return;e.preventDefault();if(ACCTBUSY||!ON)return;
  if(e.target.id==='regf'){
    keepName();const n=prof().name,a=document.getElementById('pw1').value,b=document.getElementById('pw2').value;
    if(!n){ACCTMSG='Type a username above first.';render();return}
    if(a.length<8){ACCTMSG='Passwords need at least 8 characters.';render();return}
    if(a!==b){ACCTMSG='The two passwords don’t match.';render();return}
    ACCTBUSY=true;ACCTMSG='Registering…';render();
    try{await ON.register(n,a);S.reg=n;S.profile.name=n;save();ACCTMSG=n===ADMINNAME?`Done. ${n} is registered to you, and you’re the admin.`:`Done. ${n} is registered to you.`;if(n===ADMINNAME)ADMINUID=ME}catch(err){ACCTMSG=err.message||String(err);if(ON.regName){S.reg=ON.regName;save()}}
    ACCTBUSY=false;render();
  }else{
    const n=document.getElementById('lgn').value.trim().toUpperCase(),p=document.getElementById('lgp').value;
    if(!n||!p){ACCTMSG='Enter your username and password.';render();return}
    ACCTBUSY=true;ACCTMSG='Logging in…';render();
    try{await ON.login(n,p);S.reg=n;S.profile.name=n;save();location.reload();return}catch(err){ACCTMSG=err.message||String(err)}
    ACCTBUSY=false;render();
  }
});

async function goOnline(){
  if(!window.HP_FIREBASE)return;
  try{const m=await import('./online.js');ON=await m.connect(window.HP_FIREBASE);{const old=ME;ME=ON.uid;if(G&&old!==ME)G.players.forEach(p=>{if(p.id===old)p.id=ME})}onState='on';await accountBoot();await achSync();loadCrowns();gStart();}
  catch(e){onState='error';onErr=String(e&&e.message||e);console.warn('Online unavailable:',e)}
  render();
}

/* ================= achievements ================= */
const ACH=[
  {id:'cp-0',w:'cp',f:0,name:'Well-Pleaded',icon:'scroll',blurb:'A short and plain statement of your victory.'},
  {id:'cp-1',w:'cp',f:1,name:'Fishing Expedition',icon:'fish',blurb:'Relevant, proportional, and a little bit of a catch.'},
  {id:'cp-2',w:'cp',f:2,name:'Peterson’s Praise',icon:'peterson',blurb:'Professor Peterson nods. That’s high praise.'},
  {id:'torts-0',w:'torts',f:0,name:'Learned Hand',icon:'thumb',blurb:'B < PL. Thumbs up.'},
  {id:'torts-1',w:'torts',f:1,name:'Proximate Chord',icon:'uke',blurb:'A foreseeable kind of music.'},
  {id:'torts-2',w:'torts',f:2,name:'Pimentel’s Ukulele Cover',icon:'pimentel',blurb:'He brought the ukulele. He played the whole thing.'},
  {id:'k-0',w:'k',f:0,name:'Meeting of the Minds',icon:'bulb',blurb:'Offer, acceptance, and one shared idea.'},
  {id:'k-1',w:'k',f:1,name:'A Peppercorn Will Do',icon:'pepper',blurb:'Consideration doesn’t have to be adequate. Just bargained for.'},
  {id:'k-2',w:'k',f:2,name:'Tirrell’s Trust',icon:'tirrell',blurb:'A firm offer of respect from Professor Tirrell.'},
  {id:'all',name:'Satisfactory Grade',icon:'grade',blurb:'Every floor of every world, cleared. The registrar is satisfied.'},
];
const ACHBY=Object.fromEntries(ACH.map(a=>[a.id,a]));
const ICONACH=Object.fromEntries(ACH.map(a=>[ICONS.indexOf(a.icon),a]));
const hasAch=id=>!!(S.ach&&S.ach[id]);
const iconUnlocked=i=>i<BASE_ICONS||(ICONACH[i]&&hasAch(ICONACH[i].id))||campIconOK(ICONS[i]);
const achDesc=a=>a.id==='all'?'Clear all nine story floors.':`Clear ${WBY[a.w].name} · Floor ${a.f+1}: ${WBY[a.w].floors[a.f].name}.`;
const achIconSvg=(a,cls,locked)=>locked?spr(a.icon in PROF?'ghost':a.icon,'#3a3a3a',cls):spr(a.icon,COLORS[prof().color],cls);
let ACHQ=[];
// Grant every achievement the save qualifies for; returns the newly earned ones.
function checkAch(){
  S.ach=S.ach||{};const out=[];
  ACH.forEach(a=>{if(a.id==='all'||hasAch(a.id))return;if((S.wins[a.w+'-'+a.f]||0)>0){S.ach[a.id]={t:Date.now()};out.push(a.id)}});
  if(!hasAch('all')&&ACH.filter(a=>a.id!=='all').every(a=>hasAch(a.id))){S.ach.all={t:Date.now()};out.push('all')}
  if(out.length){save();achPush();ACHQ.push(...out)}
  return out;
}
function achPush(){if(ON&&ON.setAch)ON.setAch(S.ach||{}).catch(()=>{})}
async function achSync(){
  if(!ON||!ON.getAch)return;
  try{const remote=await ON.getAch()||{};S.ach=S.ach||{};let changedLocal=false,changedRemote=false;
    for(const [k,v] of Object.entries(remote))if(ACHBY[k]&&!S.ach[k]){S.ach[k]=v;changedLocal=true}
    for(const k of Object.keys(S.ach))if(!remote[k])changedRemote=true;
    if(changedLocal){save();if(V==='profile')render()}
    if(changedRemote)achPush();
  }catch(e){}
}
// Top score + leaderboard placement for an achievement's stage.
const ACHSTAT={};
function achStageKey(a){return a.id==='all'?null:a.w+'-'+(a.f+1)}
function achStatText(a){
  if(a.id==='all'){const tot=ACH.filter(x=>x.id!=='all').reduce((t,x)=>t+(S.best[x.w+'-'+x.f]||0),0);const st=ACHSTAT.all;
    return `Combined best across all 9 floors: <b>${tot.toLocaleString()}</b>${st&&st.text?` · ${st.text}`:''}`}
  const best=S.best[a.w+'-'+a.f]||0,st=ACHSTAT[a.id];
  return `Top score: <b>${best.toLocaleString()}</b> · ${st?st.text:(ON?'checking leaderboard…':'leaderboard: this browser only')}`;
}
async function loadAchStat(a,tries){
  if(!ON&&onState==='connecting'&&(tries||0)<20){setTimeout(()=>loadAchStat(a,(tries||0)+1),500);return}
  const bk=achStageKey(a);
  if(a.id==='all'){if(!ON)return;let firsts=0;const ids=ACH.filter(x=>x.id!=='all');
    await Promise.all(ids.map(async x=>{try{const r=await ON.top(x.w+'-'+(x.f+1),1);if(r[0]&&r[0].uid===ME)firsts++}catch(e){}}));
    ACHSTAT.all={text:`#1 on ${firsts} of 9 global floor boards`};drawAchStat(a);return}
  if(!ON){const L=(S.lb&&S.lb[bk])||[],best=S.best[a.w+'-'+a.f]||0,i=L.findIndex(e=>e.score===best);ACHSTAT[a.id]={text:i>=0?`#${i+1} on this browser’s board`:'not on this browser’s board'};drawAchStat(a);return}
  try{const rows=await ON.top(bk,100);const i=rows.findIndex(r=>r.uid===ME);
    ACHSTAT[a.id]={text:i>=0?`global leaderboard <b>#${i+1}</b> of ${rows.length}${rows.length>=100?'+':''}`:rows.length>=100?'outside the global top 100':'no global score yet'}}
  catch(e){ACHSTAT[a.id]={text:'leaderboard unavailable'}}
  drawAchStat(a);
}
function drawAchStat(a){document.querySelectorAll(`[data-achstat="${a.id}"]`).forEach(el=>el.innerHTML=achStatText(a))}
// ---- reward screen ----
function achTryShow(){
  if(!ACHQ.length||document.getElementById('achpop'))return;
  if(V==='dlg'||(V==='game'&&G&&G.phase!=='over'))return;
  const a=ACHBY[ACHQ[0]];if(!a){ACHQ.shift();return achTryShow()}
  const idx=ICONS.indexOf(a.icon),eq=prof().icon===idx;
  const el=document.createElement('div');el.id='achpop';el.className='achpop';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.setAttribute('aria-label','Achievement unlocked');
  el.innerHTML=`<div class="achbox"><div class="achhd">ACHIEVEMENT UNLOCKED${ACHQ.length>1?` <span class="dim">· ${ACHQ.length-1} more</span>`:''}</div>
    <div class="achicon">${achIconSvg(a,'big')}</div><h2 class="gold">${esc(a.name)}</h2><p class="vt" style="margin:0 0 4px">${esc(a.blurb)}</p>
    <p class="dim" style="font-size:14px;margin:0 0 10px">${esc(achDesc(a))}</p>
    <p class="achstat" data-achstat="${a.id}">${achStatText(a)}</p>
    <p style="margin:12px 0 4px">New icon unlocked${a.icon in PROF?': your professor, as your avatar.':'.'} Equip it now, or anytime from your Profile.</p>
    <div class="row" style="justify-content:center;margin-top:10px"><button class="btn gold" data-act="achequip" data-v="${a.id}" id="achequip" ${eq?'disabled':''}>${eq?'EQUIPPED':'EQUIP NOW'}</button><button class="btn" data-act="achclose" id="achclose">${ACHQ.length>1?'NEXT':'NICE'}</button></div></div>`;
  document.body.appendChild(el);loadAchStat(a);setTimeout(()=>{const b=document.getElementById('achequip');(b&&!b.disabled?b:document.getElementById('achclose')).focus()},50);
}
function achClose(){const el=document.getElementById('achpop');if(el)el.remove();ACHQ.shift();achTryShow()}
// ---- profile section ----
function achV(){
  const n=ACH.filter(a=>hasAch(a.id)).length;
  return `<div class="box"><h2>ACHIEVEMENTS <span class="dim" style="font-size:18px">${n}/${ACH.length}</span></h2><p class="vt dim" style="margin-top:-4px">Clear story floors to earn them. Each one unlocks a new icon.${onState==='on'?' Saved to your account.':''}</p>
  <div class="achgrid">${ACH.map(a=>{const got=hasAch(a.id),idx=ICONS.indexOf(a.icon),eq=prof().icon===idx;
    return `<div class="achcard ${got?'got':'locked'}"><div class="ai">${achIconSvg(a,'',!got)}${got?'':'<span class="lock" aria-hidden="true">🔒</span>'}</div>
    <div class="at"><b class="${got?'gold':''}">${esc(a.name)}</b><small>${esc(achDesc(a))}</small>${got?`<small class="achstat" data-achstat="${a.id}">${achStatText(a)}</small><div><button class="btn sm ${eq?'':'gold'}" data-act="achequip" data-v="${a.id}" id="eq-${a.id}" ${eq?'disabled':''}>${eq?'EQUIPPED':'EQUIP'}</button></div>`:''}</div></div>`}).join('')}</div></div>`;
}

/* ================= crowns ================= */
const CROWNBOARDS=['cp-1','cp-2','cp-3','torts-1','torts-2','torts-3','k-1','k-2','k-3','vs'];
let CROWNS={};
const crownN=id=>Math.min(3,CROWNS[id]||0);
const CROWNC=['','#ffd84a','#6ad6ff','#ff6ad5'];
const CROWNNAME=['','Gold crown','Diamond crown','Royal crown'];
function crownSvg(n,cls){if(!n)return '';n=Math.min(3,n);const c=CROWNC[n],g=n===3?'#fff3a0':'#ffffff';
  return `<svg class="crown c${n} ${cls||''}" viewBox="0 0 9 6" role="img" aria-label="${CROWNNAME[n]}"><path d="M0 1h1v1h1V0h1v2h1V0h1v2h1V0h1v2h1V1h1v5H0z" fill="${c}"/><rect x="1" y="4" width="7" height="1" fill="#000" opacity=".35"/><rect x="2" y="3" width="1" height="1" fill="${g}"/><rect x="4" y="3" width="1" height="1" fill="${n>1?g:c}"/><rect x="6" y="3" width="1" height="1" fill="${g}"/></svg>`}
let crownBusy=0;
async function loadCrowns(){if(!ON||crownBusy)return;crownBusy=1;const m={};try{await Promise.all(CROWNBOARDS.map(async b=>{try{const r=await ON.top(b,1);if(r&&r[0]&&r[0].uid)m[r[0].uid]=(m[r[0].uid]||0)+1}catch(e){}}))}finally{crownBusy=0}
  const ch=JSON.stringify(m)!==JSON.stringify(CROWNS);CROWNS=m;if(ch&&(!G||G.phase!=='ask'))render()}

/* ================= questions ================= */
let D=null,TOP=[];
const topicsFor=w=>TOP.filter(t=>t.world===w);
function others(arr,i,n){return shuf(arr.map((x,j)=>[x,j]).filter(([x,j])=>j!==i&&x[0]!==arr[i][0])).slice(0,n).map(a=>a[0])}
function genQ(t,used){
  const T=t.terms||[],C=t.cases||[],M=t.mcq||[],H=t.hypo||[],FB=t.fill||[];
  const CT=C.length>=4?C.length:0;
  const kinds=[['dt',.17,T.length],['mc',.22,M.length],['hy',.24,H.length],['fb',.15,FB.length],['hc',.03,CT],['tf',.09,T.length+CT],['td',.09,T.length],['ch',.01,CT]].filter(k=>k[2]>=4||((k[0]==='mc'||k[0]==='hy'||k[0]==='fb')&&k[2]>0));
  for(let tries=0;tries<14;tries++){
    let r=Math.random()*kinds.reduce((s,k)=>s+k[1],0),k=kinds[0][0];for(const x of kinds){r-=x[1];if(r<=0){k=x[0];break}}
    const n=k==='mc'?M.length:k==='hy'?H.length:k==='fb'?FB.length:k==='tf'?T.length+CT:(k==='dt'||k==='td')?T.length:C.length,i=Math.floor(Math.random()*n),id=t.id+':'+k+':'+i;
    if(used.has(id)&&tries<13)continue;used.add(id);
    if(k==='fb'){const m=FB[i];return {id,kind:'Fill in the blank',q:esc(m[0]).replace('___','<span class="blank" aria-label="blank">______</span>'),opts:shuf([{t:m[1],ok:1},{t:m[2]},{t:m[3]},{t:m[4]}]),ans:m[1],e:m[5]}}
    if(k==='hy'){const m=H[i];return {id,kind:'Hypothetical',hypo:true,q:`<span class="hypo">${esc(m[0])}</span>`,opts:shuf([{t:m[1],ok:1},{t:m[2]},{t:m[3]},{t:m[4]}]),ans:m[1],e:m[5]}}
    if(k==='mc'){const m=M[i];return {id,kind:'Quick question',q:esc(m[0]),opts:shuf([{t:m[1],ok:1},{t:m[2]},{t:m[3]},{t:m[4]}]),ans:m[1],e:m[5]}}
    if(k==='dt'){const m=T[i];return {id,kind:'Name that term',q:`Which term means:<span class="quote">${esc(m[1])}</span>`,opts:shuf([{t:m[0],ok:1},...others(T,i,3).map(x=>({t:x[0]}))]),ans:m[0],e:`${m[0]}: ${m[1]}`}}
    if(k==='td'){const m=T[i];return {id,kind:'Define it',q:`What does “${esc(m[0])}” mean?`,opts:shuf([{t:m[1],ok:1},...others(T,i,3).map(x=>({t:x[1]}))]),ans:m[1],e:`${m[0]}: ${m[1]}`}}
    if(k==='hc'){const m=C[i];return {id,kind:'Name that case',q:`Which case held:<span class="quote">${esc(m[1])}</span>`,opts:shuf([{t:m[0],ok:1},...others(C,i,3).map(x=>({t:x[0]}))]),ans:m[0],e:`${m[0]}: ${m[1]}`}}
    if(k==='ch'){const m=C[i];return {id,kind:'What did it hold?',q:`What did <i>${esc(m[0])}</i> hold?`,opts:shuf([{t:m[1],ok:1},...others(C,i,3).map(x=>({t:x[1]}))]),ans:m[1],e:`${m[0]}: ${m[1]}`}}
    if(k==='tf'){const isT=i<T.length,src=isT?T:C,j=isT?i:i-T.length,m=src[j],truth=Math.random()<.5,o=others(src,j,1)[0];
      const claim=truth?m[1]:o[1];const q=isT?`True or false: “${esc(m[0])}” means: ${esc(claim)}`:`True or false: <i>${esc(m[0])}</i> held: ${esc(claim)}`;
      return {id,kind:'True or false',q,opts:[{t:'True',ok:truth?1:0},{t:'False',ok:truth?0:1}],ans:truth?'True':'False',e:`${m[0]}: ${m[1]}`}}
  }
}

/* ================= campus chat (home screen) ================= */
let gPend={},GCHAT=[],GNODE=null,gOff=null,lastGT=-1e9,lastGText='',lastInvT=-1e9;
function gStart(){if(!ON||gOff)return;ON.gchatPrune().catch(()=>{});gOff=ON.gchatWatch(m=>{if(GCHAT.some(x=>x.key===m.key))return;GCHAT.push(m);if(GCHAT.length>80)GCHAT.shift();gAppend(m)},k=>{const i=GCHAT.findIndex(x=>x.key===k);if(i>=0){GCHAT.splice(i,1);gDraw()}})}
const muted=()=>S.muted||(S.muted=[]);
function gLine(c){
  if(c.uid&&muted().includes(c.uid))return '';
  const adm=isAdmin(c.uid),del=isAdmin(ME)&&c.key?`<button class="gdel" data-act="gdel" data-v="${esc(c.key)}" title="Delete message (admin)" aria-label="Delete message">✕</button>`:'';
  const who=`${del}<button class="gname" data-act="gmute" data-v="${esc(c.uid||'')}" title="Mute this player" style="color:${adm?ADMINC:esc(c.c||'#fff')}">${nm(c.n)}</button>${adm?'<span class="admintag">ADMIN</span>':''}`;
  if(c.inv&&/^SPUD-[A-Z0-9]{4}$/.test(c.inv))return `<div class="ginv">${who} is hosting a lobby <button class="btn sm" data-act="joinpub" data-v="${esc(c.inv)}" id="gj-${esc(c.key||c.inv)}">JOIN ${esc(c.inv)}</button></div>`;
  if(c.cr){const n=Math.min(+c.cr||0,Object.keys(CROWNS).length?crownN(c.uid):0);return n>0?`<div class="emo">${who} <span class="crownemo">${crownSvg(n)}</span><span class="dim">${esc(CROWNNAME[n].toUpperCase())}</span></div>`:''}
  if(c.e&&EMO[c.e])return `<div class="emo">${who} <span class="em">${EMO[c.e].i}</span><span class="dim">${esc(EMO[c.e].t)}</span></div>`;
  return `<div class="${adm?'adminmsg':''}">${who}: ${esc(censor(c.t||''))}</div>`}
function gAppend(m){const l=GNODE&&GNODE.querySelector('#gchatlog');if(!l)return;const near=l.scrollHeight-l.scrollTop-l.clientHeight<60;const ph=l.querySelector('.ph');if(ph)ph.remove();l.insertAdjacentHTML('beforeend',gLine(m));if(near||m.uid===ME)l.scrollTop=l.scrollHeight}
function gDraw(){const l=GNODE&&GNODE.querySelector('#gchatlog');if(!l)return;l.innerHTML=GCHAT.map(gLine).join('')||'<div class="sys ph">No messages yet. Say hi, or host a game.</div>';l.scrollTop=l.scrollHeight;const m=GNODE.querySelector('#gmuted');if(m)m.innerHTML=muted().length?`${muted().length} muted · <button class="lnk" data-act="gunmute">unmute all</button>`:'tap a name to mute'}
function gMount(){
  const slot=document.getElementById('gslot');if(!slot)return;
  if(onState!=='on'){slot.innerHTML=`<div class="gchat off"><div class="chathd"><span>CAMPUS CHAT</span></div><p class="dim" style="font-size:15px;margin:6px 0">${onState==='connecting'?'Connecting…':'Campus chat needs online play. See SETUP.md.'}</p></div>`;return}
  if(!GNODE){GNODE=document.createElement('div');GNODE.className='gchat';
    GNODE.innerHTML=`<div class="chathd"><span>CAMPUS CHAT · moderated</span><span id="gmuted"></span></div><div class="chat" id="gchatbox"><div class="log" id="gchatlog"></div><div class="emotes" id="gemotes" hidden></div><form id="gchatf" autocomplete="off"><button type="button" class="emob" data-act="gemotes" id="gemob" aria-label="Emotes" title="Emotes">☺</button><input id="gchatin" maxlength="140" placeholder="talk to classmates, find a game…" aria-label="Campus chat message"><button type="submit" id="gchatsend">SEND</button></form></div><div class="row" style="margin-top:8px"><button class="btn sm gold" data-act="ghost" id="ghost">📣 HOST A PUBLIC GAME &amp; INVITE</button></div><p class="dim" style="font-size:13px;margin:6px 0 0">Be decent. Profanity and slurs are filtered automatically; tap a name to mute someone.</p>`;
    slot.appendChild(GNODE);gDraw();return}
  slot.appendChild(GNODE);gDraw();
}
function gOK(t){const n=performance.now();if(n-lastGT<1500)return false;if(t&&t===lastGText&&n-lastGT<30000)return false;lastGT=n;lastGText=t||'';return true}
function gSend(extra){if(!ON||!prof().name){go('profile');return}ON.gchatSend({n:meP().n,c:meP().c,...extra}).catch(()=>{})}
function gEmotePanel(){const el=GNODE&&GNODE.querySelector('#gemotes');if(!el)return;const cn=crownN(ME);
  el.innerHTML=EMOTES.map(e=>`<button type="button" class="emo-b" data-act="gemote" data-v="${e.id}" id="gemo-${e.id}" title="${esc(e.t)}"><span>${e.i}</span><small>${esc(e.t)}</small></button>`).join('')+
  `<button type="button" class="emo-b crownb" data-act="gemote" data-v="crown" id="gemo-crown" ${cn?'':'disabled'} title="${cn?'Show off your crown':'Hold #1 on a global leaderboard to unlock'}"><span>${crownSvg(cn||1)}</span><small>${cn?'MY CROWN':'crown holders'}</small></button>`}
function postInvite(){if(!LOBBY||!LOBBY.net||!ON)return false;const n=performance.now();if(n-lastInvT<30000)return false;lastInvT=n;gSend({inv:LOBBY.code});return true}
document.addEventListener('submit',e=>{if(e.target.id!=='gchatf')return;e.preventDefault();const i=document.getElementById('gchatin'),t=i.value.trim().slice(0,140);if(!t||!gOK(t))return;i.value='';gSend({t:censor(t)})});

/* ================= views & state ================= */
const app=document.getElementById('app');
let V='title',menuI=0,dlg=null,G=null,tick=null,last=0,confirmReset=false,flavI=Math.floor(Math.random()*FLAV.length);
let WSEL='cp',BOARD='story',BW='cp',BF=0,BOARDDATA={},LOBBY=null,CHAT=[],JOINERR='',unwatch=null;
function go(v){V=v;menuI=0;confirmReset=false;render()}
function render(){
  app.classList.toggle('wide',V==='title');
  if(V==='title'){app.innerHTML=titleV();gMount()}
  else if(V==='profile')app.innerHTML=profileV();
  else if(V==='worlds')app.innerHTML=worldsV();
  else if(V==='floors')app.innerHTML=floorsV();
  else if(V==='dlg')app.innerHTML=dlgV();
  else if(V==='game'){withChat(gameV(G),G&&G.mode!=='story','ingame');publish()}
  else if(V==='vs')app.innerHTML=vsV();
  else if(V==='lobby')withChat(lobbyV(),true,'');
  else if(V==='boards')app.innerHTML=boardsV();
  else if(V==='records')app.innerHTML=recordsV();
  else if(V==='settings')app.innerHTML=settingsV();
  else if(V==='camp')campRender();
  if(V!=='boards'&&boardOff)stopBoardWatch();
  if(V==='vs'&&ON&&!pubOff){pubOff=ON.watchPub(l=>{PUBS=l;drawPubs()})}else if(V!=='vs'&&pubOff){pubOff();pubOff=null;PUBS=null}
  musSync();
  achTryShow();
}
const onlineBadge=()=>onState==='on'?'<span class="good">● ONLINE</span>':onState==='connecting'?'<span class="dim">○ connecting…</span>':onState==='error'?'<span class="bad">● online unavailable</span>':'<span class="dim">○ offline</span>';
const MENU=[['STORY MODE','story'],['VS MODE','vs'],['CAMPAIGN · BETA','camp'],['LEADERBOARDS','boards'],['PROFILE','profile'],['RECORDS','records'],['SETTINGS','settings']];
const BUILD='build 20 · Nov 25';
function titleV(){
  return `<div class="home"><div class="homeL"><div class="title"><div class="potato">${SPUD()}</div><div class="tblock"><h1>HOT <span class="h">POTATO</span>,<br>ESQ.</h1><div class="credit">made by <b>COOPER</b> from Civ Pro</div></div><p class="flav">${FLAV[flavI]}</p>
  <nav class="menu">${MENU.map((m,i)=>`<button class="mi ${i===menuI?'on':''}" data-act="menu" data-v="${m[1]}" id="mi-${m[1]}">${m[0]}</button>`).join('')}</nav>
  <p class="dim signed" style="font-size:15px">${prof().name?`Signed in as ${crownN(ME)?crownSvg(crownN(ME),'inline'):''}<span class="gold">${esc(prof().name)}</span> · `:'Make a profile before you play · '}${onlineBadge()}</p></div>
  <p class="note">A hot-potato trivia game for 1L finals. Original characters and questions. The Civil Procedure world is built from your coursebook; Torts and Contracts are experimental, general coverage. Check anything surprising against your materials. Keys: <kbd>↑</kbd><kbd>↓</kbd> and <kbd>Enter</kbd> in menus, <kbd>1</kbd>–<kbd>4</kbd> to answer, <kbd>P</kbd> to pause.</p><p class="dim build" style="font-size:12px;margin:4px 0 0">${BUILD}</p></div><div class="homeR" id="gslot"></div></div>`;
}
function profileV(){
  const p=prof();if(ON&&!S.reg&&p.name&&NAMESTAT.n!==p.name)setTimeout(()=>checkName(p.name),0);
  return `<button class="back" data-act="home" id="back">◂ back</button><div class="box"><h2>WHO ARE YOU?</h2>
  <div class="prof"><div class="pv">${withCrown(ME,myIcon())}<div class="gold" style="font-size:22px">${esc(p.name||'???')}</div><p class="vt dim" style="margin:0">${p.name?'You look ready. You are not. That’s fine.':'The potato would like to know your name.'}</p>${crownBlock()}</div>
  <div>${NAMEBUMP?`<p class="bad" style="margin:0 0 8px">${esc(NAMEBUMP)} was registered by another player, so pick a new name (or log in below if it’s you).</p>`:''}<div class="lbl">USERNAME (up to 10 characters)</div><input type="text" id="nm" maxlength="10" value="${esc(p.name)}" autocomplete="off" spellcheck="false" ${S.reg?'disabled title="Registered names are locked. Log out to use a different name."':''}><div id="nmstat" class="nmstat" aria-live="polite">${S.reg?'<span class="good">🔒 registered to you</span>':nameStatHTML()}</div>
  <div class="lbl">ICON</div><div class="icons">${ICONS.map((n,i)=>{const ok=iconUnlocked(i),a=ICONACH[i]||CICON[n];return ok?`<button class="ic" data-act="icon" data-v="${i}" id="ic-${i}" aria-pressed="${p.icon===i}" aria-label="${a?esc(a.name):n}" title="${a?esc(a.name):''}">${spr(n,COLORS[p.color])}</button>`:`<button class="ic lockedic" disabled id="ic-${i}" aria-label="Locked: earn ${esc(a.name)}" title="Earn ‘${esc(a.name)}’ to unlock">${achIconSvg(a,'',true)}<span class="lock" aria-hidden="true">🔒</span></button>`}).join('')}</div>
  <div class="lbl">COLOR</div><div class="sws">${COLORS.map((c,i)=>`<button class="sw" style="background:${c}" data-act="color" data-v="${i}" id="sw-${i}" aria-pressed="${p.color===i}" aria-label="color ${i+1}"></button>`).join('')}</div>
  <div class="row" style="margin-top:16px"><button class="btn gold" data-act="saveprof" id="save" ${NAMESTAT.st==='taken'?'disabled':''}>SAVE</button></div>${acctV()}</div></div></div>${achV()}`;
}
function crownBlock(){const n=crownN(ME),tot=CROWNS[ME]||0;
  return `<div class="crownbox">${n?`<p class="gold" style="margin:0 0 6px">${CROWNNAME[n]} · #1 on ${tot} global leaderboard${tot>1?'s':''}</p>`:`<p class="dim" style="margin:0 0 6px;font-size:14px">${onState==='on'?'Hold #1 on any global leaderboard to wear a crown.':'Crowns are earned on the global leaderboards when online play is on.'}</p>`}
  <div class="crownkey">${[1,2,3].map(k=>`<span>${crownSvg(k)}<small>#1 on ${k===3?'3+':k} board${k>1?'s':''}</small></span>`).join('')}</div></div>`}
function worldsV(){
  return `<button class="back" data-act="home" id="back">◂ back</button><h2>STORY MODE</h2><p class="vt dim" style="margin-top:-4px">Three worlds. Three floors each. Every floor deeper, every floor hotter.</p>
  <div class="stages">${WORLDS.map((w,i)=>{const done=[0,1,2].filter(f=>S.wins[w.id+'-'+f]).length;return `<button class="stage world" data-act="world" data-v="${w.id}" id="world-${w.id}" style="--wc:${w.color}"><span class="num" style="color:${w.color}">${['I','II','III'][i]}</span><span><small class="dim">${esc(w.course).toUpperCase()}</small><h3>${w.name}</h3><span class="dim" style="font-size:14px">${esc(w.sub)}</span>${w.exp?' <span class="tag exp">EXPERIMENTAL</span>':' <span class="tag ok">COURSEBOOK</span>'}</span><span class="st"><span class="profport">${spr(PROFOF[w.id],'')}</span>${esc(CPU[PROFOF[w.id]].n)}<br>${done}/3 floors cleared</span></button>`}).join('')}</div>`;
}
function floorsV(){
  const w=WBY[WSEL];
  return `<button class="back" data-act="menu" data-v="story" id="back">◂ worlds</button><div class="profhead"><span class="profport big">${spr(PROFOF[w.id],'')}</span><div><h2 style="color:${w.color};margin:0">${w.name}</h2><span class="dim" style="font-size:15px">Taught by ${esc(CPU[PROFOF[w.id]].n.replace('PROF.','Professor'))}</span></div></div><p class="vt dim" style="margin-top:8px">${esc(w.course)} · ${topicsFor(w.id).length} topics${w.exp?' · experimental':''}</p><div class="stages">${w.floors.map((f,i)=>{const lock=i+1>S.prog[w.id],key=w.id+'-'+i,b=S.best[key];return `<button class="stage" data-act="floor" data-v="${i}" id="floor-${i}" ${lock?'disabled':''}><span class="num">${i+1}</span><span><h3>${lock?'??? LOCKED ???':f.name}</h3><span class="ops">${f.cpus.map(c=>lock?spr(CPU[c].s,'#444'):spr(CPU[c].s,CPU[c].c)).join('')}</span></span><span class="st">${f.cpus.length+1} players<br>${S.wins[key]?`won ×${S.wins[key]}`:lock?'beat floor '+i:'not cleared'}${b?`<br>best ${b} pts`:''}</span></button>`}).join('')}</div>`;
}
/* ---------- dialogue ---------- */
function startDlg(lines,then){dlg={lines,i:0,ch:0,then};V='dlg';render();typeLoop()}
function typeLoop(){if(V!=='dlg'||!dlg)return;const L=dlg.lines[dlg.i][1];if(dlg.ch<L.length){dlg.ch=Math.min(L.length,dlg.ch+(S.settings.text===2?L.length:S.settings.text===1?2:1));const el=document.getElementById('dtxt');if(el)el.textContent=L.slice(0,dlg.ch);setTimeout(typeLoop,28)}else{const m=document.getElementById('dmore');if(m)m.style.visibility='visible'}}
function dlgAdv(){if(!dlg)return;const L=dlg.lines[dlg.i][1];if(dlg.ch<L.length){dlg.ch=L.length;const el=document.getElementById('dtxt');if(el)el.textContent=L;return}dlg.i++;dlg.ch=0;if(dlg.i>=dlg.lines.length){const t=dlg.then;dlg=null;t();return}render();typeLoop()}
function dlgV(){
  const [who,txt]=dlg.lines[dlg.i],fl=G&&G.mode==='story'?WBY[G.world].floors[G.floor]:null;
  const port=who==='potato'?SPUD():who?spr(CPU[who].s,CPU[who].c):'';
  const cast=fl?`<div class="scene"><div class="cast">${spr(PROFOF[G.world],'')}${fl.cpus.filter(c=>!CPU[c].prof).map(c=>spr(CPU[c].s,CPU[c].c)).join('')}${SPUD()}${myIcon()}</div><div class="dim" style="font-size:15px">${WBY[G.world].name} · ${fl.name}</div></div>`:'';
  return `${cast}<div class="box dlg" data-act="dlg" id="dlgbox" style="${who?'':'grid-template-columns:minmax(0,1fr)'}">${who?`<div class="port">${port}</div>`:''}<div><div class="who">${who==='potato'?'THE POTATO':who?CPU[who].n.replace('PROF.','PROFESSOR'):''}</div><div class="txt" id="dtxt">${esc(txt.slice(0,dlg.ch))}</div><div class="more" id="dmore" style="visibility:hidden">▼ tap or press Enter</div></div></div><div class="row" style="justify-content:flex-end;margin-top:8px"><button class="back" data-act="skipdlg" id="skip">skip ▸▸</button></div>`;
}

/* ================= game engine ================= */
const mkPlayer=x=>({id:x.id,n:x.n,s:x.s,c:x.c,cpu:x.cpu||null,remote:!!x.remote,lives:x.lives||5,maxL:x.lives||5,run:0,streak:false,alive:true,right:0,ans:0,score:0,redeem:false});
const meP=()=>({id:ME,n:censor(prof().name||'YOU'),s:ICONS[prof().icon],c:COLORS[prof().color]});
function newG(o){return {players:[],turn:0,topic:null,recent:[],turnsLeft:0,q:null,phase:'topic',t:0,timer:S.settings.time*1000,used:new Set(),round:0,elim:[],narr:{t:'',c:''},bark:null,paused:false,spectate:false,maxRun:0,startT:performance.now(),turnId:0,inputs:{},...o}}
function startStory(w,f){
  const fl=WBY[w].floors[f];
  const ps=[meP(),...fl.cpus.map(k=>({id:'bot_'+k,n:CPU[k].n,s:CPU[k].s,c:CPU[k].c,cpu:{...CPU[k],acc:CPU[k].prof?CPU[k].acc:Math.min(.95,CPU[k].acc+fl.boost)}}))].map(mkPlayer);
  G=newG({mode:'story',world:w,floor:f,players:ps});
  const go2=()=>{V='game';newTopic();render();startLoop()};const sk=w+'-'+f;if(S.seen[sk])go2();else{S.seen[sk]=1;save();startDlg(fl.intro,go2)}
}
const isMe=p=>p&&p.id===ME;
const meNarr=p=>isMe(p)&&!(G&&G.net);
const spd=()=>S.settings.speed*(G&&G.spectate?3:1);
const alive=()=>G.players.filter(p=>p.alive);
function nextAlive(i){const n=G.players.length;for(let k=1;k<=n;k++){const j=(i+k)%n;if(G.players[j].alive)return j}return i}
function gameTopics(){if(G.camp)return topicsFor('cp').filter(t=>!G.camp.topics||G.camp.topics.includes(t.id));const w=G.mode==='story'?G.world:'cp';return topicsFor(w)}
function newTopic(){
  const all=gameTopics(),ts=all.filter(t=>!G.recent.includes(t.id)),t=pick(ts.length?ts:all);G.recent=[...G.recent,t.id].slice(-5);
  G.topic=t;G.round++;G.turnsLeft=2*alive().length;G.q=null;G.phase='topic';G.phaseT=2200/spd();
  if(G.round>1){if(G.mode==='story'&&(!G.camp||G.camp.boss)&&Math.random()<.6){const pr=CPU[PROFOF[G.world]];say(`${pr.n.replace('PROF.','PROFESSOR')}: \u201cLet\u2019s turn to ${t.name}.\u201d`,'')}else say(pick(NARR.topic),'')}
}
function say(t,c){G.narr={t,c}}
function bark(p,kind){if(!p.cpu||Math.random()>.65)return;const L=p.cpu[kind];if(!L)return;const t=pick(L);G.bark={id:p.id,text:t,until:performance.now()+2200};if(G.mode!=='story'&&Math.random()<.6)chatSend(p,t,true)}
// Story Mode: the more players still in, the faster bot turns go (2 left = 1.0, 4 = ~0.47, 6 = ~0.3, 8 = 0.25).
const crowdF=()=>{if(!G||G.mode!=='story')return 1;const n=G.players.filter(p=>p.alive).length;return Math.max(.25,Math.pow(2/Math.max(2,n),1.1))};
function startTurn(){
  const p=G.players[G.turn];G.turnId++;
  if(!G.q||G.q.solved)G.q=Object.assign(genQ(G.topic,G.used),{elim:[],solved:false,passes:0});
  const base=G.q.hypo?20000:(G.time||S.settings.time)*1000;G.fastT=p.streak;G.timer=p.streak?Math.max(5000,base-5000):base;if(G.camp)campTurn(p);
  G.phase='ask';G.t=G.timer;G.pickI=null;G.res=null;G.cpuPlan=null;G.pop=null;
  if(p.cpu){
    const left=G.q.opts.map((o,i)=>i).filter(i=>!G.q.elim.includes(i)),ci=G.q.opts.findIndex(o=>o.ok);
    const k=p.cpu.acc-(G.q.kind==='Define it'||G.q.kind==='What did it hold?'||G.q.hypo?.05:0);
    const choice=Math.random()<k?ci:pick(left.filter(i=>i!==ci).concat(left.length===1?[ci]:[]));
    // Bots answer quickly: ~0.6–2.4s (a little longer for hypotheticals). They still miss at their usual rate, just fast.
    const sp=(p.cpu.spd||1)*spd();let at=(600+Math.random()*1800+(G.q.hypo?900:0))/sp*crowdF();at=Math.max(250,Math.min(at,G.timer-500));
    G.cpuPlan={at:G.timer-at,choice};
  }
  if(p.remote&&p.gone)G.cpuPlan={at:G.timer-1200,choice:-1};
  render();
}
// The streak shield protects only the human player's own character, and only in Story Mode. CPUs never get it.
const shieldOK=(g,p)=>!!p&&g.mode==='story'&&((!p.cpu&&!p.remote&&isMe(p))||(!!g.camp&&!!p.cpu&&!!p.cpu.shield));
function answer(i){
  if(G.phase!=='ask')return;G.pop=null;const p=G.players[G.turn],q=G.q,ok=i>=0&&!!q.opts[i].ok;G.pickI=i;p.ans++;
  if(isMe(p)){S.answered++;if(ok)S.right++}
  if(ok){
    const base=Math.round(100*Math.pow(.75,q.elim.length)),bonus=[];let m=1;
    if(p.redeem){m*=1.25;bonus.push('REDEMPTION')}const runNow=p.run+1;if(runNow>=5){m*=1.5;bonus.push('HOT STREAK ×1.5')}else if(runNow>=3){m*=1.25;bonus.push('STREAK ×1.25')}
    const pts=Math.round(base*m);p.score+=pts;p.redeem=false;G.pop={id:p.id,pts,bonus};
    p.right++;p.run++;q.solved=true;if(isMe(p))G.maxRun=Math.max(G.maxRun,p.run);
    if(p.run>=(p.stk||3)&&!p.streak){p.streak=true;if(meNarr(p))say(shieldOK(G,p)?pick(NARR.streak):NARR_VSSTREAK,'cyan');else{say(`${p.n} has a STREAK: bonus points, shorter clock.`,'cyan');bark(p,'streak')}}
    else if(meNarr(p))say(pick(NARR.right),'good');else{say(`${p.n} got it.`,'');bark(p,'right')}
    if(G.camp)campRight(p);
    G.res='ok';
  }else{
    if(i>=0)q.elim.push(i);q.passes++;
    if(G.camp&&campWrong(p,i)){}
    else if(p.ward){p.ward=0;p.run=0;p.redeem=false;say(isMe(p)?'Your BLUEBOOK BUCKLER takes the hit. No life lost.':`${p.n}’s shield takes the hit.`,'cyan');G.res='shield'}
    else if(p.streak&&shieldOK(G,p)){p.streak=false;p.run=0;p.redeem=false;if(meNarr(p))say(pick(NARR.shield),'cyan');else{say(`${p.n}’s streak shatters. No life lost.`,'cyan');bark(p,'wrong')}G.res='shield'}
    else{const hadStreak=p.streak;p.lives--;if(p.lives<=0&&p.cert){p.cert=0;p.lives=1;G.certNote=1}p.run=0;p.streak=false;p.redeem=true;G.res='hurt';if(hadStreak&&!meNarr(p)&&p.lives>0)say(`${p.n}’s streak ends, and so does a life.`,'');
      if(p.lives<=0){p.alive=false;G.elim.push(p.id);if(meNarr(p))say(pick(NARR.elimYou),'hot');else{say(`${p.n} is out.`,'hot');if(p.cpu){const t=pick(p.cpu.elim);G.bark={id:p.id,text:t,until:performance.now()+2600}}}}
      else if(meNarr(p))say(i<0?pick(NARR.timeout):pick(NARR.wrong),'hot');else{say(`${p.n} ${i<0?'froze':'missed'}. The question passes.`,'');bark(p,i<0?'life':'wrong')}}
    if(q.opts.length-q.elim.length<=1)q.solved=true;
  }
  if(G.certNote){G.certNote=0;say('CERT PETITION GRANTED. You survive with 1 life.','cyan')}
  G.turnsLeft--;if(G.turnsLeft<=0&&!q.solved)q.solved=true;
  G.phase='reveal';G.wait=isMe(p)&&!G.spectate&&!G.net;G.phaseT=(q.solved?(G.net?3600:3200):(G.net?1900:1500))/spd()*(p.cpu?Math.max(.45,crowdF()):1);
  if(isMe(p)&&!ok)shake();
  render();
}
function shake(){app.classList.remove('shake','flash');void app.offsetWidth;app.classList.add('shake','flash')}
function advance(){
  const al=alive(),me=G.players.find(isMe);
  if(al.length<=1)return endGame();
  if(me&&!me.alive&&!G.spectate&&!G.askedSpec){G.askedSpec=true;if(!G.net){G.phase='dead';render();return}}
  G.turn=nextAlive(G.turn);
  if(G.turnsLeft<=0){newTopic();render();return}
  startTurn();
}
function standings(){const al=G.players.filter(p=>p.alive);return [...al,...G.elim.slice().reverse().map(id=>G.players.find(p=>p.id===id))]}
function lbLocal(key,e){const L=S.lb[key]=S.lb[key]||[];L.push(e);L.sort((a,b)=>b.score-a.score);L.length=Math.min(L.length,10);return L.indexOf(e)}
const entry=(me,place,extra)=>({name:me.n.slice(0,10),icon:prof().icon,color:prof().color,score:me.score,place,won:place===1,date:new Date().toLocaleDateString(),...extra});
function endGame(){
  stopLoop();if(G.camp){campEnd();return}const me=G.players.find(isMe),st=standings(),place=st.indexOf(me)+1;
  S.played++;S.bestRun=Math.max(S.bestRun,G.maxRun);
  if(G.mode==='story'){
    const w=G.world,f=G.floor,key=w+'-'+f,won=me.alive,fl=WBY[w].floors[f];
    if(won){S.wins[key]=(S.wins[key]||0)+1;S.prog[w]=Math.max(S.prog[w],Math.min(3,f+2))}
    S.best[key]=Math.max(S.best[key]||0,me.score);if(won)checkAch();
    S.best[key]=Math.max(S.best[key]||0,me.score);
    const e=entry(me,place,{players:G.players.length}),rank=lbLocal(w+'-'+(f+1),e);
    if(ON){const bk=w+'-'+(f+1),sc=e.score;ON.submit(bk,e).then(()=>{loadCrowns();return ON.top(bk,25)}).then(rows=>{if(!rows||!G||!G.result)return;const above=rows.filter(x=>x.score>sc).length;G.result.grank=above<rows.length||rows.length<25?above+1:-1;G.result.gtot=rows.length;if(V==='game'&&G.phase==='over')render()}).catch(()=>{})}
    save();G.result={won,place,acc:me.ans?Math.round(me.right/me.ans*100):0,right:me.right,score:me.score,rank};
    startDlg(won?fl.win:fl.lose,()=>{V='game';G.phase='over';render()});return;
  }
  // VS (bots offline, or online host)
  G.phase='over';G.result={place,st:st.map(p=>p.id)};
  recordVS(me,place,G.players.length,!!G.net);
  const top=G.players.slice().sort((a,b)=>b.score-a.score)[0];
  chatSys(`Match over. ${st[0].n} survived. Top score: ${top.n} with ${top.score}.`);
  G.players.filter(p=>p.cpu).forEach((p,i)=>{if(Math.random()<.5)setTimeout(()=>chatSend(p,pick(BOTCHAT.gg),true),600+i*500)});
  save();render();
}
function recordVS(me,place,n,online){
  const e=entry(me,place,{players:n,online});G.myRank=lbLocal('vs',e);
  if(online&&ON)ON.submit('vs',e).then(loadCrowns).catch(()=>{});
  save();
}
function loopFn(){
  const now=performance.now(),dt=Math.min(3000,now-last);last=now;if(V!=='game'||!G)return;
  if(G.client){clientTick();return}
  if(G.paused)return;
  if(G.phase==='topic'){G.phaseT-=dt;if(G.phaseT<=0)startTurn();return}
  if(G.phase==='ask'){G.t-=dt;updTimer(G.t,G.timer);
    const p=G.players[G.turn];
    if(p.remote){const inp=G.inputs[p.id];if(inp&&inp.turn===G.turnId){answer(inp.choice);return}}
    if(G.cpuPlan&&G.t<=G.cpuPlan.at){const c=G.cpuPlan.choice;G.cpuPlan=null;answer(c);return}
    if(G.t<=0)answer(-1);return}
  if(G.phase==='reveal'&&!G.wait){G.phaseT-=dt;if(G.phaseT<=0)advance()}
  if(G&&G.bark&&now>G.bark.until){G.bark=null;const b=document.getElementById('bark');if(b)b.remove()}
}
function updTimer(t,tot){const bar=document.getElementById('tbar');if(bar)bar.style.width=Math.max(0,t/tot*100)+'%';const tn=document.getElementById('tnum');if(tn)tn.textContent=Math.max(0,Math.ceil(t/1000))+'s';const sp=document.getElementById('spud');if(sp){const k=t/tot;sp.className='spud'+(k<.3?' h3':k<.6?' h2':'')}}
function startLoop(){stopLoop();last=performance.now();tick=setInterval(loopFn,50)}
function stopLoop(){if(tick){clearInterval(tick);tick=null}}
function seatPos(i,n){const a=Math.PI/2+i*2*Math.PI/n;return [50+38*Math.cos(a),50+35*Math.sin(a)]}

/* ---------- game view (works for local games and for online clients) ---------- */
function gameV(g){
  const watching=g.client&&!g.players.some(isMe)&&g.phase!=='over';
  if(g.client&&!g.players.length)return `<div class="box"><h2>JOINING THE MATCH…</h2><p class="vt dim">Grabbing a seat in the gallery. The potato is already moving.</p><button class="back" data-act="leavelobby" id="back">◂ leave</button></div>`;
  const n=g.players.length,act=g.players[g.turn]||g.players[0],q=g.q;
  const seats=g.players.map((p,i)=>{const [x,y]=seatPos(i,n);return `<div class="seat ${p.alive?'':'out'} ${i===g.turn&&g.phase!=='over'&&p.alive?'act':''} ${p.ward?'shield':p.streak?(shieldOK(g,p)?'shield':'streak'):''} ${p.alive&&p.run>=5?'onfire':''} ${isMe(p)?'you':''}" style="left:${x}%;top:${y}%"><div class="av">${p.alive&&p.run>=5?'<span class="flames" aria-hidden="true"><i></i><i></i><i></i></span>':''}${crownN(p.id)?crownSvg(crownN(p.id),'oncap'):''}${spr(p.s,p.c)}</div><div class="nm">${nm(p.n)}</div><div class="sc">${p.score}</div><div class="lives">${Array.from({length:p.maxL||5},(_,k)=>k).map(k=>`<i class="${k<p.lives?'':'gone'}"></i>`).join('')}</div><div class="pips" title="streak progress">${[0,1,2].map(k=>`<i class="${p.streak||k<p.run?'on':''}"></i>`).join('')}</div></div>`}).join('');
  const [sx,sy]=seatPos(g.turn,n),px=50+(sx-50)*.55,py=50+(sy-50)*.55;
  let bk='';if(g.bark){const bi=g.players.findIndex(p=>p.id===g.bark.id);if(bi>=0){const [bx,by]=seatPos(bi,n),up=by<50;bk=`<div class="bark ${up?'dn':''}" id="bark" style="left:${Math.min(78,Math.max(22,bx))}%;top:${up?by+14:by-9}%">${esc(g.bark.text)}</div>`}}
  let pop='';if(g.pop){const pi=g.players.findIndex(p=>p.id===g.pop.id);if(pi>=0){const [ox,oy]=seatPos(pi,n);pop=`<div class="ptpop" style="left:${ox}%;top:${oy-6}%">+${g.pop.pts}${g.pop.bonus&&g.pop.bonus.length?`<small>${g.pop.bonus.map(b=>b==='REDEMPTION'?'REDEMPTION ×1.25':b).join(' + ')}</small>`:''}</div>`}}
  const banner=g.phase==='topic'&&g.topic?`<div class="banner"><div><small>ROUND ${g.round} · ${esc(g.topic.course).toUpperCase()}${g.topic.ch?' · CH. '+esc(g.topic.ch):''}</small><b>${esc(g.topic.name).toUpperCase()}</b><small>two full rotations</small></div></div>`:g.paused?`<div class="banner"><div><b>PAUSED</b><small>The potato waits. Impatiently.</small></div></div>`:'';
  const ring=`<div class="ring">${seats}${pop}<div class="spud" id="spud" style="left:${px}%;top:${py}%">${SPUD()}</div>${bk}${banner}</div>`;
  const where=g.camp?g.camp.label:g.mode==='story'?`${WBY[g.world].name} · FLOOR ${g.floor+1}`:`VS${g.code?' · '+esc(g.code):''}${g.net?' · ONLINE':' · BOTS'}`;
  const top=`${watching?`<div class="watchbar">👀 SPECTATING · chat and emotes are open${LOBBY&&LOBBY.spec?'':' · you’re seated for the next match'}</div>`:''}<div class="top"><div class="topic"><small>TOPIC · ${g.topic?esc(g.topic.course)+(g.topic.ch?' · coursebook ch. '+esc(g.topic.ch):''):''}</small><b>${g.topic?esc(g.topic.name):''}</b></div>${g.client||g.net?'':`<button class="back" style="min-height:40px;margin:0" data-act="pause" id="pause">${g.paused?'▶ resume':'❙❙ pause'}</button>`}</div><div class="meta">${where} · ROUND ${g.round} · ${Math.max(0,g.turnsLeft)} turns left in this topic</div>`;
  let box='';
  if(g.phase==='over'&&g.mode!=='story')box=vsResultV(g);
  else if(g.phase==='over'){const r=g.result,w=WBY[g.world];box=`<div class="box"><h2 class="${r.won?'gold':''}">${r.won?'FLOOR CLEARED':`ELIMINATED · ${ordinal(r.place)} PLACE`}</h2><p class="code" style="margin:0">${r.score} PTS</p><p class="vt">${r.right} correct · ${r.acc}% accuracy · best run ${g.maxRun}${r.rank>=0?` · <span class="gold">#${r.rank+1} on this floor’s leaderboard</span>`:''}${ON?(r.grank>0?` · <span class="gold">#${r.grank} globally</span> on this floor`:r.grank===-1?' · outside the global top 25 for now':' · sent to the global board'):''}</p><div class="row"><button class="btn gold" data-act="floor" data-v="${g.floor}" id="again">PLAY AGAIN</button>${r.won&&g.floor<2?`<button class="btn" data-act="floor" data-v="${g.floor+1}" id="nextfloor">NEXT FLOOR</button>`:''}<button class="btn" data-act="world" data-v="${g.world}" id="quit">FLOOR SELECT</button></div></div>`}
  else if(g.phase==='dead')box=`<div class="box"><h2>YOU ARE OUT</h2><p class="vt">${pick(NARR.elimYou)}</p><div class="row"><button class="btn gold" data-act="spectate" id="spect">WATCH THE REST (FAST)</button>${g.mode==='story'?`<button class="btn" data-act="forfeit" id="forfeit">${g.camp?'GIVE UP':'GO HOME'}</button>`:''}</div></div>`;
  else if(q&&g.phase!=='topic'){
    const yours=isMe(act)&&g.phase==='ask'&&!g.spectate&&!(g.client&&g.sentTurn===g.turnId),rev=g.phase==='reveal';
    const opts=q.opts.map((o,i)=>{let c='opt';if(q.elim.includes(i)&&!(rev&&i===g.pickI))c+=' x';if(rev){if(i===g.pickI)c+=g.res==='ok'?' ok':' no';else if(q.solved&&o.ok)c+=' ok'}return `<button class="${c}" data-act="ans" data-v="${i}" id="opt${i}" ${yours&&!q.elim.includes(i)?'':'disabled'}><b>${i+1}</b><span>${esc(o.t)}</span></button>`}).join('');
    const who=g.phase==='ask'?(isMe(act)?'<b>YOUR TURN</b>':`<b>${esc(act.n)}</b> is answering…`):`<b>${esc(act.n)}</b> ${g.res==='ok'?'got it':g.pickI<0?'ran out of time':'missed'}`;
    const exp=rev&&q.solved&&q.e?`<div class="exp">${g.res!=='ok'?`Answer: ${esc(q.ans)}. `:''}${esc(q.e)}</div>`:'';
    const tleft=g.phase==='ask'?(g.client?g.cT:g.t):0;
    box=`<div class="box qbox"><div class="who"><span>${who}</span><span class="dim">${esc(q.kind)}${q.passes?` · passed ×${q.passes}`:''} · worth ${Math.round(100*Math.pow(.75,q.elim.length))}</span></div><div class="trow"><div class="timer"><i id="tbar" style="width:${Math.max(0,tleft/g.timer*100)}%"></i></div><span class="tnum ${g.fastT?'fast':''}" id="tnum">${Math.max(0,Math.ceil(tleft/1000))}s</span></div>${g.phase==='ask'&&g.fastT?`<div class="dim" style="font-size:14px;margin:-6px 0 10px;color:var(--cyan)">Streak active: ${g.timer/1000}-second clock</div>`:''}${g.phase==='ask'&&q.hypo&&!g.fastT?`<div class="dim" style="font-size:14px;margin:-6px 0 10px;color:var(--gold)">Hypothetical: 20-second clock</div>`:''}<p class="q">${q.q}</p><div class="opts">${opts}</div>${exp}${rev&&g.wait?`<div class="row" style="margin-top:12px"><button class="btn gold" data-act="next" id="next">NEXT ▸</button></div>`:''}</div>`;
  }else box=`<div class="box qbox"><p class="vt dim" style="margin:0">The potato is choosing a topic. It is taking this very seriously.</p></div>`;
  let nr=g.narr||{t:'',c:''};
  if(g.net&&g.phase==='reveal'&&isMe(act)){const me=act,P=(a)=>a[(g.turnId||0)%a.length];nr=g.res==='ok'?(me.streak&&me.run===3?{t:g.mode==='story'?P(NARR.streak):NARR_VSSTREAK,c:'cyan'}:{t:P(NARR.right),c:'good'}):g.res==='shield'?{t:P(NARR.shield),c:'cyan'}:!me.alive?{t:P(NARR.elimYou),c:'hot'}:{t:g.pickI<0?P(NARR.timeout):P(NARR.wrong),c:'hot'}}
  return top+ring+box+`<div class="narr ${nr.c}">${esc(nr.t)}</div>`;
}
function vsResultV(g){
  const r=g.result,me=g.players.find(isMe),st=r.st.map(id=>g.players.find(p=>p.id===id)).filter(Boolean),place=st.indexOf(me)+1;
  const host=!g.client;
  return `<div class="box"><h2 class="${place===1?'gold':''}">${!me?'MATCH OVER':place===1?'LAST ONE STANDING':`${ordinal(place)} PLACE`}</h2>${me?`<p class="code" style="margin:0">${me.score} PTS</p>`:'<p class="vt dim" style="margin:0">You watched this one. You’re in the next match if there’s a seat.</p>'}${g.myRank>=0?`<p class="gold" style="margin:4px 0">#${g.myRank+1} on your VS board${g.net&&ON?' · sent to the online VS Leaderboard':''}</p>`:''}
  <table class="lbt" style="margin:10px 0"><tr><td>#</td><td>PLAYER</td><td>POINTS</td></tr>${st.map((p,i)=>`<tr class="${isMe(p)?'me':''}"><td>${i+1}</td><td class="nm">${spr(p.s,p.c)}${nm(p.n)}${p.cpu?' (bot)':''}</td><td>${p.score}</td></tr>`).join('')}</table>
  <p class="dim" style="font-size:14px">Placement is survival order. Points decide the leaderboard.</p><div class="row">${host?'<button class="btn gold" data-act="tolobby" id="tolobby">BACK TO LOBBY</button>':'<span class="vt dim">Waiting for the host to reopen the lobby…</span>'}<button class="btn" data-act="board" data-v="vs" id="seeboard">VS LEADERBOARD</button></div></div>`;
}

/* ================= chat filter ================= */
// Words matched anywhere inside a word (fucking, bullshit, ...).
const BAD_ANY=['fuck','fuk','fck','shit','cunt','bitch','bastard','asshole','motherf','whore','slut','pussy','twat','wank','jizz','skank','nigg','nigga','faggot','fagot','tranny','wetback','beaner','raghead','towelhead','dumbass','jackass','smartass','badass','dipshit','bullshit'];
// Words matched only as whole words (plus common endings), so "class", "spicy", "cocktail", "Dickens" stay clean.
const BAD_WORD=['ass','dick','cock','fag','fags','prick','piss','spic','spick','chink','gook','kike','coon','dyke','paki','retard','retards','retarded','tits','titties','nazi'];
const LEET={a:'a4@',b:'b8',c:'c(',e:'e3',g:'g9',i:'i1!|',l:'l1|',o:'o0',s:'s5$',t:'t7+',u:'uv',k:'k'};
const lp=w=>[...w].map(ch=>`[${(LEET[ch]||ch).replace(/[\]\\^-]/g,'\\$&')}]+`).join('[\\s._*\\-]*');
const BAD_RX=new RegExp(`(${BAD_ANY.map(lp).join('|')})[a-z]*|(?<![a-z0-9])(${BAD_WORD.map(w=>[...w].map(ch=>`[${(LEET[ch]||ch).replace(/[\]\\^-]/g,'\\$&')}]+`).join('')).join('|')})(s|es|ed|er|ers|ing|head|heads|hole|holes|hat|hats|wipe)?(?![a-z0-9])`,'gi');
function censor(t){return String(t==null?'':t).replace(BAD_RX,m=>m[0]+'*'.repeat(Math.max(1,m.length-1)))}
const nm=x=>esc(censor(x));
const EMOTES=[
  {id:'wave',i:'👋',t:'hi!'},{id:'gg',i:'🤝',t:'GG'},{id:'hot',i:'🔥',t:'HOT POTATO!'},{id:'spud',i:'🥔',t:'spud.'},
  {id:'obj',i:'🙋',t:'OBJECTION!'},{id:'sus',i:'✅',t:'Sustained.'},{id:'over',i:'❌',t:'Overruled!'},{id:'think',i:'🤔',t:'hmm…'},
  {id:'lol',i:'😂',t:'lol'},{id:'gasp',i:'😱',t:'!!!'},{id:'clap',i:'👏',t:'nice!'},{id:'cry',i:'😭',t:'my outline…'}];
const EMO=Object.fromEntries(EMOTES.map(e=>[e.id,e]));
let lastChatT=-1e9;

/* ================= chat ================= */
function withChat(html,on,cls){
  if(!on){app.innerHTML=html;return}
  let m=document.getElementById('main'),c=document.getElementById('chatbox');
  if(!m||!c||c.dataset.cls!==cls){app.innerHTML=`<div id="main"></div><div class="chathd"><span>CHAT${LOBBY?' · '+esc(LOBBY.code):''}</span><span>${LOBBY&&LOBBY.net?`${Object.keys(LOBBY.specs||{}).length?Object.keys(LOBBY.specs).length+' watching · ':''}`:''}bots are labeled</span></div><div class="chat ${cls}" id="chatbox" data-cls="${cls}"><div class="log" id="chatlog"></div><div class="emotes" id="emotes" hidden></div><form id="chatf" autocomplete="off"><button type="button" class="emob" data-act="emotes" id="emob" aria-label="Emotes" title="Emotes">☺</button><input id="chatin" maxlength="140" placeholder="say something…" aria-label="Chat message"><button type="submit" id="chatsend">SEND</button></form></div>`;m=document.getElementById('main');drawChat()}
  m.innerHTML=html;
}
function chatLine(c){
  if(c.sys)return `<div class="sys">${esc(c.t)}</div>`;
  const adm=!c.bot&&isAdmin(c.uid);
  const who=`<b style="color:${adm?ADMINC:esc(c.c)}">${nm(c.n)}</b>${adm?'<span class="admintag">ADMIN</span>':''}${c.bot?'<span class="bot">BOT</span>':''}`;
  if(c.cr){const n=Math.min(+c.cr||0,c.uid&&Object.keys(CROWNS).length?crownN(c.uid):3);if(n>0)return `<div class="emo">${who} <span class="crownemo">${crownSvg(n)}</span><span class="dim">${esc(CROWNNAME[n].toUpperCase())}</span></div>`;return ''}
  if(c.e&&EMO[c.e])return `<div class="emo">${who} <span class="em">${EMO[c.e].i}</span><span class="dim">${esc(EMO[c.e].t)}</span></div>`;
  return `<div class="${adm?'adminmsg':''}">${who}: ${esc(censor(c.t))}</div>`}
function drawChat(){const l=document.getElementById('chatlog');if(!l)return;l.innerHTML=CHAT.map(chatLine).join('');l.scrollTop=l.scrollHeight}
function chatPush(c){CHAT.push(c);if(CHAT.length>150)CHAT.shift();const l=document.getElementById('chatlog');if(l){l.insertAdjacentHTML('beforeend',chatLine(c));l.scrollTop=l.scrollHeight}}
function chatSys(t){const c={sys:true,t};if(LOBBY&&LOBBY.net){if(LOBBY.host)ON.chat(LOBBY.code,{uid:ME,sys:true,t,n:'',c:''})}else chatPush(c)}
function chatSend(p,t,bot,extra){const c={uid:ME,n:p.n,c:p.c,t:censor(String(t).slice(0,140)),bot:!!bot,...(extra||{})};if(LOBBY&&LOBBY.net)ON.chat(LOBBY.code,c).catch(()=>{});else chatPush(c)}
function botReply(t){
  if(LOBBY&&LOBBY.net&&!LOBBY.host)return;
  const bots=G&&G.mode!=='story'&&V==='game'?G.players.filter(p=>p.cpu&&p.alive):LOBBY?Object.values(LOBBY.slots).filter(x=>x.bot):[];
  if(!bots.length||Math.random()>.55)return;
  const b=pick(bots),low=t.toLowerCase(),L=/\b(hi|hey|hello|yo|sup)\b/.test(low)?BOTCHAT.hi:/\bgg\b|good game/.test(low)?BOTCHAT.gg:/law|tort|contract|jurisdiction|object|rule|erie|venue/.test(low)?BOTCHAT.law:BOTCHAT.any;
  setTimeout(()=>chatSend(b,pick(L),true),700+Math.random()*1500);
}
function chatOK(){const n=performance.now();if(n-lastChatT<700)return false;lastChatT=n;return true}
document.addEventListener('submit',e=>{if(e.target.id!=='chatf')return;e.preventDefault();const i=document.getElementById('chatin'),t=i.value.trim().slice(0,140);if(!t||!chatOK())return;i.value='';chatSend(meP(),t,false);if(!(LOBBY&&LOBBY.net))botReply(t)});
function emotePanel(){const el=document.getElementById('emotes');if(!el)return;const cn=crownN(ME);
  el.innerHTML=EMOTES.map(e=>`<button type="button" class="emo-b" data-act="emote" data-v="${e.id}" id="emo-${e.id}" title="${esc(e.t)}"><span>${e.i}</span><small>${esc(e.t)}</small></button>`).join('')+
  `<button type="button" class="emo-b crownb" data-act="emote" data-v="crown" id="emo-crown" ${cn?'':'disabled'} title="${cn?'Show off your crown':'Hold #1 on a global leaderboard to unlock'}"><span>${cn?crownSvg(cn):crownSvg(1)}</span><small>${cn?'MY CROWN':'crown holders'}</small></button>`}
function sendEmote(id){if(!chatOK())return;const el=document.getElementById('emotes');if(el)el.hidden=true;
  if(id==='crown'){const n=crownN(ME);if(!n)return;chatSend(meP(),'',false,{cr:n});return}
  if(!EMO[id])return;chatSend(meP(),'',false,{e:id})}

/* ================= VS: lobbies (bots offline, or online via Firebase) ================= */
function newCode(){const a='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';return 'SPUD-'+Array.from({length:4},()=>a[Math.floor(Math.random()*a.length)]).join('')}
let PUBS=null,pubOff=null;
const PUBFRESH=6*3600*1000;
function pubListV(){
  if(PUBS===null)return '<p class="dim" style="font-size:15px">Looking for lobbies…</p>';
  const L=PUBS.filter(p=>p&&p.code&&(!p.ts||ON.now()-p.ts<PUBFRESH));
  if(!L.length)return '<p class="dim" style="font-size:15px">No public lobbies right now. Make one!</p>';
  return `<div class="publist">${L.map(p=>{const full=p.n>=p.max,play=p.st==='playing';return `<div class="pubrow"><div class="pn">${crownN(p.host)?crownSvg(crownN(p.host),'inline'):''}<b>${nm(p.hn)}</b><small>${esc(p.code)}</small></div><div class="pc">${p.n}/${p.max}</div><div class="ps ${play?'bad':'good'}">${play?'IN GAME':'WAITING'}</div><button class="btn sm" data-act="joinpub" data-v="${esc(p.code)}" id="jp-${esc(p.code)}" ${full&&!play?'disabled':''}>${play?'WATCH':full?'FULL':'JOIN'}</button></div>`}).join('')}</div>`;
}
function drawPubs(){const el=document.getElementById('publist');if(el)el.innerHTML=pubListV()}
function vsV(){
  const on=onState==='on';
  return `<button class="back" data-act="home" id="back">◂ back</button><div class="box"><h2>VS MODE</h2><p class="vt">Up to 8 players. One potato. Civil Procedure only, for now.</p>
  <h3 style="margin-top:14px">ONLINE ${onlineBadge()}</h3>
  ${on?`<div class="row" style="margin:10px 0"><button class="btn gold" data-act="mklobby" data-v="pub" id="mkpub">CREATE PUBLIC LOBBY</button><button class="btn" data-act="mklobby" data-v="net" id="mknet">CREATE PRIVATE LOBBY</button></div>
  <h3 style="margin-top:16px">PUBLIC LOBBIES</h3><div id="publist">${pubListV()}</div>
  <h3 style="margin-top:16px">JOIN WITH A CODE</h3>
  <form id="joinf" class="row" style="margin:8px 0" autocomplete="off"><input type="text" id="joincode" maxlength="9" placeholder="SPUD-XXXX" style="max-width:220px" aria-label="Lobby code"><button class="btn" type="submit" id="join">JOIN</button></form>${JOINERR?`<p class="bad" style="margin:4px 0">${esc(JOINERR)}</p>`:''}`
  :`<p class="dim" style="font-size:15px;margin:8px 0">${onState==='error'?'Couldn’t reach the online service: '+esc(onErr):onState==='connecting'?'Connecting…':'Online play isn’t set up for this copy of the game. See SETUP.md to turn it on.'}</p>`}
  <h3 style="margin-top:18px">PRACTICE</h3><div class="row" style="margin:10px 0"><button class="btn" data-act="mklobby" data-v="bots" id="mklobby">LOBBY WITH BOTS (OFFLINE)</button><button class="btn" data-act="board" data-v="vs" id="vsboard">VS LEADERBOARD</button></div>
  <p class="dim" style="font-size:14px;margin:0">Offline bot matches count toward your personal VS board only. Online matches count toward the global VS Leaderboard.</p></div>`;
}
function lobbySlotsArr(){return Object.entries(LOBBY.slots).map(([id,x])=>({id,...x})).sort((a,b)=>(a.order||0)-(b.order||0))}
const DEFCFG=()=>({lives:3,time:S.settings.time,max:8,pub:false});
const lcfg=()=>LOBBY?{...DEFCFG(),...(LOBBY.net?(LOBBY.meta&&LOBBY.meta.cfg)||{}:LOBBY.cfg||{})}:DEFCFG();
async function mkLobby(kind){
  if(kind==='net'||kind==='pub'){
    if(!ON)return;let code,ok=false;for(let k=0;k<5&&!ok;k++){code=newCode();ok=await ON.createRoom(code,{...meP(),id:undefined,bot:false,ready:true})}
    if(!ok){JOINERR='Couldn’t create a lobby. Try again.';render();return}
    const cfg={...DEFCFG(),pub:kind==='pub'};await ON.setMeta(code,{cfg});
    LOBBY={code,net:true,host:true,slots:{},specs:{},meta:{host:ME,status:'lobby',cfg}};CHAT=[];watchRoom();syncPub();
    chatSys(kind==='pub'?`Public lobby ${code} created. It’s listed in VS MODE for anyone to join.`:`Private lobby ${code} created. Share the code with your classmates.`);V='lobby';render();return;
  }
  LOBBY={code:newCode(),net:false,host:true,cfg:DEFCFG(),slots:{[ME]:{n:meP().n,s:meP().s,c:meP().c,order:0,ready:true}}};CHAT=[];chatSys(`Practice lobby ${LOBBY.code} created. Add some bots.`);V='lobby';render();
}
async function joinLobby(code){
  JOINERR='';code=code.trim().toUpperCase();if(!/^SPUD-[A-Z0-9]{4}$/.test(code)){JOINERR='Codes look like SPUD-AB12.';render();return}if(!prof().name){go('profile');return}
  const r=await ON.joinRoom(code,{n:meP().n,s:meP().s,c:meP().c,bot:false});
  if(r.err){JOINERR=r.err;if(V!=='vs')go('vs');else render();return}
  LOBBY={code,net:true,host:false,spec:!!r.spec,slots:{},specs:{}};CHAT=[];V='lobby';watchRoom();if(V==='lobby')render();
  chatSend(meP(),'',false,{e:'wave'});
}
let lastPubSig='';
function syncPub(){
  const L=LOBBY;if(!L||!L.net||!L.host||!ON)return;const cfg=lcfg();
  if(!cfg.pub){if(lastPubSig!=='off'){lastPubSig='off';ON.setPub(L.code,null).catch(()=>{})}return}
  const e={hn:censor(prof().name||'HOST'),n:Object.keys(L.slots||{}).length,max:cfg.max,st:L.meta&&L.meta.status==='playing'?'playing':'lobby',w:Object.keys(L.specs||{}).length};
  const sig=JSON.stringify(e);if(sig===lastPubSig)return;lastPubSig=sig;ON.setPub(L.code,e).catch(()=>{});
}
function enterClientGame(L){G={client:true,net:true,mode:'vs',code:L.code,players:[],q:null,phase:'topic',turn:0,round:0,turnsLeft:0,timer:15000,cT:0,narr:{t:'',c:''}};V='game';startLoop();if(L.lastSt)applyState(L.lastSt);else render()}
function watchRoom(){
  if(unwatch)unwatch();const L=LOBBY;lastPubSig='';
  unwatch=ON.watch(L.code,{
    meta:m=>{if(LOBBY!==L)return;if(!m){leaveLobby(true);return}const was=L.meta&&L.meta.status;L.meta=m;
      if(L.host){syncPub();if(V==='lobby')render();return}
      if(m.status==='playing'&&V!=='game')enterClientGame(L);
      else if(m.status==='lobby'&&(V==='game'||was==='playing')){stopLoop();G=null;L.lastSt=null;V='lobby';render();if(L.slots[ME]&&L.slots[ME].ready)ON.patchSlot(L.code,ME,{ready:false}).catch(()=>{})}
      else if(V==='lobby')render()},
    slots:s=>{if(LOBBY!==L)return;L.slots=s;if(!L.host&&!L.spec&&!s[ME]&&L.meta){leaveLobby(true,'You were removed from the lobby.');return}if(L.spec&&s[ME])L.spec=false;
      if(G&&G.net&&!G.client){G.players.forEach(p=>{if(p.remote&&!s[p.id])p.gone=true})}if(L.host)syncPub();if(V==='lobby')render()},
    specs:s=>{if(LOBBY!==L)return;L.specs=s;if(L.host)syncPub();if(V==='lobby')render()},
    chat:c=>{if(LOBBY!==L)return;chatPush(c);if(L.host&&!c.bot&&!c.sys&&!c.e&&!c.cr&&c.uid!==ME)botReply(c.t)},
    state:L.host?null:st=>{if(LOBBY!==L||!st)return;L.lastSt=st;applyState(st)},
    inputs:L.host?(inp=>{if(G&&G.net)G.inputs=inp}):null
  });
}
async function leaveLobby(hostGone,msg){
  if(unwatch){unwatch();unwatch=null}stopLoop();
  const L=LOBBY;LOBBY=null;G=null;CHAT=[];
  if(L&&L.net&&!hostGone)await ON.leaveRoom(L.code,L.host).catch(()=>{});
  JOINERR=msg||(hostGone?'The host closed that lobby.':'');go('vs');
}
function addBot(d){
  const sl=lobbySlotsArr();if(sl.length>=lcfg().max)return;const used=sl.map(x=>x.id),free=BOTPOOL.filter(k=>!used.includes('bot_'+k));if(!free.length)return;
  const k=pick(free),c=CPU[k],slot={n:c.n,s:c.s,c:c.c,bot:true,diff:d,order:Date.now()};
  if(LOBBY.net)ON.setSlot(LOBBY.code,'bot_'+k,slot);else{LOBBY.slots['bot_'+k]=slot;render()}
  chatSys(`${c.n} (bot, ${d}) joined.`);if(Math.random()<.7)setTimeout(()=>chatSend({n:c.n,c:c.c},pick(BOTCHAT.hi),true),500);
}
function rmBot(id){const x=LOBBY.slots[id];if(LOBBY.net)ON.setSlot(LOBBY.code,id,null);else{delete LOBBY.slots[id];render()}if(x)chatSys(`${x.n} (bot) was removed.`)}
function lobbyV(){
  const sl=lobbySlotsArr(),cfg=lcfg(),empty=Math.max(0,cfg.max-sl.length),host=LOBBY.host,net=LOBBY.net,spec=!!LOBBY.spec,playing=LOBBY.meta&&LOBBY.meta.status==='playing';
  const isHostId=id=>net?(LOBBY.meta&&LOBBY.meta.host===id):id===ME;
  const humans=sl.filter(x=>!x.bot&&!isHostId(x.id)),rdy=humans.filter(x=>x.ready).length;
  const tag=x=>x.id===ME?(host?'host · you':'you'):x.bot?`bot · ${x.diff}`:(isHostId(x.id)?'host':'player');
  const rtag=x=>x.bot||isHostId(x.id)?'':x.ready?'<span class="rdy on">READY</span>':'<span class="rdy">not ready</span>';
  const nspec=Object.keys(LOBBY.specs||{}).length;
  const chip=(k,v,label,dis)=>`<button class="chip" aria-pressed="${cfg[k]===v}" data-act="lcfg" data-k="${k}" data-v="${v}" id="cfg-${k}-${v}" ${dis?'disabled':''}>${label}</button>`;
  const rules=`Civil Procedure topics · ${cfg.lives} li${cfg.lives>1?'ves':'fe'} each · ${cfg.time}-second timer (${cfg.time-5}s on a streak; hypotheticals 20s) · up to ${cfg.max} players`;
  const settings=host?`<h3>LOBBY SETTINGS</h3>
    <div class="set"><div class="lbl">LIVES PER PLAYER</div><div class="chips">${[1,2,3,4,5].map(n=>chip('lives',n,n+(n===3?' (default)':''))).join('')}</div></div>
    <div class="set"><div class="lbl">ANSWER TIMER</div><div class="chips">${[10,15,20].map(n=>chip('time',n,n+' sec')).join('')}</div></div>
    <div class="set"><div class="lbl">MAX PLAYERS</div><div class="chips">${[2,3,4,5,6,7,8].map(n=>chip('max',n,n,n<sl.length)).join('')}</div></div>
    ${net?`<div class="set"><div class="lbl">VISIBILITY</div><div class="chips">${chip('pub',true,'Public (listed)')}${chip('pub',false,'Private (code only)')}</div></div>`:''}`
    :`<h3>MATCH RULES</h3><p class="dim" style="font-size:15px;margin:6px 0 14px">${rules}. The host sets these.</p>`;
  const mine=LOBBY.slots[ME];
  const readyBtn=!host&&!spec&&mine?`<button class="btn ${mine.ready?'':'gold'}" data-act="ready" id="readyb">${mine.ready?'✓ READY (tap to undo)':'READY UP'}</button>`:'';
  const seatBtn=spec&&!playing&&sl.length<cfg.max?`<button class="btn gold" data-act="takeseat" id="takeseat">TAKE A SEAT</button>`:'';
  const status=playing?'<p class="vt gold">A match is in progress. You’re watching.</p>':spec?`<p class="vt dim">You’re spectating${sl.length>=cfg.max?'. All seats are full.':'.'}</p>`:'';
  return `<button class="back" data-act="leavelobby" id="back">◂ leave lobby</button><div class="vsgrid"><div class="box"><div class="dim" style="font-size:14px">${net?(cfg.pub?'PUBLIC LOBBY · CODE':'PRIVATE LOBBY · CODE'):'PRACTICE LOBBY (OFFLINE)'}</div><div class="code">${esc(LOBBY.code)}</div><p class="dim" style="font-size:14px;margin:2px 0 12px">${net?(cfg.pub?'Listed under Public Lobbies in VS MODE. Anyone can join or watch.':'Classmates join from VS MODE with this code.'):'Bots only. Create an online lobby to play with people.'} ${sl.length}/${cfg.max} players${nspec?` · ${nspec} watching`:''}.</p>
  <div class="slots">${sl.map(x=>`<div class="slot ${x.ready&&!x.bot?'isready':''}">${withCrown(x.id,spr(x.s,x.c))}<div class="sn">${nm(x.n)}<small>${tag(x)} ${rtag(x)}</small></div>${host&&x.id!==ME?`<button class="x" data-act="${x.bot?'rmbot':'kick'}" data-v="${esc(x.id)}" id="rm-${esc(x.id)}" aria-label="Remove ${nm(x.n)}">✕</button>`:''}</div>`).join('')}${empty?`<div class="slot empty">${empty} open seat${empty>1?'s':''}${net?': waiting for players…':''}</div>`:''}</div></div>
  <div class="box">${status}${host?`<h3>ADD A BOT</h3><div class="diffs" style="margin:10px 0 14px">${Object.keys(DIFF).map(d=>`<button class="chip" data-act="addbot" data-v="${d}" id="bot-${d}" ${sl.length>=cfg.max?'disabled':''}>+ ${d}</button>`).join('')}</div>`:''}
  ${settings}
  ${host&&net?'<div class="row" style="margin:4px 0 10px"><button class="btn sm" data-act="ginvite" id="ginvite">📣 POST INVITE TO CAMPUS CHAT</button></div>':''}
  ${host?`${net&&humans.length?`<p class="${rdy===humans.length?'good':'dim'}" style="font-size:15px;margin:10px 0 6px">${rdy}/${humans.length} player${humans.length>1?'s':''} ready</p>`:''}<button class="btn gold" data-act="startvs" id="startvs" ${sl.length<2?'disabled':''}>START MATCH</button>${sl.length<2?'<p class="dim" style="font-size:14px">Add a bot or wait for a classmate.</p>':''}`
   :`<div class="row" style="margin-top:12px">${readyBtn}${seatBtn}</div>${!playing&&!spec?`<p class="vt dim">${mine&&mine.ready?'The host can see you’re ready.':'Ready up so the host knows to start.'}</p>`:''}`}</div></div>`;
}
function startVS(){
  const sl=lobbySlotsArr(),cfg=lcfg();
  const ps=sl.map(x=>mkPlayer({id:x.id,n:x.n,s:x.s,c:x.c,lives:cfg.lives,cpu:x.bot?{...CPU[x.id.replace('bot_','')],acc:DIFF[x.diff]||.66}:null,remote:!x.bot&&x.id!==ME}));
  G=newG({mode:'vs',players:ps,code:LOBBY.code,net:LOBBY.net,time:cfg.time,timer:cfg.time*1000});
  if(LOBBY.net){LOBBY.meta={...(LOBBY.meta||{}),status:'playing'};ON.setMeta(LOBBY.code,{status:'playing'});syncPub()}
  chatSys('Match started. The potato is warming up.');V='game';newTopic();render();startLoop();
}
/* ---------- online: host publishes, clients mirror ---------- */
let lastPub=0;
function publish(){
  if(!G||!G.net||G.client||!ON||!LOBBY)return;
  const q=G.q,rev=G.phase==='reveal'||G.phase==='over';
  const st={turnId:G.turnId,phase:G.phase==='dead'?'reveal':G.phase,turn:G.turn,round:G.round,turnsLeft:G.turnsLeft,timer:G.timer,fastT:!!G.fastT,deadline:G.phase==='ask'?ON.now()+G.t:0,
    topic:G.topic?{name:G.topic.name,course:G.topic.course,ch:G.topic.ch||''}:null,
    players:G.players.map(p=>({id:p.id,n:p.n,s:p.s,c:p.c,lives:p.lives,maxL:p.maxL,run:p.run,streak:p.streak,alive:p.alive,score:p.score,bot:!!p.cpu})),
    q:q?{kind:q.kind,hypo:!!q.hypo,q:q.q,opts:q.opts.map(o=>o.t),elim:q.elim,passes:q.passes,solved:!!q.solved,ok:rev&&(q.solved||G.res==='ok')?q.opts.findIndex(o=>o.ok):-1,ans:q.solved?q.ans:'',e:q.solved?q.e:''}:null,
    pickI:G.pickI==null?null:G.pickI,res:G.res||null,narr:G.narr,pop:G.pop||null,bark:G.bark?{id:G.bark.id,text:G.bark.text}:null,
    result:G.phase==='over'?{st:G.result.st}:null};
  ON.publish(LOBBY.code,st).catch(()=>{});lastPub=performance.now();
}
function applyState(st){
  if(!G||!G.client)return;
  const prevOver=G.phase==='over';
  Object.assign(G,{turnId:st.turnId,phase:st.phase,turn:st.turn,round:st.round,turnsLeft:st.turnsLeft,timer:st.timer,fastT:st.fastT,deadline:st.deadline,topic:st.topic,narr:st.narr||{t:'',c:''},pop:st.pop,bark:st.bark,pickI:st.pickI,res:st.res,
    players:(st.players||[]).map(p=>({...p,cpu:p.bot?{}:null})),
    q:st.q?{kind:st.q.kind,hypo:!!st.q.hypo,q:st.q.q,opts:(st.q.opts||[]).map((t,i)=>({t,ok:i===st.q.ok})),elim:st.q.elim||[],passes:st.q.passes,solved:st.q.solved,ans:st.q.ans,e:st.q.e}:null,
    result:st.result});
  G.cT=G.deadline?G.deadline-ON.now():0;
  if(st.phase==='over'&&!prevOver&&!G.recorded){G.recorded=true;const me=G.players.find(isMe);if(me){const place=st.result.st.indexOf(ME)+1;G.maxRun=0;recordVS(me,place,G.players.length,true)}}
  if(st.res&&st.res!=='ok'&&G.players[st.turn]&&isMe(G.players[st.turn])&&G.lastShake!==st.turnId){G.lastShake=st.turnId;shake()}
  render();
}
function clientTick(){if(G.phase==='ask'&&G.deadline){G.cT=G.deadline-ON.now();updTimer(G.cT,G.timer)}}
function clientAnswer(i){if(!G||!G.client||G.phase!=='ask'||G.sentTurn===G.turnId)return;const act=G.players[G.turn];if(!isMe(act))return;G.sentTurn=G.turnId;ON.input(LOBBY.code,{turn:G.turnId,choice:i});render()}

/* ================= leaderboards ================= */
const boardKey=()=>BOARD==='vs'?'vs':`${BW}-${BF+1}`;
const onlineBoard=k=>ON&&(k==='vs'||/^(cp|torts|k)-[123]$/.test(k));
let boardOff=null,boardOffK='';
function stopBoardWatch(){if(boardOff){boardOff();boardOff=null;boardOffK=''}}
function loadBoard(){const k=boardKey();if(!onlineBoard(k)){stopBoardWatch();return}loadCrowns();if(boardOffK===k)return;stopBoardWatch();
  if(!BOARDDATA[k]||BOARDDATA[k].err)BOARDDATA[k]={loading:true};boardOffK=k;
  boardOff=ON.watchTop(k,25,rows=>{const was=BOARDDATA[k]&&BOARDDATA[k].rows;BOARDDATA[k]=rows?{rows,live:true}:{err:true};if(rows&&was&&rows[0]&&(!was[0]||was[0].uid!==rows[0].uid))loadCrowns();if(V==='boards'&&boardKey()===k)render()});if(V==='boards')render()}
function lbTable(list,mine){if(!list||!list.length)return '<p class="vt dim">No scores yet. The potato is waiting for greatness. Or adequacy.</p>';
  return `<table class="lbt"><tr><td>#</td><td>PLAYER</td><td>RESULT</td><td>POINTS</td></tr>${list.map((e,i)=>`<tr class="${(mine?e.uid===ME:e.name===prof().name)?'me':''}"><td>${i+1}</td><td class="nm">${mine&&e.uid&&crownN(e.uid)?crownSvg(crownN(e.uid),'inline'):''}${spr(ICONS[e.icon]||'potato',COLORS[e.color]||'#fff')}${nm(e.name)}</td><td class="dim" style="font-size:14px">${e.won?'won':e.place?ordinal(e.place):'—'}${e.players?` of ${e.players}`:''}${e.date?' · '+esc(e.date):''}</td><td>${Number(e.score)||0}</td></tr>`).join('')}</table>`}
function boardsV(){
  const k=boardKey(),on=onlineBoard(k),d=BOARDDATA[k];
  const tab=(v,l)=>`<button class="chip" data-act="board" data-v="${v}" id="tab-${v}" aria-pressed="${BOARD===v}">${l}</button>`;
  const head=BOARD==='story'?`<div class="tabs">${WORLDS.map(w=>`<button class="chip" data-act="bworld" data-v="${w.id}" id="bw-${w.id}" aria-pressed="${BW===w.id}">${esc(w.course)}</button>`).join('')}</div><div class="tabs">${[0,1,2].map(i=>`<button class="chip" data-act="bfloor" data-v="${i}" id="bf-${i}" aria-pressed="${BF===i}">FLOOR ${i+1}: ${WBY[BW].floors[i].name}</button>`).join('')}</div>`:'';
  const myBest=BOARD==='story'?S.best[BW+'-'+BF]:null,rows=on&&d&&d.rows||[],myRow=rows.findIndex(e=>e.uid===ME);
  const cmp=on&&d&&d.rows?(myRow>=0?`<p class="gold" style="font-size:15px;margin:0 0 8px">You’re #${myRow+1} of the top ${rows.length} with ${rows[myRow].score} pts${myRow>0?` · ${rows[0].score-rows[myRow].score} pts behind #1`:' · you hold the crown spot'}</p>`:myBest?`<p class="dim" style="font-size:15px;margin:0 0 8px">Your best here: ${myBest} pts${rows.length>=25&&myBest<rows[rows.length-1].score?` · ${rows[rows.length-1].score-myBest+1} more to crack the top 25`:''}</p>`:''):'';
  const scope=on?`<p class="good" style="font-size:14px;margin:0 0 8px">● GLOBAL · live, top 25 · updates as classmates play</p>${cmp}`:`<p class="dim" style="font-size:14px;margin:0 0 8px">○ LOCAL · this browser${onState!=='on'?' (online not connected)':''}</p>`;
  const body=on?(!d||d.loading?'<p class="vt dim">Fetching scores…</p>':d.err?'<p class="bad">Couldn’t load the online board.</p>':lbTable(d.rows,true)):lbTable(S.lb[k],false);
  return `<button class="back" data-act="home" id="back">◂ back</button><div class="box"><h2>LEADERBOARDS</h2><div class="tabs">${tab('story','STORY LEADERBOARD')}${tab('vs','VS LEADERBOARD')}</div>${head}${scope}${body}
  <details style="margin-top:16px"><summary class="gold" style="cursor:pointer">HOW SCORING WORKS</summary><table style="margin-top:8px"><tr><td>Correct answer</td><td>100</td></tr><tr><td>Each wrong pick before you (question was passed)</td><td>×0.75</td></tr><tr><td>Redemption: correct right after losing a life</td><td>×1.25</td></tr><tr><td>Streak: your 3rd and 4th correct answers in a row (from the 3rd, your timer drops by 5 seconds. In Story Mode only, your own streak also shields you from losing a life on a miss)</td><td>×1.25</td></tr><tr><td>Hot streak: your 5th correct answer in a row and every one after it, until a miss</td><td>×1.5</td></tr></table><p class="dim" style="font-size:14px">Bonuses multiply. Timeouts pass the question without lowering its value.</p></details></div>`;
}
function recordsV(){
  const acc=S.answered?Math.round(S.right/S.answered*100):0;
  return `<button class="back" data-act="home" id="back">◂ back</button><div class="box"><h2>RECORDS</h2><p class="vt dim" style="margin-top:-4px">This browser only.</p>
  <table><tr><td>Games played</td><td>${S.played}</td></tr><tr><td>Questions answered</td><td>${S.answered}</td></tr><tr><td>Accuracy</td><td>${acc}%</td></tr><tr><td>Best correct run</td><td>${S.bestRun}</td></tr>${WORLDS.map(w=>w.floors.map((f,i)=>`<tr><td>${esc(w.course)} ${i+1}: ${f.name}</td><td>${S.wins[w.id+'-'+i]||0} wins${S.best[w.id+'-'+i]?` · best ${S.best[w.id+'-'+i]}`:''}</td></tr>`).join('')).join('')}</table></div>`;
}
function settingsV(){
  const st=S.settings,ch=(k,v,l)=>`<button class="chip" data-act="set" data-k="${k}" data-v="${v}" id="set-${k}-${v}" aria-pressed="${st[k]==v}">${l}</button>`;
  return `<button class="back" data-act="home" id="back">◂ back</button><div class="box"><h2>SETTINGS</h2>
  <div class="set"><div class="lbl">ANSWER TIMER (players on a streak get 5 seconds less; hypotheticals always start at 20 seconds)</div><div class="chips">${ch('time',10,'10 sec')}${ch('time',15,'15 sec')}${ch('time',20,'20 sec')}</div></div>
  <div class="set"><div class="lbl">CPU AND GAME PACE (offline games)</div><div class="chips">${ch('speed',.75,'chill')}${ch('speed',1,'normal')}${ch('speed',1.6,'zoom')}</div></div>
  <div class="set"><div class="lbl">TEXT SPEED</div><div class="chips">${ch('text',0,'slow')}${ch('text',1,'normal')}${ch('text',2,'instant')}</div></div>
  <div class="set"><div class="lbl">ONLINE</div><p style="margin:0">${onlineBadge()}${onState==='off'?'<br><span class="dim" style="font-size:14px">Add your Firebase settings to config.js to turn on online play (see SETUP.md).</span>':''}</p></div>
  <div class="set"><div class="lbl">DANGER ZONE</div><div><button class="btn" data-act="reset" id="reset" style="border-color:var(--bad);color:var(--bad)">${confirmReset?'TAP AGAIN TO ERASE EVERYTHING':'RESET PROGRESS'}</button></div></div></div>`;
}

/* ================= input ================= */
function act(a,v,el){
  if(a==='camp'){campAct(v,el);return}
  if(a==='menu'){if((v==='story'||v==='vs'||v==='camp')&&!prof().name){go('profile');return}if(v==='story'){G=null;stopLoop();go('worlds')}else if(v==='camp'){G=null;stopLoop();campEnter()}else{if(v==='boards')loadBoard();go(v)}}
  else if(a==='home'){if(LOBBY&&V==='boards'){if(LOBBY.host){act('tolobby');return}V='lobby';render();return}if(LOBBY){leaveLobby();return}stopLoop();G=null;flavI=(flavI+1)%FLAV.length;go('title')}
  else if(a==='icon'){if(!iconUnlocked(+v))return;S.profile.icon=+v;keepName();render()}
  else if(a==='achequip'){const A=ACHBY[v];if(!A||!hasAch(A.id))return;keepName();S.profile.icon=ICONS.indexOf(A.icon);save();const pop=document.getElementById('achpop');if(pop){const b=pop.querySelector('#achequip');if(b){b.textContent='EQUIPPED';b.disabled=true}}if(V==='profile'||V==='title')render()}
  else if(a==='achclose'){achClose()}
  else if(a==='color'){S.profile.color=+v;keepName();render()}
  else if(a==='logout'){if(!ON)return;ACCTBUSY=true;ON.logout().then(()=>{S.reg=null;S.profile.name='';save();location.reload()}).catch(()=>{ACCTBUSY=false})}
  else if(a==='claimfix'){if(!ON||!ON.claimName)return;ACCTMSG='Finishing…';render();ON.claimName().then(()=>{if(ON.regName===ADMINNAME)ADMINUID=ME;ACCTMSG='Done. You’re the admin.';render()}).catch(e=>{ACCTMSG=e.message||String(e);render()})}
  else if(a==='gdel'){if(!isAdmin(ME)||!ON||!v)return;ON.gchatDel(v).catch(()=>{})}
  else if(a==='saveprof'){keepName();S.profile.name=censor(S.profile.name);
    if(ON&&!S.reg&&S.profile.name){const n=S.profile.name;ON.nameOwner(n).then(o=>{if(o&&o!==ME){NAMESTAT={n,st:'taken'};S.profile.name='';save();render()}}).catch(()=>{})}if(!S.profile.name)S.profile.name='SPUD';save();go('title')}
  else if(a==='world'){WSEL=v;stopLoop();G=null;go('floors')}
  else if(a==='floor')startStory(WSEL,+v);
  else if(a==='dlg')dlgAdv();
  else if(a==='skipdlg'){if(dlg){const t=dlg.then;dlg=null;t()}}
  else if(a==='ans'){if(!G)return;if(G.client)clientAnswer(+v);else if(isMe(G.players[G.turn]))answer(+v)}
  else if(a==='next'){if(G&&G.phase==='reveal'){G.wait=false;advance()}}
  else if(a==='pause'){if(G&&!G.net&&!G.client){G.paused=!G.paused;render()}}
  else if(a==='spectate'){G.spectate=true;G.phase='reveal';G.wait=false;G.phaseT=0;render()}
  else if(a==='forfeit'){endGame()}
  else if(a==='mklobby')mkLobby(v);
  else if(a==='addbot')addBot(v);
  else if(a==='rmbot')rmBot(v);
  else if(a==='startvs')startVS();
  else if(a==='tolobby'){stopLoop();G=null;if(LOBBY&&LOBBY.net){LOBBY.meta={...(LOBBY.meta||{}),status:'lobby'};ON.setMeta(LOBBY.code,{status:'lobby'});ON.publish(LOBBY.code,null);syncPub()}V='lobby';render()}
  else if(a==='lcfg'){if(!LOBBY||!LOBBY.host)return;const k=el.dataset.k,val=k==='pub'?v==='true':+v,cfg={...lcfg(),[k]:val};
    if(LOBBY.net){LOBBY.meta={...(LOBBY.meta||{}),cfg};ON.setMeta(LOBBY.code,{cfg});syncPub();if(k==='pub')chatSys(val?'The host made this lobby public.':'The host made this lobby private.');else if(k==='lives')chatSys(`Lives set to ${val}.`)}else LOBBY.cfg=cfg;render()}
  else if(a==='ready'){if(!LOBBY||!LOBBY.net)return;const m=LOBBY.slots[ME];if(!m)return;ON.patchSlot(LOBBY.code,ME,{ready:!m.ready}).catch(()=>{})}
  else if(a==='takeseat'){if(!LOBBY||!LOBBY.spec)return;ON.takeSeat(LOBBY.code,{n:meP().n,s:meP().s,c:meP().c,bot:false}).then(()=>{LOBBY.spec=false;render()}).catch(()=>{})}
  else if(a==='kick'){if(!LOBBY||!LOBBY.host)return;const x=LOBBY.slots[v];ON.setSlot(LOBBY.code,v,null);if(x)chatSys(`${censor(x.n)} was removed by the host.`)}
  else if(a==='joinpub'){joinLobby(v)}
  else if(a==='emotes'){const el2=document.getElementById('emotes');if(el2){el2.hidden=!el2.hidden;if(!el2.hidden)emotePanel()}}
  else if(a==='emote')sendEmote(v);
  else if(a==='gemotes'){const el2=GNODE&&GNODE.querySelector('#gemotes');if(el2){el2.hidden=!el2.hidden;if(!el2.hidden)gEmotePanel()}}
  else if(a==='gemote'){const el2=GNODE&&GNODE.querySelector('#gemotes');if(el2)el2.hidden=true;if(!gOK('emo:'+v+':'+performance.now()))return;if(v==='crown'){const n=crownN(ME);if(n)gSend({cr:n})}else if(EMO[v])gSend({e:v})}
  else if(a==='gmute'){if(!v||v===ME||isAdmin(v))return;const now=performance.now();if(gPend.id!==v||now-gPend.t>4000){gPend={id:v,t:now};const m=GNODE&&GNODE.querySelector('#gmuted');if(m)m.textContent=`tap ${censor(el.textContent)} again to mute`;return}gPend={};const m=muted();if(!m.includes(v))m.push(v);save();gDraw()}
  else if(a==='gunmute'){S.muted=[];save();gDraw()}
  else if(a==='ghost'){if(!prof().name){go('profile');return}mkLobby('pub').then(()=>{if(LOBBY&&LOBBY.net){postInvite();chatSys('Invite posted to campus chat.')}})}
  else if(a==='ginvite'){if(postInvite())chatSys('Invite posted to campus chat.');else chatSys('You can post an invite every 30 seconds.')}
  else if(a==='leavelobby')leaveLobby();
  else if(a==='board'){BOARD=v;if(!(G&&(G.net||G.client))){stopLoop();if(G&&G.mode!=='story')G=null}go('boards');loadBoard()}
  else if(a==='bworld'){BW=v;render();loadBoard()}
  else if(a==='bfloor'){BF=+v;render();loadBoard()}
  else if(a==='set'){S.settings[el.dataset.k]=+v;save();render()}
  else if(a==='reset'){if(confirmReset){const p=S.profile;S=DEF();S.profile=p;save();confirmReset=false;go('title')}else{confirmReset=true;render()}}
}
function keepName(){if(S.reg){S.profile.name=S.reg;return}const el=document.getElementById('nm');if(el)S.profile.name=el.value.trim().toUpperCase().slice(0,10)}
document.addEventListener('click',e=>{const t=e.target.closest('[data-act]');if(!t||t.disabled)return;act(t.dataset.act,t.dataset.v,t)});
document.addEventListener('submit',e=>{if(e.target.id!=='joinf')return;e.preventDefault();joinLobby(document.getElementById('joincode').value)});
document.addEventListener('input',e=>{if(e.target.id==='nm'){if(S.reg){e.target.value=S.reg;return}S.profile.name=e.target.value.toUpperCase().slice(0,10);NAMEBUMP='';checkName(S.profile.name);const rb=document.getElementById('regb');if(rb)rb.textContent='REGISTER '+(S.profile.name||'NAME')}});
document.addEventListener('keydown',e=>{
  if(document.getElementById('achpop')){if(e.key==='Escape'){achClose();e.preventDefault()}return}
  if(V==='camp'){campKey(e,true);return}
  if(e.target.id==='chatin'||e.target.id==='joincode'||e.target.id==='gchatin')return;
  if(['pw1','pw2','lgn','lgp'].includes(e.target.id))return;
  if(e.target.tagName==='INPUT'){if(e.key==='Enter'){if(NAMESTAT.st==='taken')return;keepName();save();go('title')}return}
  if(V==='title'){if(e.key==='ArrowDown'||e.key==='s'){menuI=(menuI+1)%MENU.length;render();e.preventDefault()}else if(e.key==='ArrowUp'||e.key==='w'){menuI=(menuI+MENU.length-1)%MENU.length;render();e.preventDefault()}else if(e.key==='Enter'||e.key===' '){e.preventDefault();act('menu',MENU[menuI][1])}return}
  if(V==='dlg'&&(e.key==='Enter'||e.key===' '||e.key==='z')){e.preventDefault();dlgAdv();return}
  if(V==='game'&&G){
    if(e.key==='p'||e.key==='P'||e.key==='Escape'){act('pause');return}
    const n=+e.key;if(n>=1&&n<=4){const b=document.getElementById('opt'+(n-1));if(b&&!b.disabled)b.click();return}
    if(e.key==='Enter'||e.key===' '){const b=document.getElementById('next');if(b){e.preventDefault();b.click()}}
  }
});
window.addEventListener('beforeunload',()=>{if(LOBBY&&LOBBY.net&&ON)ON.leaveRoom(LOBBY.code,LOBBY.host)});

/* ================= CAMPAIGN MODE (experimental): CIV PRO PREFECTURE, v2 ================= */
/* A top-down RPG town with interiors, walking townsfolk, two semesters of questlines, student duels,
   items, and a final exam in a classroom that turns into a dungeon. */
Object.assign(SPR,{
goose:['...XXX......','..XXoXX.....','..XXXXXoo...','...XXX......','...XX.......','...XX.......','..XXXX......','.XXXXXXXXX..','XXXXXXXXXXX.','.XXXXXXXXXX.','..XXXXXXX...','....o..o....'],
snail:['o.o.........','X.X.........','XXX...XXXX..','XoX..XoooXX.','XXX.XoXXXoX.','.XX.XoXoXoX.','.XX.XoXXoXX.','.XXXXooooX..','.XXXXXXXXXXX','XXXXXXXXXXXX','............','............'],
troll:['..X......X..','..XXXXXXXX..','.XXXXXXXXXX.','.XoXXXXXXoX.','.XXXXXXXXXX.','.XXXXooXXXX.','.XoXXXXXXoX.','..XooooooX..','XXXXXXXXXXXX','XXXXXXXXXXXX','.XXX.XX.XXX.','.XX..XX..XX.'],
moth:['...o....o...','....o..o....','XXX.XXXX.XXX','XXXXXoXoXXXX','XoXXXXXXXXoX','XXXXXXXXXXXX','.XXX.XX.XXX.','..XX.XX.XX..','....XXXX....','.....XX.....','............','............'],
dog:['XX......XX..','XXX....XXX..','.XXXXXXXX...','.XoXXXXoX...','.XXXXXXXX...','..XXooXX....','...XXXX.....','..XXXXXXXXX.','.XXXXXXXXXXX','.XXXXXXXXXX.','.XX.XX.XX.X.','.XX.XX.XX...'],
chef:['..XXXXXXXX..','.XXXXXXXXXX.','..XXXXXXXX..','...oooooo...','...XXXXXX...','...XoXXoX...','...XXXXXX...','....XooX....','..XXXXXXXX..','.XXXXXXXXXX.','.XX.XXXX.XX.','....XXXX....'],
fishy:['............','............','....XXX.....','...XXXXX..X.','.XXXXXXXXXX.','XXoXXXXXXXX.','XXXXXXXXXXXX','.XXXooXXXXX.','..XXXXXXX.X.','....XXX.....','............','............'],
statue:['....XXXX....','...XXXXXX...','...XoXXoX...','...XXXXXX...','....XXXX....','....XXXX....','...XXXXXX...','...XXXXXX...','..XXXXXXXX..','..XXXXXXXX..','.XXXXXXXXXX.','XXXXXXXXXXXX'],
paper:['..XXXXXXX...','..XXXXXXXX..','..XooXXXXXX.','..XXXXXXXXX.','..XoooooXXX.','..XXXXXXXXX.','..XoXXXoXXX.','..XXXooXXXX.','..XXXXXXXXX.','..XoooooXXX.','..XXXXXXXXX.','..XXXXXXXXX.'],
kid1:['...XXXXXX...','..XXXXXXXX..','..XoXXXXoX..','..XXXXXXXX..','...XXooXX...','....XXXX....','..XXXXXXXX..','.XXXXXXXXXX.','.XX.XXXX.XX.','....XXXX....','....X..X....','...XX..XX...'],
kid2:['..X.XXXX.X..','..XXXXXXXX..','..XooXXooX..','..XXXXXXXX..','...XoooXX...','....XXXX....','..XXXXXXXX..','.XXXXXXXXXX.','.XX.XXXX.XX.','....XXXX....','....X..X....','...XX..XX...'],
kid3:['...XXXXXX...','..XXXXXXXX..','..XoXXXXoX..','..XXXXXXXX..','...XXXXXX...','....XXXX....','..XXXoXXXX..','.XXXXoXXXXX.','.XX.XoXX.XX.','....XXXX....','....X..X....','...XX..XX...'],
kid4:['...XXXXXX...','..XooooooX..','..XoXXXXoX..','..XXXXXXXX..','...XXooXX...','....XXXX....','..XXoXXoXX..','.XXXXooXXXX.','.XX.XXXX.XX.','....XXXX....','....X..X....','...XX..XX...'],
rocker:['...XXXX.....','..XXXXXX....','..XoXXoX....','..XXXXXX....','...XooX.....','..XXXXXX..XX','.XXXXXXX.XX.','.XXXooXXXX..','.XXooooXX...','..XXooXX....','...X..X.....','..XX..XX....'],
vend:['XXXXXXXXXXXX','XooooooooXXX','XoXXoXXoXXoX','XooooooooXXX','XoXXoXXoXXoX','XooooooooXoX','XXXXXXXXXXXX','XooooooooXoX','XXXXXXXXXXXX','XoooooooooXX','XXXXXXXXXXXX','XX........XX'],
buckler:['..XXXXXXXX..','.XXXXXXXXXX.','XXXooXXooXXX','XXXXXXXXXXXX','XXXoooooXXXX','XXXXXXXXXXXX','XXXXooooXXXX','.XXXXXXXXXX.','.XXXXXXXXXX.','..XXXXXXXX..','...XXXXXX...','.....XX.....'],
cup:['....X..X....','.....X..X...','..XXXXXXXX..','..XooooooXXX','..XXXXXXXX.X','..XXXXXXXX.X','..XXXXXXXXXX','..XXXXXXXX..','..XXXXXXXX..','...XXXXXX...','..XXXXXXXX..','............'],
pamph:['XXXXX.XXXXX.','XoooX.XoooX.','XXXXX.XXXXX.','XoooX.XooXX.','XXXXX.XXXXX.','XooXX.XoooX.','XXXXX.XXXXX.','XoooX.XooXX.','XXXXX.XXXXX.','XXXXXXXXXXX.','.XXXXXXXXX..','............'],
pen:['..........XX','.........XXX','........XXX.','.......XXX..','......XXX...','.....XXX....','....XXX.....','...XXX......','..ooX.......','.ooo........','.oo.........','o...........'],
cards:['..XXXXXXXXX.','..XoooooooX.','XXXXXXXXXXX.','XoooooooooX.','XXXXXXXXXXX.','XoooooXXXXX.','XXXXXXXXXXX.','XooooooooXX.','XXXXXXXXXXX.','............','............','............'],
supp:['XXXXXXXXXX..','XoXXXXXXXXX.','XoXXooooXXX.','XoXoXXXXXXX.','XoXXoooXXXX.','XoXXXXXoXXX.','XoXooooXXXX.','XoXXXXXXXXX.','XoXXXXXXXXX.','XXXXXXXXXXX.','.XXXXXXXXXX.','............'],
medal:['..X......X..','...X....X...','....X..X....','.....XX.....','....XXXX....','...XXXXXX...','..XXXooXXX..','..XXoXXoXX..','..XXXooXXX..','...XXXXXX...','....XXXX....','............'],
cert:['.XXXXXXXXXX.','X.XXXXXXXXX.','.XoooooooX..','.XXXXXXXXX..','.XoooooXXX..','.XXXXXXXXX..','.XooooXXoo..','.XXXXXXooo..','.XXXXXXXo...','XXXXXXXXX...','.XXXXXXXXX..','............'],
cap1:['XXXXXXXXXXXX','...XXXXXX..X','...XXXXXX..X','...........X','..XXXXXXXX.X','.XXXXXXXXXX.','XXXoXXXXoXXX','XXXXXXXXXXXX','XXXXoXXoXXXX','.XXXXooXXXX.','..XXXXXXXX..','....XXXX....'],
cap2:['X..X..X..X..','XX.XX.XX.XX.','XXXXXXXXXXX.','............','.XXXXXXXXXX.','XXXoXXXXoXXX','XXXoXXXXoXXX','XXXXXXXXXXXX','XXXXoXXoXXXX','.XXXXooXXXX.','..XXXXXXXX..','....XXXX....'],
});
// profile pictures earned by finishing each semester
ICONS.push('cap1','cap2');
const CICON={cap1:{name:'Prefecture Graduate (finish the fall semester of the campaign)',icon:'cap1',sem:1},cap2:{name:'Spring Laureate (finish the spring semester of the campaign)',icon:'cap2',sem:2}};
const campIconOK=n=>!!(CICON[n]&&S.camp&&S.camp['won'+CICON[n].sem]);

/* ---------- campaign music ---------- */
Object.assign(BASS,{boss:[[0,0,1],[2,12,1],[3,0,1],[4,0,1],[6,12,1],[7,0,1],[8,0,1],[10,12,1],[11,7,1],[12,0,1],[14,12,1],[15,10,1]],
  rock:[[0,0,2],[2,0,2],[4,0,2],[6,12,2],[8,7,2],[10,7,2],[12,0,2],[14,12,2]],root:[[0,0,8],[8,7,8]]});
Object.assign(DRUMS,{boss:{k:'x.x...x.x.x...x.',s:'....x.......x.xx',h:'xxxxxxxxxxxxxxxx',o:'..x...x...x...x.'},
  rock:{k:'x.....x.x.......',s:'....x.......x...',h:'x.x.x.x.x.x.x.x.',o:'..............x.'},
  shop:{k:'x.......x.......',s:'....x.......x...',h:'..x...x...x...x.',o:'................'},
  battle:{k:'x.x...x.x.x...x.',s:'....x.......x...',h:'xxxxxxxxxxxxxxxx',o:'..x.......x.....'}});
SONGS.boss=[
 {title:'Final Exam (Boss Theme)',bpm:156,swing:0,bass:'boss',drums:'boss',arp:'16th',
  bars:[['Dm9'],['Bbmaj7'],['Gm9'],['A7b9'],['Dm9'],['Ebmaj7#11'],['Em7b5',8,'A7b9',8],['Dm9']],
  mel:'A5:1 D6:1 F6:2 E6:2 D6:1 C6:1 A5:2 C6:2 D6:4|F6:3 E6:1 D6:2 Bb5:2 F5:2 G5:2 A5:4|G5:1 Bb5:1 D6:2 F6:2 G6:4 F6:1 E6:1 D6:2 Bb5:2|C#6:2 E6:2 G6:2 Bb6:4 A6:2 G6:2 E6:2|D6:1 E6:1 F6:1 A6:1 D7:4 C7:2 A6:2 F6:4|G6:2 Bb6:2 A6:2 G6:2 D6:4 Eb6:2 F6:2|E6:2 G6:2 Bb6:2 A6:2 G6:1 F6:1 E6:2 C#6:4|D6:6 A5:2 D5:4 -:4'},
 {title:'Final Exam (Second Sitting)',bpm:156,swing:0,bass:'boss',drums:'drive',arp:'16th',
  bars:[['Gm9'],['Ebmaj7'],['Cm9'],['D7b9'],['Gm9'],['Abmaj7#11'],['Am7b5',8,'D7b9',8],['Gm9']],
  mel:'D6:1 G6:1 Bb6:2 A6:2 G6:1 F6:1 D6:2 F6:2 G6:4|Bb6:3 A6:1 G6:2 Eb6:2 Bb5:2 C6:2 D6:4|C6:1 Eb6:1 G6:2 Bb6:2 C7:4 Bb6:1 A6:1 G6:2 Eb6:2|F#6:2 A6:2 C7:2 Eb7:4 D7:2 C7:2 A6:2|G6:1 A6:1 Bb6:1 D7:1 G7:4 F7:2 D7:2 Bb6:4|C7:2 Eb7:2 D7:2 C7:2 G6:4 Ab6:2 Bb6:2|A6:2 C7:2 Eb7:2 D7:2 C7:1 Bb6:1 A6:2 F#6:4|G6:6 D6:2 G5:4 -:4'},
];
SONGS.town=[
 {title:'Prefecture Stroll',bpm:116,swing:.1,bass:'walk',drums:'chill',arp:'8th',lw:'p50',lw2:'p25',
  bars:[['Cmaj7'],['Am7'],['Fmaj7'],['G7'],['Em7'],['Am7'],['Dm7',8,'G7',8],['Cmaj7']],
  mel:'E5:2 G5:2 C6:4 B5:2 G5:2 E5:4|A5:2 C6:2 E6:4 D6:2 C6:2 A5:4|F5:2 A5:2 C6:2 E6:2 D6:4 C6:4|B5:3 A5:1 G5:4 D5:2 F5:2 G5:4|G5:2 B5:2 E6:4 D6:2 B5:2 G5:4|A5:2 G5:2 E5:4 C5:2 E5:2 A5:4|D6:2 C6:2 A5:2 F5:2 G5:2 B5:2 D6:4|C6:8 G5:4 -:4'},
 {title:'Docket Drive',bpm:98,swing:.06,bass:'rock',drums:'rock',arp:'8th',lw:'gtr',pw:'keys',aw:'keys',
  bars:[['Dmaj9'],['Bm9'],['Gmaj9'],['A13'],['F#m7'],['Bm7',8,'E7',8],['Gmaj7',8,'A7sus',8],['Dmaj9']],
  mel:'F#5:3 E5:1 D5:2 E5:2 F#5:4 A5:4|B5:4 A5:2 F#5:2 D5:6 -:2|G5:2 A5:2 B5:2 D6:2 C#6:4 B5:4|A5:6 -:2 E5:2 F#5:2 G5:2 A5:2|C#6:3 B5:1 A5:2 F#5:2 E5:4 C#5:4|D5:2 F#5:2 B5:4 G#5:2 B5:2 D6:4|D6:2 B5:2 G5:2 F#5:2 E5:4 A5:4|F#5:8 -:2 A5:2 F#5:4'},
];
SONGS.inside=[
 {title:'Indoor Voices',bpm:86,swing:.14,bass:'bossa',drums:'shop',arp:'8th',lw:'p25',pw:'keys',
  bars:[['Fmaj7'],['Dm9'],['Bbmaj7'],['C7sus',8,'C7',8],['Am7'],['Dm7'],['Gm7',8,'C7',8],['Fmaj7']],
  mel:'A5:4 C6:2 A5:2 F5:4 G5:4|A5:2 F5:2 D5:4 E5:2 F5:2 A5:4|D6:4 C6:2 Bb5:2 A5:4 F5:4|G5:6 -:2 E5:2 G5:2 Bb5:4|C6:4 B5:2 A5:2 E5:4 G5:4|F5:2 A5:2 C6:4 D6:4 C6:4|Bb5:2 A5:2 G5:2 F5:2 E5:4 G5:4|F5:10 -:6'},
 {title:'Chambers Groove',bpm:94,swing:.08,bass:'rock',drums:'rock',arp:'16th',lw:'gtr',pw:'keys',aw:'keys',
  bars:[['Ebmaj9'],['Cm9'],['Abmaj7'],['Bb13'],['Gm7'],['Cm9'],['Fm7',8,'Bb7',8],['Ebmaj9']],
  mel:'G5:3 F5:1 Eb5:2 F5:2 G5:4 Bb5:4|C6:4 Bb5:2 G5:2 Eb5:6 -:2|Ab5:2 Bb5:2 C6:2 Eb6:2 D6:4 C6:4|Bb5:6 -:2 F5:2 G5:2 Ab5:2 Bb5:2|D6:3 C6:1 Bb5:2 G5:2 F5:4 D5:4|Eb5:2 G5:2 C6:4 Bb5:2 G5:2 Eb5:4|Ab5:2 C6:2 F6:4 D6:2 Bb5:2 Ab5:4|G5:8 -:4 Bb5:4'},
];
SONGS.duel=[
 {title:'Student Showdown',bpm:150,swing:0,bass:'slap',drums:'battle',arp:'16th',lw:'p50',lw2:'p25',
  bars:[['Am9'],['Fmaj7'],['Dm9'],['E7#9'],['Am9'],['Cmaj7'],['Dm7',8,'E7b9',8],['Am9']],
  mel:'A5:1 C6:1 E6:2 A6:2 G6:1 E6:1 D6:2 E6:2 C6:4|F6:2 E6:2 C6:2 A5:2 C6:4 F6:4|D6:1 E6:1 F6:2 A6:2 F6:2 E6:2 D6:2 A5:4|G#5:2 B5:2 D6:2 F6:2 E6:4 B5:4|C6:1 B5:1 A5:2 E6:2 A6:4 G6:2 E6:2 C6:2|E6:2 G6:2 B6:4 A6:2 G6:2 E6:4|F6:2 E6:2 D6:2 A5:2 G#5:2 B5:2 D6:4|A5:4 E6:4 A6:6 -:2'},
 {title:'Cold Call Rock',bpm:126,swing:.04,bass:'rock',drums:'rock',arp:'16th',lw:'gtr',pw:'keys',
  bars:[['Em9'],['Cmaj9'],['Am9'],['B7#9'],['Gmaj7'],['Cmaj7'],['Am7',8,'B7',8],['Em9']],
  mel:'B5:2 G5:2 E5:2 F#5:2 G5:4 B5:4|E6:4 D6:2 B5:2 G5:4 E5:4|C6:2 B5:2 A5:2 G5:2 A5:4 E6:4|D#6:6 -:2 B5:2 A5:2 F#5:4|D6:2 B5:2 G5:2 B5:2 D6:4 F#6:4|E6:3 D6:1 C6:2 B5:2 G5:4 E5:4|A5:2 C6:2 E6:2 C6:2 B5:2 D#6:2 F#6:4|E6:8 B5:4 -:4'},
];
SONGS.dungeon=[
 {title:'Classroom of Echoes',bpm:76,swing:0,bass:'root',drums:'half',arp:'8th',lw:'p50',
  bars:[['Cm9'],['Abmaj7'],['Fm9'],['G7b9'],['Cm9'],['Dbmaj7'],['Dm7b5',8,'G7b9',8],['Cm9']],
  mel:'G5:6 Eb5:2 C5:4 D5:4|Eb5:4 C5:2 Ab4:2 G4:8|F5:4 Ab5:2 C6:2 Bb5:4 Ab5:4|B4:6 D5:2 F5:4 Ab5:4|G5:2 C6:2 Eb6:4 D6:4 C6:4|F5:4 Ab5:4 Db6:6 C6:2|Ab5:4 F5:2 D5:2 B4:4 D5:4|C5:12 -:4'},
];

/* ---------- maps ---------- */
// Walkable tiles: grass . flowers , path = bridge B platform P / indoors: floor k, rug r, exit mat X
const CWALKS='.,=BPkrX';
const CTOWN=(()=>{const W=48,H=34,m=Array.from({length:H},()=>Array(W).fill('.'));
  const f=(x0,y0,x1,y1,c)=>{for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++)m[y][x]=c},s=(x,y,c)=>{m[y][x]=c};
  f(0,0,47,0,'#');f(0,33,47,33,'#');f(0,0,0,33,'#');f(47,0,47,33,'#');
  f(1,1,14,4,'#');f(33,1,44,4,'#');[[15,1],[15,2],[32,1],[32,3],[14,5],[13,1]].forEach(([x,y])=>s(x,y,'#'));
  // law school
  f(16,1,31,3,'R');f(16,4,31,5,'W');[18,20,27,29].forEach(x=>s(x,4,'w'));s(23,5,'D');s(24,5,'D');s(15,5,'b');s(32,5,'b');s(21,7,'S');s(26,7,'p');
  f(23,6,24,11,'=');
  // plaza
  f(14,12,33,20,'=');f(23,15,24,16,'f');[[14,12],[33,12],[14,20],[33,20]].forEach(([x,y])=>s(x,y,'L'));
  [[17,13],[30,13],[17,19],[30,19]].forEach(([x,y])=>s(x,y,'n'));s(15,16,'p');s(32,16,'p');s(20,12,'p');s(27,12,'p');
  // library (west)
  f(2,7,11,8,'R');f(2,9,11,10,'W');s(4,9,'w');s(9,9,'w');s(6,10,'D');f(6,11,6,13,'=');f(6,13,13,13,'=');s(8,11,'S');s(3,11,'p');
  // courthouse (east)
  f(34,7,42,8,'G');f(34,9,42,10,'U');s(38,10,'D');f(38,11,38,13,'=');f(34,13,38,13,'=');s(36,11,'S');s(40,11,'l');s(35,11,'l');
  // blue house (southwest)
  f(3,16,8,17,'Y');f(3,18,8,19,'W');s(7,18,'w');s(5,19,'D');f(5,20,13,20,'=');s(9,19,'x');f(1,21,10,21,'F');
  // bakery (southeast)
  f(35,17,41,18,'R');f(35,19,41,20,'W');s(36,19,'w');s(40,19,'w');s(38,20,'D');f(38,21,38,22,'=');s(34,20,'c');s(42,20,'c');s(42,19,'c');s(37,21,'S');
  // market street
  f(3,23,43,24,'=');f(23,21,24,26,'=');[[10,22],[11,22],[12,22],[16,22],[17,22],[18,22],[29,22],[30,22],[31,22]].forEach(([x,y])=>s(x,y,'M'));s(14,25,'c');s(33,25,'c');s(34,25,'c');
  // train station (east edge)
  f(44,13,44,26,'P');f(45,1,46,32,'t');s(43,15,'S');s(43,18,'n');s(43,22,'n');
  // river, bridge, south meadow, pond, graveyard
  f(1,27,44,28,'~');s(23,27,'B');s(23,28,'B');s(22,26,'S');f(23,29,23,30,'=');f(31,30,34,31,'~');s(39,31,'h');
  [[15,31],[17,31],[16,30]].forEach(([x,y])=>s(x,y,'g'));s(18,30,'S');
  [[2,14],[3,13],[10,15],[36,14],[1,15],[2,22],[1,26],[11,26],[12,25],[4,29],[6,30],[3,31],[9,32],[26,30],[27,31],[29,32],[36,29],[42,30],[43,32],[20,31],[21,32],[13,29],[41,25],[40,26],[1,6],[13,6],[33,6],[44,6],[44,10],[44,28]].forEach(([x,y])=>{if(m[y][x]==='.')s(x,y,'#')});
  [[12,7],[13,8],[33,11],[9,14],[11,18],[13,16],[34,15],[35,15],[26,25],[2,25],[19,25],[28,26],[37,26],[25,30],[30,29]].forEach(([x,y])=>{if(m[y][x]==='.')s(x,y,'b')});
  [[4,5],[7,6],[24,8],[26,9],[29,8],[14,9],[39,5],[2,12],[15,10],[10,17],[27,25],[13,25],[8,30],[21,29],[29,30],[36,31],[16,26],[33,29],[5,26],[40,15],[11,11],[19,8],[30,10],[2,19],[12,17],[37,14],[18,26],[31,26],[42,24]].forEach(([x,y])=>{if(m[y][x]==='.')s(x,y,',')});
  return m})();
const grid=rows=>rows.map(r=>[...r]);
const CMAPS={
 town:{t:CTOWN,mus:'town',name:'CIV PRO PREFECTURE'},
 bakery:{mus:'inside',name:'THE BAKERY',door:[[38,20]],t:grid([
  'KKKQKKKKKKQKKK',
  'KOOOkkkkkkkkzK',
  'KkkkkkkkkkkkkK',
  'KCCCCCCCkkgggK',
  'KkkkkkkkkkkkkK',
  'KkyykkrrrkyykK',
  'KkaakkrrrkaakK',
  'KkkkkkrrrkkkzK',
  'KzkkkkkkkkkkkK',
  'KKKKKKXKKKKKKK'])},
 library:{mus:'inside',name:'THE LIBRARY',door:[[6,10]],t:grid([
  'KKKQKKKKKKKKQKKK',
  'KqqqqqkkkkqqqqqK',
  'KkkkkkkkkkkkkkkK',
  'KqqqqqkkkkqqqqqK',
  'KkkkkkkkkkkkkkkK',
  'KkyykkrrrrkkyykK',
  'KkkkkkrrrrkkkkkK',
  'KkyykkrrrrkkyykK',
  'KzkkkkkkkkkkCCkK',
  'KkkkkkkkkkkkkkkK',
  'KKKKKKKXKKKKKKKK'])},
 court:{mus:'inside',name:'THE COURTHOUSE',door:[[38,10]],t:grid([
  'KKKKKKKllKKKKKKK',
  'KkkkkJJkJJJkkkkK',
  'KkkkkkkkkkkkkkkK',
  'KkCCkkkkkkkkCCkK',
  'KkkkkkkkkkkkkkkK',
  'KnnnnnkrrknnnnnK',
  'KkkkkkkrrkkkkkkK',
  'KnnnnnkrrknnnnnK',
  'KzkkkkkrrkkkkkzK',
  'KkkkkkkrrkkkkkkK',
  'KKKKKKKXXKKKKKKK'])},
 house:{mus:'inside',name:'THE BLUE HOUSE',door:[[5,19]],t:grid([
  'KKQKKKKQKK',
  'KEEkkkkzkK',
  'KkkkkkkkkK',
  'KkkyykkkkK',
  'KkkaakkrrK',
  'KkkkkkkrrK',
  'KvkkkkkkkK',
  'KKKKXKKKKK'])},
 class:{mus:'inside',name:'PROF. PETERSON’S CLASSROOM',door:[[23,5],[24,5]],t:grid([
  'KKKeeeeeeeeeeKKK',
  'KkkkkkkjkkkkkkkK',
  'KkkkkkkkkkkkkkkK',
  'KkddkddkkddkddkK',
  'KkkkkkkkkkkkkkkK',
  'KkddkddkkddkddkK',
  'KkkkkkkkkkkkkkkK',
  'KkddkddkkddkddkK',
  'KkkkkkkkkkkkkkkK',
  'KzkkkkkkkkkkkkzK',
  'KkkkkkkkkkkkkkkK',
  'KKKKKKKXXKKKKKKK'])},
};
const CDOORS={};Object.entries(CMAPS).forEach(([k,M])=>{(M.door||[]).forEach(([x,y])=>CDOORS[x+','+y]=k)});
const cMapT=()=>CMAPS[cS().map].t;

/* ---------- people ---------- */
// map/x/y = home tile. route = patrol waypoints (they walk with a little step). sem = only in that semester.
const CNPC=[
 {id:'syl',n:'THE SYLLABUS',s:'paper',c:'#ffffff',map:'town',x:26,y:18,v:520},
 {id:'goose',n:'GOOSE McGILLICUDDY',s:'goose',c:'#f4f4f4',map:'town',x:18,y:14,v:300,route:[[18,14],[21,14],[21,18],[18,18]],spd:380},
 {id:'baker',n:'BRIOCHE THE BAKER',s:'chef',c:'#ffd9a0',map:'bakery',x:5,y:2,v:420,route:[[2,2],[9,2]],spd:420,pause:1500},
 {id:'snail',n:'SHELBY',s:'snail',c:'#c8a2ff',map:'town',x:10,y:18,v:180,route:[[10,18],[12,18]],spd:1600,pause:2600},
 {id:'crab',n:'DOMICILE',s:'crab',c:'#ff7a5c',map:'town',x:16,y:25,v:600,route:[[15,25],[20,25]],spd:300,pause:1800},
 {id:'fish',n:'FINNEGAN',s:'fishy',c:'#6ad6ff',map:'town',x:30,y:27,v:700,swim:1},
 {id:'bird',n:'TOURISTA',s:'bird',c:'#ffd84a',map:'town',x:44,y:20,v:820,route:[[44,17],[44,25]],spd:340,pause:1400},
 {id:'statue',n:'VENUE-S',s:'statue',c:'#d9d9d9',map:'town',x:28,y:16,v:140},
 {id:'ghost',n:'THE COMPLAINT',s:'ghost',c:'#cfd8ff',map:'town',x:27,y:8,v:360,route:[[27,8],[31,8]],spd:500,pause:900},
 {id:'moth',n:'MOTHBRARIAN',s:'moth',c:'#e8d8a8',map:'library',x:12,y:9,v:640},
 {id:'troll',n:'BRIDGET',s:'troll',c:'#7bd96a',map:'town',x:23,y:27,v:110},
 {id:'dog',n:'CLERK BISCUIT',s:'dog',c:'#e0a060',map:'court',x:3,y:2,v:760,route:[[3,2],[12,2]],spd:260,pause:700},
 {id:'vend',n:'VENDY',s:'vend',c:'#ff4d6d',map:'town',x:31,y:11,v:250},
 {id:'l1',n:'PIP, A 1L',s:'kid1',c:'#5ee08f',map:'town',x:4,y:13,v:560,stu:'l1'},
 {id:'l2',n:'DOUG, A 2L',s:'kid2',c:'#c58bff',map:'library',x:4,y:6,v:330,stu:'l2'},
 {id:'l3',n:'MARGOT, A 3L',s:'kid3',c:'#ff9be1',map:'town',x:12,y:30,v:470,stu:'l3'},
 {id:'l4',n:'THADDEUS, A 3L',s:'kid4',c:'#ffd84a',map:'court',x:12,y:4,v:390,stu:'l4',sem:2},
 {id:'peterson',n:'PROF. PETERSON',s:'peterson',c:'',map:'class',x:8,y:1,v:260},
 // townsfolk
 {id:'jog',n:'JOGGING ATTORNEY',s:'kid3',c:'#9fe3ff',map:'town',x:6,y:24,v:500,route:[[4,24],[42,24]],spd:200,pause:600,idle:[['* I bill in six-minute increments.','* This conversation has cost you forty dollars.'],['* Can’t stop. Running late. For a deposition. In 1997.']]},
 {id:'pigeon',n:'PIGEON',s:'bird',c:'#a7a7b8',map:'town',x:28,y:18,v:900,wander:[25,13,32,19],spd:260,idle:[['* coo.','* (It is holding a tiny subpoena.)'],['* coo coo.','* (It has been served. It does not care.)']]},
 {id:'rocker',n:'SMOOTH RICK',s:'rocker',c:'#ff9e5e',map:'town',x:26,y:22,v:200,idle:[['* Yeah. I play smooth rock covers of the Federal Rules.','* This one’s Rule 56. There’s no genuine dispute that it rules.'],['* My band is called THE MATERIAL FACTS.','* We’re very relevant. Proportional, even.']]},
 {id:'ven1',n:'OUTLINE VENDOR',s:'chef',c:'#ffb3c7',map:'town',x:11,y:21,v:470,idle:[['* Outlines! Fresh outlines!','* Only slightly highlighted. Entirely highlighted.']]},
 {id:'ven2',n:'CASEBOOK VENDOR',s:'chef',c:'#b3e0ff',map:'town',x:17,y:21,v:430,idle:[['* Used casebooks! Previous owner wrote “why” in every margin.','* It’s a feature.']]},
 {id:'master',n:'STATIONMASTER',s:'person',c:'#6a8cff',map:'town',x:44,y:14,v:240,idle:[['* The 5:15 to the Court of Appeals is delayed.','* It is always delayed. It is waiting for a final judgment.']]},
 {id:'judge',n:'THE JUDGE',s:'person',c:'#7a7a8a',map:'court',x:7,y:1,v:160,idle:[['* (The judge is asleep.)','* (A note on the bench reads: DENIED.)'],['* ...sustained... zzz...']]},
 {id:'room',n:'YOUR ROOMMATE',s:'kid1',c:'#ffd84a',map:'house',x:2,y:1,v:600,idle:[['* zzz... motion... to... snooze...','* (Your roommate is asleep on a casebook. It is the softest thing they own.)'],['* five more minutes... that’s a reasonable time...']]},
];
const CNPCBY=Object.fromEntries(CNPC.map(n=>[n.id,n]));

/* ---------- items ---------- */
const CITEMS={
 buckler:{n:'BLUEBOOK BUCKLER',s:'buckler',c:'#6ad6ff',d:'Start every match shielded: your first miss costs no life. Your streak shield also kicks in after 2 right answers instead of 3.'},
 gavel:{n:'ECHO GAVEL',s:'gavel',c:'#ffd84a',d:'Each time you answer correctly, the players on either side of you lose a heart.'},
 outline:{n:'LAMINATED OUTLINE',s:'scroll',c:'#ff9be1',d:'+2 maximum lives in every campaign match.'},
 coffee:{n:'BOTTOMLESS COLD BREW',s:'cup',c:'#c58a52',d:'+50% time on every question you answer.'},
 pamph:{n:'RULES PAMPHLET',s:'pamph',c:'#ffffff',d:'At the start of each of your turns, one wrong answer is crossed out.'},
 redpen:{n:'PETERSON’S RED PEN',s:'pen',c:'#ff4d6d',d:'The professor’s own trick: every right answer during your streak heals 1 life, up to your maximum.'},
 cards:{n:'FLASHCARD DECK',s:'cards',c:'#5ee08f',d:'Running out of time never costs you a life. The question just passes.'},
 supp:{n:'STATUTORY SUPPLEMENT',s:'supp',c:'#c58bff',d:'Opponents answer 10% less accurately. (It’s heavy. You hit them with it.)'},
 medal:{n:'MOOT COURT MEDAL',s:'medal',c:'#ffd84a',d:'Start every match with your streak shield already up.'},
 cert:{n:'CERT PETITION',s:'cert',c:'#ffffff',d:'Once per match, when you would be eliminated, you survive with 1 life.'},
};

/* ---------- students ---------- */
const stuLines={
 l1:{right:['i outlined that!','footnote 12!','yes!!'],wrong:['oh no.','that was on page 400...','i panicked.'],life:['ow...','my highlighter!'],streak:['i’m doing it!'],elim:['i’ll... go re-read chapter 3.']},
 l2:{right:['id.','see supra.','obviously.'],wrong:['ugh. citation error.','i’m too tired for this.','that’s a law review problem.'],life:['my cite check...','coffee. need coffee.'],streak:['three for three. put it in a footnote.'],elim:['i’m going to sleep for a week.']},
 l3:{right:['Easy.','Naturally.','I wrote the outline on this.'],wrong:['Rusty.','Senioritis.','I knew that in 2025.'],life:['Hm.','Annoying.'],streak:['Three in a row. Obviously.'],elim:['Fine. I have a job anyway.']},
 l4:{right:['As my judge would say: affirmed.','Correct, and cite-checked.','I clerk for a living. Next year.'],wrong:['Reversed. On me.','I’ll need to brief that.','A harmless error. Surely.'],life:['Ah. Prejudicial.','That will be in my bench memo.'],streak:['Three affirmances.'],elim:['Remanded. To the hallway.']},
};
const CSTU={
 l1:{n:'PIP',s:'kid1',c:'#5ee08f',acc:.6,spd:.9,lives:3,item:'buckler',label:'DUEL · PIP THE 1L',topics:['cp-courts','cp-div','cp-fq','cp-svc','cp-venue','cp-pj1'],
  pre:[['l1','* h-hi! i read every footnote this semester.'],['l1','* every. single. one.'],['l1','* will you... duel me? i need the practice.']],
  win:[['l1','* you beat me fair and square.'],['l1','* here. my BLUEBOOK BUCKLER. it never helped me, but maybe it will help you.']],
  lose:[['l1','* oh! i won? i won!!'],['l1','* i should tell my study group. i don’t have a study group.']],
  after:[['l1','* i’m re-reading the footnotes. the footnotes have footnotes.']]},
 l2:{n:'DOUG',s:'kid2',c:'#c58bff',acc:.74,spd:1.3,lives:3,item:'gavel',label:'DUEL · DOUG THE 2L',topics:['cp-plead','cp-r11','cp-resp','cp-amend','cp-join','cp-cjoin','cp-disc1','cp-disc2','cp-rem'],
  pre:[['l2','* shh. i’m in the library because i haven’t slept since october.'],['l2','* fine. a duel. let’s make it fast. i have a cite check at 4 a.m.']],
  win:[['l2','* whatever. i was distracted. by sleep. that i didn’t get.'],['l2','* take my ECHO GAVEL. it bangs on its own. it’s keeping me up.']],
  lose:[['l2','* good. now i can go back to bluebooking.']],
  after:[['l2','* “Id.” that’s it. that’s the whole citation. i love it.']]},
 l3:{n:'MARGOT',s:'kid3',c:'#ff9be1',acc:.86,spd:1.2,lives:3,item:'outline',label:'DUEL · MARGOT THE 3L',topics:['cp-supp','cp-pj2','cp-pj3','cp-transfer','cp-dispo','cp-trial','cp-app','cp-courts'],
  pre:[['l3','* I already have a job. I’ve had it since last August.'],['l3','* So this is purely for sport.'],['l3','* Don’t be offended when I win.']],
  win:[['l3','* Huh. Okay. That’s fair.'],['l3','* Take my LAMINATED OUTLINE. Laminated means it survives anything. Like you, apparently.']],
  lose:[['l3','* Good game. I mean that in a condescending way.']],
  after:[['l3','* I’m counting down the days. 180. Not that I’m counting.']]},
};
const CSTU2={
 l1:{n:'PIP',s:'kid1',c:'#5ee08f',acc:.72,spd:1.05,lives:3,item:'cards',label:'SPRING DUEL · PIP THE 1L',topics:['cp-resp','cp-amend','cp-join','cp-supp','cp-rem','cp-pj2'],
  pre:[['l1','* it’s spring now! i made FLASHCARDS!'],['l1','* four thousand of them.'],['l1','* rematch? please? i’m a different person now. a person with flashcards.']],
  win:[['l1','* ...four thousand flashcards and i still lost.'],['l1','* take the FLASHCARD DECK. maybe you’ll use them right.']],
  lose:[['l1','* the flashcards WORKED.']],
  after:[['l1','* i’m making flashcards about my flashcards.']]},
 l2:{n:'DOUG',s:'kid2',c:'#c58bff',acc:.82,spd:1.4,lives:3,item:'supp',label:'SPRING DUEL · DOUG THE 2L',topics:['cp-disc1','cp-disc2','cp-dispo','cp-cjoin','cp-supp','cp-transfer','cp-fq'],
  pre:[['l2','* i finished my note. it’s 140 pages. 90 are footnotes.'],['l2','* i’m in a great mood. which means i’m dangerous.']],
  win:[['l2','* ...take my STATUTORY SUPPLEMENT.'],['l2','* it weighs nine pounds. i’ve been using it as a pillow.']],
  lose:[['l2','* back to the footnotes. they missed me.']],
  after:[['l2','* my note was accepted for publication. i’ve already found three typos.']]},
 l3:{n:'MARGOT',s:'kid3',c:'#ff9be1',acc:.9,spd:1.3,lives:3,item:'medal',label:'SPRING DUEL · MARGOT THE 3L',topics:['cp-pj3','cp-app','cp-trial','cp-dispo','cp-plead','cp-r11','cp-div'],
  pre:[['l3','* Last semester ever. I am unstoppable and also very bored.'],['l3','* Rematch. I’ve been practicing. That’s a lie. I’m just better.']],
  win:[['l3','* Hm. Twice. Interesting.'],['l3','* Have my MOOT COURT MEDAL. I won it arguing something I don’t remember.']],
  lose:[['l3','* As expected. Don’t take it personally. Take it procedurally.']],
  after:[['l3','* Graduation is in three weeks. I’ve already planned my outfit and my speech. Nobody asked for a speech.']]},
 l4:{n:'THADDEUS',s:'kid4',c:'#ffd84a',acc:.92,spd:1.45,lives:3,item:'cert',label:'DUEL · THADDEUS THE 3L',topics:null,
  pre:[['l4','* Thaddeus. 3L. I’m clerking next year. For a judge. You’ve probably heard.'],['l4','* I came to the courthouse to... get a feel for the chambers.'],['l4','* I’ve been told you’re the one solving everyone’s problems. Shall we test that?']],
  win:[['l4','* Remarkable. I’ll be mentioning this in my bench memo.'],['l4','* Take my CERT PETITION. It was granted once. It can be granted again.']],
  lose:[['l4','* Affirmed. As predicted.']],
  after:[['l4','* My judge’s chambers have a coffee machine. I think about it constantly.']]},
};
Object.entries(stuLines).forEach(([k,L])=>{Object.assign(CSTU[k]||{},L);Object.assign(CSTU2[k],L)});

/* ---------- questlines: fall semester ---------- */
const CQUESTS=[
{id:'goose',name:'Regret, Without Prejudice',steps:[
 {npc:'goose',pre:['* HONK.','* I sued the baker over a stale croissant. Federal court. Felt right at the time.','* Now I feel bad. She already filed an ANSWER.','* Can I still just... leave?'],
  q:['The defendant has served an answer. How can the plaintiff voluntarily dismiss now?','By a stipulation all parties sign, or by court order','By filing a notice of dismissal any time before trial','By notice, within 21 days after the answer','He can’t; once an answer is filed, the case must go to judgment','Rule 41(a): notice dismissal ends once the defendant serves an answer or summary judgment motion. After that, a stipulation or court order is needed.'],
  ok:['* So I need her to agree, or a judge to sign off.','* HONK. I’ll ask her nicely. (Talk to the BAKER by the bakery.)'],no:['* That’s not what my lawyer said. My lawyer is also a goose, though.']},
 {npc:'baker',pre:['* The goose wants to call it off? Bless his little heart.','* My lawyer says if the judge just signs a dismissal order and it says nothing else...','* ...what kind of dismissal is that?'],
  q:['A Rule 41(a)(2) dismissal order that doesn’t say otherwise is:','Without prejudice','With prejudice','An adjudication on the merits','Void until the defendant consents','Unless the order states otherwise, a court-ordered voluntary dismissal is without prejudice.'],
  ok:['* So he could bring it again someday. Hm.','* Fine. I’ll sign a stipulation. Tell him he owes me a croissant.'],no:['* That doesn’t sound right. And I know dough.']},
 {npc:'goose',pre:['* She signed! HONK!','* One more thing. Last year I sued her over a muffin and dismissed it by notice.','* If I ever sued on that muffin again and dismissed by notice AGAIN, what happens?'],
  q:['A plaintiff who already dismissed a claim by notice files a second notice dismissal of the same claim. Effect?','It operates as an adjudication on the merits','It is without prejudice, like the first one','It requires the court’s permission to take effect','It revives the first lawsuit','Rule 41(a)(1)(B): the two-dismissal rule makes the second notice dismissal an adjudication on the merits.'],
  ok:['* So no more notices for me. I’ll write her a card instead.','* HONK HONK. (That means thank you.)'],no:['* HONK? That seems too easy. Even for me.']}],
 after:['* I’m writing the baker a card. It just says HONK. She’ll understand.']},
{id:'snail',name:'Ninety Days of Snail',steps:[
 {npc:'snail',pre:['* hello...','* i am... a process server.','* the complaint was filed... this morning.','* how long... do i have... to serve it?'],
  q:['Under Rule 4(m), how long does a plaintiff have to serve the defendant after filing?','90 days','30 days','120 days','One year','Rule 4(m) gives 90 days, extended if the plaintiff shows good cause.'],
  ok:['* ninety days...','* for a snail... that is... a sprint.','* talk to me... again... i’m going to... the blue house.'],no:['* that... doesn’t feel... right...']},
 {npc:'snail',pre:['* i made it... to the blue house...','* the defendant... wasn’t home...','* her sixteen-year-old son... who lives there... answered the door.','* can i... leave the papers... with him?'],
  q:['Can the server leave the summons with the defendant’s 16-year-old son at the home where they both live?','Probably, if he has suitable age and discretion','No, only the defendant herself may receive it in hand','No, the person must be at least 21','Only if the server also mails a copy','Rule 4(e)(2)(B) allows leaving it at the defendant’s home with someone of suitable age and discretion who lives there.'],
  ok:['* suitable... age... and discretion...','* he seemed... very discreet...'],no:['* i will... think about that... for a while...']},
 {npc:'snail',pre:['* the plaintiff... asked...','* if she could just... serve the papers... herself...','* she is... very fast...'],
  q:['Can the plaintiff personally serve the summons and complaint?','No, the server must be a nonparty at least 18','Yes, if she files proof of service','Yes, any adult may serve the papers, parties included','Only with the court’s permission','Rule 4(c)(2): any person who is at least 18 and not a party may serve.'],
  ok:['* then... it is... my job...','* i feel... purpose...'],no:['* hmm... that would... put me... out of work...']}],
 after:['* i have... 89 days left... on my next case...','* i’ll make it... probably...']},
{id:'crab',name:'A Crab With Many Shells',steps:[
 {npc:'crab',pre:['* click click.','* I’ve lived in nine shells this year.','* I was born in an Ohio shell. Last week I moved into an Idaho shell, and I plan to stay forever.','* Where am I a citizen?'],
  q:['For diversity purposes, a person’s domicile is established by:','Physical presence plus intent to remain indefinitely','Living in the state continuously for at least one year','The state where the person was born','Registering to vote in that state','A new domicile begins once a person is present and intends to stay indefinitely.'],
  ok:['* Then I’m an Idaho crab! Click.'],no:['* That doesn’t sound right. And I’ve moved a LOT.']},
 {npc:'crab',pre:['* I want to sue the Clam in federal court.','* The Clam is a corporation. Incorporated in Delaware, but its officers run it from Ohio.','* I’m from Idaho. Are we diverse?'],
  q:['Clam Corp. is incorporated in Delaware and run from Ohio. The crab is from Idaho. Complete diversity?','Yes, the Clam is a citizen of Delaware and Ohio only','No, a corporation is a citizen wherever it does business','No, corporations can’t be parties in diversity cases','Only if its shareholders live outside Idaho','§ 1332(c)(1): state of incorporation plus principal place of business (the nerve center).'],
  ok:['* Click click! No Idaho clams in sight.'],no:['* Hm. The Clam’s lawyer won’t like that argument either.']},
 {npc:'crab',pre:['* Last question. I’m suing for exactly $75,000.','* For the scratch on my shell. It was a nice shell.'],
  q:['The crab demands exactly $75,000. Is the amount requirement met?','No, the amount must exceed $75,000','Yes, $75,000 is the minimum','Yes, once interest is added','Yes, if the demand is in good faith','§ 1332(a): the amount must exceed $75,000, exclusive of interest and costs.'],
  ok:['* So I’ll ask for $75,001. It’s about the principle.','* And the dollar.'],no:['* Are you sure? I counted with my claws.']}],
 after:['* My new shell is the Idaho shell. I’ll be here a while. Probably.']},
{id:'fish',name:'Swimming Upstream',steps:[
 {npc:'fish',pre:['* blub.','* I got sued in STATE court. On a FEDERAL claim.','* I want to swim upstream into federal court. Who gets to do that?'],
  q:['Who may remove a case from state court to federal court?','Only the defendants','Either party, at any time','Defendants, and plaintiffs facing a counterclaim','Only the state judge, by transfer','§ 1441(a) gives the removal right to defendants only.'],
  ok:['* I’m the defendant! I can do it! blub!'],no:['* blub? that’s fishy.']},
 {npc:'fish',pre:['* I was served on Monday.','* How long do I have to remove?'],
  q:['A defendant generally must remove within:','30 days after receiving the complaint through service','21 days after service','Within one year after the case was filed in state court','Any time before trial','§ 1446(b)(1): 30 days from service of the initial pleading.'],
  ok:['* 30 days. That’s 30 more than my memory span. I’ll write it on a rock.'],no:['* blub... I don’t think so.']},
 {npc:'fish',pre:['* My cousin got sued in IDAHO state court. Diversity case, $200,000.','* He LIVES in Idaho. Can he remove too?'],
  q:['A diversity case is filed in Idaho state court against an Idaho citizen. Can he remove it?','No, the forum defendant rule bars it','Yes, within 30 days','Yes, because the amount exceeds $75,000','Only to a federal court outside Idaho','§ 1441(b)(2): a diversity case can’t be removed if a properly served defendant is a citizen of the forum state.'],
  ok:['* He’ll have to stay in state waters.','* Thanks. blub blub. (That’s fish for “that’s a lot of procedure.”)'],no:['* That doesn’t sound right. He’s a very local fish.']}],
 after:['* I removed! The federal water is colder. Very formal.']},
{id:'bird',name:'Tag, You’re It',steps:[
 {npc:'bird',pre:['* Hi!! I’m visiting from Texas!','* Someone handed me a LAWSUIT at the train station!','* It’s about something that happened back in Texas. Can this town’s court even hear it?'],
  q:['A Texas resident is personally served while briefly visiting another state, in a suit unrelated to the trip. Personal jurisdiction?','Yes, he was served while present in the state','No, the claim is unrelated to the visit','No, he lacks minimum contacts with the state itself','Only if he owns property there','Burnham: in-state service on an individual (tag jurisdiction) supports jurisdiction.'],
  ok:['* Ugh. That’s going on a postcard.'],no:['* Really? That’s not what the brochure said.']},
 {npc:'bird',pre:['* They also sued my COMPANY here. Same Texas thing.','* It’s incorporated in Delaware and run from Texas.','* But we sell a LOT of postcards here! Does that make us “at home”?'],
  q:['Do large sales in a state make a corporation subject to general jurisdiction there?','No, large sales alone don\u2019t make it at home here','Yes, its sales here are substantial and continuous for years','Yes, because its tourist was tagged there','Yes, if the sales exceed half its business','Daimler and BNSF: substantial business alone doesn’t make a corporation at home.'],
  ok:['* Phew! Postcards are safe.'],no:['* Wait, really? We’d be at home everywhere!']},
 {npc:'bird',pre:['* Last one! A customer here bought one of our postcards HERE, and it gave her a paper cut HERE.','* Can she sue the company here?'],
  q:['The claim arises from the company’s own sales in this state. Can the court hear it?','Yes, specific jurisdiction covers it','No, the company isn’t at home here','Only if one of its officers is served here in person','No, only a Texas court can hear it','A claim arising from forum contacts supports specific jurisdiction.'],
  ok:['* Okay. Fair. We’ll add a warning to the postcards.','* “CAUTION: EDGES.”'],no:['* Hmm. I don’t think that’s right.']}],
 after:['* I’m going home soon. I’m never answering the door at a train station again.']},
{id:'statue',name:'Venue-s de Milo',steps:[
 {npc:'statue',pre:['* I AM VENUE-S.','* I HAVE NO ARMS. ONLY OPINIONS ABOUT WHERE THINGS SHOULD BE.','* TWO DEFENDANTS LIVE IN DIFFERENT STATES. THE EVENTS HAPPENED IN UTAH. WHERE IS VENUE PROPER?'],
  q:['Two defendants live in different states. The events happened in Utah. Where is venue proper?','The District of Utah, where the events happened','Either defendant’s home district','Wherever the plaintiff lives','Any district where a defendant is subject to jurisdiction','§ 1391(b)(1) fails (different states), so (b)(2) points to where a substantial part of the events occurred.'],
  ok:['* CORRECT. I WOULD APPLAUD. BUT.'],no:['* NO. I HAVE STOOD HERE FOR 200 YEARS. I KNOW WHERE THINGS GO.']},
 {npc:'statue',pre:['* A CASE SITS IN A PROPER VENUE.','* BUT EVERY WITNESS AND DOCUMENT IS IN ANOTHER DISTRICT, WHERE IT COULD HAVE BEEN FILED.','* WHAT DOES ONE MOVE FOR?'],
  q:['Venue is proper, but another district would be far more convenient. Which motion fits?','Transfer under § 1404(a)','Transfer under § 1406(a)','Dismissal for forum non conveniens','Remand to state court','§ 1404(a) moves a properly venued case for convenience and the interest of justice.'],
  ok:['* YES. I MYSELF WAS TRANSFERRED HERE FROM A MUSEUM. FOR CONVENIENCE.'],no:['* INCORRECT. I WOULD SHAKE MY HEAD. BUT IT IS STONE.']},
 {npc:'statue',pre:['* FINAL QUESTION.','* A CASE IS FILED IN AN IMPROPER VENUE. THE STATUTE OF LIMITATIONS HAS RUN, SO DISMISSAL WOULD END THE CLAIM.','* WHAT MAY THE COURT DO?'],
  q:['Venue is improper, and dismissal would let the limitations period kill the claim. What may the court do?','Transfer under § 1406(a) in the interest of justice','Keep the case, since dismissal would be harsh on the plaintiff','Dismiss with prejudice','Remand the case to state court','§ 1406(a) lets the court transfer instead of dismissing when justice requires.'],
  ok:['* YOU MAY PROCEED.','* I WOULD WAVE. BUT.'],no:['* NO. TRY AGAIN. I HAVE TIME. I AM A STATUE.']}],
 after:['* I AM STILL HERE. THIS IS THE PROPER VENUE FOR ME.']},
{id:'ghost',name:'The Complaint That Haunts',steps:[
 {npc:'ghost',pre:['* ooooooo...','* i am a complaint.','* my whole body says: “Defendant is liable to plaintiff.” that’s it.','* will i survive a motion to dismiss?'],
  q:['A complaint says only, “Defendant is liable to plaintiff,” with no facts. Will it survive a 12(b)(6) motion?','No, bare conclusions don’t make a claim plausible','Yes, notice pleading requires nothing more','Yes, if it states the amount demanded','Only if the defendant can reasonably guess what it means','Twombly and Iqbal: conclusions are set aside; the remaining facts must make the claim plausible.'],
  ok:['* oooo... i need FACTS. who, what, when...'],no:['* ooo... i don’t think that’s how it works anymore...']},
 {npc:'ghost',pre:['* my lawyer added a line: “defendant committed fraud.”','* no who. no what. no when.','* which rule is mad at me now?'],
  q:['A complaint alleges “fraud” without saying who said what, or when. Which rule is the problem?','Rule 9(b)','Rule 8(a)(1)','Rule 10(a)','Rule 12(f)','Rule 9(b) requires fraud and mistake to be pleaded with particularity.'],
  ok:['* particularity... i’ll add the date... and the words...'],no:['* oooo... not that one...']},
 {npc:'ghost',pre:['* the other side served a Rule 11 motion on my lawyer.','* ten days later, he withdrew the bad part.','* can they still file the motion?'],
  q:['A Rule 11 motion is served. Ten days later, the challenged claim is withdrawn. Can the motion now be filed?','No, the withdrawal came within the 21-day safe harbor','Yes, at any time after the motion is served on the lawyer','Yes, but only to recover fees','Only with the court’s permission','Rule 11(c)(2): the movant must wait 21 days; withdrawing within that time avoids the motion.'],
  ok:['* i feel... lighter...','* i’m becoming a well-pleaded complaint. goodbye, ghost life.'],no:['* ooooo... that sounds scary... and wrong...']}],
 after:['* i have facts now. dates. names. i am barely even a ghost anymore.']},
{id:'moth',name:'Overdue Discovery',steps:[
 {npc:'moth',pre:['* shhh. this is a library.','* a patron in a $2,000 case asked to see every book i have lent in ten years.','* it would cost me $50,000 to dig it all out. do i have to?'],
  q:['In a $2,000 case, a party demands ten years of records that would cost $50,000 to produce. Best objection?','The request isn’t proportional to the needs of the case','The records would be inadmissible hearsay at any later trial','The records are automatically privileged','No objection; all relevant material must be produced','Rule 26(b)(1) limits discovery to what is relevant and proportional, considering the amount at stake and the burden.'],
  ok:['* proportional. i like that word. it is very quiet.'],no:['* shhh... that isn’t right.']},
 {npc:'moth',pre:['* a lawyer wrote memos in my reading room. her strategy. her theories of the case.','* the other side wants them. must she hand them over?'],
  q:['A lawyer’s memos with her mental impressions and legal theories, prepared for litigation, are:','Opinion work product, almost always protected','Fully discoverable, like any other document','Discoverable whenever relevant to a claim or defense','Protected only if notarized','Rule 26(b)(3)(B): courts must protect a lawyer’s mental impressions, conclusions, opinions, and legal theories.'],
  ok:['* i’ll keep them on the restricted shelf. next to the dictionaries.'],no:['* hmm. that would make lawyers very nervous.']},
 {npc:'moth',pre:['* now someone has sent me forty interrogatories. without asking the court.','* how many must i answer?'],
  q:['Without leave or agreement, a party may serve how many interrogatories on another party?','25, counting discrete subparts','10, counting discrete subparts','50, counting discrete subparts','As many as are relevant','Rule 33(a)(1): 25 including discrete subparts.'],
  ok:['* twenty-five. i’ll answer them alphabetically.','* thank you. you may now be quiet in my library.'],no:['* shhh. no.']}],
 after:['* shhh. i’m reading the Federal Rules. it is a page-turner.']},
{id:'troll',name:'Troll Toll Joinder',steps:[
 {npc:'troll',pre:['* NOBODY CROSSES MY BRIDGE WITHOUT ANSWERING.','* A GOAT SUED ME OVER A CRASH ON THIS BRIDGE.','* I THINK THE GOAT CAUSED IT. IF I DON’T SUE THE GOAT BACK NOW, CAN I SUE LATER?'],
  q:['A defendant’s claim against the plaintiff arises from the same crash. If she doesn’t assert it now, generally:','It is a compulsory counterclaim and is barred later','It stays available, since counterclaims are optional','It can be raised for the first time on appeal','It becomes a crossclaim automatically','Rule 13(a): a counterclaim from the same transaction or occurrence must be asserted or it is lost.'],
  ok:['* THEN I COUNTERCLAIM. TAKE THAT, GOAT.'],no:['* WRONG. THE BRIDGE STAYS SHUT.']},
 {npc:'troll',pre:['* THE BRIDGE BUILDER MIGHT HAVE TO PAY ME BACK FOR ANYTHING I OWE THE GOAT.','* THE BUILDER IS NOT IN THE CASE. WHAT DO I DO?'],
  q:['The defendant says a nonparty may be liable to her for all or part of what she owes the plaintiff. What can she do?','Implead the nonparty as a third-party defendant','File a crossclaim against the nonparty','Move to dismiss for failure to join a party','Bring statutory interpleader against the nonparty','Rule 14(a): a defendant may bring in a nonparty who may be liable to it for the claim.'],
  ok:['* I WILL IMPLEAD THE BUILDER. HE WILL HATE THAT.'],no:['* NO. THAT IS NOT HOW THE BUILDER GETS IN.']},
 {npc:'troll',pre:['* LAST ONE. THE GOAT IS FROM IOWA. I AM FROM NEBRASKA. IT IS A DIVERSITY CASE.','* THE BUILDER I IMPLEADED IS FROM IOWA.','* NOW THE GOAT WANTS TO SUE THE BUILDER TOO. ALLOWED?'],
  q:['Diversity-only case: plaintiff (Iowa) v. defendant (Nebraska), who impleads a third party (Iowa). The plaintiff sues the third party on a state claim. Supplemental jurisdiction?','No, § 1367(b) bars it','Yes, it is part of the same case or controversy','Yes, if the claim exceeds $75,000','Only if the third party consents','§ 1367(b) bars plaintiffs’ claims against persons made parties under Rule 14 when that would undercut complete diversity.'],
  ok:['* CORRECT.','* YOU MAY CROSS. THE BRIDGE IS OPEN.','* (THE BRIDGE WAS ALWAYS OPEN. I WAS JUST STANDING ON IT.)'],no:['* WRONG. THE GOAT WOULD BE PLEASED. I AM NOT.']}],
 after:['* THE GOAT AND I ARE IN MEDIATION. IT IS GOING POORLY. THE GOAT ATE THE AGENDA.']},
{id:'dog',name:'Good Boy, Final Judgment',steps:[
 {npc:'dog',pre:['* ARF! I’m the clerk of court!','* The judge denied our motion to dismiss. I filed a notice of appeal the NEXT DAY!','* Good boy?'],
  q:['The district court denies a motion to dismiss for failure to state a claim. Can the defendant appeal right away?','No, the denial isn’t a final decision','Yes, motions to dismiss are always appealable','Yes, under § 1292(a)(1)','Yes, if the notice is filed within 30 days','§ 1291 allows appeals from final decisions; a denial of a motion to dismiss isn’t one.'],
  ok:['* ...not a good boy. I’ll withdraw it. *sad tail*'],no:['* ARF? That’s not what my chew toy said.']},
 {npc:'dog',pre:['* We went to trial and lost!','* We never moved for judgment as a matter of law before the jury got the case.','* Can we file a Rule 50(b) motion now?'],
  q:['A party never moved under Rule 50(a) before the case went to the jury. After losing, can it move under Rule 50(b)?','No, a 50(b) motion must renew a 50(a) motion','Yes, as long as it is filed within 28 days after judgment','Yes, but only with the court’s leave','Only in a bench trial','A Rule 50(b) motion renews an earlier 50(a) motion; without one, there is nothing to renew.'],
  ok:['* So we skipped a step. Like skipping dinner. Terrible.'],no:['* Arf... I don’t think that’s right.']},
 {npc:'dog',pre:['* Judgment was entered on June 1. Nobody filed post-trial motions.','* When is our notice of appeal due? Private parties only. No government cats.'],
  q:['Judgment is entered June 1 in a case between private parties, with no post-trial motions. The notice of appeal is due:','Within 30 days, by July 1','Within 60 days, by July 31','Within 14 days, by June 15','Any time before the judgment is paid','FRAP 4(a)(1)(A): 30 days after entry of judgment.'],
  ok:['* July 1! I’ll mark it on my calendar. With my nose.','* GOOD BOY. (me. I mean me.)'],no:['* ARF! No, no.']}],
 after:['* I docketed everything today. Then I docketed a stick.']},
];


/* ---------- questlines: spring semester (harder) ---------- */
const CQUESTS2=[
{id:'goose',name:'The Goose Gets Served',steps:[
 {npc:'goose',pre:['* HONK. Spring semester. New problems.','* The MUFFIN GUILD sued ME. I filed a 12(b)(6) motion. It was denied.','* Now I want to argue the court has no personal jurisdiction over geese.'],
  q:['A defendant’s first Rule 12 motion raised only failure to state a claim. It was denied. Can he now raise lack of personal jurisdiction?','No, it was waived when he left it out of his first Rule 12 motion','Yes, since he hasn’t answered yet','Yes, personal jurisdiction can be raised at any time','Only if the plaintiff doesn’t object to the late defense','Rule 12(g)(2) and (h)(1): personal jurisdiction is waived if left out of the first Rule 12 motion.'],
  ok:['* Waived. Like my feathers in the wind. HONK.'],no:['* HONK? I don’t think the rules are that forgiving.']},
 {npc:'goose',pre:['* The judge denied my motion on March 1.','* When is my answer due now?'],
  q:['A Rule 12 motion is denied on March 1. When is the answer due?','14 days after notice of the ruling','21 days after the complaint was served','21 days after the ruling','30 days after the ruling','Rule 12(a)(4)(A): 14 days after notice of the court’s action.'],
  ok:['* Fourteen days. That’s two weeks. That’s a lot of honking.'],no:['* HONK. That’s not the number.']},
 {npc:'goose',pre:['* I missed it. My calendar got eaten. By me.','* Default was entered against me. But I have a REAL defense. The muffin was fine.'],
  q:['A default has been entered, but no default judgment yet. The goose acts promptly and has a real defense. What should he do?','Move to set aside the entry of default for good cause','Appeal the entry of default right away','Nothing; an entry of default is final','Wait for the default judgment, then file a Rule 60(b) motion within 28 days','Rule 55(c): the court may set aside an entry of default for good cause.'],
  ok:['* Good cause! I have so much cause. All of it good.','* HONK. (thank you, again.)'],no:['* That seems like a bad idea, even for a goose.']}],
 after:['* The Muffin Guild settled. They pay me in muffins. I am conflicted.']},
{id:'snail',name:'Waiver, Slowly',steps:[
 {npc:'snail',pre:['* hello... again...','* this time... the defendant... waived service...','* when... is the answer... due...?'],
  q:['A U.S. defendant signs and returns a waiver of service. When is the answer due?','60 days after the request was sent','21 days after the waiver is signed','30 days after the waiver is returned','90 days after the complaint was filed','Rule 4(d)(3): a defendant who timely returns a waiver gets 60 days from when the request was sent.'],
  ok:['* sixty days... the defendant... is like me... unhurried...'],no:['* no... too fast...']},
 {npc:'snail',pre:['* another defendant... refused to waive...','* for no reason... at all...','* i had to... crawl... all the way... to serve him...'],
  q:['A defendant refuses, without good cause, to sign a properly requested waiver of service. What must the court do?','Make the defendant pay the expenses of formal service','Enter a default against him','Dismiss his defenses','Nothing; waiving service is optional','Rule 4(d)(2): the court must impose the expenses of service on a defendant who fails to waive without good cause.'],
  ok:['* he must... pay... for my... crawling...','* justice... is slow... but it arrives...'],no:['* hmm... i do not... think so...']},
 {npc:'snail',pre:['* last question...','* this case... is in federal court... in idaho... on a state-law claim...','* how does... the court decide... if it can reach... an out-of-state defendant...?'],
  q:['A federal court in Idaho hears a state-law claim. How does it decide whether it has personal jurisdiction over an out-of-state defendant?','Ask whether an Idaho state court could reach the defendant, then check due process','Apply one nationwide federal contacts test','Ask only whether the defendant is a U.S. citizen','Apply the long-arm statute of the defendant’s home state','Rule 4(k)(1)(A): federal courts usually borrow the reach of the forum state’s courts.'],
  ok:['* borrowing... idaho’s reach...','* like borrowing... a shell...'],no:['* no... that does not... sound right...']}],
 after:['* i have served... 3 papers... this semester...','* a personal record...']},
{id:'crab',name:'Shell Company',steps:[
 {npc:'crab',pre:['* click click. I formed an LLC. CRAB SHELLS, LLC.','* It’s organized in Idaho. Its members are me (Idaho) and my cousin (Ohio).','* The LLC wants to sue an Ohio clam. Are we diverse?'],
  q:['An LLC organized in Idaho has members from Idaho and Ohio. It sues an Ohio citizen. Complete diversity?','No, the LLC is also an Ohio citizen through its member','Yes, the LLC is an Idaho citizen only','Yes, an LLC is a citizen where it is organized and headquartered','Only if the Ohio member owns less than half','An LLC takes the citizenship of each of its members.'],
  ok:['* So my cousin ruins everything. Classic cousin.'],no:['* Click? That doesn’t sound right.']},
 {npc:'crab',pre:['* Fine. I’ll sue the clam myself.','* $50,000 for my shell. And $30,000 for something completely different. A rude comment.'],
  q:['One plaintiff sues one defendant on two unrelated claims for $50,000 and $30,000. Is the amount requirement met?','Yes, a single plaintiff may add up claims against a single defendant','No, unrelated claims can’t be added together','No, each claim must exceed $75,000 alone','Only if both claims arise from the same event','A plaintiff can aggregate all claims against one defendant.'],
  ok:['* $80,000! Click click click!'],no:['* Hm. I added it up with my claws, and I don’t think that’s right.']},
 {npc:'crab',pre:['* My friend the starfish (Idaho) joined me against the clam (Ohio). Same events.','* My claim is for $100,000. Hers is only $20,000.','* Can the federal court hear HER claim too?'],
  q:['Two diverse plaintiffs sue an Ohio defendant over the same events. One claims $100,000; the other $20,000. Can the court hear the $20,000 claim?','Yes, through supplemental jurisdiction, since complete diversity exists','No, her claim is below the amount requirement','Only if the two plaintiffs add their claims together','Only if she is joined as a required party under Rule 19','Exxon v. Allapattah: § 1367 covers additional Rule 20 plaintiffs below the amount if complete diversity exists.'],
  ok:['* The starfish is thrilled. She is waving all five arms.'],no:['* That would make the starfish sad.']}],
 after:['* Crab Shells, LLC has been dissolved. My cousin took the shells.']},
{id:'fish',name:'Upstream, Again',steps:[
 {npc:'fish',pre:['* blub. My cousin’s case has been in state court 18 months.','* It wasn’t removable because of a nondiverse defendant. The plaintiff just dropped her, in good faith.','* Can my cousin remove NOW?'],
  q:['A diversity case becomes removable 18 months after filing because a nondiverse defendant was dropped in good faith. Can it be removed?','No, the one-year limit for diversity removals has passed','Yes, within 30 days of the dismissal','Yes, at any time','Only with the plaintiff’s consent','§ 1446(c)(1): diversity cases can’t be removed more than a year after filing, absent bad faith.'],
  ok:['* So he stays in state waters. Forever. Or until judgment.'],no:['* blub? I don’t think so.']},
 {npc:'fish',pre:['* I removed my own case 45 days after service. Oops.','* The plaintiff wants to send it back for being late. When does she have to ask?'],
  q:['A motion to remand based on a procedural defect, like late removal, must be made within:','30 days after the notice of removal is filed','Any time before final judgment','14 days after the notice of removal is filed','One year after the case was filed','§ 1447(c): procedural objections must be raised within 30 days; subject matter jurisdiction can be raised any time.'],
  ok:['* So if she waits too long, I keep my federal water. blub.'],no:['* blub blub. No.']},
 {npc:'fish',pre:['* The federal judge sent ANOTHER case back to state court. No diversity after all.','* The defendant wants to appeal the remand order.'],
  q:['A federal court remands a removed case for lack of subject matter jurisdiction. Can the defendant appeal the remand order?','Generally no','Yes, as a final decision under § 1291','Yes, under § 1292(a)(1) as an injunction','Yes, but only to the state supreme court','§ 1447(d): remand orders based on lack of subject matter jurisdiction are generally not reviewable.'],
  ok:['* So it’s back to state water. No appeals. Just swimming.','* blub blub blub.'],no:['* Hmm. That doesn’t sound fishy enough. I mean right enough.']}],
 after:['* I’ve stopped removing things. I’m just a fish now. It’s nice.']},
{id:'bird',name:'Stream of Postcards',steps:[
 {npc:'bird',pre:['* I’m back! New problem!','* A Texas printer who never did any business here sold postcards to a woman in Texas. She later moved here.','* Now she’s suing the printer here, because she feels the harm here. Can she?'],
  q:['A Texas defendant’s only link to this state is that the plaintiff moved here and feels the harm here. Personal jurisdiction?','No, the defendant’s contacts are with her, not with this state','Yes, she feels the harm here','Yes, it was foreseeable she could move','Only if she was served here','Walden: the plaintiff’s connection to the forum can’t create the defendant’s contacts.'],
  ok:['* So the printer stays safely in Texas. Good for the printer.'],no:['* Really? That seems too easy for her.']},
 {npc:'bird',pre:['* My OWN company advertises and sells postcards all over this state.','* A postcard we first sold in Texas got resold here and hurt a resident. Can she sue us here?'],
  q:['A company widely sells and advertises its postcards in this state. A resident is hurt here by one first sold elsewhere. Specific jurisdiction?','Yes, the claim relates to the company’s business here','No, that postcard was first sold in Texas','No, the company’s contacts didn’t cause the injury','Only if the resident bought it new','Ford: the claim relates to the forum contacts even without strict causation.'],
  ok:['* Ugh. Okay. We’ll put “CAUTION: EDGES” on all of them.'],no:['* I don’t think the court will see it that way.']},
 {npc:'bird',pre:['* Now some tourists from Ohio want to join the case here.','* They bought, used, and got paper cuts from our postcards in OHIO. Can they sue us here too?'],
  q:['Out-of-state plaintiffs who bought and were hurt by the product elsewhere join a suit here. Specific jurisdiction over their claims?','No, their claims have no connection to this state','Yes, the residents’ claims cover them','Yes, the company sells a lot here','Only if the cases are consolidated','Bristol-Myers: each plaintiff’s claim must connect to the forum.'],
  ok:['* So they’ll have to sue in Ohio. Ohio is lovely this time of year. Probably.'],no:['* Hmm. I don’t think they can just tag along.']}],
 after:['* I’m finally going home. Via the train. The train is delayed. Forever.']},
{id:'statue',name:'The Transferor’s Law',steps:[
 {npc:'statue',pre:['* I AM VENUE-S. SPRING EDITION.','* A DEFENDANT TRANSFERS A CASE FROM MISSISSIPPI TO PENNSYLVANIA UNDER § 1404(a).','* WHICH STATE’S CHOICE OF LAW RULES DOES THE NEW COURT USE?'],
  q:['After a defendant’s § 1404(a) transfer from Mississippi to Pennsylvania, which choice of law rules apply?','Mississippi’s, the transferor court’s','Pennsylvania’s, the new forum’s','Federal choice of law rules','Whichever the transferee judge prefers','Van Dusen: the law follows the case after a § 1404(a) transfer.'],
  ok:['* CORRECT. THE LAW TRAVELS. UNLIKE ME.'],no:['* NO. I HAVE BEEN MOVED BEFORE. I KNOW HOW THIS WORKS.']},
 {npc:'statue',pre:['* THE PARTIES AGREED ALL DISPUTES GO TO THE EASTERN DISTRICT OF VIRGINIA.','* THE PLAINTIFF SUES IN TEXAS ANYWAY, WHERE VENUE IS PROPER.','* WHAT HAPPENS?'],
  q:['A valid forum-selection clause names another federal district, but the plaintiff sues where venue is proper. Likely result?','Transfer under § 1404(a), giving the plaintiff’s choice no weight','Dismissal under § 1406(a) for improper venue','The clause is ignored, since venue is proper','Dismissal for lack of subject matter jurisdiction','Atlantic Marine: a valid clause is enforced through § 1404(a) except in unusual cases.'],
  ok:['* YES. A PROMISE IS A PROMISE. EVEN FOR A STATUE.'],no:['* INCORRECT. I WOULD FROWN. I AM ALREADY FROWNING.']},
 {npc:'statue',pre:['* FINAL QUESTION, SPRING TERM.','* FOREIGN PLAINTIFFS SUE HERE OVER A CRASH ABROAD. THE EVIDENCE IS ABROAD.','* THEIR HOME COURTS ARE ADEQUATE, BUT THEIR LAW IS LESS FAVORABLE.'],
  q:['Most evidence is abroad, the foreign forum is adequate, but its law is less favorable to the plaintiffs. Forum non conveniens?','Dismissal is likely; less favorable law usually doesn’t prevent it','Denial is required because the foreign law is worse for them','The court must transfer the case abroad under § 1404(a)','The court must keep the case and apply U.S. law','Piper Aircraft: an unfavorable change in law isn’t usually given substantial weight.'],
  ok:['* YOU MAY PROCEED. I REMAIN. IN THE PROPER VENUE.'],no:['* NO. TRY AGAIN. I WILL BE HERE. FOREVER.']}],
 after:['* SOMEONE PUT A HAT ON ME. I HAVE ALLOWED IT.']},
{id:'ghost',name:'Relation Back From Beyond',steps:[
 {npc:'ghost',pre:['* ooooo... i’m back... as an AMENDED complaint...','* my plaintiff added a new legal theory about the same warehouse fire...','* but the statute of limitations ran out last week... does my new claim relate back...?'],
  q:['After limitations runs, a plaintiff amends to add a new legal theory based on the same fire. Does it relate back?','Yes, it arises from the same conduct, transaction, or occurrence','No, new legal theories never relate back','Only if the defendant consents to the amendment','Only if filed within 21 days of the original complaint','Rule 15(c)(1)(B): same conduct, transaction, or occurrence.'],
  ok:['* i live again... technically... as of the original filing date...'],no:['* oooo... that would be the end of me...']},
 {npc:'ghost',pre:['* now we sued the WRONG company. a related one, with almost the same name.','* the right company knew all along, within the service period, that we meant to sue it.','* can we swap it in... after limitations...?'],
  q:['The plaintiff named the wrong, related company. The right company knew within the 4(m) period that it would have been sued but for a mistake. Relation back?','Yes, the focus is what the new defendant knew or should have known','No, the plaintiff should have known the right name','No, new defendants never relate back','Only if the plaintiff acted with diligence','Krupski: the question is what the new party knew, not what the plaintiff knew.'],
  ok:['* oooooo... spooky, but correct...'],no:['* oooo... the court would disagree...']},
 {npc:'ghost',pre:['* last one... we want to amend AGAIN, the day before trial, adding claims that need new discovery...','* will the judge let us?'],
  q:['A plaintiff seeks leave to amend the day before trial, adding claims that need new discovery. Likely result?','Leave may be denied for undue delay and prejudice','Leave must be granted, since it is freely given','The amendment takes effect automatically','The court must dismiss the whole case for delay','Leave is freely given when justice requires, but delay, bad faith, prejudice, or futility can justify denial.'],
  ok:['* i’ll rest now... as a well-pleaded, timely complaint...','* goodbye... for real this time... probably...'],no:['* ooooo... the other side would be furious...']}],
 after:['* i’m not haunting anymore. i’m just... pending.']},
{id:'moth',name:'The Expert Who Never Testifies',steps:[
 {npc:'moth',pre:['* shhh. a defendant hired an expert just to advise its lawyers. she won’t testify.','* the other side wants to depose her. in my library.'],
  q:['A party’s retained expert will only consult and won’t testify. Can the other side depose her?','Only in exceptional circumstances','Yes, any retained expert may be deposed','Yes, if she wrote any report','Never, under any circumstances','Rule 26(b)(4)(D): non-testifying experts are discoverable only in exceptional circumstances.'],
  ok:['* exceptional circumstances. like a moth in a library. very rare.'],no:['* shhh. not correct.']},
 {npc:'moth',pre:['* a party accidentally produced a privileged memo. they noticed right away and told the other side.','* what must the other side do?'],
  q:['A party mistakenly produces a privileged memo and promptly notifies the receiving party. What must the receiving party do?','Return, sequester, or destroy it until the claim is resolved','Nothing; the privilege is waived and it may be used freely','File it with the court for public review','Use it only at trial, not in discovery','Rule 26(b)(5)(B): the claw-back procedure.'],
  ok:['* return it. quietly. like a library book.'],no:['* that would be very rude. shhh.']},
 {npc:'moth',pre:['* a party never disclosed a key witness. now, at trial, they want to call him.','* what usually happens?'],
  q:['A party failed to disclose a witness as Rule 26(a) requires. At trial, it wants to call him. Usually:','It can’t use him, unless the failure was justified or harmless','The whole case is dismissed automatically','It may call him, but must pay a small fine','The court must grant a new trial','Rule 37(c)(1): exclusion is the usual consequence.'],
  ok:['* undisclosed things stay unread. that’s library policy too.','* thank you. you may now continue being quiet.'],no:['* shhh. wrong.']}],
 after:['* i’ve started a book club. we only read the Advisory Committee Notes.']},
{id:'troll',name:'Interpleader Bridge',steps:[
 {npc:'troll',pre:['* NOBODY CROSSES WITHOUT ANSWERING. SPRING RULES.','* I HOLD $1,000 IN TOLLS. AN IOWA GOAT AND A NEBRASKA GOAT BOTH SAY IT’S THEIRS.','* I AM FROM IOWA. CAN I USE STATUTORY INTERPLEADER?'],
  q:['A stakeholder holds $1,000 claimed by an Iowa citizen and a Nebraska citizen. Statutory interpleader under § 1335?','Yes: $500 or more and minimal diversity among the claimants','No, the amount must exceed $75,000','No, the stakeholder shares citizenship with a claimant','Only Rule 22 interpleader is available','§ 1335 requires $500 or more and minimal diversity among adverse claimants.'],
  ok:['* GOOD. THE GOATS CAN FIGHT EACH OTHER. NOT ME.'],no:['* WRONG. THE GOATS GROW RESTLESS.']},
 {npc:'troll',pre:['* MY SISTER CO-OWNS THIS BRIDGE. SHE IS NOT IN THE CASE.','* A GOAT SUES ME OVER WHO OWNS THE BRIDGE. A RULING COULD HURT HER SHARE.','* IS SHE A REQUIRED PARTY?'],
  q:['A suit over title to property could impair an absent co-owner’s rights. Is she a required party?','Likely yes, under Rule 19(a)(1)(B)','No, she isn’t named in the suit','No, only the parties’ rights matter','Only if she lives in the forum state','Rule 19(a)(1)(B)(i): a person whose interest may be impaired is required if feasible.'],
  ok:['* THEN SHE MUST BE JOINED. SHE WILL BE ANNOYED. SHE IS ALWAYS ANNOYED.'],no:['* NO. MY SISTER WOULD DISAGREE. LOUDLY.']},
 {npc:'troll',pre:['* A THIRD GOAT WANTS TO INTERVENE AS OF RIGHT.','* IT HAS AN INTEREST, AND THE CASE COULD HURT IT. WHAT ELSE DOES IT NEED?'],
  q:['Besides an interest that the case may impair, intervention of right requires:','A timely motion and inadequate representation by existing parties','The consent of every existing party','Diversity between the intervenor and every party','Nothing else; an interest is enough','Rule 24(a)(2): timeliness, interest, impairment, and inadequate representation.'],
  ok:['* CORRECT. YOU MAY CROSS.','* (THE BRIDGE IS STILL OPEN. I AM STILL STANDING ON IT. SORRY.)'],no:['* WRONG. THE THIRD GOAT LAUGHS AT YOU.']}],
 after:['* THE GOATS FORMED A UNION. I RESPECT IT.']},
{id:'dog',name:'Final Judgment, Final Answer',steps:[
 {npc:'dog',pre:['* ARF! A case has three claims.','* The judge entered judgment on just one, and expressly found there’s no just reason for delay.','* Can that one be appealed now?'],
  q:['The court enters judgment on one of three claims and expressly finds no just reason for delay. Appealable now?','Yes, under Rule 54(b)','No, the whole case must be finished','Only with § 1292(b) certification','Only by a writ of mandamus','Rule 54(b) permits final judgment on fewer than all claims with that express finding.'],
  ok:['* Arf arf! Partial final judgment! Like a partial biscuit!'],no:['* ARF? No...']},
 {npc:'dog',pre:['* A government official claimed immunity from suit. The judge denied it, on a purely legal question.','* Can she appeal right away, or wait for the end?'],
  q:['A court denies an official’s claim of immunity from suit on a purely legal question. Can she appeal immediately?','Yes, under the collateral order doctrine','No, she must wait for final judgment','Only if the judge certifies it under § 1292(b)','Only after a jury verdict','Immunity from suit would be lost if review waited, so the collateral order doctrine allows an immediate appeal.'],
  ok:['* Collateral! Like a dog collar! I’ll remember that.'],no:['* Arf... that doesn’t sound right.']},
 {npc:'dog',pre:['* After a bench trial, the judge believed one witness over another.','* The loser appeals, saying the judge got it wrong. How hard will the appeals court look?'],
  q:['On appeal from a bench trial, a judge’s finding about which witness to believe is reviewed for:','Clear error','De novo','Plain error, only if objected to','Abuse of discretion on all issues','Rule 52(a)(6): findings of fact are reviewed for clear error, with special deference to credibility.'],
  ok:['* Clear error! Very deferential. Like me to anyone holding a snack.','* GOOD BOY. (still me.)'],no:['* ARF! No, no.']}],
 after:['* I got promoted to Chief Deputy Clerk. I still chase my tail. Professionally.']},
];

/* ---------- state ---------- */
const CM={say:null,ask:null,menu:null,held:[],raf:0,last:0,mov:null,mus:'town',mi:0,np:{},fade:null,dungeon:false,fx:0,bump:0};
function cS(){
  if(!S.camp)S.camp={};const c=S.camp,fresh=c.v!==2;
  const d={x:24,y:18,dir:'up',map:'town',qs:{},qs2:{},items:[],eq:[],beat:{},beat2:{},vend:0,intro:0,won1:0,won2:0,sem:1,talk:{},v:2};
  for(const k in d)if(c[k]==null)c[k]=JSON.parse(JSON.stringify(d[k]));
  // saves from build 19 used a smaller map and a single "won" flag
  if(fresh||!CMAPS[c.map]){c.v=2;c.map='town';c.x=24;c.y=18;c.dir='up'}
  if(c.won&&!c.won1){c.won1=1;c.sem=2;c.migrated=1;if(!c.items.includes('redpen'))c.items.push('redpen')}
  delete c.won;return c}
const SEM=()=>cS().sem===2?2:1;
const QL=()=>SEM()===2?CQUESTS2:CQUESTS;
const QK=()=>SEM()===2?'qs2':'qs';
const BK=()=>SEM()===2?'beat2':'beat';
const STU=()=>SEM()===2?CSTU2:CSTU;
const cQ=id=>QL().find(q=>q.id===id);
const cDone=id=>(cS()[QK()][id]||0)>=cQ(id).steps.length;
const cDoneN=()=>QL().filter(q=>cDone(q.id)).length;
const cHas=it=>cS().items.includes(it);
const cEq=it=>cS().eq.includes(it);
const cSlots=()=>SEM()===2?3:2;
function cGive(it){const c=cS();if(c.items.includes(it))return [];c.items.push(it);let auto=false;if(c.eq.length<cSlots()){c.eq.push(it);auto=true}save();
  return [[null,`* You got the ${CITEMS[it].n}!`],[null,'* '+CITEMS[it].d],...(auto?[]:[[null,'* (Your hands are full. Swap it in from the bag: X or ☰.)']])]}
const cHere=n=>n.map===cS().map&&(!n.sem||n.sem===SEM());
function cNpcInit(){CNPC.forEach(n=>{if(!CM.np[n.id])CM.np[n.id]={x:n.x,y:n.y,wi:0,wait:600+Math.random()*1500,mv:null,dir:'down'}});cTrollFix()}
function cTrollFix(){const t=CM.np.troll;if(!t)return;const [x,y]=cDone('troll')?[25,26]:[23,27];if(!t.mv){t.x=x;t.y=y}}
function cNpcAt(x,y){return CNPC.find(n=>{if(!cHere(n))return false;const p=CM.np[n.id];return p&&p.x===x&&p.y===y})}
function cPlayerAt(x,y){const c=cS();return (c.x===x&&c.y===y)||(CM.mov&&CM.mov.x===x&&CM.mov.y===y)}
function cWalkable(x,y){const T=cMapT();if(y<0||x<0||y>=T.length||x>=T[0].length)return false;return CWALKS.includes(T[y][x])}
function cWalk(x,y){return cWalkable(x,y)&&!cNpcAt(x,y)}
function cMark(n){if(n.stu)return cS()[BK()][n.stu]?'':'duel';if(n.id==='peterson')return cDoneN()>=10&&!cS()['won'+SEM()]?'duel':'';return cStepFor(n.id)?'!':''}
function cStepFor(id){for(const q of QL()){const i=cS()[QK()][q.id]||0;if(i<q.steps.length&&q.steps[i].npc===id)return {q,i}}return null}

/* ---------- entering, leaving, moving between maps ---------- */
function campEnter(){const c=cS();CM.say=CM.ask=CM.menu=null;CM.held=[];CM.mov=null;CM.fade=null;CM.dungeon=false;cNpcInit();CM.mus=CMAPS[c.map].mus;V='camp';render();
  if(!c.intro){c.intro=1;save();campSay([[null,'* You wake up on a bench.'],[null,'* The air smells like toner and anxiety.'],[null,'* Welcome to CIV PRO PREFECTURE.'],[null,'* It is the night before finals. It has been the night before finals for a while now.'],['syl','* Psst. Over here. I’m THE SYLLABUS. Talk to me.']])}
  else if(c.migrated){delete c.migrated;save();campSay([[null,'* The town has grown since you last visited.'],[null,'* You passed the fall final, so PETERSON’S RED PEN is in your bag.'],[null,'* SPRING SEMESTER is underway. Everyone has new, harder problems.']])}}
function campLeave(){save();CM.say=CM.ask=CM.menu=null;if(CM.raf){cancelAnimationFrame(CM.raf);CM.raf=0}go('title')}
function campWarp(map,x,y,dir){CM.fade={t:0,d:420,mid:()=>{const c=cS();c.map=map;c.x=x;c.y=y;c.dir=dir;CM.mov=null;cTrollFix();CM.mus=CMAPS[map].mus;if(map!=='class')CM.dungeon=false;musSync();campHUD();save()}}}
function campEnterDoor(x,y){const k=CDOORS[x+','+y];if(!k)return false;
  if(k==='class'&&cDoneN()<10&&!cS()['won'+SEM()]){if(performance.now()-CM.bump>900){CM.bump=performance.now();campSay([[null,'* The door to the LAW SCHOOL is locked.'],[null,`* A note: “FINALS OPEN WHEN THE TOWN’S PROCEDURE IS IN ORDER.” (${cDoneN()}/10)`]])}return true}
  const T=CMAPS[k].t,ex=T[T.length-1].indexOf('X');campWarp(k,ex,T.length-2,'up');return true}
function campExit(){const c=cS(),M=CMAPS[c.map],[dx,dy]=M.door[0];campWarp('town',dx,dy+1,'down')}

/* ---------- view ---------- */
function campHUD(){const pr=document.getElementById('cprob');if(pr)pr.textContent=cDoneN();const pl=document.getElementById('cplace');if(pl)pl.textContent=CMAPS[cS().map].name;const sm=document.getElementById('csem');if(sm)sm.textContent=SEM()===2?'SPRING SEMESTER':'FALL SEMESTER'}
function campRender(){
  app.innerHTML=`<div class="camp"><div class="chud"><span><b id="cplace">${esc(CMAPS[cS().map].name)}</b> <span class="dim">· <span id="csem">${SEM()===2?'SPRING SEMESTER':'FALL SEMESTER'}</span> · campaign (experimental)</span></span><span>PROBLEMS <b id="cprob" style="color:inherit">${cDoneN()}</b>/10 · <button class="lnk" data-act="camp" data-v="menu" id="cmenu">☰ bag &amp; quests</button> · <button class="lnk" data-act="camp" data-v="leave" id="cleave">save &amp; quit</button></span></div>
  <div class="cwrap"><canvas id="cv" width="${CVW*CT}" height="${CVH*CT}" aria-label="Town map. Use arrow keys or WASD to walk, Z or Enter to talk."></canvas><div id="cov"></div></div>
  <div class="cpad" aria-label="Touch controls"><div class="dpad"><button data-dir="up" aria-label="up">▲</button><button data-dir="left" aria-label="left">◀</button><button data-dir="right" aria-label="right">▶</button><button data-dir="down" aria-label="down">▼</button></div><div class="ab"><button data-act="camp" data-v="b" class="bbtn" aria-label="menu">B</button><button data-act="camp" data-v="a" class="abtn" aria-label="talk">A</button></div></div>
  <p class="dim ckeys">Move <kbd>↑↓←→</kbd>/<kbd>WASD</kbd> · talk <kbd>Z</kbd>/<kbd>Enter</kbd> · bag <kbd>X</kbd>/<kbd>Esc</kbd> · walk into doors to go inside</p></div>`;
  campOv();
  app.querySelectorAll('.dpad [data-dir]').forEach(b=>{const d=b.dataset.dir;const on=e=>{e.preventDefault();campHold(d,true)},off=e=>{e.preventDefault();campHold(d,false)};b.addEventListener('pointerdown',on);['pointerup','pointerleave','pointercancel'].forEach(t=>b.addEventListener(t,off))});
  if(!CM.raf){CM.last=performance.now();CM.raf=requestAnimationFrame(campFrame)}
}
function campHold(d,on){CM.held=CM.held.filter(x=>x!==d);if(on)CM.held.push(d)}
const cPort=id=>{const n=CNPCBY[id];if(!n)return '';return spr(n.s,n.c)};
function campOv(){const el=document.getElementById('cov');if(!el)return;campHUD();
  const wr=el.parentNode;if(wr)wr.classList.toggle('asking',!!(CM.ask||CM.menu));
  if(CM.ask){const A=CM.ask;el.innerHTML=`<div class="cask"><div class="cq">${A.title?`<small>${esc(A.title)}</small>`:''}${esc(A.q)}</div>${A.opts.map((o,i)=>`<button class="copt ${i===A.sel?'on':''}" data-act="camp" data-v="pick:${i}" id="copt${i}"><span class="ht" aria-hidden="true">${i===A.sel?'❤':''}</span><span>${esc(o.t)}</span></button>`).join('')}</div>`;return}
  if(CM.say){const L=CM.say.lines[CM.say.i],who=L[0]?CNPCBY[L[0]]:null;el.innerHTML=`<div class="cdlg ${who?'':'nar'}" data-act="camp" data-v="adv">${who?`<div class="cport">${cPort(L[0])}</div>`:''}<div><div class="cwho">${who?esc(who.n):''}</div><div class="ctxt" id="ctxt">${esc(L[1].slice(0,CM.say.ch))}</div></div><span class="cmore" id="cmore" style="visibility:${CM.say.ch>=L[1].length?'visible':'hidden'}">▼</span></div>`;return}
  if(CM.menu){el.innerHTML=campMenuV();return}
  el.innerHTML='';
}
function campMenuV(){const c=cS(),tab=CM.menu.tab,items=Object.keys(CITEMS).filter(cHas),left=Object.keys(CITEMS).length-items.length;
  const body=tab==='bag'?(items.length?items.map((k,i)=>{const it=CITEMS[k],on=cEq(k);return `<div class="citem ${CM.mi===i?'sel':''}"><span class="cic">${spr(it.s,it.c)}</span><div><b>${esc(it.n)}</b>${on?' <span class="good">· equipped</span>':''}<div class="dim">${esc(it.d)}</div></div><button class="btn ${on?'':'gold'}" data-act="camp" data-v="eq:${k}" id="ceq-${k}">${on?'UNEQUIP':'EQUIP'}</button></div>`}).join(''):'<p class="dim">* Your bag is empty. It is a very nice bag, though.</p>')+`<p class="dim" style="margin:8px 0 0">Equipped ${c.eq.length}/${cSlots()}${SEM()===1?' (3 slots in the spring)':''}. Items only work in campaign matches. ${left} item${left===1?'':'s'} still out there.</p>`
   :QL().map(q=>{const i=c[QK()][q.id]||0,d=i>=q.steps.length,n=CNPCBY[q.steps[Math.min(i,q.steps.length-1)].npc];return `<div class="cql ${d?'done':''}"><b>${d?'✔':i?'…':'·'} ${esc(q.name)}</b> <span class="dim">${d?'solved':i?`step ${i+1}/3 · talk to ${esc(n.n)}`:'not started'}</span></div>`}).join('')
     +`<div class="cql"><b>${Object.keys(STU()).every(k=>c[BK()][k])?'✔':'·'} Student duels</b> <span class="dim">${Object.keys(STU()).filter(k=>c[BK()][k]).length}/${Object.keys(STU()).length} won</span></div><div class="cql"><b>${c['won'+SEM()]?'✔':'·'} ${SEM()===2?'Spring':'Fall'} final</b> <span class="dim">${cDoneN()>=10?(c['won'+SEM()]?'passed':'the LAW SCHOOL is open'):'opens when all 10 problems are solved'}</span></div>`;
  return `<div class="cmenu"><div class="row" style="margin:0 0 10px"><button class="btn ${tab==='bag'?'gold':''}" data-act="camp" data-v="tab:bag" id="ctab-bag">BAG</button><button class="btn ${tab==='q'?'gold':''}" data-act="camp" data-v="tab:q" id="ctab-q">QUESTS</button><button class="btn" data-act="camp" data-v="close" id="cclose">CLOSE ✕</button></div>${body}</div>`}

/* ---------- dialogue (Undertale style) ---------- */
function campSay(lines,then){CM.say={lines,i:0,ch:0,then};campOv();campType()}
function blip(v){if(!MUS.ctx||musVol()===0||MUS.ctx.state!=='running')return;const c=MUS.ctx,o=c.createOscillator(),g=c.createGain();o.type='square';o.frequency.value=v;g.gain.setValueAtTime(.12,c.currentTime);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+.045);o.connect(g);g.connect(MUS.master);o.start();o.stop(c.currentTime+.05)}
function campType(){const D=CM.say;if(!D||V!=='camp')return;const L=D.lines[D.i][1];
  if(D.ch<L.length){const step=S.settings.text===2?L.length:S.settings.text===1?2:1;D.ch=Math.min(L.length,D.ch+step);const t=document.getElementById('ctxt');if(t)t.textContent=L.slice(0,D.ch);
    if(D.ch%3===0&&/[a-z0-9]/i.test(L[D.ch-1]||'')){const n=D.lines[D.i][0];blip(n&&CNPCBY[n]?CNPCBY[n].v:420)}
    setTimeout(campType,/[.,!?]/.test(L[D.ch-1]||'')?90:30)}
  else{const m=document.getElementById('cmore');if(m)m.style.visibility='visible'}}
function campAdv(){const D=CM.say;if(!D)return;const L=D.lines[D.i][1];if(D.ch<L.length){D.ch=L.length;campOv();return}
  D.i++;D.ch=0;if(D.i>=D.lines.length){CM.say=null;campOv();if(D.then)D.then();return}campOv();campType()}
function campAsk(q,title,opts,cb){CM.ask={q,title,opts,sel:0,cb};campOv()}
function campPick(i){const A=CM.ask;if(!A)return;CM.ask=null;campOv();A.cb(i,A.opts[i])}

/* ---------- talking ---------- */
const nar=t=>[null,t];
function campTalk(n){
  const c=cS();c.talk[n.id]=(c.talk[n.id]||0)+1;const p=CM.np[n.id];
  // turn to face the player, Pokemon style
  if(p&&!p.mv){if(c.x<p.x)p.dir='left';else if(c.x>p.x)p.dir='right'}
  if(n.stu)return campStudent(n);
  if(n.id==='peterson')return campProf();
  if(n.id==='syl')return campSay([[n.id,'* I am THE SYLLABUS. I contain everything. Nobody reads me.'],[n.id,`* ${SEM()===2?'Spring':'Fall'} semester. Problems solved: ${cDoneN()} of 10.${cDoneN()>=10?' The LAW SCHOOL is open. Go north. Good luck. I mean it.':' Look for townsfolk with a ! over their heads. Some are indoors. Walk into a door to go in.'}`],[n.id,`* Students with a sword over their heads want to duel. Winning gets you items.${SEM()===2?' A new 3L is lurking at the COURTHOUSE.':''}`],[n.id,`* Press X or tap ☰ to equip up to ${cSlots()} items. They only work in matches here.`]]);
  if(n.id==='vend')return campVend(n);
  if(n.idle){const L=n.idle[(c.talk[n.id]-1)%n.idle.length];return campSay(L.map(t=>[n.id,t]))}
  const st=cStepFor(n.id);
  if(st)return campStep(st.q,st.i);
  const q=QL().find(q=>q.steps.some(s=>s.npc===n.id));
  if(q&&cDone(q.id)&&q.steps[0].npc===n.id)return campSay(q.after.map(t=>[n.id,t]));
  if(n.id==='baker')return campSay(q&&cDone(q.id)?[[n.id,'* The goose sent me a card. It just says HONK.'],[n.id,'* I\u2019ve framed it.']]:[[n.id,'* Fresh bread! Well. Bread.'],[n.id,'* Some goose has been glaring at my shop all morning.']]);
  return campSay([[n.id,'* ...']]);
}
function campStep(q,i){const st=q.steps[i],n=st.npc;
  campSay(st.pre.map(t=>[n,t]),()=>{
    const [qq,a,...rest]=st.q,e=rest[3],opts=shuf([{t:a,ok:true},{t:rest[0]},{t:rest[1]},{t:rest[2]}]);
    campAsk(qq,`${q.name} · ${i+1}/${q.steps.length}${SEM()===2?' · spring':''}`,opts,(k,o)=>{
      S.answered++;
      if(o.ok){S.right++;cS()[QK()][q.id]=i+1;save();const fin=i+1>=q.steps.length;if(q.id==='troll')cTrollFix();
        const tail=fin?[nar('* QUEST COMPLETE: '+q.name.toUpperCase()+'.'),...(cDoneN()===10?[nar('* Somewhere up north, a heavy door unlocks.'),nar('* The LAW SCHOOL is open. Finals await.')]:cDoneN()===3&&!cHas('coffee')?[nar('* (Somewhere near the plaza, a vending machine hums meaningfully.)')]:[])]:[];
        campSay([nar('* (Correct.) '+e),...st.ok.map(t=>[n,t]),...tail],()=>{if(q.id==='troll'&&fin)cTrollFix()});
      }else campSay([...st.no.map(t=>[n,t]),nar('* (Not quite. Talk to them again to try once more.)')]);
    })});
}
function campVend(n){const c=cS();
  if(cHas('coffee'))return campSay([[n.id,'* VENDY IS EMPTY. VENDY GAVE YOU EVERYTHING.'],[n.id,'* VENDY IS AT PEACE.']]);
  const done=cS().qs?CQUESTS.filter(q=>(c.qs[q.id]||0)>=3).length:0;
  if(done>=3||SEM()===2)return campSay([[n.id,'* OH! YOU’RE THE ONE HELPING EVERYONE.'],[n.id,'* VENDY HAS BEEN SAVING THIS. FOR A HERO. OR A 1L.'],...cGive('coffee')]);
  const L=[[[n.id,'* HELLO. I AM VENDY. I SELL ONLY COLD BREW.'],[n.id,'* YOU HAVE NO MONEY. YOU ARE A LAW STUDENT.']],[[n.id,'* STOP SHAKING VENDY.'],[n.id,'* VENDY IS JUDGING YOU. VENDY IS A VERY HARSH GRADER.']],[[n.id,'* FINE PRINT: “FREE FOR ANYONE WHO HAS HELPED THREE TOWNSFOLK.”'],nar(`* (You have helped ${done}.)`)]];
  c.vend=(c.vend||0)+1;save();campSay(L[Math.min(2,c.vend-1)]);
}
function campStudent(n){const k=n.stu,D=STU()[k],c=cS();
  if(c[BK()][k])return campSay(D.after);
  campSay(D.pre,()=>campAsk(`${D.n} wants to duel.`,'',[{t:'DUEL'},{t:'NOT NOW'}],i=>{if(i===0)campMatch(k);else campSay([[n.id,'* oh. okay. i’ll be here. studying. forever.']])}));
}
function campProf(){const c=cS(),P='peterson',sem=SEM(),won=c['won'+sem];
  if(cDoneN()<10&&!won)return campSay([[P,'* The exam isn’t ready yet. Neither, I suspect, are you.']]);
  const pre=won?[[P,'* Back again? The exam is the same. You are not.'],[P,'* Care to retake it? For fun. Nothing is on the line. Except pride.']]
   :sem===1?[[P,'* Ah. You made it.'],[P,'* The whole town says you’ve been... helpful. Goose included.'],[P,'* Your classmates are here too. Everyone sits the same final.'],[P,'* When I get on a roll, I review my notes. It does wonders for my stamina.'],nar('* (PROF. PETERSON heals 1 life for each right answer during a streak, up to 5.)'),[P,'* And like you, a good streak shields me from my own mistakes.'],nar('* (His streak gives him a shield, just like yours.)'),[P,'* Shall we begin?']]
   :[[P,'* Spring term. The questions are harder. So am I.'],[P,'* Four classmates this time. And I’ve been reviewing my notes all semester.'],nar('* (PROF. PETERSON: heals on streaks, shields on streaks, and answers sharper than ever.)'),[P,'* Ready?']];
  campSay(pre,()=>campAsk('Take the final?','',[{t:won?'RETAKE THE FINAL':'TAKE THE FINAL'},{t:'NOT YET'}],i=>{if(i!==0)return campSay([[P,'* Office hours are always open. Well. Tuesdays.']]);campDungeon()}));
}
// the classroom becomes a dungeon
function campDungeon(){const P='peterson';CM.dungeon=true;CM.fx=1;CM.mus='dungeon';musSync();
  setTimeout(()=>campSay([nar('* The lights flicker.'),nar('* The desks sink into the floor. The walls turn to stone.'),nar('* The chalkboard writes by itself: FINAL EXAM.'),[P,'* Pencils down.'],[P,'* Hearts up.']],()=>campMatch('final')),900)}
function campTile(x,y){const c=cS(),T=cMapT(),t=T[y][x];
  const SIGN={'town:21,7':['* LAW SCHOOL. FINALS IN PROGRESS SINCE TIME BEGAN.'],'town:8,11':['* LIBRARY. SILENCE IS NOT A WAIVER.'],'town:36,11':['* COURTHOUSE. ALL RISE. ALL SIT. ALL RISE AGAIN.'],'town:37,21':['* BAKERY. NOW SERVING: CROISSANTS OF NOTICE.'],'town:43,15':['* PREFECTURE STATION. NEXT TRAIN: WHEN THE CASE IS RIPE.'],'town:22,26':['* BRIDGE MAINTAINED BY A TROLL. ALL TOLLS FINAL.','* NO REFUNDS. NO APPEALS.'],'town:18,30':['* PREFECTURE GRAVEYARD.','* RESTING PLACE OF CLAIMS THAT RAN OUT OF TIME.']};
  if(t==='S'){const m=SIGN[c.map+':'+x+','+y]||['* CIV PRO PREFECTURE. POP.: SEVERAL PARTIES, SOME INDISPENSABLE.'];return campSay(m.map(nar))}
  if(t==='D')return campEnterDoor(x,y);
  if(t==='h'){if(cHas('pamph'))return campSay([nar('* An empty hollow log. It smells like old outlines.')]);return campSay([nar('* There’s something wedged inside the log.'),nar('* It’s a RULES PAMPHLET. Somebody highlighted the entire thing.'),...cGive('pamph')])}
  const F={f:['* A fountain. People throw coins in and wish for a curve.'],'~':['* The water moves at a reasonable speed.'],g:['* HERE LIES A CLAIM. IT WAITED TOO LONG.','* HERE LIES A COUNTERCLAIM. IT WAS COMPULSORY. NOBODY BROUGHT IT.','* HERE LIES THE “NO SET OF FACTS” TEST. 1957–2007.'][(x+y)%3],
   x:['* A mailbox. Someone mailed an acceptance. It’s already effective. (Wrong class.)'],M:['* A market stall. Everything is priced at $75,000.01.'],c:['* A crate labeled EXHIBIT A.'],n:['* A bench. Perfect for a bench trial.'],p:['* A planter full of reasonable flowers.'],l:['* A flag. It has never been waived.'],t:['* Train tracks. The train is delayed. The train is always delayed.'],
   q:['* A shelf of casebooks. One is titled PENNOYER v. NEFF: THE MUSICAL.','* A row of treatises. Each one weighs as much as a small dog.','* The Federal Rules, in 14 editions. They all say almost the same thing.'][(x*3+y)%3],
   O:['* An oven. It is warmer than the potato. Barely.'],C:['* A counter. Polished. Possibly sanctioned.'],y:['* A table. Someone carved “IQBAL WAS HERE” into it.'],a:['* A chair. It has been cold-called.'],z:['* A potted plant. It is thriving. It has never taken an exam.'],
   d:['* A desk. Someone wrote the forum defendant rule on it in tiny letters.'],e:CM.dungeon?['* The chalkboard glows: FINAL EXAM. NO CURVE. (THERE IS A CURVE.)']:['* The chalkboard says: SUBJECT MATTER JURISDICTION FIRST. ALWAYS.'],j:['* The lectern. A potato sits on it, glowing.'],J:['* The judge’s bench. It is very high. Intimidatingly high.'],E:['* A bed. It looks like it hasn’t been slept in since orientation.'],v:['* A bag of rice labeled “EMERGENCY STUDY FOOD.”'],Q:['* A window. Outside, the town is busy being procedural.'],K:[],U:['* Marble columns. They support the courthouse and nothing else.']};
  let m=F[t];if(typeof m==='string')m=[m];if(m&&m.length)return campSay(m.map(nar));
}

/* ---------- matches ---------- */
function campMatch(kind){
  const c=cS(),eq=c.eq,fin=kind==='final',sem=SEM();
  const me=mkPlayer({...meP(),lives:(fin?5:3)+(eq.includes('outline')?2:0)});
  if(eq.includes('buckler')){me.ward=1;me.stk=2}
  if(eq.includes('gavel'))me.gavel=1;
  if(eq.includes('coffee'))me.tmul=1.5;
  if(eq.includes('pamph'))me.hint=1;
  if(eq.includes('redpen'))me.pen=1;
  if(eq.includes('cards'))me.noTO=1;
  if(eq.includes('medal'))me.streak=true;
  if(eq.includes('cert'))me.cert=1;
  const sup=eq.includes('supp')?.1:0;
  const stu=k=>{const D=STU()[k];return mkPlayer({id:'bot_'+k,n:D.n,s:D.s,c:D.c,lives:D.lives,cpu:{n:D.n,s:D.s,c:D.c,acc:Math.max(.3,D.acc-sup),spd:D.spd,right:D.right,wrong:D.wrong,life:D.life,streak:D.streak,elim:D.elim}})};
  let ps,label,topics=null,mus='duel';
  if(fin){const pr=CPU.peterson,prof=mkPlayer({id:'bot_peterson',n:pr.n,s:pr.s,c:pr.c,lives:5,cpu:{...pr,acc:Math.max(.3,(sem===2?.93:.89)-sup),spd:sem===2?1.25:1.1,heal:1,shield:1}});
    const cls=Object.keys(STU()).map(stu);ps=[me,cls[0],prof,...cls.slice(1)];label=sem===2?'SPRING FINAL · PROF. PETERSON':'FALL FINAL · PROF. PETERSON';mus='boss'}
  else{ps=[me,stu(kind)];label=STU()[kind].label;topics=STU()[kind].topics}
  G=newG({mode:'story',world:'cp',floor:0,players:ps,camp:{kind,label,topics,mus,boss:fin}});
  CM.say=CM.ask=CM.menu=null;CM.held=[];CM.mov=null;
  V='game';newTopic();render();startLoop();
}
// called from startTurn after the timer is set
function campTurn(p){if(!isMe(p))return;if(p.tmul)G.timer=Math.round(G.timer*p.tmul);
  if(p.hint){const q=G.q;if(q.hinted!==G.turnId){const wr=q.opts.map((o,i)=>i).filter(i=>!q.opts[i].ok&&!q.elim.includes(i));if(wr.length>1){q.elim.push(pick(wr));q.hinted=G.turnId}}}}
// called from answer() on a right answer, after the usual narration
function campRight(p){
  if(p.cpu&&p.cpu.heal&&p.streak&&p.lives<5){p.lives++;p.maxL=Math.max(p.maxL,p.lives);say(`${p.n} reviews his notes. +1 life.`,'hot');G.bark={id:p.id,text:pick(['Let me just check my notes.','Ah, yes. As I wrote in 2011.','Stamina is a procedural virtue.']),until:performance.now()+2200}}
  if(isMe(p)&&p.pen&&p.streak&&p.lives<p.maxL){p.lives++;say('RED PEN: you mark your own answer correct. +1 life.','good')}
  if(isMe(p)&&p.gavel){const n=G.players.length,me=G.players.indexOf(p),hit=[];
    for(const dir of [-1,1]){for(let k=1;k<n;k++){const j=(me+dir*k+n*k)%n,o=G.players[j];if(o.alive&&o!==p){if(!hit.includes(o))hit.push(o);break}}}
    hit.forEach(o=>{o.lives--;o.run=0;o.streak=false;if(o.lives<=0){o.alive=false;G.elim.push(o.id)}});
    if(hit.length)say(`ECHO GAVEL! ${hit.map(o=>o.n).join(' and ')} lose${hit.length===1?'s':''} a heart.${hit.some(o=>!o.alive)?' Someone is out.':''}`,'good')}
}
// called from answer() on a miss before any life is lost; return true when an item absorbs it
function campWrong(p,i){
  if(isMe(p)&&i<0&&p.noTO){p.run=0;p.streak=false;p.redeem=false;say('FLASHCARD DECK: no life lost on a timeout. The question passes.','cyan');G.res='shield';return true}
  return false}
function campEnd(){
  const me=G.players.find(isMe),won=!!(me&&me.alive),k=G.camp.kind,c=cS(),sem=SEM();
  S.played++;S.bestRun=Math.max(S.bestRun,G.maxRun);
  G=null;V='camp';CM.dungeon=false;CM.mus=CMAPS[c.map].mus;render();
  const P='peterson';
  if(k==='final'){
    if(!won)return campSay([[P,'* Hm. Not this time.'],[P,'* Office hours are Tuesdays. Bring questions. Bring a better strategy.'],nar('* (Try different items. Talk to the professor to retake it.)')]);
    const first=!c['won'+sem];c['won'+sem]=1;save();CM.mus='home';musSync();
    if(sem===1){
      if(!first)return campSay([[P,'* Still sharp. Good.'],nar('* You passed the fall final again.')],()=>{CM.mus='inside';musSync()});
      const got=cGive('redpen');
      return campSay([[P,'* ...'],[P,'* Well.'],[P,'* That was a well-pleaded performance.'],[P,'* Subject matter jurisdiction first. Always. You remembered.'],nar('* You passed the FALL SEMESTER of CIVIL PROCEDURE.'),[P,'* Here. You’ve earned this. Use it wisely. Or at least legibly.'],...got,nar('* NEW PROFILE PICTURE UNLOCKED: PREFECTURE GRADUATE.'),nar('* ...'),nar('* The bell rings again.'),[P,'* Oh. Did I not mention? There’s a spring semester.'],nar('* SPRING SEMESTER has begun.'),nar('* Everyone in town has new, harder problems. The students want rematches.'),nar('* A new 3L has been spotted at the COURTHOUSE.'),nar('* (You can now equip 3 items.)')],()=>{c.sem=2;save();CM.mus='inside';musSync();campHUD()});
    }
    if(!first)return campSay([[P,'* Even in the spring. Impressive.'],nar('* You passed the spring final again.')],()=>{CM.mus='inside';musSync()});
    return campSay([[P,'* ...'],[P,'* Two semesters. Twenty problems solved. A whole town, procedurally sound.'],[P,'* I’m not supposed to have favorite students.'],[P,'* I have a favorite procedural rule, though. Rule 1. You know why.'],nar('* “...the just, speedy, and inexpensive determination of every action.”'),nar('* You passed CIVIL PROCEDURE.'),nar('* NEW PROFILE PICTURE UNLOCKED: SPRING LAUREATE.'),nar('* CAMPAIGN COMPLETE.'),nar('* (This mode is experimental. TORTS TUNDRA and CONTRACTS COAST are still being surveyed.)'),nar('* You can keep exploring, retake the final, or save & quit.')],()=>{CM.mus='inside';musSync()});
  }
  const D=STU()[k];
  if(won){const first=!c[BK()][k];c[BK()][k]=1;save();const got=first?cGive(D.item):[];campSay([...D.win,...got])}
  else campSay([...D.lose,nar('* (Talk to them again for a rematch.)')]);
}

/* ---------- movement & walking townsfolk ---------- */
const CDIR={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};
const CW=48,CH_=34,CT=16,CVW=20,CVH=15;
function campFrame(ts){
  if(V!=='camp'){CM.raf=0;return}
  const dt=Math.min(60,ts-CM.last);CM.last=ts;const c=cS();
  if(CM.fade){CM.fade.t+=dt;if(!CM.fade.done&&CM.fade.t>=CM.fade.d/2){CM.fade.done=1;CM.fade.mid()}if(CM.fade.t>=CM.fade.d)CM.fade=null}
  if(CM.mov){CM.mov.t+=dt;if(CM.mov.t>=CM.mov.d){c.x=CM.mov.x;c.y=CM.mov.y;CM.mov=null;if(cMapT()[c.y][c.x]==='X'&&c.map!=='town')campExit();else if(Math.random()<.03)save()}}
  const busy=CM.say||CM.ask||CM.menu||CM.fade;
  if(!CM.mov&&!busy&&CM.held.length){const d=CM.held[CM.held.length-1],[dx,dy]=CDIR[d];c.dir=d;const nx=c.x+dx,ny=c.y+dy;
    if(cWalk(nx,ny))CM.mov={fx:c.x,fy:c.y,x:nx,y:ny,t:0,d:150};
    else{const T=cMapT();if(T[ny]&&T[ny][nx]==='D')campEnterDoor(nx,ny)}}
  if(!busy)cNpcTick(dt);
  if(CM.fx>0)CM.fx=Math.max(0,CM.fx-dt/900);
  campDraw(ts);CM.raf=requestAnimationFrame(campFrame);
}
function cNpcTick(dt){
  for(const n of CNPC){if(!cHere(n)||(!n.route&&!n.wander))continue;if(n.id==='troll')continue;const p=CM.np[n.id];
    if(p.mv){p.mv.t+=dt;if(p.mv.t>=p.mv.d)p.mv=null;continue}
    p.wait-=dt;if(p.wait>0)continue;
    let dx=0,dy=0;
    if(n.route){const [tx,ty]=n.route[p.wi];if(p.x===tx&&p.y===ty){p.wi=(p.wi+1)%n.route.length;p.wait=n.pause||900;continue}dx=Math.sign(tx-p.x);dy=dx?0:Math.sign(ty-p.y)}
    else{const [x0,y0,x1,y1]=n.wander,d=pick(Object.values(CDIR));dx=d[0];dy=d[1];if(p.x+dx<x0||p.x+dx>x1||p.y+dy<y0||p.y+dy>y1){p.wait=500;continue}}
    const nx=p.x+dx,ny=p.y+dy;
    if(cWalk(nx,ny)&&!cPlayerAt(nx,ny)){p.mv={fx:p.x,fy:p.y,t:0,d:n.spd||320};p.x=nx;p.y=ny;p.dir=dx<0?'left':dx>0?'right':dy<0?'up':'down';if(n.wander)p.wait=600+Math.random()*1600}
    else p.wait=500}
}

/* ---------- drawing ---------- */
function campDraw(ts){const cv=document.getElementById('cv');if(!cv)return;const g=cv.getContext('2d');g.imageSmoothingEnabled=false;const c=cS(),T=cMapT(),MW=T[0].length,MH=T.length;
  let px=c.x,py=c.y;if(CM.mov){const k=CM.mov.t/CM.mov.d;px=CM.mov.fx+(CM.mov.x-CM.mov.fx)*k;py=CM.mov.fy+(CM.mov.y-CM.mov.fy)*k}
  const camX=MW<=CVW?-(CVW-MW)/2:Math.max(0,Math.min(MW-CVW,px-(CVW-1)/2)),camY=MH<=CVH?-(CVH-MH)/2:Math.max(0,Math.min(MH-CVH,py-(CVH-1)/2));
  g.save();g.fillStyle='#000';g.fillRect(0,0,cv.width,cv.height);
  if(CM.fx>0){const a=CM.fx*4;g.translate(Math.round((Math.random()-.5)*a),Math.round((Math.random()-.5)*a))}
  const x0=Math.floor(camX),y0=Math.floor(camY),dg=CM.dungeon&&c.map==='class';
  for(let y=Math.max(0,y0);y<=y0+CVH&&y<MH;y++)for(let x=Math.max(0,x0);x<=x0+CVW&&x<MW;x++){const sx=Math.round((x-camX)*CT),sy=Math.round((y-camY)*CT);if(c.map==='town')cTile(g,T[y][x],x,y,sx,sy,ts);else cTileIn(g,T[y][x],x,y,sx,sy,ts,dg)}
  const ents=CNPC.filter(cHere).map(n=>{const p=CM.np[n.id];let ex=p.x,ey=p.y,mv=false;if(p.mv){const k=Math.min(1,p.mv.t/p.mv.d);ex=p.mv.fx+(p.x-p.mv.fx)*k;ey=p.mv.fy+(p.y-p.mv.fy)*k;mv=true}return {n,p,x:ex,y:ey,mv}});
  ents.push({me:1,x:px,y:py});ents.sort((a,b)=>a.y-b.y);
  for(const e of ents){const sx=Math.round((e.x-camX)*CT),sy=Math.round((e.y-camY)*CT);if(sx<-16||sy<-20||sx>cv.width||sy>cv.height)continue;
    if(e.me){const fr=CM.mov?Math.floor(CM.mov.t/75)%2:-1;g.fillStyle='rgba(0,0,0,.35)';g.fillRect(sx+3,sy+13,10,2);cSpr(g,ICONS[prof().icon],COLORS[prof().color],sx,sy-1-(fr===1?1:0),c.dir==='left',fr)}
    else{const n=e.n,p=e.p,fr=e.mv?Math.floor(p.mv.t/(Math.min(180,(n.spd||320)/2)))%2:-1,bob=e.mv?(fr===1?1:0):Math.floor(ts/600+n.x)%2;
      if(n.swim){g.fillStyle='#2d6cc0';g.fillRect(sx,sy+10,16,6);g.fillStyle='#5d9be0';g.fillRect(sx+2+Math.floor(ts/300)%4,sy+11,6,1)}else{g.fillStyle='rgba(0,0,0,.35)';g.fillRect(sx+3,sy+13,10,2)}
      cSpr(g,n.s,n.id==='peterson'&&dg?'':n.c,sx,sy-bob,p.dir==='left',fr);
      const m=cMark(n);if(m){const my=sy-9-Math.floor(ts/300)%2;if(m==='duel'){g.fillStyle='#ff4d6d';g.fillRect(sx+7,my,2,6);g.fillRect(sx+5,my+4,6,1);g.fillRect(sx+7,my+6,2,2)}else{g.fillStyle='#ffd84a';g.fillRect(sx+7,my,2,5);g.fillRect(sx+7,my+6,2,2)}}}}
  if(dg){g.fillStyle=`rgba(80,0,30,${.18+.06*Math.sin(ts/300)})`;g.fillRect(0,0,cv.width,cv.height)}
  if(CM.fx>0){g.fillStyle=`rgba(255,255,255,${Math.min(.85,CM.fx)})`;g.fillRect(-10,-10,cv.width+20,cv.height+20)}
  g.restore();
  if(CM.fade){const k=CM.fade.t/CM.fade.d,a=k<.5?k*2:2-k*2;g.fillStyle=`rgba(0,0,0,${Math.min(1,a*1.1)})`;g.fillRect(0,0,cv.width,cv.height)}
}
// frame: -1 standing, 0/1 = the two steps of the walk cycle (legs shift, Pokemon style)
function cSpr(g,name,col,sx,sy,flip,frame){
  if(PROF[name]){const P=PROF[name];P.r.forEach((row,y)=>{const sh=frame>=0&&y>=13?(frame?1:-1):0;[...row].forEach((ch,x)=>{const f=P.p[ch];if(f){g.fillStyle=f;g.fillRect(sx+(flip?15-x:x)+sh,sy+y,1,1)}})});return}
  const S2=SPR[name]||SPR.potato;S2.forEach((row,y)=>{const sh=frame>=0&&y>=9?((y%2===0)===!!frame?1:-1):0;[...row].forEach((ch,x)=>{if(ch==='X'||ch==='o'){g.fillStyle=ch==='X'?(col||'#fff'):'#000';g.fillRect(sx+2+(flip?11-x:x)+sh,sy+3+y,1,1)}})});
}
function cHash(x,y){return ((x*73856093)^(y*19349663))>>>0}
function cTile(g,t,x,y,sx,sy,ts){
  const h=cHash(x,y),R=(c,a,b,w,hh)=>{g.fillStyle=c;g.fillRect(sx+a,sy+b,w,hh)};
  const grass=()=>{R('#3f8f4a',0,0,16,16);R('#367d40',h%13,(h>>4)%14,1,2);R('#367d40',(h>>8)%14,(h>>12)%13,2,1);R('#4fa35a',(h>>16)%15,(h>>20)%15,1,1);if(h%7===0){R('#57b062',(h>>3)%13+1,(h>>9)%12+2,1,2);R('#57b062',(h>>3)%13+2,(h>>9)%12+3,1,1)}};
  const path=()=>{R('#c9b48a',0,0,16,16);R('#b39e74',0,(h%2)*8+7,16,1);R('#b39e74',(h>>3)%2?4:11,0,1,8);R('#b39e74',(h>>5)%2?7:13,8,1,8);if(h%11===0)R('#a89068',(h>>7)%12+2,(h>>11)%12+2,2,1)};
  const wall=(c1,c2)=>{R(c1,0,0,16,16);R(c2,0,7,16,1);R(c2,(y%2)*8,0,1,7);R(c2,(y%2)*8+4,8,1,8);R('rgba(0,0,0,.12)',0,14,16,2)};
  switch(t){
  case '.':grass();break;
  case ',':grass();R(['#ff9be1','#ffd84a','#ffffff'][h%3],(h>>2)%12+2,(h>>6)%10+3,2,2);R(['#ffd84a','#ff9be1','#c58bff'][(h>>9)%3],(h>>11)%12+1,(h>>15)%10+2,1,1);R('#2e6e38',(h>>2)%12+2,(h>>6)%10+5,1,2);break;
  case '=':path();break;
  case 'L':path();R('#333',7,3,2,13);R('#555',6,14,4,2);R('#ffd84a',5,0,6,4);R(`rgba(255,216,74,${.15+.05*Math.sin(ts/400+x)})`,2,-2,12,10);break;
  case '~':{R('#2d6cc0',0,0,16,16);const o=Math.floor(ts/250+x)%8;R('#5d9be0',o,4+(y%2)*6,5,1);R('#5d9be0',(o+9)%16,10-(y%2)*4,4,1);if(h%9===0)R('#8fc1f5',(h>>5)%12+2,(h>>9)%12+2,1,1);break}
  case 'B':R('#2d6cc0',0,0,16,16);R('#9b6b3a',1,0,14,16);for(let k=2;k<16;k+=4)R('#6e4a26',1,k,14,1);R('#5a3a1e',1,0,2,16);R('#5a3a1e',13,0,2,16);break;
  case 'R':R('#a0383a',0,0,16,16);R('#7e2a2c',0,5,16,1);R('#7e2a2c',0,11,16,1);R('#b8484a',(x%2)*8,0,7,4);R('#b8484a',(x%2)*8+3,6,6,4);break;
  case 'Y':R('#3a5fa8',0,0,16,16);R('#2b4a86',0,5,16,1);R('#2b4a86',0,11,16,1);R('#4a74c4',(x%2)*8,0,7,4);break;
  case 'G':R('#7d838f',0,0,16,16);R('#646a75',0,5,16,1);R('#646a75',0,11,16,1);R('#9aa0ab',(x%2)*8,0,7,4);if(y===7)R('#c8ccd4',0,0,16,2);break;
  case 'U':R('#ece8df',0,0,16,16);R('#cfc9bc',2,0,3,16);R('#cfc9bc',11,0,3,16);R('#b8b1a2',0,0,16,2);R('#b8b1a2',0,14,16,2);break;
  case 'W':wall('#e6dcc3','#cbbf9f');break;
  case 'w':wall('#e6dcc3','#cbbf9f');R('#5a4a3a',3,2,10,10);R('#6ad6ff',4,3,8,8);R('#bfe9ff',4,3,3,3);R('#5a4a3a',7,3,1,8);R('#5a4a3a',4,7,8,1);R('#ff9be1',3,12,10,2);R('#5ee08f',4,11,2,1);R('#5ee08f',9,11,2,1);break;
  case 'D':{const crt=(y===10&&x===38);crt?R('#ece8df',0,0,16,16):wall('#e6dcc3','#cbbf9f');R('#6b4423',2,1,12,15);R('#8a5a30',3,2,10,14);R('#6b4423',7,2,1,14);R('#ffd84a',10,9,2,2);R('#ffd84a',5,9,2,2);break}
  case 'f':{R('#9aa0a8',0,0,16,16);R('#7d838b',0,0,16,1);const ox=x===23?2:0,oy=y===15?2:0;R('#3d8be0',ox,oy,14,14);R('#9fd3ff',((ts/120|0)+x*5)%10+ox+1,(y===15?6:4),2,2);if(x===24&&y===16)R('#e6e6e6',0,0,3,3);break}
  case '#':grass();R('#5a3a1e',7,11,2,5);R('#1f5e2c',2,1,12,11);R('#1f5e2c',1,3,14,7);R('#2e7a3c',4,2,5,4);R('#174a22',9,8,4,3);if(h%5===0)R('#ff6a3d',(h>>4)%8+4,(h>>8)%6+3,1,1);break;
  case 'b':grass();R('#2a7035',2,6,12,9);R('#3b8a46',4,6,5,3);if(h%3===0)R('#ff9be1',9,8,1,1);break;
  case 'S':grass();R('#6e4a26',7,9,2,7);R('#b5834a',2,2,12,8);R('#8a5a30',3,4,10,1);R('#8a5a30',3,7,8,1);break;
  case 'h':grass();R('#6e4a26',1,6,14,8);R('#8a5a30',1,6,14,2);R('#2b1d10',11,8,3,4);R('#5ee08f',3,5,2,1);break;
  case 'n':path();R('#8a5a30',1,6,14,3);R('#6e4a26',1,10,14,2);R('#4a3018',2,12,2,4);R('#4a3018',12,12,2,4);break;
  case 'p':path();R('#8a5a30',2,8,12,7);R('#6e4a26',2,8,12,2);R('#3b8a46',3,4,10,5);R('#ff6a3d',5,4,2,2);R('#ffd84a',9,5,2,2);R('#ff9be1',7,3,2,2);break;
  case 'c':(x>13&&x<35&&y===25?grass:path)();R('#a0703a',2,3,12,12);R('#7a5228',2,3,12,2);R('#7a5228',2,8,12,1);R('#7a5228',7,3,1,12);break;
  case 'M':path();R('#8a5a30',0,8,16,8);R('#6e4a26',0,8,16,2);R(x%2?'#ff4d6d':'#ffffff',0,0,16,4);R(x%2?'#ffffff':'#ff4d6d',0,4,16,3);R(['#ffd84a','#5ee08f','#ff9e5e'][h%3],3,10,3,3);R(['#c58bff','#6ad6ff','#ffffff'][(h>>3)%3],9,10,4,3);break;
  case 'x':grass();R('#333',7,8,2,8);R('#3a5fa8',3,2,10,7);R('#ff4d6d',12,1,2,4);break;
  case 'F':grass();R('#e6dcc3',0,6,16,2);R('#e6dcc3',0,11,16,2);R('#d4c8aa',2,4,2,11);R('#d4c8aa',10,4,2,11);break;
  case 'P':R('#9a9aa2',0,0,16,16);R('#b4b4bc',0,0,16,1);R('#ffd84a',14,0,2,16);R('#85858d',(h%2)*8,8,8,1);break;
  case 't':R('#5a4a3a',0,0,16,16);for(let k=1;k<16;k+=4)R('#7a5a3a',0,k,16,2);R('#b0b0b8',3,0,2,16);R('#b0b0b8',11,0,2,16);break;
  case 'g':grass();R('#8a8a94',4,3,8,12);R('#9e9ea8',5,2,6,2);R('#6a6a74',6,6,4,1);R('#6a6a74',6,8,4,1);break;
  case 'l':grass();R('#555',7,1,1,15);R('#3f63c9',8,1,6,4);R('#ffffff',8,5,6,1);R('#ff4d6d',8,6,6,2);break;
  default:grass();
  }
}
// interiors; dg = the classroom has become a dungeon
function cTileIn(g,t,x,y,sx,sy,ts,dg){
  const h=cHash(x,y),R=(c,a,b,w,hh)=>{g.fillStyle=c;g.fillRect(sx+a,sy+b,w,hh)};
  const floor=()=>{if(dg){R('#2a2433',0,0,16,16);R('#1d1826',0,(y%2)*8,16,1);R('#1d1826',(x%2)*8,0,1,16);if(h%5===0)R('#3a3247',(h>>3)%12+2,(h>>6)%12+2,3,1)}else{R('#b8875a',0,0,16,16);R('#a3744b',0,3,16,1);R('#a3744b',0,8,16,1);R('#a3744b',0,13,16,1);R('#a3744b',(h%4)*4,4,1,4);R('#c9976a',(h>>3)%12,10,3,1)}};
  const wallIn=()=>{if(dg){R('#1b1424',0,0,16,16);R('#120d19',0,5,16,1);R('#120d19',0,11,16,1);R('#120d19',(y%2)*8+3,0,1,5);if(x%4===2&&y===0){R('#5a3a1e',7,6,2,8);R(Math.floor(ts/120+x)%2?'#ff6a3d':'#ffd84a',6,2,4,5);R('rgba(255,106,61,.25)',2,0,12,14)}}else{R('#e9e0cf',0,0,16,16);R('#c3b79c',0,12,16,4);R('#a8987a',0,12,16,1);R('#d8cdb8',0,3,16,1)}};
  switch(t){
  case 'k':floor();break;
  case 'r':if(dg){R('#5a0f22',0,0,16,16);R('#7a1730',1,1,14,14)}else{R('#8a2e3a',0,0,16,16);R('#a8424e',1,1,14,14);R('#ffd84a',3,3,1,1);R('#ffd84a',12,12,1,1)}break;
  case 'X':floor();R(dg?'#3a1020':'#6a8a3a',2,4,12,10);R(dg?'#5a1830':'#7fa648',3,5,10,8);break;
  case 'K':wallIn();break;
  case 'Q':wallIn();if(!dg){R('#5a4a3a',3,2,10,9);R('#9fd3ff',4,3,8,7);R('#d6efff',4,3,3,2)}break;
  case 'e':if(dg){R('#1b1424',0,0,16,16);R('#2a0c14',1,2,14,11);const on=Math.floor(ts/200+x)%3;R(on?'#ff4d6d':'#ff9e5e',3+(x%3),5,3,1);R('#ff4d6d',2+(x*5)%9,8,4,1)}else{R('#e9e0cf',0,0,16,16);R('#6e4a26',0,1,16,13);R('#2f5a3e',0,2,16,11);if(x%3===1)R('#e6e6e6',2,5,9,1);if(x%3===2)R('#e6e6e6',1,8,11,1);if(x%4===0)R('#e6e6e6',3,10,6,1)}break;
  case 'q':floor();R('#6e4a26',0,0,16,16);R('#5a3a1e',0,7,16,2);R('#5a3a1e',0,15,16,1);for(let k=0;k<6;k++){R(['#ff4d6d','#3f63c9','#5ee08f','#ffd84a','#c58bff','#ff9e5e'][(h+k*3)%6],1+k*2+(k>2?1:0),1+((h>>k)%2),2,6-((h>>k)%2));R(['#3f63c9','#ffd84a','#ff4d6d','#5ee08f','#ffffff','#c58bff'][(h+k*5)%6],1+k*2+(k>2?1:0),9,2,6)}break;
  case 'C':floor();R('#8a5a30',0,3,16,13);R('#a87040',0,3,16,3);R('#6e4a26',0,14,16,2);if(x%3===0)R('#f3e1b5',4,0,6,4);if(x%3===1){R('#ffd84a',5,1,4,3);R('#c58a52',5,0,4,1)}break;
  case 'O':R('#6a6a74',0,0,16,16);R('#4a4a54',2,6,12,8);R(Math.floor(ts/200+x)%2?'#ff6a3d':'#ffd84a',4,9,8,3);R('#8a8a94',0,0,16,3);R('#bbb',3,2,3,1);break;
  case 'g':floor();R('#9fd3ff',1,2,14,12);R('#6e4a26',1,12,14,3);R('#c58a52',3,5,4,3);R('#f3e1b5',9,5,4,3);R('#ffd84a',5,9,4,2);break;
  case 'y':floor();R('#8a5a30',1,4,14,9);R('#a87040',1,4,14,2);R('#5a3a1e',2,13,2,3);R('#5a3a1e',12,13,2,3);if(h%3===0)R('#ffffff',5,6,5,3);if(h%3===1)R('#c58a52',6,5,3,3);break;
  case 'a':floor();R('#6e4a26',4,3,8,3);R('#8a5a30',4,7,8,4);R('#5a3a1e',4,11,2,4);R('#5a3a1e',10,11,2,4);break;
  case 'z':floor();if(dg){R('#4a4a54',4,10,8,6);R(Math.floor(ts/110+x)%2?'#ff6a3d':'#ffd84a',5,3,6,7);R('#ffd84a',7,5,2,3)}else{R('#a0583a',4,10,8,6);R('#3b8a46',3,2,10,9);R('#5ee08f',5,3,3,3)}break;
  case 'd':floor();if(dg){R('#4a4054',3,1,10,14);R('#5e5468',4,1,8,2);R('#2f2838',6,6,4,1);R('#2f2838',6,9,4,1)}else{R('#a87040',1,3,14,7);R('#c58a52',1,3,14,2);R('#5a3a1e',2,10,2,5);R('#5a3a1e',12,10,2,5);if(h%2)R('#ffffff',4,5,5,3)}break;
  case 'j':floor();if(dg){R('#3a2a44',2,3,12,12);R('#ff4d6d',3,4,10,1);R(Math.floor(ts/150)%2?'#ff6a3d':'#ffd84a',6,0,4,4)}else{R('#6e4a26',3,2,10,13);R('#8a5a30',2,2,12,3);R('#d9a05b',6,0,4,3)}break;
  case 'J':R('#5a3a1e',0,0,16,16);R('#6e4a26',0,2,16,12);R('#8a5a30',0,2,16,2);R('#ffd84a',7,7,2,2);break;
  case 'n':floor();R('#8a5a30',0,4,16,4);R('#6e4a26',0,9,16,3);R('#4a3018',1,12,2,4);R('#4a3018',13,12,2,4);break;
  case 'l':wallIn();R('#555',7,2,1,14);R(x===7?'#3f63c9':'#ff4d6d',8,2,6,6);R('#ffffff',8,5,6,1);break;
  case 'E':floor();R('#e6e6e6',0,3,16,11);R('#6ad6ff',0,7,16,7);R('#ffffff',1,4,5,3);R('#6e4a26',0,14,16,2);break;
  case 'v':floor();R('#d8c48a',3,4,10,11);R('#b8a46a',3,4,10,2);R('#5a3a1e',6,8,4,2);break;
  default:floor();
  }
}

/* ---------- input ---------- */
const CTALKOVER='CJygO';
function campInteract(){const c=cS();if(CM.mov||CM.fade)return;const [dx,dy]=CDIR[c.dir],tx=c.x+dx,ty=c.y+dy,T=cMapT();
  let n=cNpcAt(tx,ty);
  // talk across counters, the judge's bench, and tables
  if(!n&&T[ty]&&CTALKOVER.includes(T[ty][tx]))n=cNpcAt(tx+dx,ty+dy);
  if(n)return campTalk(n);
  if(T[ty]&&T[ty][tx]!=null)campTile(tx,ty)}
function campAct(v,el){
  if(v==='a')return campKeyAct('z');
  if(v==='b')return campKeyAct('x');
  if(v==='adv')return campAdv();
  if(v==='menu'){CM.menu={tab:'bag'};CM.mi=0;campOv();return}
  if(v==='close'){CM.menu=null;campOv();return}
  if(v==='leave')return campLeave();
  if(v.startsWith('tab:')){CM.menu={tab:v.slice(4)};campOv();return}
  if(v.startsWith('pick:'))return campPick(+v.slice(5));
  if(v.startsWith('eq:')){const k=v.slice(3),c=cS();if(!cHas(k))return;if(cEq(k))c.eq=c.eq.filter(x=>x!==k);else{while(c.eq.length>=cSlots())c.eq.shift();c.eq.push(k)}save();campOv();return}
}
function campKeyAct(k){
  if(CM.ask){const A=CM.ask;if(k==='up'){A.sel=(A.sel+A.opts.length-1)%A.opts.length;campOv();blip(600)}else if(k==='down'){A.sel=(A.sel+1)%A.opts.length;campOv();blip(600)}else if(k==='z')campPick(A.sel);else if(/^[1-4]$/.test(k)&&+k<=A.opts.length)campPick(+k-1);return}
  if(CM.say){if(k==='z')campAdv();return}
  if(CM.menu){if(k==='x'){CM.menu=null;campOv()}else if(CM.menu.tab==='bag'){const items=Object.keys(CITEMS).filter(cHas);if(!items.length)return;if(k==='up'){CM.mi=(CM.mi+items.length-1)%items.length;campOv()}else if(k==='down'){CM.mi=(CM.mi+1)%items.length;campOv()}else if(k==='z')campAct('eq:'+items[CM.mi])}return}
  if(CM.fade)return;
  if(k==='z')campInteract();else if(k==='x'){CM.menu={tab:'bag'};CM.mi=0;campOv()}
}
const CKEY={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',w:'up',s:'down',a:'left',d:'right',W:'up',S:'down',A:'left',D:'right'};
function campKey(e,down){
  const d=CKEY[e.key];
  if(d){e.preventDefault();if(CM.ask||CM.menu){if(down&&(d==='up'||d==='down'))campKeyAct(d);return}campHold(d,down);return}
  if(!down)return;
  if(e.key==='z'||e.key==='Z'||e.key==='Enter'||e.key===' '){e.preventDefault();if(!e.repeat)campKeyAct('z')}
  else if(e.key==='x'||e.key==='X'||e.key==='Escape'||e.key==='c'||e.key==='C'){e.preventDefault();campKeyAct('x')}
  else if(/^[1-4]$/.test(e.key))campKeyAct(e.key);
}
document.addEventListener('keyup',e=>{if(V==='camp')campKey(e,false)});
window.addEventListener('blur',()=>{CM.held=[]});

/* ================= boot ================= */
(async function boot(){
  try{D=await (await fetch('data.json')).json();TOP=D.topics}catch(e){app.innerHTML='<div class="box vt">The potato could not find its questions. Reload to try again.</div>';return}
  musMount();checkAch();render();goOnline();
})();
}
