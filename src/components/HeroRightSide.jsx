import React from 'react';
import { motion } from 'framer-motion';
import comdataLogo from '../assets/logos/ComdataLOGO-D-Ljkg_D.png';

export default function HeroRightSide() {
  return (
    <div
                        className="relative w-full h-full"
                        style={{'minHeight': '350px', 'minWidth': '350px'}}
                      >
                              {/* Rotating dashed ring */}
      <motion.div
        className="absolute"
        style={{ left: '192px', top: '200px', width: '200px', height: '200px', zIndex: 10, pointerEvents: 'none' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#00aeef" strokeWidth="1" strokeDasharray="10 15" opacity="0.6" />
          <circle cx="100" cy="100" r="85" fill="none" stroke="#00aeef" strokeWidth="1" strokeDasharray="4 20" opacity="0.4" />
        </svg>
      </motion.div>
      
<svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          style={{'zIndex': '1'}}
                        >
                          <defs>
                            <filter id="glow">
                              <feGaussianBlur
                                stdDeviation="3"
                                result="coloredBlur"
                              ></feGaussianBlur>
                              <feMerge>
                                <feMergenode in="coloredBlur"></feMergenode>
                                <feMergenode in="SourceGraphic"></feMergenode>
                              </feMerge>
                            </filter>
                            <marker
                              id="arrowhead"
                              markerWidth="10"
                              markerHeight="7"
                              refX="9"
                              refY="3.5"
                              orient="auto"
                            >
                              <polygon
                                points="0 0, 10 3.5, 0 7"
                                fill="rgba(156, 163, 175, 0.8)"
                              ></polygon>
                            </marker>
                            <marker
                              id="arrowhead-end"
                              markerWidth="10"
                              markerHeight="7"
                              refX="1"
                              refY="3.5"
                              orient="auto"
                            >
                              <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                                 cx="3.5"
                                cy="3.5"
                                r="3"
                                fill="rgba(156, 163, 175, 0.8)"
                              ></motion.circle>
                            </marker>
                          </defs>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 420.48 300 L 356.24 300 L 356.24 300 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="356.24"
                              cy="300"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="373.5527916002908"
                              cy="300"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 356.24 411.26694387822465 L 356.24 355.6334719391123 L 292 355.6334719391123 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="356.24"
                              cy="364.9881866621143"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="326.994487291581"
                              cy="355.6334719391123"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="302.80633013149674"
                              cy="355.6334719391123"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 356.24 411.26694387822465 L 356.24 355.6334719391123 L 420.48 355.6334719391123 L 420.48 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="359.24483454879584"
                              cy="355.6334719391123"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 227.76000000000005 411.26694387822465 L 227.76000000000005 355.6334719391123 L 292 355.6334719391123 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="268.9416056074673"
                              cy="355.6334719391123"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 227.76000000000005 411.26694387822465 L 324.12 411.26694387822465 L 324.12 300 L 420.48 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="324.12"
                              cy="322.93805830188"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="366.63799661624904"
                              cy="300"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="324.12"
                              cy="362.51696716538225"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 163.52 300 L 227.76 300 L 227.76 300 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="209.76008025753342"
                              cy="300"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 163.52 300 L 292 300 L 292 300 L 420.48 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="292"
                              cy="300"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="420.42114518974086"
                              cy="300"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 227.75999999999993 188.73305612177535 L 227.75999999999993 244.36652806088767 L 292 244.36652806088767 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="4"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="1"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="227.75999999999993"
                              cy="211.63277544578204"
                              r="4"
                              fill="#00aeef"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 227.75999999999993 188.73305612177535 L 227.75999999999993 300 L 356.24 300 L 356.24 411.26694387822465"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="4"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="1"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="227.75999999999993"
                              cy="251.49068237704614"
                              r="4"
                              fill="#00aeef"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="356.24"
                              cy="387.25144447300084"
                              r="4"
                              fill="#00aeef"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="356.24"
                              cy="387.85277244818474"
                              r="4"
                              fill="#00aeef"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 356.24 188.73305612177535 L 356.24 244.36652806088767 L 292 244.36652806088767 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="356.24"
                              cy="201.18230965069648"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="356.24"
                              cy="229.97997610687463"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 356.24 188.73305612177535 L 356.24 300 L 227.76000000000005 300 L 227.76000000000005 411.26694387822465"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="227.76000000000005"
                              cy="304.6678580917881"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 469.01559253353923 402.2 L 380.5077962667696 402.2 L 380.5077962667696 300 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="380.5077962667696"
                              cy="375.04969900806157"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 292 504.4 L 292 402.2 L 292 402.2 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="292"
                              cy="407.55760174130387"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="292"
                              cy="300.8142391285157"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="292"
                              cy="402.2"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 292 504.4 L 292 402.2 L 420.48 402.2 L 420.48 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="298.68277195219184"
                              cy="402.2"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="420.48"
                              cy="312.21852306375195"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="420.48"
                              cy="347.470866210753"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 114.98440746646074 402.2 L 203.49220373323038 402.2 L 203.49220373323038 300 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="203.49220373323038"
                              cy="329.75059262028964"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 114.98440746646077 197.79999999999998 L 203.49220373323038 197.79999999999998 L 203.49220373323038 300 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="211.0750586787302"
                              cy="300"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="202.50966258013193"
                              cy="197.79999999999998"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 291.99999999999994 95.60000000000002 L 291.99999999999994 197.8 L 292 197.8 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="291.99999999999994"
                              cy="100.31238962846734"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="292"
                              cy="211.75087479571533"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="292"
                              cy="197.8"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 291.99999999999994 95.60000000000002 L 291.99999999999994 197.8 L 420.48 197.8 L 420.48 300"
                              stroke="rgba(0, 174, 239, 0.9)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="url(#glow)"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="420.48"
                              cy="283.1195048859519"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="url(#glow)"
                            ></motion.circle>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="291.99999999999994"
                              cy="110.77492142030658"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="url(#glow)"
                            ></motion.circle>
                          </g>
                          <g>
                            <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                               d="M 469.0155925335392 197.79999999999993 L 380.50779626676956 197.79999999999993 L 380.50779626676956 300 L 292 300"
                              stroke="rgba(156, 163, 175, 0.8)"
                              strokeWidth="1.25"
                              fill="none"
                              filter="none"
                              markerStart="url(#arrowhead-end)"
                              markerEnd="url(#arrowhead)"
                              opacity="0.15"
                              pathLength="1"
                              strokeDashoffset="0px"
                              strokeDasharray="1px 1px"
                            ></motion.path>
                            <motion.circle
initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }}                               cx="457.15829826286733"
                              cy="197.79999999999993"
                              r="2"
                              fill="rgba(156, 163, 175, 0.9)"
                              filter="none"
                            ></motion.circle>
                          </g>
                        </svg>
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{'zIndex': '20', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div className="relative">
                            <div
                              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 md:border-4 border-gray-200"
                            >
                              <img
                                alt="Center Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain"
                                src={comdataLogo}
                              />
                            </div>
                            <div
                              className="absolute inset-0 rounded-full border-1 md:border-2 border-[#00aeef] opacity-60 animate-ping"
                            ></div>
                            <div
                              className="absolute inset-0 rounded-full border-1 md:border-2 border-[#00aeef]/60 opacity-40 animate-ping"
                              style={{'animationDelay': '1s'}}
                            ></div>
                            <div
                              className="absolute inset-0 rounded-full border-1 md:border-2 border-[#00aeef]/30 opacity-30 animate-ping"
                              style={{'animationDelay': '2s'}}
                            ></div>
                          </div>
                        </div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '400.48px', 'top': '280px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-cpu transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M12 20v2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M12 2v2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M17 20v2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M17 2v2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M2 12h2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M2 17h2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M2 7h2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M20 12h2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M20 17h2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M20 7h2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M7 20v2"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M7 2v2"></motion.path>
                              <rect
                                x="4"
                                y="4"
                                width="16"
                                height="16"
                                rx="2"
                              ></rect>
                              <rect
                                x="8"
                                y="8"
                                width="8"
                                height="8"
                                rx="1"
                              ></rect>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '336.24px', 'top': '391.267px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-database transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M3 5V19A9 3 0 0 0 21 19V5"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M3 12A9 3 0 0 0 21 12"></motion.path>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '207.76px', 'top': '391.267px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-globe transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <motion.circle initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }} cx="12" cy="12" r="10"></motion.circle>
                              <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                                 d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                              ></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M2 12h20"></motion.path>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '143.52px', 'top': '280px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-smartphone transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <rect
                                width="14"
                                height="20"
                                x="5"
                                y="2"
                                rx="2"
                                ry="2"
                              ></rect>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M12 18h.01"></motion.path>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '207.76px', 'top': '168.733px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-wifi transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M12 20h.01"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M2 8.82a15 15 0 0 1 20 0"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M5 12.859a10 10 0 0 1 14 0"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="M8.5 16.429a5 5 0 0 1 7 0"></motion.path>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '336.24px', 'top': '168.733px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-cloud transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                                 d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                              ></motion.path>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '449.016px', 'top': '382.2px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-server transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <rect
                                width="20"
                                height="8"
                                x="2"
                                y="2"
                                rx="2"
                                ry="2"
                              ></rect>
                              <rect
                                width="20"
                                height="8"
                                x="2"
                                y="14"
                                rx="2"
                                ry="2"
                              ></rect>
                              <line x1="6" x2="6.01" y1="6" y2="6"></line>
                              <line x1="6" x2="6.01" y1="18" y2="18"></line>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '272px', 'top': '484.4px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-monitor transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <rect
                                width="20"
                                height="14"
                                x="2"
                                y="3"
                                rx="2"
                              ></rect>
                              <line x1="8" x2="16" y1="21" y2="21"></line>
                              <line x1="12" x2="12" y1="17" y2="21"></line>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '94.9844px', 'top': '382.2px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-zap transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                                 d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                              ></motion.path>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '94.9844px', 'top': '177.8px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="m16 18 6-6-6-6"></motion.path>
                              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }} d="m8 6-6 6 6 6"></motion.path>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '272px', 'top': '75.6px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-shield transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                                 d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                              ></motion.path>
                            </svg>
                          </div>
                        </motion.div>
                        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 1.5, type: "spring" }} className="absolute cursor-pointer"
                          style={{'left': '449.016px', 'top': '177.8px', 'zIndex': '15', 'opacity': '1', 'transform': 'none'}}
                        >
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 shadow-xl border-gray-200"
                            style={{'backgroundColor': 'rgba(255, 255, 255, 0.95)', 'boxShadow': 'rgba(255,255,255,0.15) 0px 0px 15px, rgba(0,0,0,0.3) 0px 6px 20px, rgba(0,0,0,0.2) 0px 3px 8px', 'transform': 'scale(1)'}}
                          >
                            <svg
                              
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-settings transition-all duration-500 text-gray-700"
                              aria-hidden="true"
                              style={{'filter': 'none'}}
                            >
                              <motion.path
initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeInOut" }}                                 d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                              ></motion.path>
                              <motion.circle initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }} transition={{ duration: 1, delay: 1 }} cx="12" cy="12" r="3"></motion.circle>
                            </svg>
                          </div>
                        </motion.div>
                      </div>
  );
}
