import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const no2Sign = new GestureDescription("No2");
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
no2Sign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
no2Sign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Index
no2Sign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
no2Sign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.7);

//Middle
no2Sign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
no2Sign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
no2Sign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
no2Sign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
no2Sign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
no2Sign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);

export default no2Sign;
