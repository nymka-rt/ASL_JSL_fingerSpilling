import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const niSign = new GestureDescription("Ni");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
niSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
niSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Index
niSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
niSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Middle
niSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
niSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
niSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
niSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
niSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
niSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);

export default niSign;
