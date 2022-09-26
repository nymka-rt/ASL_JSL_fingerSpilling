import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

const ejsl = new GestureDescription("E");
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "Half Curl",
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
ejsl.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ejsl.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Index
ejsl.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
ejsl.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
ejsl.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
ejsl.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
ejsl.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ejsl.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
ejsl.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
ejsl.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
export default ejsl;
