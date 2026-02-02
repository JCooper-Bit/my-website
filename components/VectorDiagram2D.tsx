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
  show_theta?: boolean

}

export default function VectorDiagram2D({
  width = 900,
  height = 520,
  range = 10,
  vectors = [{ x: 2, y: 6, label: "u", color: "#a78bfa" }],
  show_decomp = false,
  show_theta = true,
}: Props) {
  // Co ords to SVG co ords
  const sx = (x: number) => ((x + range) / (2 * range)) * width
  const sy = (y: number) => ((range - y) / (2 * range)) * height

  const origin = { x: sx(0), y: sy(0) }
  const gridLines = 2 * range

  // helper for magnitude label
  const mag = (x: number, y: number) => Math.sqrt(x * x + y * y)

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full rounded-2xl bg-surface/80 border border-primary/20"
    >
<defs>
  {vectors.map((v, i) => (
    <marker
      key={i}
      id={`arrow-${i}`}
      viewBox="0 0 10 10"
      refX="9"
      refY="5"
      markerWidth="5"
      markerHeight="5"
      orient="auto"
    >
      <path
        d="M 0 0 L 10 5 L 0 10 z"
        fill={v.color ?? "#22d3ee"}
      />
    </marker>
  ))}
</defs>



      {/* Grid */}
      {Array.from({ length: gridLines + 1 }).map((_, i) => {
        const val = i - range
        return (
          <g key={val}>
            <line x1={sx(val)} y1={0} x2={sx(val)} y2={height} stroke="#a6adc8" opacity={0.35} />
            <line x1={0} y1={sy(val)} x2={width} y2={sy(val)} stroke="#a6adc8" opacity={0.35} />
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
          stroke="#ffffff5a"
          opacity={1}
          strokeWidth={2}
        />
        <line
          x1={origin.x}
          y1={sy(-range)}
          x2={origin.x}
          y2={sy(range)}
          stroke="#ffffff5a"
          opacity={1}
          strokeWidth={2}
        />
      </g>

      {/* Vectors */}
      {vectors.map((v, i) => {
        const x2 = sx(v.x)
        const y2 = sy(v.y)
        const color = v.color ?? "#89b4fa"
        const label = v.label ?? `v${i + 1}`

        // midpoint (for |v| label)
        const midx = (origin.x + x2) / 2
        const midy = (origin.y + y2) / 2

        // offset a bit "above" the vector (perpendicular direction)
        const dx = x2 - origin.x
        const dy = y2 - origin.y
        const len = Math.sqrt(dx * dx + dy * dy) || 1
        const nx = -dy / len // perpendicular unit normal
        const ny = dx / len

        const magText = `|${label}| = ${mag(v.x, v.y).toFixed(2)}`

        return (
          <g key={i} style={{ color }}>
            {/* main vector */}
            <line
              x1={origin.x}
              y1={origin.y}
              x2={x2}
              y2={y2}
              strokeWidth={2.5}
              stroke={color}
              markerEnd={`url(#arrow-${i})`}

            />

            {/* vector label near tip */}
            <text
              x={x2 + 10}
              y={y2 - 10}
              fontSize="16"
              fill="currentColor"
              opacity={0.95}
            >
              {label}
            </text>

            {/* decomposition */}
            {show_decomp && (
              <g>
                {/* x component dashed */}
                <line
                  x1={origin.x}
                  y1={origin.y}
                  x2={x2}
                  y2={origin.y}
                  stroke="currentColor"
                  opacity={0.85}
                  strokeWidth={2}
                  strokeDasharray="8 8"
                />

                {/* y component dashed */}
                <line
                  x1={x2}
                  y1={origin.y}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  opacity={0.85}
                  strokeWidth={2}
                  strokeDasharray="8 8"
                />

                {/* |vector| label above vector */}
                <text
                  x={midx + nx * 18}
                  y={midy + ny * 18}
                  fontSize="13"
                  fill="currentColor"
                  opacity={0.95}
                >
                  {magText}
                </text>

                {/* x component label */}
                <text
                  x={(origin.x + x2) / 2}
                  y={origin.y + 20}
                  fontSize="13"
                  fill="currentColor"
                  opacity={0.9}
                  textAnchor="middle"
                >
                  {label}
                  <tspan baselineShift="sub" fontSize="10">
                    x
                  </tspan>
                  {` = ${v.x.toFixed(2)}`}
                </text>

                {/* y component label */}
                <text
                  x={x2 + 10}
                  y={(origin.y + y2) / 2}
                  fontSize="13"
                  fill="currentColor"
                  opacity={0.9}
                  dominantBaseline="middle"
                >
                  {label}
                  <tspan baselineShift="sub" fontSize="10">
                    y
                  </tspan>
                  {` = ${v.y.toFixed(2)}`}
                </text>
              </g>
)}

          </g>
        )

      })}
    </svg>
  )
}
