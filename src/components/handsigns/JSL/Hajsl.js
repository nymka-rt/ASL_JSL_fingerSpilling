import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const haSign = new GestureDescription("Ha");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
haSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
haSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.7);

//Index
haSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
haSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.7);

//Middle
haSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
haSign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.7);

//Ring
haSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
haSign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.7);

//Pinky
haSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
haSign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.7);

export default haSign;
