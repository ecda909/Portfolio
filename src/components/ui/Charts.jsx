import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

const ACCENTS = {
  orange: '#f97641',
  purple: '#4429d5',
  green: '#05df72',
};
const CYCLE = [ACCENTS.orange, ACCENTS.purple, ACCENTS.green];

// Render charts only after mount — avoids SSR measurement warnings in Gatsby.
const useMounted = () => {
  const [m, setM] = useState(false);
  useEffect(() => setM(true), []);
  return m;
};

const mono = { fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, fill: '#0a0a0a' };

// Horizontal capabilities bar chart (proficiency 0–100)
export const CapabilitiesChart = ({ data = [] }) => {
  const mounted = useMounted();
  const height = data.length * 52 + 20;
  if (!mounted) return <div style={{ height }} aria-hidden />;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 4, right: 44, bottom: 4, left: 8 }}
        barCategoryGap={14}
      >
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis
          type="category"
          dataKey="name"
          width={200}
          tickLine={false}
          axisLine={{ stroke: '#000' }}
          tick={{ ...mono }}
        />
        <Bar dataKey="value" isAnimationActive={mounted} radius={0}>
          {data.map((d, i) => (
            <Cell key={d.name} fill={CYCLE[i % CYCLE.length]} />
          ))}
          <LabelList
            dataKey="value"
            position="right"
            formatter={(v) => `${v}`}
            style={{ ...mono, fontSize: 11 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const compact = (v) => (v >= 1000 ? `${(v / 1000).toFixed(v < 10000 ? 1 : 0)}K` : `${v}`);

// Compact vertical bar chart for per-project metrics, with a value row beneath
// (vertical-bar LabelList is unreliable in recharts v3, so values render as HTML).
export const MiniBarChart = ({ data = [], accent = 'orange' }) => {
  const mounted = useMounted();
  if (!mounted) return <div style={{ height: 132 }} aria-hidden />;

  return (
    <div className="minichart">
      <ResponsiveContainer width="100%" height={108}>
        <BarChart data={data} margin={{ top: 6, right: 6, bottom: 2, left: 6 }} barCategoryGap="24%">
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={{ stroke: '#000' }}
            tick={{ ...mono, fontSize: 10 }}
            interval={0}
          />
          <YAxis hide />
          <Bar dataKey="value" fill={ACCENTS[accent] || ACCENTS.orange} radius={0} isAnimationActive={mounted} />
        </BarChart>
      </ResponsiveContainer>
      <div className="minichart__values">
        {data.map((d) => (
          <span key={d.name}>{compact(d.value)}</span>
        ))}
      </div>
    </div>
  );
};
