import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Figma", value: 30, years: 5, color: "#1E88E5" },
  { name: "User Testing", value: 20, years: 5, color: "#8E24AA" },
  { name: "Web Design", value: 20, years: 3, color: "#43A047" },
  { name: "Miro", value: 10, years: 5, color: "#FB8C00" },
  { name: "SaaS", value: 20, years: 4, color: "#BDBDBD" },
];

export default function TopSkills() {
  return (
    <div className="p-4 bg-body rounded shadow-sm">
      <h5 className="fw-bold mb-1">Top skills</h5>
      <small className="text-body-secondary d-block mb-4">Verified by</small>

      <div className="d-flex flex-wrap align-items-center">
        {/* Chart */}
        <div style={{ width: 180, height: 180 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div
            style={{
              position: "relative",
              top: "-120px",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          >
            <h5 className="fw-bold mb-0">{data.length}</h5>
            <small className="text-body-secondary">SKILLS</small>
          </div>
        </div>

        {/* Skills List */}
        <div className="flex-grow-1 ps-4">
          {data.map((skill, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between mb-2"
            >
              <div className="d-flex align-items-center">
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: skill.color,
                    marginRight: 8,
                  }}
                ></span>
                <span>
                  {skill.name} — {skill.years} years
                </span>
              </div>
              <span className="text-body-secondary small">{skill.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}