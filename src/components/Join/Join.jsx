import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// css
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <motion.div
        initial={{ y: "200%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
        className="joinInnerContainer"
      >
        <h1 className="heading">Join</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="joinInput"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter room name"
            required
            className="joinInput mt-20"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Join
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Join;
