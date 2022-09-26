import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const neSign = new GestureDescription("Ne");
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
neSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
neSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.7);

//Index
neSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
neSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.7);

//Middle
neSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
neSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.7);

//Ring
neSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
neSign.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.7);

//Pinky
neSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
neSign.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.7);

export default neSign;
