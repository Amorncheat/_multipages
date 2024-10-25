import React, { useState, useEffect } from "react";
import "./Animation.css";

const Animation = () => {
  const areaWidth = 800;
  const areaHeight = 400;
  const objectSize = 150;
  const boundaryX = areaWidth - objectSize - 6;
  const boundaryY = areaHeight - objectSize - 6;

  const [isActive, setIsActive] = useState(false);
  const [moveRight, setMoveRight] = useState(true);
  const [moveDown, setMoveDown] = useState(true);
  const [positionX, setPositionX] = useState((areaWidth - objectSize) / 2);
  const [positionY, setPositionY] = useState((areaHeight - objectSize) / 2);
  const [rotation, setRotation] = useState(0);
  const [spinSpeed, setSpinSpeed] = useState(Math.floor(Math.random() * 10 + 4));
  const [shapeType, setShapeType] = useState("None");

  const shapes = {
    None: {
      backgroundImage: "",
      objectImage: ""
    },
    Basketball: {
      backgroundImage: "url('img/bg/field wood.jpg')",
      objectImage: "url('img/pic/basketball.png')"
    },
    Football: {
      backgroundImage: "url('img/bg/depositphotos_45100801-stock-illustration-fresh-grass-seamless-vector-pattern.jpg')",
      objectImage: "url('img/pic/football.png')"
    },
    Volleyball: {
      backgroundImage: "url('img/bg/istockphoto-450802081-612x612.jpg')",
      objectImage: "url('img/pic/volleyball.png')"
    },
    Human: {
      backgroundImage: "url('img/bg/2146731.webp')",
      objectImage: "url('img/pic/human.jpg')"
    },
    Cartoon: {
      backgroundImage: "url('img/bg/cartoon.jpg')",
      objectImage: "url('img/pic/girl.jpg')"
    },
    Logo: {
      backgroundImage: "url('img/bg/pngtree-game-space-meteor-picture-image_2444928.jpg')",
      objectImage: "url('img/pic/logo.png')"
    },
  };

  const { backgroundImage, objectImage } = shapes[shapeType];

  const updateCoordinates = () => {
    let newX = moveRight ? positionX + 8 : positionX - 8;
    let newY = moveDown ? positionY + 8 : positionY - 8;

    if (newX >= boundaryX || newX <= 6) {
      setMoveRight(!moveRight);
      setSpinSpeed(Math.floor(Math.random() * 10 + (moveRight ? -4 : 4)));
    }

    if (newY >= boundaryY || newY <= 6) {
      setMoveDown(!moveDown);
      setSpinSpeed(Math.floor(Math.random() * 10 + (moveDown ? -4 : 4)));
    }

    setPositionX(newX);
    setPositionY(newY);
    setRotation((prev) => prev + spinSpeed);
  };

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(updateCoordinates, 40);
      return () => clearInterval(intervalId);
    }
  }, [isActive, positionX, positionY, moveRight, moveDown, spinSpeed]);

  const toggleMotion = () => setIsActive((prev) => !prev);

  return (
    <div className="animation-container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="area-display"
          style={{
            width: areaWidth,
            height: areaHeight,
            position: "relative",
            border: "1px solid black",
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundImage: backgroundImage,
            margin: "10px",
            borderRadius: "5px",
          }}
        >
          <div
            className={shapeType !== "None" ? `object-${shapeType.toLowerCase()}` : "object-none"}
            style={{
              border: "1px solid black",
              borderRadius: "50%",
              width: objectSize,
              height: objectSize,
              left: positionX,
              top: positionY,
              position: "absolute",
              transform: `rotate(${rotation}deg)`,
              backgroundImage: objectImage,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div>
        <button
          className={`mx-4 btn ${isActive ? "btn-danger" : "btn-success"}`}
          onClick={toggleMotion}
        >
          <span className={`bi ${isActive ? "bi-pause" : "bi-play"}`}>
            &nbsp;{isActive ? "PAUSE" : "RUN"}
          </span>
        </button>
        {Object.keys(shapes).map((type, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id={`shapeType${index + 1}`}
              autoComplete="off"
              checked={shapeType === type}
              onChange={() => setShapeType(type)}
            />
            <label
              className={`mx-1 btn btn-outline-${type === "None" ? "secondary" : "primary"}`}
              htmlFor={`shapeType${index + 1}`}
            >
              {type}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Animation;
