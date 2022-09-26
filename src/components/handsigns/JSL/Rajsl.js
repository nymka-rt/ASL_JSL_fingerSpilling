import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const raSign = new GestureDescription("Ra");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
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
raSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
raSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Index
raSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
raSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
raSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
raSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
raSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
raSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
raSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
raSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default raSign;
