import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const naSign = new GestureDescription("Na");
// [
//     ["Thumb", "No Curl", "Vertical Up"],
//     ["Index", "Half Curl", "Vertical Up"],
//     ["Middle", "Full Curl", "Vertical Up"],
//     ["Ring", "Full Curl", "Diagonal Up Right"],
//     ["Pinky", "No Curl", "Diagonal Up Right"],
//   ];

//Thumb
naSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
naSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.7);

//Index
naSign.addCurl(Finger.Index, FingerCurl.NofCurl, 1);
naSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.7);

//Middle
naSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
naSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.7);

//Ring
naSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1);
naSign.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.7);

//Pinky
naSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
naSign.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.7);

export default naSign;
