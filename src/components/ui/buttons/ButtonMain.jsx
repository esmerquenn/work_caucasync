"use client";
import React from "react";

import { Button } from "../button";
const ButtonMain = ({ text }) => {
  return (
    <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-[30px] text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
      {text}
    </Button>
  );
};

export default ButtonMain;
