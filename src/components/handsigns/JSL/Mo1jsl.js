import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const mo1Sign = new GestureDescription("Mo1");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Half Curl",
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
mo1Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
mo1Sign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
mo1Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
mo1Sign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
mo1Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
mo1Sign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
mo1Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
mo1Sign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.7);

//Pinky
mo1Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
mo1Sign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default mo1Sign;
