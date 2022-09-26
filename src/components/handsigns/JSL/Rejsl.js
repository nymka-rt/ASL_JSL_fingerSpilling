import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const reSign = new GestureDescription("Re");
// [
//     [
//       "Thumb",
//       "No Curl",
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
reSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
reSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.7);

//Index
reSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
reSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
reSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
reSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
reSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
reSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
reSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
reSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);

export default reSign;
