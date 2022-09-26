import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const maSign = new GestureDescription("Ma");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Left"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
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
maSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
maSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.7);

//Index
maSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
maSign.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.7);

//Middle
maSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
maSign.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.7);

//Ring
maSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
maSign.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.7);

//Pinky
maSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1);
maSign.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.7);

export default maSign;
