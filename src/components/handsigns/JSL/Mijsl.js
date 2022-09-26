import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const miSign = new GestureDescription("Mi");
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
miSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
miSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.7);

//Index
miSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
miSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Middle
miSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
miSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
miSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
miSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
miSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
miSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);

export default miSign;
