import * as React from 'react'
import { motion } from 'framer-motion'
import NavLink from 'components/NavLink'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ children, href }) => {
  return (
    <motion.li
      className="flex"
      variants={variants}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
    >
      <NavLink
        href={href}
        className="font-primary font-bold text-lg leading-xl text-gray-50 hover:text-white">
        {children}
      </NavLink>
    </motion.li>
  )
}
