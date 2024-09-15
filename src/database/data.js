//   For the Navbar
const user = {
  username: "Vishnu27",
  pfp: "https://i.pinimg.com/564x/97/96/d6/9796d6c74cb9c709242068b0f7199c86.jpg",
};

//   For the Sidebar
const playlists = [
  {
    title: "Old 90's",
    image: "https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2",
    link: "",
  },
  {
    title: "Gym Playlist",
    image: "https://i.scdn.co/image/ab67706c0000bebbc5cc2fbe603427c47b630014",
    link: "",
  },
  {
    title: "Top Gaming Tracks",
    image: "https://i.scdn.co/image/ab67706c0000bebb72ed21e90d7fc2e568c24ad5",
    link: "",
  },
  {
    title: "Indie Tunes",
    image: "https://i.scdn.co/image/ab67706c0000bebbf6391b95b72c240d1fd826bb",
    link: "",
  },
  {
    title: "This is Atif Aslam",
    image: "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
    link: "",
  },
  {
    title: "Long Drive",
    image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO4BaAkp-large.jpg",
    link: "",
  },
  {
    title: "Radio",
    image:
      "https://seeded-session-images.scdn.co/v1/img/artist/0bvLEf3ydME5vTuOwp6aKH/en",
    link: "",
  },
  {
    title: "Coke Studio",
    image: "https://i.scdn.co/image/ab67706f00000003a7aec3961666dee881cee250",
    link: "",
  },
  {
    title: "Love song",
    image: "https://i.scdn.co/image/ab67616d0000b273b38e53ebc43deea5ae7e57fd",
    link: "",
  },
  {
    title: "Uptown Funk",
    image: "https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2",
    link: "",
  },
  {
    title: "Gym Playlist",
    image: "https://i.scdn.co/image/ab67706c0000bebbc5cc2fbe603427c47b630014",
    link: "",
  },
  {
    title: "Top Gaming Tracks",
    image: "https://i.scdn.co/image/ab67706c0000bebb72ed21e90d7fc2e568c24ad5",
    link: "",
  },
  {
    title: "Indie Tunes",
    image: "https://i.scdn.co/image/ab67706c0000bebbf6391b95b72c240d1fd826bb",
    link: "",
  },
  {
    title: "Old 90's",
    image: "https://i.scdn.co/image/ab67706f0000000398bf3a4db76317b0c50f3b7c",
    link: "",
  },
  {
    title: "Radio",
    image:
      "https://seeded-session-images.scdn.co/v1/img/artist/0bvLEf3ydME5vTuOwp6aKH/en",
    link: "",
  },
  {
    title: "Love song",
    image: "https://i.scdn.co/image/ab67616d0000b273b38e53ebc43deea5ae7e57fd",
    link: "",
  },
  {
    title: "Violin Covers",
    image: "https://i.scdn.co/image/ab67706c0000bebb67d691f27ba898b859c99d4b",
    link: "",
  },
];

//   For the Rectangular Cards - 6 only
const topLists = [
  {
    title: "Liked Songs",
    image:
      "https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg",
    link: "",
  },
  {
    title: "Arijit Singh",
    image: "https://cdn.siasat.com/wp-content/uploads/2023/10/arijit-singh.jpg",
    link: "",
  },
  {
    title: "Yo Yo Honey Singh",
    image: "https://i.scdn.co/image/ab6761610000e5ebbc7e4fffd515b47ff1ebbc1f",
    link: "",
  },
  {
    title: "Ultimate Pop Gaming",
    image: "https://i.scdn.co/image/ab67706f000000038a24ebc68da6edc3eb998fcf",
    link: "",
  },
  {
    title: "Amit Trivedi Radio",
    image:
      "https://seeded-session-images.scdn.co/v1/img/artist/7HCqGPJcQTyGJ2yqntbuyr/en",
    link: "",
  },
  {
    title: "Morning Motivation",
    image: "https://i.scdn.co/image/ab67706f00000003037da32de996d7c859b3b563",
    link: "",
  },
];

// For different sections with Cards
const sections = [
  {
    category: "Best of Artists",
    playlists: [
      {
        title: "This is Kishore Kumar",
        subtitle:
          "Listen to Kishore Kumar's latest releases, plus all her essential hits.",
        image:
          "https://yt3.googleusercontent.com/VzKX7I0iD2eEHoWqk2drqOTFsPWX6hTGul0drSXXde8hWEcYNq7H_VdWHBC5RDawV_LoUBmD=s900-c-k-c0x00ffffff-no-rj",
        artist: false,
      },
      {
        title: "This is Mohammed Rafi",
        subtitle:
          "You'll Never Be The Same after listening to all her biggest hits.",
        image:
          "https://im.rediff.com/movies/2006/aug/23sld1.jpg?w=450&h=450",
        artist: false,
      },
      {
        title: "This is Pritam",
        subtitle: "The Bollywood crooner's best songs.",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
        artist: false,
      },
      {
        title: "This is Kumar Sanu",
        subtitle:
          "This is Kumar Sanu. The essential tracks, all in one playlist.",
        image: "https://images.indianexpress.com/2023/03/WhatsApp-Image-2023-03-21-at-4.15.09-PM.jpeg",
        artist: false,
      },
      {
        title: "This is KK",
        subtitle:
          "This is KK. The essential tracks, all in one playlist.",
        image: "https://i.scdn.co/image/ab6761610000e5ebb09a31f853166e721d4d46b2",
        artist: false,
      },
      {
        title: "This is Sunidhi Chauhan",
        subtitle:
          "This is Sunidhi Chauhan. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1SfCKv-large.jpg",
        artist: false,
      },
      {
        title: "This is A. R. Rahman",
        subtitle:
          "This is A.R. Rahman. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-large.jpg",
        artist: false,
      },
      {
        title: "This is Anuv Jain",
        subtitle: "The essential Anuv Jain, all in one place.",
        image:
          "https://ubcitybangalore.in/wp-content/uploads/2021/12/9.jpg",
        artist: false,
      },
      {
        title: "This is Coldplay",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a231f671c289555cfd09f716",
        artist: false,
      },
    ],
  },
  {
    category: "Your Top Mixes",
    playlists: [
      {
        title: "This is Kishore Kumar",
        subtitle:
          "Listen to Kishore Kumar's latest releases, plus all her essential hits.",
        image:
          "https://yt3.googleusercontent.com/VzKX7I0iD2eEHoWqk2drqOTFsPWX6hTGul0drSXXde8hWEcYNq7H_VdWHBC5RDawV_LoUBmD=s900-c-k-c0x00ffffff-no-rj",
        artist: false,
      },
      {
        title: "This is Mohammed Rafi",
        subtitle:
          "You'll Never Be The Same after listening to all her biggest hits.",
        image:
          "https://im.rediff.com/movies/2006/aug/23sld1.jpg?w=450&h=450",
        artist: false,
      },
      {
        title: "This is Pritam",
        subtitle: "The Bollywood crooner's best songs.",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
        artist: false,
      },
      {
        title: "This is Kumar Sanu",
        subtitle:
          "This is Kumar Sanu. The essential tracks, all in one playlist.",
        image: "https://images.indianexpress.com/2023/03/WhatsApp-Image-2023-03-21-at-4.15.09-PM.jpeg",
        artist: false,
      },
      {
        title: "This is KK",
        subtitle:
          "This is KK. The essential tracks, all in one playlist.",
        image: "https://i.scdn.co/image/ab6761610000e5ebb09a31f853166e721d4d46b2",
        artist: false,
      },
      {
        title: "This is Sunidhi Chauhan",
        subtitle:
          "This is Sunidhi Chauhan. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1SfCKv-large.jpg",
        artist: false,
      },
      {
        title: "This is A. R. Rahman",
        subtitle:
          "This is A.R. Rahman. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-large.jpg",
        artist: false,
      },
      {
        title: "This is Anuv Jain",
        subtitle: "The essential Anuv Jain, all in one place.",
        image:
          "https://ubcitybangalore.in/wp-content/uploads/2021/12/9.jpg",
        artist: false,
      },
      {
        title: "This is Coldplay",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a231f671c289555cfd09f716",
        artist: false,
      },
    ],
  },
  {
    category: "Made for You",
    playlists: [
      {
        title: "This is Kishore Kumar",
        subtitle:
          "Listen to Kishore Kumar's latest releases, plus all her essential hits.",
        image:
          "https://yt3.googleusercontent.com/VzKX7I0iD2eEHoWqk2drqOTFsPWX6hTGul0drSXXde8hWEcYNq7H_VdWHBC5RDawV_LoUBmD=s900-c-k-c0x00ffffff-no-rj",
        artist: false,
      },
      {
        title: "This is Mohammed Rafi",
        subtitle:
          "You'll Never Be The Same after listening to all her biggest hits.",
        image:
          "https://im.rediff.com/movies/2006/aug/23sld1.jpg?w=450&h=450",
        artist: false,
      },
      {
        title: "This is Pritam",
        subtitle: "The Bollywood crooner's best songs.",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
        artist: false,
      },
      {
        title: "This is Kumar Sanu",
        subtitle:
          "This is Kumar Sanu. The essential tracks, all in one playlist.",
        image: "https://images.indianexpress.com/2023/03/WhatsApp-Image-2023-03-21-at-4.15.09-PM.jpeg",
        artist: false,
      },
      {
        title: "This is KK",
        subtitle:
          "This is KK. The essential tracks, all in one playlist.",
        image: "https://i.scdn.co/image/ab6761610000e5ebb09a31f853166e721d4d46b2",
        artist: false,
      },
      {
        title: "This is Sunidhi Chauhan",
        subtitle:
          "This is Sunidhi Chauhan. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1SfCKv-large.jpg",
        artist: false,
      },
      {
        title: "This is A. R. Rahman",
        subtitle:
          "This is A.R. Rahman. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-large.jpg",
        artist: false,
      },
      {
        title: "This is Anuv Jain",
        subtitle: "The essential Anuv Jain, all in one place.",
        image:
          "https://ubcitybangalore.in/wp-content/uploads/2021/12/9.jpg",
        artist: false,
      },
      {
        title: "This is Coldplay",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a231f671c289555cfd09f716",
        artist: false,
      },
    ],
  },
  {
    category: "Recently Played",
    playlists: [
      {
        title: "This is Kishore Kumar",
        subtitle:
          "Listen to Kishore Kumar's latest releases, plus all her essential hits.",
        image:
          "https://yt3.googleusercontent.com/VzKX7I0iD2eEHoWqk2drqOTFsPWX6hTGul0drSXXde8hWEcYNq7H_VdWHBC5RDawV_LoUBmD=s900-c-k-c0x00ffffff-no-rj",
        artist: false,
      },
      {
        title: "This is Mohammed Rafi",
        subtitle:
          "You'll Never Be The Same after listening to all her biggest hits.",
        image:
          "https://im.rediff.com/movies/2006/aug/23sld1.jpg?w=450&h=450",
        artist: false,
      },
      {
        title: "This is Pritam",
        subtitle: "The Bollywood crooner's best songs.",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
        artist: false,
      },
      {
        title: "This is Kumar Sanu",
        subtitle:
          "This is Kumar Sanu. The essential tracks, all in one playlist.",
        image: "https://images.indianexpress.com/2023/03/WhatsApp-Image-2023-03-21-at-4.15.09-PM.jpeg",
        artist: false,
      },
      {
        title: "This is KK",
        subtitle:
          "This is KK. The essential tracks, all in one playlist.",
        image: "https://i.scdn.co/image/ab6761610000e5ebb09a31f853166e721d4d46b2",
        artist: false,
      },
      {
        title: "This is Sunidhi Chauhan",
        subtitle:
          "This is Sunidhi Chauhan. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1SfCKv-large.jpg",
        artist: false,
      },
      {
        title: "This is A. R. Rahman",
        subtitle:
          "This is A.R. Rahman. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-large.jpg",
        artist: false,
      },
      {
        title: "This is Anuv Jain",
        subtitle: "The essential Anuv Jain, all in one place.",
        image:
          "https://ubcitybangalore.in/wp-content/uploads/2021/12/9.jpg",
        artist: false,
      },
      {
        title: "This is Coldplay",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a231f671c289555cfd09f716",
        artist: false,
      },
    ],
  },

  {
    category: "Spotify original & exclusive shows",
    playlists: [
      {
        title: "This is Kishore Kumar",
        subtitle:
          "Listen to Kishore Kumar's latest releases, plus all her essential hits.",
        image:
          "https://yt3.googleusercontent.com/VzKX7I0iD2eEHoWqk2drqOTFsPWX6hTGul0drSXXde8hWEcYNq7H_VdWHBC5RDawV_LoUBmD=s900-c-k-c0x00ffffff-no-rj",
        artist: false,
      },
      {
        title: "This is Mohammed Rafi",
        subtitle:
          "You'll Never Be The Same after listening to all her biggest hits.",
        image:
          "https://im.rediff.com/movies/2006/aug/23sld1.jpg?w=450&h=450",
        artist: false,
      },
      {
        title: "This is Pritam",
        subtitle: "The Bollywood crooner's best songs.",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
        artist: false,
      },
      {
        title: "This is Kumar Sanu",
        subtitle:
          "This is Kumar Sanu. The essential tracks, all in one playlist.",
        image: "https://images.indianexpress.com/2023/03/WhatsApp-Image-2023-03-21-at-4.15.09-PM.jpeg",
        artist: false,
      },
      {
        title: "This is KK",
        subtitle:
          "This is KK. The essential tracks, all in one playlist.",
        image: "https://i.scdn.co/image/ab6761610000e5ebb09a31f853166e721d4d46b2",
        artist: false,
      },
      {
        title: "This is Sunidhi Chauhan",
        subtitle:
          "This is Sunidhi Chauhan. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1SfCKv-large.jpg",
        artist: false,
      },
      {
        title: "This is A. R. Rahman",
        subtitle:
          "This is A.R. Rahman. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-large.jpg",
        artist: false,
      },
      {
        title: "This is Anuv Jain",
        subtitle: "The essential Anuv Jain, all in one place.",
        image:
          "https://ubcitybangalore.in/wp-content/uploads/2021/12/9.jpg",
        artist: false,
      },
      {
        title: "This is Coldplay",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a231f671c289555cfd09f716",
        artist: false,
      },
    ],
  },
  {
    category: "Based on your recent listening",
    playlists: [
      {
        title: "This is Kishore Kumar",
        subtitle:
          "Listen to Kishore Kumar's latest releases, plus all her essential hits.",
        image:
          "https://yt3.googleusercontent.com/VzKX7I0iD2eEHoWqk2drqOTFsPWX6hTGul0drSXXde8hWEcYNq7H_VdWHBC5RDawV_LoUBmD=s900-c-k-c0x00ffffff-no-rj",
        artist: false,
      },
      {
        title: "This is Mohammed Rafi",
        subtitle:
          "You'll Never Be The Same after listening to all her biggest hits.",
        image:
          "https://im.rediff.com/movies/2006/aug/23sld1.jpg?w=450&h=450",
        artist: false,
      },
      {
        title: "This is Pritam",
        subtitle: "The Bollywood crooner's best songs.",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
        artist: false,
      },
      {
        title: "This is Kumar Sanu",
        subtitle:
          "This is Kumar Sanu. The essential tracks, all in one playlist.",
        image: "https://images.indianexpress.com/2023/03/WhatsApp-Image-2023-03-21-at-4.15.09-PM.jpeg",
        artist: false,
      },
      {
        title: "This is KK",
        subtitle:
          "This is KK. The essential tracks, all in one playlist.",
        image: "https://i.scdn.co/image/ab6761610000e5ebb09a31f853166e721d4d46b2",
        artist: false,
      },
      {
        title: "This is Sunidhi Chauhan",
        subtitle:
          "This is Sunidhi Chauhan. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1SfCKv-large.jpg",
        artist: false,
      },
      {
        title: "This is A. R. Rahman",
        subtitle:
          "This is A.R. Rahman. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-large.jpg",
        artist: false,
      },
      {
        title: "This is Anuv Jain",
        subtitle: "The essential Anuv Jain, all in one place.",
        image:
          "https://ubcitybangalore.in/wp-content/uploads/2021/12/9.jpg",
        artist: false,
      },
      {
        title: "This is Coldplay",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a231f671c289555cfd09f716",
        artist: false,
      },
    ],
  },
  {
    category: "India's Best",
    playlists: [
      {
        title: "This is Kishore Kumar",
        subtitle:
          "Listen to Kishore Kumar's latest releases, plus all her essential hits.",
        image:
          "https://yt3.googleusercontent.com/VzKX7I0iD2eEHoWqk2drqOTFsPWX6hTGul0drSXXde8hWEcYNq7H_VdWHBC5RDawV_LoUBmD=s900-c-k-c0x00ffffff-no-rj",
        artist: false,
      },
      {
        title: "This is Mohammed Rafi",
        subtitle:
          "You'll Never Be The Same after listening to all her biggest hits.",
        image:
          "https://im.rediff.com/movies/2006/aug/23sld1.jpg?w=450&h=450",
        artist: false,
      },
      {
        title: "This is Pritam",
        subtitle: "The Bollywood crooner's best songs.",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
        artist: false,
      },
      {
        title: "This is Kumar Sanu",
        subtitle:
          "This is Kumar Sanu. The essential tracks, all in one playlist.",
        image: "https://images.indianexpress.com/2023/03/WhatsApp-Image-2023-03-21-at-4.15.09-PM.jpeg",
        artist: false,
      },
      {
        title: "This is KK",
        subtitle:
          "This is KK. The essential tracks, all in one playlist.",
        image: "https://i.scdn.co/image/ab6761610000e5ebb09a31f853166e721d4d46b2",
        artist: false,
      },
      {
        title: "This is Sunidhi Chauhan",
        subtitle:
          "This is Sunidhi Chauhan. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1SfCKv-large.jpg",
        artist: false,
      },
      {
        title: "This is A. R. Rahman",
        subtitle:
          "This is A.R. Rahman. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-large.jpg",
        artist: false,
      },
      {
        title: "This is Anuv Jain",
        subtitle: "The essential Anuv Jain, all in one place.",
        image:
          "https://ubcitybangalore.in/wp-content/uploads/2021/12/9.jpg",
        artist: false,
      },
      {
        title: "This is Coldplay",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a231f671c289555cfd09f716",
        artist: false,
      },
    ],
  },
  {
    category: "Throwback",
    playlists: [
      {
        title: "This is Kishore Kumar",
        subtitle:
          "Listen to Kishore Kumar's latest releases, plus all her essential hits.",
        image:
          "https://yt3.googleusercontent.com/VzKX7I0iD2eEHoWqk2drqOTFsPWX6hTGul0drSXXde8hWEcYNq7H_VdWHBC5RDawV_LoUBmD=s900-c-k-c0x00ffffff-no-rj",
        artist: false,
      },
      {
        title: "This is Mohammed Rafi",
        subtitle:
          "You'll Never Be The Same after listening to all her biggest hits.",
        image:
          "https://im.rediff.com/movies/2006/aug/23sld1.jpg?w=450&h=450",
        artist: false,
      },
      {
        title: "This is Pritam",
        subtitle: "The Bollywood crooner's best songs.",
        image:
          "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
        artist: false,
      },
      {
        title: "This is Kumar Sanu",
        subtitle:
          "This is Kumar Sanu. The essential tracks, all in one playlist.",
        image: "https://images.indianexpress.com/2023/03/WhatsApp-Image-2023-03-21-at-4.15.09-PM.jpeg",
        artist: false,
      },
      {
        title: "This is KK",
        subtitle:
          "This is KK. The essential tracks, all in one playlist.",
        image: "https://i.scdn.co/image/ab6761610000e5ebb09a31f853166e721d4d46b2",
        artist: false,
      },
      {
        title: "This is Sunidhi Chauhan",
        subtitle:
          "This is Sunidhi Chauhan. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1SfCKv-large.jpg",
        artist: false,
      },
      {
        title: "This is A. R. Rahman",
        subtitle:
          "This is A.R. Rahman. The essential tracks, all in one playlist.",
        image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO0KEAbC-large.jpg",
        artist: false,
      },
      {
        title: "This is Anuv Jain",
        subtitle: "The essential Anuv Jain, all in one place.",
        image:
          "https://ubcitybangalore.in/wp-content/uploads/2021/12/9.jpg",
        artist: false,
      },
      {
        title: "This is Coldplay",
        subtitle: "The essential tracks, all in one playlist.",
        image:
          "https://i.scdn.co/image/ab67706f00000003a231f671c289555cfd09f716",
        artist: false,
      },
    ],
  },
];

export { user, playlists, topLists, sections };