import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const yaSign = new GestureDescription("Ya");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
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
//       "No Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
yaSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
yaSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
yaSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
yaSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
yaSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
yaSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
yaSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
yaSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
yaSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
yaSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);

export default yaSign;
