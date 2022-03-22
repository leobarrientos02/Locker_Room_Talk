import React from "react";
import { motion } from "framer-motion";
import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <motion.div
    className="textContainer"
    animate={{ x: 0 }}
    initial={{ x: "100%" }}
    transition={{ duration: 0.5 }}
  >
    <div>
      <h1 className="textContainerTitle">
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
    </div>
    {users ? (
      <div>
        <h1 className="textContainerOnline">Online Users:</h1>
        <div className="activeContainer">
          <h2 className="onlineUsers">
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </motion.div>
);

export default TextContainer;
