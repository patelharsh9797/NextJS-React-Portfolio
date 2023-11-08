"use client"

import { motion } from "framer-motion"


export function MotionDiv({ children, ...props }) {
    return <motion.div {...props}>{children}</motion.div>
}

export function MotionSection({ children, ...props }) {
    return <motion.section {...props}>{children}</motion.section>
}
