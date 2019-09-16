const guideText = new Map();

guideText.set("Introduction", `<p><span class="content">
Werewolves is a party game.  It was first invented in the 1970s by a Russian professor, Dmitri Davidov, as an experiment in group psychology.  Since then, it has been developed and codified by students at Princeton University under the name ‘Mafia’.  Depending on your perspective, Werewolf is a study of interactions in a situation where there is an informed minority and an uninformed majority; or a study of group dynamics in an atmosphere of mistrust; or an experiment in mass hysteria.  First and foremost, however, it is an intriguing, challenging and enjoyable co-operative party game.</span></p>`);
guideText.set("You Will Need", `
<ul>
    <li> <span class="content">
        At least 4 people, not including the Narrator. The more players, the merrier. As you add players,
        the game will expand to include more roles so everyone’s involved. Things will get more
        complicated, but the application will help keep things on track.
    </span></li>
</ul>`);
guideText.set("Background", `<p><span class="content">
The game is set in a small, isolated 19th-century village that has no contact with the outside world.  Most of the residents are innocent Villagers, but a few are also secretly other roles.  By night, the Werewolves roam about the village, picking a law-abiding Villager as their victim and devouring him or her.  By day, the Villagers gather together, seeking justice, and may vote to execute one of their number in an attempt to eradicate the threat.  The Werewolves (and other roles) form one team: they win if they manage to kill all the Villagers.  The Villagers (and other roles) form the other team: they win if they manage to kill all the Werewolves.  To add some intrigue to the game, there is also certain roles who work neutrally for their own gain.  Finally, one player (you) is a Narrator.  As Narrator, you are neither a Werewolf nor a Villager, but a neutral referee that facilitates the game.`);
guideText.set("Narrator’s Responsibilities", `
<ul>
    <li><span class="content">
        Explain how the game works at the start.
    </span></li>
    <li><span class="content">
        Assign player roles. Roles are assigned secretly, so that each player knows his own role but nobody
        elses. The best way to accomplish this is using a deck of appropriately labelled cards. The
        Narrator simply deals one card facedown to each player, and each player looks at his own card to
        find out his assigned role. Alternatively, the Narrator can choose Roles on the first night,
        selecting people by touching them while everyone is asleep.
    </span></li>
    <li><span class="content">
        Make sure each player understands the nature of their role.
    </span></li>
    <li><span class="content">
        Manage the flow of the rounds, from night to day and back to night.
    </span></li>
    <li><span class="content">
        Act as a referee in the event of disputes.
    </span></li>
</ul>`);
guideText.set("Roles", `
<p><strong><span class="content" style="color: #38761d;">
    Green
</span></strong>
<span class="content">
    is a Villager Team Member.
</span></p>
<p><strong><span class="content" style="color: #ff0000;">
    Red
</span></strong>
<span class="content">
    is a Werewolf Team Member.
</span></p>
<p style="text-align: left;">&nbsp;</p>
<ul>
    <li><strong><span class="content" style="color: #ff0000;">
    Werewolves
    </span></strong>
    <span class="content">:
    A team of hungry werewolves. They choose one person at night to try and devour, then act
    normally during the day as a villager. They encompass the main component of the Werewolf
    team.
    </span></li>
<li>
<strong><span class="content" style="color: #38761d;">Doctor</span></strong><span class="content">:
    A skilled medical student. They choose one person at night to try and save from harm.
    That person is
    then protected from any harm that will befall them that night. They can choose to save
    themselves as
    much as they would like.</span></li>
<li>
<strong><span class="content" style="color: #38761d;">Little
        Girl</span></strong><strong><span style="font-size: 11pt; font-family: Arial; color: #38761d; background-color: transparent; font-variant: normal; text-decoration: underline; -webkit-text-decoration-skip: none; text-decoration-skip-ink: none; vertical-align: baseline;">:</span></strong><span class="content">
    A nosey little girl. This player is special in the fact that they can open their eyes
    and peek at
    any point during the events of the night in order to see who is who. However, this runs
    the risk of
    getting caught by the Werewolves, which means they will be a primary target. The app
    will have you
    wake up the Little Girl on the first night, simply to relay the instructions to her.
    After that, she
    does not need prompting.</span></li>
<li>
<strong><span class="content" style="color: #38761d;">Cupid</span></strong><span class="content">:
    The matchmaker. This player on the first night love links two people together. From then
    on in the
    game, if one of the lovers dies (from any means) then the other one will die from a
    broken heart.
    Cupid can choose to love link himself with someone else. If the lovers make it to the
    end of the
    game alive, they get a special win for surviving together.</span></li>
<li>
<strong><span class="content" style="color: #38761d;">Demon
        Butler</span></strong><span style="font-size: 11pt; font-family: Arial; background-color: transparent; font-weight: 400; font-variant: normal; text-decoration: underline; -webkit-text-decoration-skip: none; text-decoration-skip-ink: none; vertical-align: baseline;">:</span><span class="content">
    A menacing butler. This player each night chooses whether to let his Demon Dog out for
    the night.
    Should he release his dog, he runs the risk of getting killed by his own beast. The
    Demon Butler is
    technically a part of the Villager team: if he is alive but all the Werewolf team
    members are dead,
    he wins with the Villagers. Should the Demon Butler die, the Demon Dog is let out
    permanently for
    the rest of the game.</span></li>
<li>
<strong><span class="content" style="color: #ff0000;">Demon
        Dog</span></strong><span class="content">:
    A terrifying dog even the Werewolves fear. This player each night chooses one person to
    murder, then
    acts normally during the day. They are a member of the Werewolf team, and win if they
    win. However,
    the Demon Dog only successfully kills someone if they were let out for the night. In
    addition, the
    Demon Dog can kill Werewolves on accident. The main strategy for the Demon Dog is
    usually to kill
    the Demon Butler, so that way they have free reign for the rest of the game.</span></li>
<li>
<strong><span class="content" style="color: #38761d;">Old
        Man:</span></strong><span class="content">
    A cranky old man. This player does nothing until he is killed. If he is killed at night,
    then the
    player is prompted to kill someone in spiteful revenge. However if the Old Man is
    executed, then he
    does not get the chance to kill someone. The Old Man wins with the Villager team.</span>
</li>
</ul>`);
guideText.set("Playing The Game", `
<p><span class="content">
    The game proceeds in rounds. Each round is divided into two phases: night and day.
    Each round begins with night. During the night, the village goes to sleep; all players bow their heads and
    close their eyes. As the night goes on, the Narrator awakens each Role and has them perform their task. After
    the night is over, the Narrator dictates to the town what events took place last night. Then, the day
    begins; all non-eliminated players vote on who to execute. Immediately after the trial is over, a
    new round begins.</span></p>
            <p style="text-align: left;">&nbsp;</p>
            <p><span class="content">As
                    Narrator, it’s your job to announce nightfall and daybreak, and to give
                    instructions in between.
                    It will also help if you remind new players of the need to stay as silent as possible,
                    to make quick
                    decisions, and to pay attention when you communicate with them – because there are
                    very few
                    circumstances in which they will be able to ask for clarification without giving
                    themselves away!
                </span></p>
            <h2 style="line-height: 1.38; margin-top: 16pt; margin-bottom: 4pt; text-align: left;"><span style="font-size: 13.999999999999998pt; font-family: Arial; color: #575757; ">Nightfall</span>
            </h2>
            <p><span class="content">Everyone
                    closes their eyes and bows their heads. The app will prompt you for each role (if they
                    are alive) so
                    don’t worry about forgetting someone. When the prompt shows up, say:
                    “(Character),
                    awake.” The Character depending on their role, must silently fulfill their job for
                    the night. If
                    their role involves choosing other players, they must choose one sleeping player and
                    then identify their
                    choice to you, probably by pointing or nodding in his/her direction so that you
                    understand which player
                    is being identified. They need to do this without revealing themselves by giving away
                    audible clues to
                    the sleeping Villagers. If they can’t decide after a few seconds or if you
                    can’t work out
                    who is being identified, you can prompt them audible to be more specific. After a
                    decision is made and
                    the role for that night is complete, say: “(Character), asleep.” Do this for
                    every role that
                    is prompted by you from the game. Once it prints off the events for the night (i.e it
                    says “Last
                    night,”), the night is over. </span></p>
            <h2 style="line-height: 1.38; margin-top: 16pt; margin-bottom: 4pt; text-align: left;"><span style="font-size: 13.999999999999998pt; font-family: Arial; color: #575757; ">Daybreak</span>
            </h2>
            <p><span class="content">All
                    players open their eyes. The game will give you a readout of the events of the night,
                    not all of them
                    are relevant to the players. You as the Narrator interpret the events and relay them to
                    the player base,
                    explaining who died and from what. Those players are now eliminated (see later). </span>
            </p>
            <h2 style="line-height: 1.38; margin-top: 16pt; margin-bottom: 4pt; text-align: left;"><span style="font-size: 13.999999999999998pt; font-family: Arial; color: #575757; ">Day</span>
            </h2>
            <p><span class="content">Day
                    follows after the Daybreak. During the day, (non-eliminated) players discuss the events
                    of the preceding
                    night and debate who should be in an attempt to catch the Werewolves. Unlike night, the
                    structure of day
                    is very free. As Narrator, you should encourage players to talk freely, voicing
                    suspicions and asking
                    questions of each other. If the players are new to the game, you may also want to
                    explain how executing
                    works (see below) and give some general tactical advice. Other than that, you
                    shouldn’t need to
                    intervene until a group consensus starts to appear. When you notice the beginnings of a
                    consensus, with
                    clear suspicions being voiced about one or more players, interrupt the discussion to ask
                    the group
                    whether they are ready to accuse someone. In order to proceed to the vote, an accusation
                    needs to be
                    proposed and seconded by a different players. If this is achieved, then all
                    (non-eliminated) players
                    vote on the question ‘Should we execute this player?’. If a simple majority
                    of players votes
                    Yes, then the accused player is executed and immediately eliminated from the game. If a
                    majority vote
                    No, then the accusation fails and debate may continue. The day ends immediately when a
                    player has been
                    executed. It also ends immediately, without a execution, if three successive accusations
                    all fail to
                    muster a majority. When day ends, a new round begins, starting with nightfall. </span>
            </p>`);
guideText.set("Eliminated Players", `
<p><span class="content">
    A player who is killed for any reason is eliminated. Eliminated players can stay in
    the room and watch the game – including keeping their eyes open at night, if they wish – but
    they may not contribute in any way to the game, either by communicating in any way with the
    people around them or by voting. Once again, they are to remain SILENT while eliminated.
</span></p>`);
guideText.set("Winning The Game", `
<p><span class="content">
    The game is won when either the last member of the Werewolf team is eliminated (in
    which case the Villager team wins) or the last Villager team member is eliminated (in which case the
    Werewolves team wins). Note that a victory for either team is shared by all members of that team, 
    whether or not they were eliminated. 
</span></p>`);


export default guideText;
