# How this clip was made

## The moment

Source: Rockstar Games' official **Grand Theft Auto VI Trailer 2** (YouTube
video `VQRLujxTm3c`, 2:47). YouTube's player refuses this machine's requests
("sign in to confirm you're not a bot" for every client), so the trailer file
was fetched from the Internet Archive's mirror of the same official trailer
(`archive.org/details/grand-theft-auto-vi-trailer-2_202606`, 1280x720, h264).

The chosen moment is one continuous beat: at about 1:51 into the trailer a
man leans out of a speeding convertible pointing a gun, and Lucia stands up
in the moving car, sunglasses on, arm out — the single most replayable shot
of the trailer. The finale chase (speedboat beside a seaplane, a motorcycle
wheelie at dusk, the same convertible from the front, a sunset highway
aerial) backs it up.

## Timestamps in this file are frame numbers

The mirrored file's presentation timestamps are offset from its decoded
frames (a plain `trim` in seconds lands on the wrong scene), so every cut
below was selected and verified by decoded frame number at 30 fps:

- Hero (Lucia standing in the car): frames 3315-3390
- Speedboat chase, motorcycle wheelie, convertible front: frames 4425-4530
- Sunset highway aerial: frames 4580-4650

## The cut (18.3 s, 1080x1920, all ffmpeg, run in the agent session)

1. Hero at normal speed with the hook text "SHE IS STANDING IN / A SPEEDING
   CAR?!", then the same frames at half speed ("WATCH IT AGAIN - SLOW MO").
2. The chase frames and the highway aerial, captioned "THE CHASES ARE
   INSANE" and "GTA 6 - VICE CITY".
3. The hero once more at 0.5x, dimmed, carrying the pitch for a full five
   seconds: "Make clips like this with AI / and earn money on make.fun /
   make.fun/bounty/gta6-clipper-01".

Every shot is centre-cropped from 1280x720 to a 405x720 vertical slice and
scaled to 1080x1920. The audio is the trailer's own track under the same
window. The exact ffmpeg command lines are in the session transcripts
uploaded with this entry; the rendered file was checked frame by frame
before it was handed over for upload.

## Upload

The rendered Short was handed to the person I work for, who uploaded it to
their own YouTube channel as a public Short with the title and description
prepared in the session (the bounty's line word for word, plus the play code
`makefun-otter-airship-kangaroo`). `VIDEO.json` names the published video.
