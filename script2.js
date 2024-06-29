const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#080a11", "#637eae", "#7d5579", "#767c84", "#050a30"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});




const videosList = [
    {
        video: 'videos/btdmv.mp4',
        title: 'Born To Die',
        description: 'Lana Del Rey first major-label album was Born To Die, which came out in 2012. Although critics didn’t embrace the album, it reached No. 2 on the Billboard 200, has sold more than 7 million copies worldwide, and has been certified platinum five times. It remains her best-selling album to date and includes one of her most popular songs “Summertime Sadness.”'
    },
    {
        video: 'videos/bbmv.mp4',
        title: 'Blue Banister',
        description: 'In Just seven months after Chemtrails Over the Country Club, Del Rey was back with her eighth studio album, Blue Banisters. The October 2021 release didn’t fare quite as well as her previous albums, peaking at No. 8 on the Billboard 200. However, it became her sixth album to top Billboard’s Alternative Albums chart, setting a new record. (The musician had previously been tied with the Foo Fighters and Coldplay.)'
    },
    {
        video: 'videos/summv.mp4',
        title: 'Summertime Sadness',
        description: '“‘Summertime Sadness’ is a song that I love, because I didn’t compromise when I wrote it at all,” Del Rey affirmed to SUPERSUPER! magazine. “I wrote exactly what I felt, and put a melody to it that was perfect for the words. I was staying in Santa Monica, California with my composer and best friend, Daniel Heath. I would sit under the telephone wires and listen to them sizzle in the warm air while he went to work. I wanted to take the electricity and absorb it so it would make me feel alive and electric again. I felt happy in the warm [weather] and started writing about how sad and gorgeous the summertime felt to me.”'
    },
    {
        video: 'videos/dtmv.mp4',
        title: 'Doin Times',
        description: 'The lyrics of Lana Del Rey’s “Doin’ Time” deals with two distinctly-different topics. As far as the chorus is concerned, it centers on the wherewithal of the singer and her bandmates to make the party jump, particularly within the confines of “the L.B.C.” (Long Beach, California). It is also made explicitly clear that they are doing so during the “summertime”, giving the lyrics an overall feel-good vibe.”So again this track runs along two different themes. On one hand, it is a summer-based party song. But in terms of the actual title, what the singer likely means by “Doin’ Time”, a phrase commonly associated with serving a prison sentence, is that she is in love with a partner whose cheating ways are driving her crazy.'
    },
    {
        video: 'videos/fykmv.mp4',
        title: 'Dykttatuob',
        description: 'Lana Del Rey</b> "Did You Know That There’s a Tunnel Under Ocean Blvd" released in March 2023. It peaked at No. 3 on the Billboard 200 and extended her No. 1 alternative albums to seven. “Family of origin is the overall theme,” Del Rey told Billboard. “I think with Blue Banisters I wanted to capture this idea, too, but I flew it under the radar. I was trying to address some criticisms that I had heard said after Chemtrails… mostly that people don’t know much about me. I didn’t promote that theme of Blue Banisters at all intentionally. She went on to add, “In this album, I got to really finish my thoughts and get super specific, which I was not comfortable with completely before… I do list my grandpa, my brother, my dad, my Uncle Dave.”'
    },
    {
        video: 'videos/honeyaudio.mp4',
        title: 'Honeymoon',
        description: 'Lana Del Rey has described her dark, critically praised 2015 album, Honeymoon, as “a tribute to Los Angeles.” She moved to California in 2012 and says it’s a place where she’s found more musical collaborators than in New York. It reached No. 2 on the Billboard 200 and landed at No. 1 in countries like Australia and Ireland.'
    },
    {
        video: 'videos/ultraaudio.mp4',
        title: 'Ultraviolence',
        description: 'Ultraviolence is Lana Del Rey’s second studio album following her highly publicized debut with Born To Die. A notable departure from her orchestral and Baroque sound, the album features stronger, electric-guitar-based instrumentals. Lyrically, the album is more of a concept creation than a running narrative, and sees Lana addressing topics as break-ups and lost-love, all set in the vintage haze of 1950s and 1960s America. Lana has said that the album underwent a complete rework after she met producer Dan Auerbach, who convinced her to change production. The album debuted at #1 on the Billboard 200 albums chart and is still to date her highest opening sale for an album. The album also fared well with the critics, who praised her vocals and its cohesiveness compared to her previous works.'
    },
    {
        video: 'videos/nfraudio.mp4',
        title: 'Norman Fucking Rockwell',
        description: 'The album, Norman F––g Rockwell arrived at No. 3 on the Billboard 200 following its August 2019 debut, with “The Greatest” and the title track also earning releases as singles before the end of the year. Del Rey described the album to Billboard as, “A folk record with a little surf twist.” Both the album and its title track earned Grammy nominations for Album and Song of the Year.'
    },
    {
        video: 'videos/sythaudio.mp4',
        title: 'Say Yes to Heaven',
        description: '"Say Yes to Heaven" (also known as "Yes to Heaven") is a song by the American singer-songwriter Lana Del Rey. She wrote the track with its producer Rick Nowels in 2012 for her third studio album, Ultraviolence (2014), but left it out of the final track-list. After leaking online and becoming viral on TikTok, "Say Yes to Heaven" was released as a single without prior promotion on May 19, 2023.'
    },
];

document.getElementById('videosList').innerHTML = videosList.map((item) => {
    const { video, title } = item;
    return `
        <div class="list">
            <video src="${video}" class="list-video" controls></video>
            <h3 class="list-title">${title}</h3>
        </div>
    `;
}).join('');

let videoList = document.querySelectorAll('.video-list-box .list');
videoList.forEach(vid => {
    vid.addEventListener('click', () => {
        videoList.forEach(remove => { remove.classList.remove('active'); });
        vid.classList.add('active');
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').textContent;
        let description = videosList.find(item => item.title === title).description;
        document.querySelector('.main-video-box .main-video').src = src;
        document.querySelector('.main-video-box .main-video').play();
        document.querySelector('.main-video-box .main-vid-title').textContent = title;
        document.querySelector('.main-video-box .description-vid').textContent = description;
    });
});

// Add event listener to window resize event Music
window.addEventListener('resize', function() {
    // Get the list element
    const list = document.getElementById('list');

    // Get the number of columns based on screen width
    let columns = 3;
    if (window.innerWidth <= 600) {
        columns = 2;
    } else if (window.innerWidth <= 400) {
        columns = 1;
    }

    // Update the grid template columns
    list.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
});