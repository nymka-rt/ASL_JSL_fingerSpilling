import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const SuSign = new GestureDescription("Su");
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
SuSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
SuSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.7);

//Index
SuSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
SuSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.7);

//Middle
SuSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
SuSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.7);

//Ring
SuSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
SuSign.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.7);

//Pinky
SuSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
SuSign.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.7);
export default SuSign;
