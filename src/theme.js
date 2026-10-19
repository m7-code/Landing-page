// Shared colours + links — baqi sab components yahin se import karte hain
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";

export const C = {
  navy: "#1f2a6b",
  navyDark: "#141b4a",
  gold: "#f2b416",
  purple: "#5b1a8c",
  green: "#5a9a55",
  maroon: "#7a1a0a",
  cream: "#f3fede",
  linkBlue: "#3b4f9a",
};

export const DONATE_URL = "#donate"; // TODO: PayPal / Stripe / Givebutter link yahan lagao

// Pictures aane par yahan import karke set kar dena, e.g.
// import heroBg from "./assets/hero-bg.jpg";  ->  export const HERO_BG = heroBg;
export const HERO_BG = pic1;     // pehle "pic1.jpg" tha
export const HERO_IMAGE = pic2;  // pehle "pic2.jpg" tha
export const VISION_IMAGE = pic3;
export const IMPACT_IMAGE = pic4;
export const FOUNDER_IMAGE = null; // photo aane par: import founderPic from "./assets/founder.jpg"; phir = founderPic