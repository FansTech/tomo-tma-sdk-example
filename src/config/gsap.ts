import { gsap } from 'gsap/dist/gsap'
import { useGSAP } from '@gsap/react/dist'
import { Flip } from 'gsap/dist/Flip'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Observer } from 'gsap/dist/Observer'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import { EaselPlugin } from 'gsap/dist/EaselPlugin'
import { TextPlugin } from 'gsap/dist/TextPlugin'

gsap.registerPlugin(
  useGSAP,
  Flip,
  ScrollTrigger,
  Observer,
  MotionPathPlugin,
  EaselPlugin,
  TextPlugin
)

export default gsap
