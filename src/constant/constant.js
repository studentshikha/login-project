import home from "../assets/home (1).svg";
import notification from "../assets/notification.svg";
import heartShop from "../assets/heart (2).svg";
import message from "../assets/message.svg";
import wallet from "../assets/message (2).svg";
import favourite from "../assets/favorite.svg";
import profile from "../assets/profile.svg";
import setting from "../assets/setting.svg";

import main1 from "../assets/main1.png"
import main2 from "../assets/main2.png"
import main3 from "../assets/main3.png"
import main4 from "../assets/main4.png"

import right1 from "../assets/right1.png"
import right2 from "../assets/right2.png"
import right3 from "../assets/right3.png"
import right4 from "../assets/right4.png"
import right5 from "../assets/right5.png"
import avatar1 from"../assets/avatar1.png"
import avatar2 from"../assets/avatar2.png"
import avatar3 from"../assets/avatar3.png"
import avatar4 from"../assets/avatar4.png"

import post1 from "../assets/post1.png"
import post2 from "../assets/post2.png"
import image1 from "../assets/image1.png"
import image2 from "../assets/image 2.jpg"
 
 export const side = [
    {
      id:1,
      image:home,
      name: "Home"
    },
    {
      id:2,
      image:notification,
      name: "Notification"
    },
    {
      id:3,
      image:heartShop,
      name: "Shop"
    },
    {
      id:4,
      image:message,
      name: "Conversation"
    },
    {
      id:5,
      image:wallet,
      name: "Wallet"
    },
    {
      id:6,
      image:favourite,
      name: "Subscription"
    },
    {
      id:7,
      image:profile,
      name: "My Profile"
    },
    {
      id:8,
      image:setting,
      name: "Setting"
    },
  
  ];

  export const products = [
    {
      id: 1,
      image: main4, // Reuse this image for the first product
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 5,
    },
    {
      id: 2,
      image: main1, // Reuse this image for the second product
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 5,
    },
    {
      id: 3,
      image: main2, // Reuse this image for the third product
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 5,
    },
    {
      id: 4,
      image: main3, // Repeat the first image
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 5,
    },
  ];

  export  const artists = 
  [ { id: 1, name: 'Thomas Edward', handle: '@thewildwithyou', image: right1, avatar: avatar1 }, 
    { id: 2, name: 'Chris Doe', handle: '@thewildwithyou', image: right2, avatar: avatar2 }, 
    { id: 3, name: 'Emilie Jones', handle: '@thewildwithyou', image: right3, avatar: avatar3 },
     { id: 4, name: 'Jessica Williams', handle: '@thewildwithyou',  image: right4,avatar: avatar4 }, 
     { id: 5, name: ' Williams', handle: '@thithyou', image: right5, avatar: 'path_to_avatar_4' }, 
    ];

  
  export const imagesData = [ 
    { id: 1, 
      src: image1, 
      alt: 'Image 1 Description', 
      name: 'Lara Leones', 
      username: '@theWallart', 
      avatar:post1,
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      likes: '9.8k',
       comments: '8.6k', 
       shares: '7.2k' 
      },
  
  
  
        { 
          id: 2, 
          src: image2, 
          alt: 'Image 2 Description', 
          name: 'Thomas J.', 
          username: '@thecustomcreater', 
          avatar:post2,
          description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          likes: '8.4k',
           comments: '6.2k', 
           shares:'5.1k'
        }
      ];