type Vec2 = {
  x: number
  y: number
  label?: string
  color?: string
}

type Props = {
  width?: number
  height?: number
  range?: number
  vectors?: Vec2[]
  title?: string
  subtitle?: string
  show_decomp?: boolean
}

export default function VectorDiagram2D({
  width = 900,
  height = 520,
  range = 10,
  title = "Vector",
  subtitle = "",
  vectors = [
    { x: 2, y: 6, label: "u", color: "#a78bfa" }, // violet
  ],
  show_decomp = false
}: Props) {
  // Co ords to SVG co ords
  const sx = (x: number) => ((x + range) / (2 * range)) * width
  const sy = (y: number) => ((range - y) / (2 * range)) * height

  const origin = { x: sx(0), y: sy(0) }
  const gridLines = 2 * range

  return (

    <svg viewBox={`0 0 ${width} ${height}`} className="w-full rounded-2xl bg-surface/80 border border-primary/25 p-5">
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* Title */}

      {/* Grid */}
      {Array.from({ length: gridLines + 1 }).map((_, i) => {
        let val: any = i - range
        return (
          <g id={val}>
            <line
              x1={sx(val)}
              y1={0}
              x2={sx(val)}
              y2={height}
              stroke="#a6adc8"
            />

            <line
              x1={0}
              y1={sy(val)}
              x2={width}
              y2={sy(val)}
              stroke="#a6adc8"
            />
          </g>


        )
      })}
      {/* Axes */}
      <g>
        <line
          x1={sx(-range)}
          y1={origin.y}
          x2={sx(range)}
          y2={origin.y}
          stroke="#ffffff"
          opacity={0.55}
          strokeWidth={2}
        />
        <line
          x1={origin.x}
          y1={sy(-range)}
          x2={origin.x}
          y2={sy(range)}
          stroke="#ffffff"
          opacity={0.55}
          strokeWidth={2}
        />
      </g>
      {/* Vectors */}
      {vectors.map((v, i) => {
        const x2 = sx(v.x)
        const y2 = sy(v.y)
        const color = v.color ?? "#22d3ee"

        return (
          <g key={i} style={{ color }}>
            <line
              x1={origin.x}
              y1={origin.y}
              x2={x2}
              y2={y2}
              strokeWidth={2.5}
              stroke="currentColor"
              markerEnd="url(#arrow)"
            />
            show_decomp ? <g>
              <line
                stroke-dasharray="15,10" d="M5 60 l215 0"

                x1={origin.x}
                y1={origin.y}
                x2={x2}
                y2={origin.y}
                stroke={color}
                opacity={1}
                strokeWidth={2}
              />
              <line
                stroke-dasharray="15,10" d="M5 60 l215 0"

                x1={x2}
                y1={origin.y}
                x2={x2}
                y2={y2}
                stroke={color}
                opacity={1}
                strokeWidth={2}
              />
            </g> : <g></g>
          </g>
        )
      })}
      { }
    </svg>
  )
}
