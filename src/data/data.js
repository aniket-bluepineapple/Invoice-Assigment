import React from "react"
import { FaTwitter } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"
import {phoneClient} from "./../components/App"
export const navbar = [
  {
    id: uuidv4(),
    title: "Whatsapp",
    url: `https://wa.me/91{phoneClient}`,
  },
  {
    id: uuidv4(),
    title: "About Invoicer",
    url: "/about",
  },
  {
    id: uuidv4(),
    title: "Suggestion Box",
    url: "/suggestion-box",
  },
]

