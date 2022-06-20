import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "../utilities";
import * as fp from "fingerpose";
import { RiCameraFill, RiCameraOffFill } from "react-icons/ri";
import Handsigns from "../../components/handsigns/ASL";

import {
  Text,
  Heading,
  Button,
  Image,
  Stack,
  Container,
  Box,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react";

import { Signimage, Signpass } from "../../components/handimage/ASL";

export default function Home() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [camState, setCamState] = useState("on");

  const [sign, setSign] = useState(null);

  let signList = [];
  let currentSign = 0;
  let nameOfSign = [];
  let gamestate = "started";

  // let net;

  async function runHandpose() {
    const net = await handpose.load();
    _signList();

    // window.requestAnimationFrame(loop);

    setInterval(() => {
      detect(net);
    }, 150);
  }
  function _signList() {
    signList = generateSigns();
    console.log(signList);
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function generateSigns() {
    const password = shuffle(Signpass);
    return password;
  }

  async function detect(net) {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        //loading the fingerpose model
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          Handsigns.aSign,
          Handsigns.bSign,
          Handsigns.cSign,
          Handsigns.dSign,
          Handsigns.eSign,
          Handsigns.fSign,
          Handsigns.gSign,
          Handsigns.hSign,
          Handsigns.iSign,
          Handsigns.jSign,
          Handsigns.kSign,
          Handsigns.lSign,
          Handsigns.mSign,
          Handsigns.nSign,
          Handsigns.oSign,
          Handsigns.pSign,
          Handsigns.qSign,
          Handsigns.rSign,
          Handsigns.sSign,
          Handsigns.tSign,
          Handsigns.uSign,
          Handsigns.vSign,
          Handsigns.wSign,
          Handsigns.xSign,
          Handsigns.ySign,
          Handsigns.z1Sign,
          Handsigns.z2Sign,
          Handsigns.z3Sign,
        ]);

        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);
        document.querySelector(".pose-data").innerHTML = JSON.stringify(
          estimatedGestures.poseData,
          null,
          2
        );

        if (gamestate === "started") {
          document.querySelector("#app-title").innerText =
            "Make a 👍 gesture with your hand to start";
        }

        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {
          const confidence = estimatedGestures.gestures.map(
            (p) => p.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(undefined, confidence)
          );

          //setting up game state, looking for thumb emoji
          if (
            estimatedGestures.gestures[maxConfidence].name === "thumbs_up" &&
            gamestate !== "played"
          ) {
            _signList();
            gamestate = "played";
            document.getElementById("emojimage").classList.add("play");
            document.querySelector(".tutor-text").innerText =
              "make a hand gesture based on letter shown below";
          } else if (gamestate === "played") {
            document.querySelector("#app-title").innerText = "";

            //looping the sign list
            if (currentSign === signList.length) {
              _signList();
              currentSign = 0;
              return;
            }

            //game play state

            if (
              typeof signList[currentSign].src === "string" ||
              signList[currentSign].src instanceof String
            ) {
              document
                .getElementById("emojimage")
                .setAttribute("src", signList[currentSign].src);
              if (signList[currentSign].alt.length > 2) {
                nameOfSign.push =
                  estimatedGestures.gestures[maxConfidence].name;
                console.log(nameOfSign);
                if (signList[currentSign].alt.length < nameOfSign.length) {
                  nameOfSign = [];
                }
                if (signList[currentSign].alt === nameOfSign) {
                  currentSign++;
                  nameOfSign = [];
                }
              } else if (
                signList[currentSign].alt ===
                estimatedGestures.gestures[maxConfidence].name
              ) {
                currentSign++;
              }
              setSign(estimatedGestures.gestures[maxConfidence].name);
            }
          } else if (gamestate === "finished") {
            return;
          }
        }
      }
      // Draw hand lines
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  }

  // if (sign) {
  //   console.log(sign, Signimage[sign]);
  // }

  useEffect(() => {
    runHandpose();
  }, []);

  function turnOffCamera() {
    if (camState === "on") {
      setCamState("off");
    } else {
      setCamState("on");
    }
  }

  return (
    <ChakraProvider>
      <Box bgColor="#5784BA">
        <Container centerContent maxW="xl" height="100vh" pt="0" pb="0">
          <VStack spacing={4} align="center">
            <Box h="20px"></Box>
            <Heading
              as="h3"
              size="md"
              className="tutor-text"
              color="white"
              textAlign="center"
            ></Heading>
            <Box h="20px"></Box>
          </VStack>

          <Heading
            as="h1"
            size="lg"
            id="app-title"
            color="white"
            textAlign="center"
          >
            <span role="img" aria-label="Snowman">
              &#9731;
            </span>
            Loading the Magic{" "}
            <span role="img" aria-label="Snowman">
              &#9731;
            </span>
          </Heading>

          <Box id="webcam-container">
            {camState === "on" ? (
              <Webcam id="webcam" ref={webcamRef} />
            ) : (
              <div id="webcam" background="black"></div>
            )}

            {sign ? (
              <div
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  right: "calc(50% - 50px)",
                  bottom: 100,
                  textAlign: "-webkit-center",
                }}
              >
                <Text color="white" fontSize="sm" mb={1}>
                  detected gestures
                </Text>
                <img
                  alt="signImage"
                  src={Signimage[sign] ? Signimage[sign] : "/loveyou_emoji.svg"}
                  style={{
                    height: 30,
                  }}
                />
              </div>
            ) : (
              " "
            )}
          </Box>

          <canvas id="gesture-canvas" ref={canvasRef} style={{}} />

          <Box
            id="singmoji"
            style={{
              zIndex: 9,
              position: "fixed",
              top: "50px",
              right: "30px",
            }}
          ></Box>

          <Image h="150px" objectFit="cover" id="emojimage" />
          <pre
            className="pose-data"
            color="white"
            style={{
              position: "fixed",
              top: "150px",
              left: "10px",
              zIndex: 200,
            }}
          >
            Pose data
          </pre>
        </Container>

        <Stack id="start-button" spacing={4} direction="row" align="center">
          <Button
            leftIcon={
              camState === "on" ? (
                <RiCameraFill size={20} />
              ) : (
                <RiCameraOffFill size={20} />
              )
            }
            onClick={turnOffCamera}
            colorScheme="orange"
          >
            Camera
          </Button>
        </Stack>
      </Box>
    </ChakraProvider>
  );
}
