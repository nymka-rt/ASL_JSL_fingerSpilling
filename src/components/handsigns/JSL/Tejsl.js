import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const teSign = new GestureDescription("Te");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
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
teSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1);
teSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

//Index
teSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
teSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);

//Middle
teSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
teSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
teSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
teSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.8);

//Pinky
teSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
teSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.8);

export default teSign;
