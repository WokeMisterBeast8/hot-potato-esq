{
/* ================= sprites (12x12, X = color, o = black detail) ================= */
const SPR={
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
const ICONS=['potato','cat','frog','ghost','star','mushroom','crab','cactus','gavel','book','moon','bird'];
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
  try{const m=await import('./online.js');ON=await m.connect(window.HP_FIREBASE);ME=ON.uid;onState='on';await accountBoot();loadCrowns();gStart();}
  catch(e){onState='error';onErr=String(e&&e.message||e);console.warn('Online unavailable:',e)}
  render();
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
  const T=t.terms||[],C=t.cases||[],M=t.mcq||[],H=t.hypo||[];
  const CT=C.length>=4?C.length:0;
  const kinds=[['dt',.2,T.length],['mc',.27,M.length],['hy',.27,H.length],['hc',.04,CT],['tf',.1,T.length+CT],['td',.1,T.length],['ch',.02,CT]].filter(k=>k[2]>=4||((k[0]==='mc'||k[0]==='hy')&&k[2]>0));
  for(let tries=0;tries<14;tries++){
    let r=Math.random()*kinds.reduce((s,k)=>s+k[1],0),k=kinds[0][0];for(const x of kinds){r-=x[1];if(r<=0){k=x[0];break}}
    const n=k==='mc'?M.length:k==='hy'?H.length:k==='tf'?T.length+CT:(k==='dt'||k==='td')?T.length:C.length,i=Math.floor(Math.random()*n),id=t.id+':'+k+':'+i;
    if(used.has(id)&&tries<13)continue;used.add(id);
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
  if(V!=='boards'&&boardOff)stopBoardWatch();
  if(V==='vs'&&ON&&!pubOff){pubOff=ON.watchPub(l=>{PUBS=l;drawPubs()})}else if(V!=='vs'&&pubOff){pubOff();pubOff=null;PUBS=null}
}
const onlineBadge=()=>onState==='on'?'<span class="good">● ONLINE</span>':onState==='connecting'?'<span class="dim">○ connecting…</span>':onState==='error'?'<span class="bad">● online unavailable</span>':'<span class="dim">○ offline</span>';
const MENU=[['STORY MODE','story'],['VS MODE','vs'],['LEADERBOARDS','boards'],['PROFILE','profile'],['RECORDS','records'],['SETTINGS','settings']];
function titleV(){
  return `<div class="home"><div class="homeL"><div class="title"><div class="potato">${SPUD()}</div><div class="tblock"><h1>HOT <span class="h">POTATO</span>,<br>ESQ.</h1><div class="credit">made by <b>COOPER</b> from Civ Pro</div></div><p class="flav">${FLAV[flavI]}</p>
  <nav class="menu">${MENU.map((m,i)=>`<button class="mi ${i===menuI?'on':''}" data-act="menu" data-v="${m[1]}" id="mi-${m[1]}">${m[0]}</button>`).join('')}</nav>
  <p class="dim signed" style="font-size:15px">${prof().name?`Signed in as ${crownN(ME)?crownSvg(crownN(ME),'inline'):''}<span class="gold">${esc(prof().name)}</span> · `:'Make a profile before you play · '}${onlineBadge()}</p></div>
  <p class="note">A hot-potato trivia game for 1L finals. Original characters and questions. The Civil Procedure world is built from your coursebook; Torts and Contracts are experimental, general coverage. Check anything surprising against your materials. Keys: <kbd>↑</kbd><kbd>↓</kbd> and <kbd>Enter</kbd> in menus, <kbd>1</kbd>–<kbd>4</kbd> to answer, <kbd>P</kbd> to pause.</p></div><div class="homeR" id="gslot"></div></div>`;
}
function profileV(){
  const p=prof();if(ON&&!S.reg&&p.name&&NAMESTAT.n!==p.name)setTimeout(()=>checkName(p.name),0);
  return `<button class="back" data-act="home" id="back">◂ back</button><div class="box"><h2>WHO ARE YOU?</h2>
  <div class="prof"><div class="pv">${withCrown(ME,myIcon())}<div class="gold" style="font-size:22px">${esc(p.name||'???')}</div><p class="vt dim" style="margin:0">${p.name?'You look ready. You are not. That’s fine.':'The potato would like to know your name.'}</p>${crownBlock()}</div>
  <div>${NAMEBUMP?`<p class="bad" style="margin:0 0 8px">${esc(NAMEBUMP)} was registered by another player, so pick a new name (or log in below if it’s you).</p>`:''}<div class="lbl">USERNAME (up to 10 characters)</div><input type="text" id="nm" maxlength="10" value="${esc(p.name)}" autocomplete="off" spellcheck="false" ${S.reg?'disabled title="Registered names are locked. Log out to use a different name."':''}><div id="nmstat" class="nmstat" aria-live="polite">${S.reg?'<span class="good">🔒 registered to you</span>':nameStatHTML()}</div>
  <div class="lbl">ICON</div><div class="icons">${ICONS.map((n,i)=>`<button class="ic" data-act="icon" data-v="${i}" id="ic-${i}" aria-pressed="${p.icon===i}" aria-label="${n}">${spr(n,COLORS[p.color])}</button>`).join('')}</div>
  <div class="lbl">COLOR</div><div class="sws">${COLORS.map((c,i)=>`<button class="sw" style="background:${c}" data-act="color" data-v="${i}" id="sw-${i}" aria-pressed="${p.color===i}" aria-label="color ${i+1}"></button>`).join('')}</div>
  <div class="row" style="margin-top:16px"><button class="btn gold" data-act="saveprof" id="save" ${NAMESTAT.st==='taken'?'disabled':''}>SAVE</button></div>${acctV()}</div></div></div>`;
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
function gameTopics(){const w=G.mode==='story'?G.world:'cp';return topicsFor(w)}
function newTopic(){
  const all=gameTopics(),ts=all.filter(t=>!G.recent.includes(t.id)),t=pick(ts.length?ts:all);G.recent=[...G.recent,t.id].slice(-5);
  G.topic=t;G.round++;G.turnsLeft=2*alive().length;G.q=null;G.phase='topic';G.phaseT=2200/spd();
  if(G.round>1){if(G.mode==='story'&&Math.random()<.6){const pr=CPU[PROFOF[G.world]];say(`${pr.n.replace('PROF.','PROFESSOR')}: \u201cLet\u2019s turn to ${t.name}.\u201d`,'')}else say(pick(NARR.topic),'')}
}
function say(t,c){G.narr={t,c}}
function bark(p,kind){if(!p.cpu||Math.random()>.65)return;const L=p.cpu[kind];if(!L)return;const t=pick(L);G.bark={id:p.id,text:t,until:performance.now()+2200};if(G.mode!=='story'&&Math.random()<.6)chatSend(p,t,true)}
function startTurn(){
  const p=G.players[G.turn];G.turnId++;
  if(!G.q||G.q.solved)G.q=Object.assign(genQ(G.topic,G.used),{elim:[],solved:false,passes:0});
  const base=G.q.hypo?20000:(G.time||S.settings.time)*1000;G.fastT=p.streak;G.timer=p.streak?Math.max(5000,base-5000):base;
  G.phase='ask';G.t=G.timer;G.pickI=null;G.res=null;G.cpuPlan=null;G.pop=null;
  if(p.cpu){
    const left=G.q.opts.map((o,i)=>i).filter(i=>!G.q.elim.includes(i)),ci=G.q.opts.findIndex(o=>o.ok);
    const k=p.cpu.acc-(G.q.kind==='Define it'||G.q.kind==='What did it hold?'||G.q.hypo?.05:0);
    const choice=Math.random()<k?ci:pick(left.filter(i=>i!==ci).concat(left.length===1?[ci]:[]));
    const sp=(p.cpu.spd||1)*spd();let at=(900+Math.random()*G.timer*.5)/sp;at=Math.min(at,G.timer-500);if(Math.random()<.03)at=G.timer+1000;
    G.cpuPlan={at:G.timer-at,choice};
  }
  if(p.remote&&p.gone)G.cpuPlan={at:G.timer-1200,choice:-1};
  render();
}
function answer(i){
  if(G.phase!=='ask')return;G.pop=null;const p=G.players[G.turn],q=G.q,ok=i>=0&&!!q.opts[i].ok;G.pickI=i;p.ans++;
  if(isMe(p)){S.answered++;if(ok)S.right++}
  if(ok){
    const base=Math.round(100*Math.pow(.75,q.elim.length)),bonus=[];let m=1;
    if(p.redeem){m*=1.25;bonus.push('REDEMPTION')}if(p.streak){m*=1.25;bonus.push('STREAK')}
    const pts=Math.round(base*m);p.score+=pts;p.redeem=false;G.pop={id:p.id,pts,bonus};
    p.right++;p.run++;q.solved=true;if(isMe(p))G.maxRun=Math.max(G.maxRun,p.run);
    if(p.run>=3&&!p.streak){p.streak=true;if(meNarr(p))say(pick(NARR.streak),'cyan');else{say(`${p.n} has a STREAK. Shielded, but on a shorter clock.`,'cyan');bark(p,'streak')}}
    else if(meNarr(p))say(pick(NARR.right),'good');else{say(`${p.n} got it.`,'');bark(p,'right')}
    G.res='ok';
  }else{
    if(i>=0)q.elim.push(i);q.passes++;
    if(p.streak){p.streak=false;p.run=0;p.redeem=false;if(meNarr(p))say(pick(NARR.shield),'cyan');else{say(`${p.n}’s streak shatters. No life lost.`,'cyan');bark(p,'wrong')}G.res='shield'}
    else{p.lives--;p.run=0;p.redeem=true;G.res='hurt';
      if(p.lives<=0){p.alive=false;G.elim.push(p.id);if(meNarr(p))say(pick(NARR.elimYou),'hot');else{say(`${p.n} is out.`,'hot');if(p.cpu){const t=pick(p.cpu.elim);G.bark={id:p.id,text:t,until:performance.now()+2600}}}}
      else if(meNarr(p))say(i<0?pick(NARR.timeout):pick(NARR.wrong),'hot');else{say(`${p.n} ${i<0?'froze':'missed'}. The question passes.`,'');bark(p,i<0?'life':'wrong')}}
    if(q.opts.length-q.elim.length<=1)q.solved=true;
  }
  G.turnsLeft--;if(G.turnsLeft<=0&&!q.solved)q.solved=true;
  G.phase='reveal';G.wait=isMe(p)&&!G.spectate&&!G.net;G.phaseT=(q.solved?(G.net?3600:3200):(G.net?1900:1500))/spd();
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
  stopLoop();const me=G.players.find(isMe),st=standings(),place=st.indexOf(me)+1;
  S.played++;S.bestRun=Math.max(S.bestRun,G.maxRun);
  if(G.mode==='story'){
    const w=G.world,f=G.floor,key=w+'-'+f,won=me.alive,fl=WBY[w].floors[f];
    if(won){S.wins[key]=(S.wins[key]||0)+1;S.prog[w]=Math.max(S.prog[w],Math.min(3,f+2))}
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
  if(G.bark&&now>G.bark.until){G.bark=null;const b=document.getElementById('bark');if(b)b.remove()}
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
  const seats=g.players.map((p,i)=>{const [x,y]=seatPos(i,n);return `<div class="seat ${p.alive?'':'out'} ${i===g.turn&&g.phase!=='over'&&p.alive?'act':''} ${p.streak?'shield':''} ${isMe(p)?'you':''}" style="left:${x}%;top:${y}%"><div class="av">${crownN(p.id)?crownSvg(crownN(p.id),'oncap'):''}${spr(p.s,p.c)}</div><div class="nm">${nm(p.n)}</div><div class="sc">${p.score}</div><div class="lives">${Array.from({length:p.maxL||5},(_,k)=>k).map(k=>`<i class="${k<p.lives?'':'gone'}"></i>`).join('')}</div><div class="pips" title="streak progress">${[0,1,2].map(k=>`<i class="${p.streak||k<p.run?'on':''}"></i>`).join('')}</div></div>`}).join('');
  const [sx,sy]=seatPos(g.turn,n),px=50+(sx-50)*.55,py=50+(sy-50)*.55;
  let bk='';if(g.bark){const bi=g.players.findIndex(p=>p.id===g.bark.id);if(bi>=0){const [bx,by]=seatPos(bi,n),up=by<50;bk=`<div class="bark ${up?'dn':''}" id="bark" style="left:${Math.min(78,Math.max(22,bx))}%;top:${up?by+14:by-9}%">${esc(g.bark.text)}</div>`}}
  let pop='';if(g.pop){const pi=g.players.findIndex(p=>p.id===g.pop.id);if(pi>=0){const [ox,oy]=seatPos(pi,n);pop=`<div class="ptpop" style="left:${ox}%;top:${oy-6}%">+${g.pop.pts}${g.pop.bonus&&g.pop.bonus.length?`<small>${g.pop.bonus.join(' + ')} ×1.25</small>`:''}</div>`}}
  const banner=g.phase==='topic'&&g.topic?`<div class="banner"><div><small>ROUND ${g.round} · ${esc(g.topic.course).toUpperCase()}${g.topic.ch?' · CH. '+esc(g.topic.ch):''}</small><b>${esc(g.topic.name).toUpperCase()}</b><small>two full rotations</small></div></div>`:g.paused?`<div class="banner"><div><b>PAUSED</b><small>The potato waits. Impatiently.</small></div></div>`:'';
  const ring=`<div class="ring">${seats}${pop}<div class="spud" id="spud" style="left:${px}%;top:${py}%">${SPUD()}</div>${bk}${banner}</div>`;
  const where=g.mode==='story'?`${WBY[g.world].name} · FLOOR ${g.floor+1}`:`VS${g.code?' · '+esc(g.code):''}${g.net?' · ONLINE':' · BOTS'}`;
  const top=`${watching?`<div class="watchbar">👀 SPECTATING · chat and emotes are open${LOBBY&&LOBBY.spec?'':' · you’re seated for the next match'}</div>`:''}<div class="top"><div class="topic"><small>TOPIC · ${g.topic?esc(g.topic.course)+(g.topic.ch?' · coursebook ch. '+esc(g.topic.ch):''):''}</small><b>${g.topic?esc(g.topic.name):''}</b></div>${g.client||g.net?'':`<button class="back" style="min-height:40px;margin:0" data-act="pause" id="pause">${g.paused?'▶ resume':'❙❙ pause'}</button>`}</div><div class="meta">${where} · ROUND ${g.round} · ${Math.max(0,g.turnsLeft)} turns left in this topic</div>`;
  let box='';
  if(g.phase==='over'&&g.mode!=='story')box=vsResultV(g);
  else if(g.phase==='over'){const r=g.result,w=WBY[g.world];box=`<div class="box"><h2 class="${r.won?'gold':''}">${r.won?'FLOOR CLEARED':`ELIMINATED · ${ordinal(r.place)} PLACE`}</h2><p class="code" style="margin:0">${r.score} PTS</p><p class="vt">${r.right} correct · ${r.acc}% accuracy · best run ${g.maxRun}${r.rank>=0?` · <span class="gold">#${r.rank+1} on this floor’s leaderboard</span>`:''}${ON?(r.grank>0?` · <span class="gold">#${r.grank} globally</span> on this floor`:r.grank===-1?' · outside the global top 25 for now':' · sent to the global board'):''}</p><div class="row"><button class="btn gold" data-act="floor" data-v="${g.floor}" id="again">PLAY AGAIN</button>${r.won&&g.floor<2?`<button class="btn" data-act="floor" data-v="${g.floor+1}" id="nextfloor">NEXT FLOOR</button>`:''}<button class="btn" data-act="world" data-v="${g.world}" id="quit">FLOOR SELECT</button></div></div>`}
  else if(g.phase==='dead')box=`<div class="box"><h2>YOU ARE OUT</h2><p class="vt">${pick(NARR.elimYou)}</p><div class="row"><button class="btn gold" data-act="spectate" id="spect">WATCH THE REST (FAST)</button>${g.mode==='story'?'<button class="btn" data-act="forfeit" id="forfeit">GO HOME</button>':''}</div></div>`;
  else if(q&&g.phase!=='topic'){
    const yours=isMe(act)&&g.phase==='ask'&&!g.spectate&&!(g.client&&g.sentTurn===g.turnId),rev=g.phase==='reveal';
    const opts=q.opts.map((o,i)=>{let c='opt';if(q.elim.includes(i)&&!(rev&&i===g.pickI))c+=' x';if(rev){if(i===g.pickI)c+=g.res==='ok'?' ok':' no';else if(q.solved&&o.ok)c+=' ok'}return `<button class="${c}" data-act="ans" data-v="${i}" id="opt${i}" ${yours&&!q.elim.includes(i)?'':'disabled'}><b>${i+1}</b><span>${esc(o.t)}</span></button>`}).join('');
    const who=g.phase==='ask'?(isMe(act)?'<b>YOUR TURN</b>':`<b>${esc(act.n)}</b> is answering…`):`<b>${esc(act.n)}</b> ${g.res==='ok'?'got it':g.pickI<0?'ran out of time':'missed'}`;
    const exp=rev&&q.solved&&q.e?`<div class="exp">${g.res!=='ok'?`Answer: ${esc(q.ans)}. `:''}${esc(q.e)}</div>`:'';
    const tleft=g.phase==='ask'?(g.client?g.cT:g.t):0;
    box=`<div class="box qbox"><div class="who"><span>${who}</span><span class="dim">${esc(q.kind)}${q.passes?` · passed ×${q.passes}`:''} · worth ${Math.round(100*Math.pow(.75,q.elim.length))}</span></div><div class="trow"><div class="timer"><i id="tbar" style="width:${Math.max(0,tleft/g.timer*100)}%"></i></div><span class="tnum ${g.fastT?'fast':''}" id="tnum">${Math.max(0,Math.ceil(tleft/1000))}s</span></div>${g.phase==='ask'&&g.fastT?`<div class="dim" style="font-size:14px;margin:-6px 0 10px;color:var(--cyan)">Streak active: ${g.timer/1000}-second clock</div>`:''}${g.phase==='ask'&&q.hypo&&!g.fastT?`<div class="dim" style="font-size:14px;margin:-6px 0 10px;color:var(--gold)">Hypothetical: 20-second clock</div>`:''}<p class="q">${q.q}</p><div class="opts">${opts}</div>${exp}${rev&&g.wait?`<div class="row" style="margin-top:12px"><button class="btn gold" data-act="next" id="next">NEXT ▸</button></div>`:''}</div>`;
  }else box=`<div class="box qbox"><p class="vt dim" style="margin:0">The potato is choosing a topic. It is taking this very seriously.</p></div>`;
  let nr=g.narr||{t:'',c:''};
  if(g.net&&g.phase==='reveal'&&isMe(act)){const me=act,P=(a)=>a[(g.turnId||0)%a.length];nr=g.res==='ok'?(me.streak&&me.run===3?{t:P(NARR.streak),c:'cyan'}:{t:P(NARR.right),c:'good'}):g.res==='shield'?{t:P(NARR.shield),c:'cyan'}:!me.alive?{t:P(NARR.elimYou),c:'hot'}:{t:g.pickI<0?P(NARR.timeout):P(NARR.wrong),c:'hot'}}
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
  <details style="margin-top:16px"><summary class="gold" style="cursor:pointer">HOW SCORING WORKS</summary><table style="margin-top:8px"><tr><td>Correct answer</td><td>100</td></tr><tr><td>Each wrong pick before you (question was passed)</td><td>×0.75</td></tr><tr><td>Redemption: correct right after losing a life</td><td>×1.25</td></tr><tr><td>Streak active (3 in a row; lasts until a miss; your timer drops by 5 seconds)</td><td>×1.25</td></tr></table><p class="dim" style="font-size:14px">Bonuses multiply. Timeouts pass the question without lowering its value.</p></details></div>`;
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
  if(a==='menu'){if((v==='story'||v==='vs')&&!prof().name){go('profile');return}if(v==='story'){G=null;stopLoop();go('worlds')}else{if(v==='boards')loadBoard();go(v)}}
  else if(a==='home'){if(LOBBY&&V==='boards'){if(LOBBY.host){act('tolobby');return}V='lobby';render();return}if(LOBBY){leaveLobby();return}stopLoop();G=null;flavI=(flavI+1)%FLAV.length;go('title')}
  else if(a==='icon'){S.profile.icon=+v;keepName();render()}
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

/* ================= boot ================= */
(async function boot(){
  try{D=await (await fetch('data.json')).json();TOP=D.topics}catch(e){app.innerHTML='<div class="box vt">The potato could not find its questions. Reload to try again.</div>';return}
  render();goOnline();
})();
}
