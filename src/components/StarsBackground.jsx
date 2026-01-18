import { useEffect, useRef } from 'react'

export default function StarsBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const stars = []
    const numStars = 100
    const shootingStarChance = 0.0005

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5
        this.opacity = Math.random() * 0.5 + 0.3
        this.twinkleSpeed = Math.random() * 0.02 + 0.01
        this.twinkleOffset = Math.random() * Math.PI * 2
      }

      update() {
        this.opacity = 0.3 + Math.sin(Date.now() * this.twinkleSpeed + this.twinkleOffset) * 0.2
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    class ShootingStar {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = -10
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = Math.random() * 3 + 2
        this.length = Math.random() * 50 + 20
        this.opacity = 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.opacity -= 0.02
      }

      draw() {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x - this.speedX * this.length, this.y - this.speedY * this.length)
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      isOffScreen() {
        return this.y > canvas.height || this.x < 0 || this.x > canvas.width || this.opacity <= 0
      }
    }

    for (let i = 0; i < numStars; i++) {
      stars.push(new Star())
    }

    const shootingStars = []

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.update()
        star.draw()
      })

      if (Math.random() < shootingStarChance) {
        shootingStars.push(new ShootingStar())
      }

      shootingStars.forEach((star, index) => {
        star.update()
        star.draw()
        if (star.isOffScreen()) {
          shootingStars.splice(index, 1)
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-0"
      aria-hidden="true"
    />
  )
}
